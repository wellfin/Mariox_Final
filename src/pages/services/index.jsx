import React from 'react';
import { PageHero, Section, SectionTitle, ServiceRows, TileGrid, CtaSection } from '@/components/ui';
import { Seo } from '@/components/sections';
import { serviceList, pillars } from '@/data/site';

export default function Services() {
  return (
    <>
      <Seo title="Services — Mariox Software" description="Twelve engineering and product disciplines under one roof, from discovery through to 24/7 support." />
      <PageHero
        eyebrow={<>Services &nbsp;/&nbsp; Twelve disciplines</>}
        a="What we"
        b="actually do."
        sub="Twelve disciplines under one roof, from discovery through to 24/7 support. Take a single specialist team or an embedded squad that covers the whole delivery chain. Every service opens its own page."
      />
      <Section top={false} pad="0" css="padding-bottom:clamp(48px,7vw,110px)">
        <ServiceRows items={serviceList} />
      </Section>
      <Section top={false} pad="0" css="padding-bottom:clamp(56px,8vw,130px)">
        <SectionTitle>How we are built</SectionTitle>
        <TileGrid items={pillars} />
      </Section>
      <CtaSection a="Know what you" b="need built?" cta={false} />
    </>
  );
}
