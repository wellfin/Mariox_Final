import React from 'react';
import Link from 'next/link';
import El from '@/components/El';
import { Seo, JsonLd } from '@/components/sections';
import Nav from '@/components/final/Nav';
import Footer from '@/components/final/Footer';
import EstimateForm from '@/components/final/EstimateForm';
import { MONO, PAD, Em, Shell, Marquee } from '@/components/final/ui';
import { WorkPanels, CaseIndex, IndustryTiles, ProofSection } from '@/components/final/sections';
import { useReveal, useGsapScene } from '@/components/final/fx';
import { industries, groups } from '@/data/final/industries';
import { stack, caseRows, filterNames, clients, industries as homeIndustries } from '@/data/homeV4';
import { SITE_URL } from '@/data/site';

// Industries hub from the design's `industries.dc.html`: the work panels and
// case index the long pages share, the ten flagship sectors, then the full
// index of all 34 industry pages.

export default function IndustriesHub({ grouped }) {
  useReveal();
  useGsapScene();

  return (
    <>
      <Seo
        title={`Industries We Build For — ${industries.length} sectors | Mariox Software`}
        description="Fintech, healthcare, education, e-commerce, logistics, travel and more. We know the regulations, integrations and peak-traffic moments of the sectors we build for."
        canonical={`${SITE_URL}/industries`}
      />
      <JsonLd
        id="industries-itemlist"
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Industries Mariox Software builds for',
          itemListElement: industries.map((i, n) => ({ '@type': 'ListItem', position: n + 1, name: i.name, url: `${SITE_URL}/industries/${i.slug}` })),
        }}
      />

      <Shell>
        <Nav active="industries" ctaHref="#contact" />
        <El as="main" id="top" css="position:relative;z-index:1;padding-top:74px">
          {/* 01 Hero */}
          <El as="section" css={`position:relative;min-height:calc(100svh - 74px);display:grid;grid-template-rows:1fr auto;padding:clamp(56px,7vw,110px) ${PAD} clamp(24px,3vw,40px);overflow:hidden`}>
            <El aria-hidden="true" css="position:absolute;left:0;right:0;bottom:0;height:46%;background:linear-gradient(to top,#08070A 12%,rgba(8,7,10,0));pointer-events:none" />
            <El css="position:relative;align-self:end">
              <El css="display:flex;align-items:center;gap:12px;margin-bottom:clamp(18px,2.4vw,30px)">
                <El as="span" css="width:7px;height:7px;background:#F04423;animation:mxPulse 2.4s ease-in-out infinite" />
                <El as="span" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#B7B2AA`}>Industries &#183; {industries.length} sectors</El>
              </El>
              <El as="h1" css="margin:0;font-weight:500;font-size:clamp(3.4rem,11.5vw,13rem);line-height:.84;letter-spacing:-.065em">
                <El as="span" css="display:block">Built for</El>
                <El as="span" css="display:block;padding-left:clamp(0px,9vw,180px)">your</El>
                <El as="span" css="display:block"><Em>industry</Em><El as="span" css="color:#F04423">.</El></El>
              </El>
            </El>
            <El css="position:relative;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));gap:clamp(20px,3vw,48px);align-items:end;margin-top:clamp(28px,3.6vw,52px);padding-top:clamp(18px,2.2vw,26px);border-top:1px solid rgba(244,241,234,.16)">
              <El as="p" css="margin:0;max-width:38ch;font-size:clamp(15.5px,1.25vw,18px);line-height:1.55;color:#B7B2AA;text-wrap:pretty">We know the regulations, integrations and peak-traffic moments of the sectors we build for.</El>
              <El css={`display:flex;flex-direction:column;gap:8px;${MONO};font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;color:#8E8A85`}>
                <span><El as="span" css="color:#F4F1EA">4.8 &#9733;</El> Google &#183; 138 reviews</span>
                <span>AWS &#183; Azure &#183; Google Cloud certified</span>
              </El>
              <El css="display:flex;flex-wrap:wrap;gap:10px">
                <El as="a" href="#contact" css="display:flex;align-items:center;gap:14px;background:#F04423;color:#08070A;padding:18px 24px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap;transition:background .3s" hover="background:#F4F1EA;color:#08070A">Start a project <span>&#8594;</span></El>
                <El as="a" href="#all-industries" css="display:flex;align-items:center;gap:14px;border:1px solid rgba(244,241,234,.3);padding:18px 24px;border-radius:999px;font-size:15px;white-space:nowrap;transition:border-color .3s" hover="border-color:#F4F1EA;color:#F4F1EA">Explore &#8595;</El>
              </El>
            </El>
          </El>

          <Marquee items={clients} seconds={52} border="top" />

          {/* 03 Work */}
          <El as="section" id="work" css="position:relative;background:#08070A">
            <WorkPanels
              stack={stack}
              title={<>Five products, <Em>opened up.</Em></>}
              lead="What the business needed, the system underneath it, and the stack that runs it today."
            />
            <CaseIndex
              rows={caseRows}
              filters={filterNames}
              title={<>Every product, <Em>on the record.</Em></>}
              lead="A working index of products we have engineered. Filter by sector, hover for a look."
            />
          </El>

          {/* 04 Flagship industries */}
          <El as="section" id="industries" css={`position:relative;background:#08070A;padding:0 ${PAD} clamp(100px,12vw,190px)`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,5vw,72px);padding-top:clamp(70px,8vw,120px);border-top:1px solid rgba(244,241,234,.12)">
              <El>
                <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:16px`}>Chapter 05 &#8212; Industries</El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.6rem,6.4vw,6.6rem);line-height:.88;letter-spacing:-.06em;font-weight:500">Ten industries. <Em>Real clients in each.</Em></El>
              </El>
              <El as="p" data-rv="1" css="margin:0;max-width:42ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">We know the workflows, regulation and peak-traffic problems behind the sectors where software matters most.</El>
            </El>
            <IndustryTiles items={homeIndustries} />
          </El>

          {/* All industries index */}
          <El as="section" id="all-industries" css={`position:relative;background:#F4F1EA;color:#08070A;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,4.6vw,64px)">
              <El>
                <El css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55;margin-bottom:16px`}>Index &#183; {industries.length} industries</El>
                <El as="h2" css="margin:0;font-size:clamp(2.6rem,6.4vw,6.6rem);line-height:.88;letter-spacing:-.06em;font-weight:500">Every industry, <Em>one click away.</Em></El>
              </El>
              <El as="p" css="margin:0;max-width:44ch;font-size:16.5px;line-height:1.55;color:#4A4741">Each page covers the problems we design around, the products we build, compliance, stack and the work we have shipped in that sector.</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:clamp(28px,3.4vw,52px) clamp(20px,3vw,48px)">
              {grouped.map((g) => (
                <El key={g.name}>
                  <El css={`display:flex;justify-content:space-between;padding-bottom:12px;border-bottom:2px solid #08070A;${MONO};letter-spacing:.16em;text-transform:uppercase;font-size:11px`}>
                    <span>{g.name}</span><El as="span" css="color:#F04423">{g.count}</El>
                  </El>
                  {g.items.map((x) => (
                    <El as={Link} key={x.slug} href={`/industries/${x.slug}`} css="display:flex;justify-content:space-between;align-items:baseline;gap:12px;padding:14px 0;border-bottom:1px solid rgba(8,7,10,.16);transition:padding-left .35s cubic-bezier(.2,.8,.2,1),color .25s" hover="padding-left:10px;color:#F04423">
                      <El as="span" css="font-size:clamp(1.25rem,1.9vw,1.7rem);font-weight:500;letter-spacing:-.045em">{x.name}</El>
                      <El as="span" css={`${MONO};font-size:11px;color:#5E5A55`}>{x.n} &#8599;</El>
                    </El>
                  ))}
                </El>
              ))}
            </El>
          </El>

          <ProofSection clients={clients} />

          {/* 06 Contact */}
          <El as="section" id="contact" css={`position:relative;padding:clamp(100px,11vw,170px) ${PAD};background:#0E0D11;border-top:1px solid rgba(244,241,234,.08)`}>
            <El css="position:relative;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,400px),1fr));gap:clamp(36px,5vw,90px);align-items:end">
              <El>
                <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#B7B2AA;margin-bottom:24px`}>Chapter 09 &#8212; Start</El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(3.2rem,9vw,10rem);line-height:.84;letter-spacing:-.07em;font-weight:500">Have an idea <Em>worth building?</Em></El>
                <El data-rv="1" css="display:flex;flex-wrap:wrap;gap:10px 28px;margin-top:clamp(28px,3.4vw,44px);font-size:16px">
                  <El as="a" href="mailto:admin@marioxsoftware.com" css="border-bottom:1px solid rgba(244,241,234,.4);padding-bottom:4px">admin@marioxsoftware.com</El>
                  <El as="a" href="tel:+919599287045" css="border-bottom:1px solid rgba(244,241,234,.4);padding-bottom:4px">+91 95992 87045</El>
                </El>
              </El>
              <El data-rv="1">
                <EstimateForm id="industries-estimate" title="Tell us about the project" source="industries-hub" dark />
              </El>
            </El>
          </El>

          <Footer />
        </El>
      </Shell>
    </>
  );
}

IndustriesHub.bare = true;

export async function getStaticProps() {
  const grouped = Object.entries(groups).map(([key, name]) => {
    const items = industries.filter((i) => i.groupKey === key);
    return { name, count: String(items.length).padStart(2, '0'), items: items.map((i) => ({ slug: i.slug, name: i.name, n: i.n })) };
  }).filter((g) => g.items.length);
  return { props: { grouped } };
}
