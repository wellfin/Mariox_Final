import React from 'react';
import Link from 'next/link';
import El from '@/components/El';
import {
  MONO, A, Lines, SectionHead, ServiceRows, TrackCard, StatsGrid, TechExplorer,
  TileGrid, StepList, StartButton, GhostButton, TwoParas,
} from '@/components/ui';
import { Seo, JsonLd } from '@/components/sections';
import { CONTACT, ticker, serviceList, featuredWork, stats, pillars, processSteps } from '@/data/site';
import { industries } from '@/data/industries';
import { homeWebPageSchema, localBusinessSchema } from '@/data/schemas';
import { setStage } from '@/lib/fx';

export default function Home() {
  return (
    <>
      <Seo
        title="Website And Mobile App Development Company | Web Development Services"
        description="Our skilled Website and Mobile App Development services maximize your internet exposure. We create innovative solutions for your needs for an easy and engaging user interface. Our unique web development tactics boost your brand's internet presence."
      />
      <JsonLd id="home-webpage" data={homeWebPageSchema} />
      <JsonLd id="home-localbusiness" data={localBusinessSchema} />

      <El as="section" css="position:relative;min-height:88vh;display:flex;flex-direction:column;justify-content:center;padding:clamp(48px,8vw,110px) clamp(18px,4vw,60px) clamp(40px,6vw,80px)">
        <El data-hero="eyebrow" css="display:flex;align-items:center;gap:12px;margin-bottom:clamp(24px,3.4vw,44px);opacity:0">
          <El as="span" css="width:7px;height:7px;background:#F04423;animation:mxPulse 2.2s ease-in-out infinite" />
          <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.24em;text-transform:uppercase;color:#8E8A85`}>Mariox Software &nbsp;/&nbsp; Digital product engineering</El>
        </El>
        <El as="h1" css="margin:0;font-size:clamp(3.2rem,13vw,13rem);line-height:.82;letter-spacing:-.05em;font-weight:800;text-transform:uppercase">
          <El as="span" css="display:block;overflow:hidden;padding-bottom:.04em"><El as="span" data-hero="l1" css="display:block;transform:translateY(115%)">We build</El></El>
          <El as="span" css="display:block;overflow:hidden;padding-bottom:.04em"><El as="span" data-hero="l2" css="display:block;transform:translateY(115%)">what&#8217;s <El as="span" css="color:#F04423">next.</El></El></El>
        </El>
        <El data-hero="foot" css="display:flex;flex-wrap:wrap;gap:clamp(24px,4vw,72px);align-items:flex-end;justify-content:space-between;margin-top:clamp(32px,4.5vw,64px);opacity:0">
          <El as="p" css="margin:0;max-width:36ch;font-size:clamp(16px,1.4vw,20px);line-height:1.45;color:#B7B2AA">We design, engineer and scale digital products for ambitious companies.</El>
          <El css="display:flex;flex-wrap:wrap;gap:14px;align-items:center">
            <StartButton light arrow={'→'} />
            <A href="/case-study" data-cursor="view" css={`display:flex;align-items:center;gap:14px;border:1px solid rgba(244,241,234,.3);padding:19px 26px;${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;transition:border-color .35s,color .35s`} hover="border-color:#F04423;color:#F04423">Explore our work</A>
          </El>
        </El>
      </El>

      <El as="section" css="border-top:1px solid rgba(244,241,234,.1);border-bottom:1px solid rgba(244,241,234,.1);overflow:hidden;background:rgba(8,7,10,.55)">
        <El css="display:flex;width:max-content;animation:mxDrift 44s linear infinite">
          {[0, 1].map((loop) => (
            <El key={loop} css="display:flex;align-items:center" aria-hidden={loop === 1 ? 'true' : undefined}>
              {ticker.map((w) => (
                <El as="span" key={w} css={`display:flex;align-items:center;gap:clamp(20px,2.6vw,40px);padding:15px clamp(10px,1.3vw,20px);${MONO};font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#8E8A85;white-space:nowrap`}>
                  {w}<El as="span" css="width:5px;height:5px;background:#F04423;display:inline-block" />
                </El>
              ))}
            </El>
          ))}
        </El>
      </El>

      <El as="section" css="padding:clamp(80px,13vw,220px) clamp(18px,4vw,60px)">
        <Lines as="h2" pb=".05em" accentFrom={2} lines={['We don’t just', 'write code.', 'We build businesses', 'that run on it.']} css="margin:0;max-width:20ch;font-size:clamp(2.2rem,7.4vw,7rem);line-height:.9;letter-spacing:-.045em;font-weight:800;text-transform:uppercase" />
        <El css="margin-top:clamp(40px,5.5vw,90px)">
          <TwoParas
            a="Mariox is a software engineering company of 100+ people working across four countries. Founders come to us with a product to prove. Enterprises come to us with systems that have to keep running while they change."
            b="Both get the same thing: senior engineers who own the outcome, a plan with real numbers attached, and code you hold the keys to from the first commit."
          />
        </El>
      </El>

      <El as="section" id="services" css="padding:clamp(60px,9vw,140px) clamp(18px,4vw,60px)">
        <SectionHead title="What we do" href="/services" link={'All services ↗'} />
        <ServiceRows items={serviceList} />
      </El>

      {/* Wrapper keeps GSAP's pin-spacer inside a node React owns. */}
      <div>
      <El as="section" id="work" css="position:relative;overflow-y:hidden;padding:clamp(48px,7vw,100px) 0;border-top:1px solid rgba(244,241,234,.1);border-bottom:1px solid rgba(244,241,234,.1);background:rgba(8,7,10,.4)">
        <El css="padding:0 clamp(18px,4vw,60px);display:flex;flex-wrap:wrap;gap:16px;align-items:baseline;justify-content:space-between;margin-bottom:clamp(28px,3.6vw,56px)">
          <El as="h2" css="margin:0;font-size:clamp(1.9rem,5.4vw,4.6rem);line-height:.92;letter-spacing:-.04em;font-weight:800;text-transform:uppercase">Selected work</El>
          <A href="/case-study" data-cursor="1" css={`${MONO};font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:#F04423;border-bottom:1px solid #F04423;padding-bottom:4px`}>All work &#8599;</A>
        </El>
        <El data-track="1" css="display:flex;gap:clamp(14px,1.6vw,26px);width:max-content;padding:0 clamp(18px,4vw,60px);will-change:transform">
          {featuredWork.map((w) => <TrackCard key={w.n} w={w} />)}
        </El>
      </El>
      </div>

      <El as="section" css="padding:clamp(80px,12vw,200px) clamp(18px,4vw,60px)">
        <Lines as="h2" pb=".05em" accentFrom={1} lines={['From idea', 'to production.']} css="margin:0 0 clamp(40px,6vw,100px);font-size:clamp(2.2rem,7.4vw,7rem);line-height:.88;letter-spacing:-.045em;font-weight:800;text-transform:uppercase" />
        <StatsGrid items={stats} />
      </El>

      <El as="section" id="expertise" css="padding:clamp(60px,9vw,140px) clamp(18px,4vw,60px);border-top:1px solid rgba(244,241,234,.1)">
        <SectionHead title="Technology" href="/technologies" link={'Full stack ↗'} mb="clamp(32px,4vw,60px)" />
        <TechExplorer />
      </El>

      <El as="section" css="padding:clamp(70px,10vw,170px) clamp(18px,4vw,60px);border-top:1px solid rgba(244,241,234,.1)">
        <Lines as="h2" pb=".05em" accentFrom={1} lines={['Built for', 'ambition.']} css="margin:0 0 clamp(36px,5vw,80px);font-size:clamp(2.2rem,7.4vw,7rem);line-height:.88;letter-spacing:-.045em;font-weight:800;text-transform:uppercase" />
        <TileGrid items={pillars} />
      </El>

      <El as="section" id="process" css="padding:clamp(60px,9vw,140px) clamp(18px,4vw,60px);border-top:1px solid rgba(244,241,234,.1)">
        <SectionHead title="How it runs" href="/process" link={'Full process ↗'} mb="clamp(32px,4vw,64px)" />
        <StepList items={processSteps} />
      </El>

      <El as="section" css="padding:clamp(60px,9vw,140px) clamp(18px,4vw,60px);border-top:1px solid rgba(244,241,234,.1)">
        <El data-fade="1" css="display:flex;flex-wrap:wrap;gap:16px;align-items:baseline;justify-content:space-between;margin-bottom:clamp(28px,3.4vw,50px)">
          <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.22em;text-transform:uppercase;color:#8E8A85`}>Industries</El>
          <A href="/industries" data-cursor="1" css={`${MONO};font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:#F04423;border-bottom:1px solid #F04423;padding-bottom:4px`}>Explore all sixteen &#8599;</A>
        </El>
        <El css="display:flex;flex-wrap:wrap;gap:clamp(10px,1.4vw,20px) clamp(20px,3vw,52px);align-items:baseline">
          {industries.map((i) => (
            <El as={Link} key={i.slug} href={'/industries/' + i.slug} data-cursor="view" onMouseEnter={() => setStage(i.stage)} css="font-size:clamp(1.5rem,4.6vw,4.2rem);font-weight:800;letter-spacing:-.045em;line-height:1.05;text-transform:uppercase;color:rgba(244,241,234,.62);transition:color .35s cubic-bezier(.2,.8,.2,1)" hover="color:#F04423">{i.name}</El>
          ))}
        </El>
      </El>

      <El as="section" id="about" css="padding:clamp(80px,12vw,200px) clamp(18px,4vw,60px);border-top:1px solid rgba(244,241,234,.1)">
        <Lines as="h2" pb=".05em" accentFrom={2} lines={['Technology', 'moves fast.', 'So should the people', 'building with it.']} css="margin:0;max-width:22ch;font-size:clamp(2.2rem,7vw,6.6rem);line-height:.9;letter-spacing:-.045em;font-weight:800;text-transform:uppercase" />
        <El css="margin-top:clamp(40px,5.5vw,90px)">
          <TwoParas
            a="Mariox Software was founded by Mohit Garg and Rahul Garg. What began as a small engineering team is now 100+ people across Noida, Hyderabad, Dallas and Wyndham Vale, with 42 published case studies behind us."
            b="We work as an engineering partner, not a vendor. That means the people in the pitch are the people who write the code, and we tell you when an idea is worth killing before it costs you a quarter."
          />
        </El>
      </El>

      <El as="section" id="contact" data-cta="1" css="padding:clamp(90px,14vw,240px) clamp(18px,4vw,60px);border-top:1px solid rgba(244,241,234,.1);text-align:center">
        <Lines as="h2" pb=".05em" accentFrom={1} lines={['Have a big idea?', 'Let’s build it.']} css="margin:0 auto;max-width:14ch;font-size:clamp(2.6rem,10vw,10rem);line-height:.86;letter-spacing:-.05em;font-weight:800;text-transform:uppercase" />
        <El data-fade="1" css="display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin-top:clamp(36px,4.5vw,72px)">
          <StartButton />
          <GhostButton href={CONTACT.tel}>Talk to our team</GhostButton>
        </El>
        <El data-fade="1" css={`margin-top:clamp(28px,3.4vw,52px);${MONO};font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;color:#8E8A85`}>Reply within one business day</El>
      </El>
    </>
  );
}
