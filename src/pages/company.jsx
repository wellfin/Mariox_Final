import React, { useEffect, useRef, useState } from 'react';
import El from '@/components/El';
import { Seo, JsonLd } from '@/components/sections';
import Nav from '@/components/final/Nav';
import Footer from '@/components/final/Footer';
import EstimateForm from '@/components/final/EstimateForm';
import { MONO, PAD, Em, Shell, Marquee, Models } from '@/components/final/ui';
import { ProofSection } from '@/components/final/sections';
import { useReveal, useCountUp } from '@/components/final/fx';
import { clients } from '@/data/homeV4';
import { SITE_URL } from '@/data/site';

// Company page from the design's `company.dc.html`: the decade counter, the
// in-house promise, leadership, life at Mariox, the offices with live clocks
// and the usual proof and contact bands.

const DECADE_FACTS = [
  { v: '10', u: ' yrs', k: 'Since 2016' },
  { v: '100', u: '+', k: 'In-house people' },
  { v: '300', u: '+', k: 'Products shipped' },
  { v: '4', u: '', k: 'Offices' },
];

const PHOTOS = [
  ['team-office-seated.png', 'center 35%'],
  ['team-offsite-group.png', 'center 35%'],
  ['team-night-out.png', 'center 30%'],
  ['team-office-wide.png', 'center 40%'],
  ['team-offsite-event.png', 'center 50%'],
  ['team-office-group.png', 'center 40%'],
];

const INHOUSE = [
  { n: '01', t: 'Every engineer is on our payroll', b: 'The 100+ people on your project are Mariox employees, not subcontractors.' },
  { n: '02', t: 'Teams that stay together', b: 'Engineers who have shipped together keep shipping together, so your team is not assembled from strangers.' },
  { n: '03', t: 'One standard across 4 offices', b: 'The same code review, security and delivery practices in every office.' },
  { n: '04', t: 'Accountable for the long run', b: 'In business since 2016, with clients who have stayed for years, not sprints.' },
];

const LEADERS = [
  { n: '01', name: 'Rahul Garg', role: 'Founder', src: '/assets/company/rahul-garg-crop.png', line: 'Sets the company direction and stays close to the client partnerships Mariox is built on.' },
  { n: '02', name: 'Tripta Mittal', role: 'Co-founder', src: '/assets/company/tripta-mittal-crop.jpg', line: 'Co-founder who oversees operations and client delivery, keeping teams and projects running to plan.' },
  { n: '03', name: 'Saswat Sahu', role: 'Co-founder', src: '/assets/company/saswat-sahu.png', line: 'Co-leads the company and shapes how Mariox designs, builds and delivers.' },
  { n: '04', name: 'Akash Bhardwaj', role: 'Business Head', src: '/assets/company/akash-bhardwaj.png', line: 'Leads business development and the first conversation with every new client.' },
  { n: '05', name: 'Parveen Jakhar', role: 'Senior Developer', src: '/assets/company/parveen-jakhar.jpg', line: 'Senior engineer on the products we build, from architecture to release.' },
];

const LIFE = [
  ['team-office-seated.png', 7, 2, 'The team, at the office', 'center 35%'],
  ['team-night-out.png', 5, 2, 'Team night out', 'center 30%'],
  ['team-offsite-group.png', 12, 2, 'Annual offsite', 'center 35%'],
  ['team-offsite-event.png', 5, 2, 'Offsite sessions', 'center 50%'],
  ['team-office-group.png', 7, 2, 'One team, one floor', 'center 40%'],
];

const OFFICES = [
  ['Noida', 'Uttar Pradesh, India', 'India', 'Asia/Kolkata', 'IST'],
  ['Bangalore', 'Karnataka, India', 'India', 'Asia/Kolkata', 'IST'],
  ['Dallas', 'Texas, United States', 'USA', 'America/Chicago', 'CT'],
  ['Australia', 'Asia-Pacific', 'Australia', 'Australia/Sydney', 'AET'],
];

const ENGAGE = [
  { n: '01', t: 'Fixed-scope project', b: 'A defined outcome, a fixed price and a delivery date, agreed after discovery.', tag: 'MVPs and well-understood builds' },
  { n: '02', t: 'Dedicated team', b: 'A cross-functional squad that works only on your product, led by a Mariox delivery lead.', tag: 'Ongoing product development' },
  { n: '03', t: 'Staff augmentation', b: 'Senior engineers added to your team, working in your tools and your process.', tag: 'Filling skill gaps fast' },
];

const TRUST = [
  { k: 'Cloud', t: 'AWS', s: 'Certified engineers' },
  { k: 'Cloud', t: 'Microsoft Azure', s: 'Certified engineers' },
  { k: 'Cloud', t: 'Google Cloud', s: 'Certified engineers' },
  { k: 'Ownership', t: 'Your code', s: 'Repos and infra are yours' },
  { k: 'Confidential', t: 'NDA first', s: 'Before the first call' },
  { k: 'Since', t: '2016', s: '4 offices, one team' },
];

const FAQ = [
  ['How big is the team?', 'Over 100 people in-house: engineers, designers, QA, DevOps and delivery leads across four offices.'],
  ['Who will I work with?', 'A delivery lead plus the engineers and designers on your product. The people in the pitch are the people who build it.'],
  ['Do you work with startups?', 'Yes. A large share of our work is first versions for founders, alongside long-running enterprise platforms.'],
  ['How do you handle time zones?', 'We agree overlap hours up front, usually four or more with US, UK, EU and Australian teams.'],
  ['Who owns the code?', 'You do, from the first commit. Repositories, cloud and store accounts stay in your name.'],
];

function Clock({ tz }) {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      try { setTime(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: tz })); } catch (e) { setTime(''); }
    };
    tick();
    const t = setInterval(tick, 30000);
    return () => clearInterval(t);
  }, [tz]);
  return <El as="span" css="font-size:clamp(1.6rem,2.4vw,2.2rem);font-weight:300;letter-spacing:-.05em;font-variant-numeric:tabular-nums">{time || '--:--'}</El>;
}

export default function Company() {
  const [faqOpen, setFaqOpen] = useState(0);
  const yearRef = useRef(null);
  useReveal();
  useCountUp();

  // The decade counter runs 2016 → 2026 as the section scrolls through.
  useEffect(() => {
    const el = yearRef.current;
    if (!el) return undefined;
    const onScroll = () => {
      const box = el.closest('section');
      if (!box) return;
      const r = box.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight - r.top) / (r.height + window.innerHeight)));
      el.textContent = String(2016 + Math.round(p * 10));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Seo
        title="About Mariox Software — 100+ in-house engineers since 2016"
        description="Mariox Software is a 100+ person in-house product engineering team with offices in Noida, Bangalore, Dallas and Australia. 300+ products shipped since 2016."
        canonical={`${SITE_URL}/company`}
      />
      <JsonLd
        id="company-org"
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Mariox Software',
          url: SITE_URL,
          foundingDate: '2016',
          numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 100 },
          address: OFFICES.map((o) => ({ '@type': 'PostalAddress', addressLocality: o[0], addressCountry: o[2] })),
        }}
      />

      <Shell>
        <Nav active="company" ctaHref="#contact" />
        <El as="main" id="top" css="padding-top:74px">
          {/* 01 Hero */}
          <El as="section" css={`position:relative;min-height:calc(100svh - 74px);display:grid;grid-template-rows:1fr auto;padding:clamp(56px,7vw,110px) ${PAD} clamp(24px,3vw,40px);overflow:hidden`}>
            <El css="position:relative;align-self:end">
              <El css="display:flex;align-items:center;gap:12px;margin-bottom:clamp(18px,2.4vw,30px)">
                <El as="span" css="width:7px;height:7px;background:#F04423;animation:mxPulse 2.4s ease-in-out infinite" />
                <El as="span" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#B7B2AA`}>Company &#183; est. 2016</El>
              </El>
              <El as="h1" css="margin:0;font-weight:500;font-size:clamp(3.4rem,11.5vw,13rem);line-height:.84;letter-spacing:-.065em">
                <El as="span" css="display:block">One team,</El>
                <El as="span" css="display:block;padding-left:clamp(0px,9vw,180px)">ten years,</El>
                <El as="span" css="display:block"><Em>in-house</Em><El as="span" css="color:#F04423">.</El></El>
              </El>
            </El>
            <El css="position:relative;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));gap:clamp(20px,3vw,48px);align-items:end;margin-top:clamp(28px,3.6vw,52px);padding-top:clamp(18px,2.2vw,26px);border-top:1px solid rgba(244,241,234,.16)">
              <El as="p" css="margin:0;max-width:38ch;font-size:clamp(15.5px,1.25vw,18px);line-height:1.55;color:#B7B2AA;text-wrap:pretty">Mariox Software designs, engineers and scales digital products. 100+ people on our own payroll, across four offices and three continents.</El>
              <El css={`display:flex;flex-direction:column;gap:8px;${MONO};font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;color:#8E8A85`}>
                <span><El as="span" css="color:#F4F1EA">4.8 &#9733;</El> Google &#183; 138 reviews</span>
                <span>Noida &#183; Bangalore &#183; Dallas &#183; Australia</span>
              </El>
              <El css="display:flex;flex-wrap:wrap;gap:10px">
                <El as="a" href="#contact" css="display:flex;align-items:center;gap:14px;background:#F04423;color:#08070A;padding:18px 24px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap;transition:background .3s" hover="background:#F4F1EA;color:#08070A">Talk to us <span>&#8594;</span></El>
                <El as="a" href="#leadership" css="display:flex;align-items:center;gap:14px;border:1px solid rgba(244,241,234,.3);padding:18px 24px;border-radius:999px;font-size:15px;white-space:nowrap;transition:border-color .3s" hover="border-color:#F4F1EA;color:#F4F1EA">Meet the team &#8595;</El>
              </El>
            </El>
          </El>

          <Marquee items={clients} seconds={52} border="top" />

          {/* 04 Decade */}
          <El as="section" id="decade" css="position:relative;background:#08070A;overflow:hidden">
            <El css={`min-height:100svh;display:grid;grid-template-rows:auto 1fr auto;padding:clamp(100px,11vw,160px) ${PAD} clamp(36px,4vw,56px)`}>
              <El css="display:flex;flex-wrap:wrap;justify-content:space-between;gap:16px;align-items:baseline">
                <El css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85`}>Est. 2016 &#183; Ten years of shipping</El>
                <El css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85`}>Scroll</El>
              </El>
              <El css="display:flex;flex-direction:column;justify-content:center;gap:clamp(12px,2vw,28px)">
                <El css="font-size:clamp(7rem,30vw,34rem);line-height:.78;letter-spacing:-.09em;font-weight:300;font-variant-numeric:tabular-nums">
                  <El as="span" ref={yearRef}>2016</El><El as="span" css="color:#F04423">.</El>
                </El>
                <El as="p" css="margin:0;max-width:30ch;font-size:clamp(1.4rem,2.8vw,2.6rem);line-height:1.1;letter-spacing:-.045em">A decade of building software <Em>with the same in-house team.</Em></El>
              </El>
              <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));border-top:1px solid rgba(244,241,234,.16)">
                {DECADE_FACTS.map((d) => (
                  <El key={d.k} css="padding:18px clamp(0px,1.4vw,22px) 0 0">
                    <El css="font-size:clamp(2rem,3.6vw,3.4rem);font-weight:500;letter-spacing:-.065em;line-height:.9">{d.v}<El as="span" css="color:#F04423">{d.u}</El></El>
                    <El css={`margin-top:10px;${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>{d.k}</El>
                  </El>
                ))}
              </El>
            </El>
          </El>

          {/* Team photo marquee */}
          <El as="section" aria-label="Team photos" css="position:relative;background:#08070A;padding:0 0 clamp(60px,7vw,110px);overflow:hidden">
            <El css="display:flex;width:max-content;gap:clamp(10px,1.2vw,16px);animation:mxMarquee 70s linear infinite">
              {PHOTOS.concat(PHOTOS).map((p, i) => (
                <El key={p[0] + i} aria-hidden={i >= PHOTOS.length ? 'true' : undefined} css={`width:clamp(260px,30vw,480px);aspect-ratio:3/2;flex-shrink:0;background:#141216 center/cover no-repeat;background-image:url('/assets/company/${p[0]}');background-position:${p[1]}`} />
              ))}
            </El>
          </El>

          {/* 05 In-house */}
          <El as="section" id="inhouse" css={`position:relative;background:#F04423;color:#08070A;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(36px,5vw,90px);align-items:start">
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.8rem,7vw,7.4rem);line-height:.84;letter-spacing:-.07em;font-weight:500">100% in-house. <Em>No freelancers, no resellers.</Em></El>
              <El css="display:flex;flex-direction:column;border-top:1px solid rgba(8,7,10,.3)">
                {INHOUSE.map((x) => (
                  <El key={x.n} data-rv="1" css="display:grid;grid-template-columns:52px 1fr;gap:16px;padding:clamp(18px,2.2vw,26px) 0;border-bottom:1px solid rgba(8,7,10,.3)">
                    <El as="span" css={`${MONO};font-size:12px;letter-spacing:.12em`}>{x.n}</El>
                    <El>
                      <El css="font-size:clamp(1.3rem,2vw,1.75rem);font-weight:500;letter-spacing:-.045em">{x.t}</El>
                      <El as="p" css="margin:6px 0 0;max-width:46ch;font-size:15.5px;line-height:1.5">{x.b}</El>
                    </El>
                  </El>
                ))}
              </El>
            </El>
          </El>

          {/* 06 Leadership */}
          <El as="section" id="leadership" css={`position:relative;background:#08070A;padding:clamp(100px,12vw,190px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(40px,5vw,80px)">
              <El>
                <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:16px`}>Chapter 02 &#8212; Leadership</El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.6rem,6.4vw,6.6rem);line-height:.88;letter-spacing:-.065em;font-weight:500">The people <Em>behind Mariox.</Em></El>
              </El>
              <El as="p" data-rv="1" css="margin:0;max-width:44ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">Founder-led and hands-on. The people who sign your contract stay close to the work.</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));gap:clamp(14px,1.6vw,24px)">
              {LEADERS.map((p) => (
                <El as="article" key={p.name} data-rv="1" css="display:flex;flex-direction:column;gap:16px">
                  <El css="position:relative;aspect-ratio:4/5;background:#141216;overflow:hidden">
                    {p.src
                      ? <El as="img" src={p.src} alt={p.name} loading="lazy" css="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" />
                      : <El css="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:clamp(2.4rem,4vw,3.6rem);font-weight:500;letter-spacing:-.05em;color:#3A3740">{p.name.split(' ').map((w) => w[0]).join('')}</El>}
                    <El as="span" css={`position:absolute;right:12px;top:12px;pointer-events:none;${MONO};font-size:10.5px;letter-spacing:.14em;color:#08070A;background:#F04423;padding:6px 9px`}>{p.n}</El>
                  </El>
                  <El css="display:flex;flex-direction:column;gap:6px;padding-top:4px;border-top:1px solid rgba(244,241,234,.16)">
                    <El as="span" css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#F04423;margin-top:12px`}>{p.role}</El>
                    <El as="h3" css="margin:0;font-size:clamp(1.6rem,2.6vw,2.4rem);line-height:.95;letter-spacing:-.055em;font-weight:500">{p.name}</El>
                    <El as="p" css="margin:6px 0 0;font-size:15px;line-height:1.5;color:#B7B2AA">{p.line}</El>
                  </El>
                </El>
              ))}
            </El>
          </El>

          {/* 07 Life at Mariox */}
          <El as="section" id="life" css={`position:relative;background:#F4F1EA;color:#08070A;padding:clamp(100px,12vw,190px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(40px,5vw,72px)">
              <El>
                <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55;margin-bottom:16px`}>Chapter 03 &#8212; Life at Mariox</El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.6rem,6.4vw,6.6rem);line-height:.88;letter-spacing:-.065em;font-weight:500">100+ people. <Em>One table.</Em></El>
              </El>
              <El as="p" data-rv="1" css="margin:0;max-width:44ch;font-size:16.5px;line-height:1.55;color:#4A4741">Engineers, designers, QA and delivery leads who work, plan and celebrate together. The team you meet on the first call is the team that ships.</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(12,minmax(0,1fr));grid-auto-rows:clamp(130px,15vw,250px);gap:clamp(8px,1vw,14px)">
              {LIFE.map((g) => (
                <El as="figure" key={g[0] + g[3]} data-rv="1" css={`margin:0;grid-column:span ${g[1]};grid-row:span ${g[2]};position:relative;overflow:hidden;background:#E4E0D8`}>
                  <El role="img" aria-label={`Mariox team: ${g[3].toLowerCase()}`} css={`position:absolute;inset:0;background-position:${g[4]};background-size:cover;background-repeat:no-repeat;background-image:url('/assets/company/${g[0]}');transition:transform 1.2s cubic-bezier(.2,.8,.2,1)`} hover="transform:scale(1.04)" />
                  <El as="figcaption" css={`position:absolute;left:12px;bottom:10px;${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#F4F1EA;background:rgba(8,7,10,.72);padding:6px 9px`}>{g[3]}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 08 Our space */}
          <El as="section" id="office" css={`position:relative;background:#08070A;padding:clamp(100px,12vw,190px) ${PAD} 0`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(14px,1.6vw,24px)">
              {[['office-workspace.png', 'The studio', 'Where the work happens', 'Mariox office workspace'], ['office-meeting-room.png', 'Planning room', 'Roadmaps, reviews, demos', 'Project planning in the Mariox meeting room']].map((f) => (
                <El as="figure" key={f[0]} data-rv="1" css="margin:0;display:flex;flex-direction:column;gap:14px">
                  <El css="aspect-ratio:3/2;overflow:hidden;background:#141216">
                    <El role="img" aria-label={f[3]} css={`width:100%;height:100%;background:url('/assets/company/${f[0]}') center/cover no-repeat;transition:transform 1.2s cubic-bezier(.2,.8,.2,1)`} hover="transform:scale(1.04)" />
                  </El>
                  <El as="figcaption" css={`display:flex;justify-content:space-between;gap:12px;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>
                    <El as="span" css="color:#F4F1EA">{f[1]}</El><span>{f[2]}</span>
                  </El>
                </El>
              ))}
            </El>
          </El>

          {/* 09 Offices */}
          <El as="section" id="offices" css={`position:relative;background:#08070A;padding:clamp(100px,12vw,190px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(40px,5vw,72px)">
              <El>
                <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:16px`}>Offices &#8212; 4 locations, 3 continents</El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.6rem,6.4vw,6.6rem);line-height:.88;letter-spacing:-.065em;font-weight:500">Close to you, <Em>whatever the time zone.</Em></El>
              </El>
              <El as="p" data-rv="1" css="margin:0;max-width:44ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">Engineering in India, client teams in the US and Australia. Someone at Mariox is working while you are.</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,max(260px,calc(50% - 1px))),1fr));border-top:1px solid rgba(244,241,234,.16);border-left:1px solid rgba(244,241,234,.16)">
              {OFFICES.map((o, i) => (
                <El as="article" key={o[0]} data-rv="1" css="position:relative;border-right:1px solid rgba(244,241,234,.16);border-bottom:1px solid rgba(244,241,234,.16);padding:clamp(24px,2.8vw,40px);min-height:clamp(320px,30vw,420px);display:flex;flex-direction:column;gap:18px;transition:background .45s,color .45s" hover="background:#F04423;color:#08070A">
                  <El css={`display:flex;justify-content:space-between;align-items:baseline;gap:12px;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase`}>
                    <span>{String(i + 1).padStart(2, '0')} &#183; {o[2]}</span>
                    <El as="span" css="display:flex;align-items:center;gap:8px"><El as="span" css="width:6px;height:6px;border-radius:50%;background:#F04423" />Office</El>
                  </El>
                  <El css="margin-top:auto">
                    <El css="font-size:clamp(2.4rem,4.6vw,4.4rem);line-height:.88;letter-spacing:-.065em;font-weight:500">{o[0]}</El>
                    <El css="margin-top:10px;font-size:15px;opacity:.75">{o[1]}</El>
                  </El>
                  <El css="display:flex;justify-content:space-between;align-items:baseline;gap:12px;padding-top:16px;border-top:1px solid rgba(128,124,118,.35)">
                    <Clock tz={o[3]} />
                    <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;opacity:.7`}>{o[4]}</El>
                  </El>
                </El>
              ))}
            </El>
            <El data-rv="1" css="display:flex;flex-wrap:wrap;gap:12px 32px;margin-top:28px;font-size:15px;color:#D9D5CD">
              <El as="a" href="mailto:admin@marioxsoftware.com" css="border-bottom:1px solid #F04423;padding-bottom:3px">admin@marioxsoftware.com</El>
              <El as="a" href="tel:+919599287045" css="border-bottom:1px solid #F04423;padding-bottom:3px">+91 95992 87045</El>
            </El>
          </El>

          {/* 11 Engagement */}
          <El as="section" id="engage" css={`position:relative;background:#08070A;padding:clamp(100px,12vw,190px) ${PAD} 0`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,5vw,72px)">
              <El>
                <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:16px`}>Ways to work</El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.6rem,6.4vw,6.6rem);line-height:.88;letter-spacing:-.06em;font-weight:500">Three ways <Em>to start.</Em></El>
              </El>
              <El as="p" data-rv="1" css="margin:0;max-width:42ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">Many clients start with a fixed scope and move to a dedicated team.</El>
            </El>
            <Models models={ENGAGE} />
          </El>

          <ProofSection clients={clients} trust={TRUST} eyebrow="Proof" />

          {/* 13 FAQ */}
          <El as="section" css={`padding:clamp(90px,11vw,170px) ${PAD};display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(28px,4vw,72px);align-items:start`}>
            <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.2rem,4.6vw,4.4rem);line-height:.9;letter-spacing:-.06em;font-weight:500">The company, <Em>answered.</Em></El>
            <El css="grid-column:span 2;min-width:min(100%,300px);border-top:1px solid rgba(244,241,234,.16)">
              {FAQ.map(([q, a], i) => {
                const on = faqOpen === i;
                return (
                  <El key={q} css="border-bottom:1px solid rgba(244,241,234,.16)">
                    <El as="button" type="button" onClick={() => setFaqOpen(on ? -1 : i)} aria-expanded={on} css="width:100%;background:transparent;border:0;color:#F4F1EA;cursor:pointer;display:flex;justify-content:space-between;gap:20px;align-items:baseline;padding:clamp(18px,2vw,26px) 0;text-align:left;font-family:Geist,sans-serif;font-size:clamp(1.1rem,1.7vw,1.5rem);font-weight:500;letter-spacing:-.035em">
                      {q}<El as="span" css={`${MONO};font-size:18px;color:#F04423`}>{on ? '−' : '+'}</El>
                    </El>
                    {on ? <El as="p" css="margin:0 0 24px;max-width:60ch;font-size:16px;line-height:1.6;color:#B7B2AA">{a}</El> : null}
                  </El>
                );
              })}
            </El>
          </El>

          {/* 14 Contact */}
          <El as="section" id="contact" css={`position:relative;padding:clamp(100px,11vw,170px) ${PAD};background:#0E0D11;border-top:1px solid rgba(244,241,234,.08)`}>
            <El css="position:relative;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,400px),1fr));gap:clamp(36px,5vw,90px);align-items:end">
              <El>
                <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#B7B2AA;margin-bottom:24px`}>Start</El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(3.2rem,9vw,10rem);line-height:.84;letter-spacing:-.07em;font-weight:500">Work with <Em>this team?</Em></El>
                <El data-rv="1" css="display:flex;flex-wrap:wrap;gap:10px 28px;margin-top:clamp(28px,3.4vw,44px);font-size:16px">
                  <El as="a" href="mailto:admin@marioxsoftware.com" css="border-bottom:1px solid rgba(244,241,234,.4);padding-bottom:4px">admin@marioxsoftware.com</El>
                  <El as="a" href="tel:+919599287045" css="border-bottom:1px solid rgba(244,241,234,.4);padding-bottom:4px">+91 95992 87045</El>
                </El>
              </El>
              <El data-rv="1"><EstimateForm id="company-estimate" title="Tell us about the project" source="company" dark /></El>
            </El>
          </El>

          <Footer />
        </El>
      </Shell>
    </>
  );
}

Company.bare = true;
