import React, { useMemo, useState } from 'react';
import El from '@/components/El';
import { Seo } from '@/components/sections';
import Nav from '@/components/final/Nav';
import Footer from '@/components/final/Footer';
import { MONO, PAD, Em, Shell } from '@/components/final/ui';
import { conceptIndex, regionOf, serviceOf, REGIONS, SERVICE_LINES, COUNTRY_COUNT } from '@/data/final/conceptIndex';
import { palette } from '@/lib/brand';
import { SITE_URL } from '@/data/site';

// "Product ideas" from the design's `Mariox Concepts`: the 99 concepts, with
// region, service-line and text filters. None of these companies are clients —
// the page says so, and so does every concept page.

const NAMES = conceptIndex.map((p) => p.name);

export default function Concepts() {
  const [region, setRegion] = useState('all');
  const [svc, setSvc] = useState('all');
  const [q, setQ] = useState('');

  const list = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return conceptIndex
      .map((p, i) => ({ p, i }))
      .filter(({ p }) => (region === 'all' || regionOf(p.country) === region)
        && (svc === 'all' || serviceOf(p) === svc)
        && (!ql || `${p.name} ${p.country} ${p.sector}`.toLowerCase().includes(ql)));
  }, [region, svc, q]);

  const chip = (on) => `min-height:40px;padding:0 16px;border-radius:999px;border:1px solid ${on ? '#F04423' : 'rgba(244,241,234,.22)'};background:${on ? '#F04423' : 'transparent'};color:${on ? '#08070A' : '#D9D5CD'};font-family:Geist,sans-serif;font-size:14px;cursor:pointer`;

  return (
    <>
      <Seo
        title="Product ideas for 99 brands | Mariox Software"
        description="Concepts by Mariox Software: what we would build next for fast-growing companies we admire. Not client projects."
        canonical={`${SITE_URL}/concepts`}
      />

      <Shell>
        <Nav active="work" ctaHref="/book-consultation" ctaLabel="Book a call" />

        {/* 01 Hero */}
        <El as="section" css={`padding:clamp(130px,13vw,190px) ${PAD} clamp(40px,5vw,72px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:clamp(28px,4vw,64px);align-items:end`}>
          <El>
            <El as="nav" css={`display:flex;gap:10px;${MONO};font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;margin-bottom:24px`}>
              <El as="a" href="/work">Portfolio</El><span>/</span><El as="span" css="color:#F04423">Product ideas</El>
            </El>
            <El as="h1" css="margin:0;font-size:clamp(3.2rem,8.6vw,9rem);line-height:.84;letter-spacing:-.075em;font-weight:500">
              What we&#8217;d build<br /><Em color="#F04423">for {conceptIndex.length} brands.</Em>
            </El>
          </El>
          <El css="display:flex;flex-direction:column;gap:22px">
            <El as="p" css="margin:0;max-width:48ch;font-size:clamp(16px,1.35vw,19px);line-height:1.6;color:#B7B2AA">
              Free product ideas for brands from IKEA to Huel. For each one: the gap we see, the three things we would build, a 20-second concept film and a week-by-week plan. Use them to see how we think before you talk to us. None of these companies are Mariox clients. Our delivered work is in <El as="a" href="/work" css="color:#F4F1EA;text-decoration:underline">Case studies</El>.
            </El>
            <El css="display:flex;gap:clamp(24px,3vw,48px);border-top:1px solid rgba(244,241,234,.14);padding-top:18px">
              {[[conceptIndex.length, 'Ideas'], [COUNTRY_COUNT, 'Countries'], [4, 'Service lines']].map(([v, k]) => (
                <El key={k}>
                  <El css="font-size:clamp(1.8rem,2.8vw,2.6rem);font-weight:500;letter-spacing:-.05em">{v}</El>
                  <El css={`${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>{k}</El>
                </El>
              ))}
            </El>
          </El>
        </El>

        <El aria-hidden="true" css="overflow:hidden;border-top:1px solid rgba(244,241,234,.08);border-bottom:1px solid rgba(244,241,234,.08)">
          <El css="display:flex;width:max-content;animation:mxMarquee 90s linear infinite">
            {NAMES.concat(NAMES).map((m, i) => (
              <El as="span" key={`${m}-${i}`} css="display:flex;align-items:center;gap:28px;padding:18px 28px;white-space:nowrap;font-size:clamp(1.3rem,2.2vw,2rem);letter-spacing:-.05em;font-weight:500;color:#D9D5CD">
                {m}<El as="span" css="width:7px;height:7px;background:#F04423" />
              </El>
            ))}
          </El>
        </El>

        {/* 02 Filters */}
        <El as="section" css={`position:sticky;top:64px;z-index:20;background:rgba(8,7,10,.92);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid rgba(244,241,234,.08);padding:14px ${PAD};display:flex;flex-wrap:wrap;gap:10px;align-items:center`}>
          {REGIONS.map(([k, label]) => (
            <El as="button" type="button" key={k} onClick={() => setRegion(k)} aria-pressed={region === k} css={chip(region === k)}>{label}</El>
          ))}
          <El as="span" aria-hidden="true" css="width:1px;height:24px;background:rgba(244,241,234,.14)" />
          {SERVICE_LINES.map(([k, label]) => (
            <El as="button" type="button" key={k} onClick={() => setSvc(k)} aria-pressed={svc === k} css={chip(svc === k)}>{label}</El>
          ))}
          <El
            as="input"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search companies"
            aria-label="Search companies"
            css="margin-left:auto;min-height:40px;min-width:200px;padding:0 14px;border:1px solid rgba(244,241,234,.2);background:transparent;color:#F4F1EA;font-family:Geist,sans-serif;font-size:14px;outline:none"
          />
        </El>

        {/* 03 Grid */}
        <El as="section" css={`padding:clamp(28px,3vw,44px) ${PAD} clamp(80px,10vw,140px)`}>
          <El css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;margin-bottom:18px`}>Showing {list.length} of {conceptIndex.length}</El>
          <El css="display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,300px),1fr));gap:clamp(10px,1.2vw,16px)">
            {list.map(({ p, i }) => {
              const c = palette(p);
              const loc = p.city && p.city !== p.country ? p.city : p.country;
              return (
                <El as="a" key={p.slug} href={`/concepts/${p.slug}`} css="display:flex;flex-direction:column;background:#0E0D11;border:1px solid rgba(244,241,234,.08);overflow:hidden;transition:transform .5s cubic-bezier(.2,.8,.2,1),border-color .3s" hover="transform:translateY(-5px);border-color:#F04423">
                  <El css={`position:relative;aspect-ratio:16/10;background:${c.deepCard};overflow:hidden`}>
                    <El aria-hidden="true" css={`position:absolute;inset:0;background:${c.glowCorner}`} />
                    <El as="span" css={`position:absolute;top:14px;left:16px;${MONO};font-size:10.5px;letter-spacing:.14em;color:#F4F1EA`}>{String(i + 1).padStart(2, '0')}</El>
                    <El as="span" css={`position:absolute;top:12px;right:12px;padding:4px 9px;border-radius:999px;background:${c.brand};color:${c.onAccent};${MONO};font-size:9.5px;letter-spacing:.12em;text-transform:uppercase`}>{p.service}</El>
                    <El css="position:absolute;left:12%;right:12%;top:26%;bottom:-6%;border-radius:8px 8px 0 0;background:#F4F1EA;box-shadow:0 30px 60px rgba(0,0,0,.5);padding:7%;display:flex;flex-direction:column;gap:8%">
                      <El css="display:flex;justify-content:space-between;align-items:center">
                        <El as="span" css="font-size:clamp(12px,1.2vw,15px);font-weight:500;letter-spacing:-.03em;color:#08070A;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">{p.name}</El>
                        <El as="span" css={`flex:none;width:14px;height:14px;border-radius:50%;background:${c.brand}`} />
                      </El>
                      <El css="display:grid;grid-template-columns:repeat(3,1fr);gap:6%">
                        <El as="span" css="height:24px;background:#E9E5DD" />
                        <El as="span" css={`height:24px;background:${c.brand}`} />
                        <El as="span" css="height:24px;background:#E9E5DD" />
                      </El>
                      <El as="span" css="height:7px;width:80%;background:#E0DBD2;border-radius:3px" />
                      <El as="span" css="height:7px;width:55%;background:#E0DBD2;border-radius:3px" />
                    </El>
                  </El>
                  <El css="padding:clamp(18px,2vw,24px);display:flex;flex-direction:column;gap:10px;flex:1">
                    <El css="display:flex;justify-content:space-between;align-items:baseline;gap:10px">
                      <El as="span" css="font-size:clamp(1.3rem,1.8vw,1.6rem);letter-spacing:-.05em;font-weight:500;line-height:1">{p.name}</El>
                      <El as="span" css={`${MONO};font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#8E8A85;white-space:nowrap`}>{loc}</El>
                    </El>
                    <El as="p" css="margin:0;font-size:14px;line-height:1.5;color:#B7B2AA;text-wrap:pretty">{p.proposition}</El>
                    <El as="span" css="margin-top:auto;padding-top:12px;border-top:1px solid rgba(244,241,234,.08);font-size:14px;color:#F04423">See the idea &#8594;</El>
                  </El>
                </El>
              );
            })}
          </El>
          {list.length ? null : <El as="p" css="margin:40px 0 0;color:#B7B2AA">No concepts match. Try another filter.</El>}
        </El>

        <Footer />
      </Shell>
    </>
  );
}

Concepts.bare = true;
