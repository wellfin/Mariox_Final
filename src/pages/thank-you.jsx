import React from 'react';
import { useRouter } from 'next/router';
import El from '@/components/El';
import { Seo } from '@/components/sections';
import Nav from '@/components/final/Nav';
import Footer from '@/components/final/Footer';
import { MONO, PAD, Em, Shell } from '@/components/final/ui';
import { useReveal } from '@/components/final/fx';
import { SITE_URL } from '@/data/site';

// Confirmation page from the design's `thank-you`. Forms can send visitors here
// with ?from=consultation so the second line matches what they just did.
const STEPS = [
  { when: 'Now', t: 'Your message is with us', b: 'It goes straight to our founders and senior engineers, not a call centre.' },
  { when: 'Within one business day', t: 'A real reply', b: 'Specific questions about your project, and a time to talk if it helps.' },
  { when: 'Within a week', t: 'Scope and estimate', b: 'A written plan with features, team, timeline and cost.' },
];

const LINKS = [
  { t: 'How we work', b: 'Six stages from first call to live product.', h: '/process', img: '/assets/company/team-office-wide.jpg' },
  { t: 'Client reviews', b: '4.8 out of 5 from 138 Google reviews.', h: '/testimonials', img: '/assets/company/team-group-2026.jpg' },
  { t: 'Our work', b: '300+ products for startups and enterprises.', h: '/work', img: '/assets/ai/team-robot-hologram.jpg' },
];

export default function ThankYou() {
  const router = useRouter();
  useReveal([]);

  const fromLine = router.query.from === 'consultation'
    ? 'We will confirm your call slot by email within a few hours.'
    : 'If your email app opened, press send so your message reaches us. Or email admin@marioxsoftware.com directly.';

  return (
    <>
      <Seo
        title="Thank you — Mariox Software"
        description="Thanks for contacting Mariox Software. A senior engineer will reply within one business day."
        canonical={`${SITE_URL}/thank-you`}
        noindex
      />

      <Shell>
        <Nav active="" ctaHref="/book-consultation" ctaLabel="Book a call" />
        <El as="main">
          {/* 01 Hero */}
          <El as="section" css={`position:relative;padding:clamp(140px,14vw,200px) ${PAD} clamp(56px,7vw,110px);overflow:hidden;isolation:isolate;min-height:86svh`}>
            <El css={`display:flex;align-items:center;gap:12px;${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#B7B2AA`}>
              <El as="span" css="width:7px;height:7px;background:#F04423" />Message received
            </El>
            <El as="h1" css="margin:clamp(18px,2.4vw,28px) 0 0;font-size:clamp(3rem,8.2vw,8.6rem);line-height:.86;letter-spacing:-.07em;font-weight:500;max-width:15ch">
              <El as="span" css="display:block">Thank you.</El>
              <El as="span" css="display:block"><Em>We&#8217;re on it.</Em></El>
            </El>
            <El as="p" css="margin:clamp(22px,2.8vw,34px) 0 0;max-width:52ch;font-size:clamp(16px,1.4vw,20px);line-height:1.5;color:#D9D5CD;text-wrap:pretty">A senior engineer will reply within one business day, usually sooner. Look out for an email from admin@marioxsoftware.com, and check your spam folder just in case.</El>
            <El as="p" css="margin:18px 0 0;max-width:52ch;font-size:15.5px;line-height:1.5;color:#F04423">{fromLine}</El>
            <El css="display:flex;flex-wrap:wrap;gap:12px;margin-top:clamp(28px,3.4vw,44px)">
              <El as="a" href="/" css="display:flex;align-items:center;gap:14px;background:#F04423;color:#08070A;padding:18px 26px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap;transition:background .3s" hover="background:#F4F1EA;color:#08070A">Back to home <span>&#8594;</span></El>
              <El as="a" href="/work" css="display:flex;align-items:center;gap:14px;border:1px solid rgba(244,241,234,.35);padding:18px 24px;border-radius:999px;font-size:15px;white-space:nowrap;transition:border-color .3s" hover="border-color:#F4F1EA">See our work</El>
            </El>
          </El>

          {/* 02 Next */}
          <El as="section" css={`background:#08070A;color:#F4F1EA;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));border-top:1px solid rgba(244,241,234,.16);border-left:1px solid rgba(244,241,234,.16)">
              {STEPS.map((s) => (
                <El key={s.t} data-rv="1" css="padding:clamp(24px,3vw,40px);border-right:1px solid rgba(244,241,234,.16);border-bottom:1px solid rgba(244,241,234,.16);display:flex;flex-direction:column;gap:14px;min-height:260px">
                  <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#F04423`}>{s.when}</El>
                  <El as="span" css="margin-top:auto;font-size:clamp(1.5rem,2.4vw,2.1rem);font-weight:500;letter-spacing:-.05em;line-height:1">{s.t}</El>
                  <El as="span" css="font-size:15.5px;line-height:1.55;color:#B7B2AA">{s.b}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 03 While you wait */}
          <El as="section" css={`background:#F4F1EA;color:#08070A;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="margin-bottom:clamp(36px,4.6vw,64px)">
              <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55;margin-bottom:16px`}>While you wait</El>
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.4rem,5.8vw,6rem);line-height:.88;letter-spacing:-.065em;font-weight:500">Get to know <Em>us.</Em></El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:clamp(12px,1.4vw,20px)">
              {LINKS.map((l) => (
                <El as="a" key={l.t} href={l.h} data-rv="1" css="display:flex;flex-direction:column;gap:14px;color:#08070A">
                  <El role="img" aria-label={l.t} css={`aspect-ratio:16/10;background:#E4E0D8 center/cover no-repeat;background-image:url('${l.img}')`} />
                  <El as="span" css="display:flex;justify-content:space-between;gap:12px;align-items:baseline">
                    <El as="span" css="font-size:clamp(1.3rem,2vw,1.7rem);font-weight:500;letter-spacing:-.045em">{l.t}</El>
                    <El as="span" css="color:#F04423">&#8594;</El>
                  </El>
                  <El as="span" css="font-size:15px;line-height:1.5;color:#4A4741">{l.b}</El>
                </El>
              ))}
            </El>
          </El>

          <Footer />
        </El>
      </Shell>
    </>
  );
}

ThankYou.bare = true;
