import React, { useCallback, useEffect, useRef, useState } from 'react';
import El from '@/components/El';
import Nav from '@/components/final/Nav';
import Footer from '@/components/final/Footer';
import { Seo, JsonLd } from '@/components/sections';
import { SITE_URL } from '@/data/site';
import {
  DEMO, FILM, PHONE_LEN, DIAL_CODES, heroTrust, heroBadges, heroNeeds, heroBudgets,
  logoWall, brands, stats, teamFacts, appIncluded, appPlatforms, apps, industries,
  aiServices, aiStack, howCards, stories, cases, steps, certs, trust, leaders, offices,
  enterpriseBudgets, enterpriseTimelines, faq,
} from '@/data/appDevelopmentLanding';

// The app development landing page, ported from the design file in
// mariox-code/app-development-page. The site header and footer replace the
// design's own minimal ones; everything between them is the design as drawn.

const MONO = "font-family:'JetBrains Mono',monospace";
const PAD = 'clamp(16px,4vw,56px)';
const ORANGE = '#F04423';
const FIELD = 'width:100%;background:transparent;border:0;border-bottom:1px solid rgba(244,241,234,.26);padding:9px 0;font-size:16px;color:#F4F1EA;outline:none;transition:border-color .3s';
const CHIP = `cursor:pointer;min-height:44px;display:inline-flex;align-items:center;${MONO};font-size:11px;letter-spacing:.06em;padding:11px 13px;transition:all .22s`;
const SECTION = `padding:clamp(64px,9vw,150px) ${PAD} 0`;
const EYEBROW = `${MONO};letter-spacing:.16em;text-transform:uppercase;font-size:11px;color:#9B968F;margin-bottom:16px`;
const BIG_H2 = 'margin:0;font-size:clamp(2.2rem,5.4vw,4.8rem);line-height:.92;letter-spacing:-.05em;font-weight:800';
const SERIF_ACCENT = `font-family:'Instrument Serif',serif;font-weight:400;letter-spacing:-.02em;color:${ORANGE}`;
const CTA = `cursor:pointer;display:flex;align-items:center;gap:12px;background:${ORANGE};color:#08070A;padding:16px 22px;${MONO};font-size:11.5px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;transition:background .3s`;
const TAG = `${MONO};font-size:11px;letter-spacing:.08em;border:1px solid rgba(244,241,234,.22);color:#D9D5CE;padding:9px 12px`;

// Inline styles cannot express :focus, so the one focus rule the design uses
// rides along as a stylesheet.
const FOCUS_CSS = '.mxad input:focus,.mxad textarea:focus,.mxad select:focus{border-bottom-color:#F04423}';

const chipOn = (on) => `border:1px solid ${on ? ORANGE : 'rgba(244,241,234,.22)'};background:${on ? ORANGE : 'transparent'};color:${on ? '#08070A' : '#B7B2AA'}`;

const UTM = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'];

// The ad parameters that brought the visitor here, kept for the whole session.
function tracking() {
  const out = {};
  try {
    const qs = new URLSearchParams(window.location.search);
    UTM.forEach((k) => {
      const v = qs.get(k) || sessionStorage.getItem('mx_' + k) || '';
      if (v) out[k] = v;
    });
  } catch (e) { /* private mode */ }
  return out;
}

// Without a form endpoint the lead opens the visitor's mail client, as the
// design's README describes.
function deliver(data, subject) {
  const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT || '';
  if (endpoint) {
    try {
      fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    } catch (e) { /* ignore */ }
  } else {
    const body = Object.entries(data).map(([k, v]) => `${k}: ${v || '—'}`).join('\n');
    window.location.href = `mailto:admin@marioxsoftware.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  if (typeof window.gtag === 'function') window.gtag('event', 'generate_lead', { form: data.source, budget: data.budget });
}

function scrollToTalk(prefill) {
  const t = document.getElementById('talk');
  if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
  setTimeout(() => {
    const b = document.getElementById('mxad-brief');
    if (b && !b.value) b.value = prefill;
  }, 300);
}

export default function AppDevelopment() {
  const [narrow, setNarrow] = useState(false);
  const [now, setNow] = useState(null);
  const [app, setApp] = useState(0);
  const [video, setVideo] = useState(null);

  // Hero form
  const hName = useRef(null); const hEmail = useRef(null); const hCompany = useRef(null);
  const hPhone = useRef(null); const hCode = useRef(null); const hMsg = useRef(null);
  const [hCodeV, setHCodeV] = useState('+91');
  const [hNeeds, setHNeeds] = useState([]);
  const [hBudget, setHBudget] = useState('');
  const [hError, setHError] = useState('');
  const [hSent, setHSent] = useState(false);

  // Architect form
  const fName = useRef(null); const fCompany = useRef(null); const fEmail = useRef(null); const fPhone = useRef(null);
  const brief = useRef(null);
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    try {
      const qs = new URLSearchParams(window.location.search);
      UTM.forEach((k) => { const v = qs.get(k); if (v) sessionStorage.setItem('mx_' + k, v); });
    } catch (e) { /* private mode */ }

    const mq = window.matchMedia('(max-width: 560px)');
    const onMq = () => {
      setNarrow(mq.matches);
      document.body.style.paddingBottom = mq.matches ? '72px' : '';
    };
    onMq();
    mq.addEventListener('change', onMq);

    const onKey = (e) => { if (e.key === 'Escape') setVideo(null); };
    window.addEventListener('keydown', onKey);

    setNow(Date.now());
    const clock = setInterval(() => setNow(Date.now()), 30000);

    return () => {
      mq.removeEventListener('change', onMq);
      window.removeEventListener('keydown', onKey);
      clearInterval(clock);
      document.body.style.paddingBottom = '';
    };
  }, []);

  const onPhoneInput = useCallback((e) => {
    const code = (hCode.current && hCode.current.value) || '+91';
    const max = (PHONE_LEN[code] || [6, 14])[1];
    let d = e.target.value.replace(/[^0-9]/g, '');
    if (code === '+91' && d.length > 10 && d.startsWith('91')) d = d.slice(2);
    if (d.length && d[0] === '0' && code !== '+39') d = d.replace(/^0+/, '');
    d = d.slice(0, max);
    if (e.target.value !== d) e.target.value = d;
    setHError('');
  }, []);

  const onCodeChange = useCallback(() => {
    if (hPhone.current) onPhoneInput({ target: hPhone.current });
    setHCodeV(hCode.current ? hCode.current.value : '+91');
  }, [onPhoneInput]);

  const submitHero = () => {
    const v = (r) => (r.current ? r.current.value.trim() : '');
    const name = v(hName); const email = v(hEmail);
    const num = v(hPhone).replace(/[^0-9]/g, '');
    const code = hCode.current ? hCode.current.value : '+91';
    const rule = PHONE_LEN[code] || [6, 14];
    if (!name) return setHError('Please add your name.');
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return setHError('Please enter a valid email address.');
    if (!email && !num) return setHError('Please add your phone number or email.');
    if (num && (num.length < rule[0] || num.length > rule[1])) {
      const len = rule[0] === rule[1] ? rule[0] : `${rule[0]}–${rule[1]}`;
      return setHError(`Please enter a valid ${rule[2]} phone number (${len} digits).`);
    }
    if (num && code === '+91' && !/^[6-9]/.test(num)) return setHError('Indian mobile numbers start with 6, 7, 8 or 9.');
    const data = {
      name, email, phone: num ? `${code} ${num}` : '', company: v(hCompany), message: v(hMsg),
      needs: hNeeds.join(', '), budget: hBudget, page: 'app-development', source: 'hero', ...tracking(),
    };
    deliver(data, `Estimate request — ${name}${data.company ? ` (${data.company})` : ''}`);
    setHError('');
    setHSent(true);
    return undefined;
  };

  const submitArchitect = () => {
    const v = (r) => (r.current ? r.current.value.trim() : '');
    const name = v(fName); const email = v(fEmail);
    if (!name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return setError('Please add your name and a valid work email.');
    }
    const data = {
      name, email, company: v(fCompany), phone: v(fPhone), budget, timeline,
      brief: v(brief), page: 'app-development', source: 'architect', ...tracking(),
    };
    deliver(data, `Enterprise enquiry — ${name}${data.company ? ` (${data.company})` : ''}`);
    setError('');
    setSent(true);
    return undefined;
  };

  const active = apps[app];
  const phoneRule = PHONE_LEN[hCodeV] || [6, 14];
  const phonePh = phoneRule[0] === phoneRule[1] ? `${phoneRule[0]}-digit number` : `${phoneRule[0]}–${phoneRule[1]} digits`;

  const description = 'Mobile app development company for iOS, Android, Flutter and React Native apps. 300+ products shipped by 100+ senior engineers. Free app estimate in one business day.';

  return (
    <El as="div" className="mxad" css="background:#08070A;color:#F4F1EA;font-family:Archivo,'Helvetica Neue',Helvetica,sans-serif;min-height:100vh">
      <Seo title="Mobile App Development Company — iOS, Android & Flutter Apps | Mariox Software" description={description} />
      <style dangerouslySetInnerHTML={{ __html: FOCUS_CSS }} />
      <JsonLd
        id="app-development-faq"
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        }}
      />
      <JsonLd
        id="app-development-service"
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Mobile app development',
          serviceType: 'Mobile app development',
          provider: { '@type': 'Organization', name: 'Mariox Software', url: SITE_URL },
          areaServed: ['IN', 'US', 'AU', 'GB'],
          url: `${SITE_URL}/app-development`,
        }}
      />

      <Nav active="app-development" ctaHref="#enquiry" ctaLabel="Get free estimate" />

      {/* Phone-only action bar, pinned above the fold's bottom edge. */}
      <El css={`display:${narrow ? 'flex' : 'none'};position:fixed;left:0;right:0;bottom:0;z-index:60;gap:8px;padding:10px 12px calc(10px + env(safe-area-inset-bottom));background:rgba(8,7,10,.94);backdrop-filter:blur(12px);border-top:1px solid rgba(244,241,234,.14)`}>
        <El as="a" href="tel:+919599287045" aria-label="Call Mariox" css={`flex:1;min-height:48px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(244,241,234,.3);color:#F4F1EA;${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase`}>Call</El>
        <El as="a" href="https://wa.me/919599287045?text=Hi%20Mariox%2C%20I%20want%20to%20build%20an%20app" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Mariox" css={`flex:1;min-height:48px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(244,241,234,.3);color:#F4F1EA;${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase`}>WhatsApp</El>
        <El as="a" href="#enquiry" css={`flex:1.6;min-height:48px;display:flex;align-items:center;justify-content:center;background:${ORANGE};color:#08070A;${MONO};font-size:11px;font-weight:500;letter-spacing:.12em;text-transform:uppercase`}>Free estimate</El>
      </El>

      {/* Hero: the pitch on the left, the estimate form on the right. */}
      <El as="section" css={`display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,400px),1fr));gap:clamp(32px,5vw,80px);align-items:start;padding:clamp(40px,6vw,96px) ${PAD} clamp(40px,5vw,80px)`}>
        <El css="padding-top:clamp(0px,1.5vw,20px)">
          <El css="display:flex;align-items:center;gap:11px;margin-bottom:clamp(18px,2.4vw,28px)">
            <El as="span" css={`width:8px;height:8px;background:${ORANGE}`} />
            <El as="span" css={`${MONO};font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#9B968F`}>App development · trusted by MILKRUN, Graphy, Fampay &amp; HotDoc</El>
          </El>
          <El as="h1" css="margin:0;max-width:17ch;font-size:clamp(2.4rem,5.4vw,4.6rem);line-height:.95;letter-spacing:-.045em;font-weight:800;text-wrap:balance">
            Mobile App Development Company. <El as="span" css={`color:${ORANGE}`}>Apps people open every day.</El>
          </El>
          <El as="p" css="margin:clamp(20px,2.6vw,30px) 0 0;max-width:46ch;font-size:clamp(16px,1.35vw,19px);line-height:1.55;color:#B7B2AA;text-wrap:pretty">iOS, Android, Flutter and React Native apps, from first wireframe to store release and beyond. Built by 100+ senior engineers, with a fixed-scope estimate in one business day.</El>

          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,210px),1fr));gap:14px 28px;margin-top:clamp(26px,3.2vw,40px);max-width:560px">
            {heroTrust.map((h) => (
              <El key={h.b} css="display:flex;gap:12px;align-items:baseline">
                <El as="span" css={`width:7px;height:7px;background:${ORANGE};flex-shrink:0;transform:translateY(-2px)`} />
                <El as="span" css="font-size:15px;line-height:1.4"><strong style={{ fontWeight: 700 }}>{h.b}</strong> <El as="span" css="color:#9B968F">{h.t}</El></El>
              </El>
            ))}
          </El>

          <El css="margin-top:clamp(28px,3.4vw,44px);max-width:560px;border-top:1px solid rgba(244,241,234,.14);padding-top:clamp(18px,2.2vw,24px)">
            <El as="span" css={`display:block;${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9B968F;margin-bottom:14px`}>Certified engineers &amp; verified reviews</El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,120px),1fr));gap:8px">
              {heroBadges.map((b) => (
                <El key={b.t} css="border:1px solid rgba(244,241,234,.16);padding:12px 12px 11px;display:flex;flex-direction:column;gap:5px;min-height:66px;justify-content:center">
                  <El as="span" css="font-size:14px;font-weight:800;letter-spacing:-.02em;line-height:1.1">{b.t}</El>
                  <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.08em;color:${b.c}`}>{b.s}</El>
                </El>
              ))}
            </El>
          </El>

          <El as="a" href="tel:+919599287045" css={`display:inline-flex;align-items:center;gap:12px;margin-top:clamp(26px,3.2vw,40px);${MONO};font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#F4F1EA;border-bottom:1px solid ${ORANGE};padding-bottom:5px`}>Or call +91 9599287045 ↗</El>
        </El>

        <El id="enquiry" css="border:1px solid rgba(244,241,234,.2);background:#0E0D11;padding:clamp(22px,2.6vw,36px)">
          <El css="display:flex;align-items:baseline;gap:11px;padding-bottom:14px;border-bottom:1px solid rgba(244,241,234,.16);margin-bottom:clamp(18px,2.2vw,24px)">
            <El as="span" css={`width:8px;height:8px;background:${ORANGE};align-self:center`} />
            <El as="span" css="font-size:17px;font-weight:800;letter-spacing:-.02em">Get a free app estimate</El>
            <El as="span" css={`margin-left:auto;${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#9B968F`}>2 min</El>
          </El>

          {hSent ? (
            <El css="display:grid;gap:14px;padding:clamp(12px,2vw,24px) 0">
              <El css="font-size:clamp(1.4rem,2.4vw,1.9rem);font-weight:800;letter-spacing:-.04em;line-height:1.05">Thank you. We’ll be in touch within one business day.</El>
              <El as="p" css="margin:0;font-size:15px;line-height:1.55;color:#B7B2AA">A senior engineer will review your requirement and reply with first questions and an estimate range.</El>
            </El>
          ) : (
            <El css="display:grid;gap:18px">
              <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,160px),1fr));gap:16px">
                {[
                  { label: 'Name', ph: 'Your name', type: 'text', ref: hName, auto: 'name' },
                  { label: 'Work email', ph: 'you@company.com', type: 'email', ref: hEmail, auto: 'email' },
                  { label: 'Company', ph: 'Optional', type: 'text', ref: hCompany, auto: 'organization' },
                ].map((f) => (
                  <El as="label" key={f.label} css="display:block">
                    <El as="span" css={`display:block;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#9B968F;margin-bottom:8px`}>{f.label}</El>
                    <El as="input" type={f.type} placeholder={f.ph} ref={f.ref} autoComplete={f.auto} css={FIELD} />
                  </El>
                ))}
              </El>

              <El>
                <El as="span" css={`display:block;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#9B968F;margin-bottom:8px`}>Phone / WhatsApp</El>
                <El css="display:flex;gap:12px;align-items:flex-end">
                  <El as="select" ref={hCode} defaultValue="+91" onChange={onCodeChange} aria-label="Country code" css={`flex-shrink:0;width:112px;${FIELD};cursor:pointer`}>
                    {DIAL_CODES.map((c) => <option key={c.l} value={c.v} style={{ background: '#0E0D11', color: '#F4F1EA' }}>{c.l}</option>)}
                  </El>
                  <El as="input" type="tel" inputMode="numeric" ref={hPhone} onInput={onPhoneInput} maxLength={phoneRule[1]} placeholder={phonePh} autoComplete="tel-national" css={`flex:1;min-width:0;${FIELD}`} />
                </El>
              </El>

              <El as="label" css="display:block">
                <El as="span" css={`display:block;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#9B968F;margin-bottom:8px`}>Message</El>
                <El as="textarea" ref={hMsg} rows={3} placeholder="Tell us about the app: what it does, who it is for, any deadline" css={`${FIELD};resize:vertical;font-family:inherit;line-height:1.45`} />
              </El>

              <El>
                <El as="span" css={`display:block;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#9B968F;margin-bottom:10px`}>I need</El>
                <El css="display:flex;flex-wrap:wrap;gap:7px">
                  {heroNeeds.map((label) => {
                    const on = hNeeds.includes(label);
                    return (
                      <El
                        as="span" key={label} role="button" tabIndex={0}
                        onClick={() => setHNeeds(on ? hNeeds.filter((x) => x !== label) : hNeeds.concat(label))}
                        css={`${CHIP};${chipOn(on)}`}
                      >{label}</El>
                    );
                  })}
                </El>
              </El>

              <El>
                <El as="span" css={`display:block;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#9B968F;margin-bottom:10px`}>Budget</El>
                <El css="display:flex;flex-wrap:wrap;gap:7px">
                  {heroBudgets.map((label) => (
                    <El as="span" key={label} role="button" tabIndex={0} onClick={() => setHBudget(label)} css={`${CHIP};${chipOn(hBudget === label)}`}>{label}</El>
                  ))}
                </El>
              </El>

              <El as="span" role="button" tabIndex={0} onClick={submitHero} hover="background:#F4F1EA" css={`cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:14px;background:${ORANGE};color:#08070A;padding:19px 22px;${MONO};font-size:12px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;transition:background .3s`}>
                <span>Get my free estimate</span><span>→</span>
              </El>
              <El as="span" css={`font-size:13px;line-height:1.5;color:${hError ? ORANGE : '#77736C'}`}>{hError || 'No spam, no sales sequence. 100% confidential.'}</El>
            </El>
          )}
        </El>
      </El>

      {/* Client wall */}
      <El as="section" id="clients" css={`padding:clamp(40px,5vw,72px) ${PAD}`}>
        <El css="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:12px 24px;margin-bottom:clamp(18px,2.2vw,28px)">
          <El as="h2" css="margin:0;font-size:clamp(1.6rem,3vw,2.6rem);letter-spacing:-.045em;font-weight:800">Trusted by <El as="span" css={SERIF_ACCENT}>42 brands</El> in four countries.</El>
          <El as="span" css={`${MONO};letter-spacing:.16em;text-transform:uppercase;font-size:11px;color:#9B968F`}>300+ products shipped since 2016</El>
        </El>
        <El css="display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,150px),1fr));border-top:1px solid rgba(244,241,234,.14);border-left:1px solid rgba(244,241,234,.14)">
          {logoWall.map((g) => (
            <El key={g.name} title={g.name} hover="background:#141216" css="display:flex;align-items:center;gap:12px;padding:14px 14px;min-height:72px;border-right:1px solid rgba(244,241,234,.14);border-bottom:1px solid rgba(244,241,234,.14);transition:background .3s">
              <El as="span" css={`width:40px;height:40px;flex-shrink:0;border-radius:8px;display:flex;align-items:center;justify-content:center;background-color:${g.bgc};background-image:${g.icon};background-size:28px 28px;background-position:center;background-repeat:no-repeat;color:#08070A;font-size:15px;font-weight:800;letter-spacing:-.03em`}>{g.ini}</El>
              <El as="span" css="font-size:15px;font-weight:700;letter-spacing:-.02em;line-height:1.1;color:#F4F1EA">{g.name}</El>
            </El>
          ))}
        </El>
      </El>

      {/* Brand ticker */}
      <El as="section" css="border-top:1px solid rgba(244,241,234,.1);border-bottom:1px solid rgba(244,241,234,.1);padding:clamp(22px,2.8vw,34px) 0;overflow:hidden">
        <El css={`padding:0 ${PAD} clamp(16px,2vw,24px);${MONO};font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#9B968F`}>Products we’ve engineered for</El>
        <El css="display:flex;width:max-content;animation:mxTick 46s linear infinite">
          {[0, 1].map((loop) => (
            <El key={loop} aria-hidden={loop === 1} css="display:flex;align-items:center;gap:clamp(40px,5vw,80px);padding:0 clamp(20px,2.5vw,40px)">
              {brands.map((b) => <El as="span" key={b} css="font-size:clamp(1.4rem,2.6vw,2.2rem);font-weight:800;letter-spacing:-.04em;white-space:nowrap;color:#F4F1EA;opacity:.82">{b}</El>)}
            </El>
          ))}
        </El>
      </El>

      {/* Headline numbers */}
      <El as="section" css={`display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));padding:0 ${PAD}`}>
        {stats.map((s) => (
          <El key={s.l} css="padding:clamp(28px,4vw,56px) clamp(4px,1vw,12px);border-bottom:1px solid rgba(244,241,234,.1)">
            <El css="font-size:clamp(2.6rem,5.4vw,4.6rem);font-weight:800;letter-spacing:-.05em;line-height:.9">{s.v}</El>
            <El css={`margin-top:12px;${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9B968F`}>{s.l}</El>
          </El>
        ))}
      </El>

      {/* Brand film */}
      <El as="section" id="film" css={SECTION}>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(32px,4.4vw,60px)">
          <El>
            <El css={EYEBROW}>The Mariox film · 60 seconds</El>
            <El as="h2" css={BIG_H2}>See who builds <El as="span" css={SERIF_ACCENT}>your app.</El></El>
          </El>
          <El as="p" css="margin:0;max-width:46ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">The team, the offices, the industries and the people behind every app we ship, in one minute.</El>
        </El>
        <El css="position:relative;aspect-ratio:16/9;border:1px solid rgba(244,241,234,.16);background:#08070A;overflow:hidden">
          <El as="iframe" src={FILM} title="Mariox Software brand film" loading="lazy" allow="autoplay; fullscreen" css="position:absolute;inset:0;width:100%;height:100%;border:0;background:#08070A" />
        </El>
      </El>

      {/* The team */}
      <El as="section" id="team" css={`padding:clamp(64px,9vw,140px) ${PAD} 0`}>
        <El css="display:flex;justify-content:space-between;align-items:center;gap:16px;padding-bottom:16px;border-bottom:1px solid rgba(244,241,234,.18);margin-bottom:clamp(14px,1.6vw,20px);position:relative">
          <El as="span" css="display:flex;align-items:center;gap:12px">
            <El as="span" css={`width:22px;height:22px;background:${ORANGE}`} />
            <El as="span" css="font-size:20px;font-weight:800;letter-spacing:-.04em">MARIOX</El>
          </El>
          <El as="span" css={`${MONO};letter-spacing:.16em;text-transform:uppercase;font-size:12px;white-space:nowrap`}><El as="span" css={`color:${ORANGE}`}>01</El>&#160;&#160;&#160;The team</El>
          <El as="span" css={`position:absolute;left:0;bottom:-1px;width:120px;height:2px;background:${ORANGE}`} />
        </El>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:clamp(8px,1vw,16px)">
          <El as="figure" css="margin:0;position:relative;min-height:clamp(340px,40vw,640px);overflow:hidden;background:#141216">
            <El role="img" aria-label="The Mariox team" css="position:absolute;inset:0;background:url('/assets/company/team-group-2026.jpg') center 40%/cover no-repeat" />
            <El aria-hidden="true" css="position:absolute;inset:0;background:linear-gradient(0deg,rgba(8,7,10,.92) 0%,rgba(8,7,10,.2) 45%,rgba(8,7,10,0) 70%)" />
            <El as="figcaption" css="position:absolute;left:clamp(18px,2.4vw,40px);bottom:clamp(18px,2.4vw,36px);right:20px">
              <El as="h2" css="margin:0;font-size:clamp(2.6rem,6vw,6rem);line-height:.86;letter-spacing:-.06em;font-weight:800;color:#F4F1EA">100+ engineers.<br /><El as="span" css={SERIF_ACCENT}>All in-house.</El></El>
            </El>
          </El>
          <El css="display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:clamp(8px,1vw,16px);min-height:clamp(340px,40vw,640px)">
            <El role="img" aria-label="The team in the Noida office" css="grid-column:span 2;background:#141216 url('/assets/company/team-office-seated.jpg') center/cover no-repeat" />
            <El role="img" aria-label="Team gathering" css="background:#141216 url('/assets/company/team-offsite-group.jpg') center/cover no-repeat" />
            <El role="img" aria-label="The team at the office" css="background:#141216 url('/assets/company/team-office-group.jpg') center/cover no-repeat" />
          </El>
        </El>
        <El css="display:flex;flex-wrap:wrap;gap:clamp(20px,4vw,70px);align-items:baseline;margin-top:clamp(28px,3.4vw,48px);padding-top:clamp(18px,2vw,24px);border-top:1px solid rgba(244,241,234,.18)">
          {teamFacts.map((t) => (
            <El key={t.l} css="display:flex;gap:14px;align-items:baseline">
              <El as="span" css={`font-size:clamp(2.2rem,3.6vw,3.4rem);font-weight:300;letter-spacing:-.05em;color:${t.c}`}>{t.v}</El>
              <El as="span" css={`${MONO};letter-spacing:.16em;text-transform:uppercase;font-size:11px;color:#B7B2AA`}>{t.l}</El>
            </El>
          ))}
        </El>
        <El as="p" css="margin:clamp(22px,2.6vw,32px) 0 0;max-width:60ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">No freelancers and no hand-offs to subcontractors. The designers, mobile engineers, backend engineers and QA on your app sit in our own offices.</El>
      </El>

      {/* What the build includes */}
      <El as="section" css={SECTION}>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));gap:clamp(32px,5vw,96px);align-items:end;margin-bottom:clamp(32px,4.6vw,64px)">
          <El as="h2" css="margin:0;max-width:15ch;font-size:clamp(2rem,4.6vw,3.8rem);line-height:.95;letter-spacing:-.045em;font-weight:800">Everything an app needs to <El as="span" css={`color:${ORANGE}`}>survive launch day.</El></El>
          <El as="p" css="margin:0;max-width:44ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">The app is only the visible part. We build the backend, admin panel, payments and release pipeline with it, so version two is easier than version one.</El>
        </El>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:clamp(10px,1.2vw,16px)">
          {appIncluded.map((s) => (
            <El key={s.n} hover={`background:${ORANGE};color:#08070A;border-color:${ORANGE}`} css="border:1px solid rgba(244,241,234,.14);padding:clamp(22px,2.6vw,34px);display:flex;flex-direction:column;gap:14px;min-height:210px;transition:background .35s,color .35s,border-color .35s">
              <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;opacity:.6`}>{s.n}</El>
              <El css="margin-top:auto;font-size:clamp(1.2rem,2vw,1.6rem);font-weight:800;letter-spacing:-.035em;line-height:1.05">{s.t}</El>
              <El as="p" css="margin:0;font-size:14.5px;line-height:1.5;opacity:.75">{s.b}</El>
            </El>
          ))}
        </El>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:clamp(20px,3vw,44px);margin-top:clamp(40px,5vw,72px);padding-top:clamp(24px,3vw,36px);border-top:1px solid rgba(244,241,234,.14)">
          {appPlatforms.map((g) => (
            <El key={g.n}>
              <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${ORANGE}`}>{g.n}</El>
              <El css="margin-top:12px;font-size:clamp(1.1rem,1.7vw,1.35rem);font-weight:700;letter-spacing:-.025em">{g.t}</El>
              <El as="p" css="margin:8px 0 0;font-size:14.5px;line-height:1.5;color:#B7B2AA">{g.b}</El>
            </El>
          ))}
        </El>
      </El>

      {/* "Build an app like…" picker */}
      <El as="section" id="apps" css={SECTION}>
        <El css="display:flex;flex-wrap:wrap;gap:20px;align-items:flex-end;justify-content:space-between;margin-bottom:clamp(28px,4vw,52px)">
          <El as="h2" css="margin:0;max-width:16ch;font-size:clamp(2rem,4.6vw,3.8rem);line-height:.95;letter-spacing:-.045em;font-weight:800">Looking to build an app like…</El>
          <El as="span" css={`${MONO};font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#9B968F`}>Pick a model to see how we’d build it</El>
        </El>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:clamp(24px,4vw,64px);align-items:start">
          <El css="display:flex;flex-direction:column;border-top:1px solid rgba(244,241,234,.14)">
            {apps.map((a, i) => (
              <El
                key={a.name} role="button" tabIndex={0} onClick={() => setApp(i)} hover="color:#F4F1EA"
                css={`cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:16px;align-items:baseline;padding:clamp(14px,1.8vw,20px) 4px;border-bottom:1px solid rgba(244,241,234,.14);color:${i === app ? '#F4F1EA' : '#77736C'};transition:color .3s`}
              >
                <El as="span" css={`${MONO};font-size:11px;color:${i === app ? ORANGE : '#57544F'}`}>{String(i + 1).padStart(2, '0')}</El>
                <El as="span" css="font-size:clamp(1.25rem,2.4vw,1.9rem);font-weight:800;letter-spacing:-.04em;line-height:1">{a.name}</El>
                <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;opacity:.75;text-align:right`}>{a.cat}</El>
              </El>
            ))}
          </El>

          <El css="display:flex;flex-direction:column;gap:clamp(18px,2.2vw,26px)">
            <El css="position:relative;aspect-ratio:16/10;border:1px solid rgba(244,241,234,.14);background:#111013;overflow:hidden">
              <El
                as="iframe" key={active.demo} src={`${DEMO}?app=${active.demo}`}
                title={`How we would build an app like ${active.name}`} loading="lazy" tabIndex={-1} aria-hidden="true"
                css="position:absolute;inset:0;width:100%;height:100%;border:0;pointer-events:none;background:#08070A"
              />
            </El>
            <El css="font-size:clamp(1.4rem,2.6vw,2.1rem);font-weight:800;letter-spacing:-.04em;line-height:1.02">{active.title}</El>
            <El as="p" css="margin:0;max-width:52ch;font-size:16px;line-height:1.55;color:#B7B2AA">{active.body}</El>
            <El css="display:flex;flex-wrap:wrap;gap:8px">
              {active.features.map((f) => <El as="span" key={f} css={TAG}>{f}</El>)}
            </El>
            <El css="display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between;padding-top:18px;border-top:1px solid rgba(244,241,234,.14)">
              <El as="span" css={`${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#9B968F`}>{active.proof}</El>
              <El
                as="span" role="button" tabIndex={0} hover="background:#F4F1EA" css={CTA}
                onClick={() => scrollToTalk(`We want to build an app like ${active.name} (${active.cat.toLowerCase()}). Key features: ${active.features.join(', ')}.`)}
              >Quote an app like {active.name} <span>→</span></El>
            </El>
          </El>
        </El>
      </El>

      {/* Industries */}
      <El as="section" id="industries" css={SECTION}>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(32px,4.4vw,60px)">
          <El>
            <El css={EYEBROW}>Industries</El>
            <El as="h2" css={BIG_H2}>Apps for the industries <El as="span" css={SERIF_ACCENT}>people use every day.</El></El>
          </El>
          <El as="p" css="margin:0;max-width:46ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">Rides, groceries, food, payments, health and learning. Each has its own rules, peaks and edge cases, and we have built for all of them.</El>
        </El>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:clamp(10px,1.2vw,16px)">
          {industries.map((i) => (
            <El as="a" key={i.n} href={i.href} css="position:relative;display:flex;flex-direction:column;justify-content:flex-end;min-height:clamp(320px,30vw,420px);overflow:hidden;background:#141216;color:#F4F1EA;isolation:isolate">
              <El aria-hidden="true" hover="transform:scale(1.05)" css={`position:absolute;inset:0;z-index:-2;background-color:#141216;background-size:cover;background-position:center top;background-image:${i.bg};transition:transform 1.2s cubic-bezier(.2,.8,.2,1)`} />
              <El aria-hidden="true" css="position:absolute;inset:0;z-index:-1;background:linear-gradient(0deg,rgba(8,7,10,.96) 0%,rgba(8,7,10,.7) 45%,rgba(8,7,10,.15) 100%)" />
              <El css="padding:clamp(20px,2.2vw,28px);display:flex;flex-direction:column;gap:12px">
                <El css={`display:flex;justify-content:space-between;gap:12px;${MONO};letter-spacing:.16em;text-transform:uppercase;font-size:10.5px`}>
                  <El as="span" css={`color:${ORANGE}`}>{i.n}</El><El as="span" css="color:#B7B2AA">{i.tag}</El>
                </El>
                <El as="h3" css="margin:0;font-size:clamp(1.7rem,2.6vw,2.4rem);line-height:.95;letter-spacing:-.05em;font-weight:800">{i.name}</El>
                <El as="p" css="margin:0;font-size:15px;line-height:1.45;color:#D9D5CD">{i.apps}</El>
                <El css="display:flex;justify-content:space-between;gap:12px;align-items:baseline;padding-top:12px;border-top:1px solid rgba(244,241,234,.18);font-size:14px">
                  <El as="span" css="color:#B7B2AA">{i.proof}</El><El as="span" css={`color:${ORANGE};white-space:nowrap`}>{i.cta} →</El>
                </El>
              </El>
            </El>
          ))}
        </El>
      </El>

      {/* AI */}
      <El as="section" id="ai" css={`margin-top:clamp(64px,9vw,150px);padding:clamp(64px,9vw,140px) ${PAD};border-top:1px solid rgba(244,241,234,.1);border-bottom:1px solid rgba(244,241,234,.1);background:#0C0B0F`}>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));gap:clamp(32px,5vw,96px);align-items:end;margin-bottom:clamp(36px,5vw,72px)">
          <El>
            <El css="display:flex;align-items:center;gap:11px;margin-bottom:clamp(18px,2.4vw,28px)">
              <El as="span" css={`width:8px;height:8px;background:${ORANGE}`} />
              <El as="span" css={`${MONO};font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#9B968F`}>AI &amp; automation</El>
            </El>
            <El as="h2" css="margin:0;max-width:15ch;font-size:clamp(2.2rem,5.2vw,4.4rem);line-height:.93;letter-spacing:-.045em;font-weight:800">AI that ships to production, <El as="span" css={`color:${ORANGE}`}>not to a demo.</El></El>
          </El>
          <El as="p" css="margin:0;max-width:44ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">We build AI into the products and workflows you already run, with the evaluation, guardrails and cost controls that keep it trustworthy once real users arrive.</El>
        </El>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:clamp(10px,1.2vw,16px)">
          {aiServices.map((s) => (
            <El key={s.n} hover={`background:${ORANGE};color:#08070A`} css="background:#0C0B0F;border:1px solid rgba(244,241,234,.14);padding:clamp(22px,2.6vw,36px);display:flex;flex-direction:column;gap:14px;min-height:230px;transition:background .35s,color .35s,border-color .35s">
              <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;opacity:.6`}>{s.n}</El>
              <El css="margin-top:auto;font-size:clamp(1.2rem,2vw,1.6rem);font-weight:800;letter-spacing:-.035em;line-height:1.05">{s.t}</El>
              <El as="p" css="margin:0;font-size:14.5px;line-height:1.5;opacity:.75">{s.b}</El>
            </El>
          ))}
        </El>
        <El css="display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between;margin-top:clamp(24px,3vw,40px)">
          <El css="display:flex;flex-wrap:wrap;gap:8px">
            {aiStack.map((t) => <El as="span" key={t} css={TAG}>{t}</El>)}
          </El>
          <El as="span" role="button" tabIndex={0} hover="background:#F4F1EA" css={CTA} onClick={() => scrollToTalk('We want to add AI to our product or operations. Use case: ')}>Scope an AI project <span>→</span></El>
        </El>
      </El>

      {/* How we work */}
      <El as="section" id="how" css={SECTION}>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(32px,4.4vw,60px)">
          <El>
            <El css={EYEBROW}>How we work</El>
            <El as="h2" css={BIG_H2}>In the room <El as="span" css={SERIF_ACCENT}>with you.</El></El>
          </El>
          <El as="p" css="margin:0;max-width:46ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">Workshops before a line of code, demos every two weeks, and training so your team can run the app after launch.</El>
        </El>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:clamp(14px,1.6vw,24px)">
          {howCards.map((h) => (
            <El as="figure" key={h.n} css="margin:0;display:flex;flex-direction:column;gap:16px">
              <El css="position:relative;aspect-ratio:4/3;overflow:hidden;background:#141216">
                <El role="img" aria-label={h.alt} css={`position:absolute;inset:0;background-color:#141216;background-size:cover;background-position:center;background-image:${h.bg}`} />
                <El as="span" css={`position:absolute;top:14px;left:14px;${MONO};letter-spacing:.16em;text-transform:uppercase;font-size:10.5px;background:${ORANGE};color:#08070A;padding:6px 10px`}>{h.n}</El>
              </El>
              <El as="figcaption">
                <El css="font-size:clamp(1.3rem,2vw,1.7rem);font-weight:800;letter-spacing:-.04em">{h.t}</El>
                <El as="p" css="margin:8px 0 0;font-size:15px;line-height:1.5;color:#B7B2AA">{h.b}</El>
              </El>
            </El>
          ))}
        </El>
      </El>

      {/* Client stories */}
      <El as="section" id="stories" css={`padding:clamp(64px,9vw,150px) ${PAD}`}>
        <El css="display:flex;flex-wrap:wrap;gap:20px;align-items:flex-end;justify-content:space-between;margin-bottom:clamp(28px,4vw,56px)">
          <El as="h2" css="margin:0;max-width:18ch;font-size:clamp(2rem,4.6vw,3.8rem);line-height:.95;letter-spacing:-.045em;font-weight:800">In our clients’ words.</El>
          <El as="span" css={`${MONO};font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#9B968F`}>Published reviews · Google, Trustpilot</El>
        </El>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:clamp(16px,2vw,28px)">
          {stories.map((t) => (
            <El key={t.name} css="display:flex;flex-direction:column">
              <El css="position:relative;aspect-ratio:4/5;border:1px solid rgba(244,241,234,.14);background:#111013;overflow:hidden">
                <El as="iframe" src={t.src} title={`${t.name} testimonial`} loading="lazy" tabIndex={-1} aria-hidden="true" css="position:absolute;inset:0;width:100%;height:100%;border:0;pointer-events:none;background:#08070A" />
                <El
                  role="button" tabIndex={0} aria-label="Play testimonial" hover="transform:scale(1.08)"
                  onClick={() => setVideo({ src: t.src, title: `${t.name} — ${t.role}` })}
                  css={`position:absolute;left:16px;bottom:16px;width:56px;height:56px;background:${ORANGE};color:#08070A;display:flex;align-items:center;justify-content:center;font-size:17px;cursor:pointer;transition:transform .3s`}
                >▶</El>
                <El as="span" css={`position:absolute;right:14px;bottom:16px;${MONO};font-size:11px;letter-spacing:.12em;color:#F4F1EA;background:#08070A;padding:6px 9px`}>{t.length}</El>
              </El>
              <El as="p" css="margin:clamp(18px,2vw,24px) 0 0;font-size:clamp(1.05rem,1.5vw,1.25rem);line-height:1.4;letter-spacing:-.015em;font-weight:500;text-wrap:pretty">“{t.quote}”</El>
              <El css="margin-top:16px;padding-top:14px;border-top:1px solid rgba(244,241,234,.14);display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap">
                <El as="span" css="font-size:14.5px;font-weight:700">{t.name}</El>
                <El as="span" css={`${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#9B968F`}>{t.role}</El>
              </El>
            </El>
          ))}
        </El>
      </El>

      {/* Case studies */}
      <El as="section" css={`padding:0 ${PAD} clamp(64px,9vw,150px)`}>
        <El as="h2" css="margin:0 0 clamp(28px,4vw,56px);max-width:20ch;font-size:clamp(2rem,4.6vw,3.8rem);line-height:.95;letter-spacing:-.045em;font-weight:800">Platforms in production.</El>
        <El css="display:grid;gap:clamp(16px,2vw,28px)">
          {cases.map((c) => (
            <El key={c.name} hover={`border-color:${ORANGE}`} css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));border:1px solid rgba(244,241,234,.14);transition:border-color .4s">
              <El css="aspect-ratio:16/10;overflow:hidden;background:#111013">
                <El as="img" src={c.img} alt={c.name} loading="lazy" css="width:100%;height:100%;object-fit:cover;display:block;filter:saturate(.85)" />
              </El>
              <El css="padding:clamp(24px,3.4vw,52px);display:flex;flex-direction:column;justify-content:center;gap:16px">
                <El as="span" css={`${MONO};font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:${ORANGE}`}>{c.sector} · {c.region}</El>
                <El css="font-size:clamp(1.8rem,3.6vw,3rem);font-weight:800;letter-spacing:-.045em;line-height:.95">{c.name}</El>
                <El as="p" css="margin:0;max-width:44ch;font-size:15.5px;line-height:1.55;color:#B7B2AA">{c.body}</El>
                <El as="span" css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#9B968F`}>{c.scope}</El>
              </El>
            </El>
          ))}
        </El>
      </El>

      {/* How large engagements run */}
      <El as="section" css={`background:#F4F1EA;color:#08070A;padding:clamp(64px,9vw,150px) ${PAD}`}>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(32px,5vw,96px);align-items:start">
          <El>
            <El as="h2" css="margin:0;max-width:14ch;font-size:clamp(2rem,4.6vw,3.8rem);line-height:.95;letter-spacing:-.045em;font-weight:800">How large engagements run.</El>
            <El as="p" css="margin:clamp(18px,2.4vw,28px) 0 0;max-width:40ch;font-size:16px;line-height:1.55;color:#4A4741">Built for procurement, security review and boards who want a number they can defend.</El>
          </El>
          <El css="display:flex;flex-direction:column">
            {steps.map((s) => (
              <El key={s.n} css="display:grid;grid-template-columns:auto minmax(0,1fr);gap:clamp(16px,2.4vw,32px);padding:clamp(18px,2.2vw,26px) 0;border-top:1px solid rgba(8,7,10,.2)">
                <El as="span" css={`${MONO};font-size:12px;letter-spacing:.1em;color:#C2381D`}>{s.n}</El>
                <El>
                  <El css="font-size:clamp(1.15rem,1.8vw,1.45rem);font-weight:700;letter-spacing:-.03em">{s.t}</El>
                  <El as="p" css="margin:8px 0 0;font-size:15px;line-height:1.55;color:#4A4741">{s.b}</El>
                </El>
              </El>
            ))}
          </El>
        </El>
      </El>

      {/* Certifications and security */}
      <El as="section" css={`padding:clamp(56px,8vw,120px) ${PAD}`}>
        <El css="display:flex;flex-wrap:wrap;gap:16px;align-items:baseline;justify-content:space-between;margin-bottom:clamp(28px,3.6vw,48px)">
          <El as="h2" css="margin:0;font-size:clamp(1.8rem,3.6vw,2.8rem);line-height:1;letter-spacing:-.04em;font-weight:800">Certified on the platforms we deploy to.</El>
          <El as="span" css={`${MONO};font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#9B968F`}>Verifiable on request</El>
        </El>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr));gap:clamp(10px,1.2vw,16px);margin-bottom:clamp(56px,7vw,100px)">
          {certs.map((c) => (
            <El key={c.n} css="background:#08070A;border:1px solid rgba(244,241,234,.14);padding:clamp(22px,2.6vw,34px);display:flex;flex-direction:column;gap:14px;min-height:230px">
              <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;color:${ORANGE}`}>{c.n}</El>
              <El css="margin-top:auto;font-size:clamp(1.15rem,1.9vw,1.5rem);font-weight:800;letter-spacing:-.035em;line-height:1.05">{c.group}</El>
              <El css="display:flex;flex-direction:column;gap:7px;padding-top:12px;border-top:1px solid rgba(244,241,234,.14)">
                {c.items.map((i) => <El as="span" key={i} css="font-size:13.5px;line-height:1.35;color:#B7B2AA">{i}</El>)}
              </El>
            </El>
          ))}
        </El>
        <El as="h2" css="margin:0 0 clamp(28px,3.6vw,48px);font-size:clamp(1.8rem,3.6vw,2.8rem);line-height:1;letter-spacing:-.04em;font-weight:800">Cleared for security review.</El>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr));gap:clamp(24px,3vw,48px)">
          {trust.map((r) => (
            <El key={r.t} css={`border-top:2px solid ${ORANGE};padding-top:18px`}>
              <El css="font-size:clamp(1.05rem,1.6vw,1.25rem);font-weight:700;letter-spacing:-.025em">{r.t}</El>
              <El as="p" css="margin:9px 0 0;font-size:14.5px;line-height:1.55;color:#B7B2AA">{r.b}</El>
            </El>
          ))}
        </El>
      </El>

      {/* Leadership */}
      <El as="section" id="leadership" css={`margin-top:clamp(64px,9vw,150px);background:#F4F1EA;color:#08070A;padding:clamp(64px,9vw,150px) ${PAD}`}>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(32px,4.4vw,60px)">
          <El>
            <El css={`${MONO};letter-spacing:.16em;text-transform:uppercase;font-size:11px;color:#5E5A55;margin-bottom:16px`}>Leadership</El>
            <El as="h2" css={BIG_H2}>The people <El as="span" css={SERIF_ACCENT}>behind Mariox.</El></El>
          </El>
          <El as="p" css="margin:0;max-width:46ch;font-size:16.5px;line-height:1.55;color:#4A4741">Founders who still work on the builds. Every app project has one of them involved from the first call.</El>
        </El>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:clamp(14px,1.6vw,24px)">
          {leaders.map((l) => (
            <El as="figure" key={l.name} css="margin:0;display:flex;flex-direction:column;gap:16px">
              <El css="position:relative;aspect-ratio:4/5;overflow:hidden;background:#E4E0D8">
                <El role="img" aria-label={l.name} css={`position:absolute;inset:0;background-color:#E4E0D8;background-size:cover;background-position:${l.pos};background-image:${l.bg}`} />
                <El as="span" css={`position:absolute;left:12px;bottom:12px;${MONO};letter-spacing:.16em;text-transform:uppercase;font-size:10.5px;background:${ORANGE};color:#08070A;padding:6px 10px`}>{l.spec}</El>
              </El>
              <El as="figcaption">
                <El css="display:flex;justify-content:space-between;gap:10px;align-items:baseline;padding-bottom:10px;border-bottom:1px solid rgba(8,7,10,.18)">
                  <El as="span" css="font-size:clamp(1.3rem,1.9vw,1.6rem);font-weight:800;letter-spacing:-.04em">{l.name}</El>
                  <El as="span" css={`${MONO};letter-spacing:.16em;text-transform:uppercase;font-size:10.5px;color:#5E5A55;white-space:nowrap`}>{l.role}</El>
                </El>
                <El as="p" css="margin:12px 0 0;font-size:15px;line-height:1.5;color:#4A4741">{l.bio}</El>
              </El>
            </El>
          ))}
        </El>
      </El>

      {/* Offices */}
      <El as="section" id="offices" css={SECTION}>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(32px,4.4vw,60px)">
          <El>
            <El css={EYEBROW}>Global delivery</El>
            <El as="h2" css={BIG_H2}>Four offices. <El as="span" css={SERIF_ACCENT}>Three time zones.</El></El>
          </El>
          <El as="p" css="margin:0;max-width:46ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">Your app gets worked on while you sleep, and someone is always awake to pick up the phone.</El>
        </El>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));border-top:1px solid rgba(244,241,234,.16);border-left:1px solid rgba(244,241,234,.16)">
          {offices.map((o) => {
            // Rendered only after mount, so the server and the browser agree.
            let time = '';
            if (now) {
              try { time = new Date(now).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: o.tz }); } catch (e) { /* unsupported zone */ }
            }
            return (
              <El key={o.city} css="border-right:1px solid rgba(244,241,234,.16);border-bottom:1px solid rgba(244,241,234,.16);padding:clamp(22px,2.6vw,34px);display:flex;flex-direction:column;gap:14px;min-height:280px">
                <El css={`display:flex;justify-content:space-between;gap:12px;${MONO};letter-spacing:.16em;text-transform:uppercase;font-size:10.5px`}>
                  <El as="span" css={`color:${ORANGE}`}>{o.n}</El><El as="span" css="color:#9B968F">{o.region}</El>
                </El>
                <El css="font-size:clamp(1.9rem,3vw,2.8rem);font-weight:800;letter-spacing:-.05em;line-height:.95">{o.city}</El>
                <El as="p" css="margin:0;font-size:15px;line-height:1.5;color:#B7B2AA">{o.addr}</El>
                <El css="margin-top:auto;display:flex;align-items:baseline;gap:10px;padding-top:14px;border-top:1px solid rgba(244,241,234,.14)">
                  <El as="span" suppressHydrationWarning css="font-size:clamp(1.6rem,2.4vw,2.2rem);font-weight:300;letter-spacing:-.04em;font-variant-numeric:tabular-nums">{time}</El>
                  <El as="span" css={`${MONO};letter-spacing:.16em;text-transform:uppercase;font-size:10.5px;color:#9B968F`}>{o.tzLabel} · local time</El>
                </El>
              </El>
            );
          })}
        </El>
        <El css="display:flex;flex-wrap:wrap;gap:12px 28px;margin-top:22px;font-size:15px;color:#D9D5CD">
          <El as="a" href="tel:+919599287045" css={`color:${ORANGE}`}>+91 95992 87045</El>
          <El as="a" href="mailto:admin@marioxsoftware.com" css={`color:${ORANGE}`}>admin@marioxsoftware.com</El>
        </El>
      </El>

      {/* Talk to an architect */}
      <El as="section" id="talk" css={`border-top:1px solid rgba(244,241,234,.1);padding:clamp(64px,9vw,150px) ${PAD}`}>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));gap:clamp(36px,5vw,96px);align-items:start">
          <El>
            <El as="h2" css="margin:0;max-width:13ch;font-size:clamp(2.3rem,5.6vw,4.6rem);line-height:.92;letter-spacing:-.045em;font-weight:800">Talk to a <El as="span" css={`color:${ORANGE}`}>solution architect.</El></El>
            <El as="p" css="margin:clamp(20px,2.6vw,30px) 0 0;max-width:40ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">Not a sales rep. An architect reads your brief and replies within one business day. NDA available before the first call.</El>
            <El css="display:flex;flex-direction:column;gap:14px;margin-top:clamp(28px,3.4vw,44px)">
              {[
                { href: 'mailto:admin@marioxsoftware.com?subject=Book%20a%20call', t: 'Book a 30-minute call', s: 'Pick a time that suits you' },
                { href: 'tel:+919599287045', t: '+91 9599287045', s: 'India · US · Australia' },
              ].map((a) => (
                <El as="a" key={a.t} href={a.href} hover={`border-color:${ORANGE}`} css="display:flex;align-items:center;justify-content:space-between;gap:16px;border:1px solid rgba(244,241,234,.22);padding:18px 20px;color:#F4F1EA;transition:border-color .3s">
                  <El as="span" css="display:flex;flex-direction:column;gap:4px">
                    <El as="span" css="font-size:15px;font-weight:700">{a.t}</El>
                    <El as="span" css={`${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#9B968F`}>{a.s}</El>
                  </El>
                  <El as="span" css={`color:${ORANGE}`}>↗</El>
                </El>
              ))}
            </El>
          </El>

          <El css="border:1px solid rgba(244,241,234,.18);background:#0E0D11;padding:clamp(24px,3vw,44px)">
            {sent ? (
              <El css="display:grid;gap:16px;padding:clamp(16px,2vw,28px) 0">
                <El css="font-size:clamp(1.5rem,2.6vw,2.1rem);font-weight:800;letter-spacing:-.04em;line-height:1.05">Thank you. It’s with an architect.</El>
                <El as="p" css="margin:0;font-size:15.5px;line-height:1.55;color:#B7B2AA">You’ll hear back within one business day with first questions and how we’d approach it. If you need an NDA first, reply and say so.</El>
              </El>
            ) : (
              <El css="display:grid;gap:clamp(20px,2.4vw,28px)">
                <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,170px),1fr));gap:clamp(16px,2vw,24px)">
                  {[
                    { label: 'Name', ph: 'Your name', type: 'text', ref: fName, auto: 'name' },
                    { label: 'Company', ph: 'Company', type: 'text', ref: fCompany, auto: 'organization' },
                    { label: 'Work email', ph: 'you@company.com', type: 'email', ref: fEmail, auto: 'email' },
                    { label: 'Phone', ph: 'Optional', type: 'tel', ref: fPhone, auto: 'tel' },
                  ].map((f) => (
                    <El as="label" key={f.label} css="display:block">
                      <El as="span" css={`display:block;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#9B968F;margin-bottom:9px`}>{f.label}</El>
                      <El as="input" type={f.type} placeholder={f.ph} ref={f.ref} autoComplete={f.auto} css={`${FIELD};padding:10px 0`} />
                    </El>
                  ))}
                </El>

                <El>
                  <El as="span" css={`display:block;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#9B968F;margin-bottom:12px`}>Project budget</El>
                  <El css="display:flex;flex-wrap:wrap;gap:8px">
                    {enterpriseBudgets.map((l) => (
                      <El as="span" key={l} role="button" tabIndex={0} onClick={() => setBudget(l)} css={`${CHIP};font-size:11.5px;padding:12px 15px;${chipOn(budget === l)}`}>{l}</El>
                    ))}
                  </El>
                </El>

                <El>
                  <El as="span" css={`display:block;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#9B968F;margin-bottom:12px`}>Timeline</El>
                  <El css="display:flex;flex-wrap:wrap;gap:8px">
                    {enterpriseTimelines.map((l) => (
                      <El as="span" key={l} role="button" tabIndex={0} onClick={() => setTimeline(l)} css={`${CHIP};font-size:11.5px;padding:12px 15px;${chipOn(timeline === l)}`}>{l}</El>
                    ))}
                  </El>
                </El>

                <El as="label" css="display:block">
                  <El as="span" css={`display:block;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#9B968F;margin-bottom:9px`}>What are you building</El>
                  <El as="textarea" id="mxad-brief" ref={brief} rows={3} placeholder="Platform, users, integrations, anything already decided" css={`${FIELD};padding:10px 0;font-size:15.5px;resize:vertical;font-family:Archivo,sans-serif;line-height:1.5`} />
                </El>

                <El as="span" role="button" tabIndex={0} onClick={submitArchitect} hover="background:#F4F1EA" css={`cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:14px;background:${ORANGE};color:#08070A;padding:20px 24px;${MONO};font-size:12px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;transition:background .3s`}>
                  <span>Request architect review</span><span>→</span>
                </El>
                <El as="span" css={`font-size:13px;line-height:1.5;color:${error ? ORANGE : '#77736C'}`}>{error || 'An architect replies within one business day. No sales sequence.'}</El>
              </El>
            )}
          </El>
        </El>
      </El>

      {/* FAQ */}
      <El as="section" css={`padding:0 ${PAD} clamp(56px,8vw,120px)`}>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:clamp(20px,3vw,48px)">
          {faq.map((q) => (
            <El key={q.q} css="border-top:1px solid rgba(244,241,234,.2);padding-top:18px">
              <El css="font-size:16.5px;font-weight:700;letter-spacing:-.02em;line-height:1.3">{q.q}</El>
              <El as="p" css="margin:10px 0 0;font-size:14.5px;line-height:1.55;color:#B7B2AA">{q.a}</El>
            </El>
          ))}
        </El>
      </El>

      <Footer activeSlug="app-development" />

      {video ? (
        <El
          onClick={(e) => { if (e.target === e.currentTarget) setVideo(null); }}
          css={`position:fixed;inset:0;z-index:200;background:rgba(8,7,10,.94);display:flex;align-items:center;justify-content:center;padding:${PAD}`}
        >
          <El css="width:min(100%,1100px);display:flex;flex-direction:column;gap:14px">
            <El css="display:flex;justify-content:space-between;align-items:center">
              <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9B968F`}>{video.title}</El>
              <El as="span" role="button" tabIndex={0} onClick={() => setVideo(null)} css={`cursor:pointer;${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#F4F1EA`}>Close ×</El>
            </El>
            <El as="iframe" src={video.src} title={video.title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen css="width:100%;aspect-ratio:16/9;border:0;background:#000" />
          </El>
        </El>
      ) : null}
    </El>
  );
}

AppDevelopment.bare = true;
