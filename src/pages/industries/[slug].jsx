import React, { useRef, useState } from 'react';
import Link from 'next/link';
import El from '@/components/El';
import { Seo, JsonLd } from '@/components/sections';
import Nav from '@/components/final/Nav';
import EstimateForm from '@/components/final/EstimateForm';
import { MONO, SERIF, PAD, Em, Shell } from '@/components/final/ui';
import { useReveal } from '@/components/final/fx';
import { industries, bySlug, fallbackPhoto } from '@/data/final/industries';
import { SITE_URL } from '@/data/site';

// Industry page from the design's `industry-template.dc.html`: one component for
// all 34 industries.

const STACK = [
  ['Frontend', ['React', 'Next.js', 'Angular', 'Vue', 'TypeScript']],
  ['Mobile', ['Flutter', 'React Native', 'Swift', 'Kotlin']],
  ['Backend', ['Node.js', 'Java / Spring', '.NET', 'Python', 'Go']],
  ['Data', ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Elasticsearch', 'Power BI']],
  ['Cloud & DevOps', ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'Docker']],
  ['AI', ['OpenAI', 'Claude', 'LangChain', 'PyTorch', 'pgvector']],
  ['Security', ['OAuth 2.0', 'Keycloak', 'OWASP', 'Vault', 'SSO / SAML']],
];

const CERTS = [
  { k: 'Cloud', t: 'AWS', s: 'Certified engineers' },
  { k: 'Cloud', t: 'Microsoft Azure', s: 'Certified engineers' },
  { k: 'Cloud', t: 'Google Cloud', s: 'Certified engineers' },
  { k: 'Security', t: 'ISO 27001', s: 'Information security' },
  { k: 'Rating', t: 'Clutch', s: 'Verified client reviews' },
  { k: 'Rating', t: 'Google 4.8★', s: '138 reviews' },
];

export default function IndustryPage({ ind, related, total, heroPhoto }) {
  const [tab, setTab] = useState(0);
  const [faqOpen, setFaqOpen] = useState(0);
  const estimateRef = useRef(null);
  useReveal([ind.slug]);

  const nm = ind.name.toLowerCase();
  const title = `${ind.name} Software & App Development Company | Mariox Software`;
  const description = `${ind.name} software and app development by Mariox Software. ${ind.sub} Free estimate in one business day.`;

  const pillars = [
    { n: '01', t: 'Domain first', b: `We map ${nm} workflows, users and regulations before design starts, so the product fits how the business already runs.` },
    { n: '02', t: 'Compliance in the architecture', b: `Requirements such as ${ind.compliance.slice(0, 2).join(' and ')} are built into data models, access and audit logs from the first sprint.` },
    { n: '03', t: 'Senior engineers only', b: `The people who scope your ${nm} product are the people who build it. No juniors behind an account manager.` },
    { n: '04', t: 'Built for peak load', b: `Load testing, caching and monitoring are planned for the moments ${nm} traffic spikes, not after launch.` },
    { n: '05', t: 'You own everything', b: 'Code, cloud accounts and documentation sit in your name from the first commit.' },
  ];
  const steps = [
    { n: '01', w: '1–2 weeks', t: 'Discover', b: `Workflows, users and ${nm} requirements mapped with your team.` },
    { n: '02', w: '1 week', t: 'Scope', b: 'Architecture, compliance needs and a fixed estimate you can plan around.' },
    { n: '03', w: 'Sprints', t: 'Build', b: 'Two-week sprints with a working demo at the end of every one.' },
    { n: '04', w: 'Ongoing', t: 'Launch & run', b: 'Release, monitoring and a team that stays for what comes next.' },
  ];
  const models = [
    { n: '01', w: '2–4 weeks', t: 'Product discovery', b: 'Map what to build, the risks and a fixed estimate before committing to the full build.' },
    { n: '02', w: 'Fixed scope', t: 'Build & launch', b: 'Two-week sprints with a demo every time, through release and handover.' },
    { n: '03', w: 'Monthly', t: 'Dedicated team', b: `A senior squad that works only on your ${nm} product, scaling up or down by the month.` },
  ];
  const techCaps = [
    { n: '01', t: 'AI & agents', b: `Assistants, document reading and decision support built into ${nm} workflows, evaluated before launch.` },
    { n: '02', t: 'Cloud', b: 'Secure, auto-scaling infrastructure on AWS, Azure or Google Cloud, with data kept in the region you need.' },
    { n: '03', t: 'Data & analytics', b: `Pipelines and dashboards that turn ${nm} operations data into decisions leadership trusts.` },
    { n: '04', t: 'Automation', b: 'Manual handoffs, approvals and data entry replaced by workflows that log every step.' },
    { n: '05', t: 'IoT & devices', b: 'Sensors, scanners and devices connected to your systems where physical operations matter.' },
    { n: '06', t: 'Blockchain', b: 'Shared ledgers only where multiple parties need a record none of them controls.' },
  ];
  const faq = [
    [`How much does ${nm} software cost?`, 'It depends on scope. Most first releases fall between $25k and $150k. After a short discovery we give a fixed estimate, so the number holds.'],
    ['How long does it take?', 'A focused first version usually takes 8 to 16 weeks. Larger platforms are released in phases so you see value early.'],
    [`Can you meet ${nm} compliance needs?`, `Yes. We confirm requirements such as ${ind.compliance.slice(0, 2).join(' and ')} at discovery and build them into architecture and access controls from day one.`],
    ['Who owns the code?', 'You do, from the first commit. Repositories, cloud accounts and documentation stay in your name.'],
    ['Do you work with startups and large companies?', `Both. Startups usually begin with an MVP; larger ${nm} companies often start with modernising one system or adding a new channel.`],
    ['Can you modernise our existing system?', 'Yes. We audit the code and infrastructure first, then replace parts in phases so daily operations never stop.'],
    ['How do you use AI responsibly?', 'Only where it has a clear job. Every model is tested on your data, outputs are reviewed by people, and usage is logged.'],
    ['What happens after launch?', 'The same team stays on for monitoring, fixes and new features, on a monthly plan you can scale up or down.'],
  ].map(([q, a]) => ({ q, a }));

  const stats = [
    { v: '100+', l: 'Senior engineers' },
    { v: '300+', l: 'Products shipped' },
    { v: ind.cases.length ? `${ind.cases.length} clients` : '4.8 ★', l: ind.cases.length ? `In ${ind.name}` : '138 Google reviews' },
    { v: 'NDA', l: 'Before the first call' },
  ];
  const clients = ind.cases.map((c) => c.name)
    .concat(['Airwallex', 'Zeller', 'Kogan', 'HotDoc', 'Graphy', 'Fynd', 'MILKRUN', 'Snitch', 'Testbook', 'Skydo'])
    .filter((x, i, a) => a.indexOf(x) === i).slice(0, 10);

  return (
    <>
      <Seo title={title} description={description} canonical={`${SITE_URL}/industries/${ind.slug}`} />
      <JsonLd
        id="industry-faq"
        data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }}
      />
      <JsonLd
        id="industry-breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Industries', item: `${SITE_URL}/industries` },
            { '@type': 'ListItem', position: 2, name: ind.name, item: `${SITE_URL}/industries/${ind.slug}` },
          ],
        }}
      />

      <Shell>
        <Nav active="industries" ctaHref="#start" />
        <El as="main">
          {/* 01 Hero */}
          <El as="section" css={`position:relative;isolation:isolate;overflow:hidden;min-height:100svh;padding:clamp(130px,13vw,180px) ${PAD} clamp(40px,5vw,72px);display:flex;flex-direction:column;justify-content:flex-end`}>
            <El aria-hidden="true" css={`position:absolute;inset:0;z-index:-3;background-color:#08070A;background-size:cover;background-position:center;background-image:url("${heroPhoto}");animation:mxKen 28s ease-in-out infinite alternate`} />
            <El aria-hidden="true" css="position:absolute;inset:0;z-index:-2;background:linear-gradient(90deg,rgba(8,7,10,.95) 0%,rgba(8,7,10,.8) 40%,rgba(8,7,10,.38) 72%,rgba(8,7,10,.2) 100%),linear-gradient(0deg,#08070A 0%,rgba(8,7,10,0) 38%),linear-gradient(180deg,rgba(8,7,10,.75) 0%,rgba(8,7,10,0) 24%)" />
            <El aria-hidden="true" css="position:absolute;inset:0;z-index:-1;background-image:linear-gradient(rgba(244,241,234,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(244,241,234,.04) 1px,transparent 1px);background-size:80px 80px;mask-image:linear-gradient(90deg,transparent 35%,#000 80%);-webkit-mask-image:linear-gradient(90deg,transparent 35%,#000 80%)" />
            <El css={`position:absolute;top:clamp(100px,10vw,130px);right:${PAD};display:flex;flex-direction:column;align-items:flex-end;gap:6px;${MONO};letter-spacing:.14em;text-transform:uppercase;font-size:11px;color:#D9D5CD`}>
              <El as="span" css="font-size:clamp(3.2rem,7vw,7rem);font-family:Geist,sans-serif;font-weight:300;letter-spacing:-.07em;line-height:.8;color:rgba(244,241,234,.9);text-transform:none">{ind.n}</El>
              <span>Industry &#183; of {total}</span>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:clamp(32px,5vw,80px);align-items:end">
              <El>
                <El as="nav" aria-label="Breadcrumb" css={`display:flex;flex-wrap:wrap;gap:10px;align-items:center;${MONO};letter-spacing:.14em;text-transform:uppercase;font-size:11.5px;color:#B7B2AA;margin-bottom:clamp(22px,2.6vw,34px)`}>
                  <El as={Link} href="/industries">Industries</El><span>/</span>
                  <El as="span" css="color:#F04423">{ind.group}</El><span>/</span>
                  <El as="span" css="color:#F4F1EA">{ind.name}</El>
                </El>
                <El as="h1" css="margin:0;font-size:clamp(2.8rem,7.2vw,7.4rem);line-height:.88;letter-spacing:-.065em;font-weight:500;text-wrap:balance">
                  {ind.name} <Em>software &amp; app development</Em><El as="span" css="color:#F04423">.</El>
                </El>
                <El as="p" css="margin:clamp(22px,2.6vw,34px) 0 0;max-width:30ch;font-size:clamp(1.3rem,2.2vw,2rem);line-height:1.15;letter-spacing:-.035em">{ind.hook}</El>
                <El as="p" css="margin:16px 0 0;max-width:46ch;font-size:clamp(15.5px,1.25vw,18px);line-height:1.55;color:#D9D5CD">{ind.sub}</El>
                <El css="display:flex;flex-wrap:wrap;gap:10px;margin-top:clamp(26px,3vw,40px)">
                  <El as="a" href="#start" css="display:flex;align-items:center;gap:14px;background:#F04423;color:#08070A;padding:18px 24px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap;transition:background .3s" hover="background:#F4F1EA;color:#08070A"><span>Get your {ind.name} estimate</span> <span>&#8594;</span></El>
                  <El as="a" href="#build" css="display:flex;align-items:center;gap:14px;border:1px solid rgba(244,241,234,.4);background:rgba(8,7,10,.3);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);padding:18px 24px;border-radius:999px;font-size:15px;white-space:nowrap" hover="border-color:#F4F1EA;color:#F4F1EA">What we build &#8595;</El>
                </El>
              </El>
              <El css="justify-self:end;width:min(100%,440px);display:flex;flex-direction:column;gap:12px">
                {ind.cases[0] ? (
                  <El as={Link} href="/work" css="display:grid;grid-template-columns:120px 1fr;gap:16px;align-items:center;padding:10px;background:rgba(8,7,10,.62);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(244,241,234,.16)">
                    <El as="span" role="img" aria-label={`${ind.cases[0].name} product screen`} css={`aspect-ratio:4/3;background-color:#141216;background-size:cover;background-position:center;background-image:url("${ind.cases[0].img}")`} />
                    <El as="span" css="display:flex;flex-direction:column;gap:6px">
                      <El as="span" css={`${MONO};letter-spacing:.14em;text-transform:uppercase;font-size:10.5px;color:#F04423`}>From our work</El>
                      <El as="span" css="font-size:18px;font-weight:500;letter-spacing:-.03em">{ind.cases[0].name} &#8599;</El>
                    </El>
                  </El>
                ) : null}
                <El css="padding:clamp(18px,2vw,26px);background:rgba(8,7,10,.62);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(244,241,234,.16)">
                  <El css={`display:flex;justify-content:space-between;${MONO};letter-spacing:.14em;text-transform:uppercase;font-size:10.5px;color:#B7B2AA;padding-bottom:12px;border-bottom:1px solid rgba(244,241,234,.16);margin-bottom:10px`}>
                    <span>What we build</span><span>{ind.group}</span>
                  </El>
                  {ind.builds.map((b, i) => (
                    <El key={b.t} css={`display:flex;align-items:baseline;gap:14px;padding:6px 0;font-size:clamp(1.02rem,1.4vw,1.25rem);font-weight:500;letter-spacing:-.03em;color:${i === 0 ? '#F4F1EA' : `rgba(244,241,234,${0.75 - i * 0.1})`}`}>
                      <El as="span" css={`${MONO};font-size:10.5px;color:#F04423`}>{String(i + 1).padStart(2, '0')}</El>{b.t}
                    </El>
                  ))}
                </El>
              </El>
            </El>
          </El>

          {/* 02 Clients */}
          <El as="section" aria-label="Clients" css={`border-top:1px solid rgba(244,241,234,.12);padding:clamp(22px,2.6vw,32px) ${PAD};display:flex;flex-wrap:wrap;align-items:baseline;gap:10px clamp(20px,2.6vw,40px)`}>
            <El as="span" css={`${MONO};letter-spacing:.16em;text-transform:uppercase;font-size:11px;color:#8E8A85`}>Trusted by</El>
            {clients.map((c, i) => (
              <El as="span" key={c} css={`font-size:clamp(1.05rem,1.6vw,1.4rem);font-weight:500;letter-spacing:-.04em;color:${i < ind.cases.length ? '#F4F1EA' : '#8E8A85'}`}>{c}</El>
            ))}
          </El>

          {/* 03 Proof */}
          <El as="section" css="border-top:1px solid rgba(244,241,234,.12);border-bottom:1px solid rgba(244,241,234,.12);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr))">
            {stats.map((s) => (
              <El key={s.l} css={`padding:clamp(20px,2.4vw,32px) ${PAD} clamp(20px,2.4vw,32px) clamp(18px,2vw,32px);border-right:1px solid rgba(244,241,234,.12)`}>
                <El css="font-size:clamp(1.8rem,3vw,2.8rem);font-weight:300;letter-spacing:-.06em;line-height:1">{s.v}</El>
                <El css={`margin-top:8px;${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#8E8A85`}>{s.l}</El>
              </El>
            ))}
          </El>

          {/* 04 Challenges */}
          <El as="section" css={`background:#F4F1EA;color:#08070A;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="margin-bottom:clamp(36px,4.6vw,64px)">
              <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55;margin-bottom:16px`}>What makes {ind.name} hard</El>
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.4rem,5.6vw,5.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">The problems <Em>we design around.</Em></El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));border-top:1px solid rgba(8,7,10,.2)">
              {ind.challenges.map((c, i) => (
                <El key={c.t} data-rv="1" css="padding:clamp(24px,3vw,40px) clamp(0px,2vw,32px) clamp(24px,3vw,40px) 0;border-bottom:1px solid rgba(8,7,10,.2);display:flex;flex-direction:column;gap:14px">
                  <El as="span" css="font-size:clamp(3rem,5vw,4.6rem);font-weight:300;letter-spacing:-.07em;line-height:.9;color:#F04423">{String(i + 1).padStart(2, '0')}</El>
                  <El as="h3" css="margin:0;font-size:clamp(1.4rem,2.2vw,2rem);line-height:1;letter-spacing:-.05em;font-weight:500">{c.t}</El>
                  <El as="p" css="margin:0;max-width:36ch;font-size:15.5px;line-height:1.55;color:#4A4741">{c.b}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 05 Why Mariox */}
          <El as="section" css={`padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="margin-bottom:clamp(36px,4.6vw,64px)">
              <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:16px`}>Why Mariox for {ind.name}</El>
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.4rem,5.6vw,5.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">Built for how {ind.name} <Em>actually works.</Em></El>
            </El>
            <El css="display:flex;flex-direction:column;border-top:1px solid rgba(244,241,234,.16)">
              {pillars.map((p) => (
                <El key={p.n} data-rv="1" css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:12px clamp(24px,4vw,64px);padding:clamp(22px,2.6vw,34px) 0;border-bottom:1px solid rgba(244,241,234,.16);align-items:baseline">
                  <El css="display:flex;gap:18px;align-items:baseline">
                    <El as="span" css={`${MONO};font-size:12px;color:#F04423`}>{p.n}</El>
                    <El as="h3" css="margin:0;font-size:clamp(1.6rem,3vw,2.8rem);line-height:.95;letter-spacing:-.055em;font-weight:500">{p.t}</El>
                  </El>
                  <El as="p" css="margin:0;max-width:52ch;font-size:16px;line-height:1.55;color:#B7B2AA">{p.b}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 06 Mid CTA */}
          <El as="section" css={`margin:0 ${PAD};background:#F04423;color:#08070A;padding:clamp(36px,4.6vw,64px);display:flex;flex-wrap:wrap;gap:24px;justify-content:space-between;align-items:center`}>
            <El css="max-width:30ch;font-size:clamp(1.7rem,3.4vw,3.2rem);line-height:.98;letter-spacing:-.055em;font-weight:500">Planning a {ind.name} product? <Em>Start with one call.</Em></El>
            <El as="a" href="#start" css="display:flex;align-items:center;gap:12px;background:#08070A;color:#F4F1EA;padding:18px 26px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap" hover="background:#F4F1EA;color:#08070A"><span>Book a strategy call</span> <span>&#8594;</span></El>
          </El>

          {/* 07 What we build */}
          <El as="section" id="build" css={`padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,4.6vw,64px)">
              <El>
                <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:16px`}>What we build</El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.4rem,5.6vw,5.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">{ind.name} products, <Em>end to end.</Em></El>
              </El>
              <El as="p" data-rv="1" css="margin:0;max-width:42ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">Pick one, or combine them. Each comes with design, engineering, QA, cloud and support from the same team.</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));border-top:1px solid rgba(244,241,234,.16);border-left:1px solid rgba(244,241,234,.16)">
              {ind.builds.map((b, i) => (
                <El as="a" key={b.t} href="#start" data-rv="1" css="border-right:1px solid rgba(244,241,234,.16);border-bottom:1px solid rgba(244,241,234,.16);padding:clamp(24px,2.8vw,38px);min-height:250px;display:flex;flex-direction:column;gap:14px;transition:background .45s,color .45s" hover="background:#F04423;color:#08070A">
                  <El css={`display:flex;justify-content:space-between;${MONO};font-size:11px;letter-spacing:.14em;opacity:.7`}><span>{String(i + 1).padStart(2, '0')}</span><span>&#8599;</span></El>
                  <El as="h3" css="margin:auto 0 0;font-size:clamp(1.5rem,2.4vw,2.2rem);line-height:.95;letter-spacing:-.055em;font-weight:500">{b.t}</El>
                  <El as="p" css="margin:0;font-size:15px;line-height:1.5;opacity:.78">{b.b}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 08 Work */}
          {ind.cases.length ? (
            <El as="section" css={`padding:0 ${PAD} clamp(90px,11vw,170px)`}>
              <El css="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:16px;margin-bottom:clamp(28px,3.4vw,48px);padding-top:clamp(60px,7vw,100px);border-top:1px solid rgba(244,241,234,.12)">
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.2rem,4.6vw,4.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">{ind.name} work <Em>we have shipped.</Em></El>
                <El as={Link} href="/work" css="display:flex;gap:10px;border-bottom:1px solid #F04423;padding-bottom:5px;font-size:15px">All work &#8594;</El>
              </El>
              <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:clamp(12px,1.4vw,20px)">
                {ind.cases.map((c) => (
                  <El as={Link} key={c.name} href="/work" data-rv="1" css="display:flex;flex-direction:column;gap:14px">
                    <El css="aspect-ratio:4/3;overflow:hidden;background:#141216">
                      <El role="img" aria-label={`${c.name} product screen`} css={`width:100%;height:100%;background-color:#141216;background-position:center;background-size:cover;background-repeat:no-repeat;background-image:url("${c.img}");transition:transform 1.1s cubic-bezier(.2,.8,.2,1)`} hover="transform:scale(1.05)" />
                    </El>
                    <El css="display:flex;justify-content:space-between;gap:12px;align-items:baseline">
                      <El as="span" css="font-size:clamp(1.3rem,2vw,1.8rem);font-weight:500;letter-spacing:-.045em">{c.name}</El>
                      <El as="span" css="font-size:14px;color:#8E8A85;text-align:right">{c.line}</El>
                    </El>
                  </El>
                ))}
              </El>
            </El>
          ) : null}

          {/* 09 Client voice */}
          <El as="section" css={`background:#F4F1EA;color:#08070A;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="margin-bottom:clamp(36px,4.6vw,64px)">
              <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55;margin-bottom:16px`}>Client feedback</El>
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.4rem,5.6vw,5.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">What working with us <Em>is like.</Em></El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:clamp(12px,1.4vw,20px)">
              <El data-rv="1" css="background:#08070A;color:#F4F1EA;padding:clamp(24px,3vw,40px);display:flex;flex-direction:column;justify-content:space-between;gap:24px;min-height:340px">
                <El css={`${MONO};letter-spacing:.16em;text-transform:uppercase;font-size:11px;color:#8E8A85`}>Rated by clients</El>
                <El>
                  <El css="font-size:clamp(4rem,8vw,7rem);font-weight:300;letter-spacing:-.08em;line-height:.85">4.8<El as="span" css="color:#F04423">&#9733;</El></El>
                  <El css="margin-top:12px;font-size:15px;color:#B7B2AA">From 138 Google reviews</El>
                </El>
                <El as="a" href="https://www.google.com/search?q=Mariox+Software+reviews" target="_blank" rel="noopener noreferrer" css="align-self:flex-start;border-bottom:1px solid #F04423;padding-bottom:4px;font-size:14.5px">Read the reviews &#8599;</El>
              </El>
            </El>
          </El>

          {/* 10 Certifications */}
          <El as="section" css={`padding:clamp(70px,8vw,120px) ${PAD} 0`}>
            <El css="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:16px;margin-bottom:24px">
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(1.8rem,3.4vw,3.2rem);letter-spacing:-.055em;font-weight:500">Certified, <Em>and accountable.</Em></El>
              <El as="span" css={`${MONO};letter-spacing:.16em;text-transform:uppercase;font-size:11px;color:#8E8A85`}>Partners &#183; certifications &#183; ratings</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));border-top:1px solid rgba(244,241,234,.16);border-left:1px solid rgba(244,241,234,.16)">
              {CERTS.map((c) => (
                <El key={c.t} data-rv="1" css="border-right:1px solid rgba(244,241,234,.16);border-bottom:1px solid rgba(244,241,234,.16);padding:clamp(20px,2.2vw,28px);display:flex;flex-direction:column;gap:10px;min-height:150px">
                  <El as="span" css={`${MONO};letter-spacing:.16em;text-transform:uppercase;font-size:10.5px;color:#F04423`}>{c.k}</El>
                  <El as="span" css="margin-top:auto;font-size:clamp(1.2rem,1.8vw,1.6rem);font-weight:500;letter-spacing:-.04em;line-height:1.05">{c.t}</El>
                  <El as="span" css="font-size:13.5px;color:#8E8A85">{c.s}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 11 Stack & compliance */}
          <El as="section" css={`background:#0E0D11;border-top:1px solid rgba(244,241,234,.08);border-bottom:1px solid rgba(244,241,234,.08);padding:clamp(80px,9vw,140px) ${PAD};display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(36px,5vw,80px)`}>
            <El>
              <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:18px`}>Compliance we build for</El>
              <El css="display:flex;flex-wrap:wrap;gap:8px">
                {ind.compliance.map((c) => <El as="span" key={c} data-rv="1" css="border:1px solid rgba(244,241,234,.25);border-radius:999px;padding:10px 16px;font-size:15px">{c}</El>)}
              </El>
              <El as="p" css="margin:22px 0 0;max-width:46ch;font-size:14px;line-height:1.55;color:#8E8A85">Requirements are confirmed with your compliance team at discovery and built into architecture, access and audit logs from the first sprint.</El>
            </El>
            <El>
              <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:18px`}>Typical stack</El>
              <El css="display:flex;flex-wrap:wrap;gap:clamp(8px,1vw,14px)">
                {ind.stack.map((t) => <El as="span" key={t} data-rv="1" css="font-size:clamp(1.6rem,3.2vw,3rem);font-weight:300;letter-spacing:-.06em;line-height:1.05;padding-right:clamp(8px,1.2vw,18px);border-right:1px solid rgba(244,241,234,.16)">{t}</El>)}
              </El>
            </El>
          </El>

          {/* 12 Technologies */}
          <El as="section" css={`padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,4.6vw,64px)">
              <El>
                <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:16px`}>Technologies we apply</El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.4rem,5.6vw,5.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">Emerging tech, <Em>applied to {ind.name}.</Em></El>
              </El>
              <El as="p" data-rv="1" css="margin:0;max-width:44ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">Used where it solves a real problem, not as a slide in the pitch.</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));border-top:1px solid rgba(244,241,234,.16);border-left:1px solid rgba(244,241,234,.16)">
              {techCaps.map((t) => (
                <El key={t.n} data-rv="1" css="border-right:1px solid rgba(244,241,234,.16);border-bottom:1px solid rgba(244,241,234,.16);padding:clamp(22px,2.6vw,34px);min-height:230px;display:flex;flex-direction:column;gap:12px;transition:background .45s,color .45s" hover="background:#F4F1EA;color:#08070A">
                  <El as="span" css={`${MONO};font-size:11px;letter-spacing:.14em;color:#F04423`}>{t.n}</El>
                  <El as="h3" css="margin:auto 0 0;font-size:clamp(1.4rem,2.2vw,2rem);letter-spacing:-.05em;font-weight:500">{t.t}</El>
                  <El as="p" css="margin:0;font-size:15px;line-height:1.5;opacity:.78">{t.b}</El>
                </El>
              ))}
            </El>
            <El css="margin-top:clamp(56px,7vw,100px)">
              <El css="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:16px;margin-bottom:18px">
                <El as="h3" css="margin:0;font-size:clamp(1.6rem,2.8vw,2.6rem);letter-spacing:-.05em;font-weight:500">Full stack</El>
                <El as="span" css="display:flex;align-items:center;gap:8px;font-size:13.5px;color:#8E8A85"><El as="span" css="width:8px;height:8px;background:#F04423" />Typical for {ind.name}</El>
              </El>
              <El role="tablist" css="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:22px">
                {STACK.map((s, i) => {
                  const on = tab === i;
                  return (
                    <El as="button" role="tab" type="button" key={s[0]} onClick={() => setTab(i)} aria-selected={on} css={`cursor:pointer;min-height:44px;border-radius:999px;padding:9px 16px;border:1px solid ${on ? '#F4F1EA' : 'rgba(244,241,234,.25)'};background:${on ? '#F4F1EA' : 'transparent'};color:${on ? '#08070A' : '#D9D5CD'};font-family:Geist,sans-serif;font-size:14px;transition:all .25s`}>{s[0]}</El>
                  );
                })}
              </El>
              <El css="display:flex;flex-wrap:wrap;gap:8px;min-height:60px">
                {(STACK[tab] || STACK[0])[1].map((t) => {
                  const hit = ind.stack.some((x) => x.toLowerCase().indexOf(t.toLowerCase().split(' ')[0]) >= 0 || t.toLowerCase().indexOf(x.toLowerCase().split(' ')[0]) >= 0);
                  return <El as="span" key={t} css={`border:1px solid ${hit ? '#F04423' : 'rgba(244,241,234,.2)'};background:${hit ? '#F04423' : 'transparent'};color:${hit ? '#08070A' : '#F4F1EA'};padding:12px 18px;font-size:16px;letter-spacing:-.02em`}>{t}</El>;
                })}
              </El>
            </El>
          </El>

          {/* 13 Approach */}
          <El as="section" css={`background:#F4F1EA;color:#08070A;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El as="h2" data-rv="1" css="margin:0 0 clamp(36px,4.6vw,64px);font-size:clamp(2.4rem,5.6vw,5.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">How a {ind.name} project <Em>runs.</Em></El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:clamp(18px,2.4vw,36px)">
              {steps.map((s) => (
                <El key={s.n} data-rv="1" css="border-top:2px solid #08070A;padding-top:18px;display:flex;flex-direction:column;gap:10px">
                  <El css={`display:flex;justify-content:space-between;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#5E5A55`}><El as="span" css="color:#F04423">{s.n}</El><span>{s.w}</span></El>
                  <El as="h3" css="margin:0;font-size:clamp(1.5rem,2.2vw,2rem);letter-spacing:-.05em;font-weight:500">{s.t}</El>
                  <El as="p" css="margin:0;font-size:15px;line-height:1.5;color:#4A4741">{s.b}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 14 Models */}
          <El as="section" css={`padding:clamp(90px,11vw,170px) ${PAD} 0`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,4.6vw,64px)">
              <El>
                <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:16px`}>Ways to work</El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.4rem,5.6vw,5.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">Three ways <Em>to start.</Em></El>
              </El>
              <El as="p" data-rv="1" css="margin:0;max-width:44ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">Most clients begin with discovery, then keep the same people on as a dedicated team.</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:clamp(12px,1.4vw,20px)">
              {models.map((m) => (
                <El key={m.n} data-rv="1" css="border:1px solid rgba(244,241,234,.16);padding:clamp(24px,3vw,40px);min-height:300px;display:flex;flex-direction:column;gap:14px;transition:background .45s,color .45s,border-color .45s" hover="background:#F04423;color:#08070A;border-color:#F04423">
                  <El css={`display:flex;justify-content:space-between;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;opacity:.8`}><span>{m.n}</span><span>{m.w}</span></El>
                  <El as="h3" css="margin:auto 0 0;font-size:clamp(1.8rem,2.8vw,2.6rem);line-height:.95;letter-spacing:-.055em;font-weight:500">{m.t}</El>
                  <El as="p" css="margin:0;font-size:15.5px;line-height:1.5;opacity:.8">{m.b}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 15 FAQ */}
          <El as="section" css={`padding:clamp(90px,11vw,170px) ${PAD};display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(28px,4vw,72px);align-items:start`}>
            <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.2rem,4.6vw,4.4rem);line-height:.9;letter-spacing:-.06em;font-weight:500">{ind.name}, <Em>answered.</Em></El>
            <El css="grid-column:span 2;min-width:min(100%,300px);border-top:1px solid rgba(244,241,234,.16)">
              {faq.map((q, i) => {
                const on = faqOpen === i;
                return (
                  <El key={q.q} css="border-bottom:1px solid rgba(244,241,234,.16)">
                    <El as="button" type="button" onClick={() => setFaqOpen(on ? -1 : i)} aria-expanded={on} css="width:100%;background:transparent;border:0;color:#F4F1EA;cursor:pointer;display:flex;justify-content:space-between;gap:20px;align-items:baseline;padding:clamp(18px,2vw,26px) 0;text-align:left;font-family:Geist,sans-serif;font-size:clamp(1.1rem,1.7vw,1.5rem);font-weight:500;letter-spacing:-.035em">
                      {q.q}<El as="span" css={`${MONO};font-size:18px;color:#F04423`}>{on ? '−' : '+'}</El>
                    </El>
                    {on ? <El as="p" css="margin:0 0 24px;max-width:60ch;font-size:16px;line-height:1.6;color:#B7B2AA">{q.a}</El> : null}
                  </El>
                );
              })}
            </El>
          </El>

          {/* 16 Start */}
          <El as="section" id="start" ref={estimateRef} css={`background:#0E0D11;border-top:1px solid rgba(244,241,234,.08);padding:clamp(90px,11vw,170px) ${PAD};display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr));gap:clamp(36px,5vw,80px);align-items:start`}>
            <El>
              <El as="h2" css="margin:0;font-size:clamp(2.6rem,6vw,6rem);line-height:.88;letter-spacing:-.065em;font-weight:500">Building in {ind.name}? <Em color="#F04423">Let&#8217;s talk.</Em></El>
              <El as="p" css="margin:22px 0 0;max-width:40ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">A senior engineer replies within one business day with first questions and an estimate range. NDA on request.</El>
              <El css="display:flex;flex-direction:column;gap:8px;margin-top:28px;font-size:15px">
                <El as="a" href="mailto:admin@marioxsoftware.com">admin@marioxsoftware.com</El>
                <El as="a" href="tel:+919599287045">+91 95992 87045</El>
              </El>
            </El>
            <EstimateForm
              id="industry-estimate"
              title={`Get your ${ind.name} estimate`}
              source={`industry:${ind.slug}`}
              subject={`${ind.name} software development`}
              needs={ind.builds.map((b) => b.t)}
              messageLabel="What are you building?"
              messagePlaceholder={`Your ${nm} product, users and timeline`}
              dark
            />
          </El>

          {/* 17 Related */}
          <El as="section" css={`padding:clamp(70px,8vw,120px) ${PAD}`}>
            <El css="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:16px;margin-bottom:24px">
              <El as="h2" css="margin:0;font-size:clamp(1.6rem,2.8vw,2.6rem);letter-spacing:-.05em;font-weight:500">Other industries</El>
              <El as={Link} href="/industries" css="border-bottom:1px solid #F04423;padding-bottom:5px;font-size:15px">All {total} industries &#8594;</El>
            </El>
            <El css="display:flex;flex-wrap:wrap;gap:8px">
              {related.map((r) => (
                <El as={Link} key={r.slug} href={`/industries/${r.slug}`} css="border:1px solid rgba(244,241,234,.22);border-radius:999px;padding:11px 18px;font-size:15px;transition:all .25s" hover="background:#F04423;border-color:#F04423;color:#08070A">{r.name}</El>
              ))}
            </El>
          </El>

          <El as="footer" css={`border-top:1px solid rgba(244,241,234,.12);padding:clamp(40px,5vw,72px) ${PAD} 26px;overflow:hidden`}>
            <El aria-hidden="true" css="display:flex;align-items:flex-end;gap:clamp(10px,1.6vw,26px);line-height:.74">
              <El as="span" css="width:clamp(40px,11vw,190px);height:clamp(40px,11vw,190px);background:#F04423;flex-shrink:0;margin-bottom:.06em" />
              <El as="span" css="font-size:clamp(4rem,19.5vw,22rem);font-weight:500;letter-spacing:-.08em;white-space:nowrap">MARIOX</El>
            </El>
            <El css={`display:flex;flex-wrap:wrap;justify-content:space-between;gap:16px;margin-top:26px;padding-top:18px;border-top:1px solid rgba(244,241,234,.12);${MONO};font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#8E8A85`}>
              <span>&#169; {new Date().getFullYear()} Mariox Software</span>
              <span>{ind.name} software development</span>
            </El>
          </El>
        </El>
      </Shell>
    </>
  );
}

IndustryPage.bare = true;

export async function getStaticPaths() {
  return { paths: industries.map((i) => ({ params: { slug: i.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const ind = bySlug[params.slug];
  const related = industries
    .filter((x) => x.slug !== ind.slug && x.groupKey === ind.groupKey)
    .concat(industries.filter((x) => x.slug !== ind.slug && x.groupKey !== ind.groupKey))
    .slice(0, 10)
    .map((r) => ({ slug: r.slug, name: r.name }));
  return { props: { ind, related, total: industries.length, heroPhoto: ind.photo || fallbackPhoto } };
}
