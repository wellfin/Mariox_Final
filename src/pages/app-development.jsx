import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import El from '@/components/El';
import { A, ServiceRows } from '@/components/ui';
import { Seo, JsonLd } from '@/components/sections';
import LeadForm from '@/components/LeadForm';
import ClientStories from '@/components/ClientStories';
import { CONTACT } from '@/data/site';
import { groupRows } from '@/data/growthServices';
import {
  heroTrust, brands, stats, apps, aiServices, aiStack, cases, steps,
  certs, trust, faq, heroNeeds, heroBudgets,
} from '@/data/enterpriseLanding';

// "Mariox Enterprise Landing" design, rendered inside the site shell.
// The "build an app like…" panel embeds the App Demos animation, as the design
// did with an iframe of Mariox App Demos.
const AppDemo = dynamic(() => import('@/components/appDemo/MarioxAppDemo'), {
  ssr: false,
  loading: () => (
    <El css="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#57544F;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.2em;text-transform:uppercase">Loading demo…</El>
  ),
});

const MONO = "font-family:'JetBrains Mono',monospace";
const PAD_X = 'clamp(16px,4vw,56px)';
const ARCHIVO = "font-family:Archivo,'Helvetica Neue',Helvetica,sans-serif";

const scrollToTalk = () => {
  const t = document.getElementById('talk');
  if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
};

export default function AppDevelopment({ rows }) {
  const router = useRouter();
  const [app, setApp] = useState(2); // Zomato, as in the design's default demo
  const briefRef = useRef(null);
  const active = apps[app];

  // ?app=uber opens that model straight from the URL.
  useEffect(() => {
    const q = router.query.app;
    if (typeof q !== 'string') return;
    const i = apps.findIndex((a) => a.demo === q.toLowerCase());
    if (i >= 0) setApp(i);
  }, [router.query.app]);

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
    <El css={`${ARCHIVO};display:block`}>
      <Seo
        title="Custom Software &amp; App Development Company — Mariox Software"
        description="The engineering team behind products for Airwallex, Kogan, Zeller, HotDoc and Lunar. Talk to a solution architect about your next platform."
      />
      <JsonLd
        id="app-dev-faq"
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        }}
      />

      {/* Hero + estimate form */}
      <El as="section" css={`display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,400px),1fr));gap:clamp(32px,5vw,80px);align-items:start;padding:clamp(40px,6vw,96px) ${PAD_X} clamp(40px,5vw,80px)`}>
        <El css="padding-top:clamp(0px,1.5vw,20px)">
          <El data-fade="1" css="display:flex;align-items:center;gap:11px;margin-bottom:clamp(18px,2.4vw,28px)">
            <El as="span" css="width:8px;height:8px;background:#F04423" />
            <El as="span" css={`${MONO};font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#9B968F`}>Trusted by Airwallex, Zeller, Kogan &amp; HotDoc</El>
          </El>
          <El as="h1" css="margin:0;max-width:17ch;font-size:clamp(2.4rem,5.4vw,4.6rem);line-height:.95;letter-spacing:-.045em;font-weight:800;text-wrap:balance">
            Custom Software &amp; App Development Company <El as="span" css="color:#F04423">for serious products.</El>
          </El>
          <El as="p" css="margin:clamp(20px,2.6vw,30px) 0 0;max-width:46ch;font-size:clamp(16px,1.35vw,19px);line-height:1.55;color:#B7B2AA;text-wrap:pretty">
            Web apps, mobile apps, CRM, ERP, SaaS and AI, built by 100+ senior engineers for startups and enterprises. Get a fixed-scope estimate within one business day.
          </El>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,210px),1fr));gap:14px 28px;margin-top:clamp(26px,3.2vw,40px);max-width:560px">
            {heroTrust.map((h) => (
              <El key={h.b} css="display:flex;gap:12px;align-items:baseline">
                <El as="span" css="width:7px;height:7px;background:#F04423;flex-shrink:0;transform:translateY(-2px)" />
                <El as="span" css="font-size:15px;line-height:1.4"><El as="strong" css="font-weight:700">{h.b}</El> <El as="span" css="color:#9B968F">{h.t}</El></El>
              </El>
            ))}
          </El>
          <A href={CONTACT.tel} data-cursor="1" css={`display:inline-flex;align-items:center;gap:12px;margin-top:clamp(26px,3.2vw,40px);${MONO};font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#F4F1EA;border-bottom:1px solid #F04423;padding-bottom:5px`}>
            Or call {CONTACT.phone} &#8599;
          </A>
        </El>

        <El id="enquiry" css="border:1px solid rgba(244,241,234,.2);background:#0E0D11;padding:clamp(22px,2.6vw,36px)">
          <El css="display:flex;align-items:baseline;gap:11px;padding-bottom:14px;border-bottom:1px solid rgba(244,241,234,.16);margin-bottom:clamp(18px,2.2vw,24px)">
            <El as="span" css="width:8px;height:8px;background:#F04423;align-self:center" />
            <El as="span" css="font-size:17px;font-weight:800;letter-spacing:-.02em">Get a free project estimate</El>
            <El as="span" css={`margin-left:auto;${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#9B968F`}>2 min</El>
          </El>
          <LeadForm variant="hero" id="appdev-hero-form" needs={heroNeeds} budgets={heroBudgets} />
        </El>
      </El>

      {/* Brand ticker */}
      <El as="section" css="border-top:1px solid rgba(244,241,234,.1);border-bottom:1px solid rgba(244,241,234,.1);padding:clamp(22px,2.8vw,34px) 0;overflow:hidden">
        <El css={`padding:0 ${PAD_X} clamp(16px,2vw,24px);${MONO};font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#9B968F`}>Products we&#8217;ve engineered for</El>
        <El css="display:flex;width:max-content;animation:mxTick 46s linear infinite">
          {[0, 1].map((loop) => (
            <El key={loop} aria-hidden={loop === 1 ? 'true' : undefined} css="display:flex;align-items:center;gap:clamp(40px,5vw,80px);padding:0 clamp(20px,2.5vw,40px)">
              {brands.map((b) => (
                <El as="span" key={b} css="font-size:clamp(1.4rem,2.6vw,2.2rem);font-weight:800;letter-spacing:-.04em;white-space:nowrap;color:#F4F1EA;opacity:.82">{b}</El>
              ))}
            </El>
          ))}
        </El>
      </El>

      {/* Stats */}
      <El as="section" css={`display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));padding:0 ${PAD_X}`}>
        {stats.map((s) => (
          <El key={s.l} data-fade="1" css="padding:clamp(28px,4vw,56px) clamp(4px,1vw,12px);border-bottom:1px solid rgba(244,241,234,.1)">
            <El css="font-size:clamp(2.6rem,5.4vw,4.6rem);font-weight:800;letter-spacing:-.05em;line-height:.9">{s.v}</El>
            <El css={`margin-top:12px;${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9B968F`}>{s.l}</El>
          </El>
        ))}
      </El>

      {/* Build an app like… with the live demo */}
      <El as="section" id="apps" css={`padding:clamp(64px,9vw,150px) ${PAD_X} 0`}>
        <El css="display:flex;flex-wrap:wrap;gap:20px;align-items:flex-end;justify-content:space-between;margin-bottom:clamp(28px,4vw,52px)">
          <El as="h2" css="margin:0;max-width:16ch;font-size:clamp(2rem,4.6vw,3.8rem);line-height:.95;letter-spacing:-.045em;font-weight:800">Looking to build an app like&#8230;</El>
          <El as="span" css={`${MONO};font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#9B968F`}>Pick a model to see how we&#8217;d build it</El>
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
                  <El as="span" css="font-size:clamp(1.25rem,2.4vw,1.9rem);font-weight:800;letter-spacing:-.04em;line-height:1">{a.name}</El>
                  <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;opacity:.75;text-align:right`}>{a.cat}</El>
                </El>
              );
            })}
          </El>

          <El css="display:flex;flex-direction:column;gap:clamp(18px,2.2vw,26px)">
            {/* Height capped so the demo's closing headline stays on screen. */}
            <El css="position:relative;width:100%;aspect-ratio:16/10;max-height:min(68vh,660px);border:1px solid rgba(244,241,234,.14);background:#08070A;overflow:hidden">
              <AppDemo key={active.demo} app={active.demo} />
            </El>
            <El css="font-size:clamp(1.4rem,2.6vw,2.1rem);font-weight:800;letter-spacing:-.04em;line-height:1.02">{active.title}</El>
            <El as="p" css="margin:0;max-width:52ch;font-size:16px;line-height:1.55;color:#B7B2AA">{active.body}</El>
            <El css="display:flex;flex-wrap:wrap;gap:8px">
              {active.features.map((f) => (
                <El as="span" key={f} css={`${MONO};font-size:11px;letter-spacing:.08em;border:1px solid rgba(244,241,234,.22);color:#D9D5CE;padding:9px 12px`}>{f}</El>
              ))}
            </El>
            <El css="display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between;padding-top:18px;border-top:1px solid rgba(244,241,234,.14)">
              {active.case ? (
                <A href={'/case-study/' + active.case} data-cursor="view" css={`${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#9B968F;border-bottom:1px solid rgba(244,241,234,.3);padding-bottom:3px`}>{active.proof} &#8599;</A>
              ) : (
                <El as="span" css={`${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#9B968F`}>{active.proof}</El>
              )}
              <El
                as="button"
                type="button"
                data-cursor="start"
                onClick={quoteWith('We want to build an app like ' + active.name + ' (' + active.cat.toLowerCase() + '). Key features: ' + active.features.join(', ') + '.')}
                css={`cursor:pointer;border:0;display:flex;align-items:center;gap:12px;background:#F04423;color:#08070A;padding:16px 22px;${MONO};font-size:11.5px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;transition:background .3s`}
                hover="background:#F4F1EA"
              >
                Quote an app like {active.name} <span>&#8594;</span>
              </El>
            </El>
          </El>
        </El>
      </El>

      {/* AI */}
      <El as="section" id="ai" css={`margin-top:clamp(64px,9vw,150px);padding:clamp(64px,9vw,140px) ${PAD_X};border-top:1px solid rgba(244,241,234,.1);border-bottom:1px solid rgba(244,241,234,.1);background:#0C0B0F`}>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));gap:clamp(32px,5vw,96px);align-items:end;margin-bottom:clamp(36px,5vw,72px)">
          <El>
            <El css="display:flex;align-items:center;gap:11px;margin-bottom:clamp(18px,2.4vw,28px)">
              <El as="span" css="width:8px;height:8px;background:#F04423" />
              <El as="span" css={`${MONO};font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#9B968F`}>AI &amp; automation</El>
            </El>
            <El as="h2" css="margin:0;max-width:15ch;font-size:clamp(2.2rem,5.2vw,4.4rem);line-height:.93;letter-spacing:-.045em;font-weight:800">AI that ships to production, <El as="span" css="color:#F04423">not to a demo.</El></El>
          </El>
          <El as="p" css="margin:0;max-width:44ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">We build AI into the products and workflows you already run, with the evaluation, guardrails and cost controls that keep it trustworthy once real users arrive.</El>
        </El>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:clamp(10px,1.2vw,16px)">
          {aiServices.map((s) => (
            <El key={s.n} data-fade="1" css="background:#0C0B0F;border:1px solid rgba(244,241,234,.14);padding:clamp(22px,2.6vw,36px);display:flex;flex-direction:column;gap:14px;min-height:230px;transition:background .35s,color .35s,border-color .35s" hover="background:#F04423;color:#08070A">
              <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;opacity:.6`}>{s.n}</El>
              <El css="margin-top:auto;font-size:clamp(1.2rem,2vw,1.6rem);font-weight:800;letter-spacing:-.035em;line-height:1.05">{s.t}</El>
              <El as="p" css="margin:0;font-size:14.5px;line-height:1.5;opacity:.75">{s.b}</El>
            </El>
          ))}
        </El>
        <El css="display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between;margin-top:clamp(24px,3vw,40px)">
          <El css="display:flex;flex-wrap:wrap;gap:8px">
            {aiStack.map((t) => (
              <El as="span" key={t} css={`${MONO};font-size:11px;letter-spacing:.08em;border:1px solid rgba(244,241,234,.22);color:#D9D5CE;padding:9px 12px`}>{t}</El>
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
      <El as="section" css={`padding:0 ${PAD_X} clamp(64px,9vw,150px)`}>
        <El as="h2" css="margin:0 0 clamp(28px,4vw,56px);max-width:20ch;font-size:clamp(2rem,4.6vw,3.8rem);line-height:.95;letter-spacing:-.045em;font-weight:800">Platforms in production.</El>
        <El css="display:grid;gap:clamp(16px,2vw,28px)">
          {cases.map((c) => (
            <A key={c.name} href={c.url} data-fade="1" data-cursor="view" css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));border:1px solid rgba(244,241,234,.14);color:#F4F1EA;transition:border-color .4s" hover="border-color:#F04423">
              <El css="aspect-ratio:16/10;overflow:hidden;background:#111013">
                <El as="img" src={c.img} alt={c.name} loading="lazy" css="width:100%;height:100%;object-fit:cover;display:block;filter:saturate(.85)" />
              </El>
              <El css="padding:clamp(24px,3.4vw,52px);display:flex;flex-direction:column;justify-content:center;gap:16px">
                <El as="span" css={`${MONO};font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#F04423`}>{c.sector} &#183; {c.region}</El>
                <El css="font-size:clamp(1.8rem,3.6vw,3rem);font-weight:800;letter-spacing:-.045em;line-height:.95">{c.name}</El>
                <El as="p" css="margin:0;max-width:44ch;font-size:15.5px;line-height:1.55;color:#B7B2AA">{c.body}</El>
                <El as="span" css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#9B968F`}>{c.scope}</El>
              </El>
            </A>
          ))}
        </El>
      </El>

      {/* How large engagements run (ivory) */}
      <El as="section" css={`background:#F4F1EA;color:#08070A;padding:clamp(64px,9vw,150px) ${PAD_X}`}>
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

      {/* Certifications + security */}
      <El as="section" css={`padding:clamp(56px,8vw,120px) ${PAD_X}`}>
        <El css="display:flex;flex-wrap:wrap;gap:16px;align-items:baseline;justify-content:space-between;margin-bottom:clamp(28px,3.6vw,48px)">
          <El as="h2" css="margin:0;font-size:clamp(1.8rem,3.6vw,2.8rem);line-height:1;letter-spacing:-.04em;font-weight:800">Certified on the platforms we deploy to.</El>
          <El as="span" css={`${MONO};font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#9B968F`}>Verifiable on request</El>
        </El>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr));gap:clamp(10px,1.2vw,16px);margin-bottom:clamp(56px,7vw,100px)">
          {certs.map((c) => (
            <El key={c.n} data-fade="1" css="background:#08070A;border:1px solid rgba(244,241,234,.14);padding:clamp(22px,2.6vw,34px);display:flex;flex-direction:column;gap:14px;min-height:230px">
              <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;color:#F04423`}>{c.n}</El>
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
            <El key={r.t} data-fade="1" css="border-top:2px solid #F04423;padding-top:18px">
              <El css="font-size:clamp(1.05rem,1.6vw,1.25rem);font-weight:700;letter-spacing:-.025em">{r.t}</El>
              <El as="p" css="margin:9px 0 0;font-size:14.5px;line-height:1.55;color:#B7B2AA">{r.b}</El>
            </El>
          ))}
        </El>
      </El>

      {/* App development services (internal links kept from the service hub) */}
      {rows && rows.length ? (
        <El as="section" css={`padding:0 ${PAD_X} clamp(56px,8vw,120px)`}>
          <El css="display:flex;flex-wrap:wrap;gap:16px;align-items:baseline;justify-content:space-between;margin-bottom:clamp(22px,3vw,40px)">
            <El as="h2" css="margin:0;font-size:clamp(1.8rem,3.6vw,2.8rem);line-height:1;letter-spacing:-.04em;font-weight:800">App development services.</El>
            <A href="/services" data-cursor="1" css={`${MONO};font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#F04423;border-bottom:1px solid #F04423;padding-bottom:4px`}>All services &#8599;</A>
          </El>
          <ServiceRows items={rows} />
        </El>
      ) : null}

      {/* Talk to an architect */}
      <El as="section" id="talk" data-cta="1" css={`border-top:1px solid rgba(244,241,234,.1);padding:clamp(64px,9vw,150px) ${PAD_X}`}>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));gap:clamp(36px,5vw,96px);align-items:start">
          <El>
            <El as="h2" css="margin:0;max-width:13ch;font-size:clamp(2.3rem,5.6vw,4.6rem);line-height:.92;letter-spacing:-.045em;font-weight:800">Talk to a <El as="span" css="color:#F04423">solution architect.</El></El>
            <El as="p" css="margin:clamp(20px,2.6vw,30px) 0 0;max-width:40ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">Not a sales rep. An architect reads your brief and replies within one business day. NDA available before the first call.</El>
            <El css="display:flex;flex-direction:column;gap:14px;margin-top:clamp(28px,3.4vw,44px)">
              <A href={'mailto:' + CONTACT.email + '?subject=Book%20a%20call'} data-cursor="1" css="display:flex;align-items:center;justify-content:space-between;gap:16px;border:1px solid rgba(244,241,234,.22);padding:18px 20px;color:#F4F1EA;transition:border-color .3s" hover="border-color:#F04423">
                <El as="span" css="display:flex;flex-direction:column;gap:4px"><El as="span" css="font-size:15px;font-weight:700">Book a 30-minute call</El><El as="span" css={`${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#9B968F`}>Pick a time that suits you</El></El>
                <El as="span" css="color:#F04423">&#8599;</El>
              </A>
              <A href={CONTACT.tel} data-cursor="1" css="display:flex;align-items:center;justify-content:space-between;gap:16px;border:1px solid rgba(244,241,234,.22);padding:18px 20px;color:#F4F1EA;transition:border-color .3s" hover="border-color:#F04423">
                <El as="span" css="display:flex;flex-direction:column;gap:4px"><El as="span" css="font-size:15px;font-weight:700">{CONTACT.phone}</El><El as="span" css={`${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#9B968F`}>India &#183; US &#183; Australia</El></El>
                <El as="span" css="color:#F04423">&#8599;</El>
              </A>
            </El>
          </El>

          <El css="border:1px solid rgba(244,241,234,.18);background:#0E0D11;padding:clamp(24px,3vw,44px)">
            <LeadForm variant="architect" id="appdev-architect-form" budgets={['$25k – $75k', '$75k – $150k', '$150k – $500k', '$500k+', 'Not decided']} timelines={['This quarter', 'Next quarter', 'This year', 'Exploring']} briefRef={briefRef} />
          </El>
        </El>
      </El>

      {/* FAQ */}
      <El as="section" css={`padding:0 ${PAD_X} clamp(56px,8vw,120px)`}>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:clamp(20px,3vw,48px)">
          {faq.map((q) => (
            <El key={q.q} data-fade="1" css="border-top:1px solid rgba(244,241,234,.2);padding-top:18px">
              <El css="font-size:16.5px;font-weight:700;letter-spacing:-.02em;line-height:1.3">{q.q}</El>
              <El as="p" css="margin:10px 0 0;font-size:14.5px;line-height:1.55;color:#B7B2AA">{q.a}</El>
            </El>
          ))}
        </El>
      </El>
    </El>
  );
}

export async function getStaticProps() {
  return { props: { rows: groupRows('app-development') } };
}
