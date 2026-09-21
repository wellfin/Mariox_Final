import React from 'react';
import El from '@/components/El';
import { MONO, A, PageHero, Section, SectionTitle, Lead, TileGrid, CtaSection, GhostButton } from '@/components/ui';
import { Seo, Testimonials, FaqSection } from '@/components/sections';
import { careerContent as c } from '@/data/career';
import { scrollToEl } from '@/lib/fx';

const IMG_BOX = 'overflow:hidden;background:#111013;background-image:repeating-linear-gradient(135deg,rgba(244,241,234,.06) 0 2px,transparent 2px 11px);border:1px solid rgba(244,241,234,.14)';
const hideImg = (e) => { if (e && e.target) e.target.style.display = 'none'; };

export default function Career() {
  const jump = (e) => {
    e.preventDefault();
    scrollToEl('#jobs');
  };

  return (
    <>
      <Seo title="Careers — Mariox Software" description={c.sub} />
      <PageHero eyebrow={<>Careers &nbsp;/&nbsp; Join the team</>} a="Join our team" b="at Mariox." sub={c.sub}>
        <El data-fade="1" css="display:flex;flex-wrap:wrap;gap:14px;margin-top:clamp(28px,3.6vw,52px)">
          <A href="#jobs" onClick={jump} data-cursor="start" css={`display:flex;align-items:center;gap:14px;background:#F4F1EA;color:#08070A;padding:19px 26px;${MONO};font-size:11.5px;font-weight:500;letter-spacing:.16em;text-transform:uppercase;transition:background .35s,color .35s`} hover="background:#F04423;color:#08070A">
            {c.ctaLabel} <span>&#8595;</span>
          </A>
        </El>
      </PageHero>

      <Section top={false} pad="0" css="padding-bottom:clamp(48px,7vw,110px)">
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:clamp(14px,1.8vw,26px)">
          {c.images.map((src, k) => (
            <El key={src} data-fade="1" css={`${IMG_BOX};aspect-ratio:${k === 0 ? '4/3' : '3/4'}`}>
              <El as="img" src={src} alt="Life at Mariox" loading="lazy" onError={hideImg} css="width:100%;height:100%;object-fit:cover;display:block;filter:saturate(.85)" />
            </El>
          ))}
        </El>
      </Section>

      <Section>
        <SectionTitle>{c.lifeHeading}</SectionTitle>
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:clamp(24px,4vw,80px);align-items:end;margin-bottom:clamp(32px,4vw,60px)">
          <El as="h3" data-fade="1" css="margin:0;font-size:clamp(1.4rem,3vw,2.4rem);font-weight:800;letter-spacing:-.035em;line-height:1.02;text-transform:uppercase">{c.lifeTitle}</El>
          <Lead>{c.lifeBody}</Lead>
        </El>
        {c.lifeImage ? (
          <El data-fade="1" css={`${IMG_BOX};aspect-ratio:21/9`}>
            <El as="img" src={c.lifeImage} alt="Mariox team" loading="lazy" onError={hideImg} css="width:100%;height:100%;object-fit:cover;display:block;filter:saturate(.85)" />
          </El>
        ) : null}
      </Section>

      <Section>
        <SectionTitle mb="clamp(12px,1.6vw,20px)">{c.whyMarioxHeading}</SectionTitle>
        <Lead css="margin-bottom:clamp(26px,3.4vw,52px);max-width:52ch">{c.whyMarioxSub}</Lead>
        <TileGrid
          items={c.whyMariox.map((w, k) => ({ n: String(k + 1).padStart(2, '0'), title: w.title, body: w.body }))}
          cols="repeat(auto-fit,minmax(min(100%,270px),1fr))"
        />
      </Section>

      <Section id="jobs">
        <SectionTitle>{c.openingsHeading}</SectionTitle>
        {Object.entries(
          c.openings.reduce((acc, o) => {
            (acc[o.department] = acc[o.department] || []).push(o);
            return acc;
          }, {})
        ).map(([dept, roles]) => (
          <El key={dept} css="margin-bottom:clamp(24px,3vw,44px)">
            <El data-fade="1" css={`${MONO};font-size:10.5px;letter-spacing:.22em;text-transform:uppercase;color:#F04423;margin-bottom:14px`}>{dept}</El>
            <El css="border-top:1px solid rgba(244,241,234,.14)">
              {roles.map((o) => (
                <El
                  as="a"
                  key={o.role}
                  href={o.applyHref}
                  data-row="1"
                  data-cursor="start"
                  css="display:grid;grid-template-columns:minmax(0,1fr) auto;gap:clamp(14px,3vw,44px);align-items:center;padding:clamp(20px,2.6vw,34px) clamp(6px,1.6vw,24px);border-bottom:1px solid rgba(244,241,234,.14);color:#F4F1EA;transition:background .45s cubic-bezier(.2,.8,.2,1),padding-left .45s cubic-bezier(.2,.8,.2,1),color .45s"
                  hover="background:#F04423;color:#08070A;padding-left:clamp(18px,3.4vw,56px)"
                >
                  <El css="display:flex;flex-wrap:wrap;gap:10px 28px;align-items:baseline;justify-content:space-between">
                    <El as="span" css="font-size:clamp(1.2rem,3.4vw,2.9rem);font-weight:700;letter-spacing:-.035em;line-height:1.02;text-transform:uppercase">{o.role}</El>
                    <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;opacity:.62`}>{o.tags.join(' · ')}</El>
                  </El>
                  <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;white-space:nowrap`}>{o.applyLabel} &#8599;</El>
                </El>
              ))}
            </El>
          </El>
        ))}
      </Section>

      <Testimonials />
      <FaqSection />
      <CtaSection a="Don't see" b="your role?" cta={false} secondary={<GhostButton href={c.openings[0] ? c.openings[0].applyHref.split('?')[0] : 'mailto:admin@marioxsoftware.com'}>Send your CV</GhostButton>} />
    </>
  );
}
