import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import El from './El';
import { MONO } from './ui';
import { isolateScroll } from '@/lib/fx';

// Same lead flow as the live site: POST /api/contact (team email + acknowledgement),
// POST to the enquiries backend, Google Ads conversion on success, honeypot for bots.

const PhoneInput = dynamic(() => import('react-phone-input-2'), {
  ssr: false,
  loading: () => <input className="mx-field" disabled placeholder="+91" />,
});

export const SERVICES = [
  { serviceName: 'Web Development', serviceId: 'Web-Development' },
  { serviceName: 'App Development', serviceId: 'App-Development' },
  { serviceName: 'CMS', serviceId: 'CMS' },
  { serviceName: 'Ecommerce', serviceId: 'Ecommerce' },
  { serviceName: 'Other', serviceId: 'Other' },
];

const EMAIL_RE = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const LABEL = `display:block;${MONO};font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;color:#B7B2AA;margin-bottom:10px`;
const ERR = `display:block;margin-top:8px;${MONO};font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:#F04423`;

const empty = () => ({
  name: '',
  email: '',
  mobile: '',
  message: '',
  company: '',
  services: Object.fromEntries(SERVICES.map((s) => [s.serviceId, false])),
});

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Name is required';
  if (!v.email.trim()) e.email = 'Email is required';
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Invalid email address';
  if (!v.mobile) e.mobile = 'Mobile number is required';
  else {
    const [dialCode, number = ''] = v.mobile.split('-');
    if (dialCode === '91') {
      if (!/^[0-9]{10}$/.test(number)) e.mobile = 'Indian mobile number must be exactly 10 digits';
    } else if (number.length < 4) {
      e.mobile = 'Mobile number is too short';
    }
  }
  if (!v.message.trim()) e.message = 'Message is required';
  return e;
}

export default function ContactForm({ cityName, title = 'Get in touch', compact, id = 'enquiry', panel = true }) {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', note: 'Reply within one business day' });
  const [pageUrl, setPageUrl] = useState('');
  const phoneRef = useRef(null);

  useEffect(() => isolateScroll(phoneRef.current), []);

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));
  const toggle = (sid) => setValues((v) => ({ ...v, services: { ...v.services, [sid]: !v.services[sid] } }));

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length) {
      setStatus({ state: 'error', note: 'Please fix the highlighted fields.' });
      return;
    }
    setStatus({ state: 'sending', note: 'Sending your enquiry…' });
    const data = { ...values, pageUrl: pageUrl || window.location.href };

    try {
      const requests = [
        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }),
      ];
      const inquiriesApi = process.env.NEXT_PUBLIC_BASE_INQUIRES_API_URL;
      if (inquiriesApi) {
        requests.push(
          fetch(`${inquiriesApi}/user/inquires`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              fullName: data.name,
              email: data.email,
              phoneNumber: data.mobile,
              slug: data.pageUrl,
              city: cityName,
              service: '',
              message: data.message,
            }),
          })
        );
      }

      const results = await Promise.allSettled(requests);
      const ok = results.map((r) => r.status === 'fulfilled' && r.value.ok);

      if (ok.every(Boolean)) {
        setStatus({ state: 'sent', note: 'Your message has been sent successfully!' });
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', { send_to: 'AW-11065360955/7n7CCLmx7-IZELuEsJwp' });
        }
        setValues(empty());
        setErrors({});
      } else {
        if (!ok[0]) console.error('Contact API failed', results[0]);
        if (results[1] && !ok[1]) console.error('Inquiry API failed', results[1]);
        const rateLimited = results[0].status === 'fulfilled' && results[0].value.status === 429;
        setStatus({
          state: 'error',
          note: rateLimited ? 'Too many requests. Please try again later.' : 'One or more requests failed. Please try again.',
        });
      }
    } catch (err) {
      setStatus({ state: 'error', note: 'An error occurred. Please try again later.' });
    }
  };

  const sending = status.state === 'sending';
  const noteColor = status.state === 'error' ? '#F04423' : status.state === 'sent' ? '#F4F1EA' : '#B7B2AA';

  return (
    <El as="form" id={id} onSubmit={onSubmit} noValidate css={`display:grid;gap:clamp(24px,3vw,40px)${panel ? ';background:#0B0A0D;border:1px solid rgba(244,241,234,.16);padding:clamp(22px,3.2vw,48px)' : ''}`}>
      {title ? (
        <El as="h2" css="margin:0;font-size:clamp(1.7rem,4.4vw,3.4rem);line-height:.94;letter-spacing:-.04em;font-weight:800;text-transform:uppercase">{title}</El>
      ) : null}

      <div>
        <El as="span" css={`${LABEL};margin-bottom:14px`}>Interested in</El>
        <El css="display:flex;flex-wrap:wrap;gap:8px">
          {SERVICES.map(({ serviceName, serviceId }) => {
            const on = values.services[serviceId];
            return (
              <El
                as="button"
                type="button"
                key={serviceId}
                aria-pressed={on}
                onClick={() => toggle(serviceId)}
                data-cursor="1"
                css={`cursor:pointer;${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;border:1px solid ${on ? '#F04423' : 'rgba(244,241,234,.36)'};background:${on ? '#F04423' : 'transparent'};color:${on ? '#08070A' : '#F4F1EA'};padding:10px 13px;transition:all .25s`}
              >
                {serviceName}
              </El>
            );
          })}
        </El>
      </div>

      <El css={`display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,${compact ? '100%' : '220px'}),1fr));gap:clamp(18px,2.4vw,32px)`}>
        <El as="label" css="display:block">
          <El as="span" css={LABEL}>Your name</El>
          <input className="mx-field" type="text" name="name" autoComplete="name" value={values.name} onChange={set('name')} placeholder="Full name" aria-invalid={!!errors.name} />
          {errors.name ? <El as="span" css={ERR}>{errors.name}</El> : null}
        </El>
        <El as="label" css="display:block">
          <El as="span" css={LABEL}>Email</El>
          <input className="mx-field" type="email" name="email" autoComplete="email" value={values.email} onChange={set('email')} placeholder="you@company.com" aria-invalid={!!errors.email} />
          {errors.email ? <El as="span" css={ERR}>{errors.email}</El> : null}
        </El>
      </El>

      <div ref={phoneRef}>
        <El as="span" css={LABEL}>Mobile number</El>
        <PhoneInput
          country="in"
          masks={{ in: '.....-.....' }}
          containerClass="mx-phone"
          value={values.mobile ? values.mobile.replace('-', '') : ''}
          onChange={(value, data) => {
            const raw = value.slice(data.dialCode.length);
            setValues((v) => ({ ...v, mobile: `${data.dialCode}-${raw}` }));
          }}
          specialLabel=""
          enableSearch
          inputProps={{ name: 'mobile', 'aria-invalid': !!errors.mobile }}
        />
        {errors.mobile ? <El as="span" css={ERR}>{errors.mobile}</El> : null}
      </div>

      <El as="label" css="display:block">
        <El as="span" css={LABEL}>Message</El>
        <textarea className="mx-field" rows={5} name="message" value={values.message} onChange={set('message')} placeholder="What you are building, who it is for, and anything already decided" aria-invalid={!!errors.message} />
        {errors.message ? <El as="span" css={ERR}>{errors.message}</El> : null}
      </El>

      {/* Honeypot: real users never fill this in, bots usually do */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="mx-visually-hidden"
        value={values.company}
        onChange={set('company')}
      />

      <El css="display:flex;flex-wrap:wrap;gap:16px;align-items:center">
        <El
          as="button"
          type="submit"
          disabled={sending}
          data-cursor="start"
          css={`cursor:${sending ? 'wait' : 'pointer'};border:0;display:flex;align-items:center;gap:14px;background:#F04423;color:#08070A;padding:20px 28px;${MONO};font-size:11.5px;font-weight:500;letter-spacing:.16em;text-transform:uppercase;transition:background .35s;opacity:${sending ? 0.7 : 1}`}
          hover="background:#F4F1EA"
        >
          {sending ? 'Sending' : 'Send enquiry'}{' '}
          {sending ? (
            <El as="span" css="width:12px;height:12px;border:1.5px solid #08070A;border-right-color:transparent;border-radius:50%;animation:mxSpin .8s linear infinite" />
          ) : (
            <span>&#8599;</span>
          )}
        </El>
        <El as="span" role="status" aria-live="polite" css={`${MONO};font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:${noteColor};max-width:40ch;line-height:1.6`}>
          {status.note}
        </El>
      </El>
    </El>
  );
}
