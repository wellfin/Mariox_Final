import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import El from '../El';
import { MONO, PAD, Em } from './ui';

// Sections the long design pages share (index, industries, work, company):
// the sticky product panels, the filterable case index, the industry tiles and
// the proof band.

export function WorkPanels({ stack, eyebrow = 'Chapter 01 — Work', title, lead }) {
  return (
    <>
      <El css={`padding:clamp(90px,11vw,170px) ${PAD} clamp(36px,4vw,60px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end`}>
        <El>
          <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:16px`}>{eyebrow}</El>
          <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.6rem,6.4vw,6.6rem);line-height:.88;letter-spacing:-.06em;font-weight:500">{title}</El>
        </El>
        <El as="p" data-rv="1" css="margin:0;max-width:42ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">{lead}</El>
      </El>
      <El>
        {stack.map((c) => (
          <El as="article" key={c.name} data-panel="1" css="position:sticky;top:0;height:100vh;min-height:620px;overflow:hidden;background:#08070A;border-top:1px solid rgba(244,241,234,.12)">
            <El data-pin="1" css="position:absolute;inset:0;transform-origin:50% 0">
              <El as="img" src={c.img} alt={c.alt} loading="lazy" css="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block" />
              <El aria-hidden="true" css="position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,7,10,.94) 0%,rgba(8,7,10,.78) 38%,rgba(8,7,10,.15) 72%),linear-gradient(to top,rgba(8,7,10,.85),rgba(8,7,10,0) 45%)" />
              <El css={`position:relative;height:100%;display:flex;flex-direction:column;justify-content:space-between;padding:clamp(96px,9vw,130px) ${PAD} clamp(28px,3.4vw,48px)`}>
                <El css={`display:flex;justify-content:space-between;gap:20px;${MONO};font-size:11.5px;letter-spacing:.14em;text-transform:uppercase`}>
                  <El as="span" css="color:#F04423">{c.sector}</El><El as="span" css="color:#B7B2AA">{c.n} / 05</El>
                </El>
                <El css="max-width:720px">
                  <El as="h3" css="margin:0;font-size:clamp(3.4rem,10vw,10rem);line-height:.82;letter-spacing:-.07em;font-weight:500">
                    {c.href ? <El as={Link} href={c.href}>{c.name}</El> : c.name}
                  </El>
                  <El as="p" css="margin:clamp(18px,2.2vw,28px) 0 0;max-width:30ch;font-size:clamp(1.15rem,1.8vw,1.6rem);line-height:1.25;letter-spacing:-.025em;text-wrap:pretty">{c.body}</El>
                  <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:20px 40px;margin-top:clamp(22px,2.8vw,36px);padding-top:20px;border-top:1px solid rgba(244,241,234,.2)">
                    <El>
                      <El css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;margin-bottom:8px`}>The system</El>
                      <El as="p" css="margin:0;font-size:14.5px;line-height:1.5;color:#D9D5CD">{c.system}</El>
                    </El>
                    <El>
                      <El css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;margin-bottom:10px`}>Stack &#183; {c.scope}</El>
                      <El css="display:flex;flex-wrap:wrap;gap:6px">
                        {c.tech.map((t) => <El as="span" key={t} css="border:1px solid rgba(244,241,234,.28);border-radius:999px;padding:6px 12px;font-size:13px;color:#F4F1EA;background:rgba(8,7,10,.4)">{t}</El>)}
                      </El>
                    </El>
                  </El>
                </El>
              </El>
            </El>
          </El>
        ))}
      </El>
    </>
  );
}

export function CaseIndex({ rows, filters, title, lead, eyebrow = 'Case index', archiveHref = '/work' }) {
  const [filter, setFilter] = useState('All');
  const follow = useRef(null);
  const pos = useRef({ x: 0, y: 0, fx: -400, fy: -400 });

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

  const shown = rows.filter((c) => filter === 'All' || c.group === filter);

  return (
    <El css={`position:relative;z-index:2;background:#08070A;padding:clamp(70px,8vw,130px) ${PAD} clamp(90px,10vw,160px)`}>
      <El aria-hidden="true" ref={follow} css="position:fixed;top:0;left:0;width:320px;height:210px;z-index:60;pointer-events:none;background:#141216 center/cover no-repeat;opacity:0;transform:translate3d(-400px,-400px,0);transition:opacity .35s;will-change:transform" />
      <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(28px,3.4vw,48px)">
        <El>
          <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:16px`}>{eyebrow}</El>
          <El as="h3" data-rv="1" css="margin:0;font-size:clamp(2.2rem,4.6vw,4.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">{title}</El>
        </El>
        <El as="p" data-rv="1" css="margin:0;max-width:42ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">{lead}</El>
      </El>
      <El css="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:22px">
        {filters.map((l) => {
          const on = filter === l;
          const count = l === 'All' ? rows.length : rows.filter((c) => c.group === l).length;
          return (
            <El as="button" type="button" key={l} onClick={() => setFilter(l)} aria-pressed={on} css={`cursor:pointer;min-height:44px;white-space:nowrap;border-radius:999px;padding:10px 18px;border:1px solid ${on ? '#F04423' : 'rgba(244,241,234,.25)'};background:${on ? '#F04423' : 'transparent'};color:${on ? '#08070A' : '#D9D5CD'};font-family:Geist,sans-serif;font-size:14px;transition:all .25s`}>
              {l} <El as="span" css="opacity:.6;margin-left:4px">{count}</El>
            </El>
          );
        })}
      </El>
      <El css="border-top:1px solid rgba(244,241,234,.16)" onMouseLeave={showFollow(null)}>
        {shown.map((c, i) => (
          <El as={Link} key={c.name} href={c.href || archiveHref} onMouseEnter={showFollow(c.img)} css="display:grid;grid-template-columns:48px minmax(0,2fr) minmax(0,1.4fr) minmax(0,1fr);gap:6px 24px;align-items:baseline;padding:clamp(14px,1.6vw,20px) 0;border-bottom:1px solid rgba(244,241,234,.16);transition:color .25s,padding-left .4s cubic-bezier(.2,.8,.2,1)" hover="color:#F04423;padding-left:14px">
            <El as="span" css={`${MONO};font-size:11px;color:#8E8A85`}>{String(i + 1).padStart(2, '0')}</El>
            <El as="span" css="font-size:clamp(1.15rem,2vw,1.8rem);font-weight:500;letter-spacing:-.045em">{c.name}</El>
            <El as="span" css="font-size:14.5px;color:#B7B2AA">{c.sector}</El>
            <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:#8E8A85;text-align:right`}>{c.scope}</El>
          </El>
        ))}
      </El>
      <El as={Link} href={archiveHref} css="display:inline-flex;align-items:center;gap:12px;margin-top:28px;border-bottom:1px solid #F04423;padding-bottom:6px;font-size:15px">Open the full archive <span>&#8594;</span></El>
    </El>
  );
}

export function IndustryTiles({ items, ctaHref = '#contact' }) {
  return (
    <El css="display:flex;flex-wrap:wrap;border-top:1px solid rgba(244,241,234,.14);border-left:1px solid rgba(244,241,234,.14)">
      {items.map((i) => (
        <El as={Link} key={i.name} href={i.href} className="mx-ind" css="flex:1 1 33.333%;min-width:min(100%,300px);position:relative;min-height:clamp(260px,26vw,360px);border-right:1px solid rgba(244,241,234,.14);border-bottom:1px solid rgba(244,241,234,.14);overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;padding:clamp(20px,2.2vw,30px);color:#F4F1EA">
          {i.img ? <El as="img" src={i.img} alt="" loading="lazy" className="mx-ind-img" css="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transform:scale(1.08);transition:opacity .6s,transform 1.2s cubic-bezier(.2,.8,.2,1)" /> : null}
          <El css={`position:relative;display:flex;justify-content:space-between;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;pointer-events:none`}>
            <span>{i.n}</span><El as="span" css="color:#F04423">&#8599;</El>
          </El>
          <El css="position:relative;pointer-events:none">
            <El as="h3" css="margin:0;font-size:clamp(2rem,3.4vw,3.2rem);line-height:.9;letter-spacing:-.06em;font-weight:500">{i.name}</El>
            <El as="p" css="margin:10px 0 0;font-size:14.5px;line-height:1.45;color:#D9D5CD">{i.what}</El>
            {i.clients ? <El css={`margin-top:12px;${MONO};font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:#8E8A85`}>{i.clients}</El> : null}
          </El>
        </El>
      ))}
      <El as="a" href={ctaHref} css="flex:999 1 33.333%;min-width:min(100%,300px);min-height:clamp(260px,26vw,360px);border-right:1px solid rgba(244,241,234,.14);border-bottom:1px solid rgba(244,241,234,.14);background:#F04423;color:#08070A;display:flex;flex-direction:column;justify-content:space-between;gap:28px;padding:clamp(20px,2.2vw,30px);transition:background .4s" hover="background:#F4F1EA;color:#08070A">
        <El css={`display:flex;justify-content:space-between;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase`}><span>Not listed?</span><span>&#8599;</span></El>
        <El>
          <El as="h3" css="margin:0;max-width:14ch;font-size:clamp(2.2rem,4.4vw,4.4rem);line-height:.9;letter-spacing:-.06em;font-weight:500">Your industry? <Em>Talk to us.</Em></El>
          <El as="p" css="margin:14px 0 0;max-width:44ch;font-size:15.5px;line-height:1.5">The engineering problems repeat across sectors: payments, scheduling, inventory, compliance, scale. Tell us yours.</El>
        </El>
      </El>
    </El>
  );
}

export const TRUST = [
  { k: 'Since', t: '2016', s: 'Ten years in business' },
  { k: 'Team', t: '100+ in-house', s: 'No freelancer network' },
  { k: 'Cloud', t: 'AWS · Azure · GCP', s: 'Certified engineers' },
  { k: 'Security', t: 'ISO 27001', s: 'Information security' },
  { k: 'Ownership', t: 'Your IP', s: 'Code and accounts in your name' },
  { k: 'NDA', t: 'On request', s: 'Before the first call' },
];

export function ProofSection({ clients, trust = TRUST, eyebrow = 'Chapter 08 — Proof' }) {
  return (
    <El as="section" id="proof" css={`position:relative;background:#08070A;padding:clamp(100px,12vw,190px) ${PAD}`}>
      <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,5vw,72px)">
        <El>
          <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:16px`}>{eyebrow}</El>
          <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.6rem,6.4vw,6.6rem);line-height:.88;letter-spacing:-.06em;font-weight:500">Certified, reviewed, <Em>retained.</Em></El>
        </El>
        <El as="p" data-rv="1" css="margin:0;max-width:42ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">The people in the pitch are the people who write the code, and everything they build belongs to you.</El>
      </El>
      <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(12px,1.4vw,20px)">
        <El data-rv="1" css="background:#F04423;color:#08070A;padding:clamp(26px,3vw,44px);display:flex;flex-direction:column;justify-content:space-between;gap:40px;min-height:340px">
          <El as="span" css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase`}>Google reviews</El>
          <El>
            <El css="font-size:clamp(5rem,10vw,9rem);font-weight:300;letter-spacing:-.08em;line-height:.8">4.8</El>
            <El css="margin-top:14px;font-size:18px;font-weight:500;letter-spacing:-.02em">&#9733;&#9733;&#9733;&#9733;&#9733; from 138 verified reviews</El>
          </El>
        </El>
        <El css="display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,180px),1fr));border-top:1px solid rgba(244,241,234,.14);border-left:1px solid rgba(244,241,234,.14);grid-column:span 2;min-width:min(100%,320px)">
          {trust.map((t) => (
            <El key={t.k + t.t} data-rv="1" css="border-right:1px solid rgba(244,241,234,.14);border-bottom:1px solid rgba(244,241,234,.14);padding:clamp(20px,2.2vw,30px);min-height:170px;display:flex;flex-direction:column;justify-content:space-between;gap:20px">
              <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>{t.k}</El>
              <El>
                <El css="font-size:clamp(1.3rem,1.9vw,1.75rem);font-weight:500;letter-spacing:-.045em;line-height:1">{t.t}</El>
                <El css="margin-top:7px;font-size:13.5px;color:#8E8A85">{t.s}</El>
              </El>
            </El>
          ))}
        </El>
      </El>
      <El css="margin-top:clamp(56px,7vw,110px)">
        <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:22px`}>Engineering partner to</El>
        <El css="display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,190px),1fr));border-top:1px solid rgba(244,241,234,.14);border-left:1px solid rgba(244,241,234,.14)">
          {clients.map((c) => (
            <El key={c} css="border-right:1px solid rgba(244,241,234,.14);border-bottom:1px solid rgba(244,241,234,.14);height:120px;display:flex;align-items:center;justify-content:center;font-size:clamp(1.2rem,1.7vw,1.5rem);font-weight:500;letter-spacing:-.045em;color:#B7B2AA;transition:color .3s,background .3s" hover="color:#08070A;background:#F4F1EA">{c}</El>
          ))}
        </El>
      </El>
    </El>
  );
}
