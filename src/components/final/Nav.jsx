import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import El from '../El';
import { MONO } from './ui';
import { MENUS, MENU_ORDER, activeMenuFor } from '@/data/final/navMenus';

// The shared header from the design's `Mariox Nav`: six mega menus, each with a
// group rail on the left, the group's items in a grid and a feature card under
// them that follows whatever the pointer is on. Below 900px the same menus
// become an accordion sheet.
//
// Everything the menus show comes from src/data/final/navMenus.js, so adding a
// service, case study or concept is enough to make it appear here.

const ORANGE = '#F04423';
const pad2 = (n) => String(n).padStart(2, '0');

export default function Nav({ active = '', ctaHref = '/contact', ctaLabel }) {
  const [open, setOpen] = useState(null);
  const [sub, setSub] = useState({});
  const [hov, setHov] = useState({});
  const [mob, setMob] = useState(false);
  const [mobSec, setMobSec] = useState(null);
  const [wide, setWide] = useState(true);
  const [mid, setMid] = useState(true);
  const [roomy, setRoomy] = useState(true);
  const closeTimer = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)');
    const mqMid = window.matchMedia('(min-width: 1180px)');
    const mqRoomy = window.matchMedia('(min-width: 1360px)');
    const on = () => {
      setWide(mq.matches);
      setMid(mqMid.matches);
      setRoomy(mqRoomy.matches);
      setOpen(null);
      setMob(false);
    };
    on();
    mq.addEventListener('change', on);
    mqMid.addEventListener('change', on);
    mqRoomy.addEventListener('change', on);
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(null); setMob(false); } };
    window.addEventListener('keydown', onKey);
    return () => {
      mq.removeEventListener('change', on);
      mqMid.removeEventListener('change', on);
      mqRoomy.removeEventListener('change', on);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  // The mobile sheet owns the scroll while it is open.
  useEffect(() => {
    if (!mob) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [mob]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // A short delay on leaving stops the panel flickering shut between rows.
  const openMenu = useCallback((id) => () => {
    clearTimeout(closeTimer.current);
    setOpen((cur) => (cur === id ? cur : id));
  }, []);
  const toggleMenu = useCallback((id) => () => {
    clearTimeout(closeTimer.current);
    setOpen((cur) => (cur === id ? null : id));
  }, []);
  const leave = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 160);
  }, []);
  const keep = useCallback(() => clearTimeout(closeTimer.current), []);

  const pickSub = useCallback((m, k) => () => {
    setSub((s) => (s[m] === k ? s : { ...s, [m]: k }));
    setHov((h) => (h[m] == null ? h : { ...h, [m]: null }));
  }, []);
  const pickHov = useCallback((m, k) => () => {
    setHov((h) => (h[m] === k ? h : { ...h, [m]: k }));
  }, []);

  const id = open && MENUS[open] ? open : null;
  const activeKey = activeMenuFor(active);

  // The open panel: which group is selected, its items, and the feature card.
  const panel = useMemo(() => {
    if (!id) return null;
    const d = MENUS[id];
    const subKey = sub[id] || (d.rail.find((r) => r.key) || {}).key;
    const body = d.body(subKey);
    const hovKey = hov[id];
    const hovItem = body.items.find((i) => i.key === hovKey)
      || (d.hoverFeat ? body.items.find((i) => i.img) : null);
    const feat = (hovItem && hovItem.img && d.hoverFeat)
      ? { img: hovItem.img, kicker: hovItem.kicker || d.hoverFeat, title: hovItem.name, text: hovItem.tag, href: hovItem.href, cta: hovItem.cta || d.cta }
      : (d.featFor ? d.featFor(subKey) : d.feat);
    return {
      label: d.label,
      desc: d.desc || '',
      kicker: `${d.label} · ${body.items.length}`,
      title: body.title,
      overHref: body.over || d.over,
      footLabel: d.foot[0],
      footHref: d.foot[1],
      subKey,
      hovKey,
      rail: d.rail,
      items: body.items,
      feat,
    };
  }, [id, sub, hov]);

  // The accordion sheet shows the same menus as flat link groups.
  const mobileGroups = useCallback((k) => {
    const d = MENUS[k];
    if (k === 'company') return [{ h: 'Company', links: d.rail.map((r) => ({ t: r.label, href: r.href })) }];
    if (k === 'hire') return [{ h: 'Roles', links: d.rail.map((r) => ({ t: `${r.label} engineers`, href: r.href })) }];
    if (k === 'work') {
      return d.rail.map((r) => {
        const items = d.body(r.key).items;
        const real = items.filter((i) => !/^p-/.test(i.key));
        const ideas = items.filter((i) => /^p-/.test(i.key));
        return {
          h: r.label,
          links: real.slice(0, ideas.length ? 3 : 4).map((i) => ({ t: i.name, href: i.href }))
            .concat(ideas.slice(0, 1).map((i) => ({ t: `${i.name} (idea)`, href: i.href })))
            .concat(ideas.length > 1 ? [{ t: `+ ${ideas.length - 1} more ideas →`, href: '/concepts' }] : []),
        };
      }).concat([{ h: '', links: [{ t: `${d.foot[0]} →`, href: d.foot[1] }] }]);
    }
    return d.rail.map((r) => ({ h: r.label, links: d.body(r.key).items.map((i) => ({ t: i.name, href: i.href })) }))
      .concat([{ h: '', links: [{ t: `${d.foot[0]} →`, href: d.foot[1] }] }]);
  }, []);

  const cta = ctaLabel || (mid ? 'Get a free estimate' : 'Free estimate');

  return (
    <El as="header" onMouseLeave={leave} css="position:fixed;top:0;left:0;right:0;z-index:90;font-family:Geist,'Helvetica Neue',Helvetica,sans-serif;color:#F4F1EA">
      <El css="height:70px;display:flex;align-items:center;justify-content:space-between;gap:clamp(10px,1.4vw,20px);padding:0 clamp(16px,3vw,48px);background:rgba(8,7,10,.92);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid rgba(244,241,234,.08)">
        <El as={Link} href="/" aria-label="Mariox Software home" css="display:flex;align-items:center;gap:10px;color:#F4F1EA;flex-shrink:0">
          <El as="span" css="width:18px;height:18px;background:#F04423" />
          <El as="span" css="font-size:17px;font-weight:600;letter-spacing:-.04em">MARIOX</El>
          <El as="span" css={`display:${roomy ? 'inline' : 'none'};${MONO};font-size:10px;letter-spacing:.16em;color:#8E8A85`}>SOFTWARE</El>
        </El>

        <El as="nav" aria-label="Main" css={`display:${wide ? 'flex' : 'none'};align-items:stretch;height:100%;gap:clamp(0px,.6vw,8px)`}>
          {MENU_ORDER.map((k) => {
            const isOpen = id === k;
            const hot = isOpen || activeKey === k;
            return (
              <El
                as="button"
                type="button"
                key={k}
                onMouseEnter={openMenu(k)}
                onClick={toggleMenu(k)}
                aria-expanded={isOpen}
                aria-haspopup="true"
                css={`position:relative;height:100%;display:flex;align-items:center;gap:7px;white-space:nowrap;flex-shrink:0;background:transparent;border:0;cursor:pointer;padding:0 clamp(7px,.75vw,14px);color:${hot ? '#F4F1EA' : '#C9C5BD'};font-family:Geist,sans-serif;font-size:${mid ? '14.5px' : '13.5px'};letter-spacing:-.01em;transition:color .2s`}
              >
                {MENUS[k].label}
                <El as="span" aria-hidden="true" css={`display:inline-block;width:7px;height:7px;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;transform:translateY(${isOpen ? '2px' : '-2px'}) rotate(${isOpen ? '-135deg' : '45deg'});transition:transform .25s`} />
                <El as="span" css={`position:absolute;left:clamp(8px,.9vw,14px);right:clamp(8px,.9vw,14px);bottom:0;height:2px;background:#F04423;transform:scaleX(${hot ? 1 : 0});transform-origin:left;transition:transform .3s cubic-bezier(.2,.8,.2,1)`} />
              </El>
            );
          })}
        </El>

        <El css="display:flex;align-items:center;gap:10px">
          <El as={Link} href={ctaHref} css={`display:${wide ? 'flex' : 'none'};align-items:center;gap:9px;background:#F04423;color:#08070A;padding:11px 18px;border-radius:999px;font-size:14px;font-weight:500;white-space:nowrap`}>{cta} <span>&#8594;</span></El>
          <El as="button" type="button" onClick={() => { setMob((m) => !m); setOpen(null); }} aria-label="Menu" aria-expanded={mob} css={`display:${wide ? 'none' : 'flex'};width:44px;height:44px;border-radius:50%;border:1px solid rgba(244,241,234,.25);background:transparent;color:#F4F1EA;cursor:pointer;align-items:center;justify-content:center;font-size:18px`}>{mob ? '×' : '≡'}</El>
        </El>
      </El>

      {panel && wide ? (
        <El onMouseEnter={keep} role="region" aria-label={panel.label} css="position:absolute;left:0;right:0;top:70px;background:#FFFFFF;color:#08070A;border-bottom:1px solid #E6E2DA;box-shadow:0 40px 80px rgba(8,7,10,.35)">
          <El css={`max-width:1280px;margin:0 auto;display:grid;grid-template-columns:${mid ? '300px' : '250px'} minmax(0,1fr);grid-template-rows:minmax(0,1fr);max-height:calc(100vh - 70px);overflow:hidden`}>

            {/* Group rail */}
            <El css="background:#F7F5F0;border-right:1px solid #ECE8E0;padding:28px 18px 24px clamp(18px,2.6vw,40px);display:flex;flex-direction:column;gap:18px;overflow:auto;min-height:0">
              <El css="display:flex;flex-direction:column;gap:6px;padding-right:8px">
                <El as="span" css="font-size:28px;font-weight:600;letter-spacing:-.045em;line-height:1">{panel.label}</El>
                <El as="span" css="font-size:15px;line-height:1.5;color:#6B6760">{panel.desc}</El>
              </El>
              <El css="display:flex;flex-direction:column;gap:2px">
                {panel.rail.map((r) => {
                  const on = r.key && r.key === panel.subKey;
                  return (
                    <El as={Link} key={r.key || r.label} href={r.href} onMouseEnter={r.key ? pickSub(id, r.key) : undefined} onFocus={r.key ? pickSub(id, r.key) : undefined} css={`position:relative;display:flex;justify-content:space-between;align-items:center;gap:10px;padding:12px 12px 12px 16px;border-radius:8px;background:${on ? '#FFFFFF' : 'transparent'};color:${on ? '#08070A' : '#55514B'};font-size:16.5px;font-weight:500;letter-spacing:-.015em;line-height:1.25;transition:background .2s,color .2s`}>
                      <El as="span" css={`position:absolute;left:0;top:9px;bottom:9px;width:3px;border-radius:2px;background:#F04423;transform:scaleY(${on ? 1 : 0});transition:transform .25s`} />
                      <El as="span">{r.label}</El>
                      <El as="span" css={`${MONO};font-size:12px;color:${on ? ORANGE : '#A29E97'}`}>{r.right}</El>
                    </El>
                  );
                })}
              </El>
              <El as={Link} href={panel.footHref} css="margin-top:auto;display:flex;justify-content:space-between;align-items:center;gap:10px;padding:12px 14px;border-radius:999px;border:1px solid #D9D4CA;background:#FFFFFF;font-size:15px;font-weight:500;color:#08070A;transition:border-color .2s,color .2s" hover="border-color:#F04423;color:#F04423">
                {panel.footLabel}<span>&#8594;</span>
              </El>
            </El>

            {/* Items + feature card */}
            <El css="display:flex;flex-direction:column;min-height:0;min-width:0">
              <El css="padding:26px clamp(20px,2.6vw,40px) 18px;display:flex;flex-direction:column;gap:18px;overflow:auto;min-height:0;flex:1">
                <El css="display:flex;justify-content:space-between;align-items:baseline;gap:16px">
                  <El css="display:flex;flex-direction:column;gap:4px;min-width:0">
                    <El as="span" css={`${MONO};font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#F04423`}>{panel.kicker}</El>
                    <El as="span" css="font-size:23px;font-weight:600;letter-spacing:-.035em">{panel.title}</El>
                  </El>
                  <El as={Link} href={panel.overHref} css="flex-shrink:0;font-size:15px;font-weight:500;color:#6B6760;white-space:nowrap;border-bottom:1px solid #CFC9BE;padding-bottom:2px">Overview &#8599;</El>
                </El>

                <El css={`display:grid;grid-template-columns:${mid ? 'repeat(3,minmax(0,1fr))' : 'repeat(2,minmax(0,1fr))'};gap:6px 16px`}>
                  {panel.items.map((i, x) => {
                    const on = i.key === panel.hovKey;
                    const external = /^(mailto:|tel:|https?:)/.test(i.href);
                    const inner = (
                      <>
                        {i.thumb ? (
                          <El as="span" css={`width:56px;height:56px;border-radius:10px;flex-shrink:0;background-color:${i.logo ? '#FFFFFF' : '#EDEAE3'};border:${i.logo ? '1px solid #E6E2DA' : '0'};background-size:${i.logo ? '60%' : 'cover'};background-repeat:no-repeat;background-position:center;background-image:url("${i.thumb}")`} />
                        ) : (
                          <El as="span" css={`width:34px;height:34px;border-radius:8px;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:${on ? ORANGE : '#F3F0EA'};color:${on ? '#FFFFFF' : '#8E8A85'};${MONO};font-size:12px;transition:background .2s,color .2s`}>{pad2(x + 1)}</El>
                        )}
                        <El as="span" css="display:flex;flex-direction:column;gap:3px;min-width:0;padding-top:2px">
                          <El as="span" css={`font-size:17px;font-weight:500;letter-spacing:-.02em;line-height:1.25;color:${on ? '#C2310F' : '#08070A'}`}>{i.name}</El>
                          <El as="span" css="font-size:14.5px;line-height:1.45;color:#6E6A63;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">{i.tag}</El>
                        </El>
                      </>
                    );
                    const css = `display:flex;gap:12px;align-items:flex-start;padding:13px 14px;border-radius:10px;background:${on ? '#F7F5F0' : 'transparent'};color:#08070A;transition:background .2s`;
                    return external
                      ? <El as="a" key={i.key} href={i.href} onMouseEnter={pickHov(id, i.key)} onFocus={pickHov(id, i.key)} css={css}>{inner}</El>
                      : <El as={Link} key={i.key} href={i.href} onMouseEnter={pickHov(id, i.key)} onFocus={pickHov(id, i.key)} css={css}>{inner}</El>;
                  })}
                </El>
              </El>

              {panel.feat ? (
                <El css="flex-shrink:0;padding:0 clamp(20px,2.6vw,40px) 20px">
                  <El as={Link} href={panel.feat.href} css="display:flex;align-items:center;gap:18px;padding:12px;border-radius:14px;background:#08070A;color:#F4F1EA">
                    <El as="span" css={`display:${mid ? 'block' : 'none'};width:150px;height:92px;border-radius:9px;flex-shrink:0;background-color:#1A181C;background-size:cover;background-position:center;background-image:url("${panel.feat.img}")`} />
                    <El as="span" css="display:flex;flex-direction:column;gap:4px;min-width:0;flex:1">
                      <El as="span" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#F04423`}>{panel.feat.kicker}</El>
                      <El as="span" css="font-size:19px;font-weight:600;letter-spacing:-.03em;line-height:1.2">{panel.feat.title}</El>
                      <El as="span" css="font-size:15px;line-height:1.4;color:#A9A49C;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{panel.feat.text}</El>
                    </El>
                    <El as="span" css="flex-shrink:0;display:flex;align-items:center;gap:8px;background:#F04423;color:#08070A;padding:11px 16px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap;margin-right:6px">{panel.feat.cta} &#8594;</El>
                  </El>
                </El>
              ) : null}
            </El>
          </El>
        </El>
      ) : null}

      {mob ? (
        <El css="position:fixed;left:0;right:0;top:70px;bottom:0;background:#FFFFFF;color:#08070A;overflow:auto;padding:6px 20px 32px;display:flex;flex-direction:column">
          {MENU_ORDER.map((k) => {
            const sectionOpen = mobSec === k;
            return (
              <El key={k} css="border-bottom:1px solid #ECE8E0">
                <El as="button" type="button" onClick={() => setMobSec(sectionOpen ? null : k)} aria-expanded={sectionOpen} css={`width:100%;display:flex;justify-content:space-between;align-items:center;min-height:58px;background:transparent;border:0;cursor:pointer;font-family:Geist,sans-serif;font-size:21px;font-weight:500;letter-spacing:-.035em;color:${activeKey === k ? ORANGE : '#08070A'};text-align:left`}>
                  {MENUS[k].label}<El as="span" css="font-size:22px;color:#F04423">{sectionOpen ? '−' : '+'}</El>
                </El>
                {sectionOpen ? (
                  <El css="display:flex;flex-direction:column;gap:14px;padding:0 0 18px">
                    {mobileGroups(k).map((g, gi) => (
                      <El key={g.h || `g${gi}`} css="display:flex;flex-direction:column">
                        {g.h ? <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;padding:4px 0 6px`}>{g.h}</El> : null}
                        {g.links.map((l) => (
                          /^(mailto:|tel:|https?:)/.test(l.href)
                            ? <El as="a" key={l.t} href={l.href} css="display:flex;align-items:center;min-height:44px;font-size:16px;color:#08070A;border-top:1px solid #F3F0EA">{l.t}</El>
                            : <El as={Link} key={l.t} href={l.href} onClick={() => setMob(false)} css="display:flex;align-items:center;min-height:44px;font-size:16px;color:#08070A;border-top:1px solid #F3F0EA">{l.t}</El>
                        ))}
                      </El>
                    ))}
                  </El>
                ) : null}
              </El>
            );
          })}
          <El as={Link} href={ctaHref} onClick={() => setMob(false)} css="margin-top:22px;display:flex;justify-content:center;align-items:center;gap:10px;min-height:52px;background:#F04423;color:#08070A;border-radius:999px;font-size:16px;font-weight:500">Get a free estimate &#8594;</El>
        </El>
      ) : null}
    </El>
  );
}
