import React from 'react';
import El from '@/components/El';
import {
  MONO, PageHero, BackLink, Section, SectionTitle, RuleCards, InfoRows, Chips, Lead,
  CaseCard, CardGrid, CtaSection, StartButton, GhostButton,
} from '@/components/ui';
import { Seo } from '@/components/sections';
import { industries } from '@/data/industries';

export default function IndustryPage({ ind, n }) {
  const hasCases = !!(ind.cases && ind.cases.length);
  return (
    <>
      <Seo title={ind.name + ' software development — Mariox Software'} description={ind.sub} />
      <PageHero
        pad="clamp(48px,7vw,110px)"
        eyebrowMb="clamp(18px,2.4vw,32px)"
        back={<BackLink href="/industries" mb="clamp(24px,3vw,44px)">All industries</BackLink>}
        eyebrow={<>Industry {n} &nbsp;/&nbsp; {ind.name}</>}
        a={ind.h1a}
        b={ind.h1b}
        h1Size="clamp(2.4rem,8vw,7.5rem)"
      >
        <El data-fade="1" css="display:flex;flex-wrap:wrap;gap:clamp(20px,4vw,64px);align-items:flex-end;justify-content:space-between;margin-top:clamp(30px,4vw,58px)">
          <El as="p" css="margin:0;max-width:46ch;font-size:clamp(16px,1.35vw,19px);line-height:1.5;color:#B7B2AA">{ind.sub}</El>
          <StartButton light arrow={'→'} />
        </El>
      </PageHero>

      <Section pad="clamp(48px,7vw,120px)">
        <El data-fade="1" css={`${MONO};font-size:10.5px;letter-spacing:.22em;text-transform:uppercase;color:#8E8A85;margin-bottom:clamp(26px,3.4vw,48px)`}>Where it usually breaks</El>
        <RuleCards items={ind.challenges} min="270px" />
      </Section>

      <Section pad="clamp(48px,7vw,120px)">
        <SectionTitle mb="clamp(28px,3.6vw,56px)">What we build</SectionTitle>
        <InfoRows items={ind.builds} />
      </Section>

      {hasCases ? (
        <Section pad="clamp(48px,7vw,120px)">
          <El data-fade="1" css="display:flex;flex-wrap:wrap;gap:18px;align-items:flex-end;justify-content:space-between;margin-bottom:clamp(26px,3.4vw,50px)">
            <El as="h2" css="margin:0;font-size:clamp(1.9rem,5.4vw,4.4rem);line-height:.92;letter-spacing:-.04em;font-weight:800;text-transform:uppercase">Shipped work</El>
            <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;color:#8E8A85`}>{ind.caseNote}</El>
          </El>
          <CardGrid>
            {ind.cases.map((c) => <CaseCard key={c.slug} c={c} />)}
          </CardGrid>
        </Section>
      ) : null}

      <Section pad="clamp(48px,7vw,120px)">
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,290px),1fr));gap:clamp(28px,4vw,80px);align-items:start">
          <div>
            <SectionTitle mb="clamp(20px,2.6vw,36px)" size="clamp(1.7rem,4.4vw,3.4rem)">Stack we use here</SectionTitle>
            <Chips items={ind.tech} />
          </div>
          <div>
            <SectionTitle mb="clamp(20px,2.6vw,36px)" size="clamp(1.7rem,4.4vw,3.4rem)">How we approach it</SectionTitle>
            <Lead css="max-width:46ch">{ind.approach}</Lead>
          </div>
        </El>
      </Section>

      <CtaSection a="Build your next" b="product with Mariox." cta={false} secondary={<GhostButton href="/industries">Other industries</GhostButton>} />
    </>
  );
}

export async function getStaticPaths() {
  return { paths: industries.map((i) => ({ params: { slug: i.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const idx = industries.findIndex((i) => i.slug === params.slug);
  return { props: { ind: industries[idx], n: String(idx + 1).padStart(2, '0') } };
}
