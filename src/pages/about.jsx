import React from 'react';
import El from '@/components/El';
import { MONO, PageHero, Section, SectionTitle, TwoParas, StatsGrid, CtaSection, GhostButton } from '@/components/ui';
import { Seo } from '@/components/sections';
import { stats, offices } from '@/data/site';

export default function About() {
  return (
    <>
      <Seo title="Company — Mariox Software" description="100+ engineers across Noida, Hyderabad, Dallas and Wyndham Vale. Founded by Mohit Garg and Rahul Garg." />
      <PageHero
        eyebrow={<>Company &nbsp;/&nbsp; Founded by Mohit Garg and Rahul Garg</>}
        a="Technology"
        b="moves fast."
        sub="So should the people building with it. 100+ engineers across four countries, 42 published case studies, and a preference for saying no to the wrong project."
      />

      <Section top={false} pad="0" css="padding-bottom:clamp(48px,7vw,110px)">
        <TwoParas
          a="Mariox Software was founded to close the gap between what a business needs and what software actually does. What began as a small engineering team is now 100+ people across Noida, Hyderabad, Dallas and Wyndham Vale."
          b="We work as an engineering partner, not a vendor. The people in the pitch are the people who write the code, you own every repository and cloud account from the first commit, and we tell you when an idea is worth killing before it costs you a quarter."
        />
      </Section>

      <Section top={false} pad="0" css="padding-bottom:clamp(48px,7vw,110px)">
        <StatsGrid items={stats} />
      </Section>

      <Section top={false} pad="0" css="padding-bottom:clamp(56px,8vw,130px)">
        <SectionTitle mb="clamp(24px,3vw,44px)">Where we are</SectionTitle>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:1px;background:rgba(244,241,234,.14);border:1px solid rgba(244,241,234,.14)">
          {offices.map((o) => (
            <El key={o.city} data-fade="1" css="background:rgba(8,7,10,.82);padding:clamp(22px,2.8vw,38px);display:flex;flex-direction:column;gap:12px;min-height:190px">
              <El as="span" css={`${MONO};font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#F04423`}>{o.country}</El>
              <El as="span" css="font-size:clamp(1.2rem,2.2vw,1.8rem);font-weight:800;letter-spacing:-.035em;text-transform:uppercase">{o.city}</El>
              <El as="p" css="margin:auto 0 0;font-size:13.5px;line-height:1.5;color:#8E8A85">{o.address}</El>
            </El>
          ))}
        </El>
      </Section>

      <CtaSection a="Want to work" b="with this team?" cta={false} secondary={<GhostButton href="/career">Join the team</GhostButton>} />
    </>
  );
}
