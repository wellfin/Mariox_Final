import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import El from '@/components/El';
import { Seo } from '@/components/sections';
import Nav from '@/components/final/Nav';
import Footer from '@/components/final/Footer';
import EstimateForm from '@/components/final/EstimateForm';
import ProposalFilm from '@/components/final/ProposalFilm';
import { MONO, PAD, Em, Shell } from '@/components/final/ui';
import { proposals, bySlug } from '@/data/final/proposals';
import { bySlug as caseBySlug } from '@/data/final/cases';
import { palette } from '@/lib/brand';
import { SITE_URL } from '@/data/site';

// One product idea, from the design's `Mariox Proposal v2`: what we learned,
// where software helps next, the 20-second concept film, the three modules we
// would build, the week-by-week plan and the Mariox work that backs it up.
//
// With ?private the same page becomes the outreach version: the badge and the
// back link change and the company's live site is screenshotted into the
// mock-ups. That only happens in the browser, so the public page stays static.

const SHOT = 'https://image.thum.io/get';
const TEAM = [
  ['Rahul Garg', 'Founder', 'rahul-garg-crop.jpg'],
  ['Tripta Mittal', 'Co-founder', 'tripta-mittal-crop.jpg'],
  ['Saswat Sahu', 'Co-founder', 'saswat-sahu.jpg'],
  ['Akash Bhardwaj', 'Business Head', 'akash-bhardwaj.jpg'],
];
const HERO_BARS = [0.35, 0.5, 0.42, 0.62, 0.55, 0.74, 0.66, 0.86, 0.8];
const pad = (i) => String(i + 1).padStart(2, '0');

export default function Concept({ p, related }) {
  const router = useRouter();
  const scroller = useRef(null);
  const isPrivate = 'private' in (router.query || {});

  // The hero screenshot pans slowly down the page, as in the design.
  useEffect(() => {
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const el = scroller.current;
      if (el) {
        const c = ((now - t0) / 1000) % 24;
        const y = c < 2 ? 0 : c < 12 ? (c - 2) / 10 : c < 14 ? 1 : 1 - (c - 14) / 10;
        el.style.backgroundPosition = `center ${(y * 100).toFixed(2)}%`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const c = palette(p);
  const facts = p.facts || [];
  const total = p.weeks || 12;
  const loc = p.city && p.city !== p.country ? `${p.city}, ${p.country}` : p.country || '';
  const shotUrl = p.site && isPrivate ? `${SHOT}/width/1600/crop/900/noanimate/${p.site}` : '';
  const fullBg = p.site && isPrivate ? `url("${SHOT}/width/1400/noanimate/fullpage/${p.site}"), url("${shotUrl}")` : 'none';
  const mobileBg = p.site && isPrivate ? `url("${SHOT}/width/400/viewportWidth/390/crop/844/noanimate/${p.site}")` : 'none';
  const marquee = facts.concat(facts, facts, facts);

  // "Weeks 1-2" → where that phase sits on the timeline bar.
  const ranges = (p.phases || []).map((ph) => {
    const m = (ph.w || '').match(/(\d+)\D+(\d+)/);
    return m ? [+m[1], +m[2]] : [1, total];
  });

  return (
    <>
      <Seo
        title={`${isPrivate ? 'Proposal for' : 'Concept for'} ${p.name} | Mariox Software`}
        description={p.proposition}
        canonical={`${SITE_URL}/concepts/${p.slug}`}
      />

      <Shell>
        <Nav active="work" ctaHref="/book-consultation" ctaLabel="Book a call" />
        <El as="main">
          {/* 01 Hero */}
          <El as="section" css={`position:relative;min-height:100svh;padding:clamp(110px,11vw,150px) ${PAD} clamp(40px,5vw,72px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr));gap:clamp(32px,4vw,72px);align-items:center;background:${c.deep};overflow:hidden`}>
            <El aria-hidden="true" css={`position:absolute;right:-10vw;top:-20vh;width:70vw;height:70vw;border-radius:50%;background:${c.glow};filter:blur(80px);opacity:.55;pointer-events:none`} />
            <El css="position:relative;display:flex;flex-direction:column;gap:clamp(20px,2.4vw,32px)">
              <El css={`display:flex;flex-wrap:wrap;gap:10px;align-items:center;${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase`}>
                <El as="a" href={isPrivate ? '/proposals' : '/concepts'} css="color:#B7B2AA">&#8592; {isPrivate ? 'All proposals' : 'All product ideas'}</El>
                <El as="span" css={`padding:6px 11px;border-radius:999px;background:${c.accent};color:${c.onAccent}`}>{isPrivate ? `Prepared for ${p.name}` : 'Product idea'}</El>
                <El as="span" css="color:#B7B2AA;white-space:nowrap">{loc}</El>
              </El>
              <El as="h1" css="margin:0;font-size:clamp(3.4rem,9vw,9.5rem);line-height:.84;letter-spacing:-.075em;font-weight:500;text-wrap:balance">
                {p.name}<El as="span" css="color:#F04423">.</El><br />
                <Em color={c.accent}>× Mariox</Em>
              </El>
              {isPrivate ? null : (
                <El as="p" css="margin:0;max-width:52ch;padding:12px 14px;border:1px solid rgba(244,241,234,.18);background:rgba(8,7,10,.35);font-size:13.5px;line-height:1.5;color:#D9D5CD">
                  Product idea. {p.name} is not a Mariox client. This page shows how we would approach their next build, based on public information.
                </El>
              )}
              <El as="p" css="margin:0;max-width:34ch;font-size:clamp(1.15rem,1.7vw,1.5rem);line-height:1.35;letter-spacing:-.02em;color:#E7E3DB;text-wrap:pretty">{p.proposition}</El>
              <El css="display:flex;flex-wrap:wrap;gap:12px;margin-top:6px">
                <El as="a" href="#film" css="display:inline-flex;align-items:center;gap:10px;min-height:52px;padding:0 22px;background:#F04423;color:#08070A;font-weight:500;font-size:16px;transition:background .3s" hover="background:#F4F1EA;color:#08070A">&#9654; Watch the 20s concept</El>
                <El as="a" href="/book-consultation" css="display:inline-flex;align-items:center;min-height:52px;padding:0 22px;border:1px solid rgba(244,241,234,.4);font-size:16px;transition:border-color .3s" hover="border-color:#F04423;color:#F04423">Book 30 minutes</El>
              </El>
            </El>

            <El css="position:relative;min-height:clamp(320px,42vw,620px)">
              <El css="position:absolute;left:0;right:8%;top:4%;border-radius:14px;padding:10px 10px 0;background:#1B1A1F;box-shadow:0 60px 120px rgba(0,0,0,.55),0 0 0 1px rgba(244,241,234,.1)">
                <El css="display:flex;align-items:center;gap:6px;padding:2px 4px 10px">
                  <El as="span" css="width:8px;height:8px;border-radius:50%;background:#FF5F57" />
                  <El as="span" css="width:8px;height:8px;border-radius:50%;background:#FEBC2E" />
                  <El as="span" css="width:8px;height:8px;border-radius:50%;background:#28C840" />
                  <El as="span" css={`margin-left:10px;flex:1;max-width:260px;padding:4px 10px;border-radius:6px;background:#0E0D11;${MONO};font-size:10.5px;color:#8E8A85`}>{p.domain}</El>
                </El>
                <El css="position:relative;aspect-ratio:16/10;border-radius:6px 6px 0 0;overflow:hidden">
                  {isPrivate ? null : (
                    <El css={`position:absolute;inset:0;background:#F4F1EA;display:grid;grid-template-columns:22% 1fr`}>
                      <El css={`background:${c.deep};padding:12%;display:flex;flex-direction:column;gap:12px`}>
                        <El as="span" css={`height:12px;width:70%;background:${c.accent};border-radius:3px`} />
                        {['85%', '60%', '75%', '55%'].map((w) => (
                          <El as="span" key={w} css={`height:8px;width:${w};background:rgba(244,241,234,.25);border-radius:3px`} />
                        ))}
                      </El>
                      <El css="padding:6% 7%;display:flex;flex-direction:column;gap:5%">
                        <El css="display:flex;justify-content:space-between;align-items:center">
                          <El as="span" css="font-size:clamp(12px,1.5vw,20px);font-weight:500;letter-spacing:-.03em;color:#08070A">{p.name}</El>
                          <El as="span" css={`height:22px;width:22px;border-radius:50%;background:${c.accent}`} />
                        </El>
                        <El css="display:grid;grid-template-columns:repeat(3,1fr);gap:4%">
                          {facts.slice(0, 3).map((f) => (
                            <El key={f.k} css="padding:9% 10%;background:#FFFFFF;box-shadow:0 1px 0 rgba(8,7,10,.06)">
                              <El css={`${MONO};font-size:clamp(7px,.7vw,9px);letter-spacing:.1em;text-transform:uppercase;color:#8E8A85;white-space:nowrap;overflow:hidden;text-overflow:ellipsis`}>{f.k}</El>
                              <El css="margin-top:6px;font-size:clamp(12px,1.6vw,22px);font-weight:500;letter-spacing:-.04em;color:#08070A">{f.v}</El>
                            </El>
                          ))}
                        </El>
                        <El css="flex:1;display:flex;align-items:flex-end;gap:3%;padding:4% 4% 0;background:#FFFFFF">
                          {HERO_BARS.map((b, i) => (
                            <El as="span" key={b} css={`flex:1;height:${b * 100}%;background:${i === 7 ? c.accent : '#E4E0D8'}`} />
                          ))}
                        </El>
                      </El>
                    </El>
                  )}
                  <El ref={scroller} css={`position:absolute;inset:0;background-color:transparent;background-size:100% auto;background-position:center 0%;background-repeat:no-repeat;background-image:${fullBg}`} />
                </El>
              </El>

              <El css="position:absolute;right:0;bottom:0;width:clamp(120px,24%,190px);aspect-ratio:9/19;border-radius:26px;padding:7px;background:#1B1A1F;box-shadow:0 40px 80px rgba(0,0,0,.6),0 0 0 1px rgba(244,241,234,.12)">
                <El css="position:relative;width:100%;height:100%;border-radius:20px;overflow:hidden;background:#F4F1EA">
                  {isPrivate ? null : (
                    <El css="position:absolute;inset:0;display:flex;flex-direction:column;gap:8px;padding:18% 10% 10%">
                      <El as="span" css="height:8px;width:50%;background:#08070A;border-radius:3px" />
                      <El as="span" css={`aspect-ratio:1.2;background:${c.accent};border-radius:10px`} />
                      <El as="span" css="height:7px;width:80%;background:#D8D3CA;border-radius:3px" />
                      <El as="span" css="height:7px;width:60%;background:#D8D3CA;border-radius:3px" />
                      <El as="span" css="margin-top:auto;height:26px;border-radius:13px;background:#08070A" />
                    </El>
                  )}
                  <El css={`position:absolute;inset:0;background-size:cover;background-position:top center;background-image:${mobileBg}`} />
                </El>
              </El>
            </El>
          </El>

          {/* Key facts marquee */}
          <El aria-label="Key facts" css="overflow:hidden;border-top:1px solid rgba(244,241,234,.1);border-bottom:1px solid rgba(244,241,234,.1);background:#08070A">
            <El css="display:flex;width:max-content;animation:mxMarquee 40s linear infinite">
              {marquee.map((m, i) => (
                <El key={`${m.k}-${i}`} css="display:flex;align-items:baseline;gap:14px;padding:20px 40px;white-space:nowrap;border-right:1px solid rgba(244,241,234,.1)">
                  <El as="span" css="font-size:clamp(1.4rem,2.2vw,2rem);font-weight:500;letter-spacing:-.05em">{m.v}</El>
                  <El as="span" css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>{m.k}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 02 Research */}
          <El as="section" css={`padding:clamp(90px,11vw,160px) ${PAD}`}>
            <El css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#F04423;margin-bottom:22px`}>01 &#8212; What we learned about {p.name}</El>
            <El as="p" css="margin:0;max-width:30ch;font-size:clamp(1.8rem,3.6vw,3.6rem);line-height:1.04;letter-spacing:-.05em;text-wrap:pretty">{p.summary}</El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:clamp(10px,1.2vw,16px);margin-top:clamp(56px,7vw,96px)">
              {facts.map((f) => (
                <El as="a" key={f.k} href={f.url} target="_blank" rel="noopener" css="position:relative;padding:clamp(22px,2.4vw,32px);display:flex;flex-direction:column;gap:12px;min-height:230px;background:#121116;border:1px solid rgba(244,241,234,.08);transition:transform .5s cubic-bezier(.2,.8,.2,1),border-color .3s" hover="transform:translateY(-4px);border-color:#F04423">
                  <El as="span" css={`${MONO};letter-spacing:.16em;text-transform:uppercase;font-size:11px;color:#8E8A85`}>{f.k}</El>
                  <El as="span" css="margin-top:auto;font-size:clamp(2.2rem,3.6vw,3.4rem);font-weight:500;letter-spacing:-.06em;line-height:.95">{f.v}</El>
                  <El as="span" css="font-size:14px;color:#B7B2AA;line-height:1.45">{f.s}</El>
                  <El as="span" aria-hidden="true" css="position:absolute;top:clamp(22px,2.4vw,32px);right:clamp(22px,2.4vw,32px);font-size:14px;color:#6E6A66">&#8599;</El>
                </El>
              ))}
            </El>
          </El>

          {/* 03 Opportunity */}
          <El as="section" css={`background:#F4F1EA;color:#08070A;padding:clamp(90px,11vw,160px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:clamp(48px,6vw,100px);align-items:center">
              <El>
                <El css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#F04423;margin-bottom:18px`}>02 &#8212; The opportunity</El>
                <El as="h2" css="margin:0;font-size:clamp(2.6rem,5.4vw,5.6rem);line-height:.9;letter-spacing:-.065em;font-weight:500">Where software <Em>helps next.</Em></El>
                <El as="p" css="margin:clamp(22px,2.6vw,34px) 0 0;max-width:54ch;font-size:clamp(16px,1.3vw,18.5px);line-height:1.62;color:#2E2B28;text-wrap:pretty">{p.opportunity}</El>
              </El>
              <El css="display:flex;flex-direction:column;gap:12px">
                {(p.gaps || []).map((g, i) => (
                  <El key={g.t} css="display:grid;grid-template-columns:auto 1fr;gap:clamp(16px,2vw,28px);padding:clamp(20px,2.4vw,30px);background:#FFFFFF;box-shadow:0 1px 0 rgba(8,7,10,.06),0 20px 40px rgba(8,7,10,.06)">
                    <El as="span" css="font-size:clamp(2rem,3vw,2.8rem);font-weight:300;letter-spacing:-.07em;line-height:.9;color:#F04423">{pad(i)}</El>
                    <El>
                      <El as="h3" css="margin:0 0 8px;font-size:clamp(1.2rem,1.7vw,1.5rem);letter-spacing:-.04em;font-weight:500">{g.t}</El>
                      <El as="p" css="margin:0;font-size:15px;line-height:1.55;color:#4A4741">{g.b}</El>
                    </El>
                  </El>
                ))}
              </El>
            </El>
          </El>

          {/* 04 Concept film */}
          <El as="section" id="film" css={`scroll-margin-top:60px;padding:clamp(90px,11vw,160px) ${PAD};background:${c.deep}`}>
            <El css="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:end;gap:20px;margin-bottom:clamp(32px,3.4vw,52px)">
              <El>
                <El css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#F04423;margin-bottom:18px`}>03 &#8212; Concept film</El>
                <El as="h2" css="margin:0;font-size:clamp(2.6rem,5.4vw,5.6rem);line-height:.9;letter-spacing:-.065em;font-weight:500">The idea in <Em>20 seconds.</Em></El>
              </El>
              <El as="p" css="margin:0;max-width:38ch;font-size:15px;line-height:1.55;color:#B7B2AA">Interface sketches are illustrative. Final design is agreed with your team in discovery.</El>
            </El>
            <El css="box-shadow:0 60px 140px rgba(0,0,0,.6)">
              <ProposalFilm slug={p.slug} name={p.name} brand={c.accent} film={p.film || []} shot={shotUrl} />
            </El>
          </El>

          {/* 05 What we'd build */}
          <El as="section" css={`padding:clamp(90px,11vw,160px) ${PAD}`}>
            <El css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#F04423;margin-bottom:18px`}>04 &#8212; What we&#8217;d build</El>
            <El as="h2" css="margin:0 0 clamp(48px,6vw,88px);font-size:clamp(2.6rem,5.4vw,5.6rem);line-height:.9;letter-spacing:-.065em;font-weight:500">Three modules, <Em>one platform.</Em></El>
            <El css="display:flex;flex-direction:column;gap:clamp(12px,1.4vw,20px)">
              {(p.modules || []).map((m, i) => (
                <El as="article" key={m.t} css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr));background:#121116;border:1px solid rgba(244,241,234,.08);overflow:hidden">
                  <El css="padding:clamp(28px,3.4vw,52px);display:flex;flex-direction:column;gap:16px">
                    <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${c.accentText}`}>Module {pad(i)}</El>
                    <El as="h3" css="margin:0;font-size:clamp(1.9rem,3.2vw,3rem);letter-spacing:-.055em;font-weight:500;line-height:.95">{m.t}</El>
                    <El as="p" css="margin:0;max-width:40ch;font-size:16px;line-height:1.55;color:#B7B2AA">{m.b}</El>
                    <El as="ul" css="margin:10px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;border-top:1px solid rgba(244,241,234,.12)">
                      {(m.f || []).map((x) => (
                        <El as="li" key={x} css="display:flex;gap:12px;padding:13px 0;border-bottom:1px solid rgba(244,241,234,.12);font-size:15px;line-height:1.45;color:#D9D5CD">
                          <El as="span" css="color:#F04423">&#8594;</El><span>{x}</span>
                        </El>
                      ))}
                    </El>
                  </El>
                  <El css={`position:relative;min-height:320px;background:${c.deep};overflow:hidden`}>
                    <El aria-hidden="true" css={`position:absolute;inset:0;background:${c.glow};opacity:.35`} />
                    <El css="position:absolute;left:10%;right:10%;top:14%;bottom:-6%;border-radius:12px 12px 0 0;background:#F4F1EA;box-shadow:0 30px 60px rgba(0,0,0,.45);overflow:hidden">
                      <El css="display:flex;gap:5px;padding:10px 12px;border-bottom:1px solid rgba(8,7,10,.08)">
                        {[0, 1, 2].map((k) => <El as="span" key={k} css="width:7px;height:7px;border-radius:50%;background:#D8D3CA" />)}
                      </El>
                      <El css="padding:7%;display:grid;grid-template-columns:30% 1fr;gap:7%;height:100%">
                        <El css="display:flex;flex-direction:column;gap:10px">
                          <El as="span" css={`height:9px;border-radius:5px;background:${c.accent}`} />
                          {['80%', '64%', '72%'].map((w) => <El as="span" key={w} css={`height:9px;width:${w};border-radius:5px;background:#E4E0D8`} />)}
                        </El>
                        <El css="display:flex;flex-direction:column;gap:12px">
                          <El as="span" css={`${MONO};font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>{p.name}</El>
                          <El as="span" css="font-size:clamp(1rem,1.6vw,1.4rem);font-weight:500;letter-spacing:-.04em;color:#08070A;line-height:1.05">{m.t}</El>
                          <El css="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:6px">
                            <El as="span" css="aspect-ratio:1;background:#EFEBE3" />
                            <El as="span" css={`aspect-ratio:1;background:${c.accent}`} />
                            <El as="span" css="aspect-ratio:1;background:#EFEBE3" />
                          </El>
                          <El as="span" css="height:9px;border-radius:5px;background:#E4E0D8" />
                          <El as="span" css="height:9px;width:70%;border-radius:5px;background:#E4E0D8" />
                        </El>
                      </El>
                    </El>
                  </El>
                </El>
              ))}
            </El>
          </El>

          {/* 06 Plan */}
          <El as="section" css={`padding:0 ${PAD} clamp(90px,11vw,160px)`}>
            <El css="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:end;gap:20px;margin-bottom:clamp(40px,5vw,64px)">
              <El>
                <El css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#F04423;margin-bottom:18px`}>05 &#8212; The plan</El>
                <El as="h2" css="margin:0;font-size:clamp(2.6rem,5.4vw,5.6rem);line-height:.9;letter-spacing:-.065em;font-weight:500">{total} weeks to live.</El>
              </El>
              <El as="p" css="margin:0;max-width:40ch;font-size:15px;line-height:1.55;color:#B7B2AA">Senior engineers write the production code. Repositories, cloud accounts and documentation stay with you from day one.</El>
            </El>
            <El css="display:flex;flex-direction:column;border-top:1px solid rgba(244,241,234,.14)">
              {(p.phases || []).map((ph, i) => (
                <El key={ph.t} css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:clamp(14px,2vw,32px);align-items:center;padding:clamp(18px,2vw,26px) 0;border-bottom:1px solid rgba(244,241,234,.14)">
                  <El>
                    <El as="span" css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#F04423`}>{ph.w}</El>
                    <El as="h3" css="margin:6px 0 4px;font-size:clamp(1.25rem,1.8vw,1.6rem);letter-spacing:-.04em;font-weight:500">{ph.t}</El>
                    <El as="p" css="margin:0;font-size:14.5px;line-height:1.5;color:#B7B2AA">{ph.b}</El>
                  </El>
                  <El css="position:relative;height:14px;background:rgba(244,241,234,.06)">
                    <El css={`position:absolute;top:0;bottom:0;left:${((ranges[i][0] - 1) / total) * 100}%;width:${((ranges[i][1] - ranges[i][0] + 1) / total) * 100}%;background:${i === p.phases.length - 1 ? '#F04423' : c.accent}`} />
                  </El>
                </El>
              ))}
            </El>
          </El>

          {/* 07 Relevant work */}
          {related.length ? (
            <El as="section" css={`padding:clamp(90px,11vw,160px) ${PAD};background:#0E0D11;border-top:1px solid rgba(244,241,234,.08)`}>
              <El css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#F04423;margin-bottom:18px`}>06 &#8212; Relevant Mariox work</El>
              <El as="h2" css="margin:0 0 clamp(36px,4.4vw,64px);font-size:clamp(2.6rem,5.4vw,5.6rem);line-height:.9;letter-spacing:-.065em;font-weight:500">We&#8217;ve built this <Em>before.</Em></El>
              <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:clamp(12px,1.4vw,20px)">
                {related.map((r) => (
                  <El as="a" key={r.slug} href={`/work/${r.slug}`} css="display:flex;flex-direction:column;gap:16px">
                    <El css="overflow:hidden;aspect-ratio:4/3;background:#141216">
                      <El css={`width:100%;height:100%;background-size:cover;background-position:center;background-image:url('${r.img}');transition:transform 1s cubic-bezier(.2,.8,.2,1)`} hover="transform:scale(1.05)" />
                    </El>
                    <El css="display:flex;justify-content:space-between;gap:12px;align-items:baseline">
                      <El as="span" css="font-size:clamp(1.3rem,1.8vw,1.6rem);letter-spacing:-.045em;font-weight:500">{r.name} &#8599;</El>
                      <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>{r.sector}</El>
                    </El>
                    <El as="p" css="margin:0;font-size:14.5px;line-height:1.5;color:#B7B2AA">{r.body}</El>
                  </El>
                ))}
              </El>
            </El>
          ) : null}

          {/* 08 Team */}
          <El as="section" css={`padding:clamp(90px,11vw,160px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr));gap:clamp(32px,4vw,72px);align-items:end;margin-bottom:clamp(36px,4.4vw,64px)">
              <El>
                <El css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#F04423;margin-bottom:18px`}>07 &#8212; Who you&#8217;d work with</El>
                <El as="h2" css="margin:0;font-size:clamp(2.6rem,5.4vw,5.6rem);line-height:.9;letter-spacing:-.065em;font-weight:500">The people <Em>behind it.</Em></El>
              </El>
              <El as="p" css="margin:0;max-width:46ch;font-size:clamp(16px,1.3vw,18px);line-height:1.6;color:#B7B2AA">Founders stay on every engagement. The engineers on the first call are the engineers who write the code.</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(12,minmax(0,1fr));grid-auto-rows:clamp(140px,16vw,260px);gap:clamp(8px,1vw,14px)">
              <El css="grid-column:span 7;grid-row:span 2;background:#141216 url('/assets/company/team-office-group.jpg') center 35%/cover no-repeat" />
              <El css="grid-column:span 5;background:#141216 url('/assets/company/office-meeting-room.jpg') center/cover no-repeat" />
              <El css="grid-column:span 5;background:#141216 url('/assets/company/office-workspace.jpg') center/cover no-repeat" />
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:clamp(10px,1.2vw,16px);margin-top:clamp(10px,1.2vw,16px)">
              {TEAM.map(([name, role, img]) => (
                <El key={name} css="display:flex;align-items:center;gap:16px;padding:16px;background:#121116;border:1px solid rgba(244,241,234,.08)">
                  <El as="span" role="img" aria-label={name} css={`flex:none;width:64px;height:64px;border-radius:50%;background-color:#1B1A1F;background-size:cover;background-position:center top;background-image:url('/assets/company/${img}')`} />
                  <El>
                    <El css="font-size:17px;font-weight:500;letter-spacing:-.02em">{name}</El>
                    <El css={`margin-top:3px;${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>{role}</El>
                  </El>
                </El>
              ))}
            </El>
          </El>

          {/* 09 Next step */}
          <El as="section" css={`position:relative;overflow:hidden;padding:clamp(90px,11vw,160px) ${PAD};background:${c.deep}`}>
            <El aria-hidden="true" css={`position:absolute;left:-10vw;bottom:-30vh;width:70vw;height:70vw;border-radius:50%;background:${c.glow};filter:blur(80px);opacity:.6;pointer-events:none`} />
            <El css="position:relative;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:end;gap:28px">
              <El css="max-width:880px">
                <El css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#F04423;margin-bottom:18px`}>08 &#8212; Next step</El>
                <El as="h2" css="margin:0;font-size:clamp(2.8rem,7vw,7.4rem);line-height:.86;letter-spacing:-.07em;font-weight:500;text-wrap:balance">Shall we build it for {p.name}?</El>
                <El as="p" css="margin:22px 0 0;max-width:48ch;font-size:clamp(16px,1.3vw,18px);line-height:1.55;color:#D9D5CD">A 30-minute call with the engineers who would build it. We&#8217;ll go through this idea, change what doesn&#8217;t fit, and leave you with a fixed scope.</El>
              </El>
              <El css="display:flex;flex-wrap:wrap;gap:12px">
                <El as="a" href="/book-consultation" css="display:inline-flex;align-items:center;gap:10px;min-height:56px;padding:0 26px;background:#F04423;color:#08070A;font-weight:500;font-size:16px;transition:background .3s" hover="background:#F4F1EA;color:#08070A">Book 30 minutes &#8594;</El>
                <El as="a" href="#estimate" css="display:inline-flex;align-items:center;min-height:56px;padding:0 26px;border:1px solid rgba(244,241,234,.4);font-size:16px;transition:border-color .3s" hover="border-color:#F04423;color:#F04423">Send a message</El>
              </El>
            </El>
          </El>

          <EstimateForm id="estimate" source={`concept:${p.slug}`} subject={`Product idea — ${p.name}`} />

          <Footer />
        </El>
      </Shell>
    </>
  );
}

Concept.bare = true;

export function getStaticPaths() {
  return { paths: proposals.map((p) => ({ params: { slug: p.slug } })), fallback: false };
}

export function getStaticProps({ params }) {
  const p = bySlug[params.slug];
  if (!p) return { notFound: true };
  // The cases that back this idea up, in the order the proposal lists them.
  const related = (p.related || [])
    .map((s) => caseBySlug[s])
    .filter(Boolean)
    .map((cs) => ({
      slug: cs.slug,
      name: cs.name,
      sector: cs.sector,
      body: cs.body,
      img: (cs.gallery && cs.gallery[0]) || cs.img,
    }));
  return { props: { p, related } };
}
