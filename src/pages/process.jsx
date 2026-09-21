import React from 'react';
import { PageHero, Section, StepList, CtaSection } from '@/components/ui';
import { Seo } from '@/components/sections';
import { processSteps } from '@/data/site';

export default function Process() {
  return (
    <>
      <Seo title="Process — six stages — Mariox Software" description="Discover, define, design, build, launch and scale. How Mariox Software runs a delivery." />
      <PageHero
        eyebrow={<>Process &nbsp;/&nbsp; Six stages</>}
        a="From idea"
        b="to production."
        sub="No stage is decorative. Each one exists because skipping it has cost someone a quarter."
      />
      <Section top={false} pad="0" css="padding-bottom:clamp(56px,8vw,130px)">
        <StepList items={processSteps} />
      </Section>
      <CtaSection a="Ready to start" b="at stage one?" cta={false} />
    </>
  );
}
