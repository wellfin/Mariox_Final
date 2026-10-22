import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import El from '@/components/El';
import { Seo, JsonLd } from '@/components/sections';
import Nav from '@/components/final/Nav';
import Footer from '@/components/final/Footer';
import EstimateForm from '@/components/final/EstimateForm';
import { MONO, PAD, Em, Shell, Marquee } from '@/components/final/ui';
import { ProofSection } from '@/components/final/sections';
import { useReveal } from '@/components/final/fx';
import { cases } from '@/data/final/cases';
import { clients } from '@/data/homeV4';
import { SITE_URL } from '@/data/site';

// Work hub from the design's `work.dc.html`: the portfolio browser with
// category tiles, platform filters, search, gallery/index views and a
// spotlight case.

const CATS = [
  ['all', 'All work', 'Every public product, newest thinking first'],
  ['fintech', 'Fintech', 'Payments, investing, FX and wallets'],
  ['banking', 'Digital banking', 'Accounts and servicing without a branch'],
  ['edtech', 'Edtech', 'Courses, testing and learning platforms'],
  ['ecom', 'E-commerce', 'Storefronts that survive a sale'],
  ['market', 'Marketplaces', 'Multi-seller listings and payouts'],
  ['qcom', 'Quick commerce', 'Ten-minute delivery and dispatch'],
  ['grocery', 'Grocery', 'Inventory, slots and repeat baskets'],
  ['health', 'Healthcare', 'Records, booking and clinic networks'],
  ['tele', 'Telehealth', 'Remote consults and digital care'],
  ['consumer', 'Consumer apps', 'Products judged in thirty seconds'],
  ['ondemand', 'On-demand', 'Bookings, providers and live status'],
  ['erp', 'Manufacturing & ERP', 'Plants, stock and the numbers behind them'],
];

const PLATFORMS = [['all', 'All platforms'], ['app', 'Mobile app'], ['web', 'Web'], ['admin', 'Admin & ops'], ['marketplace', 'Marketplace']];

// Masonry rhythm the design gives the gallery.
const PAT = [
  ['span 7', '16/11', '0px', '5vw'],
  ['span 5', '4/5', 'clamp(0px,8vw,140px)', '4vw'],
  ['span 4', '4/5', '0px', '3.4vw'],
  ['span 4', '4/5', 'clamp(0px,5vw,90px)', '3.4vw'],
  ['span 4', '4/5', '0px', '3.4vw'],
  ['span 5', '4/5', '0px', '4vw'],
  ['span 7', '16/11', 'clamp(0px,6vw,110px)', '5vw'],
];

const catOf = (c) => {
  const k = c.key, sec = (c.sector || '').toLowerCase();
  if (k === 'fintech') return 'fintech';
  if (k === 'banking') return 'banking';
  if (k === 'edtech') return 'edtech';
  if (k === 'ecommerce') return 'ecom';
  if (k === 'marketplace') return 'market';
  if (k === 'qcommerce') return sec.indexOf('grocery') >= 0 ? 'grocery' : 'qcom';
  if (k === 'healthcare') return sec.indexOf('digital') >= 0 ? 'tele' : 'health';
  if (k === 'erp') return 'erp';
  if (sec.indexOf('on-demand') >= 0) return 'ondemand';
  return 'consumer';
};
const n2 = (n) => String(n).padStart(2, '0');
const platOk = (c, p) => p === 'all' || (c.scope || '').toLowerCase().indexOf(p) >= 0;

export default function WorkHub() {
  const [cat, setCat] = useState('all');
  const [plat, setPlat] = useState('all');
  const [q, setQ] = useState('');
  const [view, setView] = useState('grid');
  const [shownCount, setShownCount] = useState(9);
  const follow = useRef(null);
  const pos = useRef({ x: 0, y: 0, fx: -400, fy: -400 });
  useReveal([cat, plat, view]);

  useEffect(() => {
    const onMove = (e) => { pos.current.x = e.clientX; pos.current.y = e.clientY; };
    window.addEventListener('mousemove', onMove, { passive: true });
    let raf;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const k = pos.current, f = follow.current;
      if (!f) return;
      k.fx += (k.x + 30 - k.fx) * 0.12;
      k.fy += (k.y - 105 - k.fy) * 0.12;
      f.style.transform = 'translate3d(' + k.fx + 'px,' + k.fy + 'px,0)';
    };
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMove); };
  }, []);

  const showFollow = useCallback((img) => () => {
    const f = follow.current;
    if (!f) return;
    if (!img || window.matchMedia('(pointer: coarse)').matches) { f.style.opacity = 0; return; }
    f.style.backgroundImage = 'url(' + img + ')';
    f.style.opacity = 1;
  }, []);

  const tabs = useMemo(() => CATS.filter((k) => k[0] === 'all' || cases.some((c) => catOf(c) === k[0])), []);
  const cur = tabs.find((k) => k[0] === cat) || tabs[0];
  const byCat = useMemo(() => cases.filter((c) => cur[0] === 'all' || catOf(c) === cur[0]), [cur]);
  const query = q.trim().toLowerCase();
  const list = byCat.filter((c) => platOk(c, plat) && (!query || `${c.name} ${c.sector} ${(c.stack || []).join(' ')}`.toLowerCase().indexOf(query) >= 0));
  const grid = view === 'grid';
  const spot = grid ? list.slice(0, 1) : [];
  const rest = grid ? list.slice(1) : list;
  const shown = rest.slice(0, shownCount);
  const filtered = cur[0] !== 'all' || plat !== 'all' || !!query;

  const stacks = {};
  byCat.forEach((c) => (c.stack || []).forEach((t) => { stacks[t] = (stacks[t] || 0) + 1; }));
  const topTech = Object.entries(stacks).sort((a, b) => b[1] - a[1])[0];
  const stats = [
    { v: n2(byCat.length), l: cur[0] === 'all' ? 'Products' : `In ${cur[1]}` },
    { v: n2(byCat.filter((c) => platOk(c, 'app')).length), l: 'With mobile apps' },
    { v: topTech ? topTech[0] : '—', l: 'Most-used stack' },
  ];
  const reset = () => { setCat('all'); setPlat('all'); setQ(''); setShownCount(9); };

  return (
    <>
      <Seo
        title="Our Work — 42 products designed and engineered | Mariox Software"
        description="Case studies from Mariox Software: fintech, edtech, commerce, healthcare and quick-commerce products built by our in-house team of 100+ engineers."
        canonical={`${SITE_URL}/work`}
      />
      <JsonLd
        id="work-itemlist"
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Mariox Software case studies',
          itemListElement: cases.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, url: `${SITE_URL}/work/${c.slug}` })),
        }}
      />

      <Shell>
        <Nav active="work" ctaHref="#contact" />
        <El as="main" id="top" css="position:relative;z-index:1;padding-top:74px">
          <El aria-hidden="true" ref={follow} css="position:fixed;top:0;left:0;width:320px;height:210px;z-index:60;pointer-events:none;background:#141216 center/cover no-repeat;opacity:0;transform:translate3d(-400px,-400px,0);transition:opacity .35s;will-change:transform" />

          {/* 01 Hero */}
          <El as="section" css={`position:relative;min-height:calc(100svh - 74px);display:grid;grid-template-rows:1fr auto;padding:clamp(56px,7vw,110px) ${PAD} clamp(24px,3vw,40px);overflow:hidden`}>
            <El aria-hidden="true" css="position:absolute;left:0;right:0;bottom:0;height:46%;background:linear-gradient(to top,#08070A 12%,rgba(8,7,10,0));pointer-events:none" />
            <El css="position:relative;align-self:end">
              <El css="display:flex;align-items:center;gap:12px;margin-bottom:clamp(18px,2.4vw,30px)">
                <El as="span" css="width:7px;height:7px;background:#F04423;animation:mxPulse 2.4s ease-in-out infinite" />
                <El as="span" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#B7B2AA`}>Work &#183; 300+ products shipped</El>
              </El>
              <El as="h1" css="margin:0;font-weight:500;font-size:clamp(3.4rem,11.5vw,13rem);line-height:.84;letter-spacing:-.065em">
                <El as="span" css="display:block">Selected</El>
                <El as="span" css="display:block;padding-left:clamp(0px,9vw,180px)">work,</El>
                <El as="span" css="display:block"><Em>on record</Em><El as="span" css="color:#F04423">.</El></El>
              </El>
            </El>
            <El css="position:relative;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));gap:clamp(20px,3vw,48px);align-items:end;margin-top:clamp(28px,3.6vw,52px);padding-top:clamp(18px,2.2vw,26px);border-top:1px solid rgba(244,241,234,.16)">
              <El as="p" css="margin:0;max-width:38ch;font-size:clamp(15.5px,1.25vw,18px);line-height:1.55;color:#B7B2AA;text-wrap:pretty">Products we have designed and engineered for startups and enterprises, from first release to millions of users.</El>
              <El css={`display:flex;flex-direction:column;gap:8px;${MONO};font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;color:#8E8A85`}>
                <span><El as="span" css="color:#F4F1EA">4.8 &#9733;</El> Google &#183; 138 reviews</span>
                <span>AWS &#183; Azure &#183; Google Cloud certified</span>
              </El>
              <El css="display:flex;flex-wrap:wrap;gap:10px">
                <El as="a" href="#contact" css="display:flex;align-items:center;gap:14px;background:#F04423;color:#08070A;padding:18px 24px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap;transition:background .3s" hover="background:#F4F1EA;color:#08070A">Start a project <span>&#8594;</span></El>
                <El as="a" href="#work" css="display:flex;align-items:center;gap:14px;border:1px solid rgba(244,241,234,.3);padding:18px 24px;border-radius:999px;font-size:15px;white-space:nowrap;transition:border-color .3s" hover="border-color:#F4F1EA;color:#F4F1EA">Explore &#8595;</El>
              </El>
            </El>
          </El>

          <Marquee items={clients} seconds={52} border="top" />

          {/* 03 Portfolio */}
          <El as="section" id="work" css="position:relative;background:#08070A;padding:clamp(80px,9vw,140px) 0 clamp(90px,10vw,160px)">
            <El css={`padding:0 ${PAD};display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(28px,3.4vw,44px)`}>
              <El>
                <El data-rv="1" css={`${MONO};letter-spacing:.14em;text-transform:uppercase;font-size:11.5px;color:#8E8A85;margin-bottom:18px;display:flex;align-items:center;gap:10px`}>
                  <El as="span" css="width:8px;height:8px;background:#F04423" />Portfolio &#183; {cases.length} products &#183; {tabs.length - 1} categories
                </El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(3rem,8vw,8.4rem);line-height:.84;letter-spacing:-.07em;font-weight:500">Work, <Em>by world.</Em></El>
              </El>
              <El data-rv="1" css="display:flex;flex-direction:column;gap:22px">
                <El as="p" css="margin:0;max-width:42ch;font-size:clamp(16px,1.3vw,18px);line-height:1.5;color:#B7B2AA">Pick a category to step inside it. Every product below was designed and engineered by Mariox, from first sprint to the version people use today.</El>
                <El css="display:flex;gap:clamp(20px,3vw,44px)">
                  {stats.map((x) => (
                    <El key={x.l}>
                      <El css="font-size:clamp(2rem,3.4vw,3.2rem);font-weight:300;letter-spacing:-.07em;line-height:1">{x.v}</El>
                      <El css={`${MONO};letter-spacing:.14em;text-transform:uppercase;font-size:10.5px;color:#8E8A85;margin-top:6px`}>{x.l}</El>
                    </El>
                  ))}
                </El>
              </El>
            </El>

            {/* Category tiles */}
            <El role="tablist" aria-label="Categories" className="mx-ptrack" css={`display:flex;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;padding:0 ${PAD} 18px`}>
              {tabs.map((k, i) => {
                const on = cur[0] === k[0];
                const first = k[0] === 'all' ? cases[0] : cases.find((c) => catOf(c) === k[0]);
                const count = n2(k[0] === 'all' ? cases.length : cases.filter((c) => catOf(c) === k[0]).length);
                return (
                  <El as="button" role="tab" type="button" key={k[0]} aria-selected={on} onClick={() => { setCat(k[0]); setPlat('all'); setShownCount(9); }} css={`flex:0 0 clamp(190px,17vw,250px);height:clamp(250px,24vw,330px);scroll-snap-align:start;position:relative;overflow:hidden;cursor:pointer;border:0;padding:0;text-align:left;background:#141216;color:#F4F1EA;font-family:Geist,sans-serif;outline:2px solid ${on ? '#F04423' : 'transparent'};outline-offset:-2px;transition:outline-color .3s`}>
                    <El as="span" aria-hidden="true" css={`position:absolute;inset:0;background-color:#141216;background-size:cover;background-position:center top;background-image:${first ? `url("${first.img}")` : 'none'};filter:grayscale(${on ? 0 : 0.85});transform:scale(${on ? 1.08 : 1});transition:transform 1s cubic-bezier(.2,.8,.2,1),filter .6s`} />
                    <El as="span" aria-hidden="true" css={`position:absolute;inset:0;background:${on ? 'linear-gradient(to top,rgba(240,68,35,.92) 0%,rgba(240,68,35,.35) 55%,rgba(8,7,10,.2) 100%)' : 'linear-gradient(to top,rgba(8,7,10,.95) 0%,rgba(8,7,10,.55) 55%,rgba(8,7,10,.35) 100%)'};transition:background .4s`} />
                    <El as="span" css={`position:absolute;top:16px;left:16px;right:16px;display:flex;justify-content:space-between;${MONO};letter-spacing:.14em;text-transform:uppercase;font-size:10.5px`}>
                      <span>{n2(i)}</span><El as="span" css="background:#08070A;padding:4px 8px">{count}</El>
                    </El>
                    <El as="span" css="position:absolute;left:16px;right:16px;bottom:16px;display:flex;flex-direction:column;gap:6px">
                      <El as="span" css="font-size:clamp(1.3rem,1.8vw,1.7rem);font-weight:500;letter-spacing:-.045em;line-height:1">{k[1]}</El>
                      <El as="span" css="font-size:13px;line-height:1.35;color:#D9D5CD">{k[2]}</El>
                    </El>
                  </El>
                );
              })}
            </El>

            {/* Sticky filter bar */}
            <El css="position:sticky;top:64px;z-index:6;background:rgba(8,7,10,.9);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-top:1px solid rgba(244,241,234,.12);border-bottom:1px solid rgba(244,241,234,.12);margin:clamp(18px,2.4vw,30px) 0 clamp(28px,3.4vw,48px)">
              <El css={`padding:12px ${PAD};display:flex;flex-wrap:wrap;gap:12px 22px;align-items:center;justify-content:space-between`}>
                <El css="display:flex;flex-wrap:wrap;gap:6px;align-items:center">
                  <El as="span" css="font-size:clamp(1.05rem,1.4vw,1.3rem);font-weight:500;letter-spacing:-.04em;margin-right:12px">{cur[1]}</El>
                  {PLATFORMS.map((p) => {
                    const on = plat === p[0];
                    const n = byCat.filter((c) => platOk(c, p[0])).length;
                    const show = p[0] === 'all' || n > 0 || on;
                    return (
                      <El as="button" type="button" key={p[0]} onClick={() => { setPlat(p[0]); setShownCount(9); }} css={`display:${show ? 'inline-flex' : 'none'};cursor:pointer;min-height:38px;white-space:nowrap;align-items:center;border-radius:999px;padding:7px 14px;border:1px solid ${on ? '#F4F1EA' : 'rgba(244,241,234,.25)'};background:${on ? '#F4F1EA' : 'transparent'};color:${on ? '#08070A' : '#D9D5CD'};font-family:Geist,sans-serif;font-size:13px;transition:all .25s`}>
                        {p[1]}{p[0] === 'all' ? '' : ` · ${n}`}
                      </El>
                    );
                  })}
                </El>
                <El css="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
                  <El as="label" css="display:flex;align-items:center;gap:10px;border:1px solid rgba(244,241,234,.22);border-radius:999px;padding:0 16px;min-height:40px;min-width:min(100%,210px)">
                    <El as="span" aria-hidden="true" css="width:9px;height:9px;border:1.5px solid #8E8A85;border-radius:50%" />
                    <input type="search" value={q} onChange={(e) => { setQ(e.target.value); setShownCount(9); }} placeholder="Search client or tech" aria-label="Search work" style={{ flex: 1, minWidth: 0, background: 'transparent', border: 0, outline: 'none', color: '#F4F1EA', fontFamily: 'Geist, sans-serif', fontSize: 14, padding: '9px 0' }} />
                  </El>
                  <El role="group" aria-label="View" css="display:flex;border:1px solid rgba(244,241,234,.22);border-radius:999px;padding:3px">
                    {[['grid', 'Gallery'], ['list', 'Index']].map((v) => {
                      const on = view === v[0];
                      return <El as="button" type="button" key={v[0]} onClick={() => setView(v[0])} css={`cursor:pointer;min-height:34px;border:0;border-radius:999px;padding:6px 14px;background:${on ? '#F4F1EA' : 'transparent'};color:${on ? '#08070A' : '#D9D5CD'};font-family:Geist,sans-serif;font-size:13px`}>{v[1]}</El>;
                    })}
                  </El>
                </El>
              </El>
            </El>

            <El css={`padding:0 ${PAD}`}>
              <El css="display:flex;justify-content:space-between;gap:16px;align-items:baseline;margin-bottom:22px">
                <El as="span" css={`${MONO};letter-spacing:.14em;text-transform:uppercase;font-size:11px;color:#8E8A85`}>
                  {list.length ? `${list.length} ${list.length === 1 ? 'product' : 'products'}${filtered ? ' match' : ' in the portfolio'}` : 'No products match'}
                </El>
                {filtered ? <El as="button" type="button" onClick={reset} css="cursor:pointer;background:transparent;border:0;color:#F04423;font-family:Geist,sans-serif;font-size:14px;border-bottom:1px solid #F04423;padding:0 0 3px">Clear filters</El> : null}
              </El>

              {/* Spotlight */}
              {spot.map((c) => {
                const shots = (c.gallery && c.gallery.length ? c.gallery : [c.img]).slice(0, 4);
                return (
                  <El as="article" key={c.slug} css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:clamp(24px,3.4vw,56px);align-items:stretch;padding-bottom:clamp(40px,5vw,72px);margin-bottom:clamp(40px,5vw,72px);border-bottom:1px solid rgba(244,241,234,.14)">
                    <El as={Link} href={`/work/${c.slug}`} css="display:grid;grid-template-columns:3fr 1fr;grid-template-rows:repeat(3,minmax(0,1fr));gap:8px;min-height:clamp(300px,36vw,520px)">
                      {shots.map((p, i) => (
                        <El key={p} css={`grid-row:${i === 0 ? '1 / span 3' : 'auto'};overflow:hidden;background:#141216`}>
                          <El role="img" aria-label={`${c.name} screen`} css={`width:100%;height:100%;background-color:#141216;background-size:cover;background-position:center top;background-image:url("${p}");transition:transform 1.2s cubic-bezier(.2,.8,.2,1)`} hover="transform:scale(1.05)" />
                        </El>
                      ))}
                    </El>
                    <El css="display:flex;flex-direction:column;gap:clamp(18px,2.2vw,26px);justify-content:center">
                      <El css={`display:flex;gap:10px;flex-wrap:wrap;${MONO};letter-spacing:.14em;text-transform:uppercase;font-size:10.5px`}>
                        <El as="span" css="background:#F04423;color:#08070A;padding:6px 10px">Spotlight</El>
                        <El as="span" css="border:1px solid rgba(244,241,234,.25);padding:6px 10px;color:#D9D5CD">{c.sector}</El>
                        <El as="span" css="border:1px solid rgba(244,241,234,.25);padding:6px 10px;color:#D9D5CD">{c.scope}</El>
                      </El>
                      <El as="h3" css="margin:0;font-size:clamp(3rem,6.4vw,6.4rem);line-height:.84;letter-spacing:-.07em;font-weight:500">{c.name}</El>
                      <El as="p" css="margin:0;font-size:clamp(1.25rem,2vw,1.8rem);line-height:1.18;letter-spacing:-.035em;text-wrap:pretty"><Em>{c.proposition}</Em></El>
                      <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:18px;border-top:1px solid rgba(244,241,234,.16);padding-top:18px">
                        {(c.chapters || []).slice(0, 2).map((h) => (
                          <El key={h.label}>
                            <El css={`${MONO};letter-spacing:.14em;text-transform:uppercase;font-size:10.5px;color:#F04423;margin-bottom:8px`}>{h.label}</El>
                            <El as="p" css="margin:0;font-size:14.5px;line-height:1.5;color:#B7B2AA">{h.body}</El>
                          </El>
                        ))}
                      </El>
                      <El css="display:flex;flex-wrap:wrap;gap:6px">
                        {(c.stack || []).slice(0, 5).map((t) => <El as="span" key={t} css="border:1px solid rgba(244,241,234,.22);border-radius:999px;padding:6px 12px;font-size:13px;color:#D9D5CD">{t}</El>)}
                      </El>
                      <El as={Link} href={`/work/${c.slug}`} css="align-self:flex-start;display:flex;align-items:center;gap:14px;background:#F04423;color:#08070A;padding:16px 22px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap;transition:background .3s" hover="background:#F4F1EA;color:#08070A">Read the full story <span>&#8594;</span></El>
                    </El>
                  </El>
                );
              })}

              {/* Gallery */}
              {grid && shown.length ? (
                <El css="display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:clamp(40px,4.4vw,64px) clamp(14px,1.6vw,24px)">
                  {shown.map((c, i) => {
                    const p = PAT[i % PAT.length];
                    return (
                      <El as={Link} key={c.slug} href={`/work/${c.slug}`} css={`grid-column:${p[0]};margin-top:${p[2]};display:flex;flex-direction:column;gap:16px;color:#F4F1EA`}>
                        <El className="mx-card" css={`position:relative;aspect-ratio:${p[1]};overflow:hidden;background:#141216`}>
                          <El role="img" aria-label={`${c.name} product screen`} css={`position:absolute;inset:0;background-color:#141216;background-position:center top;background-size:cover;background-repeat:no-repeat;background-image:url("${c.img}")`} />
                          <El className="mx-card-veil" css="position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;gap:12px;padding:clamp(18px,2vw,28px);background:linear-gradient(to top,rgba(240,68,35,.96) 0%,rgba(240,68,35,.9) 55%,rgba(240,68,35,0) 100%);color:#08070A;opacity:0;transform:translateY(14px);transition:opacity .45s cubic-bezier(.2,.8,.2,1),transform .55s cubic-bezier(.2,.8,.2,1)">
                            <El as="p" css="margin:0;max-width:32ch;font-size:clamp(1.05rem,1.5vw,1.35rem);line-height:1.25;letter-spacing:-.03em;font-weight:500">{c.proposition}</El>
                            <El as="span" css={`${MONO};letter-spacing:.14em;text-transform:uppercase;font-size:10.5px`}>{(c.stack || []).slice(0, 4).join(' · ')}</El>
                          </El>
                          <El as="span" css={`position:absolute;top:14px;left:14px;${MONO};letter-spacing:.14em;text-transform:uppercase;font-size:10px;background:#08070A;color:#F4F1EA;padding:6px 10px;pointer-events:none;white-space:nowrap`}>
                            {n2(i + 1)} &#183; {(CATS.find((k) => k[0] === catOf(c)) || CATS[10])[1]}
                          </El>
                        </El>
                        <El css="display:flex;justify-content:space-between;gap:16px;align-items:baseline">
                          <El as="h3" css={`margin:0;font-size:clamp(1.6rem,${p[3]},3.6rem);line-height:.92;letter-spacing:-.06em;font-weight:500`}>{c.name}</El>
                          <El as="span" css={`${MONO};letter-spacing:.14em;text-transform:uppercase;font-size:10px;color:#8E8A85;text-align:right`}>{c.scope}</El>
                        </El>
                        <El as="span" css="font-size:14.5px;color:#B7B2AA;margin-top:-8px">{c.sector}</El>
                      </El>
                    );
                  })}
                </El>
              ) : null}

              {/* Index view */}
              {!grid && shown.length ? (
                <El css="border-top:1px solid rgba(244,241,234,.16)" onMouseLeave={showFollow(null)}>
                  {shown.map((c, i) => (
                    <El as={Link} key={c.slug} href={`/work/${c.slug}`} onMouseEnter={showFollow(c.img)} css="display:grid;grid-template-columns:48px minmax(0,1.6fr) minmax(0,1.2fr) minmax(0,1fr) minmax(0,1.6fr);gap:6px 24px;align-items:baseline;padding:clamp(14px,1.6vw,20px) 0;border-bottom:1px solid rgba(244,241,234,.16);transition:color .25s,padding-left .4s cubic-bezier(.2,.8,.2,1)" hover="color:#F04423;padding-left:14px">
                      <El as="span" css={`${MONO};font-size:11px;color:#8E8A85`}>{n2(i + 1)}</El>
                      <El as="span" css="font-size:clamp(1.15rem,2vw,1.8rem);font-weight:500;letter-spacing:-.045em">{c.name}</El>
                      <El as="span" css="font-size:14.5px;color:#B7B2AA">{c.sector}</El>
                      <El as="span" css={`${MONO};letter-spacing:.14em;text-transform:uppercase;font-size:10.5px;color:#8E8A85`}>{c.scope}</El>
                      <El as="span" css="font-size:14px;color:#8E8A85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{(c.stack || []).slice(0, 4).join(' · ')}</El>
                    </El>
                  ))}
                </El>
              ) : null}

              {!list.length ? (
                <El css="padding:clamp(48px,6vw,90px) 0;text-align:center;display:flex;flex-direction:column;gap:16px;align-items:center">
                  <El css="font-size:clamp(1.6rem,3vw,2.6rem);font-weight:500;letter-spacing:-.05em">No public match yet.</El>
                  <El as="p" css="margin:0;max-width:40ch;font-size:15.5px;line-height:1.5;color:#B7B2AA">Not every project can be shown. Tell us what you are building and we will share relevant work under NDA.</El>
                  <El as="a" href="#contact" css="display:flex;align-items:center;gap:12px;background:#F04423;color:#08070A;padding:15px 22px;border-radius:999px;font-size:15px;font-weight:500">Ask for related work &#8594;</El>
                </El>
              ) : null}

              {rest.length > shown.length ? (
                <El css="display:flex;flex-direction:column;align-items:center;gap:14px;margin-top:clamp(48px,6vw,90px)">
                  <El as="span" css={`${MONO};letter-spacing:.14em;text-transform:uppercase;font-size:10.5px;color:#8E8A85`}>{shown.length + spot.length} of {list.length} shown</El>
                  <El css="width:min(100%,280px);height:2px;background:rgba(244,241,234,.14)">
                    <El css={`height:100%;background:#F04423;width:${Math.round(((shown.length + spot.length) / Math.max(1, list.length)) * 100)}%`} />
                  </El>
                  <El as="button" type="button" onClick={() => setShownCount((n) => n + 9)} css="cursor:pointer;display:flex;align-items:center;gap:12px;border:1px solid rgba(244,241,234,.3);background:transparent;color:#F4F1EA;padding:16px 26px;border-radius:999px;font-family:Geist,sans-serif;font-size:15px;transition:background .3s,color .3s" hover="background:#F4F1EA;color:#08070A">Show more work &#8595;</El>
                </El>
              ) : null}
            </El>
          </El>

          <ProofSection clients={clients} eyebrow="Proof" />

          {/* Contact */}
          <El as="section" id="contact" css={`position:relative;padding:clamp(100px,11vw,170px) ${PAD};background:#0E0D11;border-top:1px solid rgba(244,241,234,.08)`}>
            <El css="position:relative;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,400px),1fr));gap:clamp(36px,5vw,90px);align-items:end">
              <El>
                <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#B7B2AA;margin-bottom:24px`}>Start</El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(3.2rem,9vw,10rem);line-height:.84;letter-spacing:-.07em;font-weight:500">Have an idea <Em>worth building?</Em></El>
                <El data-rv="1" css="display:flex;flex-wrap:wrap;gap:10px 28px;margin-top:clamp(28px,3.4vw,44px);font-size:16px">
                  <El as="a" href="mailto:admin@marioxsoftware.com" css="border-bottom:1px solid rgba(244,241,234,.4);padding-bottom:4px">admin@marioxsoftware.com</El>
                  <El as="a" href="tel:+919599287045" css="border-bottom:1px solid rgba(244,241,234,.4);padding-bottom:4px">+91 95992 87045</El>
                </El>
              </El>
              <El data-rv="1"><EstimateForm id="work-estimate" title="Tell us about the project" source="work-hub" dark /></El>
            </El>
          </El>

          <Footer />
        </El>
      </Shell>
    </>
  );
}

WorkHub.bare = true;
