import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import El from './El';
import { isolateScroll } from '@/lib/fx';
import { validatePhone, nationalDigits } from '@/lib/phone';

// Lead forms from the landing designs (hero estimate + architect review).
// The design posted to a configurable endpoint or fell back to mailto; here they
// use the site's own flow: /api/contact (team mail + acknowledgement) and the
// enquiries backend, with the same honeypot and Google Ads conversion.

const PhoneInput = dynamic(() => import('react-phone-input-2'), {
  ssr: false,
  loading: () => <input className="mx-lead-field" disabled placeholder="+91" />,
});

const MONO = "font-family:'JetBrains Mono',monospace";
const LABEL = `display:block;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#9B968F;margin-bottom:9px`;
const ERR = `display:block;margin-top:8px;${MONO};font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:#F04423`;
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const HERO_FIELDS = [
  { key: 'name', label: 'Name', ph: 'Your name', type: 'text', auto: 'name' },
  { key: 'email', label: 'Work email', ph: 'you@company.com', type: 'email', auto: 'email' },
  { key: 'company', label: 'Company', ph: 'Optional', type: 'text', auto: 'organization' },
];

const ARCHITECT_FIELDS = [
  { key: 'name', label: 'Name', ph: 'Your name', type: 'text', auto: 'name' },
  { key: 'company', label: 'Company', ph: 'Company', type: 'text', auto: 'organization' },
  { key: 'email', label: 'Work email', ph: 'you@company.com', type: 'email', auto: 'email' },
];

function Chip({ label, on, onClick }) {
  return (
    <El
      as="button"
      type="button"
      aria-pressed={on}
      onClick={onClick}
      data-cursor="1"
      css={`cursor:pointer;min-height:44px;display:inline-flex;align-items:center;${MONO};font-size:11.5px;letter-spacing:.08em;border:1px solid ${on ? '#F04423' : 'rgba(244,241,234,.22)'};background:${on ? '#F04423' : 'transparent'};color:${on ? '#08070A' : '#B7B2AA'};padding:12px 15px;transition:all .22s`}
    >
      {label}
    </El>
  );
}

function Sent({ title, body }) {
  return (
    <El css="display:grid;gap:16px;padding:clamp(16px,2vw,28px) 0">
      <El css="font-size:clamp(1.5rem,2.6vw,2.1rem);font-weight:800;letter-spacing:-.04em;line-height:1.05">{title}</El>
      <El as="p" css="margin:0;font-size:15.5px;line-height:1.55;color:#B7B2AA">{body}</El>
    </El>
  );
}

export default function LeadForm({
  variant = 'hero',
  needs = [],
  budgets = [],
  timelines = [],
  brief: briefValue,
  onBriefChange,
  briefRef,
  id = 'lead',
}) {
  const hero = variant === 'hero';
  const fields = hero ? HERO_FIELDS : ARCHITECT_FIELDS;
  const [values, setValues] = useState({ name: '', email: '', company: '', message: '', hp: '' });
  const [phone, setPhone] = useState({ national: '', dialCode: '91', country: null });
  const [picked, setPicked] = useState({ needs: [], budget: '', timeline: '' });
  const [errors, setErrors] = useState({});
  const [state, setState] = useState('idle');
  const [note, setNote] = useState('');
  const phoneRef = useRef(null);

  // Keep the country list scrolling inside itself, not the page.
  useEffect(() => isolateScroll(phoneRef.current), []);

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));
  const toggleNeed = (n) =>
    setPicked((p) => ({ ...p, needs: p.needs.includes(n) ? p.needs.filter((x) => x !== n) : p.needs.concat(n) }));

  const submit = async (ev) => {
    ev.preventDefault();
    const name = values.name.trim(), email = values.email.trim();
    const national = nationalDigits(phone.national, phone.country);
    const e = {};

    if (!name) e.name = 'Name is required';
    if (!email) e.email = 'Work email is required';
    else if (!EMAIL_RE.test(email)) e.email = 'Invalid email address';
    // Both email and a valid phone number are required on every landing form.
    const phoneMsg = validatePhone(phone.national, phone.country, { required: true });
    if (phoneMsg) e.phone = phoneMsg === 'Phone number is required' ? 'Mobile number is required' : phoneMsg;
    const message = hero
      ? values.message.trim()
      : (briefRef && briefRef.current ? briefRef.current.value.trim() : (briefValue || '').trim());
    if (hero && !message) e.message = 'Please tell us what you need';

    setErrors(e);
    if (Object.keys(e).length) {
      setNote('Please fix the highlighted fields.');
      return;
    }
    setNote('');
    setState('sending');

    const mobile = national ? `${phone.dialCode}-${national}` : '';
    // The message carries only what they wrote; what they picked travels as its
    // own field, so the notification email can show each in its own row.
    const payload = {
      name,
      email,
      mobile,
      message: message || (hero ? 'Estimate request from the landing page.' : 'Architect review request.'),
      budget: picked.budget,
      timeline: picked.timeline,
      source: hero ? 'landing-hero' : 'landing-architect',
      subject: values.company.trim() ? `Company: ${values.company.trim()}` : '',
      company: values.hp, // honeypot, same field name the API checks
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      services: Object.fromEntries(picked.needs.map((n) => [n, true])),
    };

    try {
      // /api/contact mails the team, acknowledges the sender and forwards the
      // lead to the CRM server-side, so this is the only call the page makes.
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const mailed = res.ok;
      if (mailed) {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'generate_lead', { form: hero ? 'hero' : 'architect', budget: picked.budget });
          window.gtag('event', 'conversion', { send_to: 'AW-11065360955/7n7CCLmx7-IZELuEsJwp' });
        }
        setState('sent');
      } else {
        console.error('Contact API failed', res.status);
        const limited = res.status === 429;
        setNote(limited
          ? 'Too many requests. Please try again in a few minutes.'
          : 'We could not send that. Please email admin@marioxsoftware.com or call +91 95992 87045.');
        setState('idle');
      }
    } catch (err) {
      setNote('Something went wrong. Please try again or call us.');
      setState('idle');
    }
  };

  if (state === 'sent') {
    return hero ? (
      <Sent title={'Thank you. We’ll be in touch within one business day.'} body="A senior engineer will review your requirement and reply with first questions and an estimate range." />
    ) : (
      <Sent title={'Thank you. It’s with an architect.'} body={'You’ll hear back within one business day with first questions and how we’d approach it. If you need an NDA first, reply and say so.'} />
    );
  }

  const sending = state === 'sending';
  const defaultNote = hero ? 'No spam, no sales sequence. 100% confidential.' : 'An architect replies within one business day. No sales sequence.';

  return (
    <El as="form" id={id} onSubmit={submit} noValidate css={`display:grid;gap:${hero ? '18px' : 'clamp(20px,2.4vw,28px)'}`}>
      <El css={`display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,${hero ? '160px' : '170px'}),1fr));gap:${hero ? '16px' : 'clamp(16px,2vw,24px)'}`}>
        {fields.map((f) => (
          <El as="label" key={f.key} css="display:block">
            <El as="span" css={LABEL}>{f.label}</El>
            <input
              className="mx-lead-field"
              type={f.type}
              name={f.key}
              placeholder={f.ph}
              autoComplete={f.auto}
              value={values[f.key]}
              onChange={set(f.key)}
              aria-invalid={!!errors[f.key]}
              style={{ font: 'inherit' }}
            />
            {errors[f.key] ? <El as="span" css={ERR}>{errors[f.key]}</El> : null}
          </El>
        ))}

        {/* Phone with the full country list and per-country digit rules */}
        <El as="div" ref={phoneRef} css="display:block">
          <El as="span" css={LABEL}>Phone</El>
          <PhoneInput
            country="in"
            containerClass="mx-phone mx-phone-lead"
            value={phone.national}
            onChange={(value, country) => {
              setPhone({ national: value, dialCode: country.dialCode, country });
              setErrors((p) => (p.phone ? { ...p, phone: undefined } : p));
            }}
            specialLabel=""
            enableSearch
            countryCodeEditable={false}
            inputProps={{ name: 'phone', 'aria-invalid': !!errors.phone }}
          />
          {errors.phone ? <El as="span" css={ERR}>{errors.phone}</El> : null}
        </El>
      </El>

      {needs.length ? (
        <div>
          <El as="span" css={`${LABEL};margin-bottom:10px`}>I need</El>
          <El css="display:flex;flex-wrap:wrap;gap:7px">
            {needs.map((n) => <Chip key={n} label={n} on={picked.needs.includes(n)} onClick={() => toggleNeed(n)} />)}
          </El>
        </div>
      ) : null}

      {budgets.length ? (
        <div>
          <El as="span" css={`${LABEL};margin-bottom:${hero ? '10px' : '12px'}`}>{hero ? 'Budget' : 'Project budget'}</El>
          <El css="display:flex;flex-wrap:wrap;gap:8px">
            {budgets.map((b) => <Chip key={b} label={b} on={picked.budget === b} onClick={() => setPicked((p) => ({ ...p, budget: b }))} />)}
          </El>
        </div>
      ) : null}

      {timelines.length ? (
        <div>
          <El as="span" css={`${LABEL};margin-bottom:12px`}>Timeline</El>
          <El css="display:flex;flex-wrap:wrap;gap:8px">
            {timelines.map((t) => <Chip key={t} label={t} on={picked.timeline === t} onClick={() => setPicked((p) => ({ ...p, timeline: t }))} />)}
          </El>
        </div>
      ) : null}

      <El as="label" css="display:block">
        <El as="span" css={LABEL}>{hero ? 'Message' : 'What are you building'}</El>
        <textarea
          className="mx-lead-field"
          rows={3}
          name="message"
          ref={hero ? undefined : briefRef}
          value={hero ? values.message : undefined}
          onChange={hero ? set('message') : onBriefChange}
          defaultValue={hero ? undefined : briefValue}
          placeholder={hero ? 'What you want to build, and anything already decided' : 'Platform, users, integrations, anything already decided'}
          aria-invalid={!!errors.message}
          style={{ resize: 'vertical', lineHeight: 1.5, font: 'inherit' }}
        />
        {errors.message ? <El as="span" css={ERR}>{errors.message}</El> : null}
      </El>

      {/* Honeypot — hidden from people, bots fill it and get a silent success */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="mx-visually-hidden" value={values.hp} onChange={set('hp')} />

      <El
        as="button"
        type="submit"
        disabled={sending}
        data-cursor="start"
        css={`cursor:${sending ? 'wait' : 'pointer'};border:0;width:100%;display:flex;align-items:center;justify-content:space-between;gap:14px;background:#F04423;color:#08070A;padding:${hero ? '19px 22px' : '20px 24px'};${MONO};font-size:12px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;transition:background .3s;opacity:${sending ? 0.75 : 1}`}
        hover="background:#F4F1EA"
      >
        <span>{sending ? 'Sending…' : hero ? 'Get my free estimate' : 'Request architect review'}</span><span>&#8594;</span>
      </El>
      <El as="span" role="status" aria-live="polite" css={`font-size:13px;line-height:1.5;color:${note ? '#F04423' : '#9B968F'}`}>{note || defaultNote}</El>
    </El>
  );
}
