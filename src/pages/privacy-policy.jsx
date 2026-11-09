import React from 'react';
import El from '@/components/El';
import { Seo } from '@/components/sections';
import Nav from '@/components/final/Nav';
import Footer from '@/components/final/Footer';
import { MONO, PAD, Em, Shell } from '@/components/final/ui';
import { useReveal } from '@/components/final/fx';
import { sections, summary, updated } from '@/data/final/privacy';
import { SITE_URL } from '@/data/site';

// Privacy policy from the design's `privacy-policy`: the "in short" box, then
// the numbered sections with a sticky contents list beside them.
export default function PrivacyPolicy() {
  useReveal([]);

  return (
    <>
      <Seo
        title="Privacy Policy — Mariox Software"
        description="How Mariox Software collects, uses and protects personal information shared through our website, forms and services."
        canonical={`${SITE_URL}/privacy-policy`}
      />

      <Shell>
        <Nav active="privacy-policy" ctaHref="/book-consultation" ctaLabel="Book a call" />
        <El as="main">
          {/* 01 Hero */}
          <El as="section" css={`position:relative;padding:clamp(140px,14vw,200px) ${PAD} clamp(56px,7vw,110px);overflow:hidden;isolation:isolate`}>
            <El css={`display:flex;align-items:center;gap:12px;${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#B7B2AA`}>
              <El as="span" css="width:7px;height:7px;background:#F04423" />Legal
            </El>
            <El as="h1" css="margin:clamp(18px,2.4vw,28px) 0 0;font-size:clamp(2.8rem,6.6vw,6.8rem);line-height:.86;letter-spacing:-.07em;font-weight:500;max-width:15ch">
              Privacy <Em>policy.</Em>
            </El>
            <El as="p" css="margin:clamp(22px,2.8vw,34px) 0 0;max-width:52ch;font-size:clamp(16px,1.4vw,20px);line-height:1.5;color:#D9D5CD;text-wrap:pretty">Last updated: {updated}</El>

            <El css="margin-top:clamp(32px,4vw,52px);max-width:760px;border:1px solid rgba(244,241,234,.2);padding:clamp(20px,2.4vw,30px)">
              <El css={`${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#F04423;margin-bottom:14px`}>In short</El>
              <El css="display:flex;flex-direction:column;gap:10px">
                {summary.map((s) => (
                  <El key={s} css="display:flex;gap:12px;align-items:baseline;font-size:16px;line-height:1.5">
                    <El as="span" css="width:6px;height:6px;background:#F04423;flex-shrink:0;transform:translateY(-3px)" />{s}
                  </El>
                ))}
              </El>
            </El>
          </El>

          {/* 02 Policy */}
          <El as="section" css={`background:#F4F1EA;color:#08070A;padding:clamp(70px,8vw,130px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:clamp(32px,5vw,90px);align-items:start">
              <El as="nav" aria-label="Contents" css="position:sticky;top:110px;display:flex;flex-direction:column;border-top:1px solid rgba(8,7,10,.2)">
                {sections.map((s) => (
                  <El as="a" key={s.id} href={`#${s.id}`} css="display:flex;gap:12px;padding:10px 0;border-bottom:1px solid rgba(8,7,10,.12);font-size:14.5px;color:#08070A" hover="color:#F04423">
                    <El as="span" css={`${MONO};font-size:11px;color:#F04423;min-width:22px`}>{s.n}</El>{s.heading}
                  </El>
                ))}
              </El>
              <El css="grid-column:span 2;min-width:min(100%,320px);display:flex;flex-direction:column;gap:clamp(40px,5vw,64px)">
                {sections.map((s) => (
                  <El as="article" key={s.id} id={s.id} css="scroll-margin-top:110px;display:flex;flex-direction:column;gap:14px;max-width:70ch">
                    <El as="h2" css="margin:0;display:flex;gap:14px;align-items:baseline;font-size:clamp(1.5rem,2.4vw,2.1rem);font-weight:500;letter-spacing:-.04em;line-height:1.1">
                      <El as="span" css={`${MONO};font-size:13px;color:#F04423`}>{s.n}</El>{s.heading}
                    </El>
                    {s.paras.map((p) => (
                      <El as="p" key={p} css="margin:0;font-size:16.5px;line-height:1.65;color:#2E2B28">{p}</El>
                    ))}
                  </El>
                ))}
              </El>
            </El>
          </El>

          <Footer />
        </El>
      </Shell>
    </>
  );
}

PrivacyPolicy.bare = true;
