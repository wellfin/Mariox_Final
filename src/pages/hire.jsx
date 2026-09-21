import React from 'react';
import El from '@/components/El';
import { MONO, PageHero, Section, SectionTitle, InfoRows, TileGrid, StepList, CtaSection } from '@/components/ui';
import { Seo } from '@/components/sections';
import { roles, hireModels, hireSteps } from '@/data/site';

export default function Hire() {
  return (
    <>
      <Seo title="Hire engineers and dedicated teams — Mariox Software" description="Vetted engineers embedded in your team and your tools. Scale up or down by the month." />
      <PageHero
        pad="clamp(44px,7vw,110px)"
        eyebrowMb="clamp(18px,2.6vw,34px)"
        eyebrow={<>Hire resources &nbsp;/&nbsp; Dedicated teams and staff augmentation</>}
        a="Hire engineers,"
        b="not headcount."
        sub="Vetted engineers embedded in your team, in your tools and in your standups. Scale up or down by the month with no recruitment cycle and no bench."
      />

      <Section>
        <SectionTitle>Roles we place</SectionTitle>
        <InfoRows mono items={roles.map((r) => ({ n: r.n, title: r.title, body: r.stack }))} />
      </Section>

      <Section>
        <SectionTitle mb="clamp(24px,3vw,44px)">Ways to engage</SectionTitle>
        <TileGrid
          items={hireModels}
          cols="repeat(auto-fit,minmax(min(100%,270px),1fr))"
          minH="300px"
          render={(m) => (
            <>
              <El as="span" css={`${MONO};font-size:10px;letter-spacing:.2em;text-transform:uppercase;opacity:.55`}>{m.n}</El>
              <El as="span" css="font-size:clamp(1.3rem,2.4vw,2rem);font-weight:800;letter-spacing:-.035em;line-height:1;text-transform:uppercase">{m.title}</El>
              <El as="p" css="margin:0;font-size:14.5px;line-height:1.55;opacity:.78">{m.body}</El>
              <El css="display:grid;gap:8px;margin-top:auto;padding-top:14px;border-top:1px solid rgba(244,241,234,.16)">
                {m.points.map((p) => (
                  <El key={p} css="display:flex;gap:10px;align-items:baseline;font-size:13.5px;line-height:1.45">
                    <El as="span" css="width:5px;height:5px;background:currentColor;flex-shrink:0;opacity:.6" />{p}
                  </El>
                ))}
              </El>
            </>
          )}
        />
      </Section>

      <Section>
        <SectionTitle mb="clamp(24px,3vw,44px)">How it works</SectionTitle>
        <StepList items={hireSteps} compact />
      </Section>

      <CtaSection a="Need people" b="starting this month?" />
    </>
  );
}
