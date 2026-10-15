import React, { useState } from 'react';
import El from './El';

// Lead forms from the SaaS landing design (hero estimate + architect review).
// The design posted to a configurable endpoint or fell back to mailto; here they
// use the site's own flow: /api/contact (team mail + acknowledgement) and the
// enquiries backend, with the same honeypot and Google Ads conversion.

const MONO = "font-family:'JetBrains Mono',monospace";
const LABEL = `display:block;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#9B968F;margin-bottom:9px`;
const INPUT = 'width:100%;background:transparent;border:0;border-bottom:1px solid rgba(244,241,234,.26);padding:10px 0;font-size:16px;color:#F4F1EA;outline:none;transition:border-color .3s';
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const HERO_FIELDS = [
  { key: 'name', label: 'Name', ph: 'Your name', type: 'text', auto: 'name' },
  { key: 'phone', label: 'Phone', ph: '+91 or international', type: 'tel', auto: 'tel' },
  { key: 'email', label: 'Work email', ph: 'you@company.com', type: 'email', auto: 'email' },
  { key: 'company', label: 'Company', ph: 'Optional', type: 'text', auto: 'organization' },
];

const ARCHITECT_FIELDS = [
  { key: 'name', label: 'Name', ph: 'Your name', type: 'text', auto: 'name' },
  { key: 'company', label: 'Company', ph: 'Company', type: 'text', auto: 'organization' },
  { key: 'email', label: 'Work email', ph: 'you@company.com', type: 'email', auto: 'email' },
  { key: 'phone', label: 'Phone', ph: 'Optional', type: 'tel', auto: 'tel' },
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
  const [values, setValues] = useState({ name: '', email: '', phone: '', company: '', hp: '' });
  const [picked, setPicked] = useState({ needs: [], budget: '', timeline: '' });
  const [state, setState] = useState('idle');
  const [error, setError] = useState('');

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));
  const toggleNeed = (n) =>
    setPicked((p) => ({ ...p, needs: p.needs.includes(n) ? p.needs.filter((x) => x !== n) : p.needs.concat(n) }));

  const submit = async (ev) => {
    ev.preventDefault();
    const name = values.name.trim(), email = values.email.trim(), phone = values.phone.trim();
    if (hero) {
      if (!name || (!email && !phone) || (email && !EMAIL_RE.test(email))) {
        setError('Please add your name and a valid email or phone number.');
        return;
      }
    } else if (!name || !email || !EMAIL_RE.test(email)) {
      setError('Please add your name and a valid work email.');
      return;
    }
    setError('');
    setState('sending');

    const brief = briefRef && briefRef.current ? briefRef.current.value.trim() : (briefValue || '').trim();
    const lines = [
      brief || (hero ? 'Estimate request from the SaaS landing page.' : 'Architect review request.'),
      picked.needs.length ? '\nNeeds: ' + picked.needs.join(', ') : '',
      picked.budget ? '\nBudget: ' + picked.budget : '',
      picked.timeline ? '\nTimeline: ' + picked.timeline : '',
      values.company.trim() ? '\nCompany: ' + values.company.trim() : '',
      '\nSource: ' + (hero ? 'saas-landing-hero' : 'saas-landing-architect'),
    ].join('');

    const payload = {
      name,
      email,
      mobile: phone,
      message: lines,
      company: values.hp, // honeypot, same field name the API checks
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      services: Object.fromEntries(picked.needs.map((n) => [n, true])),
    };

    try {
      const requests = [
        fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }),
      ];
      const inquiriesApi = process.env.NEXT_PUBLIC_BASE_INQUIRES_API_URL;
      if (inquiriesApi) {
        requests.push(
          fetch(`${inquiriesApi}/user/inquires`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              fullName: name,
              email,
              phoneNumber: phone,
              slug: payload.pageUrl,
              city: '',
              service: picked.needs.join(', '),
              message: lines,
            }),
          })
        );
      }
      const results = await Promise.allSettled(requests);
      const ok = results.map((r) => r.status === 'fulfilled' && r.value.ok);
      if (ok.every(Boolean)) {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'generate_lead', { form: hero ? 'hero' : 'architect', budget: picked.budget });
          window.gtag('event', 'conversion', { send_to: 'AW-11065360955/7n7CCLmx7-IZELuEsJwp' });
        }
        setState('sent');
      } else {
        const limited = results[0].status === 'fulfilled' && results[0].value.status === 429;
        setError(limited ? 'Too many requests. Please try again later.' : 'Something went wrong. Please try again or call us.');
        setState('idle');
      }
    } catch (e) {
      setError('Something went wrong. Please try again or call us.');
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
  const note = error || (hero ? 'No spam, no sales sequence. 100% confidential.' : 'An architect replies within one business day. No sales sequence.');

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
              style={{ font: 'inherit' }}
            />
          </El>
        ))}
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

      {!hero ? (
        <El as="label" css="display:block">
          <El as="span" css={LABEL}>What are you building</El>
          <textarea
            className="mx-lead-field"
            rows={3}
            name="brief"
            ref={briefRef}
            defaultValue={briefValue}
            onChange={onBriefChange}
            placeholder="Platform, users, integrations, anything already decided"
            style={{ resize: 'vertical', lineHeight: 1.5, font: 'inherit' }}
          />
        </El>
      ) : null}

      {/* Honeypot — hidden from people, bots fill it and get a silent success */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="mx-visually-hidden" value={values.hp} onChange={set('hp')} />

      <El
        as="button"
        type="submit"
        disabled={sending}
        data-cursor="start"
        css={`cursor:${sending ? 'wait' : 'pointer'};border:0;width:100%;display:flex;align-items:center;justify-content:space-between;gap:14px;background:#F04423;color:#08070A;padding:${hero ? '19px 22px' : '20px 24px'};${MONO};font-size:${hero ? '12px' : '12px'};font-weight:500;letter-spacing:.14em;text-transform:uppercase;transition:background .3s;opacity:${sending ? 0.75 : 1}`}
        hover="background:#F4F1EA"
      >
        <span>{sending ? 'Sending…' : hero ? 'Get my free estimate' : 'Request architect review'}</span><span>&#8594;</span>
      </El>
      <El as="span" role="status" aria-live="polite" css={`font-size:13px;line-height:1.5;color:${error ? '#F04423' : '#9B968F'}`}>{note}</El>
    </El>
  );
}

export { INPUT };
