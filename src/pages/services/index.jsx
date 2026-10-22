import React, { useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import El from '@/components/El';
import { Seo, JsonLd } from '@/components/sections';
import Nav from '@/components/final/Nav';
import { MONO, SERIF, PAD, Em, Shell } from '@/components/final/ui';
import { cats, services } from '@/data/final/services';
import { SITE_URL } from '@/data/site';

// Services hub from the design's `services.dc.html`: a hero that indexes the
// seven disciplines, then one alternating band per discipline, with the cursor
// card that previews each service on hover.

const COVER = { 'product-engineering': 'graphy', 'ai-data': 'learnosity', 'digital-transformation': 'airwallex' };

export default function ServicesHub({ bands }) {
  const follow = useRef(null);
  const followImg = useRef(null);
  const followTxt = useRef(null);
  const m = useRef({ x: -500, y: -500, fx: -500, fy: -500 });

  useEffect(() => {
    const onMove = (e) => { m.current.x = e.clientX; m.current.y = e.clientY; };
    window.addEventListener('mousemove', onMove, { passive: true });
    let raf;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const k = m.current, f = follow.current;
      if (!f) return;
      k.fx += (k.x + 28 - k.fx) * 0.12;
      k.fy += (k.y + 28 - k.fy) * 0.12;
      f.style.transform = 'translate3d(' + Math.min(k.fx, window.innerWidth - 380) + 'px,' + Math.min(k.fy, window.innerHeight - 310) + 'px,0)';
    };
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMove); };
  }, []);

  const showFollow = useCallback((img, txt) => () => {
    const f = follow.current;
    if (!f) return;
    if (!img || window.matchMedia('(pointer: coarse)').matches) { f.style.opacity = 0; return; }
    followImg.current.style.backgroundImage = 'url("' + img + '")';
    followTxt.current.textContent = txt;
    f.style.opacity = 1;
  }, []);

  return (
    <>
      <Seo
        title={`Software Development Services — ${services.length} services in 7 disciplines | Mariox Software`}
        description="Product engineering, AI and data, blockchain, enterprise software, digital transformation, consulting and dedicated teams. 100+ in-house engineers since 2016."
        canonical={`${SITE_URL}/services`}
      />
      <JsonLd
        id="services-itemlist"
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Mariox Software services',
          itemListElement: services.map((s, i) => ({
            '@type': 'ListItem', position: i + 1, name: s.name, url: `${SITE_URL}/${s.slug}`,
          })),
        }}
      />

      <El aria-hidden="true" ref={follow} css="position:fixed;top:0;left:0;width:360px;z-index:60;pointer-events:none;opacity:0;transform:translate3d(-500px,-500px,0);transition:opacity .3s;will-change:transform">
        <El ref={followImg} css="width:360px;height:230px;background:#141216 center top/cover no-repeat" />
        <El ref={followTxt} css="background:#F04423;color:#08070A;padding:12px 14px;font-size:14px;line-height:1.35" />
      </El>

      <Shell>
      <Nav active="services" ctaHref="/contact" />

      <El as="main" css="padding-top:74px">
        {/* 01 Hero */}
        <El as="section" css={`min-height:calc(100svh - 74px);display:flex;flex-direction:column;justify-content:space-between;gap:clamp(40px,5vw,72px);padding:clamp(56px,7vw,110px) ${PAD} clamp(28px,3vw,40px)`}>
          <El>
            <El css="display:flex;align-items:center;gap:12px;margin-bottom:clamp(20px,2.6vw,32px)">
              <El as="span" css="width:7px;height:7px;background:#F04423;animation:mxPulse 2.4s ease-in-out infinite" />
              <El as="span" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#B7B2AA`}>Services &#183; {services.length} services in 7 disciplines</El>
            </El>
            <El as="h1" css="margin:0;font-weight:500;font-size:clamp(3.2rem,10.5vw,12rem);line-height:.84;letter-spacing:-.07em">
              <El as="span" css="display:block">Software services,</El>
              <El as="span" css="display:block;padding-left:clamp(0px,9vw,180px)"><Em>end to end</Em><El as="span" css="color:#F04423">.</El></El>
            </El>
            <El as="p" css="margin:clamp(24px,3vw,40px) 0 0;max-width:52ch;font-size:clamp(16px,1.35vw,19px);line-height:1.55;color:#B7B2AA">From the first workshop to 24/7 operations. Every service is delivered by our in-house team of 100+, building since 2016.</El>
          </El>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,210px),1fr));border-top:1px solid rgba(244,241,234,.16)">
            {bands.map((c) => (
              <El as="a" key={c.id} href={`#${c.id}`} css="display:flex;flex-direction:column;gap:10px;padding:20px clamp(0px,1.6vw,24px) 0 0;transition:color .25s" hover="color:#F04423">
                <El as="span" css={`display:flex;justify-content:space-between;${MONO};font-size:11px;letter-spacing:.12em`}>
                  <El as="span" css="color:#F04423">{c.n}</El><El as="span" css="color:#8E8A85">{c.count} &#8595;</El>
                </El>
                <El as="span" css="font-size:clamp(1.25rem,1.9vw,1.7rem);font-weight:500;letter-spacing:-.045em;line-height:1">{c.name}</El>
                <El as="span" css="font-size:14px;color:#8E8A85">{c.short}</El>
              </El>
            ))}
          </El>
        </El>

        {/* One band per discipline */}
        {bands.map((c) => (
          <El as="section" key={c.id} id={c.id} css={`scroll-margin-top:74px;background:${c.bg};color:${c.fg};padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:flex;flex-wrap:wrap;gap:clamp(32px,5vw,90px)">
              <El css="flex:1 1 300px;position:sticky;top:110px;align-self:flex-start;display:flex;flex-direction:column;gap:22px">
                <El css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:${c.muted}`}>Discipline {c.n} &#183; {c.count} services</El>
                <El as="h2" css="margin:0;font-size:clamp(3rem,7.4vw,8rem);line-height:.84;letter-spacing:-.075em;font-weight:500">{c.name}<El as="span" css="color:#F04423">.</El></El>
                <El as="p" css={`margin:0;max-width:36ch;font-size:clamp(16px,1.35vw,19px);line-height:1.5;color:${c.body}`}>{c.intro}</El>
                <El css={`aspect-ratio:16/10;overflow:hidden;background:${c.tile};margin-top:6px`}>
                  <El role="img" aria-label={`${c.name} at Mariox`} css={`width:100%;height:100%;background-position:center top;background-size:cover;background-repeat:no-repeat;background-image:url("${c.cover}")`} />
                </El>
              </El>
              <El css={`flex:2 1 460px;min-width:min(100%,320px);border-top:1px solid ${c.line}`} onMouseLeave={showFollow(null)}>
                {c.items.map((i) => (
                  <El
                    as={Link}
                    key={i.slug}
                    href={`/${i.slug}`}
                    onMouseEnter={showFollow(i.hero, i.caption)}
                    css={`display:grid;grid-template-columns:46px minmax(0,1fr) auto;gap:8px 22px;align-items:center;padding:clamp(20px,2.4vw,30px) 0;border-bottom:1px solid ${c.line};transition:color .25s,padding-left .45s cubic-bezier(.2,.8,.2,1)`}
                    hover="color:#F04423;padding-left:14px"
                  >
                    <El as="span" css={`${MONO};font-size:11.5px;color:#F04423;align-self:baseline`}>{i.n}</El>
                    <El as="span" css="display:flex;flex-direction:column;gap:8px;min-width:0">
                      <El as="span" css="font-size:clamp(1.6rem,3.4vw,3.2rem);font-weight:500;letter-spacing:-.06em;line-height:.95">{i.name}</El>
                      <El as="span" css={`font-size:15px;color:${c.muted};letter-spacing:-.01em`}>{i.tagline} &#183; {i.time}</El>
                    </El>
                    <El as="span" css={`width:46px;height:46px;border-radius:50%;border:1px solid ${c.pill};display:flex;align-items:center;justify-content:center;font-size:17px`}>&#8599;</El>
                  </El>
                ))}
              </El>
            </El>
          </El>
        ))}

        {/* 07 CTA */}
        <El as="section" css={`padding:clamp(100px,12vw,190px) ${PAD};text-align:center;border-top:1px solid rgba(244,241,234,.1)`}>
          <El css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:22px`}>Not sure which service you need?</El>
          <El as="h2" css="margin:0 auto;max-width:14ch;font-size:clamp(3rem,8.4vw,9rem);line-height:.84;letter-spacing:-.075em;font-weight:500">Start with <Em color="#F04423">a conversation.</Em></El>
          <El css="display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-top:clamp(28px,3.4vw,44px)">
            <El as={Link} href="/product-discovery#estimate" css="display:flex;align-items:center;gap:14px;background:#F04423;color:#08070A;padding:20px 28px;border-radius:999px;font-size:16px;font-weight:500;white-space:nowrap">Get a free estimate <span>&#8594;</span></El>
            <El as="a" href="tel:+919599287045" css="display:flex;align-items:center;gap:14px;border:1px solid rgba(244,241,234,.3);padding:20px 28px;border-radius:999px;font-size:16px;white-space:nowrap">+91 95992 87045</El>
          </El>
        </El>

        <El as="footer" css={`border-top:1px solid rgba(244,241,234,.12);padding:clamp(40px,5vw,72px) ${PAD} 26px;overflow:hidden`}>
          <El aria-hidden="true" css="display:flex;align-items:flex-end;gap:clamp(10px,1.6vw,26px);line-height:.74">
            <El as="span" css="width:clamp(40px,11vw,190px);height:clamp(40px,11vw,190px);background:#F04423;flex-shrink:0;margin-bottom:.06em" />
            <El as="span" css="font-size:clamp(4rem,19.5vw,22rem);font-weight:500;letter-spacing:-.08em;white-space:nowrap">MARIOX</El>
          </El>
          <El css={`display:flex;flex-wrap:wrap;justify-content:space-between;gap:16px;margin-top:26px;padding-top:18px;border-top:1px solid rgba(244,241,234,.12);${MONO};font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#8E8A85`}>
            <span>&#169; {new Date().getFullYear()} Mariox Software &#183; Since 2016</span>
            <span>Noida &#183; Bangalore &#183; Dallas &#183; Australia</span>
          </El>
        </El>
      </El>
      </Shell>
    </>
  );
}

ServicesHub.bare = true;

export async function getStaticProps() {
  const bands = cats.map((c, ci) => {
    const items = services.filter((s) => s.cat === c.id);
    const dark = ci % 2 === 1;
    const cover = c.id === 'consulting'
      ? '/assets/company/team-offsite-event.png'
      : c.id === 'teams-managed'
        ? '/assets/company/team-office-group.png'
        : (items.find((s) => s.client.key === COVER[c.id]) || items[0]).client.imgs[0];
    return {
      id: c.id, n: c.n, name: c.name, short: c.short, intro: c.intro,
      count: String(items.length).padStart(2, '0'),
      bg: dark ? '#08070A' : '#F4F1EA',
      fg: dark ? '#F4F1EA' : '#08070A',
      muted: dark ? '#8E8A85' : '#5E5A55',
      body: dark ? '#B7B2AA' : '#4A4741',
      line: dark ? 'rgba(244,241,234,.16)' : 'rgba(8,7,10,.16)',
      pill: dark ? 'rgba(244,241,234,.3)' : 'rgba(8,7,10,.3)',
      tile: dark ? '#141216' : '#E4E0D8',
      cover,
      items: items.map((s, i) => ({
        n: String(i + 1).padStart(2, '0'),
        slug: s.slug, name: s.name, tagline: s.tagline, time: s.time, hero: s.hero,
        caption: `${s.tagline} · ${s.hero.startsWith('/assets/') ? 'Mariox team' : s.client.name}`,
      })),
    };
  });
  return { props: { bands } };
}
