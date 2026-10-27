import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import El from '../El';
import { Seo, JsonLd } from '@/components/sections';
import Nav from './Nav';
import Footer from './Footer';
import EstimateForm from './EstimateForm';
import {
  MONO, SERIF, PAD, Em, Head, Marquee, Faq, CtaBand, Models, WhyBand, OWNERSHIP_FAQ, Shell,
} from './ui';
import { useReveal, useScrollFx, aiCanvas } from './fx';
import { cats, services, bySlug } from '@/data/final/services';
import { SITE_URL } from '@/data/site';

// Service page from the design's `service-template.dc.html`: one component for
// all 72 services, with the AI category getting the extra neural-net canvas and
// photo band the design gave it. It is rendered at /<slug> by the root route.

// AI photography the design picked per AI service.
const AI_IMG = {
  'ai-development': 'robot-arm-brain',
  'generative-ai-and-llm-apps': 'robot-coder-city',
  'ai-agents-and-automation': 'robot-workflow-office',
  'machine-learning': 'robot-arm-network',
  'data-engineering': 'robot-arm-neural-table',
  'data-analytics-and-bi': 'team-robot-hologram',
  'big-data-engineering': 'ai-control-room',
  'ai-chatbot-development': 'robots-with-team',
  'computer-vision': 'exoskeleton-lab',
  'nlp-development': 'team-building-robot',
  'rpa-and-process-automation': 'lab-silver-robot',
  'data-science': 'team-robot-hologram',
  'mlops-and-llmops': 'robot-arm-network',
};
const AI_ALL = ['team-robot-hologram', 'lab-silver-robot', 'robot-arm-brain', 'robot-workflow-office', 'exoskeleton-lab', 'robot-coder-city', 'robot-arm-network', 'team-building-robot', 'robots-with-team', 'robot-arm-neural-table', 'ai-control-room'];
const AI_CAPS = ['Robotics & automation in the real world', 'AI assistant inside a product', 'The team training and shipping models'];

const MODELS = (model = '') => [
  { n: '01', tag: model.includes('Fixed') ? 'Recommended' : '', t: 'Fixed-scope project', b: 'A defined outcome, price and date, agreed after a short discovery.', bg: model.includes('Fixed') ? '#141216' : 'transparent', border: model.includes('Fixed') ? '#F04423' : 'rgba(244,241,234,.16)' },
  { n: '02', tag: model.includes('Dedicated') ? 'Recommended' : '', t: 'Dedicated team', b: 'A squad from our in-house team that works only on your product.', bg: model.includes('Dedicated') ? '#141216' : 'transparent', border: model.includes('Dedicated') ? '#F04423' : 'rgba(244,241,234,.16)' },
  { n: '03', tag: model === 'Monthly' ? 'Recommended' : '', t: 'Monthly retainer', b: 'Ongoing support, iteration and capacity, billed by the month.', bg: model === 'Monthly' ? '#141216' : 'transparent', border: model === 'Monthly' ? '#F04423' : 'rgba(244,241,234,.16)' },
];

export default function ServiceDetail({ service, cat, related, aiHero, aiVisual, aiBand, panel, city }) {
  const procRef = useRef(null);
  const procBar = useRef(null);
  const canvasRef = useRef(null);
  // Panel pictures are often missing from storage, so the page falls back to
  // its own hero when one fails to load.
  const [panelHeroOk, setPanelHeroOk] = useState(true);
  useReveal([service.slug]);
  useScrollFx(procRef, procBar);

  const isAI = !!cat && cat.id === 'ai-data';
  useEffect(() => {
    if (!isAI || !canvasRef.current) return undefined;
    return aiCanvas(canvasRef.current);
  }, [isAI, service.slug]);

  // Gallery of the client's screens, minus the one used as the hero visual.
  const client = service.client || null;
  const rest = (client ? client.imgs : []).filter((u) => u !== service.hero);
  const tile = (u, i, span, ratio) => ({ u, span, ratio, alt: `${client.name} screen ${i + 1}` });
  const gallery = rest.length >= 3
    ? rest.slice(0, 4).map((u, i) => tile(u, i, i === 0 ? 'span 2' : 'auto', i === 0 ? '16/10' : '4/5'))
    : rest.length === 2 ? rest.map((u, i) => tile(u, i, 'auto', '16/10'))
      : rest.length === 1 ? [tile(rest[0], 0, '1 / -1', '21/9')] : [];

  const showPanelHero = !isAI && !!service.panelHero && panelHeroOk;
  const heroBg = isAI ? aiVisual : service.hero;
  const heroCap = isAI ? `Mariox AI · ${service.name}`
    : showPanelHero ? service.name
      : client ? `Related work · ${client.name}` : service.heroCaption || 'Mariox Software';
  // Anything the admin panel holds for this slug wins; the design's own copy is
  // the fallback, so a page still reads correctly when the panel has no entry.
  // City pages (/<service>-in-<city>) reuse this layout with the city's copy.
  const seo = (panel && panel.seoMeta) || {};
  const about = (panel && panel.aboutService) || '';
  const slug = (panel && panel.slug) || service.slug;
  const topServices = ((panel && panel.topServices) || []).filter((t) => t && t.slug && t.slug !== slug);
  const blocks = ((panel && panel.images) || []).filter((b) => b && (b.title || b.content));
  const name = city ? `${service.name} in ${city}` : service.name;

  // The panel keeps city FAQs ready-written, and a master set with a {{city}}
  // placeholder to fall back on.
  const fill = (s) => (city ? String(s || '').replace(/\{\{\s*city\s*\}\}/gi, city) : s);
  const panelFaq = [...((panel && panel.faqs) || []), ...((panel && panel.masterFaqs) || [])]
    .map((f) => ({ q: fill(f.question || f.q), a: fill(f.answer || f.a) }))
    .filter((f) => f.q && f.a)
    .slice(0, 12);

  const faq = (panelFaq.length ? panelFaq : service.faq).concat(OWNERSHIP_FAQ);
  const title = seo.title || `${name} Company | ${service.tagline} | Mariox Software`;
  const description = seo.description
    || `${name} by Mariox Software: ${service.desc.split('. ')[0]}. 100+ in-house engineers since 2016. Free estimate in one business day.`;
  const heroDesc = (panel && panel.h1Desc) || service.desc;

  return (
    <>
      <Seo title={title} description={description} canonical={`${SITE_URL}/${slug}`} />
      <JsonLd
        id="service-schema"
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name,
          serviceType: service.name,
          description: service.desc,
          provider: { '@type': 'Organization', name: 'Mariox Software', url: SITE_URL },
          areaServed: ['IN', 'US', 'AU', 'GB'],
        }}
      />
      <JsonLd
        id="service-faq"
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        }}
      />
      <JsonLd
        id="service-breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Services', item: `${SITE_URL}/services` },
            ...(cat ? [{ '@type': 'ListItem', position: 2, name: cat.name, item: `${SITE_URL}/services#${cat.id}` }] : []),
            { '@type': 'ListItem', position: cat ? 3 : 2, name, item: `${SITE_URL}/${slug}` },
          ],
        }}
      />

      <Shell>
      <Nav active={service.slug} ctaHref="#estimate" />

      <El as="main" css="position:relative;padding-top:74px">
        {/* 01 Hero */}
        <El as="section" css={`position:relative;overflow:hidden;isolation:isolate;padding:clamp(48px,6vw,96px) ${PAD} clamp(40px,5vw,72px)`}>
          {isAI ? (
            <>
              <El aria-hidden="true" data-par="1" css={`position:absolute;inset:-6% 0;z-index:-2;background-color:#08070A;background-size:cover;background-position:center;background-image:url("${aiHero}")`} />
              <El aria-hidden="true" css="position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(8,7,10,.95) 0%,rgba(8,7,10,.86) 38%,rgba(8,7,10,.55) 70%,rgba(8,7,10,.4) 100%),linear-gradient(0deg,#08070A 0%,rgba(8,7,10,0) 30%),linear-gradient(180deg,rgba(8,7,10,.6) 0%,rgba(8,7,10,0) 25%)" />
            </>
          ) : null}
          <El as="nav" aria-label="Breadcrumb" css={`display:flex;flex-wrap:wrap;gap:10px;align-items:center;${MONO};font-size:11.5px;letter-spacing:.12em;text-transform:uppercase;color:#8E8A85;margin-bottom:clamp(28px,3.4vw,48px)`}>
            <El as={Link} href="/services">Services</El><span>/</span>
            {cat ? <><El as={Link} href={`/services#${cat.id}`}>{cat.name}</El><span>/</span></> : null}
            <El as="span" css="color:#F4F1EA">{name}</El>
          </El>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:clamp(32px,5vw,90px);align-items:start">
            <El>
              <El data-rv="1" css="display:flex;align-items:center;gap:12px;margin-bottom:22px">
                <El as="span" css="width:7px;height:7px;background:#F04423;animation:mxPulse 2.4s ease-in-out infinite" />
                <El as="span" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#B7B2AA`}>{cat ? <>{cat.n} &#183; {cat.name}</> : 'Mariox Software'}</El>
              </El>
              <El as="h1" data-rv="1" css="margin:0;font-size:clamp(2.8rem,7vw,7.2rem);line-height:.86;letter-spacing:-.065em;font-weight:500;text-wrap:balance">
                {name}<El as="span" css="color:#F04423">.</El>
              </El>
              {service.tagline ? (
                <El as="p" data-rv="1" css={`margin:clamp(18px,2.2vw,28px) 0 0;max-width:24ch;${SERIF};font-size:clamp(1.6rem,3vw,2.8rem);line-height:1.02;letter-spacing:-.02em;color:#D9D5CD`}>{service.tagline}.</El>
              ) : null}
              <El as="p" data-rv="1" css="margin:clamp(22px,2.6vw,32px) 0 0;max-width:52ch;font-size:clamp(16px,1.3vw,18px);line-height:1.6;color:#B7B2AA;text-wrap:pretty">{heroDesc}</El>
              <El data-rv="1" css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,150px),1fr));margin-top:clamp(28px,3.4vw,44px);border-top:1px solid rgba(244,241,234,.16)">
                {[
                  service.time ? { k: 'Typical timeline', v: service.time } : null,
                  { k: 'Engagement', v: service.model || 'Fixed, team or retainer' },
                  { k: 'Team', v: '100+ in-house' },
                ].filter(Boolean).map((f) => (
                  <El key={f.k} css="padding:16px 16px 0 0">
                    <El css={`${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>{f.k}</El>
                    <El css="margin-top:8px;font-size:clamp(1.15rem,1.7vw,1.5rem);font-weight:500;letter-spacing:-.035em">{f.v}</El>
                  </El>
                ))}
              </El>
            </El>
            <EstimateForm source={`service:${slug}`} subject={name} />
          </El>
        </El>

        {/* 02 Visual */}
        <El as="section" css={`padding:0 ${PAD}`}>
          <El as="figure" css="margin:0;position:relative;aspect-ratio:21/9;min-height:280px;overflow:hidden;background:#141216">
            {isAI ? <El as="canvas" ref={canvasRef} aria-hidden="true" css="position:absolute;inset:0;width:100%;height:100%;display:block;z-index:1;background:transparent;mix-blend-mode:screen;opacity:.55;pointer-events:none" /> : null}
            <El role="img" aria-label={`${service.name} at Mariox Software`} data-par="1" css={`position:absolute;inset:-8% 0;background-position:center 20%;background-size:cover;background-repeat:no-repeat;background-image:url("${heroBg}")`} />
            {showPanelHero ? (
              <El
                as="img"
                src={service.panelHero}
                alt={name}
                onError={() => setPanelHeroOk(false)}
                css="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;z-index:1"
              />
            ) : null}
            <El aria-hidden="true" css="position:absolute;inset:0;z-index:2;background:linear-gradient(to top,rgba(8,7,10,.75),rgba(8,7,10,0) 45%)" />
            <El as="figcaption" css={`position:absolute;z-index:3;left:clamp(16px,2vw,28px);right:clamp(16px,2vw,28px);bottom:clamp(14px,1.8vw,24px);display:flex;flex-wrap:wrap;justify-content:space-between;gap:10px;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#F4F1EA`}>
              <span>{heroCap}</span><El as="span" css="color:#B7B2AA">Mariox Software</El>
            </El>
          </El>
        </El>

        {/* AI in action */}
        {isAI ? (
          <El as="section" css={`padding:clamp(70px,8vw,120px) ${PAD} 0`}>
            <El css="display:flex;flex-wrap:wrap;gap:clamp(24px,4vw,64px);align-items:flex-end;justify-content:space-between;margin-bottom:clamp(28px,3.4vw,44px)">
              <El as="h2" css="flex:1 1 420px;margin:0;font-size:clamp(2.4rem,5.4vw,5.4rem);line-height:.88;letter-spacing:-.065em;font-weight:500">Intelligence, <Em>at work.</Em></El>
              <El as="p" css="flex:1 1 320px;margin:0;max-width:44ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">From robots on the factory floor to assistants inside the apps people use every day, built by engineers who ship models to production.</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:clamp(8px,1vw,14px)">
              {aiBand.map((src, i) => (
                <El as="figure" key={src} css="margin:0;display:flex;flex-direction:column;gap:12px">
                  <El css="aspect-ratio:4/5;background:#141216;overflow:hidden">
                    <El as="img" src={src} alt={AI_CAPS[i]} loading="lazy" css="width:100%;height:100%;object-fit:cover;display:block" />
                  </El>
                  <El as="figcaption" css="display:flex;gap:10px;align-items:baseline">
                    <El as="span" css={`${MONO};font-size:11px;color:#F04423`}>0{i + 1}</El>
                    <El as="span" css="font-size:15.5px;font-weight:500;letter-spacing:-.025em">{AI_CAPS[i]}</El>
                  </El>
                </El>
              ))}
            </El>
          </El>
        ) : null}

        <Marquee />

        {/* 03 What we deliver */}
        {(service.offers || []).length ? (
        <El as="section" css={`padding:clamp(90px,11vw,170px) ${PAD}`}>
          <Head
            eyebrow="What we deliver"
            title={<>Six things <Em>done properly.</Em></>}
            lead="Take one, or the whole set. Every item is delivered by the same senior team, with code and accounts in your name."
          />
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));border-top:1px solid rgba(244,241,234,.16);border-left:1px solid rgba(244,241,234,.16)">
            {service.offers.map((o, i) => (
              <El key={o.t} data-rv="1" css="border-right:1px solid rgba(244,241,234,.16);border-bottom:1px solid rgba(244,241,234,.16);padding:clamp(24px,2.8vw,40px);min-height:260px;display:flex;flex-direction:column;gap:14px;transition:background .45s,color .45s" hover="background:#F04423;color:#08070A">
                <El as="span" css={`${MONO};font-size:11px;letter-spacing:.14em;opacity:.7`}>{String(i + 1).padStart(2, '0')}</El>
                <El as="h3" css="margin:auto 0 0;font-size:clamp(1.5rem,2.3vw,2.1rem);line-height:1;letter-spacing:-.05em;font-weight:500">{o.t}</El>
                <El as="p" css="margin:0;font-size:15px;line-height:1.5;opacity:.8">{o.b}</El>
              </El>
            ))}
          </El>
        </El>
        ) : null}

        {/* 03b What you get, for pages whose data lists deliverables */}
        {(service.deliverables || []).length ? (
          <El as="section" css={`padding:0 ${PAD} clamp(90px,11vw,170px)`}>
            <Head eyebrow="What you get" title={<>Yours to <Em>keep.</Em></>} />
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));border-top:1px solid rgba(244,241,234,.16);border-left:1px solid rgba(244,241,234,.16)">
              {service.deliverables.map((o, i) => (
                <El key={o.t} data-rv="1" css="border-right:1px solid rgba(244,241,234,.16);border-bottom:1px solid rgba(244,241,234,.16);padding:clamp(24px,2.8vw,40px);min-height:230px;display:flex;flex-direction:column;gap:14px;transition:background .45s,color .45s" hover="background:#F04423;color:#08070A">
                  <El as="span" css={`${MONO};font-size:11px;letter-spacing:.14em;opacity:.7`}>{String(i + 1).padStart(2, '0')}</El>
                  <El as="h3" css="margin:auto 0 0;font-size:clamp(1.4rem,2.2vw,2rem);line-height:1;letter-spacing:-.05em;font-weight:500">{o.t}</El>
                  <El as="p" css="margin:0;font-size:15px;line-height:1.5;opacity:.8">{o.b}</El>
                </El>
              ))}
            </El>
          </El>
        ) : null}

        {/* 04 Related work */}
        {gallery.length ? (
          <El as="section" css={`background:#F4F1EA;color:#08070A;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(32px,4vw,56px)">
              <El>
                <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55;margin-bottom:16px`}>Related work &#183; {client.sector}</El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(3rem,8vw,8.4rem);line-height:.84;letter-spacing:-.075em;font-weight:500">{client.name}</El>
              </El>
              <El as="p" data-rv="1" css="margin:0;max-width:40ch;font-size:clamp(1.15rem,1.7vw,1.5rem);line-height:1.3;letter-spacing:-.025em">{client.line}</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:clamp(8px,1vw,14px)">
              {gallery.map((g) => (
                <El as={Link} key={g.u} href="/work" data-rv="1" css={`display:block;grid-column:${g.span};aspect-ratio:${g.ratio};overflow:hidden;background:#E4E0D8`}>
                  <El role="img" aria-label={g.alt} css={`width:100%;height:100%;background-position:center top;background-size:cover;background-repeat:no-repeat;background-image:url("${g.u}");transition:transform 1.2s cubic-bezier(.2,.8,.2,1)`} hover="transform:scale(1.04)" />
                </El>
              ))}
            </El>
            <El as={Link} href="/work" css="display:inline-flex;align-items:center;gap:12px;margin-top:28px;border-bottom:1px solid #F04423;padding-bottom:6px;font-size:15px">See all case studies <span>&#8594;</span></El>
          </El>
        ) : null}

        {/* 05 Process */}
        {cat && (cat.steps || []).length ? (
        <El as="section" css={`padding:clamp(90px,11vw,170px) ${PAD}`}>
          <Head
            eyebrow="How we work"
            title={<>Five steps, <Em>no surprises.</Em></>}
            lead={service.time
              ? <>Typical timeline: <El as="strong" css="color:#F4F1EA;font-weight:500">{service.time}</El>. You see working software at the end of every sprint.</>
              : 'You see working software at the end of every sprint.'}
          />
          <El ref={procRef} css="position:relative;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:0">
            <El aria-hidden="true" css="position:absolute;left:0;right:0;top:0;height:2px;background:rgba(244,241,234,.14)" />
            <El ref={procBar} aria-hidden="true" css="position:absolute;left:0;top:0;height:2px;width:0;background:#F04423;transition:width .2s linear" />
            {cat.steps.map((s, i) => (
              <El key={s[0]} data-rv="1" css="padding:28px clamp(0px,1.6vw,26px) 0 0;display:flex;flex-direction:column;gap:12px">
                <El as="span" css="font-size:clamp(3rem,5vw,4.8rem);font-weight:300;letter-spacing:-.07em;line-height:.85;color:#F04423">{String(i + 1).padStart(2, '0')}</El>
                <El as="h3" css="margin:0;font-size:clamp(1.3rem,2vw,1.7rem);letter-spacing:-.045em;font-weight:500">{s[0]}</El>
                <El as="p" css="margin:0;font-size:15px;line-height:1.5;color:#B7B2AA">{s[1]}</El>
              </El>
            ))}
          </El>
        </El>

        ) : null}

        {/* 06 Stack */}
        {(service.tech || []).length ? (
        <El as="section" css={`padding:0 ${PAD} clamp(90px,11vw,170px)`}>
          <El css="border-top:1px solid rgba(244,241,234,.14);padding-top:clamp(36px,4vw,56px);display:flex;flex-wrap:wrap;gap:clamp(24px,4vw,64px);align-items:flex-start">
            <El data-rv="1" css={`flex:1 1 220px;${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85`}>{service.techTitle || 'Technology we use'}</El>
            <El css="flex:3 1 480px;min-width:min(100%,300px);display:flex;flex-wrap:wrap;gap:clamp(8px,1vw,14px) clamp(14px,1.8vw,28px)">
              {service.tech.map((t) => (
                <El as="span" key={t} data-rv="1" css="font-size:clamp(1.8rem,3.8vw,3.8rem);font-weight:300;letter-spacing:-.06em;line-height:1.05;transition:color .25s" hover="color:#F04423">{t}</El>
              ))}
            </El>
          </El>
        </El>
        ) : null}

        {/* 06b Blocks the panel holds for this page */}
        {blocks.length ? (
          <El as="section" css={`padding:0 ${PAD} clamp(90px,11vw,170px)`}>
            {blocks.map((b, i) => (
              <El
                key={b._id || i}
                data-rv="1"
                css={`display:flex;flex-wrap:wrap;${i % 2 ? 'flex-direction:row-reverse;' : ''}gap:clamp(28px,4vw,80px);align-items:center;padding:clamp(28px,3.6vw,60px) 0;${i ? 'border-top:1px solid rgba(244,241,234,.12)' : ''}`}
              >
                <El css="flex:1 1 340px;min-width:min(100%,300px)">
                  {b.title ? (
                    <El as="h2" css="margin:0 0 clamp(18px,2.4vw,30px);font-size:clamp(1.7rem,3.4vw,3rem);line-height:.98;letter-spacing:-.055em;font-weight:500">{b.title}</El>
                  ) : null}
                  {b.content ? <El className="mx-prose" dangerouslySetInnerHTML={{ __html: b.content }} /> : null}
                </El>
                {b.image ? (
                  <El css="flex:1 1 340px;min-width:min(100%,300px);overflow:hidden;background:#141216;aspect-ratio:4/3">
                    <El as="img" src={b.image} alt={b.title || name} loading="lazy" onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }} css="width:100%;height:100%;object-fit:cover;display:block" />
                  </El>
                ) : null}
              </El>
            ))}
          </El>
        ) : null}

        <WhyBand title={<>Why teams <Em>choose Mariox.</Em></>} />

        {/* 08 Models */}
        <El as="section" css={`padding:clamp(90px,11vw,170px) ${PAD}`}>
          <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:clamp(28px,3.4vw,44px)`}>Ways to engage</El>
          <Models models={MODELS(service.model)} />
        </El>

        <Faq items={faq} title={<>{name}: <Em>questions.</Em></>} />

        {/* 09b About, written in the admin panel. Only shown when it has copy. */}
        {about ? (
          <El as="section" css={`padding:0 ${PAD} clamp(80px,10vw,150px)`}>
            <El css="padding-top:clamp(60px,7vw,100px);border-top:1px solid rgba(244,241,234,.14)">
              <El as="h2" data-rv="1" css="margin:0 0 clamp(26px,3.2vw,44px);font-size:clamp(2rem,4.2vw,3.8rem);line-height:.92;letter-spacing:-.055em;font-weight:500">
                About <Em>{name.toLowerCase()}</Em>
              </El>
              <El data-rv="1" className="mx-prose" dangerouslySetInnerHTML={{ __html: about }} />
            </El>
          </El>
        ) : null}

        {/* 09c Cross-links the panel keeps for SEO. */}
        {topServices.length ? (
          <El as="section" css={`padding:0 ${PAD} clamp(80px,10vw,150px)`}>
            <El css="padding-top:clamp(50px,6vw,90px);border-top:1px solid rgba(244,241,234,.14)">
              <El as="h2" data-rv="1" css={`margin:0 0 clamp(22px,2.6vw,36px);${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;font-weight:400`}>Top services</El>
              <El data-rv="1" css="display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:0 clamp(20px,3vw,48px);border-top:1px solid rgba(244,241,234,.14)">
                {topServices.map((t) => (
                  <El as={Link} key={t.slug} href={`/${t.slug}`} css="display:block;padding:12px 0;border-bottom:1px solid rgba(244,241,234,.14);font-size:14.5px;line-height:1.4;color:#B7B2AA;text-transform:capitalize;transition:color .25s" hover="color:#F04423">
                    {t.pageName || t.slug}
                  </El>
                ))}
              </El>
            </El>
          </El>
        ) : null}

        {/* 10 Related services */}
        {(related || []).length ? (
        <El as="section" css={`background:#0E0D11;padding:clamp(80px,9vw,140px) ${PAD};border-top:1px solid rgba(244,241,234,.08)`}>
          <El css="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:16px;margin-bottom:clamp(24px,3vw,40px)">
            <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2rem,4vw,3.6rem);line-height:.92;letter-spacing:-.055em;font-weight:500">{cat ? <>More in <Em>{cat.name}</Em></> : <>Related <Em>services.</Em></>}</El>
            <El as={Link} href="/services" css={`${MONO};font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:#F04423`}>All {services.length} services &#8594;</El>
          </El>
          <El css="border-top:1px solid rgba(244,241,234,.16)">
            {related.map((r, i) => (
              <El as={Link} key={r.slug} href={`/${r.slug}`} css="display:grid;grid-template-columns:48px minmax(0,1.2fr) minmax(0,1fr) 30px;gap:6px 24px;align-items:baseline;padding:clamp(16px,1.8vw,22px) 0;border-bottom:1px solid rgba(244,241,234,.16);transition:color .25s,padding-left .4s cubic-bezier(.2,.8,.2,1)" hover="color:#F04423;padding-left:14px">
                <El as="span" css={`${MONO};font-size:11px;color:#8E8A85`}>{String(i + 1).padStart(2, '0')}</El>
                <El as="span" css="font-size:clamp(1.2rem,2.2vw,2rem);font-weight:500;letter-spacing:-.05em">{r.name}</El>
                <El as="span" css="font-size:14.5px;color:#B7B2AA">{r.tagline}</El>
                <El as="span" css="text-align:right">&#8599;</El>
              </El>
            ))}
          </El>
        </El>

        ) : null}

        <CtaBand title={<>Let&#8217;s build <Em color="#F04423">yours.</Em></>} />
        <Footer activeSlug={service.slug} />
      </El>
      </Shell>
    </>
  );
}

// AI pages pair with one hero photo and three more from the same set.
export function serviceProps(slug) {
  const service = bySlug[slug];
  if (!service) return null;
  const cat = cats.find((c) => c.id === service.cat) || cats[0];
  const related = services.filter((s) => s.cat === cat.id && s.slug !== service.slug).slice(0, 6);
  const img = cat.id === 'ai-data' ? AI_IMG[service.slug] || AI_ALL[0] : null;
  const pool = img ? AI_ALL.filter((x) => x !== img) : [];
  const off = img ? Math.max(0, Object.keys(AI_IMG).indexOf(service.slug)) : 0;
  return {
    service,
    cat,
    related,
    aiHero: img ? `/assets/ai/${img}.jpg` : null,
    aiVisual: img ? `/assets/ai/${AI_ALL[(AI_ALL.indexOf(img) + 3) % AI_ALL.length]}.jpg` : null,
    aiBand: img ? [0, 1, 2].map((i) => `/assets/ai/${pool[(off * 2 + i * 3) % pool.length]}.jpg`) : [],
  };
}
