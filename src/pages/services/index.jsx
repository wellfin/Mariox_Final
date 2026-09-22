import React from 'react';
import { A, PageHero, Section, SectionHead, ServiceRows, SectionTitle, TileGrid, CtaSection } from '@/components/ui';
import { Seo } from '@/components/sections';
import { serviceList, pillars } from '@/data/site';
import { groupedServices } from '@/data/growthServices';

export default function Services() {
  return (
    <>
      <Seo title="Services — Mariox Software" description="Engineering, app and web development, SEO, digital marketing and design under one roof, from discovery through to 24/7 support." />
      <PageHero
        eyebrow={<>Services &nbsp;/&nbsp; Engineering &amp; growth</>}
        a="What we"
        b="actually do."
        sub="Twelve engineering disciplines plus app and web development, SEO, digital marketing and design, under one roof. Take a single specialist team or an embedded squad that covers the whole delivery chain. Every service opens its own page."
      />
      <Section top={false} pad="0" css="padding-bottom:clamp(48px,7vw,110px)">
        <SectionHead title="Engineering" mb="clamp(22px,3vw,44px)" />
        <ServiceRows items={serviceList} />
      </Section>
      {groupedServices.map((g) => (
        <Section key={g.slug} top={false} pad="0" css="padding-bottom:clamp(48px,7vw,110px)">
          <SectionHead
            title={<A href={g.href} data-cursor="1" css="color:inherit;transition:color .3s" hover="color:#F04423">{g.name}</A>}
            href={g.href}
            link="View page"
            mb="clamp(22px,3vw,44px)"
          />
          <ServiceRows items={g.rows} />
        </Section>
      ))}
      <Section top={false} pad="0" css="padding-bottom:clamp(56px,8vw,130px)">
        <SectionTitle>How we are built</SectionTitle>
        <TileGrid items={pillars} />
      </Section>
      <CtaSection a="Know what you" b="need built?" cta={false} />
    </>
  );
}
