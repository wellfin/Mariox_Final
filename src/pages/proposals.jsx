import React from 'react';
import El from '@/components/El';
import { Seo } from '@/components/sections';
import { MONO, PAD, Em, Shell } from '@/components/final/ui';
import { palette } from '@/lib/brand';

// The internal outreach index from the design's `Mariox Proposals v2`. Not
// linked from the site and noindex: every card opens the private version of a
// concept page, which screenshots the prospect's live site.

const SHOT = 'https://image.thum.io/get/width/1200/crop/750/noanimate';

export default function Proposals({ rows, countries }) {
  const names = rows.map((p) => p.name);
  return (
    <>
      <Seo title="Proposals (internal) | Mariox Software" description="Internal outreach index." noindex />

      <Shell css="min-height:100vh;background:#08070A;color:#F4F1EA;font-family:Geist,'Helvetica Neue',Helvetica,sans-serif;overflow-x:clip">
        <El as="header" css={`display:flex;justify-content:space-between;align-items:center;gap:16px;padding:22px ${PAD};border-bottom:1px solid rgba(244,241,234,.08)`}>
          <El as="a" href="/" css="display:flex;align-items:center;gap:10px;font-weight:600;letter-spacing:-.02em">
            <El as="span" css="width:16px;height:16px;background:#F04423" />MARIOX
          </El>
          <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85`}>Internal &#183; Not linked from the site</El>
        </El>

        <El as="section" css={`padding:clamp(64px,9vw,140px) ${PAD} clamp(40px,5vw,72px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:clamp(28px,4vw,64px);align-items:end`}>
          <El>
            <El css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#F04423;margin-bottom:22px`}>2026 target list &#183; Batch 01</El>
            <El as="h1" css="margin:0;font-size:clamp(3.2rem,8.6vw,9rem);line-height:.84;letter-spacing:-.075em;font-weight:500">
              {rows.length} companies.<br /><Em color="#F04423">{rows.length} proposals.</Em>
            </El>
          </El>
          <El css="display:flex;flex-direction:column;gap:22px">
            <El as="p" css="margin:0;max-width:46ch;font-size:clamp(16px,1.35vw,19px);line-height:1.6;color:#B7B2AA">Each page is built for one prospect: their live site, researched facts with sources, three proposed modules, a 20-second concept film and a week-by-week plan. Send the link in outreach.</El>
            <El css="display:flex;gap:clamp(24px,3vw,48px);border-top:1px solid rgba(244,241,234,.14);padding-top:18px">
              <El>
                <El css="font-size:clamp(1.8rem,2.8vw,2.6rem);font-weight:500;letter-spacing:-.05em">{rows.length}<El as="span" css="color:#8E8A85">/100</El></El>
                <El css={`${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>Ready for review</El>
              </El>
              <El>
                <El css="font-size:clamp(1.8rem,2.8vw,2.6rem);font-weight:500;letter-spacing:-.05em">{countries}</El>
                <El css={`${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>Countries</El>
              </El>
            </El>
          </El>
        </El>

        <El aria-hidden="true" css="overflow:hidden;border-top:1px solid rgba(244,241,234,.08);border-bottom:1px solid rgba(244,241,234,.08)">
          <El css="display:flex;width:max-content;animation:mxMarquee 32s linear infinite">
            {names.concat(names).map((m, i) => (
              <El as="span" key={`${m}-${i}`} css="display:flex;align-items:center;gap:28px;padding:18px 28px;white-space:nowrap;font-size:clamp(1.4rem,2.4vw,2.2rem);letter-spacing:-.05em;font-weight:500;color:#D9D5CD">
                {m}<El as="span" css="width:8px;height:8px;background:#F04423" />
              </El>
            ))}
          </El>
        </El>

        <El as="section" css={`padding:clamp(40px,5vw,80px) ${PAD} clamp(80px,10vw,140px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,520px),1fr));gap:clamp(14px,1.6vw,24px)`}>
          {rows.map((p, i) => {
            const c = palette(p);
            const stat = p.stat;
            return (
              <El as="a" key={p.slug} href={`/concepts/${p.slug}?private=1`} css="display:flex;flex-direction:column;background:#0E0D11;border:1px solid rgba(244,241,234,.08);overflow:hidden;transition:transform .5s cubic-bezier(.2,.8,.2,1),border-color .3s" hover="transform:translateY(-6px);border-color:#F04423">
                <El css={`position:relative;aspect-ratio:16/10;background:${c.deepCard};overflow:hidden`}>
                  <El aria-hidden="true" css={`position:absolute;inset:0;background:${c.glowCorner}`} />
                  <El as="span" css={`position:absolute;top:18px;left:20px;${MONO};font-size:11px;letter-spacing:.16em;color:#F4F1EA`}>{String(i + 1).padStart(2, '0')}</El>
                  <El as="span" css={`position:absolute;top:14px;right:16px;padding:5px 10px;border-radius:999px;background:${c.brand};color:${c.onAccent};${MONO};font-size:10px;letter-spacing:.14em;text-transform:uppercase`}>{p.service}</El>
                  <El css="position:absolute;left:9%;right:9%;top:16%;bottom:-4%;border-radius:10px 10px 0 0;padding:7px 7px 0;background:#1B1A1F;box-shadow:0 40px 80px rgba(0,0,0,.55)">
                    <El css="display:flex;gap:5px;padding:2px 3px 7px">
                      <El as="span" css="width:7px;height:7px;border-radius:50%;background:#FF5F57" />
                      <El as="span" css="width:7px;height:7px;border-radius:50%;background:#FEBC2E" />
                      <El as="span" css="width:7px;height:7px;border-radius:50%;background:#28C840" />
                    </El>
                    <El css={`width:100%;height:100%;border-radius:4px 4px 0 0;background-color:#F4F1EA;background-size:cover;background-position:top center;background-image:url("${SHOT}/${p.site}")`} />
                  </El>
                </El>
                <El css="padding:clamp(22px,2.4vw,32px);display:flex;flex-direction:column;gap:14px">
                  <El css="display:flex;justify-content:space-between;align-items:baseline;gap:12px">
                    <El as="span" css="font-size:clamp(1.8rem,2.8vw,2.6rem);letter-spacing:-.06em;font-weight:500;line-height:1">{p.name}</El>
                    <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;white-space:nowrap`}>{p.city}, {p.country}</El>
                  </El>
                  <El as="p" css="margin:0;font-size:15px;line-height:1.55;color:#B7B2AA;text-wrap:pretty">{p.proposition}</El>
                  <El css="display:flex;justify-content:space-between;align-items:center;gap:12px;padding-top:14px;border-top:1px solid rgba(244,241,234,.1)">
                    <El as="span" css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>{stat}</El>
                    <El as="span" css="font-size:15px;color:#F04423">Open proposal &#8594;</El>
                  </El>
                </El>
              </El>
            );
          })}
        </El>
      </Shell>
    </>
  );
}

Proposals.bare = true;

// The full proposals carry long research copy that this index does not need,
// so only the card fields are serialised.
export function getStaticProps() {
  // eslint-disable-next-line global-require
  const { proposals } = require('@/data/final/proposals');
  const rows = proposals.map((p) => ({
    slug: p.slug,
    name: p.name,
    proposition: p.proposition,
    service: p.service,
    city: p.city,
    country: p.country,
    brand: p.brand,
    site: p.site,
    stat: p.facts && p.facts[0] ? `${p.facts[0].v} ${p.facts[0].k.toLowerCase()}` : '',
  }));
  return { props: { rows, countries: new Set(rows.map((p) => p.country)).size } };
}
