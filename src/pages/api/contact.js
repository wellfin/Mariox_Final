import nodemailer from "nodemailer";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map();

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

    // Honeypot: real users never fill this hidden field, bots often do
    if (company) {
      return res.status(200).json({ message: "Email sent successfully" });
    }

    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.socket.remoteAddress;
    if (isRateLimited(ip)) {
      return res.status(429).json({ message: "Too many requests. Please try again later." });
    }

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      family: 4,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Prepare email content
    const selectedServices = Object.entries(services)
      .filter(([, value]) => value)
      .map(([key]) => key)
      .join(", ");

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
                  <td>${selectedServices || "None selected"}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold;">Page URL:</td>
                  <td><a href="${pageUrl}" style="color: #3498db;">${pageUrl}</a></td>
                </tr>
              </table>
              
              <h2 style="color: #2c3e50; margin-top: 20px;">Message:</h2>
              <p style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;">${message}</p>
              
              <p style="margin-top: 20px; font-size: 14px; color: #7f8c8d;">This is an automated email sent from your website's contact form.</p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: "New Contact Form Submission",
      html: htmlTemplate,
      text: `
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        Interested in: ${selectedServices}
        Page URL: ${pageUrl}
        Message: ${message}
      `, // Plain text version for email clients that don't support HTML
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
                  <td>${selectedServices || "None selected"}</td>
                </tr>
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
      text: `Hi ${name},\n\nThank you for contacting Mariox. We have received your inquiry and our team will get back to you shortly.\n\nHere's a summary of your submission:\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\nServices: ${selectedServices || "None selected"}\n\nYour Message:\n${message}\n\nWe typically respond within 24 hours.\n\nBest regards,\nTeam Mariox`,
    };

    try {
      // Send notification email to the team & acknowledgement email to the user
      await Promise.all([
        transporter.sendMail(mailOptions),
        transporter.sendMail(ackMailOptions),
      ]);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
