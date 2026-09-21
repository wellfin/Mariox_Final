import React from 'react';
import { PageHero, Section, TechExplorer, CtaSection } from '@/components/ui';
import { Seo } from '@/components/sections';

export default function Technologies() {
  return (
    <>
      <Seo title="Technology stack — Mariox Software" description="The languages, frameworks and platforms Mariox Software runs in production, by category." />
      <PageHero
        eyebrow={<>Technology &nbsp;/&nbsp; The stack in production</>}
        a="The stack"
        b="we stand behind."
        sub="Boring technology by default, chosen because it is well understood by the people who will maintain it. Select a category to see what we run."
      />
      <Section top={false} pad="0" css="padding-bottom:clamp(56px,8vw,130px)">
        <TechExplorer minH="220px" />
      </Section>
      <CtaSection a="Need this stack" b="on your problem?" cta={false} />
    </>
  );
}
