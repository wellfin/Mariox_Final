import React, { useState } from 'react';
import El from '../El';
import { PAD, Em } from './ui';

// Newsletter band from the blog design. The design opened a mail client when no
// endpoint was set; here the signup goes through the site's own form flow, so
// it lands in the same inbox as every other enquiry.

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [hp, setHp] = useState('');
  const [state, setState] = useState('idle');
  const [note, setNote] = useState('');

  const submit = async (ev) => {
    ev.preventDefault();
    const value = email.trim();
    if (!EMAIL_RE.test(value)) { setNote('Please enter a valid email address.'); return; }
    setNote('');
    setState('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: value.split('@')[0],
          email: value,
          mobile: '',
          message: 'Newsletter signup from the blog.',
          source: 'newsletter',
          company: hp, // honeypot
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
          services: { Newsletter: true },
        }),
      });
      if (res.ok) {
        if (typeof window !== 'undefined' && window.gtag) window.gtag('event', 'newsletter_signup');
        setState('sent');
      } else {
        setNote(res.status === 429 ? 'Too many requests. Please try again in a few minutes.' : 'That did not go through. Please email admin@marioxsoftware.com.');
        setState('idle');
      }
    } catch (e) {
      setNote('That did not go through. Please email admin@marioxsoftware.com.');
      setState('idle');
    }
  };

  const sending = state === 'sending';

  return (
    <El as="section" css={`background:#F04423;color:#08070A;padding:clamp(80px,9vw,140px) ${PAD}`}>
      <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));gap:clamp(28px,4vw,72px);align-items:end">
        <El as="h2" css="margin:0;font-size:clamp(2.6rem,6.4vw,6.4rem);line-height:.86;letter-spacing:-.07em;font-weight:500">One email. <Em>Once a month.</Em></El>
        <El css="display:flex;flex-direction:column;gap:16px">
          <El as="p" css="margin:0;max-width:44ch;font-size:16.5px;line-height:1.5">New articles on apps, AI and product building, straight to your inbox. No spam.</El>
          {state === 'sent' ? (
            <El css="font-size:clamp(1.3rem,2vw,1.7rem);font-weight:500;letter-spacing:-.03em">You are on the list. Thank you.</El>
          ) : (
            <El as="form" onSubmit={submit} noValidate css="display:flex;flex-wrap:wrap;gap:10px;max-width:560px">
              <input
                type="email"
                name="newsletter_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                aria-label="Email address"
                autoComplete="email"
                style={{ flex: 1, minWidth: 220, background: 'transparent', border: 0, borderBottom: '2px solid #08070A', padding: '14px 0', fontSize: 17, color: '#08070A', outline: 'none', fontFamily: 'Geist, sans-serif' }}
              />
              {/* Honeypot — hidden from people, bots fill it and get a silent success */}
              <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="mx-visually-hidden" value={hp} onChange={(e) => setHp(e.target.value)} />
              <El as="button" type="submit" disabled={sending} css={`cursor:${sending ? 'wait' : 'pointer'};border:0;background:#08070A;color:#F4F1EA;padding:16px 26px;border-radius:999px;font-family:Geist,sans-serif;font-size:15px;font-weight:500;white-space:nowrap;opacity:${sending ? 0.75 : 1}`}>
                {sending ? 'Signing up…' : 'Sign me up'}
              </El>
            </El>
          )}
          <El as="span" role="status" aria-live="polite" css="font-size:13.5px;color:#08070A;opacity:.8">{note || (state === 'sent' ? '' : 'Unsubscribe any time.')}</El>
        </El>
      </El>
    </El>
  );
}
