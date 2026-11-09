import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import El from '@/components/El';
import { Seo, JsonLd } from '@/components/sections';
import Nav from '@/components/final/Nav';
import Footer from '@/components/final/Footer';
import ProofBand from '@/components/final/ProofBand';
import { MONO, PAD, Em, Shell } from '@/components/final/ui';
import { useReveal } from '@/components/final/fx';
import { PHONE_LEN, DIAL_CODES } from '@/data/appDevelopmentLanding';
import { useFilledIn } from '@/lib/formGuard';
import { SITE_URL } from '@/data/site';

// "Book a free consultation" from the design's `book-consultation`: pick a
// topic, a weekday and an IST slot, then leave your details. The design posted
// to an external form service; here it goes through /api/contact like every
// other Mariox form, then on to /thank-you.

const TOPICS = ['New app or product', 'AI / automation', 'Improve an existing product', 'CRM / ERP', 'Hire a dedicated team', 'Something else'];
const SLOTS = ['10:00', '11:30', '13:00', '15:00', '16:30', '18:30', '20:30'];

const PERKS = [
  { t: 'Free.', b: 'No obligation, no follow-up spam.' },
  { t: 'Senior.', b: 'A founder or architect on the call, not sales.' },
  { t: 'Private.', b: 'We sign your NDA before you share details.' },
  { t: 'Useful.', b: 'A written summary of our advice afterwards.' },
];

const AGENDA = [
  { m: '10 min', t: 'Your goals', b: 'What you want to build, who it is for, what success looks like and any deadline that matters.' },
  { m: '15 min', t: 'Options and approach', b: 'Build, buy or integrate. The stack we would choose, the risks we see and how we would de-risk them.' },
  { m: '5 min', t: 'Next steps', b: 'A rough budget range and timeline, and what a proper estimate would need from you.' },
];

const PEOPLE = [
  { name: 'Rahul Garg', role: 'Founder', img: '/assets/company/rahul-garg-crop.jpg', b: 'Has shaped 300+ products since 2016, from MVPs to enterprise platforms.' },
  { name: 'Tripta Mittal', role: 'Co-founder — AI', img: '/assets/company/tripta-mittal-crop.jpg', b: 'Leads AI work: agents, generative AI and machine learning in production.' },
  { name: 'Saswat Sahu', role: 'Co-founder — Product', img: '/assets/company/saswat-sahu.jpg', b: 'Turns rough ideas into clear scope, flows and release plans.' },
  { name: 'Akash Bhardwaj', role: 'Business', img: '/assets/company/akash-bhardwaj.jpg', b: 'Helps you pick the right engagement model and budget.' },
];

const FAQ = [
  ['Is it really free?', 'Yes. The call is free and there is no obligation. Most people leave with useful advice even if they never work with us.'],
  ['Can I share my idea safely?', 'Yes. Tell us in the notes and we will sign your NDA before the call, or send ours.'],
  ['What if I do not have a brief?', 'That is normal. Bring the idea and any examples you like. We will help you turn it into a scope.'],
  ['What if none of the times work?', 'Pick the closest one and mention a better time in the notes. We have teams across India, the US and Australia, so we can usually fit you in.'],
];

const FIELD = 'width:100%;box-sizing:border-box;min-height:50px;background:#FFFFFF;border:1px solid rgba(8,7,10,.2);padding:13px 14px;font-size:16px;color:#08070A;outline:none;font-family:Geist,sans-serif;transition:border-color .2s';
const FIELD_LABEL = `display:block;${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#4A4741;margin-bottom:7px`;
const STEP_LABEL = `display:block;${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#4A4741;margin-bottom:7px`;
const FOCUS_CSS = '.mxbc input:focus,.mxbc textarea:focus,.mxbc select:focus{border-color:#F04423 !important}';

// The next ten weekdays. Built in the browser only: the server has no idea
// what "tomorrow" is where the visitor is, and a guess would not match.
function weekdays() {
  const out = [];
  const d = new Date();
  d.setHours(12, 0, 0, 0);
  while (out.length < 10) {
    d.setDate(d.getDate() + 1);
    const w = d.getDay();
    if (w !== 0 && w !== 6) out.push(new Date(d));
  }
  return out;
}

const fmt = (h, m) => `${((h + 11) % 12) + 1}:${String(m).padStart(2, '0')} ${h >= 12 ? 'PM' : 'AM'}`;

// The slot in the visitor's own clock, when that is not already IST.
function localOf(date, slot) {
  let tz = '';
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch (e) { tz = ''; }
  if (!tz || tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta') return '';
  const [h, m] = slot.split(':').map(Number);
  const utc = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), h, m) - 330 * 60000;
  return `${new Date(utc).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })} yours`;
}

function timezoneName() {
  try { return Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) { return ''; }
}

export default function BookConsultation() {
  const router = useRouter();
  const [topic, setTopic] = useState(0);
  const [day, setDay] = useState(0);
  const [slot, setSlot] = useState(1);
  const [code, setCode] = useState('+91');
  const [days, setDays] = useState([]);
  const [err, setErr] = useState('');
  const [sending, setSending] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);

  const fName = useRef(null);
  const fEmail = useRef(null);
  const fPhone = useRef(null);
  const fCode = useRef(null);
  const fMsg = useRef(null);
  const fHp = useRef(null);
  // Reported with each enquiry so the API can drop instant submissions.
  const filledIn = useFilledIn();

  useEffect(() => { setDays(weekdays()); }, []);
  useReveal([topic, day, slot, faqOpen, days.length]);

  const rule = PHONE_LEN[code] || [6, 14, ''];
  const chosen = days[day] || null;

  const onPhone = useCallback((e) => {
    const c = (fCode.current && fCode.current.value) || '+91';
    const max = (PHONE_LEN[c] || [6, 14])[1];
    let d = e.target.value.replace(/[^0-9]/g, '');
    if (c === '+91' && d.length > 10 && d.startsWith('91')) d = d.slice(2);
    d = d.replace(/^0+/, '').slice(0, max);
    if (e.target.value !== d) e.target.value = d;
  }, []);

  const onCode = useCallback((e) => {
    const v = e.target.value;
    setCode(v);
    const p = fPhone.current;
    const max = (PHONE_LEN[v] || [6, 14])[1];
    if (p && p.value.length > max) p.value = p.value.slice(0, max);
  }, []);

  const summary = useMemo(() => {
    if (!chosen) return `${TOPICS[topic]} · pick a day and time`;
    const [h, m] = SLOTS[slot].split(':').map(Number);
    const loc = localOf(chosen, SLOTS[slot]);
    return `${TOPICS[topic]} · ${chosen.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })} · ${fmt(h, m)} IST${loc ? ` (${loc.replace(' yours', '')} your time)` : ''}`;
  }, [chosen, topic, slot]);

  async function submit() {
    const v = (r) => (r.current ? r.current.value.trim() : '');
    const name = v(fName);
    const email = v(fEmail);
    const digits = v(fPhone).replace(/[^0-9]/g, '');
    const dial = (fCode.current && fCode.current.value) || '+91';
    const r = PHONE_LEN[dial] || [6, 14, ''];

    if (!name) return setErr('Please add your name.');
    if (!email) return setErr('Please add your email address.');
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return setErr('Please check your email address.');
    if (!digits) return setErr('Please add your phone number.');
    if (digits.length < r[0] || digits.length > r[1]) {
      return setErr(`Please enter a valid ${r[2]} phone number (${r[0] === r[1] ? r[0] : `${r[0]}–${r[1]}`} digits).`);
    }
    if (dial === '+91' && !/^[6-9]/.test(digits)) return setErr('Indian mobile numbers start with 6, 7, 8 or 9.');
    if (!chosen) return setErr('Please pick a day for the call.');

    setErr('');
    setSending(true);

    const [h, m] = SLOTS[slot].split(':').map(Number);
    const when = `${chosen.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}, ${fmt(h, m)} IST`;
    const loc = localOf(chosen, SLOTS[slot]);
    const tz = timezoneName();
    const qs = new URLSearchParams(window.location.search);
    const campaign = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'gclid']
      .filter((k) => qs.get(k))
      .map((k) => `${k}: ${qs.get(k)}`);

    const message = [
      `Topic: ${TOPICS[topic]}`,
      `Requested slot: ${when}${loc ? ` (${loc.replace(' yours', '')} visitor time)` : ''}`,
      tz ? `Visitor timezone: ${tz}` : '',
      '',
      'Notes:',
      v(fMsg) || '—',
    ].concat(campaign.length ? ['', '--- Campaign ---'].concat(campaign) : []).filter((x) => x !== null).join('\n');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          mobile: `${dial} ${digits}`,
          message,
          subject: `Consultation request: ${TOPICS[topic]}`,
          source: 'consultation',
          company: fHp.current ? fHp.current.value : '',
          filledIn: filledIn(), // how long the form was on screen
          pageUrl: window.location.href,
        }),
      });
      if (!res.ok) throw Object.assign(new Error('contact-api'), { status: res.status });
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', { form: 'consultation' });
        window.gtag('event', 'conversion', { send_to: 'AW-11065360955/7n7CCLmx7-IZELuEsJwp' });
      }
      router.push('/thank-you?from=consultation');
    } catch (e) {
      setSending(false);
      setErr(e.status === 429
        ? 'Too many requests. Please try again in a few minutes.'
        : 'We could not send that. Please email admin@marioxsoftware.com or call +91 95992 87045.');
    }
  }

  const pick = (on) => `cursor:pointer;min-height:44px;border:1px solid ${on ? '#08070A' : 'rgba(8,7,10,.2)'};background:${on ? '#08070A' : '#FFFFFF'};color:${on ? '#F4F1EA' : '#08070A'};font-family:Geist,sans-serif;transition:background .2s,border-color .2s`;

  return (
    <>
      <Seo
        title="Book a Free Consultation — Mariox Software"
        description="Book a free 30-minute call with a Mariox Software architect. Get honest advice on scope, technology, timeline and budget for your app, web, AI or ERP project."
        canonical={`${SITE_URL}/book-consultation`}
      />
      <JsonLd id="consultation-faq" data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }} />

      <Shell className="mxbc">
        <style dangerouslySetInnerHTML={{ __html: FOCUS_CSS }} />
        <Nav active="book-consultation" ctaHref="#book" ctaLabel="Book a call" />
        <El as="main">
          {/* 01 Hero + booking form */}
          <El as="section" css={`position:relative;padding:clamp(140px,14vw,200px) ${PAD} clamp(56px,7vw,110px);overflow:hidden;isolation:isolate`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,400px),1fr));gap:clamp(36px,5vw,90px);align-items:start">
              <El>
                <El css={`display:flex;align-items:center;gap:12px;${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#B7B2AA`}>
                  <El as="span" css="width:7px;height:7px;background:#F04423" />Free consultation
                </El>
                <El as="h1" css="margin:clamp(18px,2.4vw,28px) 0 0;font-size:clamp(2.8rem,6.2vw,6.4rem);line-height:.86;letter-spacing:-.07em;font-weight:500;max-width:12ch">
                  <El as="span" css="display:block">Book 30 minutes</El>
                  <El as="span" css="display:block">with an <Em>architect.</Em></El>
                </El>
                <El as="p" css="margin:clamp(22px,2.8vw,34px) 0 0;max-width:44ch;font-size:clamp(16px,1.4vw,20px);line-height:1.5;color:#D9D5CD;text-wrap:pretty">Not a sales call. Bring your idea, brief or existing product. Leave with honest advice on scope, stack, timeline and budget.</El>
                <El css="display:flex;flex-direction:column;gap:14px;margin-top:clamp(28px,3.4vw,44px);max-width:480px">
                  {PERKS.map((p) => (
                    <El key={p.t} css="display:flex;gap:14px;align-items:baseline;font-size:16px;line-height:1.45">
                      <El as="span" css="width:8px;height:8px;background:#F04423;flex-shrink:0;transform:translateY(-2px)" />
                      <El as="span"><El as="strong" css="font-weight:600">{p.t}</El> <El as="span" css="color:#B7B2AA">{p.b}</El></El>
                    </El>
                  ))}
                </El>
              </El>

              <El id="book" css="scroll-margin-top:100px">
                <El css="background:#F4F1EA;color:#08070A;padding:clamp(22px,2.8vw,40px)">
                  <El css="display:flex;flex-direction:column;gap:16px">
                    <El css="display:flex;justify-content:space-between;align-items:baseline;gap:12px;padding-bottom:14px;border-bottom:1px solid rgba(8,7,10,.14)">
                      <El as="span" css="font-size:clamp(1.35rem,2vw,1.8rem);font-weight:500;letter-spacing:-.04em">Book your call</El>
                      <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:#5E5A55;white-space:nowrap`}>30 min &#183; free</El>
                    </El>

                    <El>
                      <El as="span" css={STEP_LABEL}>1 &#183; What is it about?</El>
                      <El css="display:flex;flex-wrap:wrap;gap:7px">
                        {TOPICS.map((l, i) => (
                          <El as="button" type="button" key={l} onClick={() => setTopic(i)} aria-pressed={topic === i} css={`${pick(topic === i)};padding:10px 14px;font-size:14px`}>{l}</El>
                        ))}
                      </El>
                    </El>

                    <El>
                      <El as="span" css={STEP_LABEL}>2 &#183; Pick a day</El>
                      <El css="display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px">
                        {days.map((d, i) => (
                          <El as="button" type="button" key={d.toISOString()} onClick={() => setDay(i)} aria-pressed={day === i} css={`${pick(day === i)};min-height:64px;padding:8px 2px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px`}>
                            <El as="span" css={`${MONO};font-size:10px;letter-spacing:.1em;text-transform:uppercase;opacity:.75`}>{d.toLocaleDateString('en-GB', { weekday: 'short' })}</El>
                            <El as="span" css="font-size:20px;font-weight:500;letter-spacing:-.03em;line-height:1">{d.getDate()}</El>
                            <El as="span" css="font-size:11px;opacity:.7">{d.toLocaleDateString('en-GB', { month: 'short' })}</El>
                          </El>
                        ))}
                        {days.length ? null : <El as="span" css="grid-column:1 / -1;min-height:64px;display:flex;align-items:center;font-size:14px;color:#5E5A55">Loading available days…</El>}
                      </El>
                    </El>

                    <El>
                      <El as="span" css={STEP_LABEL}>3 &#183; Pick a time (India, IST)</El>
                      <El css="display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:6px">
                        {SLOTS.map((s, i) => {
                          const [h, m] = s.split(':').map(Number);
                          return (
                            <El as="button" type="button" key={s} onClick={() => setSlot(i)} aria-pressed={slot === i} css={`${pick(slot === i)};min-height:54px;padding:8px 6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px`}>
                              <El as="span" css="font-size:15px;font-weight:500">{fmt(h, m)}</El>
                              <El as="span" css="font-size:11px;opacity:.7">{chosen ? (localOf(chosen, s) || 'IST') : 'IST'}</El>
                            </El>
                          );
                        })}
                      </El>
                    </El>

                    <El aria-live="polite" css="background:#FFFFFF;border-left:3px solid #F04423;padding:12px 14px;font-size:14.5px;line-height:1.45">
                      <El as="span" css={`${MONO};font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55;display:block;margin-bottom:4px`}>Your slot</El>
                      {summary}
                    </El>

                    <El css={`${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#4A4741;padding-top:6px`}>4 &#183; Your details</El>

                    <El as="label" css="display:block">
                      <El as="span" css={FIELD_LABEL}>Name <El as="span" css="color:#C2361A">*</El></El>
                      <El as="input" ref={fName} type="text" placeholder="Your full name" autoComplete="name" css={FIELD} />
                    </El>
                    <El as="label" css="display:block">
                      <El as="span" css={FIELD_LABEL}>Work email <El as="span" css="color:#C2361A">*</El></El>
                      <El as="input" ref={fEmail} type="email" placeholder="you@company.com" autoComplete="email" css={FIELD} />
                    </El>

                    <El>
                      <El as="span" css={FIELD_LABEL}>Phone <El as="span" css="color:#C2361A">*</El></El>
                      <El css="display:flex;border:1px solid rgba(8,7,10,.2);background:#FFFFFF;min-height:50px">
                        <El as="select" ref={fCode} onChange={onCode} defaultValue="+91" aria-label="Country code" css="flex-shrink:0;width:118px;border:0;border-right:1px solid rgba(8,7,10,.14);background:#EDE9E1;padding:0 8px;font-size:15px;color:#08070A;font-family:Geist,sans-serif;outline:none">
                          {DIAL_CODES.map((c) => <option key={c.v} value={c.v}>{c.l}</option>)}
                        </El>
                        <El
                          as="input"
                          ref={fPhone}
                          type="tel"
                          inputMode="numeric"
                          onInput={onPhone}
                          maxLength={rule[1]}
                          placeholder={rule[0] === rule[1] ? `${rule[0]}-digit mobile number` : `${rule[0]}–${rule[1]} digits`}
                          autoComplete="tel-national"
                          aria-label="Phone number"
                          css="flex:1;min-width:0;border:0;padding:13px 14px;font-size:16px;color:#08070A;background:transparent;outline:none;font-family:Geist,sans-serif"
                        />
                      </El>
                    </El>

                    <El as="label" css="display:block">
                      <El as="span" css={FIELD_LABEL}>Anything we should read first? <El as="span" css="text-transform:none;letter-spacing:0;color:#77736C">(optional)</El></El>
                      <El as="textarea" ref={fMsg} rows={3} placeholder="Link to a brief, deck or current product" css={`${FIELD};resize:vertical;min-height:110px;line-height:1.5`} />
                    </El>

                    {/* Honeypot: real visitors never see or fill this. */}
                    <El as="input" ref={fHp} type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" css="position:absolute;left:-9999px;width:1px;height:1px;opacity:0" />

                    {err ? <El role="alert" css="font-size:14.5px;color:#C2361A;font-weight:500">{err}</El> : null}

                    <El as="button" type="button" onClick={submit} disabled={sending} css={`cursor:${sending ? 'default' : 'pointer'};border:0;display:flex;align-items:center;justify-content:center;gap:12px;background:${sending ? '#C2361A' : '#F04423'};color:#08070A;padding:19px 24px;min-height:58px;font-family:Geist,sans-serif;font-size:16px;font-weight:600;letter-spacing:-.01em;transition:background .25s`} hover={sending ? '' : 'background:#08070A;color:#F4F1EA'}>
                      {sending ? 'Sending…' : <>Request this slot <span>&#8594;</span></>}
                    </El>

                    <El as="p" css="margin:0;font-size:13px;line-height:1.5;color:#5E5A55">
                      We confirm by email within a few hours. NDA on request. See our <El as="a" href="/privacy-policy" css="text-decoration:underline">privacy policy</El>.
                    </El>
                  </El>
                </El>
              </El>
            </El>
          </El>

          <ProofBand eyebrow="Who you will meet" title="Talk to the people" titleEm="who build it." />

          {/* 02 Agenda */}
          <El as="section" css={`background:#F4F1EA;color:#08070A;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,4.6vw,64px)">
              <El>
                <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55;margin-bottom:16px`}>The 30 minutes</El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.4rem,5.8vw,6rem);line-height:.88;letter-spacing:-.065em;font-weight:500">What we&#8217;ll <Em>cover.</Em></El>
              </El>
              <El as="p" data-rv="1" css="margin:0;max-width:46ch;font-size:16.5px;line-height:1.55;color:#4A4741">Bring as much or as little as you have. A napkin sketch is fine.</El>
            </El>
            <El css="border-top:1px solid rgba(8,7,10,.2)">
              {AGENDA.map((a) => (
                <El key={a.t} data-rv="1" css="display:grid;grid-template-columns:minmax(80px,140px) minmax(0,1fr) minmax(0,1.3fr);gap:clamp(14px,3vw,48px);align-items:baseline;padding:clamp(22px,2.6vw,34px) 0;border-bottom:1px solid rgba(8,7,10,.2)">
                  <El as="span" css="font-size:clamp(2rem,4vw,3.6rem);font-weight:300;letter-spacing:-.06em;color:#F04423">{a.m}</El>
                  <El as="span" css="font-size:clamp(1.3rem,2.2vw,1.9rem);font-weight:500;letter-spacing:-.045em;line-height:1.05">{a.t}</El>
                  <El as="span" css="font-size:15.5px;line-height:1.55;color:#4A4741">{a.b}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 03 People */}
          <El as="section" css={`background:#08070A;color:#F4F1EA;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,4.6vw,64px)">
              <El>
                <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:16px`}>Who you&#8217;ll meet</El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.4rem,5.8vw,6rem);line-height:.88;letter-spacing:-.065em;font-weight:500">Senior people, <Em>not a sales desk.</Em></El>
              </El>
              <El as="p" data-rv="1" css="margin:0;max-width:46ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">Depending on your project, one of our founders or a senior architect takes the call.</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr));gap:clamp(12px,1.4vw,20px)">
              {PEOPLE.map((p) => (
                <El key={p.name} data-rv="1" css="display:flex;flex-direction:column;gap:14px">
                  <El role="img" aria-label={p.name} css={`aspect-ratio:4/5;background:#141216 center 25%/cover no-repeat;background-image:url('${p.img}');filter:grayscale(.15)`} />
                  <El>
                    <El css="font-size:20px;font-weight:500;letter-spacing:-.035em">{p.name}</El>
                    <El css={`margin-top:4px;${MONO};font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:#F04423`}>{p.role}</El>
                    <El css="margin-top:8px;font-size:14.5px;line-height:1.5;color:#B7B2AA">{p.b}</El>
                  </El>
                </El>
              ))}
            </El>
          </El>

          {/* FAQ */}
          <El as="section" css={`background:#08070A;padding:clamp(90px,10vw,160px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(28px,4vw,72px);align-items:start">
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.2rem,4.6vw,4.4rem);line-height:.9;letter-spacing:-.06em;font-weight:500">Before you <Em>book.</Em></El>
              <El css="grid-column:span 2;min-width:min(100%,320px);border-top:1px solid rgba(244,241,234,.16)">
                {FAQ.map(([question, answer], i) => {
                  const on = faqOpen === i;
                  return (
                    <El key={question} css="border-bottom:1px solid rgba(244,241,234,.16)">
                      <El as="button" type="button" onClick={() => setFaqOpen(on ? -1 : i)} aria-expanded={on} css="width:100%;display:flex;justify-content:space-between;align-items:baseline;gap:16px;padding:22px 0;background:none;border:0;color:#F4F1EA;text-align:left;cursor:pointer;font-family:Geist,sans-serif;font-size:clamp(1.05rem,1.6vw,1.35rem);font-weight:500;letter-spacing:-.025em">
                        <span>{question}</span>
                        <El as="span" css={`color:#F04423;${MONO};font-size:18px`}>{on ? '−' : '+'}</El>
                      </El>
                      {on ? <El css="padding:0 0 24px;max-width:62ch;font-size:16px;line-height:1.6;color:#B7B2AA">{answer}</El> : null}
                    </El>
                  );
                })}
              </El>
            </El>
          </El>

          {/* CTA */}
          <El as="section" css={`background:#F04423;color:#08070A;padding:clamp(80px,10vw,150px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(28px,4vw,72px);align-items:end">
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.6rem,6.6vw,7rem);line-height:.86;letter-spacing:-.07em;font-weight:500">Rather write <Em>to us?</Em></El>
              <El css="display:flex;flex-direction:column;gap:20px">
                <El as="p" data-rv="1" css="margin:0;max-width:42ch;font-size:clamp(16px,1.3vw,18px);line-height:1.5">Send a message and a senior engineer replies within one business day.</El>
                <El data-rv="1" css="display:flex;flex-wrap:wrap;gap:10px">
                  <El as="a" href="#book" css="display:flex;align-items:center;gap:12px;background:#08070A;color:#F4F1EA;padding:18px 26px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap;transition:background .3s,color .3s" hover="background:#F4F1EA;color:#08070A">Book a free consultation <span>&#8594;</span></El>
                  <El as="a" href="/contact" css="display:flex;align-items:center;gap:12px;border:1px solid rgba(8,7,10,.45);color:#08070A;padding:18px 24px;border-radius:999px;font-size:15px;white-space:nowrap;transition:background .3s,color .3s" hover="background:#08070A;color:#F4F1EA">Contact us</El>
                </El>
              </El>
            </El>
          </El>

          <Footer />
        </El>
      </Shell>
    </>
  );
}

BookConsultation.bare = true;
