import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import El from '@/components/El';
import { Seo, JsonLd } from '@/components/sections';
import Nav from '@/components/final/Nav';
import Footer from '@/components/final/Footer';
import EstimateForm from '@/components/final/EstimateForm';
import { MONO, PAD, Em, Shell } from '@/components/final/ui';
import { useReveal } from '@/components/final/fx';
import { aiServices, bySlug } from '@/data/final/ai';
import { SITE_URL } from '@/data/site';

// AI service page from the design's `ai-service.dc.html`: one component for all
// 20 AI services, with the release-gate meter, use cases by industry, the
// safety list and the sprint/pilot/team engagement cards.

const AI_NEEDS = ['AI agents', 'Chatbot', 'RAG / knowledge search', 'Generative AI', 'Voice agent', 'Document AI', 'Machine learning', 'AI consulting'];

const HERO = {
  build: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=70&auto=format&fit=crop',
  gen: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=1600&q=70&auto=format&fit=crop',
  agents: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=1600&q=70&auto=format&fit=crop',
  perceive: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&q=70&auto=format&fit=crop',
  data: 'https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2?w=1600&q=70&auto=format&fit=crop',
  strat: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=1600&q=70&auto=format&fit=crop',
};

const IND_SLUG = {
  Fintech: 'fintech', Banking: 'banking', Healthcare: 'healthcare', 'E-commerce': 'ecommerce',
  Logistics: 'logistics', Education: 'education', Enterprise: 'enterprise', Retail: 'retail',
  Insurance: 'insurance', 'Real estate': 'real-estate', Manufacturing: 'manufacturing', Media: 'media',
  Travel: 'travel', Gaming: 'gaming', Telecom: 'telecom', Government: 'government',
};

const GATE = [['Answer accuracy', '≥ 95%', 95], ['p95 latency', '< 2.0 s', 80], ['Cost per 1k tasks', 'within budget', 70], ['Safety & PII tests', '100% pass', 100]];

const SAFETY = [
  { t: 'Your data stays yours', b: 'Enterprise model endpoints with no training on your data, or self-hosted models.' },
  { t: 'Region & residency', b: 'Deployed in the cloud region your compliance needs.' },
  { t: 'PII redaction', b: 'Personal data masked before it reaches a model.' },
  { t: 'Permission-aware', b: 'The AI sees only what the user is allowed to see.' },
  { t: 'Full audit trail', b: 'Every prompt, answer and action logged.' },
  { t: 'Evaluated before release', b: 'Nothing ships without passing the release gate.' },
];

const ENGAGE = [
  { n: '01', w: '2 weeks', t: 'AI sprint', b: 'One use case, prototyped on your data and tested with users.', out: 'Prototype + go/no-go', bg: '#F04423', fg: '#08070A' },
  { n: '02', w: '6–8 weeks', t: 'Pilot', b: 'A production-grade version for one team, with evals and monitoring.', out: 'Live pilot + ROI data', bg: '#F4F1EA', fg: '#08070A' },
  { n: '03', w: 'Monthly', t: 'AI team', b: 'A dedicated squad that ships and improves AI across your products.', out: 'Roadmap delivered', bg: '#141216', fg: '#F4F1EA' },
];

export default function AiServicePage({ s, related, total }) {
  const [gateOn, setGateOn] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  useReveal([s.slug]);
  useEffect(() => { const t = setTimeout(() => setGateOn(true), 500); return () => clearTimeout(t); }, [s.slug]);

  const lname = s.name.toLowerCase();
  const steps = [
    { n: '01', w: '1 week', t: 'Discover', b: 'Pick the task, define what “good” means and collect sample data.' },
    { n: '02', w: '2 weeks', t: 'Prototype', b: 'A working version on your real data, shown to real users.' },
    { n: '03', w: '1–2 weeks', t: 'Evaluate', b: 'Automated tests for accuracy, latency, cost and safety.' },
    { n: '04', w: s.time, t: 'Productionise', b: 'Security, scaling, integrations and admin controls.' },
    { n: '05', w: 'Ongoing', t: 'Monitor', b: 'Quality, drift and spend tracked; prompts and models improved.' },
  ];
  const faq = [
    [`How much do ${lname} services cost?`, 'Most clients start with a two-week AI sprint. Pilots and production builds are priced after the sprint, once we know what works on your data.'],
    ['How long until we see something working?', 'Two weeks. The sprint ends with a working prototype on your data, not a slide deck.'],
    ['Will our data be used to train public models?', 'No. We use enterprise endpoints that do not train on your data, or host models in your own cloud.'],
    ['Which model will you use?', 'Whichever passes the evaluation at the lowest cost. We test several, and the system can switch models later.'],
    ['What if the AI gets something wrong?', 'Risky actions need human approval, low-confidence answers are flagged, and every output is logged for review.'],
    ['Who owns the code and prompts?', 'You do: code, prompts, evaluation sets and infrastructure, from the first commit.'],
  ].map(([q, a]) => ({ q, a }));

  return (
    <>
      <Seo
        title={`${s.name} Services | ${s.hook} | Mariox Software`}
        description={`${s.name} by Mariox Software: ${s.sub} Working prototype on your data in two weeks.`}
        canonical={`${SITE_URL}/ai/${s.slug}`}
      />
      <JsonLd id="ai-service-faq" data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }} />

      <Shell>
        <Nav active="ai" ctaHref="#start" />
        <El as="main">
          {/* 01 Hero */}
          <El as="section" css={`padding:clamp(130px,13vw,180px) ${PAD} clamp(56px,7vw,100px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:clamp(32px,5vw,80px);align-items:end`}>
            <El>
              <El as="nav" aria-label="Breadcrumb" css={`display:flex;flex-wrap:wrap;gap:10px;align-items:center;${MONO};font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;margin-bottom:clamp(22px,2.6vw,34px)`}>
                <El as={Link} href="/ai">AI</El><span>/</span><El as="span" css="color:#F04423">{s.group}</El>
              </El>
              <El as="h1" css="margin:0;font-size:clamp(2.8rem,7.2vw,7.6rem);line-height:.86;letter-spacing:-.065em;font-weight:500;text-wrap:balance">{s.name} <Em>services</Em><El as="span" css="color:#F04423">.</El></El>
              <El as="p" css="margin:clamp(22px,2.6vw,34px) 0 0;max-width:28ch;font-size:clamp(1.3rem,2.2vw,2rem);line-height:1.15;letter-spacing:-.035em">{s.hook}</El>
              <El as="p" css="margin:16px 0 0;max-width:46ch;font-size:clamp(15.5px,1.25vw,18px);line-height:1.55;color:#B7B2AA">{s.sub}</El>
              <El css="display:flex;flex-wrap:wrap;gap:10px;margin-top:clamp(26px,3vw,40px)">
                <El as="a" href="#start" css="display:flex;align-items:center;gap:14px;background:#F04423;color:#08070A;padding:18px 24px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap" hover="background:#F4F1EA;color:#08070A"><span>Start with a 2-week AI sprint</span> <span>&#8594;</span></El>
                <El as="a" href="#deliver" css="display:flex;align-items:center;gap:14px;border:1px solid rgba(244,241,234,.3);padding:18px 24px;border-radius:999px;font-size:15px;white-space:nowrap" hover="border-color:#F4F1EA;color:#F4F1EA">What you get &#8595;</El>
              </El>
            </El>
            <El css="border:1px solid rgba(244,241,234,.14);background:#0E0D11;padding:clamp(22px,2.6vw,34px);display:flex;flex-direction:column;gap:20px">
              <El css={`display:flex;justify-content:space-between;align-items:center;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>
                <El as="span" css="display:flex;align-items:center;gap:8px"><El as="span" css="width:7px;height:7px;background:#F04423;animation:mxPulse 1.8s ease-in-out infinite" />Release gate</El>
                <span>Example targets</span>
              </El>
              {GATE.map((g) => (
                <El key={g[0]} css="display:flex;flex-direction:column;gap:8px">
                  <El css="display:flex;justify-content:space-between;align-items:baseline;gap:12px">
                    <El as="span" css="font-size:15px">{g[0]}</El>
                    <El as="span" css={`${MONO};font-size:13px;color:#F04423`}>{g[1]}</El>
                  </El>
                  <El css="height:6px;background:rgba(244,241,234,.08);overflow:hidden">
                    <El css={`height:100%;width:${gateOn ? g[2] : 0}%;background:#F04423;transition:width 1.4s cubic-bezier(.2,.8,.2,1)`} />
                  </El>
                </El>
              ))}
              <El css="display:flex;justify-content:space-between;gap:12px;padding-top:16px;border-top:1px solid rgba(244,241,234,.12);font-size:14px;color:#B7B2AA">
                <span>Nothing ships until every bar passes.</span><El as="span" css={`${MONO};color:#F04423`}>{s.time}</El>
              </El>
            </El>
          </El>

          {/* Image */}
          <El as="section" aria-hidden="true" css={`padding:0 ${PAD} clamp(56px,7vw,100px)`}>
            <El css={`position:relative;aspect-ratio:21/7;min-height:220px;overflow:hidden;background-color:#141216;background-position:center;background-size:cover;background-image:url("${HERO[s.groupKey] || HERO.agents}")`}>
              <El css="position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,7,10,.8),rgba(8,7,10,0) 60%)" />
              <El css={`position:absolute;left:clamp(18px,2.4vw,32px);bottom:clamp(16px,2vw,28px);${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#F4F1EA`}>
                <El as="span" css="color:#F04423">{s.group}</El> &#183; Mariox AI
              </El>
            </El>
          </El>

          {/* 02 Problems */}
          <El as="section" css={`background:#F4F1EA;color:#08070A;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55;margin-bottom:16px`}>Why most {lname} projects stall</El>
            <El as="h2" data-rv="1" css="margin:0 0 clamp(36px,4.6vw,64px);max-width:16ch;font-size:clamp(2.4rem,5.6vw,5.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">The problems <Em>we solve first.</Em></El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));border-top:1px solid rgba(8,7,10,.2)">
              {s.problems.map((c, i) => (
                <El key={c.t} data-rv="1" css="padding:clamp(24px,3vw,40px) clamp(0px,2vw,32px) clamp(24px,3vw,40px) 0;border-bottom:1px solid rgba(8,7,10,.2);display:flex;flex-direction:column;gap:14px">
                  <El as="span" css="font-size:clamp(3rem,5vw,4.6rem);font-weight:300;letter-spacing:-.07em;line-height:.9;color:#F04423">{String(i + 1).padStart(2, '0')}</El>
                  <El as="h3" css="margin:0;font-size:clamp(1.4rem,2.2vw,2rem);line-height:1;letter-spacing:-.05em;font-weight:500">{c.t}</El>
                  <El as="p" css="margin:0;max-width:36ch;font-size:15.5px;line-height:1.55;color:#4A4741">{c.b}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 03 Deliverables */}
          <El as="section" id="deliver" css={`padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,4.6vw,64px)">
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.4rem,5.6vw,5.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">What you <Em>get.</Em></El>
              <El as="p" data-rv="1" css="margin:0;max-width:42ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">Every engagement includes design, engineering, evaluation, security review and handover from one senior team.</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));border-top:1px solid rgba(244,241,234,.16);border-left:1px solid rgba(244,241,234,.16)">
              {s.builds.map((b, i) => (
                <El key={b.t} data-rv="1" css="border-right:1px solid rgba(244,241,234,.16);border-bottom:1px solid rgba(244,241,234,.16);padding:clamp(24px,2.8vw,38px);min-height:240px;display:flex;flex-direction:column;gap:14px;transition:background .45s,color .45s" hover="background:#F04423;color:#08070A">
                  <El as="span" css={`${MONO};font-size:11px;letter-spacing:.14em;opacity:.7`}>{String(i + 1).padStart(2, '0')}</El>
                  <El as="h3" css="margin:auto 0 0;font-size:clamp(1.5rem,2.4vw,2.2rem);line-height:.95;letter-spacing:-.055em;font-weight:500">{b.t}</El>
                  <El as="p" css="margin:0;font-size:15px;line-height:1.5;opacity:.78">{b.b}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 04 Use cases */}
          <El as="section" css={`padding:0 ${PAD} clamp(90px,11vw,170px)`}>
            <El css="padding-top:clamp(60px,7vw,100px);border-top:1px solid rgba(244,241,234,.12);margin-bottom:clamp(28px,3.4vw,48px)">
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.2rem,4.6vw,4.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">{s.name}, <Em>by industry.</Em></El>
            </El>
            <El css="border-top:1px solid rgba(244,241,234,.16)">
              {s.uses.map((u, i) => {
                const slug = IND_SLUG[u.ind];
                return (
                  <El as={slug ? Link : 'a'} key={u.t} href={slug ? `/industries/${slug}` : '#start'} data-rv="1" css="display:grid;grid-template-columns:52px minmax(0,1fr) minmax(0,2fr) auto;gap:12px clamp(16px,3vw,40px);align-items:baseline;padding:clamp(18px,2vw,26px) 0;border-bottom:1px solid rgba(244,241,234,.16);transition:padding-left .4s cubic-bezier(.2,.8,.2,1),color .25s" hover="padding-left:12px;color:#F04423">
                    <El as="span" css={`${MONO};font-size:11px;color:#8E8A85`}>{String(i + 1).padStart(2, '0')}</El>
                    <El as="span" css={`${MONO};font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#F04423`}>{u.ind}</El>
                    <El as="span" css="font-size:clamp(1.15rem,1.9vw,1.7rem);font-weight:500;letter-spacing:-.04em">{u.t}</El>
                    <El as="span" css="font-size:15px">&#8599;</El>
                  </El>
                );
              })}
            </El>
          </El>

          {/* 05 Process */}
          <El as="section" css={`background:#F4F1EA;color:#08070A;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,4.6vw,64px)">
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.4rem,5.6vw,5.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">How we ship <Em>AI that holds up.</Em></El>
              <El as="p" data-rv="1" css="margin:0;max-width:42ch;font-size:16.5px;line-height:1.55;color:#4A4741">Evaluation comes before scale. You see it working on your data before you commit to the full build.</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:clamp(16px,2vw,28px)">
              {steps.map((p, i) => (
                <El key={p.n} data-rv="1" css={`border-top:2px solid ${i === 2 ? '#F04423' : '#08070A'};padding-top:18px;display:flex;flex-direction:column;gap:10px`}>
                  <El css={`display:flex;justify-content:space-between;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#5E5A55`}><El as="span" css="color:#F04423">{p.n}</El><span>{p.w}</span></El>
                  <El as="h3" css="margin:0;font-size:clamp(1.4rem,2vw,1.9rem);letter-spacing:-.05em;font-weight:500">{p.t}</El>
                  <El as="p" css="margin:0;font-size:15px;line-height:1.5;color:#4A4741">{p.b}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 06 Stack & safety */}
          <El as="section" css={`padding:clamp(90px,11vw,170px) ${PAD};display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(40px,5vw,90px)`}>
            <El>
              <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:18px`}>Models we work with</El>
              <El css="display:flex;flex-wrap:wrap;gap:clamp(8px,1vw,14px);margin-bottom:clamp(36px,4vw,56px)">
                {['OpenAI', 'Claude', 'Gemini', 'Llama', 'Mistral'].map((m) => (
                  <El as="span" key={m} data-rv="1" css="font-size:clamp(1.6rem,3vw,2.8rem);font-weight:300;letter-spacing:-.06em;line-height:1.05;padding-right:clamp(8px,1.2vw,18px);border-right:1px solid rgba(244,241,234,.16)">{m}</El>
                ))}
              </El>
              <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:14px`}>Typical stack for {lname}</El>
              <El css="display:flex;flex-wrap:wrap;gap:8px">
                {s.stack.map((t) => <El as="span" key={t} css="background:#F04423;color:#08070A;padding:11px 16px;font-size:15px">{t}</El>)}
              </El>
            </El>
            <El>
              <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:18px`}>Security &amp; governance, by default</El>
              <El css="border-top:1px solid rgba(244,241,234,.16)">
                {SAFETY.map((x) => (
                  <El key={x.t} data-rv="1" css="display:grid;grid-template-columns:28px 1fr;gap:14px;padding:16px 0;border-bottom:1px solid rgba(244,241,234,.16)">
                    <El as="span" css="width:10px;height:10px;background:#F04423;margin-top:7px" />
                    <El>
                      <El css="font-size:17px;font-weight:500;letter-spacing:-.03em">{x.t}</El>
                      <El css="margin-top:4px;font-size:14.5px;line-height:1.5;color:#B7B2AA">{x.b}</El>
                    </El>
                  </El>
                ))}
              </El>
            </El>
          </El>

          {/* 07 Engagement */}
          <El as="section" css={`padding:0 ${PAD} clamp(90px,11vw,170px)`}>
            <El as="h2" data-rv="1" css="margin:0 0 clamp(32px,4vw,56px);font-size:clamp(2.2rem,4.6vw,4.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">Three ways <Em>to start.</Em></El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:clamp(12px,1.4vw,20px)">
              {ENGAGE.map((m) => (
                <El key={m.n} data-rv="1" css={`background:${m.bg};color:${m.fg};padding:clamp(24px,3vw,40px);min-height:320px;display:flex;flex-direction:column;gap:14px`}>
                  <El css={`display:flex;justify-content:space-between;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;opacity:.8`}><span>{m.n}</span><span>{m.w}</span></El>
                  <El as="h3" css="margin:auto 0 0;font-size:clamp(1.8rem,2.8vw,2.6rem);line-height:.95;letter-spacing:-.055em;font-weight:500">{m.t}</El>
                  <El as="p" css="margin:0;font-size:15.5px;line-height:1.5;opacity:.85">{m.b}</El>
                  <El as="span" css={`${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;opacity:.8`}>You leave with &#183; {m.out}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 08 FAQ */}
          <El as="section" css={`padding:0 ${PAD} clamp(90px,11vw,170px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(28px,4vw,72px);align-items:start`}>
            <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.2rem,4.6vw,4.4rem);line-height:.9;letter-spacing:-.06em;font-weight:500">Questions, <Em>answered.</Em></El>
            <El css="grid-column:span 2;min-width:min(100%,300px);border-top:1px solid rgba(244,241,234,.16)">
              {faq.map((q, i) => {
                const on = faqOpen === i;
                return (
                  <El key={q.q} css="border-bottom:1px solid rgba(244,241,234,.16)">
                    <El as="button" type="button" onClick={() => setFaqOpen(on ? -1 : i)} aria-expanded={on} css="width:100%;background:transparent;border:0;color:#F4F1EA;cursor:pointer;display:flex;justify-content:space-between;gap:20px;align-items:baseline;padding:clamp(18px,2vw,26px) 0;text-align:left;font-family:Geist,sans-serif;font-size:clamp(1.1rem,1.7vw,1.5rem);font-weight:500;letter-spacing:-.035em">
                      {q.q}<El as="span" css={`${MONO};font-size:18px;color:#F04423`}>{on ? '−' : '+'}</El>
                    </El>
                    {on ? <El as="p" css="margin:0 0 24px;max-width:60ch;font-size:16px;line-height:1.6;color:#B7B2AA">{q.a}</El> : null}
                  </El>
                );
              })}
            </El>
          </El>

          {/* 09 Start */}
          <El as="section" id="start" css={`background:#0E0D11;border-top:1px solid rgba(244,241,234,.08);padding:clamp(90px,11vw,170px) ${PAD};display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr));gap:clamp(36px,5vw,80px);align-items:start`}>
            <El>
              <El as="h2" css="margin:0;font-size:clamp(2.6rem,6vw,6rem);line-height:.88;letter-spacing:-.065em;font-weight:500">Ready to try {lname}? <Em color="#F04423">Start with a sprint.</Em></El>
              <El as="p" css="margin:22px 0 0;max-width:40ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">Tell us the task. An AI architect replies within one business day with a sprint plan. NDA on request.</El>
              <El css="display:flex;flex-direction:column;gap:8px;margin-top:28px;font-size:15px">
                <El as="a" href="mailto:admin@marioxsoftware.com">admin@marioxsoftware.com</El>
                <El as="a" href="tel:+919599287045">+91 95992 87045</El>
              </El>
            </El>
            <EstimateForm
              id="ai-service-estimate"
              title="Book a 2-week AI sprint"
              source={`ai:${s.slug}`}
              subject={s.name}
              needs={AI_NEEDS}
              needsLabel="Interested in"
              messageLabel="What should the AI do?"
              messagePlaceholder="e.g. Answer customer questions from our product manuals"
              dark
            />
          </El>

          {/* 10 Related */}
          <El as="section" css={`padding:clamp(70px,8vw,120px) ${PAD}`}>
            <El css="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:16px;margin-bottom:24px">
              <El as="h2" css="margin:0;font-size:clamp(1.6rem,2.8vw,2.6rem);letter-spacing:-.05em;font-weight:500">Other AI services</El>
              <El as={Link} href="/ai" css="border-bottom:1px solid #F04423;padding-bottom:5px;font-size:15px">All {total} AI services &#8594;</El>
            </El>
            <El css="display:flex;flex-wrap:wrap;gap:8px">
              {related.map((r) => (
                <El as={Link} key={r.slug} href={`/ai/${r.slug}`} css="border:1px solid rgba(244,241,234,.22);border-radius:999px;padding:11px 18px;font-size:15px;transition:all .25s" hover="background:#F04423;border-color:#F04423;color:#08070A">{r.name}</El>
              ))}
            </El>
          </El>

          <Footer />
        </El>
      </Shell>
    </>
  );
}

AiServicePage.bare = true;

export async function getStaticPaths() {
  return { paths: aiServices.map((s) => ({ params: { slug: s.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const s = bySlug[params.slug];
  const related = aiServices
    .filter((x) => x.slug !== s.slug && x.groupKey === s.groupKey)
    .concat(aiServices.filter((x) => x.slug !== s.slug && x.groupKey !== s.groupKey))
    .slice(0, 10)
    .map((r) => ({ slug: r.slug, name: r.name }));
  return { props: { s, related, total: aiServices.length } };
}
