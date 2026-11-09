import React, { useState } from 'react';
import El from '@/components/El';
import { Seo, JsonLd } from '@/components/sections';
import Nav from '@/components/final/Nav';
import Footer from '@/components/final/Footer';
import ProofBand from '@/components/final/ProofBand';
import EstimateForm from '@/components/final/EstimateForm';
import { MONO, PAD, Em, Shell } from '@/components/final/ui';
import { useReveal } from '@/components/final/fx';
import { SITE_URL } from '@/data/site';

// Engagement models page from the design's `engagement-models`: the three
// models side by side, a comparison table and the two-question picker that
// suggests where to start.

const MODELS = [
  {
    id: 'm-fixed', n: '01', tag: 'Most popular for MVPs', t: 'Fixed scope',
    b: 'A clear scope, one price and a delivery date, agreed after a short discovery.',
    facts: [{ k: 'Pricing', v: 'Fixed, by milestone' }, { k: 'Typical length', v: '6–20 weeks' }, { k: 'Flexibility', v: 'Changes priced first' }, { k: 'Your time', v: 'Low to medium' }],
    best: ['MVPs and first versions', 'Well-defined features', 'Fixed budgets and deadlines'],
    watch: 'New ideas mid-project become change requests with their own price.',
    bg: '#141216', fg: '#F4F1EA', bd: 'rgba(244,241,234,.16)', line: 'rgba(244,241,234,.14)', acc: '#F04423', btnBg: '#F04423', btnFg: '#08070A',
  },
  {
    id: 'm-team', n: '02', tag: 'Best for growing products', t: 'Dedicated team',
    b: 'A cross-functional squad that works only on your product, led by a Mariox delivery lead.',
    facts: [{ k: 'Pricing', v: 'Monthly per person' }, { k: 'Typical length', v: '6 months +' }, { k: 'Flexibility', v: 'Reprioritise every sprint' }, { k: 'Your time', v: 'Medium' }],
    best: ['Products with an ongoing roadmap', 'Scaling after launch', 'Replacing an in-house hire'],
    watch: 'Works best when someone on your side owns priorities.',
    bg: '#F4F1EA', fg: '#08070A', bd: '#F4F1EA', line: 'rgba(8,7,10,.14)', acc: '#C2361A', btnBg: '#08070A', btnFg: '#F4F1EA',
  },
  {
    id: 'm-tm', n: '03', tag: 'Best for evolving scope', t: 'Time & materials',
    b: 'Pay for the hours worked, with a monthly cap and weekly reports, while scope takes shape.',
    facts: [{ k: 'Pricing', v: 'Hourly, capped monthly' }, { k: 'Typical length', v: 'Any' }, { k: 'Flexibility', v: 'Highest' }, { k: 'Your time', v: 'Medium to high' }],
    best: ['Discovery and prototypes', 'R&D and AI experiments', 'Support and small changes'],
    watch: 'The final cost depends on decisions made along the way.',
    bg: '#141216', fg: '#F4F1EA', bd: 'rgba(244,241,234,.16)', line: 'rgba(244,241,234,.14)', acc: '#F04423', btnBg: '#F04423', btnFg: '#08070A',
  },
];

const COL_HEADS = ['Fixed scope', 'Dedicated team', 'Time & materials'];

const ROWS = [
  { k: 'Scope needed up front', v: ['Clear and detailed', 'Direction only', 'Rough idea is fine'] },
  { k: 'How you pay', v: ['Fixed price by milestone', 'Monthly per person', 'Hours worked, capped'] },
  { k: 'Changing priorities', v: ['Via priced change requests', 'Every sprint', 'Any time'] },
  { k: 'Your involvement', v: ['Reviews at milestones', 'Product owner, weekly', 'Close, often daily'] },
  { k: 'Time to start', v: ['After 1–2 week discovery', '2–3 weeks', '1 week'] },
  { k: 'Best length', v: ['6–20 weeks', '6 months or more', 'Any'] },
  { k: 'Budget certainty', v: ['Highest', 'High, monthly', 'Lower'] },
];

const REC = {
  fixed: { t: 'Fixed scope', b: 'Your scope is clear and the project has an end. Agree features, price and date up front.', h: '#m-fixed' },
  team: { t: 'Dedicated team', b: 'You need people for the long run. A stable squad that learns your product and moves faster every month.', h: '#m-team' },
  tm: { t: 'Time & materials', b: 'You are still exploring. Start with a short discovery, pay for the hours used, and fix scope once it is clear.', h: '#m-tm' },
};

const Q1 = ['Very clear', 'Roughly', 'Still exploring'];
const Q2 = ['Under 4 months', '4–12 months', 'Ongoing'];

const FAQ = [
  ['Can we switch models later?', 'Yes. The most common path is a fixed-scope MVP followed by a dedicated team for what comes next, with the same people.'],
  ['Is there a minimum team size?', 'A dedicated team usually starts at two to three people. For smaller needs, time & materials or staff augmentation works better.'],
  ['Who manages the team?', 'Every engagement has a Mariox delivery lead. You set priorities; we handle planning, people and quality.'],
  ['Do you offer a paid discovery on its own?', 'Yes. A one to two week discovery gives you a scope, architecture and estimate you can take anywhere.'],
];

// The design's rule: a long commitment points at a dedicated team, an unclear
// scope at time & materials, and a clear short scope at a fixed price.
function recommend(a, b) {
  if (b === 2 || (b === 1 && a !== 0)) return REC.team;
  if (a === 2) return REC.tm;
  if (a === 0) return REC.fixed;
  return b === 0 ? REC.fixed : REC.tm;
}

export default function EngagementModels() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [faqOpen, setFaqOpen] = useState(0);
  useReveal([a, b, faqOpen]);

  const rec = recommend(a, b);
  const pill = (on) => `cursor:pointer;min-height:48px;padding:12px 18px;border-radius:999px;border:1px solid ${on ? '#F4F1EA' : 'rgba(244,241,234,.3)'};background:${on ? '#F4F1EA' : 'transparent'};color:${on ? '#08070A' : '#F4F1EA'};font-family:Geist,sans-serif;font-size:15px;transition:all .2s`;

  return (
    <>
      <Seo
        title="Engagement Models — Fixed Price, Dedicated Team, Time & Materials | Mariox Software"
        description="Compare Mariox Software engagement models: fixed-scope projects, dedicated development teams and time & materials. Find the right fit for your budget and scope."
        canonical={`${SITE_URL}/engagement-models`}
      />
      <JsonLd id="engagement-faq" data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }} />

      <Shell>
        <Nav active="engagement-models" ctaHref="/book-consultation" ctaLabel="Book a call" />
        <El as="main">
          {/* 01 Hero */}
          <El as="section" css={`position:relative;padding:clamp(140px,14vw,200px) ${PAD} clamp(56px,7vw,110px);overflow:hidden;isolation:isolate`}>
            <El css={`display:flex;align-items:center;gap:12px;${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#B7B2AA`}>
              <El as="span" css="width:7px;height:7px;background:#F04423" />Engagement models
            </El>
            <El as="h1" css="margin:clamp(18px,2.4vw,28px) 0 0;font-size:clamp(3rem,8.2vw,8.6rem);line-height:.86;letter-spacing:-.07em;font-weight:500;max-width:15ch">
              <El as="span" css="display:block">Three ways</El>
              <El as="span" css="display:block">to <Em>work together.</Em></El>
            </El>
            <El as="p" css="margin:clamp(22px,2.8vw,34px) 0 0;max-width:52ch;font-size:clamp(16px,1.4vw,20px);line-height:1.5;color:#D9D5CD;text-wrap:pretty">Pick the model that matches how certain your scope is. Many clients start with a fixed-scope MVP, then keep the same people on as a dedicated team.</El>
            <El css="display:flex;flex-wrap:wrap;gap:12px;margin-top:clamp(28px,3.4vw,44px)">
              <El as="a" href="#quiz" css="display:flex;align-items:center;gap:14px;background:#F04423;color:#08070A;padding:18px 26px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap;transition:background .3s" hover="background:#F4F1EA;color:#08070A">Find my model <span>&#8594;</span></El>
              <El as="a" href="/book-consultation" css="display:flex;align-items:center;gap:14px;border:1px solid rgba(244,241,234,.35);padding:18px 24px;border-radius:999px;font-size:15px;white-space:nowrap;transition:border-color .3s" hover="border-color:#F4F1EA;color:#F4F1EA">Book a free consultation</El>
            </El>
          </El>

          <ProofBand eyebrow="Who you will work with" title="Every model," titleEm="the same in-house team." />

          {/* 02 Models */}
          <El as="section" css={`background:#08070A;padding:clamp(70px,8vw,130px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(12px,1.4vw,20px);align-items:stretch">
              {MODELS.map((m) => (
                <El as="article" key={m.id} id={m.id} data-rv="1" css={`display:flex;flex-direction:column;gap:20px;padding:clamp(26px,3vw,44px);background:${m.bg};color:${m.fg};border:1px solid ${m.bd};scroll-margin-top:110px`}>
                  <El css="display:flex;justify-content:space-between;align-items:baseline;gap:12px">
                    <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${m.acc}`}>{m.n}</El>
                    <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;opacity:.7`}>{m.tag}</El>
                  </El>
                  <El as="h2" css="margin:0;font-size:clamp(2.2rem,3.6vw,3.4rem);font-weight:500;letter-spacing:-.065em;line-height:.9">{m.t}</El>
                  <El as="p" css="margin:0;font-size:16px;line-height:1.5;opacity:.85">{m.b}</El>
                  <El css={`display:grid;grid-template-columns:1fr 1fr;gap:1px;background:${m.line};border:1px solid ${m.line}`}>
                    {m.facts.map((f) => (
                      <El key={f.k} css={`background:${m.bg};padding:12px 14px`}>
                        <El css={`${MONO};font-size:10px;letter-spacing:.16em;text-transform:uppercase;opacity:.6`}>{f.k}</El>
                        <El css="margin-top:5px;font-size:15px;font-weight:500">{f.v}</El>
                      </El>
                    ))}
                  </El>
                  <El>
                    <El css={`${MONO};font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;opacity:.6;margin-bottom:8px`}>Best for</El>
                    {m.best.map((x) => (
                      <El key={x} css={`display:flex;gap:10px;align-items:baseline;padding:8px 0;border-bottom:1px solid ${m.line};font-size:15px`}>
                        <El as="span" css="width:5px;height:5px;background:#F04423;flex-shrink:0;transform:translateY(-3px)" />{x}
                      </El>
                    ))}
                  </El>
                  <El css="font-size:14.5px;line-height:1.5;opacity:.8">
                    <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.16em;text-transform:uppercase`}>Watch out &#183; </El>{m.watch}
                  </El>
                  <El as="a" href="/book-consultation" css={`margin-top:auto;align-self:flex-start;display:flex;align-items:center;gap:12px;background:${m.btnBg};color:${m.btnFg};padding:15px 22px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap`}>Discuss this model <span>&#8594;</span></El>
                </El>
              ))}
            </El>
          </El>

          {/* 03 Compare */}
          <El as="section" css={`background:#F4F1EA;color:#08070A;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="margin-bottom:clamp(36px,4.6vw,64px)">
              <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55;margin-bottom:16px`}>Side by side</El>
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.4rem,5.8vw,6rem);line-height:.88;letter-spacing:-.065em;font-weight:500">Compare the <Em>three.</Em></El>
            </El>
            <El data-rv="1" css="overflow-x:auto;-webkit-overflow-scrolling:touch">
              <El css="min-width:640px;display:grid;grid-template-columns:1.2fr 1fr 1fr 1fr;border-top:2px solid #08070A">
                <El as="span" css="padding:16px 12px 16px 0;border-bottom:1px solid rgba(8,7,10,.2)" />
                {COL_HEADS.map((c) => (
                  <El as="span" key={c} css="padding:16px 12px;font-size:clamp(1.05rem,1.6vw,1.3rem);font-weight:500;letter-spacing:-.03em;border-bottom:1px solid rgba(8,7,10,.2)">{c}</El>
                ))}
                {ROWS.map((r) => (
                  <React.Fragment key={r.k}>
                    <El as="span" css={`padding:16px 12px 16px 0;${MONO};font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55;border-bottom:1px solid rgba(8,7,10,.12)`}>{r.k}</El>
                    {r.v.map((v, i) => (
                      <El as="span" key={`${r.k}-${COL_HEADS[i]}`} css="padding:16px 12px;font-size:15px;line-height:1.4;border-bottom:1px solid rgba(8,7,10,.12)">{v}</El>
                    ))}
                  </React.Fragment>
                ))}
              </El>
            </El>
          </El>

          {/* 04 Which one */}
          <El as="section" id="quiz" css={`background:#08070A;color:#F4F1EA;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,4.6vw,64px)">
              <El>
                <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:16px`}>Not sure?</El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.4rem,5.8vw,6rem);line-height:.88;letter-spacing:-.065em;font-weight:500">Answer two <Em>questions.</Em></El>
              </El>
              <El as="p" data-rv="1" css="margin:0;max-width:46ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">We will point you to a starting model. You can always switch later.</El>
            </El>

            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(24px,4vw,64px);align-items:start">
              <El css="display:flex;flex-direction:column;gap:28px">
                <El>
                  <El css="font-size:clamp(1.2rem,1.8vw,1.5rem);font-weight:500;letter-spacing:-.03em;margin-bottom:14px">1. How clear is your scope?</El>
                  <El css="display:flex;flex-wrap:wrap;gap:8px">
                    {Q1.map((l, i) => (
                      <El as="button" type="button" key={l} onClick={() => setA(i)} aria-pressed={a === i} css={pill(a === i)}>{l}</El>
                    ))}
                  </El>
                </El>
                <El>
                  <El css="font-size:clamp(1.2rem,1.8vw,1.5rem);font-weight:500;letter-spacing:-.03em;margin-bottom:14px">2. How long will you need a team?</El>
                  <El css="display:flex;flex-wrap:wrap;gap:8px">
                    {Q2.map((l, i) => (
                      <El as="button" type="button" key={l} onClick={() => setB(i)} aria-pressed={b === i} css={pill(b === i)}>{l}</El>
                    ))}
                  </El>
                </El>
              </El>
              <El aria-live="polite" css="background:#F04423;color:#08070A;padding:clamp(26px,3vw,44px);display:flex;flex-direction:column;gap:16px">
                <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase`}>We&#8217;d start with</El>
                <El as="span" css="font-size:clamp(2.2rem,4vw,3.6rem);font-weight:500;letter-spacing:-.065em;line-height:.9">{rec.t}</El>
                <El as="span" css="font-size:16px;line-height:1.5">{rec.b}</El>
                <El as="a" href={rec.h} css="align-self:flex-start;display:flex;align-items:center;gap:12px;background:#08070A;color:#F4F1EA;padding:15px 22px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap">Read about it <span>&#8595;</span></El>
              </El>
            </El>
          </El>

          {/* FAQ */}
          <El as="section" css={`background:#08070A;padding:clamp(90px,10vw,160px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(28px,4vw,72px);align-items:start">
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.2rem,4.6vw,4.4rem);line-height:.9;letter-spacing:-.06em;font-weight:500">Common <Em>questions.</Em></El>
              <El css="grid-column:span 2;min-width:min(100%,320px);border-top:1px solid rgba(244,241,234,.16)">
                {FAQ.map(([question, answer], i) => {
                  const on = faqOpen === i;
                  return (
                    <El key={question} css="border-bottom:1px solid rgba(244,241,234,.16)">
                      <El as="button" type="button" onClick={() => setFaqOpen(on ? -1 : i)} aria-expanded={on} css="width:100%;display:flex;justify-content:space-between;align-items:baseline;gap:16px;padding:22px 0;background:none;border:0;color:#F4F1EA;text-align:left;cursor:pointer;font-family:Geist,sans-serif;font-size:clamp(1.05rem,1.6vw,1.35rem);font-weight:500;letter-spacing:-.025em">
                        <span>{question}</span>
                        <El as="span" css={`color:#F04423;${MONO};font-size:18px`}>{on ? '−' : '+'}</El>
                      </El>
                      {on ? <El css="padding:0 0 24px;max-width:62ch;font-size:16px;line-height:1.6;color:#B7B2AA">{answer}</El> : null}
                    </El>
                  );
                })}
              </El>
            </El>
          </El>

          {/* CTA */}
          <El as="section" css={`background:#F04423;color:#08070A;padding:clamp(80px,10vw,150px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(28px,4vw,72px);align-items:end">
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.6rem,6.6vw,7rem);line-height:.86;letter-spacing:-.07em;font-weight:500">Let&#8217;s pick <Em>together.</Em></El>
              <El css="display:flex;flex-direction:column;gap:20px">
                <El as="p" data-rv="1" css="margin:0;max-width:42ch;font-size:clamp(16px,1.3vw,18px);line-height:1.5">Tell us about your project and we will recommend a model and a team shape on the first call.</El>
                <El data-rv="1" css="display:flex;flex-wrap:wrap;gap:10px">
                  <El as="a" href="/book-consultation" css="display:flex;align-items:center;gap:12px;background:#08070A;color:#F4F1EA;padding:18px 26px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap;transition:background .3s,color .3s" hover="background:#F4F1EA;color:#08070A">Book a free consultation <span>&#8594;</span></El>
                  <El as="a" href="/contact" css="display:flex;align-items:center;gap:12px;border:1px solid rgba(8,7,10,.45);color:#08070A;padding:18px 24px;border-radius:999px;font-size:15px;white-space:nowrap;transition:background .3s,color .3s" hover="background:#08070A;color:#F4F1EA">Contact us</El>
                </El>
              </El>
            </El>
          </El>

          <EstimateForm id="estimate" source="engagement-models" subject="Engagement model enquiry" />

          <Footer />
        </El>
      </Shell>
    </>
  );
}

EngagementModels.bare = true;
