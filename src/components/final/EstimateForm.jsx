import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import El from '../El';
import { MONO } from './ui';
import { isolateScroll } from '@/lib/fx';
import { validatePhone, nationalDigits } from '@/lib/phone';

// "Get a free estimate" card from the design. The design posted to a
// configurable endpoint or fell back to mailto; here it uses the site's own
// flow — /api/contact plus the enquiries backend — with the honeypot, required
// mobile number and Google Ads conversion every Mariox form shares.

const PhoneInput = dynamic(() => import('react-phone-input-2'), {
  ssr: false,
  loading: () => <input className="mx-ivory-field" disabled placeholder="+91" />,
});

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const BUDGETS = ['Under $25k', '$25k–$75k', '$75k–$150k', '$150k+', 'Not sure'];
const NEEDS = ['Mobile app', 'Web app', 'SaaS', 'CRM / ERP', 'AI', 'Dedicated team'];

export default function EstimateForm({
  id = 'estimate',
  title = 'Get a free estimate',
  source = 'service',
  subject = '',
  budgets = BUDGETS,
  needs = NEEDS,
  needsLabel = 'I need',
  messageLabel = 'Message',
  messagePlaceholder = 'What you want to build, and anything already decided',
  dark = false,
}) {
  const [values, setValues] = useState({ name: '', email: '', message: '', hp: '' });
  const [phone, setPhone] = useState({ national: '', dialCode: '91', country: null });
  const [picked, setPicked] = useState([]);
  const [budget, setBudget] = useState('');
  const [errors, setErrors] = useState({});
  const [state, setState] = useState('idle');
  const [note, setNote] = useState('');
  const phoneRef = useRef(null);

  useEffect(() => isolateScroll(phoneRef.current), []);

  const field = dark ? 'mx-v4-field' : 'mx-ivory-field';
  // Chips pick up the card's ground: ivory cards invert to black, dark ones to orange.
  const chipCss = (on) => {
    const bg = on ? (dark ? '#F04423' : '#08070A') : 'transparent';
    const fg = on ? (dark ? '#08070A' : '#F4F1EA') : (dark ? '#D9D5CD' : '#08070A');
    const bd = on ? (dark ? '#F04423' : '#08070A') : (dark ? 'rgba(244,241,234,.25)' : 'rgba(8,7,10,.25)');
    return `cursor:pointer;min-height:44px;white-space:nowrap;border-radius:999px;padding:10px 15px;border:1px solid ${bd};background:${bg};color:${fg};font-family:Geist,sans-serif;font-size:13.5px;transition:all .2s`;
  };
  const labelCss = `display:block;${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:${dark ? '#9B968F' : '#5E5A55'};margin-bottom:6px`;
  const errCss = `display:block;margin-top:6px;${MONO};font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:#F04423`;
  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

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
    const chosen = Object.fromEntries(picked.map((n) => [n, true]));
    // The message carries only what they wrote; the chips, budget, subject and
    // form name travel as their own fields, so the email can row them.
    const payload = {
      name,
      email,
      mobile,
      message: values.message.trim() || (subject ? `Enquiry about ${subject}.` : 'Estimate request.'),
      budget,
      subject,
      source,
      company: values.hp, // honeypot, same field name the API checks
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      // Only what the visitor ticked; the page's own service rides in `subject`.
      services: chosen,
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
          window.gtag('event', 'generate_lead', { form: source, service: subject, budget, needs: picked.join(', ') });
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

  const card = dark
    ? 'background:rgba(8,7,10,.88);border:1px solid rgba(244,241,234,.18);color:#F4F1EA'
    : 'background:#F4F1EA;color:#08070A';
  const sending = state === 'sending';

  return (
    <El id={id} css={`scroll-margin-top:96px;${card};padding:clamp(24px,2.8vw,40px);display:flex;flex-direction:column;gap:20px`}>
      <El css={`display:flex;justify-content:space-between;align-items:baseline;gap:12px;padding-bottom:14px;border-bottom:1px solid ${dark ? 'rgba(244,241,234,.16)' : 'rgba(8,7,10,.16)'}`}>
        <El as="span" css="font-size:19px;font-weight:600;letter-spacing:-.03em">{title}</El>
        <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:${dark ? '#8E8A85' : '#5E5A55'}`}>Reply in 1 day</El>
      </El>

      {state === 'sent' ? (
        <El css="font-size:clamp(1.4rem,2.2vw,1.9rem);font-weight:500;letter-spacing:-.04em;line-height:1.1">
          Thank you. <El as="em" css="font-family:'Instrument Serif',serif;font-weight:400">A senior engineer will reply within one business day.</El>
        </El>
      ) : (
        <El as="form" onSubmit={submit} noValidate css="display:flex;flex-direction:column;gap:18px">
          <El as="label" css="display:block">
            <El as="span" css={labelCss}>Name</El>
            <input className={field} type="text" name="name" placeholder="Your name" autoComplete="name" value={values.name} onChange={set('name')} aria-invalid={!!errors.name} />
            {errors.name ? <El as="span" css={errCss}>{errors.name}</El> : null}
          </El>
          <El as="label" css="display:block">
            <El as="span" css={labelCss}>Work email</El>
            <input className={field} type="email" name="email" placeholder="you@company.com" autoComplete="email" value={values.email} onChange={set('email')} aria-invalid={!!errors.email} />
            {errors.email ? <El as="span" css={errCss}>{errors.email}</El> : null}
          </El>
          <El as="div" ref={phoneRef} css="display:block">
            <El as="span" css={labelCss}>Phone</El>
            <PhoneInput
              country="in"
              containerClass={`mx-phone ${dark ? 'mx-phone-lead mx-phone-v4' : 'mx-phone-ivory'}`}
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
            {errors.phone ? <El as="span" css={errCss}>{errors.phone}</El> : null}
          </El>

          {needs && needs.length ? (
            <El>
              <El as="span" css={`${labelCss};margin-bottom:10px`}>{needsLabel}</El>
              <El css="display:flex;flex-wrap:wrap;gap:7px">
                {needs.map((n) => {
                  const on = picked.includes(n);
                  return (
                    <El as="button" type="button" key={n} aria-pressed={on} onClick={() => setPicked((p) => (p.includes(n) ? p.filter((x) => x !== n) : p.concat(n)))} css={chipCss(on)}>{n}</El>
                  );
                })}
              </El>
            </El>
          ) : null}

          <El>
            <El as="span" css={`${labelCss};margin-bottom:10px`}>Budget</El>
            <El css="display:flex;flex-wrap:wrap;gap:7px">
              {budgets.map((b) => (
                <El as="button" type="button" key={b} aria-pressed={budget === b} onClick={() => setBudget(b)} css={chipCss(budget === b)}>{b}</El>
              ))}
            </El>
          </El>

          <El as="label" css="display:block">
            <El as="span" css={labelCss}>{messageLabel}</El>
            <textarea className={field} rows={3} name="message" placeholder={messagePlaceholder} value={values.message} onChange={set('message')} style={{ resize: 'vertical', lineHeight: 1.5 }} />
          </El>

          {/* Honeypot — hidden from people, bots fill it and get a silent success */}
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="mx-visually-hidden" value={values.hp} onChange={set('hp')} />

          <El as="button" type="submit" disabled={sending} css={`cursor:${sending ? 'wait' : 'pointer'};border:0;display:flex;align-items:center;justify-content:space-between;gap:14px;background:${dark ? '#F04423' : '#08070A'};color:${dark ? '#08070A' : '#F4F1EA'};padding:18px 22px;border-radius:999px;font-family:Geist,sans-serif;font-size:15px;font-weight:500;transition:background .3s;opacity:${sending ? 0.75 : 1}`} hover={dark ? 'background:#F4F1EA;color:#08070A' : 'background:#F04423;color:#08070A'}>
            <span>{sending ? 'Sending…' : 'Get my estimate'}</span><span>&#8594;</span>
          </El>
          <El as="span" role="status" aria-live="polite" css={`font-size:13px;color:${note ? '#F04423' : dark ? '#8E8A85' : '#5E5A55'}`}>{note || 'Confidential. NDA on request.'}</El>
        </El>
      )}
    </El>
  );
}
