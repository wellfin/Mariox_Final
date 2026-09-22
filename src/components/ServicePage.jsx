import React from 'react';
import El from './El';
import { PageHero, BackLink, Section, SectionTitle, InfoRows, RuleCards, Chips, Lead, CtaSection, ServiceRows } from './ui';
import { Seo } from './sections';

export default function ServicePage({ svc, rows, parent }) {
  const title = /services$/i.test(svc.name) ? svc.name : svc.name + ' services';
  return (
    <>
      <Seo title={title + ' — Mariox Software'} description={svc.sub} />
      <PageHero
        pad="clamp(44px,7vw,110px)"
        eyebrowMb="clamp(18px,2.6vw,34px)"
        back={parent ? <BackLink href={parent.href}>{parent.name}</BackLink> : <BackLink href="/services">All services</BackLink>}
        eyebrow={svc.label}
        a={svc.h1a}
        b={svc.h1b}
        sub={svc.sub}
      />

      {rows ? (
        <Section>
          <SectionTitle>Our {title}</SectionTitle>
          <ServiceRows items={rows} />
        </Section>
      ) : null}

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
            <SectionTitle mb="clamp(20px,2.6vw,36px)" size="clamp(1.7rem,4.4vw,3.4rem)">{svc.stackTitle || 'Stack'}</SectionTitle>
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
