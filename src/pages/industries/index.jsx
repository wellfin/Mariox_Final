import React from 'react';
import El from '@/components/El';
import { MONO, A, PageHero, Section, TwoParas } from '@/components/ui';
import { Seo } from '@/components/sections';
import { industries } from '@/data/industries';
import { setStage } from '@/lib/fx';

export default function Industries() {
  return (
    <>
      <Seo title="Industries — Mariox Software" description="Sixteen sectors with dedicated practice, from fintech and healthcare to logistics, quick commerce and the public sector." />
      <PageHero
        pad="clamp(56px,9vw,150px)"
        eyebrowMb="clamp(22px,3vw,40px)"
        eyebrow={<>Industries &nbsp;/&nbsp; Sixteen sectors, one delivery standard</>}
        a="Industries"
        b="we build for."
        h1Size="clamp(2.6rem,9vw,8.5rem)"
        sub="We understand the technology, workflows and challenges behind the industries where digital products matter most."
      />

      <Section top={false} pad="0" css="padding-bottom:clamp(56px,8vw,130px)">
        <El css="border-top:1px solid rgba(244,241,234,.14)">
          {industries.map((i, k) => (
            <A
              key={i.slug}
              href={'/industries/' + i.slug}
              data-row="1"
              data-cursor="view"
              onMouseEnter={() => setStage(i.stage)}
              css="display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:clamp(14px,3vw,44px);align-items:center;padding:clamp(20px,2.8vw,38px) clamp(6px,1.6vw,24px);border-bottom:1px solid rgba(244,241,234,.14);color:#F4F1EA;transition:background .45s cubic-bezier(.2,.8,.2,1),padding-left .45s cubic-bezier(.2,.8,.2,1),color .45s"
              hover="background:#F04423;color:#08070A;padding-left:clamp(18px,3.4vw,56px)"
            >
              <El as="span" css={`${MONO};font-size:11.5px;opacity:.5`}>{String(k + 1).padStart(2, '0')}</El>
              <El css="display:flex;flex-wrap:wrap;gap:8px 28px;align-items:baseline;justify-content:space-between">
                <El as="span" css="font-size:clamp(1.3rem,3.6vw,3.1rem);font-weight:800;letter-spacing:-.04em;line-height:1.02;text-transform:uppercase">{i.name}</El>
                <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;opacity:.62;max-width:40ch`}>{i.blurb}</El>
              </El>
              <El as="span" css="font-size:19px;opacity:.6">&#8599;</El>
            </A>
          ))}
        </El>
      </Section>

      <Section top={false} pad="0" css="padding-bottom:clamp(70px,10vw,160px)">
        <TwoParas
          a="Regulation, load profile and integration surface change from one sector to the next. The engineering discipline does not. What changes is the domain knowledge we bring on day one."
          b="Sixteen sectors, each with its own page covering where projects usually break, what we build, the stack we use and how we approach the work. Pick yours."
        />
      </Section>
    </>
  );
}
