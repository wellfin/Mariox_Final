import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import El from './El';
import { A } from './ui';
import { Seo, JsonLd } from './sections';
import LeadForm from './LeadForm';
import ClientStories from './ClientStories';
import Nav from './final/Nav';
import Footer from './final/Footer';
import { Shell } from './final/ui';
import { CONTACT } from '@/data/site';
import { brands, stats, aiServices, aiStack, steps, certs, trust, heroTrust, heroBadges } from '@/data/saasLanding';

// The conversion landing used by /saas-platforms, /app-development,
// /custom-crm-development and /erp-software-development. All four come from the
// same design family, so the markup lives here once and each page passes its
// own copy, models and case studies.

const AppDemo = dynamic(() => import('./appDemo/MarioxAppDemo'), {
  ssr: false,
  loading: () => (
    <El css="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#57544F;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.2em;text-transform:uppercase">Loading demo…</El>
  ),
});

// Typography follows the design's service pages: Geist, light headings, tight
// tracking. The campaign sections themselves are unchanged.
const MONO = "font-family:'Geist Mono',monospace";
const PAD_X = 'clamp(18px,4vw,64px)';
const ARCHIVO = "font-family:Geist,'Helvetica Neue',Helvetica,sans-serif";

const scrollToTalk = () => {
  const t = document.getElementById('talk');
  if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
};

export default function MarketingLanding({
  activeSlug = '',     // highlights the page in the nav and footer
  seo,                 // { title, description }
  eyebrow,
  h1, h1Accent,
  sub,
  formTitle,
  heroNeeds = [],
  heroBudgets = [],
  included,            // { a, b, sub, items, get } — optional
  appsTitle,
  appsHint,
  apps = [],
  quotePrefix = 'We want to build an app like',
  startApp = 0,
  badges = true,   // the certification/review strip under the hero
  children,            // extra sections, rendered before "Talk to an architect"
  cases = [],
  faq = [],
}) {
  const [app, setApp] = useState(startApp);
  const briefRef = useRef(null);
  const active = apps[app];

  const quoteWith = (text) => () => {
    scrollToTalk();
    setTimeout(() => {
      const b = briefRef.current;
      if (b && !b.value) {
        b.value = text;
        b.focus({ preventScroll: true });
      }
    }, 300);
  };

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      {faq.length ? (
        <JsonLd
          id="landing-faq"
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
          }}
        />
      ) : null}

      <Nav active={activeSlug} ctaHref="#talk" />
      <Shell>
      <El css={`${ARCHIVO};display:block`}>

      {/* Hero + estimate form */}
      <El as="section" css={`display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,400px),1fr));gap:clamp(32px,5vw,80px);align-items:start;padding:clamp(40px,6vw,96px) ${PAD_X} clamp(40px,5vw,80px)`}>
        <El css="padding-top:clamp(0px,1.5vw,20px)">
          <El data-fade="1" css="display:flex;align-items:center;gap:11px;margin-bottom:clamp(18px,2.4vw,28px)">
            <El as="span" css="width:8px;height:8px;background:#F04423" />
            <El as="span" css={`${MONO};font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#8E8A85`}>{eyebrow}</El>
          </El>
          <El as="h1" css="margin:0;max-width:17ch;font-size:clamp(2.4rem,5.4vw,4.6rem);line-height:.95;letter-spacing:-.045em;font-weight:500;text-wrap:balance">
            {h1} <El as="span" css="color:#F04423">{h1Accent}</El>
          </El>
          <El as="p" css="margin:clamp(20px,2.6vw,30px) 0 0;max-width:46ch;font-size:clamp(16px,1.35vw,19px);line-height:1.55;color:#B7B2AA;text-wrap:pretty">{sub}</El>

          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,210px),1fr));gap:14px 28px;margin-top:clamp(26px,3.2vw,40px);max-width:560px">
            {heroTrust.map((h) => (
              <El key={h.b} css="display:flex;gap:12px;align-items:baseline">
                <El as="span" css="width:7px;height:7px;background:#F04423;flex-shrink:0;transform:translateY(-2px)" />
                <El as="span" css="font-size:15px;line-height:1.4"><El as="strong" css="font-weight:500">{h.b}</El> <El as="span" css="color:#8E8A85">{h.t}</El></El>
              </El>
            ))}
          </El>

          {/* Certifications and review badges */}
          {badges ? (
          <El css="margin-top:clamp(28px,3.4vw,44px);max-width:560px;border-top:1px solid rgba(244,241,234,.14);padding-top:clamp(18px,2.2vw,24px)">
            <El as="span" css={`display:block;${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:14px`}>Certified engineers &amp; verified reviews</El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,120px),1fr));gap:8px">
              {heroBadges.map((b) => (
                <El key={b.t} css="border:1px solid rgba(244,241,234,.16);padding:12px 12px 11px;display:flex;flex-direction:column;gap:5px;min-height:66px;justify-content:center">
                  <El as="span" css="font-size:14px;font-weight:500;letter-spacing:-.02em;line-height:1.1">{b.t}</El>
                  <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.08em;color:${b.c}`}>{b.s}</El>
                </El>
              ))}
            </El>
          </El>
          ) : null}

          <A href={CONTACT.tel} data-cursor="1" css={`display:inline-flex;align-items:center;gap:12px;margin-top:clamp(26px,3.2vw,40px);${MONO};font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#F4F1EA;border-bottom:1px solid #F04423;padding-bottom:5px`}>
            Or call {CONTACT.phone} &#8599;
          </A>
        </El>

        <El id="enquiry" css="border:1px solid rgba(244,241,234,.2);background:#0E0D11;padding:clamp(22px,2.6vw,36px)">
          <El css="display:flex;align-items:baseline;gap:11px;padding-bottom:14px;border-bottom:1px solid rgba(244,241,234,.16);margin-bottom:clamp(18px,2.2vw,24px)">
            <El as="span" css="width:8px;height:8px;background:#F04423;align-self:center" />
            <El as="span" css="font-size:17px;font-weight:500;letter-spacing:-.02em">{formTitle}</El>
            <El as="span" css={`margin-left:auto;${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>2 min</El>
          </El>
          <LeadForm variant="hero" id="landing-hero-form" needs={heroNeeds} budgets={heroBudgets} />
        </El>
      </El>

      {/* Brand ticker */}
      <El as="section" css="border-top:1px solid rgba(244,241,234,.1);border-bottom:1px solid rgba(244,241,234,.1);padding:clamp(22px,2.8vw,34px) 0;overflow:hidden">
        <El css={`padding:0 ${PAD_X} clamp(16px,2vw,24px);${MONO};font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#8E8A85`}>Products we&#8217;ve engineered for</El>
        <El css="display:flex;width:max-content;animation:mxTick 46s linear infinite">
          {[0, 1].map((loop) => (
            <El key={loop} aria-hidden={loop === 1 ? 'true' : undefined} css="display:flex;align-items:center;gap:clamp(40px,5vw,80px);padding:0 clamp(20px,2.5vw,40px)">
              {brands.map((b) => (
                <El as="span" key={b} css="font-size:clamp(1.4rem,2.6vw,2.2rem);font-weight:500;letter-spacing:-.04em;white-space:nowrap;color:#F4F1EA;opacity:.82">{b}</El>
              ))}
            </El>
          ))}
        </El>
      </El>

      {/* Stats */}
      <El as="section" css={`display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));padding:0 ${PAD_X}`}>
        {stats.map((s) => (
          <El key={s.l} data-fade="1" css="padding:clamp(28px,4vw,56px) clamp(4px,1vw,12px);border-bottom:1px solid rgba(244,241,234,.1)">
            <El css="font-size:clamp(2.6rem,5.4vw,4.6rem);font-weight:500;letter-spacing:-.05em;line-height:.9">{s.v}</El>
            <El css={`margin-top:12px;${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85`}>{s.l}</El>
          </El>
        ))}
      </El>

      {/* What's included / what you get */}
      {included ? (
        <El as="section" css={`padding:clamp(64px,9vw,150px) ${PAD_X} 0`}>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));gap:clamp(32px,5vw,96px);align-items:end;margin-bottom:clamp(32px,4.6vw,64px)">
            <El as="h2" css="margin:0;max-width:15ch;font-size:clamp(2rem,4.6vw,3.8rem);line-height:.95;letter-spacing:-.045em;font-weight:500">{included.a} <El as="span" css="color:#F04423">{included.b}</El></El>
            <El as="p" css="margin:0;max-width:44ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">{included.sub}</El>
          </El>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:clamp(10px,1.2vw,16px)">
            {included.items.map((s) => (
              <El key={s.n} data-fade="1" css="border:1px solid rgba(244,241,234,.14);padding:clamp(22px,2.6vw,34px);display:flex;flex-direction:column;gap:14px;min-height:210px;transition:background .35s,color .35s,border-color .35s" hover="background:#F04423;color:#08070A">
                <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;opacity:.6`}>{s.n}</El>
                <El css="margin-top:auto;font-size:clamp(1.2rem,2vw,1.6rem);font-weight:500;letter-spacing:-.035em;line-height:1.05">{s.t}</El>
                <El as="p" css="margin:0;font-size:14.5px;line-height:1.5;opacity:.75">{s.b}</El>
              </El>
            ))}
          </El>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:clamp(20px,3vw,44px);margin-top:clamp(40px,5vw,72px);padding-top:clamp(24px,3vw,36px);border-top:1px solid rgba(244,241,234,.14)">
            {included.get.map((g) => (
              <El key={g.n} data-fade="1">
                <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#F04423`}>You get &#183; {g.n}</El>
                <El css="margin-top:12px;font-size:clamp(1.1rem,1.7vw,1.35rem);font-weight:500;letter-spacing:-.025em">{g.t}</El>
                <El as="p" css="margin:8px 0 0;font-size:14.5px;line-height:1.5;color:#B7B2AA">{g.b}</El>
              </El>
            ))}
          </El>
        </El>
      ) : null}

      {/* Models: list on the left, detail (and demo, where we have one) right */}
      {apps.length ? (
        <El as="section" id="apps" css={`padding:clamp(64px,9vw,150px) ${PAD_X} 0`}>
          <El css="display:flex;flex-wrap:wrap;gap:20px;align-items:flex-end;justify-content:space-between;margin-bottom:clamp(28px,4vw,52px)">
            <El as="h2" css="margin:0;max-width:16ch;font-size:clamp(2rem,4.6vw,3.8rem);line-height:.95;letter-spacing:-.045em;font-weight:500">{appsTitle}</El>
            <El as="span" css={`${MONO};font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#8E8A85`}>{appsHint}</El>
          </El>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:clamp(24px,4vw,64px);align-items:start">
            <El css="display:flex;flex-direction:column;border-top:1px solid rgba(244,241,234,.14)">
              {apps.map((a, i) => {
                const on = i === app;
                return (
                  <El
                    as="button"
                    type="button"
                    key={a.name}
                    onClick={() => setApp(i)}
                    aria-pressed={on}
                    data-cursor="1"
                    css={`cursor:pointer;background:transparent;border:0;border-bottom:1px solid rgba(244,241,234,.14);text-align:left;display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:16px;align-items:baseline;padding:clamp(14px,1.8vw,20px) 4px;color:${on ? '#F4F1EA' : '#77736C'};transition:color .3s`}
                    hover="color:#F04423"
                  >
                    <El as="span" css={`${MONO};font-size:11px;color:${on ? '#F04423' : '#57544F'}`}>{String(i + 1).padStart(2, '0')}</El>
                    <El as="span" css="font-size:clamp(1.25rem,2.4vw,1.9rem);font-weight:500;letter-spacing:-.04em;line-height:1">{a.name}</El>
                    <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;opacity:.75;text-align:right`}>{a.cat}</El>
                  </El>
                );
              })}
            </El>

            <El css="display:flex;flex-direction:column;gap:clamp(18px,2.2vw,26px)">
              {active.demo ? (
                // Height capped so the demo's closing headline stays on screen.
                <El css="position:relative;width:100%;aspect-ratio:16/10;max-height:min(68vh,660px);border:1px solid rgba(244,241,234,.14);background:#08070A;overflow:hidden">
                  <AppDemo key={active.demo} app={active.demo} />
                </El>
              ) : (
                <El css="position:relative;aspect-ratio:16/10;border:1px solid rgba(244,241,234,.14);background:#111013;background-image:repeating-linear-gradient(135deg,rgba(244,241,234,.06) 0 2px,transparent 2px 11px);overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding:clamp(20px,3vw,40px)">
                  <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:#F04423`}>Platform model</El>
                  <El css="margin-top:10px;font-size:clamp(2rem,4.6vw,3.6rem);font-weight:500;letter-spacing:-.05em;line-height:.95">{active.name}-style</El>
                  <El as="span" css={`margin-top:8px;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>{active.cat}</El>
                </El>
              )}
              <El css="font-size:clamp(1.4rem,2.6vw,2.1rem);font-weight:500;letter-spacing:-.04em;line-height:1.02">{active.title}</El>
              <El as="p" css="margin:0;max-width:52ch;font-size:16px;line-height:1.55;color:#B7B2AA">{active.body}</El>
              <El css="display:flex;flex-wrap:wrap;gap:8px">
                {active.features.map((f) => (
                  <El as="span" key={f} css={`${MONO};font-size:11px;letter-spacing:.08em;border:1px solid rgba(244,241,234,.22);color:#D9D5CD;padding:9px 12px`}>{f}</El>
                ))}
              </El>
              <El css="display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between;padding-top:18px;border-top:1px solid rgba(244,241,234,.14)">
                {active.case ? (
                  <A href={'/work/' + active.case} data-cursor="view" css={`${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#8E8A85;border-bottom:1px solid rgba(244,241,234,.3);padding-bottom:3px`}>{active.proof} &#8599;</A>
                ) : (
                  <El as="span" css={`${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#8E8A85`}>{active.proof}</El>
                )}
                <El
                  as="button"
                  type="button"
                  data-cursor="start"
                  onClick={quoteWith(`${quotePrefix} ${active.name} (${active.cat.toLowerCase()}). Key features: ${active.features.join(', ')}.`)}
                  css={`cursor:pointer;border:0;display:flex;align-items:center;gap:12px;background:#F04423;color:#08070A;padding:16px 22px;${MONO};font-size:11.5px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;transition:background .3s`}
                  hover="background:#F4F1EA"
                >
                  {quotePrefix.replace('We want to build', 'Quote')} {active.name} <span>&#8594;</span>
                </El>
              </El>
            </El>
          </El>
        </El>
      ) : null}

      {/* AI */}
      <El as="section" id="ai" css={`margin-top:clamp(64px,9vw,150px);padding:clamp(64px,9vw,140px) ${PAD_X};border-top:1px solid rgba(244,241,234,.1);border-bottom:1px solid rgba(244,241,234,.1);background:#0C0B0F`}>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));gap:clamp(32px,5vw,96px);align-items:end;margin-bottom:clamp(36px,5vw,72px)">
          <El>
            <El css="display:flex;align-items:center;gap:11px;margin-bottom:clamp(18px,2.4vw,28px)">
              <El as="span" css="width:8px;height:8px;background:#F04423" />
              <El as="span" css={`${MONO};font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#8E8A85`}>AI &amp; automation</El>
            </El>
            <El as="h2" css="margin:0;max-width:15ch;font-size:clamp(2.2rem,5.2vw,4.4rem);line-height:.93;letter-spacing:-.045em;font-weight:500">AI that ships to production, <El as="span" css="color:#F04423">not to a demo.</El></El>
          </El>
          <El as="p" css="margin:0;max-width:44ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">We build AI into the products and workflows you already run, with the evaluation, guardrails and cost controls that keep it trustworthy once real users arrive.</El>
        </El>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:clamp(10px,1.2vw,16px)">
          {aiServices.map((s) => (
            <El key={s.n} data-fade="1" css="background:#0C0B0F;border:1px solid rgba(244,241,234,.14);padding:clamp(22px,2.6vw,36px);display:flex;flex-direction:column;gap:14px;min-height:230px;transition:background .35s,color .35s,border-color .35s" hover="background:#F04423;color:#08070A">
              <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;opacity:.6`}>{s.n}</El>
              <El css="margin-top:auto;font-size:clamp(1.2rem,2vw,1.6rem);font-weight:500;letter-spacing:-.035em;line-height:1.05">{s.t}</El>
              <El as="p" css="margin:0;font-size:14.5px;line-height:1.5;opacity:.75">{s.b}</El>
            </El>
          ))}
        </El>
        <El css="display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between;margin-top:clamp(24px,3vw,40px)">
          <El css="display:flex;flex-wrap:wrap;gap:8px">
            {aiStack.map((t) => (
              <El as="span" key={t} css={`${MONO};font-size:11px;letter-spacing:.08em;border:1px solid rgba(244,241,234,.22);color:#D9D5CD;padding:9px 12px`}>{t}</El>
            ))}
          </El>
          <El
            as="button"
            type="button"
            data-cursor="start"
            onClick={quoteWith('We want to add AI to our product or operations. Use case: ')}
            css={`cursor:pointer;border:0;display:flex;align-items:center;gap:12px;background:#F04423;color:#08070A;padding:16px 22px;${MONO};font-size:11.5px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;transition:background .3s`}
            hover="background:#F4F1EA"
          >
            Scope an AI project <span>&#8594;</span>
          </El>
        </El>
      </El>

      <ClientStories />

      {/* Platforms in production */}
      {cases.length ? (
        <El as="section" css={`padding:0 ${PAD_X} clamp(64px,9vw,150px)`}>
          <El as="h2" css="margin:0 0 clamp(28px,4vw,56px);max-width:20ch;font-size:clamp(2rem,4.6vw,3.8rem);line-height:.95;letter-spacing:-.045em;font-weight:500">Platforms in production.</El>
          <El css="display:grid;gap:clamp(16px,2vw,28px)">
            {cases.map((c) => (
              <A key={c.name} href={c.url} data-fade="1" data-cursor="view" css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));border:1px solid rgba(244,241,234,.14);color:#F4F1EA;transition:border-color .4s" hover="border-color:#F04423">
                <El css="aspect-ratio:16/10;overflow:hidden;background:#111013">
                  <El as="img" src={c.img} alt={c.name} loading="lazy" css="width:100%;height:100%;object-fit:cover;display:block;filter:saturate(.85)" />
                </El>
                <El css="padding:clamp(24px,3.4vw,52px);display:flex;flex-direction:column;justify-content:center;gap:16px">
                  <El as="span" css={`${MONO};font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#F04423`}>{c.sector} &#183; {c.region}</El>
                  <El css="font-size:clamp(1.8rem,3.6vw,3rem);font-weight:500;letter-spacing:-.045em;line-height:.95">{c.name}</El>
                  <El as="p" css="margin:0;max-width:44ch;font-size:15.5px;line-height:1.55;color:#B7B2AA">{c.body}</El>
                  <El as="span" css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>{c.scope}</El>
                </El>
              </A>
            ))}
          </El>
        </El>
      ) : null}

      {/* How large engagements run (ivory) */}
      <El as="section" css={`background:#F4F1EA;color:#08070A;padding:clamp(64px,9vw,150px) ${PAD_X}`}>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(32px,5vw,96px);align-items:start">
          <El>
            <El as="h2" css="margin:0;max-width:14ch;font-size:clamp(2rem,4.6vw,3.8rem);line-height:.95;letter-spacing:-.045em;font-weight:500">How large engagements run.</El>
            <El as="p" css="margin:clamp(18px,2.4vw,28px) 0 0;max-width:40ch;font-size:16px;line-height:1.55;color:#4A4741">Built for procurement, security review and boards who want a number they can defend.</El>
          </El>
          <El css="display:flex;flex-direction:column">
            {steps.map((s) => (
              <El key={s.n} css="display:grid;grid-template-columns:auto minmax(0,1fr);gap:clamp(16px,2.4vw,32px);padding:clamp(18px,2.2vw,26px) 0;border-top:1px solid rgba(8,7,10,.2)">
                <El as="span" css={`${MONO};font-size:12px;letter-spacing:.1em;color:#C2381D`}>{s.n}</El>
                <El>
                  <El css="font-size:clamp(1.15rem,1.8vw,1.45rem);font-weight:500;letter-spacing:-.03em">{s.t}</El>
                  <El as="p" css="margin:8px 0 0;font-size:15px;line-height:1.55;color:#4A4741">{s.b}</El>
                </El>
              </El>
            ))}
          </El>
        </El>
      </El>

      {/* Certifications + security */}
      <El as="section" css={`padding:clamp(56px,8vw,120px) ${PAD_X}`}>
        <El css="display:flex;flex-wrap:wrap;gap:16px;align-items:baseline;justify-content:space-between;margin-bottom:clamp(28px,3.6vw,48px)">
          <El as="h2" css="margin:0;font-size:clamp(1.8rem,3.6vw,2.8rem);line-height:1;letter-spacing:-.04em;font-weight:500">Certified on the platforms we deploy to.</El>
          <El as="span" css={`${MONO};font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#8E8A85`}>Verifiable on request</El>
        </El>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr));gap:clamp(10px,1.2vw,16px);margin-bottom:clamp(56px,7vw,100px)">
          {certs.map((c) => (
            <El key={c.n} data-fade="1" css="background:#08070A;border:1px solid rgba(244,241,234,.14);padding:clamp(22px,2.6vw,34px);display:flex;flex-direction:column;gap:14px;min-height:230px">
              <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;color:#F04423`}>{c.n}</El>
              <El css="margin-top:auto;font-size:clamp(1.15rem,1.9vw,1.5rem);font-weight:500;letter-spacing:-.035em;line-height:1.05">{c.group}</El>
              <El css="display:flex;flex-direction:column;gap:7px;padding-top:12px;border-top:1px solid rgba(244,241,234,.14)">
                {c.items.map((i) => <El as="span" key={i} css="font-size:13.5px;line-height:1.35;color:#B7B2AA">{i}</El>)}
              </El>
            </El>
          ))}
        </El>
        <El as="h2" css="margin:0 0 clamp(28px,3.6vw,48px);font-size:clamp(1.8rem,3.6vw,2.8rem);line-height:1;letter-spacing:-.04em;font-weight:500">Cleared for security review.</El>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr));gap:clamp(24px,3vw,48px)">
          {trust.map((r) => (
            <El key={r.t} data-fade="1" css="border-top:2px solid #F04423;padding-top:18px">
              <El css="font-size:clamp(1.05rem,1.6vw,1.25rem);font-weight:500;letter-spacing:-.025em">{r.t}</El>
              <El as="p" css="margin:9px 0 0;font-size:14.5px;line-height:1.55;color:#B7B2AA">{r.b}</El>
            </El>
          ))}
        </El>
      </El>

      {children}

      {/* Talk to an architect */}
      <El as="section" id="talk" data-cta="1" css={`border-top:1px solid rgba(244,241,234,.1);padding:clamp(64px,9vw,150px) ${PAD_X}`}>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));gap:clamp(36px,5vw,96px);align-items:start">
          <El>
            <El as="h2" css="margin:0;max-width:13ch;font-size:clamp(2.3rem,5.6vw,4.6rem);line-height:.92;letter-spacing:-.045em;font-weight:500">Talk to a <El as="span" css="color:#F04423">solution architect.</El></El>
            <El as="p" css="margin:clamp(20px,2.6vw,30px) 0 0;max-width:40ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">Not a sales rep. An architect reads your brief and replies within one business day. NDA available before the first call.</El>
            <El css="display:flex;flex-direction:column;gap:14px;margin-top:clamp(28px,3.4vw,44px)">
              <A href={'mailto:' + CONTACT.email + '?subject=Book%20a%20call'} data-cursor="1" css="display:flex;align-items:center;justify-content:space-between;gap:16px;border:1px solid rgba(244,241,234,.22);padding:18px 20px;color:#F4F1EA;transition:border-color .3s" hover="border-color:#F04423">
                <El as="span" css="display:flex;flex-direction:column;gap:4px"><El as="span" css="font-size:15px;font-weight:500">Book a 30-minute call</El><El as="span" css={`${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#8E8A85`}>Pick a time that suits you</El></El>
                <El as="span" css="color:#F04423">&#8599;</El>
              </A>
              <A href={CONTACT.tel} data-cursor="1" css="display:flex;align-items:center;justify-content:space-between;gap:16px;border:1px solid rgba(244,241,234,.22);padding:18px 20px;color:#F4F1EA;transition:border-color .3s" hover="border-color:#F04423">
                <El as="span" css="display:flex;flex-direction:column;gap:4px"><El as="span" css="font-size:15px;font-weight:500">{CONTACT.phone}</El><El as="span" css={`${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#8E8A85`}>India &#183; US &#183; Australia</El></El>
                <El as="span" css="color:#F04423">&#8599;</El>
              </A>
            </El>
          </El>

          <El css="border:1px solid rgba(244,241,234,.18);background:#0E0D11;padding:clamp(24px,3vw,44px)">
            <LeadForm
              variant="architect"
              id="landing-architect-form"
              budgets={['$25k – $75k', '$75k – $150k', '$150k – $500k', '$500k+', 'Not decided']}
              timelines={['This quarter', 'Next quarter', 'This year', 'Exploring']}
              briefRef={briefRef}
            />
          </El>
        </El>
      </El>

      {/* FAQ */}
      {faq.length ? (
        <El as="section" css={`padding:0 ${PAD_X} clamp(56px,8vw,120px)`}>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:clamp(20px,3vw,48px)">
            {faq.map((q) => (
              <El key={q.q} data-fade="1" css="border-top:1px solid rgba(244,241,234,.2);padding-top:18px">
                <El css="font-size:16.5px;font-weight:500;letter-spacing:-.02em;line-height:1.3">{q.q}</El>
                <El as="p" css="margin:10px 0 0;font-size:14.5px;line-height:1.55;color:#B7B2AA">{q.a}</El>
              </El>
            ))}
          </El>
        </El>
      ) : null}
      <Footer activeSlug={activeSlug} />
      </El>
      </Shell>
    </>
  );
}
