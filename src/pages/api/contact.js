import nodemailer from "nodemailer";

// The enquiry also goes to the CRM. It runs here rather than in the browser so
// a CORS or DNS problem at that host can never surface as a page error, and so
// the endpoint is not exposed to visitors. Failures are logged, never fatal:
// the lead is already in the inbox by then.
async function forwardToCrm(lead, timeoutMs = 8000) {
  const base = process.env.INQUIRES_API_URL || process.env.NEXT_PUBLIC_BASE_INQUIRES_API_URL;
  if (!base) return false;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const r = await fetch(`${base}/user/inquires`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: controller.signal,
    });
    if (!r.ok) console.error("[lead] CRM responded", r.status);
    return r.ok;
  } catch (error) {
    console.error("[lead] CRM unreachable:", error.message);
    return false;
  } finally {
    clearTimeout(timer);
  }
}

// How long a visitor waits for a verdict on their enquiry. Long enough to
// catch the failures that happen at once — wrong credentials, a refused
// connection, a blocked port — and short enough that nobody watches a spinner
// while SMTP does its round trip. Anything still in flight when the response
// goes out keeps running: the site is a long-lived Node process under pm2, not
// a serverless function that freezes after replying.
const MAIL_GRACE_MS = 1200;

// Nobody reads the labels, types a name, an email and a phone number and hits
// send in under a second and a half. A script that loads the page, fills every
// input and submits does it in a fraction of that. Forms report how long they
// were on screen and anything faster than this is treated like a filled
// honeypot: accepted, never sent.
const MIN_FILL_MS = 1500;

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
// Offices and mobile networks share one IP, so this has to leave room for
// real visitors; the honeypot is what stops bots.
const RATE_LIMIT_MAX_REQUESTS = 20;
const requestLog = new Map();

// Built once and reused, so only the first enquiry after a restart pays for
// the TLS handshake and the login. Created lazily: importing this module must
// not open a socket.
let transporter = null;
function mailer() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: process.env.SMTP_SECURE === "true",
      family: 4,
      pool: true,
      maxConnections: 3,
      maxMessages: 50,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return transporter;
}

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, mobile, message, services, pageUrl, company } = req.body;
    // Extra context the forms send: what they picked, their budget and timeline,
    // which page and which form the enquiry came from.
    const { budget = "", timeline = "", source = "", subject = "" } = req.body;
    // The hire brief also carries the team they assembled and the seniority.
    const { team = "", seniority = "", companyName = "" } = req.body;
    // Careers applications go to the careers inbox. Only this fixed list is
    // allowed, so the endpoint can never be used to mail anyone else.
    const INBOXES = { "career@marioxsoftware.com": true };
    const recipient = INBOXES[req.body.to] ? req.body.to : process.env.TO_EMAIL;

    // Trap one: a hidden field a visitor can neither see nor tab into. Its
    // markup name is company_website so a browser autofill never offers to
    // put the real organisation in it; the payload key stays company.
    // Honeypot: real users never fill this hidden field, bots often do
    if (company) {
      return res.status(200).json({ message: "Email sent successfully" });
    }

    // Trap two: how long the form was open. The field is absent on the
    // newsletter — one email box a visitor can paste into and send almost at
    // once — and on anything posting straight to the API, so only a value that
    // is present and impossibly small counts against the sender.
    const { filledIn } = req.body;
    if (typeof filledIn === "number" && filledIn >= 0 && filledIn < MIN_FILL_MS) {
      // Logged with enough to recover the lead by hand if this ever fires on a
      // real visitor — the honeypot almost never does, a stopwatch might.
      console.warn(
        "[lead] dropped: form filled in", filledIn, "ms",
        JSON.stringify({ source, name, email, mobile }),
      );
      return res.status(200).json({ message: "Email sent successfully" });
    }

    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.socket.remoteAddress;
    if (isRateLimited(ip)) {
      return res.status(429).json({ message: "Too many requests. Please try again later." });
    }

    // Prepare email content
    const selectedServices = Object.entries(services || {})
      .filter(([, value]) => value)
      .map(([key]) => key)
      .join(", ");
    const safe = (v) => String(v == null ? "" : v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const messageHtml = safe(message).split("\n").join("<br>");
    // Rows that only appear when the form actually collected them.
    const row = (k, v) => `
                <tr>
                  <td style="font-weight: bold;">${k}:</td>
                  <td>${safe(v)}</td>
                </tr>`;
    const pageRow = `
                <tr>
                  <td style="font-weight: bold;">Page URL:</td>
                  <td><a href="${safe(pageUrl)}" style="color: #3498db;">${safe(pageUrl) || "—"}</a></td>
                </tr>`;
    const detailRows = [["Company", companyName], ["Team", team], ["Seniority", seniority], ["Budget", budget], ["Timeline", timeline], ["Enquiry about", subject]]
      .filter(([, v]) => v)
      .map(([k, v]) => row(k, v))
      .join("");
    // The team also sees which form the enquiry came from.
    const extraRows = detailRows + (source ? row("Form", source) : "");

    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td>
              <h1 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">New Contact Form Submission</h1>
              <p style="font-size: 16px;">You have received a new message from your website's contact form.</p>
              
              <h2 style="color: #2c3e50; margin-top: 20px;">Contact Details:</h2>
              <table width="100%" cellpadding="5" cellspacing="0" role="presentation" style="border-collapse: collapse;">
                <tr>
                  <td style="font-weight: bold; width: 100px;">Name:</td>
                  <td>${name}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold;">Email:</td>
                  <td><a href="mailto:${email}" style="color: #3498db;">${email}</a></td>
                </tr>
                <tr>
                  <td style="font-weight: bold;">Mobile:</td>
                  <td>${mobile}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold;">Services:</td>
                  <td>${safe(selectedServices) || "None selected"}</td>
                </tr>${extraRows}${pageRow}
              </table>
              
              <h2 style="color: #2c3e50; margin-top: 20px;">Message:</h2>
              <p style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; white-space: pre-line;">${messageHtml || "—"}</p>
              
              <p style="margin-top: 20px; font-size: 14px; color: #7f8c8d;">This is an automated email sent from your website's contact form.</p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: recipient,
      subject: source === "careers" ? "New Job Application" : "New Contact Form Submission",
      html: htmlTemplate,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Mobile: ${mobile}`,
        `Services: ${selectedServices || "None selected"}`,
        companyName ? `Company: ${companyName}` : "",
        team ? `Team: ${team}` : "",
        seniority ? `Seniority: ${seniority}` : "",
        budget ? `Budget: ${budget}` : "",
        timeline ? `Timeline: ${timeline}` : "",
        subject ? `Enquiry about: ${subject}` : "",
        source ? `Form: ${source}` : "",
        `Page URL: ${pageUrl || "—"}`,
        "",
        "Message:",
        message || "—",
      ].filter(Boolean).join("\n"), // Plain text version for email clients that don't support HTML
    };

    // Acknowledgement email to the user who submitted the form
    const ackHtmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting Mariox</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td>
              <h1 style="color: #2c3e50; border-bottom: 2px solid #E43C13; padding-bottom: 10px;">Thank You for Reaching Out!</h1>
              <p style="font-size: 16px;">Hi ${name},</p>
              <p style="font-size: 16px;">Thank you for contacting <strong>Mariox</strong>. We have received your inquiry and our team will get back to you shortly.</p>

              <h2 style="color: #2c3e50; margin-top: 20px;">Here's a summary of your submission:</h2>
              <table width="100%" cellpadding="5" cellspacing="0" role="presentation" style="border-collapse: collapse;">
                <tr>
                  <td style="font-weight: bold; width: 100px;">Name:</td>
                  <td>${name}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold;">Email:</td>
                  <td>${email}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold;">Mobile:</td>
                  <td>${mobile}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold;">Services:</td>
                  <td>${safe(selectedServices) || "None selected"}</td>
                </tr>${detailRows}${pageRow}
              </table>

              <h2 style="color: #2c3e50; margin-top: 20px;">Your Message:</h2>
              <p style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;">${message}</p>

              <p style="margin-top: 20px; font-size: 16px;">We will contact you shortly.</p>

              <p style="margin-top: 20px; font-size: 14px; color: #7f8c8d;">Best regards,<br><strong>Team Mariox</strong></p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const ackMailOptions = {
      from: process.env.FROM_EMAIL,
      to: email,
      subject:
        "Thank You for Contacting Mariox – We Have Received Your Inquiry",
      html: ackHtmlTemplate,
      text: [
        `Hi ${name},`,
        "",
        "Thank you for contacting Mariox. We have received your inquiry and our team will get back to you shortly.",
        "",
        "Here's a summary of your submission:",
        `Name: ${name}`,
        `Email: ${email}`,
        `Mobile: ${mobile}`,
        `Services: ${selectedServices || "None selected"}`,
        companyName ? `Company: ${companyName}` : "",
        team ? `Team: ${team}` : "",
        seniority ? `Seniority: ${seniority}` : "",
        budget ? `Budget: ${budget}` : "",
        timeline ? `Timeline: ${timeline}` : "",
        subject ? `Enquiry about: ${subject}` : "",
        `Page URL: ${pageUrl || "—"}`,
        "",
        "Your Message:",
        message || "—",
        "",
        "We typically respond within 24 hours.",
        "",
        "Best regards,",
        "Team Mariox",
      ]
        .filter(Boolean)
        .join("\n"),
    };

    const crmLead = {
      fullName: name,
      email,
      phoneNumber: mobile,
      slug: pageUrl || "",
      city: req.body.city || "",
      service: [subject, team, selectedServices].filter(Boolean).join(" · "),
      message,
    };

    // Send the team's copy and the acknowledgement. Some forms take a phone
    // number instead of an email; without an address there is nobody to
    // acknowledge, and sending anyway would fail the whole call and lose the
    // team's copy too.
    //
    // This promise never rejects: the outcome comes back as a value so the
    // same object can be inspected now and awaited again later.
    const delivery = (async () => {
      const smtp = mailer();
      const jobs = [smtp.sendMail(mailOptions)];
      if (email) jobs.push(smtp.sendMail(ackMailOptions));
      await Promise.all(jobs);
    })().then(() => ({ ok: true }), (error) => ({ ok: false, error }));

    let timer;
    const grace = new Promise((resolve) => { timer = setTimeout(() => resolve(null), MAIL_GRACE_MS); });
    const early = await Promise.race([delivery, grace]);
    clearTimeout(timer);

    if (early && early.ok) {
      res.status(200).json({ message: "Email sent successfully" });
      // Best-effort, after the visitor already has their confirmation.
      forwardToCrm(crmLead);
      return;
    }

    if (early) {
      // Failed straight away — the mail server is the usual suspect (bad
      // credentials, throttling, a blocked port). The visitor should not have
      // to send it twice: if the CRM takes the lead we still have it, so
      // treat that as success.
      console.error("[lead] Email failed:", early.error.code || "", early.error.message);
      const stored = await forwardToCrm(crmLead, 4000);
      if (stored) {
        res.status(200).json({ message: "Enquiry received", mail: false });
        return;
      }
      console.error("[lead] LOST ENQUIRY", JSON.stringify(crmLead));
      res.status(502).json({ message: "Could not send your enquiry", reason: early.error.code || "mail" });
      return;
    }

    // Still in flight. The visitor has waited long enough, so confirm now and
    // let the rest finish in the background — the app runs as a long-lived
    // process, so nothing is cut off when the response goes out. The CRM
    // fallback and the LOST ENQUIRY log still apply, they just happen after.
    res.status(200).json({ message: "Enquiry received", queued: true });
    delivery.then(async (result) => {
      if (result.ok) {
        forwardToCrm(crmLead);
        return;
      }
      console.error("[lead] Email failed after replying:", result.error.code || "", result.error.message);
      const stored = await forwardToCrm(crmLead, 8000);
      if (!stored) console.error("[lead] LOST ENQUIRY", JSON.stringify(crmLead));
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
