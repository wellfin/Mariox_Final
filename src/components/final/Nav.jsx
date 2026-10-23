import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import El from '../El';
import { MONO, PAD, ORANGE } from './ui';
import { cats, services, bySlug } from '@/data/final/services';
import { industries, groups as industryGroups, fallbackPhoto } from '@/data/final/industries';

// The shared header from the design's `Mariox Nav`: a services mega menu, an
// industries mega menu, the main links and the estimate CTA. It goes solid on
// scroll and collapses into a full-screen sheet below 1000px.

const LINKS = [
  { label: 'AI', href: '/ai', key: 'ai' },
  { label: 'Work', href: '/work', key: 'work' },
  { label: 'Hire talent', href: '/hire', key: 'hire' },
  { label: 'Company', href: '/company', key: 'company' },
  { label: 'Careers', href: '/careers', key: 'careers' },
  { label: 'Blog', href: '/blog', key: 'blog' },
];

// Longer names for the mega menu's category column.
const CAT_NAMES = {
  'product-engineering': 'Product development & engineering',
  'ai-data': 'AI & data',
  'emerging-tech': 'Blockchain & emerging tech',
  'business-software': 'Enterprise & business software',
  'digital-transformation': 'Digital transformation',
  consulting: 'Consulting',
  'teams-managed': 'IT managed & outsourcing',
};

// Services that hang off another one, shown as chips under their parent.
const PARENT = {
  'ios-app-development-company': 'mobile-app-development-company',
  'android-app-development-company': 'mobile-app-development-company',
  'cross-platform-app-development-company': 'mobile-app-development-company',
  'pwa-development': 'web-app-development',
  'frontend-development': 'web-app-development',
  'backend-development': 'web-app-development',
  'generative-ai-and-llm-apps': 'ai-development',
  'ai-agents-and-automation': 'ai-development',
  'machine-learning': 'ai-development',
  'ai-chatbot-development': 'ai-development',
  'mlops-and-llmops': 'ai-development',
  'big-data-engineering': 'data-engineering',
  'smart-contract-development': 'blockchain-development',
  'defi-development': 'blockchain-development',
  'nft-marketplace-development': 'blockchain-development',
  'crypto-wallet-development': 'blockchain-development',
  'web3-and-dapp-development': 'blockchain-development',
  'metaverse-and-3d-experiences': 'ar-vr-development',
  'wearable-app-development': 'iot-development',
  'shopify-development-company': 'e-commerce-app-development-company',
  'wordpress-development-company': 'cms-development-company',
  'salesforce-development': 'crm-development',
  'microsoft-dynamics-365': 'erp-development',
  'kubernetes-and-containers': 'devops-and-ci-cd',
  'penetration-testing': 'cybersecurity',
};

const SHORT = {
  'ios-app-development-company': 'iOS',
  'android-app-development-company': 'Android',
  'cross-platform-app-development-company': 'Cross-platform',
  'pwa-development': 'PWA',
  'frontend-development': 'Frontend',
  'backend-development': 'Backend',
  'generative-ai-and-llm-apps': 'Generative AI',
  'ai-agents-and-automation': 'AI agents',
  'machine-learning': 'Machine learning',
  'ai-chatbot-development': 'Chatbots',
  'mlops-and-llmops': 'MLOps',
  'big-data-engineering': 'Big data',
  'smart-contract-development': 'Smart contracts',
  'defi-development': 'DeFi',
  'nft-marketplace-development': 'NFT marketplace',
  'crypto-wallet-development': 'Crypto wallet',
  'web3-and-dapp-development': 'Web3 & dApps',
  'metaverse-and-3d-experiences': 'Metaverse',
  'wearable-app-development': 'Wearables',
  'shopify-development-company': 'Shopify',
  'wordpress-development-company': 'WordPress',
  'salesforce-development': 'Salesforce',
  'microsoft-dynamics-365': 'Dynamics 365',
  'kubernetes-and-containers': 'Kubernetes',
  'penetration-testing': 'Pen testing',
};

const thumb = (url) => (url || '').replace('w=2000', 'w=900');

export default function Nav({ active = '', ctaHref = '#estimate', ctaLabel = 'Get a free estimate' }) {
  const [wide, setWide] = useState(true);
  const [phoneShown, setPhoneShown] = useState(true);
  // Below this the CTA would push the menu button off a phone screen, so it
  // moves into the sheet.
  const [ctaShown, setCtaShown] = useState(true);
  const [solid, setSolid] = useState(false);
  const [menu, setMenu] = useState(null); // 'services' | 'industries' | null
  const [mob, setMob] = useState(false);
  const [mobCat, setMobCat] = useState(null);
  const [mobInd, setMobInd] = useState(false);
  const [cat, setCat] = useState(cats[0] ? cats[0].id : '');
  const [preview, setPreview] = useState('');
  const [indPreview, setIndPreview] = useState('');
  const closeTimer = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1000px)');
    const mqPhone = window.matchMedia('(min-width: 1180px)');
    const mqCta = window.matchMedia('(min-width: 520px)');
    const on = () => {
      setWide(mq.matches);
      setPhoneShown(mqPhone.matches);
      setCtaShown(mqCta.matches);
      setMenu(null);
      setMob(false);
    };
    on();
    mq.addEventListener('change', on);
    mqPhone.addEventListener('change', on);
    mqCta.addEventListener('change', on);
    const onScroll = () => setSolid(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    const onKey = (e) => { if (e.key === 'Escape') { setMenu(null); setMob(false); } };
    window.addEventListener('keydown', onKey);
    return () => {
      mq.removeEventListener('change', on);
      mqPhone.removeEventListener('change', on);
      mqCta.removeEventListener('change', on);
      window.removeEventListener('scroll', onScroll);
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

  // A small delay on leaving keeps the menu from flickering shut between rows.
  const openMenu = useCallback((which) => () => {
    if (!wide) return;
    clearTimeout(closeTimer.current);
    setMenu(which);
  }, [wide]);
  const closeSoon = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 140);
  }, []);
  const closeNow = useCallback(() => { clearTimeout(closeTimer.current); setMenu(null); }, []);

  const curCat = cats.find((c) => c.id === cat) || cats[0];
  const inCat = services.filter((s) => s.cat === curCat.id);
  const top = inCat.filter((s) => !PARENT[s.slug]);
  const previewSlug = preview && inCat.some((s) => s.slug === preview) ? preview : (top[0] && top[0].slug);
  const p = bySlug[previewSlug] || {};

  const ip = industries.find((x) => x.slug === indPreview) || industries[0];
  const activeIs = (key) => active === key || (key === 'services' && !!bySlug[active]);

  const linkCss = (key) => `position:relative;font-size:14.5px;color:${activeIs(key) ? '#F4F1EA' : '#D9D5CD'};padding:10px 0;transition:color .2s`;
  const barBg = solid || menu || mob ? 'rgba(8,7,10,.92)' : 'rgba(8,7,10,0)';

  return (
    <El as="header" onMouseLeave={closeSoon} css={`position:fixed;top:0;left:0;right:0;z-index:90;font-family:Geist,'Helvetica Neue',Helvetica,sans-serif;color:#F4F1EA;background:${barBg};backdrop-filter:${solid || menu || mob ? 'blur(14px)' : 'none'};-webkit-backdrop-filter:${solid || menu || mob ? 'blur(14px)' : 'none'};border-bottom:1px solid ${solid || menu || mob ? 'rgba(244,241,234,.1)' : 'rgba(244,241,234,0)'};transition:background .4s,border-color .4s`}>
      <El css={`display:flex;align-items:center;justify-content:space-between;gap:20px;padding:${solid ? '13px' : '20px'} ${PAD};transition:padding .4s cubic-bezier(.2,.8,.2,1)`}>
        <El as={Link} href="/" onMouseEnter={closeNow} aria-label="Mariox Software home" css="display:flex;align-items:center;gap:11px;color:#F4F1EA;flex-shrink:0">
          <El as="span" css="width:18px;height:18px;background:#F04423" />
          <El as="span" css="font-size:17px;font-weight:600;letter-spacing:-.04em">MARIOX</El>
          <El as="span" css={`${MONO};font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85`}>Software</El>
        </El>

        <El as="nav" aria-label="Main" css={`display:${wide ? 'flex' : 'none'};align-items:center;gap:clamp(16px,2vw,30px)`}>
          {/* Services */}
          <El onMouseEnter={openMenu('services')} css="display:flex;align-items:center;gap:4px;position:relative">
            <El as={Link} href="/services" css={linkCss('services')}>Services</El>
            <El as="button" type="button" onClick={() => setMenu((m) => (m === 'services' ? null : 'services'))} aria-expanded={menu === 'services'} aria-label="Open services menu" css={`width:26px;height:26px;display:flex;align-items:center;justify-content:center;background:transparent;border:0;color:inherit;cursor:pointer;${MONO};font-size:9px;transform:rotate(${menu === 'services' ? '180deg' : '0deg'});transition:transform .3s`}>▼</El>
            <El as="span" css={`position:absolute;left:0;right:26px;bottom:2px;height:2px;background:#F04423;transform:scaleX(${menu === 'services' || activeIs('services') ? 1 : 0});transform-origin:left;transition:transform .35s cubic-bezier(.2,.8,.2,1)`} />
          </El>

          <El as={Link} href="/ai" onMouseEnter={closeSoon} css={linkCss('ai')}>AI</El>

          {/* Industries */}
          <El onMouseEnter={openMenu('industries')} css="display:flex;align-items:center;gap:4px;position:relative">
            <El as={Link} href="/industries" css={linkCss('industries')}>Industries</El>
            <El as="button" type="button" onClick={() => setMenu((m) => (m === 'industries' ? null : 'industries'))} aria-expanded={menu === 'industries'} aria-label="Open industries menu" css={`width:26px;height:26px;display:flex;align-items:center;justify-content:center;background:transparent;border:0;color:inherit;cursor:pointer;${MONO};font-size:9px;transform:rotate(${menu === 'industries' ? '180deg' : '0deg'});transition:transform .3s`}>▼</El>
            <El as="span" css={`position:absolute;left:0;right:26px;bottom:2px;height:2px;background:#F04423;transform:scaleX(${menu === 'industries' || active === 'industries' ? 1 : 0});transform-origin:left;transition:transform .35s cubic-bezier(.2,.8,.2,1)`} />
          </El>

          {LINKS.filter((l) => l.key !== 'ai').map((l) => (
            <El as={Link} key={l.href} href={l.href} onMouseEnter={closeSoon} css={linkCss(l.key)}>{l.label}</El>
          ))}
        </El>

        <El css="display:flex;align-items:center;gap:10px;flex-shrink:0">
          <El as="a" href="tel:+919599287045" onMouseEnter={closeNow} css={`display:${phoneShown && wide ? 'block' : 'none'};${MONO};font-size:11.5px;letter-spacing:.08em;color:#B7B2AA`}>+91 95992 87045</El>
          <El as="a" href={ctaHref} onMouseEnter={closeNow} css={`display:${ctaShown ? 'flex' : 'none'};align-items:center;gap:10px;background:#F04423;color:#08070A;padding:12px 18px;border-radius:999px;font-size:14px;font-weight:500;white-space:nowrap;transition:background .3s`} hover="background:#F4F1EA;color:#08070A">
            {wide ? ctaLabel : 'Get estimate'} <span>&#8594;</span>
          </El>
          <El as="button" type="button" onClick={() => setMob((m) => !m)} aria-label="Menu" aria-expanded={mob} css={`display:${wide ? 'none' : 'flex'};align-items:center;justify-content:center;width:44px;height:44px;border-radius:50%;border:1px solid rgba(244,241,234,.3);background:transparent;color:#F4F1EA;cursor:pointer;font-size:15px`}>{mob ? '✕' : '☰'}</El>
        </El>
      </El>

      {/* Services mega menu */}
      {wide && menu === 'services' ? (
        <El id="mx-mega" role="region" aria-label="Services" css="border-top:1px solid rgba(244,241,234,.1);background:#0B0A0D;max-height:calc(100vh - 70px);overflow:auto;box-shadow:0 40px 80px rgba(0,0,0,.55)">
          <El css="display:grid;grid-template-columns:minmax(230px,.9fr) minmax(0,2.2fr) minmax(280px,1.1fr);min-height:460px">
            <El css={`border-right:1px solid rgba(244,241,234,.1);padding:clamp(20px,2.2vw,30px) 0 clamp(20px,2.2vw,30px) ${PAD};display:flex;flex-direction:column`}>
              <El css={`${MONO};font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:14px;padding-right:20px`}>{services.length} services &#183; {cats.length} disciplines</El>
              {cats.map((c) => {
                const on = c.id === curCat.id;
                const count = String(services.filter((s) => s.cat === c.id).length).padStart(2, '0');
                return (
                  <El as={Link} key={c.id} href={`/services#${c.id}`} onMouseEnter={() => { setCat(c.id); setPreview(''); }} onFocus={() => { setCat(c.id); setPreview(''); }} css={`position:relative;display:flex;flex-direction:column;gap:4px;padding:14px 22px 14px 18px;background:${on ? '#111015' : 'transparent'};color:${on ? '#F4F1EA' : '#D9D5CD'};transition:background .25s,color .25s`}>
                    <El as="span" css={`position:absolute;left:0;top:10px;bottom:10px;width:3px;background:#F04423;transform:scaleY(${on ? 1 : 0});transition:transform .3s cubic-bezier(.2,.8,.2,1)`} />
                    <El as="span" css="display:flex;justify-content:space-between;gap:10px;align-items:baseline">
                      <El as="span" css="font-size:15.5px;font-weight:500;letter-spacing:-.025em;line-height:1.2">{CAT_NAMES[c.id] || c.name}</El>
                      <El as="span" css={`${MONO};font-size:10.5px;color:${on ? '#F04423' : '#8E8A85'}`}>{count}</El>
                    </El>
                    <El as="span" css="font-size:12.5px;line-height:1.35;color:#8E8A85">{c.short}</El>
                  </El>
                );
              })}
              <El as={Link} href="/services" css={`margin-top:auto;padding:18px 22px 0 18px;display:flex;align-items:center;gap:10px;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#F04423`}>All services &#8594;</El>
            </El>

            <El css="padding:clamp(22px,2.4vw,34px) clamp(20px,2.6vw,40px)">
              <El css="display:flex;flex-wrap:wrap;justify-content:space-between;gap:10px 24px;align-items:baseline;padding-bottom:16px;margin-bottom:8px;border-bottom:1px solid rgba(244,241,234,.12)">
                <El css="display:flex;gap:12px;align-items:baseline">
                  <El as="span" css={`${MONO};font-size:11px;color:#F04423`}>{curCat.n}</El>
                  <El as="span" css="font-size:clamp(1.4rem,2vw,1.9rem);font-weight:500;letter-spacing:-.05em;line-height:1">{CAT_NAMES[curCat.id] || curCat.name}</El>
                </El>
                <El as={Link} href={`/services#${curCat.id}`} css={`${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#B7B2AA;border-bottom:1px solid rgba(244,241,234,.3);padding-bottom:2px`}>Overview &#8594;</El>
              </El>
              <El as="p" css="margin:0 0 14px;max-width:62ch;font-size:13.5px;line-height:1.5;color:#8E8A85">{curCat.intro}</El>
              <El css="display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));column-gap:clamp(16px,2vw,32px)">
                {top.map((s) => {
                  const subs = inCat.filter((x) => PARENT[x.slug] === s.slug);
                  const on = s.slug === previewSlug || subs.some((x) => x.slug === previewSlug);
                  return (
                    <El key={s.slug} css="border-bottom:1px solid rgba(244,241,234,.08);padding:12px 0">
                      <El as={Link} href={`/${s.slug}`} onMouseEnter={() => setPreview(s.slug)} onFocus={() => setPreview(s.slug)} css={`display:flex;justify-content:space-between;gap:12px;align-items:baseline;color:${on ? ORANGE : '#F4F1EA'};transition:color .2s`}>
                        <El as="span" css="display:flex;flex-direction:column;gap:3px">
                          <El as="span" css="font-size:15px;font-weight:500;letter-spacing:-.02em">{s.name}</El>
                          <El as="span" css="font-size:12.5px;line-height:1.35;color:#8E8A85">{s.tagline}</El>
                        </El>
                        <El as="span" css={`font-size:14px;color:#F04423;opacity:${on ? 1 : 0};transform:translateX(${on ? '0px' : '-6px'});transition:opacity .2s,transform .3s`}>&#8594;</El>
                      </El>
                      {subs.length ? (
                        <El css="display:flex;flex-wrap:wrap;gap:6px;margin-top:10px">
                          {subs.map((x) => (
                            <El as={Link} key={x.slug} href={`/${x.slug}`} onMouseEnter={() => setPreview(x.slug)} onFocus={() => setPreview(x.slug)} css={`border:1px solid ${x.slug === previewSlug ? ORANGE : 'rgba(244,241,234,.2)'};color:${x.slug === previewSlug ? ORANGE : '#D9D5CD'};border-radius:999px;padding:5px 11px;font-size:12px;white-space:nowrap;transition:all .2s`}>{SHORT[x.slug] || x.name}</El>
                          ))}
                        </El>
                      ) : null}
                    </El>
                  );
                })}
              </El>
            </El>

            <El as={Link} href={`/${p.slug || ''}`} css={`border-left:1px solid rgba(244,241,234,.1);padding:clamp(20px,2.2vw,30px) ${PAD} clamp(20px,2.2vw,30px) clamp(18px,2vw,30px);display:flex;flex-direction:column;gap:16px;color:#F4F1EA`}>
              <El css="position:relative;aspect-ratio:4/3;overflow:hidden;background:#141216">
                <El role="img" aria-label={p.name} css={`position:absolute;inset:0;background-color:#141216;background-size:cover;background-position:center;background-image:url("${p.hero || ''}");transition:background-image .3s`} />
                <El as="span" css={`position:absolute;left:12px;top:12px;${MONO};font-size:10px;letter-spacing:.14em;text-transform:uppercase;background:#08070A;color:#F4F1EA;padding:5px 9px`}>{p.client ? `Work · ${p.client.name}` : 'Mariox'}</El>
              </El>
              <El css="display:flex;flex-direction:column;gap:8px">
                <El as="span" css="font-size:clamp(1.3rem,1.8vw,1.7rem);font-weight:500;letter-spacing:-.045em;line-height:1">{p.name}</El>
                <El as="span" css="font-size:14px;line-height:1.45;color:#B7B2AA">{p.tagline ? `${p.tagline}.` : ''}</El>
              </El>
              <El css="display:grid;grid-template-columns:1fr 1fr;border-top:1px solid rgba(244,241,234,.12)">
                <El css="padding:12px 12px 0 0">
                  <El css={`${MONO};font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>Timeline</El>
                  <El css="margin-top:5px;font-size:15px;font-weight:500">{p.time}</El>
                </El>
                <El css="padding:12px 0 0 12px;border-left:1px solid rgba(244,241,234,.12)">
                  <El css={`${MONO};font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>Model</El>
                  <El css="margin-top:5px;font-size:15px;font-weight:500">{p.model}</El>
                </El>
              </El>
              <El as="span" css="margin-top:auto;align-self:flex-start;display:flex;align-items:center;gap:10px;background:#F4F1EA;color:#08070A;padding:12px 18px;border-radius:999px;font-size:14px;font-weight:500;white-space:nowrap">Open page &#8594;</El>
            </El>
          </El>
          <El css={`display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px 28px;padding:18px ${PAD};background:#F4F1EA;color:#08070A`}>
            <El css="display:flex;align-items:center;gap:14px">
              <El as="span" css="width:10px;height:10px;background:#F04423;flex-shrink:0" />
              <El as="span" css="font-size:15.5px;font-weight:500;letter-spacing:-.02em">Not sure which service fits? <El as="span" css="color:#4A4741;font-weight:400">Tell us what you are building and a senior engineer will point you to the right team.</El></El>
            </El>
            <El css="display:flex;align-items:center;gap:18px">
              <El as="a" href="mailto:admin@marioxsoftware.com" css={`${MONO};font-size:11px;letter-spacing:.1em;color:#4A4741`}>admin@marioxsoftware.com</El>
              <El as="a" href={ctaHref} css="display:flex;align-items:center;gap:10px;background:#08070A;color:#F4F1EA;padding:12px 18px;border-radius:999px;font-size:14px;font-weight:500;white-space:nowrap">{ctaLabel} &#8594;</El>
            </El>
          </El>
        </El>
      ) : null}

      {/* Industries mega menu */}
      {wide && menu === 'industries' ? (
        <El id="mx-ind" role="region" aria-label="Industries" css="border-top:1px solid rgba(244,241,234,.1);background:#0B0A0D;max-height:calc(100vh - 70px);overflow:auto;box-shadow:0 40px 80px rgba(0,0,0,.55)">
          <El css="display:grid;grid-template-columns:minmax(0,3fr) minmax(280px,1fr)">
            <El css={`padding:clamp(22px,2.4vw,32px) clamp(20px,2.6vw,40px) clamp(22px,2.4vw,32px) ${PAD}`}>
              <El css="display:flex;justify-content:space-between;align-items:baseline;gap:16px;padding-bottom:14px;margin-bottom:6px;border-bottom:1px solid rgba(244,241,234,.12)">
                <El as="span" css={`${MONO};letter-spacing:.14em;text-transform:uppercase;font-size:10.5px;color:#8E8A85`}>{industries.length} industries &#183; {Object.keys(industryGroups).length} sectors</El>
                <El as={Link} href="/industries" css={`${MONO};letter-spacing:.14em;text-transform:uppercase;font-size:10.5px;color:#F04423`}>All industries &#8594;</El>
              </El>
              <El css="columns:4 200px;column-gap:clamp(18px,2.4vw,40px)">
                {Object.entries(industryGroups).map(([key, name]) => (
                  <El key={key} css="break-inside:avoid;padding:14px 0 10px">
                    <El css={`${MONO};letter-spacing:.14em;text-transform:uppercase;font-size:10px;color:#8E8A85;margin-bottom:6px`}>{name}</El>
                    {industries.filter((x) => x.groupKey === key).map((x) => {
                      const on = x.slug === ip.slug;
                      return (
                        <El as={Link} key={x.slug} href={`/industries/${x.slug}`} onMouseEnter={() => setIndPreview(x.slug)} onFocus={() => setIndPreview(x.slug)} css={`display:flex;align-items:baseline;gap:10px;padding:6px 0;font-size:15px;font-weight:500;letter-spacing:-.02em;color:${on ? ORANGE : '#F4F1EA'};transition:color .2s`}>
                          <El as="span" css={`width:6px;height:6px;flex-shrink:0;background:${on ? ORANGE : 'rgba(244,241,234,.28)'};transform:translateY(-2px);transition:background .2s`} />{x.name}
                        </El>
                      );
                    })}
                  </El>
                ))}
              </El>
            </El>
            <El as={Link} href={`/industries/${ip.slug}`} css={`border-left:1px solid rgba(244,241,234,.1);padding:clamp(20px,2.2vw,30px) ${PAD} clamp(20px,2.2vw,30px) clamp(18px,2vw,30px);display:flex;flex-direction:column;gap:14px;color:#F4F1EA`}>
              <El css="position:relative;aspect-ratio:4/3;overflow:hidden;background:#141216">
                <El role="img" aria-label={ip.name} css={`position:absolute;inset:0;background-color:#141216;background-size:cover;background-position:center;background-image:url("${thumb(ip.photo || fallbackPhoto)}")`} />
                <El as="span" css={`position:absolute;left:12px;top:12px;${MONO};letter-spacing:.14em;text-transform:uppercase;font-size:10px;background:#08070A;color:#F4F1EA;padding:5px 9px`}>{ip.group}</El>
              </El>
              <El as="span" css="font-size:clamp(1.3rem,1.8vw,1.7rem);font-weight:500;letter-spacing:-.045em;line-height:1">{ip.name}</El>
              <El as="span" css="font-size:14px;line-height:1.45;color:#B7B2AA">{ip.hook}</El>
              <El css="display:flex;flex-wrap:wrap;gap:6px">
                {(ip.builds || []).slice(0, 4).map((b) => (
                  <El as="span" key={b.t} css="display:inline-flex;align-items:center;white-space:nowrap;line-height:1.2;border:1px solid rgba(244,241,234,.2);border-radius:999px;padding:5px 11px;font-size:12px;color:#D9D5CD">{b.t}</El>
                ))}
              </El>
              <El as="span" css="margin-top:auto;align-self:flex-start;display:flex;align-items:center;gap:10px;background:#F4F1EA;color:#08070A;padding:12px 18px;border-radius:999px;font-size:14px;font-weight:500;white-space:nowrap">Open page &#8594;</El>
            </El>
          </El>
          <El css={`display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px 28px;padding:18px ${PAD};background:#F4F1EA;color:#08070A`}>
            <El css="display:flex;align-items:center;gap:14px">
              <El as="span" css="width:10px;height:10px;background:#F04423;flex-shrink:0" />
              <El as="span" css="font-size:15.5px;font-weight:500;letter-spacing:-.02em">Didn&#8217;t find your industry? <El as="span" css="color:#4A4741;font-weight:400">Tell us what you need and we will tailor the team to it.</El></El>
            </El>
            <El as="a" href={ctaHref} css="display:flex;align-items:center;gap:10px;background:#08070A;color:#F4F1EA;padding:12px 18px;border-radius:999px;font-size:14px;font-weight:500;white-space:nowrap">{ctaLabel} &#8594;</El>
          </El>
        </El>
      ) : null}

      {/* Mobile sheet */}
      {!wide && mob ? (
        <El css={`border-top:1px solid rgba(244,241,234,.1);background:#08070A;height:calc(100svh - 70px);overflow:auto;padding:8px ${PAD} 32px;display:flex;flex-direction:column`}>
          <El css="border-bottom:1px solid rgba(244,241,234,.14)">
            <El as={Link} href="/services" onClick={() => setMob(false)} css="display:flex;justify-content:space-between;align-items:baseline;padding:16px 0 10px;font-size:28px;font-weight:500;letter-spacing:-.05em">
              Services <El as="span" css={`${MONO};font-size:12px;color:#8E8A85`}>{services.length}</El>
            </El>
            {cats.map((c) => {
              const open = mobCat === c.id;
              return (
                <El key={c.id} css="border-top:1px solid rgba(244,241,234,.08)">
                  <El as="button" type="button" onClick={() => setMobCat(open ? null : c.id)} aria-expanded={open} css="width:100%;display:flex;justify-content:space-between;align-items:center;gap:12px;background:transparent;border:0;color:#F4F1EA;cursor:pointer;padding:13px 0;font-family:Geist,sans-serif;font-size:16px;text-align:left">
                    {CAT_NAMES[c.id] || c.name}<El as="span" css={`${MONO};font-size:15px;color:#F04423`}>{open ? '−' : '+'}</El>
                  </El>
                  {open ? (
                    <El css="display:flex;flex-direction:column;padding:0 0 12px 12px;border-left:2px solid #F04423">
                      {services.filter((s) => s.cat === c.id).map((s) => (
                        <El as={Link} key={s.slug} href={`/${s.slug}`} onClick={() => setMob(false)} css="display:block;padding:10px 0;font-size:15px;color:#D9D5CD">{s.name}</El>
                      ))}
                    </El>
                  ) : null}
                </El>
              );
            })}
          </El>

          <El css="border-bottom:1px solid rgba(244,241,234,.14)">
            <El as="button" type="button" onClick={() => setMobInd((v) => !v)} aria-expanded={mobInd} css={`width:100%;display:flex;justify-content:space-between;align-items:baseline;background:transparent;border:0;color:${active === 'industries' ? ORANGE : '#F4F1EA'};cursor:pointer;padding:16px 0;font-family:Geist,sans-serif;font-size:28px;font-weight:500;letter-spacing:-.05em;text-align:left`}>
              Industries <El as="span" css={`${MONO};font-size:15px;color:#F04423`}>{mobInd ? '−' : '+'}</El>
            </El>
            {mobInd ? (
              <El css="display:grid;grid-template-columns:1fr 1fr;gap:0 16px;padding:0 0 14px 12px;border-left:2px solid #F04423">
                {industries.map((x) => (
                  <El as={Link} key={x.slug} href={`/industries/${x.slug}`} onClick={() => setMob(false)} css="display:block;padding:9px 0;font-size:15px;color:#D9D5CD">{x.name}</El>
                ))}
              </El>
            ) : null}
          </El>

          {LINKS.map((l) => (
            <El as={Link} key={l.href} href={l.href} onClick={() => setMob(false)} css={`display:block;padding:16px 0;border-bottom:1px solid rgba(244,241,234,.14);font-size:28px;font-weight:500;letter-spacing:-.05em;color:${active === l.key ? ORANGE : '#F4F1EA'}`}>{l.label}</El>
          ))}

          <El css="margin-top:auto;padding-top:28px;display:flex;flex-direction:column;gap:12px">
            <El as="a" href={ctaHref} onClick={() => setMob(false)} css="display:flex;justify-content:center;align-items:center;gap:10px;background:#F04423;color:#08070A;padding:16px 20px;border-radius:999px;font-size:15px;font-weight:500">{ctaLabel} &#8594;</El>
            <El as="a" href="tel:+919599287045" css={`text-align:center;${MONO};font-size:12px;letter-spacing:.08em;color:#B7B2AA`}>+91 95992 87045</El>
          </El>
        </El>
      ) : null}
    </El>
  );
}
