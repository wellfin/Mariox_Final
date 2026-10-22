import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import El from '../El';
import { MONO, PAD, ORANGE } from './ui';
import { cats, services } from '@/data/final/services';

// The design referenced a shared "Mariox Nav" component: logo, a services mega
// menu, four links and the estimate CTA, 74px tall and fixed. Every page in
// /final-website sits under it, so it lives here once.

const LINKS = [
  { label: 'Industries', href: '/industries' },
  { label: 'AI', href: '/ai' },
  { label: 'Work', href: '/work' },
  { label: 'Company', href: '/company' },
];

const MOB_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'All services', href: '/services' },
  ...LINKS,
];

export default function Nav({ active = '', ctaHref = '#estimate', ctaLabel = 'Get a free estimate' }) {
  const [wide, setWide] = useState(true);
  const [mega, setMega] = useState(false);
  const [mob, setMob] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1000px)');
    const on = () => { setWide(mq.matches); setMega(false); setMob(false); };
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  // The mobile sheet owns the scroll while it is open.
  useEffect(() => {
    if (!mob) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [mob]);

  const linkColor = (key) => (active === key ? ORANGE : '#D9D5CD');

  return (
    <El as="header" css="position:fixed;top:0;left:0;right:0;z-index:90" onMouseLeave={() => setMega(false)}>
      <El css={`display:flex;align-items:center;justify-content:space-between;gap:20px;height:74px;padding:0 ${PAD};background:rgba(8,7,10,.92);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid rgba(244,241,234,.1)`}>
        <El as={Link} href="/" aria-label="Mariox Software home" css="display:flex;align-items:center;gap:11px;color:#F4F1EA;flex-shrink:0">
          <El as="span" css="width:18px;height:18px;background:#F04423" />
          <El as="span" css="font-size:17px;font-weight:600;letter-spacing:-.04em">MARIOX</El>
          <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.14em;color:#8E8A85;text-transform:uppercase`}>Software</El>
        </El>

        {wide ? (
          <El as="nav" aria-label="Main" css="display:flex;align-items:center;gap:clamp(16px,2.2vw,32px)">
            <El
              as="button"
              type="button"
              onMouseEnter={() => setMega(true)}
              onClick={() => setMega((m) => !m)}
              aria-expanded={mega}
              css={`background:transparent;border:0;cursor:pointer;display:flex;align-items:center;gap:7px;font-family:Geist,sans-serif;font-size:14px;color:${mega ? ORANGE : linkColor('services')}`}
            >
              Services <El as="span" css={`${MONO};font-size:9px`}>{mega ? '▲' : '▼'}</El>
            </El>
            {LINKS.map((l) => (
              <El as={Link} key={l.href} href={l.href} css={`font-size:14px;color:${linkColor(l.label.toLowerCase())}`}>{l.label}</El>
            ))}
            <El as="a" href={ctaHref} css="display:flex;align-items:center;gap:10px;background:#F4F1EA;color:#08070A;padding:11px 17px;border-radius:999px;font-size:14px;font-weight:500;white-space:nowrap;transition:background .3s" hover="background:#F04423;color:#08070A">
              {ctaLabel} <span>&#8594;</span>
            </El>
          </El>
        ) : (
          <El as="button" type="button" onClick={() => setMob((m) => !m)} aria-label={mob ? 'Close menu' : 'Open menu'} aria-expanded={mob} css={`background:transparent;border:1px solid rgba(244,241,234,.3);color:#F4F1EA;border-radius:999px;width:44px;height:44px;display:flex;align-items:center;justify-content:center;cursor:pointer;${MONO};font-size:15px`}>
            {mob ? '✕' : '☰'}
          </El>
        )}
      </El>

      {/* Services mega menu */}
      {wide && mega ? (
        <El css={`background:#0E0D11;border-bottom:1px solid rgba(244,241,234,.12);padding:clamp(24px,2.6vw,40px) ${PAD};max-height:calc(100vh - 74px);overflow-y:auto`}>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,210px),1fr));gap:clamp(18px,2vw,34px)">
            {cats.map((c) => (
              <El key={c.id}>
                <El as={Link} href={`/services#${c.id}`} onClick={() => setMega(false)} css={`display:flex;gap:8px;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;margin-bottom:12px`}>
                  <El as="span" css="color:#F04423">{c.n}</El>{c.name}
                </El>
                <El css="display:flex;flex-direction:column">
                  {services.filter((s) => s.cat === c.id).map((s) => (
                    <El as={Link} key={s.slug} href={`/${s.slug}`} onClick={() => setMega(false)} css={`padding:4px 0;font-size:14px;color:${active === s.slug ? ORANGE : '#D9D5CD'}`}>{s.name}</El>
                  ))}
                </El>
              </El>
            ))}
          </El>
          <El as={Link} href="/services" onClick={() => setMega(false)} css={`display:inline-flex;align-items:center;gap:10px;margin-top:22px;${MONO};font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:#F04423`}>
            All {services.length} services <span>&#8594;</span>
          </El>
        </El>
      ) : null}

      {/* Mobile sheet */}
      {!wide && mob ? (
        <El css="background:#08070A;border-bottom:1px solid rgba(244,241,234,.12);height:calc(100vh - 74px);overflow-y:auto;padding:22px clamp(18px,4vw,64px) 60px">
          <El as="nav" aria-label="Mobile" css="display:flex;flex-direction:column;border-top:1px solid rgba(244,241,234,.14)">
            {MOB_LINKS.map((l) => (
              <El as={Link} key={l.href} href={l.href} onClick={() => setMob(false)} css="display:flex;justify-content:space-between;align-items:baseline;padding:16px 0;border-bottom:1px solid rgba(244,241,234,.14);font-size:clamp(1.5rem,7vw,2.2rem);font-weight:500;letter-spacing:-.045em">
                {l.label}<El as="span" css={`${MONO};font-size:12px;color:#8E8A85`}>&#8594;</El>
              </El>
            ))}
          </El>
          <El css="margin-top:26px">
            {cats.map((c) => (
              <El key={c.id} css="margin-bottom:20px">
                <El css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;margin-bottom:8px`}>{c.name}</El>
                <El css="display:flex;flex-direction:column">
                  {services.filter((s) => s.cat === c.id).map((s) => (
                    <El as={Link} key={s.slug} href={`/${s.slug}`} onClick={() => setMob(false)} css="padding:7px 0;font-size:15px;color:#D9D5CD">{s.name}</El>
                  ))}
                </El>
              </El>
            ))}
          </El>
          <El as="a" href={ctaHref} onClick={() => setMob(false)} css="display:flex;justify-content:space-between;align-items:center;background:#F04423;color:#08070A;padding:18px 22px;border-radius:999px;font-size:16px;font-weight:500">{ctaLabel} <span>&#8594;</span></El>
        </El>
      ) : null}
    </El>
  );
}
