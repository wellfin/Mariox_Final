import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import El from './El';
import { A, MONO } from './ui';
import { CONTACT, navLinks, socialLinks } from '@/data/site';
import { industries } from '@/data/industries';
import { groupedServices } from '@/data/growthServices';
import {
  initCursor, initScroll, initThree, initGsap, initLenis,
  intro, reveal, syncScene, killScene, scrollTop,
} from '@/lib/fx';

const GRAIN = "position:fixed;inset:0;z-index:2;pointer-events:none;opacity:.05;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E\")";

function Header({ navRef, path }) {
  return (
    <El as="header" ref={navRef} css="position:sticky;top:0;z-index:900;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px 32px;padding:20px clamp(18px,4vw,60px);border-bottom:1px solid rgba(244,241,234,0);transition:background .5s cubic-bezier(.2,.8,.2,1),border-color .5s,padding .5s,backdrop-filter .5s">
      <El as={Link} href="/" data-cursor="1" aria-label="Mariox Software home" css="display:flex;align-items:center;gap:11px;flex-shrink:0">
        <El css="width:17px;height:17px;background:#F04423;flex-shrink:0" />
        <El as="span" css="font-size:16px;font-weight:800;letter-spacing:-.035em;text-transform:uppercase">Mariox <El as="span" css="font-weight:400;opacity:.5">Software</El></El>
      </El>
      <El as="nav" id="mx-nav" css="display:flex;flex-wrap:wrap;align-items:center;gap:14px clamp(14px,2vw,30px);margin-left:auto">
        {navLinks.map((n) => {
          const on = path === n.href || (n.prefix && path.startsWith(n.href + '/'));
          return (
            <El as={Link} key={n.href} href={n.href} data-cursor="1" css={`${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${on ? '#F04423' : '#F4F1EA'};display:flex;align-items:center;gap:7px;transition:color .3s`}>
              <El as="span" css={`width:4px;height:4px;background:#F04423;opacity:${on ? 1 : 0};transition:opacity .3s`} />
              {n.label}
            </El>
          );
        })}
        <El as={Link} href="/contact" data-cursor="start" css={`display:flex;align-items:center;gap:10px;background:#F04423;color:#08070A;${MONO};font-size:11px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;padding:13px 18px;white-space:nowrap;transition:background .3s`} hover="background:#F4F1EA;color:#08070A">
          Start a project <span>&#8594;</span>
        </El>
      </El>
    </El>
  );
}

const FOOT_COL = `display:flex;flex-direction:column;gap:11px;${MONO};font-size:10.5px;letter-spacing:.16em;text-transform:uppercase`;
const FOOT_HEAD = 'color:#57544F;margin-bottom:4px';
const FOOT_LINK = 'color:#B7B2AA';

function Footer() {
  const featured = ['fintech', 'healthcare', 'ecommerce'].map((s) => industries.find((i) => i.slug === s));
  return (
    <El as="footer" css="position:relative;z-index:3;border-top:1px solid rgba(244,241,234,.12);padding:clamp(40px,5.5vw,80px) clamp(18px,4vw,60px) clamp(24px,3vw,40px);background:rgba(8,7,10,.9)">
      <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:clamp(28px,4vw,72px);margin-bottom:clamp(36px,4.5vw,70px)">
        <El css="display:flex;flex-direction:column;gap:14px">
          <El css="display:flex;align-items:center;gap:11px">
            <El css="width:15px;height:15px;background:#F04423" />
            <El as="span" css="font-size:15px;font-weight:800;letter-spacing:-.03em;text-transform:uppercase">Mariox Software</El>
          </El>
          <El as="p" css="margin:0;font-size:14.5px;line-height:1.55;color:#8E8A85;max-width:26ch">Build digital products that matter.</El>
        </El>
        <El css={FOOT_COL}>
          <El as="span" css={FOOT_HEAD}>Navigate</El>
          <A href="/case-study" data-cursor="1" css={FOOT_LINK}>Work</A>
          <A href="/services" data-cursor="1" css={FOOT_LINK}>Services</A>
          <A href="/ai" data-cursor="1" css={FOOT_LINK}>AI</A>
          <A href="/hire" data-cursor="1" css={FOOT_LINK}>Hire resources</A>
          <A href="/technologies" data-cursor="1" css={FOOT_LINK}>Technology</A>
          <A href="/process" data-cursor="1" css={FOOT_LINK}>Process</A>
          <A href="/about" data-cursor="1" css={FOOT_LINK}>Company</A>
          <A href="/career" data-cursor="1" css={FOOT_LINK}>Careers</A>
          <A href="/contact" data-cursor="1" css={FOOT_LINK}>Contact</A>
        </El>
        <El css={FOOT_COL}>
          <El as="span" css={FOOT_HEAD}>Services</El>
          {groupedServices.map((g) => (
            <A key={g.slug} href={g.href} data-cursor="1" css={FOOT_LINK}>{g.name}</A>
          ))}
        </El>
        <El css={FOOT_COL}>
          <El as="span" css={FOOT_HEAD}>Industries</El>
          {featured.map((i) => (
            <A key={i.slug} href={'/industries/' + i.slug} data-cursor="1" css={FOOT_LINK}>{i.name}</A>
          ))}
          <A href="/industries" data-cursor="1" css="color:#F04423">All sixteen &#8599;</A>
        </El>
        <El css={FOOT_COL}>
          <El as="span" css={FOOT_HEAD}>Connect</El>
          {socialLinks.map((l) => (
            <A key={l.href} href={l.href} data-cursor="1" css={FOOT_LINK}>{l.label}</A>
          ))}
        </El>
        <El css={FOOT_COL}>
          <El as="span" css={FOOT_HEAD}>Contact</El>
          <A href={'mailto:' + CONTACT.email} data-cursor="1" css="color:#B7B2AA;text-transform:none;letter-spacing:.06em">{CONTACT.email}</A>
          <A href={CONTACT.tel} data-cursor="1" css="color:#B7B2AA;letter-spacing:.08em">{CONTACT.phone}</A>
          <El as="span" css="color:#B7B2AA">Noida &middot; Hyderabad &middot; Dallas</El>
        </El>
      </El>
      <El css={`display:flex;flex-wrap:wrap;gap:16px 28px;align-items:center;justify-content:space-between;border-top:1px solid rgba(244,241,234,.1);padding-top:clamp(18px,2.2vw,28px);${MONO};font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#57544F`}>
        <span>&#169; {new Date().getFullYear()} Mariox Software</span>
        <El css="display:flex;gap:24px">
          <A href="https://www.marioxsoftware.com/" data-cursor="1" css="color:#57544F">marioxsoftware.com</A>
          <A href="/terms-and-conditions" data-cursor="1" css="color:#57544F">Terms</A>
        </El>
      </El>
    </El>
  );
}

export default function Layout({ children }) {
  const router = useRouter();
  const path = router.asPath.split(/[?#]/)[0];
  const canvasRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const ringLabelRef = useRef(null);
  const progRef = useRef(null);
  const navRef = useRef(null);

  // One-time motion layer.
  useEffect(() => {
    const offCursor = initCursor(dotRef.current, ringRef.current, ringLabelRef.current);
    const offScroll = initScroll(progRef.current, navRef.current);
    let offThree = () => {};
    let alive = true;
    initThree(canvasRef.current).then((off) => { if (alive) offThree = off; else off(); });
    initGsap().then(() => initLenis()).catch(() => {});
    return () => { alive = false; offCursor(); offScroll(); offThree(); };
  }, []);

  // Per-page entrance: reveal, hero intro, rebuild scroll scenes.
  useEffect(() => {
    reveal();
    if (path === '/') intro();
    syncScene(true);
  }, [path]);

  useEffect(() => {
    const start = () => killScene();
    const done = (url) => { if (!url.includes('#')) scrollTop(); };
    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', done);
    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', done);
    };
  }, [router.events]);

  return (
    <El css="background:#08070A;color:#F4F1EA;font-family:'Schibsted Grotesk','Helvetica Neue',Helvetica,sans-serif;position:relative">
      <El as="canvas" ref={canvasRef} css="position:fixed;inset:0;width:100%;height:100%;z-index:0;pointer-events:none" />
      <El css="position:fixed;inset:0;z-index:1;pointer-events:none;background:radial-gradient(circle at 50% 45%,rgba(8,7,10,0) 0%,rgba(8,7,10,.55) 62%,rgba(8,7,10,.9) 100%)" />
      <El css={GRAIN} />

      <El ref={dotRef} css="position:fixed;top:0;left:0;width:8px;height:8px;border-radius:50%;background:#F04423;z-index:9999;pointer-events:none;transform:translate3d(-100px,-100px,0);will-change:transform" />
      <El ref={ringRef} css="position:fixed;top:0;left:0;width:56px;height:56px;border-radius:50%;border:1px solid rgba(244,241,234,.35);z-index:9998;pointer-events:none;display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:#08070A;transform:translate3d(-100px,-100px,0) scale(.35);will-change:transform;overflow:hidden">
        <El as="span" ref={ringLabelRef} css="opacity:0;white-space:nowrap" />
      </El>

      <El ref={progRef} css="position:fixed;top:0;left:0;height:2px;width:0%;background:#F04423;z-index:9990;pointer-events:none" />

      <Header navRef={navRef} path={path} />

      <El as="main" id="top" css="position:relative;z-index:3">
        {children}
      </El>

      <Footer />
    </El>
  );
}
