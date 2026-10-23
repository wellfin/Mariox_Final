import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import El from '../El';
import { MONO } from './ui';
import { isolateScroll } from '@/lib/fx';
import { validatePhone, nationalDigits } from '@/lib/phone';

// Job application form from the design's careers page. The design opened the
// applicant's mail app; here it posts through the site's own flow so the
// application lands in the careers inbox with everything filled in.

const PhoneInput = dynamic(() => import('react-phone-input-2'), {
  ssr: false,
  loading: () => <input className="mx-v4-field" disabled placeholder="+91" />,
});

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const EXPERIENCE = ['Student / fresher', '0–2 years', '2–4 years', '4–7 years', '7–10 years', '10+ years'];
const OFFICES = ['Noida', 'Bangalore', 'Dallas', 'Australia', 'Open to any'];

export default function ApplyForm({ roleOptions, role, office, onRoleChange, onOfficeChange }) {
  const [values, setValues] = useState({ name: '', email: '', link: '', message: '', hp: '' });
  const [phone, setPhone] = useState({ national: '', dialCode: '91', country: null });
  const [experience, setExperience] = useState('');
  const [errors, setErrors] = useState({});
  const [state, setState] = useState('idle');
  const [note, setNote] = useState('');
  const phoneRef = useRef(null);
  useEffect(() => isolateScroll(phoneRef.current), []);

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));
  const label = `display:block;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#9B968F;margin-bottom:8px`;
  const err = `display:block;margin-top:6px;${MONO};font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:#F04423`;
  const chip = (on) => `cursor:pointer;min-height:44px;border-radius:999px;padding:9px 16px;border:1px solid ${on ? '#F04423' : 'rgba(244,241,234,.25)'};background:${on ? '#F04423' : 'transparent'};color:${on ? '#08070A' : '#D9D5CD'};font-family:Geist,sans-serif;font-size:14px;transition:all .25s`;

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
    const payload = {
      name,
      email,
      mobile,
      message: values.message.trim() || `Application for ${role}.`,
      subject: `Role: ${role}`,
      budget: experience ? `Experience: ${experience}` : '',
      timeline: office ? `Preferred office: ${office}` : '',
      source: 'careers',
      to: 'career@marioxsoftware.com',
      company: values.hp, // honeypot
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      services: { [role]: true, ...(values.link.trim() ? { [`Portfolio: ${values.link.trim()}`]: true } : {}) },
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'job_application', { role, office, experience });
        }
        setState('sent');
      } else {
        console.error('Careers API failed', res.status);
        setNote(res.status === 429
          ? 'Too many requests. Please try again in a few minutes.'
          : 'We could not send that. Please email career@marioxsoftware.com.');
        setState('idle');
      }
    } catch (error) {
      setNote('We could not send that. Please email career@marioxsoftware.com.');
      setState('idle');
    }
  };

  if (state === 'sent') {
    return (
      <El css="border:1px solid rgba(244,241,234,.18);padding:clamp(24px,3vw,44px);display:flex;flex-direction:column;gap:18px">
        <El css="font-size:clamp(1.5rem,2.6vw,2.2rem);font-weight:500;letter-spacing:-.05em;line-height:1.1">
          Thank you. <El as="em" css="font-family:'Instrument Serif',serif;font-weight:400">We read every application and reply.</El>
        </El>
        <El as="p" css="margin:0;font-size:15.5px;line-height:1.5;color:#B7B2AA">Please email your CV to <El as="a" href="mailto:career@marioxsoftware.com" css="color:#F04423">career@marioxsoftware.com</El> so it reaches the same thread.</El>
        <El as="button" type="button" onClick={() => setState('idle')} css="align-self:flex-start;cursor:pointer;background:transparent;border:0;color:#F04423;font-family:Geist,sans-serif;font-size:15px;border-bottom:1px solid #F04423;padding:0 0 4px">Apply for another role</El>
      </El>
    );
  }

  const sending = state === 'sending';

  return (
    <El as="form" id="apply-form" onSubmit={submit} noValidate css="border:1px solid rgba(244,241,234,.18);padding:clamp(24px,3vw,44px);display:grid;gap:22px">
      <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:18px">
        <El as="label" css="display:block">
          <El as="span" css={label}>Full name</El>
          <input className="mx-v4-field" type="text" name="name" placeholder="Your name" autoComplete="name" value={values.name} onChange={set('name')} aria-invalid={!!errors.name} />
          {errors.name ? <El as="span" css={err}>{errors.name}</El> : null}
        </El>
        <El as="label" css="display:block">
          <El as="span" css={label}>Email</El>
          <input className="mx-v4-field" type="email" name="email" placeholder="you@email.com" autoComplete="email" value={values.email} onChange={set('email')} aria-invalid={!!errors.email} />
          {errors.email ? <El as="span" css={err}>{errors.email}</El> : null}
        </El>
        <El as="div" ref={phoneRef} css="display:block">
          <El as="span" css={label}>Phone</El>
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
          {errors.phone ? <El as="span" css={err}>{errors.phone}</El> : null}
        </El>
        <El as="label" css="display:block">
          <El as="span" css={label}>LinkedIn or portfolio</El>
          <input className="mx-v4-field" type="url" name="link" placeholder="https://" value={values.link} onChange={set('link')} />
        </El>
      </El>

      <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:18px">
        <El as="label" css="display:block">
          <El as="span" css={label}>Role</El>
          <select className="mx-v4-field mx-select" name="role" value={role} onChange={(e) => onRoleChange(e.target.value)}>
            {roleOptions.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </El>
        <El as="label" css="display:block">
          <El as="span" css={label}>Experience</El>
          <select className="mx-v4-field mx-select" name="experience" value={experience} onChange={(e) => setExperience(e.target.value)}>
            <option value="">Select</option>
            {EXPERIENCE.map((x) => <option key={x} value={x}>{x}</option>)}
          </select>
        </El>
      </El>

      <El>
        <El as="span" css={`${label};margin-bottom:10px`}>Preferred office</El>
        <El css="display:flex;flex-wrap:wrap;gap:7px">
          {OFFICES.map((o) => (
            <El as="button" type="button" key={o} aria-pressed={office === o} onClick={() => onOfficeChange(o)} css={chip(office === o)}>{o}</El>
          ))}
        </El>
      </El>

      <El as="label" css="display:block">
        <El as="span" css={label}>Tell us about your work</El>
        <textarea className="mx-v4-field" rows={3} name="message" placeholder="Something you built that you are proud of, and what you want to work on next." value={values.message} onChange={set('message')} style={{ resize: 'vertical', lineHeight: 1.5 }} />
      </El>

      {/* Honeypot — hidden from people, bots fill it and get a silent success */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="mx-visually-hidden" value={values.hp} onChange={set('hp')} />

      <El css="display:flex;flex-wrap:wrap;gap:14px;align-items:center;justify-content:space-between">
        <El as="span" role="status" aria-live="polite" css={`font-size:13.5px;color:${note ? '#F04423' : '#8E8A85'}`}>
          {note || `Applying for: ${role}. Email your CV to career@marioxsoftware.com.`}
        </El>
        <El as="button" type="submit" disabled={sending} css={`cursor:${sending ? 'wait' : 'pointer'};border:0;display:flex;align-items:center;gap:12px;background:#F04423;color:#08070A;padding:18px 26px;border-radius:999px;font-family:Geist,sans-serif;font-size:15px;font-weight:500;white-space:nowrap;opacity:${sending ? 0.75 : 1}`}>
          {sending ? 'Sending…' : 'Send application'} <span>&#8594;</span>
        </El>
      </El>
    </El>
  );
}
