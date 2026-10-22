import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import El from '../El';
import { isolateScroll } from '@/lib/fx';
import { validatePhone, nationalDigits } from '@/lib/phone';
import { needs as NEEDS, budgets as BUDGETS } from '@/data/homeV4';

// Contact form from the "Mariox Home v4" design. The design posted to a
// configurable endpoint or fell back to mailto; here it uses the site's own
// flow — /api/contact (team mail + acknowledgement) and the enquiries backend —
// with the same honeypot, phone rules and Google Ads conversion as every other
// form on the site.

const PhoneInput = dynamic(() => import('react-phone-input-2'), {
  ssr: false,
  loading: () => <input className="mx-lead-field mx-v4-field" disabled placeholder="+91" />,
});

const MONO = "font-family:'Geist Mono',monospace";
const LABEL = `display:block;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#9B968F;margin-bottom:8px`;
const ERR = `display:block;margin-top:7px;${MONO};font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:#F04423`;
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const FIELDS = [
  { key: 'name', label: 'Name', ph: 'Your name', type: 'text', auto: 'name' },
  { key: 'email', label: 'Email', ph: 'you@company.com', type: 'email', auto: 'email' },
  { key: 'companyName', label: 'Company', ph: 'Optional', type: 'text', auto: 'organization' },
];

function Chip({ label, on, onClick }) {
  return (
    <El
      as="button"
      type="button"
      aria-pressed={on}
      onClick={onClick}
      css={`cursor:pointer;min-height:44px;white-space:nowrap;border-radius:999px;padding:9px 15px;border:1px solid ${on ? '#F04423' : 'rgba(244,241,234,.25)'};background:${on ? '#F04423' : 'transparent'};color:${on ? '#08070A' : '#D9D5CD'};font-family:Geist,sans-serif;font-size:14px;transition:all .25s`}
    >
      {label}
    </El>
  );
}

export default function HomeLeadForm() {
  const [values, setValues] = useState({ name: '', email: '', companyName: '', message: '', hp: '' });
  const [phone, setPhone] = useState({ national: '', dialCode: '91', country: null });
  const [picked, setPicked] = useState({ needs: [], budget: '' });
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
    if (!email) e.email = 'Email is required';
    else if (!EMAIL_RE.test(email)) e.email = 'Invalid email address';
    const phoneMsg = validatePhone(phone.national, phone.country, { required: true });
    if (phoneMsg) e.phone = phoneMsg === 'Phone number is required' ? 'Mobile number is required' : phoneMsg;

    setErrors(e);
    if (Object.keys(e).length) { setNote('Please fix the highlighted fields.'); return; }
    setNote('');
    setState('sending');

    const mobile = national ? `${phone.dialCode}-${national}` : '';
    // The message carries only what they wrote; the chips, budget and company
    // travel as their own fields so the notification email can row them.
    const payload = {
      name,
      email,
      mobile,
      message: values.message.trim() || 'Project enquiry from the home page.',
      budget: picked.budget,
      source: 'home',
      subject: values.companyName.trim() ? `Company: ${values.companyName.trim()}` : '',
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
          window.gtag('event', 'generate_lead', { form: 'home', budget: picked.budget });
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
    return (
      <El css="font-size:clamp(1.6rem,3vw,2.4rem);font-weight:500;letter-spacing:-.05em;line-height:1.05">
        Thank you. <El as="em" css="font-family:'Instrument Serif',serif;font-weight:400">A senior engineer will reply within one business day.</El>
      </El>
    );
  }

  const sending = state === 'sending';

  return (
    <El as="form" id="home-lead" onSubmit={submit} noValidate css="display:grid;gap:22px">
      <El css="display:flex;justify-content:space-between;align-items:baseline;gap:14px;padding-bottom:14px;border-bottom:1px solid rgba(244,241,234,.16)">
        <El as="span" css="font-size:19px;font-weight:500;letter-spacing:-.03em">Tell us about the project</El>
        <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>Reply in 1 day</El>
      </El>

      <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));gap:18px">
        {FIELDS.map((f) => (
          <El as="label" key={f.key} css="display:block">
            <El as="span" css={LABEL}>{f.label}</El>
            <input
              className="mx-v4-field"
              type={f.type}
              name={f.key}
              placeholder={f.ph}
              autoComplete={f.auto}
              value={values[f.key]}
              onChange={set(f.key)}
              aria-invalid={!!errors[f.key]}
            />
            {errors[f.key] ? <El as="span" css={ERR}>{errors[f.key]}</El> : null}
          </El>
        ))}

        {/* Phone with the full country list and per-country digit rules */}
        <El as="div" ref={phoneRef} css="display:block">
          <El as="span" css={LABEL}>Phone</El>
          <PhoneInput
            country="in"
            containerClass="mx-phone mx-phone-lead mx-phone-v4"
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

      <El>
        <El as="span" css={`${LABEL};margin-bottom:10px`}>I need</El>
        <El css="display:flex;flex-wrap:wrap;gap:7px">
          {NEEDS.map((n) => <Chip key={n} label={n} on={picked.needs.includes(n)} onClick={() => toggleNeed(n)} />)}
        </El>
      </El>

      <El>
        <El as="span" css={`${LABEL};margin-bottom:10px`}>Budget</El>
        <El css="display:flex;flex-wrap:wrap;gap:7px">
          {BUDGETS.map((b) => <Chip key={b} label={b} on={picked.budget === b} onClick={() => setPicked((p) => ({ ...p, budget: b }))} />)}
        </El>
      </El>

      <El as="label" css="display:block">
        <El as="span" css={LABEL}>Message</El>
        <textarea
          className="mx-v4-field"
          rows={3}
          name="message"
          value={values.message}
          onChange={set('message')}
          placeholder="What you want to build, and anything already decided"
          style={{ resize: 'vertical', lineHeight: 1.5 }}
        />
      </El>

      {/* Honeypot — hidden from people, bots fill it and get a silent success */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="mx-visually-hidden" value={values.hp} onChange={set('hp')} />

      <El css="display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between">
        <El as="span" role="status" aria-live="polite" css={`font-size:13.5px;color:${note ? '#F04423' : '#8E8A85'}`}>{note || 'No spam, no sales sequence. 100% confidential.'}</El>
        <El as="button" type="submit" disabled={sending} data-cursor="Send" css={`cursor:${sending ? 'wait' : 'pointer'};border:0;display:flex;align-items:center;gap:14px;background:#F04423;color:#08070A;padding:19px 28px;border-radius:999px;font-family:Geist,sans-serif;font-size:16px;font-weight:500;white-space:nowrap;opacity:${sending ? 0.75 : 1}`}>
          {sending ? 'Sending…' : 'Send enquiry'} <span>&#8594;</span>
        </El>
      </El>
    </El>
  );
}
