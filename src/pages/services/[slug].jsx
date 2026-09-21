import React from 'react';
import El from '@/components/El';
import { PageHero, BackLink, Section, SectionTitle, InfoRows, RuleCards, Chips, Lead, CtaSection } from '@/components/ui';
import { Seo } from '@/components/sections';
import { services } from '@/data/services';

export default function ServicePage({ svc }) {
  return (
    <>
      <Seo title={svc.name + ' services — Mariox Software'} description={svc.sub} />
      <PageHero
        pad="clamp(44px,7vw,110px)"
        eyebrowMb="clamp(18px,2.6vw,34px)"
        back={<BackLink href="/services">All services</BackLink>}
        eyebrow={svc.label}
        a={svc.h1a}
        b={svc.h1b}
        sub={svc.sub}
      />

      <Section>
        <SectionTitle>What&#8217;s included</SectionTitle>
        <InfoRows items={svc.includes} />
      </Section>

      <Section>
        <SectionTitle mb="clamp(24px,3vw,44px)">What you get</SectionTitle>
        <RuleCards items={svc.deliverables} />
      </Section>

      <Section>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,290px),1fr));gap:clamp(28px,4vw,80px);align-items:start">
          <div>
            <SectionTitle mb="clamp(20px,2.6vw,36px)" size="clamp(1.7rem,4.4vw,3.4rem)">Stack</SectionTitle>
            <Chips items={svc.tech} />
          </div>
          <div>
            <SectionTitle mb="clamp(20px,2.6vw,36px)" size="clamp(1.7rem,4.4vw,3.4rem)">How we run it</SectionTitle>
            <Lead css="max-width:46ch">{svc.approach}</Lead>
          </div>
        </El>
      </Section>

      <CtaSection a="Need this" b="on your product?" />
    </>
  );
}

export async function getStaticPaths() {
  return { paths: services.map((s) => ({ params: { slug: s.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const svc = services.find((s) => s.slug === params.slug);
  return { props: { svc } };
}
