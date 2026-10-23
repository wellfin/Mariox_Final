import React from 'react';
import Link from 'next/link';
import El from '../El';
import { MONO, PAD } from './ui';
import { cats, services } from '@/data/final/services';

// Footer from the design: every service grouped by category, the MARIOX
// wordmark and the legal row.

export default function Footer({ activeSlug = '' }) {
  const year = new Date().getFullYear();
  return (
    <El as="footer" css={`border-top:1px solid rgba(244,241,234,.12);padding:clamp(40px,5vw,72px) ${PAD} 26px;overflow:hidden`}>
      <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,190px),1fr));gap:clamp(24px,3vw,48px)">
        {cats.map((c) => (
          <El key={c.id}>
            <El css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;margin-bottom:12px`}>{c.name}</El>
            {services.filter((s) => s.cat === c.id).map((s) => (
              <El as={Link} key={s.slug} href={`/${s.slug}`} css={`display:block;padding:4px 0;font-size:14px;color:${s.slug === activeSlug ? '#F04423' : '#D9D5CD'}`}>{s.name}</El>
            ))}
          </El>
        ))}
        <El>
          <El css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;margin-bottom:12px`}>Company</El>
          {[
            { t: 'Industries', href: '/industries' },
            { t: 'AI', href: '/ai' },
            { t: 'Work', href: '/work' },
            { t: 'Company', href: '/company' },
            { t: 'Hire engineers', href: '/hire' },
            { t: 'Contact', href: '/contact' },
            { t: 'Careers', href: '/careers' },
            { t: 'Blog', href: '/blog' },
            { t: 'Terms', href: '/terms-and-conditions' },
          ].map((l) => (
            <El as={Link} key={l.href} href={l.href} css="display:block;padding:4px 0;font-size:14px;color:#D9D5CD">{l.t}</El>
          ))}
        </El>
      </El>

      <El aria-hidden="true" css="margin-top:clamp(40px,5vw,72px);display:flex;align-items:flex-end;gap:clamp(10px,1.6vw,26px);line-height:.74">
        <El as="span" css="width:clamp(40px,11vw,190px);height:clamp(40px,11vw,190px);background:#F04423;flex-shrink:0;margin-bottom:.06em" />
        <El as="span" css="font-size:clamp(4rem,19.5vw,22rem);font-weight:500;letter-spacing:-.08em;white-space:nowrap">MARIOX</El>
      </El>

      <El css={`display:flex;flex-wrap:wrap;justify-content:space-between;gap:16px;margin-top:26px;padding-top:18px;border-top:1px solid rgba(244,241,234,.12);${MONO};font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#8E8A85`}>
        <span>&#169; {year} Mariox Software &#183; Since 2016</span>
        <span>Noida &#183; Bangalore &#183; Dallas &#183; Australia</span>
      </El>
    </El>
  );
}
