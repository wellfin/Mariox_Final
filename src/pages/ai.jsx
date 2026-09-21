import React from 'react';
import El from '@/components/El';
import { MONO, PageHero, Section, SectionTitle, TileGrid, Chips, CtaSection } from '@/components/ui';
import { Seo } from '@/components/sections';
import { aiLayer, readiness, aiTech, aiFaqs } from '@/data/site';

export default function Ai() {
  return (
    <>
      <Seo title="AI and automation — Mariox Software" description="Assistants, agents and retrieval systems built into production products, with the evaluation that keeps them trustworthy." />
      <PageHero
        pad="clamp(44px,7vw,110px)"
        eyebrowMb="clamp(18px,2.6vw,34px)"
        eyebrow={<>AI &nbsp;/&nbsp; Applied, evaluated, in production</>}
        a="AI that ships,"
        b="not AI that demos."
        sub="Assistants, agents and retrieval systems built into products people already use, with the evaluation and guardrails that keep them trustworthy after launch."
      />

      <Section>
        <SectionTitle>The AI layer</SectionTitle>
        <TileGrid
          items={aiLayer}
          minH="300px"
          render={(a) => (
            <>
              <El css={`display:flex;justify-content:space-between;${MONO};font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;opacity:.55`}><span>{a.n}</span><span>{a.tag}</span></El>
              <El css="margin-top:auto;font-size:clamp(1.3rem,2.4vw,2rem);font-weight:800;letter-spacing:-.035em;line-height:1.02;text-transform:uppercase">{a.title}</El>
              <El as="p" css="margin:0;font-size:14.5px;line-height:1.55;opacity:.78">{a.body}</El>
              <El css={`${MONO};font-size:10px;letter-spacing:.14em;text-transform:uppercase;padding-top:12px;border-top:1px solid rgba(244,241,234,.16);opacity:.8`}>{a.proof}</El>
            </>
          )}
        />
      </Section>

      <Section>
        <El css="border:1px solid rgba(244,241,234,.14);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))">
          <El data-fade="1" css="padding:clamp(26px,3.4vw,52px);display:flex;flex-direction:column;gap:18px;border-right:1px solid rgba(244,241,234,.14)">
            <El css={`${MONO};font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;color:#F04423`}>Before we build</El>
            <El as="h3" css="margin:0;font-size:clamp(1.5rem,3vw,2.4rem);line-height:1.02;letter-spacing:-.035em;font-weight:800;text-transform:uppercase">We tell you when AI is the wrong tool</El>
            <El as="p" css="margin:0;font-size:15px;line-height:1.6;color:#B7B2AA;max-width:44ch">Most AI projects fail on data, not on models. Every engagement opens with a four-part readiness score, and a low score means we recommend plain software instead.</El>
          </El>
          <El data-fade="1" css="padding:clamp(26px,3.4vw,52px);display:grid;gap:20px;align-content:center">
            {readiness.map((r) => (
              <div key={r.label}>
                <El css="display:flex;justify-content:space-between;align-items:baseline;gap:16px;margin-bottom:9px">
                  <El as="span" css="font-size:14.5px;font-weight:600;letter-spacing:-.01em">{r.label}</El>
                  <El as="span" css={`${MONO};font-size:11px;color:#8E8A85`}>{r.note}</El>
                </El>
                <El css="height:3px;background:rgba(244,241,234,.14)"><El css={`height:3px;background:#F04423;width:${r.w}`} /></El>
              </div>
            ))}
          </El>
        </El>
      </Section>

      <Section>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,290px),1fr));gap:clamp(28px,4vw,80px);align-items:start">
          <div>
            <SectionTitle mb="clamp(20px,2.6vw,36px)" size="clamp(1.7rem,4.4vw,3.4rem)">Stack</SectionTitle>
            <Chips items={aiTech} />
          </div>
          <div>
            <SectionTitle mb="clamp(20px,2.6vw,36px)" size="clamp(1.7rem,4.4vw,3.4rem)">Common questions</SectionTitle>
            {aiFaqs.map((q) => (
              <El key={q.q} data-fade="1" css="border-bottom:1px solid rgba(244,241,234,.16);padding:clamp(14px,1.8vw,22px) 0">
                <El css="font-size:clamp(15px,1.3vw,17.5px);font-weight:700;letter-spacing:-.02em;line-height:1.25">{q.q}</El>
                <El as="p" css="margin:10px 0 0;font-size:14.5px;line-height:1.6;color:#B7B2AA;max-width:52ch">{q.a}</El>
              </El>
            ))}
          </div>
        </El>
      </Section>

      <CtaSection a="Have a use case" b="worth testing?" />
    </>
  );
}
