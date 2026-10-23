import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import El from '../El';
import { MONO, PAD, Em } from './ui';
import { isolateScroll } from '@/lib/fx';
import { validatePhone, nationalDigits } from '@/lib/phone';
import { roles } from '@/data/final/hire';

// "Your team, in one brief" from the design's hire page: the team the visitor
// assembled plus the enquiry form, posting through the site's lead flow.

const PhoneInput = dynamic(() => import('react-phone-input-2'), {
  ssr: false,
  loading: () => <input className="mx-v4-field" disabled placeholder="+91" />,
});

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const LEVELS = ['Mid-level', 'Senior', 'Lead'];
const DURATIONS = ['1–3 months', '3–6 months', '6+ months', 'Not sure'];
const byName = roles.reduce((m, r) => { m[r.slug] = r.name; return m; }, {});

export default function HireBrief({ team, bump, headcount }) {
  const [values, setValues] = useState({ name: '', email: '', companyName: '', message: '', hp: '' });
  const [phone, setPhone] = useState({ national: '', dialCode: '91', country: null });
  const [level, setLevel] = useState('Senior');
  const [dur, setDur] = useState('3–6 months');
  const [errors, setErrors] = useState({});
  const [state, setState] = useState('idle');
  const [note, setNote] = useState('');
  const phoneRef = useRef(null);
  useEffect(() => isolateScroll(phoneRef.current), []);

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));
  const list = Object.entries(team).map(([slug, count]) => ({ slug, count, name: byName[slug] || slug }));

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

    const roleLines = list.length ? list.map((t) => `${t.count} × ${t.name}`).join(', ') : 'Roles not chosen yet';
    const mobile = national ? `${phone.dialCode}-${national}` : '';
    // The message carries only what they wrote; the team, seniority and
    // duration travel as their own fields for the notification email.
    const payload = {
      name,
      email,
      mobile,
      message: values.message.trim() || 'Hiring enquiry from the hire page.',
      seniority: level,
      team: roleLines,
      companyName: values.companyName.trim(),
      timeline: dur,
      source: 'hire',
      subject: '',
      company: values.hp, // honeypot
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      services: Object.fromEntries(list.map((t) => [t.name, true])),
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
          window.gtag('event', 'generate_lead', { form: 'hire', headcount });
          window.gtag('event', 'conversion', { send_to: 'AW-11065360955/7n7CCLmx7-IZELuEsJwp' });
        }
        setState('sent');
      } else {
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

  const labelCss = `display:block;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#9B968F;margin-bottom:8px`;
  const errCss = `display:block;margin-top:6px;${MONO};font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:#F04423`;
  const chip = (on) => `cursor:pointer;min-height:44px;border-radius:999px;padding:9px 16px;border:1px solid ${on ? '#08070A' : 'rgba(8,7,10,.25)'};background:${on ? '#08070A' : 'transparent'};color:${on ? '#F4F1EA' : '#08070A'};font-family:Geist,sans-serif;font-size:14px`;
  const sending = state === 'sending';

  return (
    <El as="section" id="brief" css={`background:#F04423;color:#08070A;padding:clamp(80px,10vw,150px) ${PAD}`}>
      <El as="h2" css="margin:0 0 clamp(32px,4vw,56px);max-width:16ch;font-size:clamp(2.6rem,6.4vw,6.4rem);line-height:.86;letter-spacing:-.07em;font-weight:500">Your team, <Em>in one brief.</Em></El>
      <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));gap:clamp(14px,1.6vw,24px);align-items:stretch">
        <El css="background:#F4F1EA;padding:clamp(22px,2.8vw,40px);display:flex;flex-direction:column;gap:22px">
          <El css={`display:flex;justify-content:space-between;align-items:baseline;padding-bottom:14px;border-bottom:1px solid rgba(8,7,10,.16);${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#5E5A55`}>
            <span>Your team</span><span>{headcount} {headcount === 1 ? 'person' : 'people'}</span>
          </El>
          {list.length === 0 ? (
            <El as="p" css="margin:0;font-size:16px;line-height:1.5;color:#4A4741">No roles added yet. <El as="a" href="#roles" css="color:#08070A;font-weight:500;border-bottom:1px solid #08070A">Browse roles</El> and press &ldquo;+ Add&rdquo;.</El>
          ) : (
            <El css="display:flex;flex-direction:column">
              {list.map((t) => (
                <El key={t.slug} css="display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid rgba(8,7,10,.1)">
                  <El as="span" css="display:flex;align-items:center;gap:10px;font-size:16px"><El as="span" css="width:10px;height:10px;background:#F04423" />{t.name}</El>
                  <El as="span" css="display:flex;align-items:center;gap:6px">
                    <El as="button" type="button" onClick={bump(t.slug, -1)} aria-label={`Remove one ${t.name}`} css="cursor:pointer;width:36px;height:36px;border-radius:50%;border:1px solid rgba(8,7,10,.3);background:transparent;color:#08070A;font-size:16px">&#8722;</El>
                    <El as="span" css={`min-width:22px;text-align:center;${MONO};font-size:14px`}>{t.count}</El>
                    <El as="button" type="button" onClick={bump(t.slug, 1)} aria-label={`Add one ${t.name}`} css="cursor:pointer;width:36px;height:36px;border-radius:50%;border:1px solid rgba(8,7,10,.3);background:transparent;color:#08070A;font-size:16px">+</El>
                  </El>
                </El>
              ))}
            </El>
          )}
          <El>
            <El css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#5E5A55;margin-bottom:10px`}>Seniority</El>
            <El css="display:flex;flex-wrap:wrap;gap:7px">
              {LEVELS.map((l) => <El as="button" type="button" key={l} onClick={() => setLevel(l)} css={chip(level === l)}>{l}</El>)}
            </El>
          </El>
          <El>
            <El css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#5E5A55;margin-bottom:10px`}>Duration</El>
            <El css="display:flex;flex-wrap:wrap;gap:7px">
              {DURATIONS.map((l) => <El as="button" type="button" key={l} onClick={() => setDur(l)} css={chip(dur === l)}>{l}</El>)}
            </El>
          </El>
        </El>

        <El css="background:#08070A;color:#F4F1EA;padding:clamp(22px,2.8vw,40px)">
          {state === 'sent' ? (
            <El css="font-size:clamp(1.5rem,2.6vw,2.2rem);font-weight:500;letter-spacing:-.05em;line-height:1.1">
              Thank you. <El as="em" css="font-family:'Instrument Serif',serif;font-weight:400">Profiles land in your inbox within 48 hours.</El>
            </El>
          ) : (
            <El as="form" onSubmit={submit} noValidate css="display:grid;gap:22px">
              <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));gap:18px">
                <El as="label" css="display:block">
                  <El as="span" css={labelCss}>Name</El>
                  <input className="mx-v4-field" type="text" name="name" placeholder="Your name" autoComplete="name" value={values.name} onChange={set('name')} aria-invalid={!!errors.name} />
                  {errors.name ? <El as="span" css={errCss}>{errors.name}</El> : null}
                </El>
                <El as="label" css="display:block">
                  <El as="span" css={labelCss}>Work email</El>
                  <input className="mx-v4-field" type="email" name="email" placeholder="you@company.com" autoComplete="email" value={values.email} onChange={set('email')} aria-invalid={!!errors.email} />
                  {errors.email ? <El as="span" css={errCss}>{errors.email}</El> : null}
                </El>
                <El as="div" ref={phoneRef} css="display:block">
                  <El as="span" css={labelCss}>Phone</El>
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
                  {errors.phone ? <El as="span" css={errCss}>{errors.phone}</El> : null}
                </El>
                <El as="label" css="display:block">
                  <El as="span" css={labelCss}>Company</El>
                  <input className="mx-v4-field" type="text" name="companyName" placeholder="Optional" autoComplete="organization" value={values.companyName} onChange={set('companyName')} />
                </El>
              </El>
              {/* The team they built above, in the form itself, so nothing is
                  sent without them seeing what is in it. */}
              <El as="div" css="display:block">
                <El as="span" css={labelCss}>Roles you need</El>
                <El css="display:flex;flex-wrap:wrap;gap:8px">
                  {list.length === 0
                    ? <El as="span" css="font-size:14px;color:#8E8A85">No roles yet. <El as="a" href="#roles" css="border-bottom:1px solid currentColor">Browse the roles</El> and press &ldquo;+ Add&rdquo;.</El>
                    : list.map((t) => (
                      <El as="span" key={t.slug} css="display:inline-flex;align-items:center;gap:8px;border:1px solid #F04423;border-radius:999px;padding:7px 8px 7px 14px;font-size:14px">
                        {t.count} &#215; {t.name}
                        <El as="button" type="button" onClick={bump(t.slug, -1)} aria-label={`Remove one ${t.name}`} css="cursor:pointer;width:24px;height:24px;border-radius:50%;border:0;background:rgba(244,241,234,.12);color:#F4F1EA;font-size:13px;line-height:1">&#215;</El>
                      </El>
                    ))}
                </El>
              </El>
              <El as="label" css="display:block">
                <El as="span" css={labelCss}>What will they work on?</El>
                <textarea className="mx-v4-field" rows={3} name="message" placeholder="Product, stack and time zone" value={values.message} onChange={set('message')} style={{ resize: 'vertical', lineHeight: 1.5 }} />
              </El>
              <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="mx-visually-hidden" value={values.hp} onChange={set('hp')} />
              <El css="display:flex;flex-wrap:wrap;gap:14px;align-items:center;justify-content:space-between">
                <El as="span" role="status" aria-live="polite" css={`font-size:13.5px;color:${note ? '#F04423' : '#8E8A85'}`}>{note || 'NDA before the first call.'}</El>
                <El as="button" type="submit" disabled={sending} css={`cursor:${sending ? 'wait' : 'pointer'};border:0;display:flex;align-items:center;gap:12px;background:#F04423;color:#08070A;padding:18px 26px;border-radius:999px;font-family:Geist,sans-serif;font-size:15px;font-weight:500;white-space:nowrap;opacity:${sending ? 0.75 : 1}`}>
                  <span>{sending ? 'Sending…' : 'Send the brief'}</span> <span>&#8594;</span>
                </El>
              </El>
            </El>
          )}
        </El>
      </El>
    </El>
  );
}
