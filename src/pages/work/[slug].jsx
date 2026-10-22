import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import El from '@/components/El';
import { Seo, JsonLd } from '@/components/sections';
import Nav from '@/components/final/Nav';
import Footer from '@/components/final/Footer';
import EstimateForm from '@/components/final/EstimateForm';
import { MONO, SERIF, PAD, Em, Shell } from '@/components/final/ui';
import { useReveal, useScrollFx } from '@/components/final/fx';
import { cases, bySlug } from '@/data/final/cases';
import { SITE_URL } from '@/data/site';

// Case study from the design's `case-study.dc.html`: hero, cover, the four
// chapters, the screen mosaic with a lightbox, the next case and a start form.

const SECTOR_PHOTO = {
  fintech: '1556742049-0cfed4f6a45d',
  edtech: '1503676260728-1c00da094a0b',
  healthcare: '1576091160399-112ba8d25d1d',
  ecommerce: '1556742502-ec7c0e9f34b1',
  qcommerce: '1586528116311-ad8dd3c8310d',
  marketplace: '1607082348824-0a96f2a4b9da',
  web: '1498050108023-c5249f4df085',
};

export default function CaseStudy({ c, images, meta, chapters, delivered, mosaic, next, more, moreLabel, total }) {
  const [lb, setLb] = useState(-1);
  useReveal([c.slug]);
  useScrollFx(null, null);

  // The lightbox owns the keyboard and the scroll while it is open.
  useEffect(() => {
    if (lb < 0) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setLb(-1);
      if (e.key === 'ArrowRight') setLb((i) => (i + 1) % images.length);
      if (e.key === 'ArrowLeft') setLb((i) => (i - 1 + images.length) % images.length);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [lb, images.length]);

  const title = `${c.name} Case Study — ${c.sector} | Mariox Software`;
  const description = `${c.name}: ${c.body}`.slice(0, 300);

  return (
    <>
      <Seo title={title} description={description} canonical={`${SITE_URL}/work/${c.slug}`} />
      <JsonLd
        id="case-breadcrumb"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Work', item: `${SITE_URL}/work` },
            { '@type': 'ListItem', position: 2, name: c.name, item: `${SITE_URL}/work/${c.slug}` },
          ],
        }}
      />

      <Shell>
        <Nav active="work" ctaHref="#start" />
        <El as="main">
          {/* 01 Hero */}
          <El as="section" css={`padding:clamp(120px,12vw,170px) ${PAD} clamp(36px,4vw,56px)`}>
            <El as="nav" aria-label="Breadcrumb" css={`display:flex;flex-wrap:wrap;gap:10px;align-items:center;${MONO};font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;margin-bottom:clamp(24px,3vw,40px)`}>
              <El as={Link} href="/work">Work</El><span>/</span>
              <El as={Link} href="/work">Case studies</El><span>/</span>
              <span>{c.sector}</span><span>/</span>
              <El as="span" css="color:#F04423;white-space:nowrap">Case {c.n} of {total}</El>
            </El>
            <El as="h1" css="margin:0;font-size:clamp(3.6rem,13vw,14rem);line-height:.8;letter-spacing:-.08em;font-weight:500">{c.name}<El as="span" css="color:#F04423">.</El></El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(24px,4vw,72px);align-items:end;margin-top:clamp(28px,3.4vw,48px)">
              <El as="p" css={`margin:0;max-width:24ch;${SERIF};font-size:clamp(1.7rem,3.2vw,3rem);line-height:1.05;letter-spacing:-.025em`}>{c.proposition}</El>
              <El as="dl" css="margin:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));border-top:1px solid rgba(244,241,234,.16)">
                {meta.map((m) => (
                  <El key={m.k} css="padding:14px 14px 14px 0;border-bottom:1px solid rgba(244,241,234,.16)">
                    <El as="dt" css={`${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>{m.k}</El>
                    <El as="dd" css="margin:6px 0 0;font-size:16px;letter-spacing:-.02em">{m.v}</El>
                  </El>
                ))}
              </El>
            </El>
          </El>

          {/* 02 Cover */}
          <El as="section" css={`padding:0 ${PAD}`}>
            <El as="button" type="button" onClick={() => setLb(0)} aria-label="View cover image larger" css="display:block;width:100%;padding:0;border:0;cursor:zoom-in;position:relative;aspect-ratio:16/8;min-height:280px;overflow:hidden;background:#141216">
              <El data-par="1" css={`position:absolute;inset:-6% 0;background-position:center;background-size:cover;background-repeat:no-repeat;background-image:url("${images[0].src}")`} />
              <El as="span" css={`position:absolute;left:16px;bottom:14px;${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#F4F1EA;background:rgba(8,7,10,.72);padding:7px 10px`}>{images[0].tag}</El>
            </El>
          </El>

          {/* 03 Overview */}
          <El as="section" css={`padding:clamp(80px,10vw,150px) ${PAD};display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(36px,5vw,96px);align-items:start`}>
            <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85`}>Overview</El>
            <El as="p" data-rv="1" css="grid-column:span 2;min-width:min(100%,320px);margin:0;font-size:clamp(1.6rem,3.2vw,3rem);line-height:1.08;letter-spacing:-.045em;font-weight:400;text-wrap:pretty">{c.body}</El>
          </El>

          {/* 04 Challenge */}
          <El as="section" css={`background:#F4F1EA;color:#08070A;padding:clamp(80px,10vw,150px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));gap:clamp(36px,5vw,90px);align-items:center">
              <El>
                <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#F04423;margin-bottom:18px`}>01 &#8212; The challenge</El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.2rem,4.6vw,4.6rem);line-height:.92;letter-spacing:-.06em;font-weight:500">What made it <Em>hard.</Em></El>
                <El as="p" data-rv="1" css="margin:clamp(20px,2.4vw,30px) 0 0;max-width:46ch;font-size:clamp(16px,1.35vw,19px);line-height:1.6;color:#2E2B28">{chapters.challenge}</El>
              </El>
              <El as="button" type="button" onClick={() => setLb(Math.min(1, images.length - 1))} data-rv="1" aria-label="View image larger" css="display:block;width:100%;padding:clamp(18px,2.6vw,40px);border:0;cursor:zoom-in;aspect-ratio:4/3;background:#E4E0D8">
                <El css={`width:100%;height:100%;background-position:center;background-size:contain;background-repeat:no-repeat;background-image:url("${images[Math.min(1, images.length - 1)].src}");box-shadow:0 30px 60px rgba(8,7,10,.18)`} />
              </El>
            </El>
            {c.constraints && c.constraints.length ? (
              <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));border-top:1px solid rgba(8,7,10,.2);margin-top:clamp(56px,7vw,110px)">
                {c.constraints.map((k, i) => (
                  <El key={k.title} data-rv="1" css="padding:clamp(22px,2.8vw,36px) clamp(0px,2vw,28px) 0 0;display:flex;flex-direction:column;gap:12px">
                    <El as="span" css="font-size:clamp(2.6rem,4.4vw,4rem);font-weight:300;letter-spacing:-.07em;line-height:.9;color:#F04423">{String(i + 1).padStart(2, '0')}</El>
                    <El as="h3" css="margin:0;font-size:clamp(1.3rem,2vw,1.7rem);letter-spacing:-.045em;font-weight:500">{k.title}</El>
                    <El as="p" css="margin:0;max-width:36ch;font-size:15.5px;line-height:1.55;color:#4A4741">{k.body}</El>
                  </El>
                ))}
              </El>
            ) : null}
          </El>

          {/* 05 Product */}
          <El as="section" css={`padding:clamp(80px,10vw,150px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(36px,5vw,96px);align-items:start;margin-bottom:clamp(40px,5vw,72px)">
              <El>
                <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#F04423;margin-bottom:18px`}>02 &#8212; The product</El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.2rem,4.6vw,4.6rem);line-height:.92;letter-spacing:-.06em;font-weight:500">What we <Em>shipped.</Em></El>
              </El>
              <El as="p" data-rv="1" css="grid-column:span 2;min-width:min(100%,320px);margin:0;max-width:52ch;font-size:clamp(16px,1.4vw,20px);line-height:1.6;color:#D9D5CD">{chapters.product}</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(12,minmax(0,1fr));grid-auto-rows:clamp(150px,17vw,280px);gap:clamp(8px,1vw,14px)">
              {mosaic.map((g) => (
                <El as="button" type="button" key={g.src} onClick={() => setLb(g.index)} data-rv="1" aria-label={`View ${g.tag}`} css={`grid-column:span ${g.cols};grid-row:span ${g.rows};position:relative;padding:${g.pad};border:0;cursor:zoom-in;overflow:hidden;background:${g.stage}`}>
                  <El css={`width:100%;height:100%;background-position:center;background-size:${g.fit};background-repeat:no-repeat;background-image:url("${g.src}");transition:transform 1.1s cubic-bezier(.2,.8,.2,1)`} hover="transform:scale(1.035)" />
                  <El as="span" css={`position:absolute;left:12px;bottom:10px;${MONO};font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#F4F1EA;background:rgba(8,7,10,.72);padding:6px 9px`}>{g.tag}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 06 Build */}
          <El as="section" css={`background:#0E0D11;border-top:1px solid rgba(244,241,234,.08);border-bottom:1px solid rgba(244,241,234,.08);padding:clamp(80px,10vw,150px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(36px,5vw,96px);align-items:start">
              <El>
                <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#F04423;margin-bottom:18px`}>03 &#8212; The build</El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.2rem,4.6vw,4.6rem);line-height:.92;letter-spacing:-.06em;font-weight:500">How it <Em>holds up.</Em></El>
                <El as="p" data-rv="1" css="margin:clamp(20px,2.4vw,30px) 0 0;max-width:44ch;font-size:clamp(16px,1.35vw,19px);line-height:1.6;color:#B7B2AA">{chapters.build}</El>
              </El>
              <El as="blockquote" data-rv="1" css="grid-column:span 2;min-width:min(100%,320px);margin:0;padding-left:clamp(18px,2.4vw,36px);border-left:2px solid #F04423">
                <El css={`${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:16px`}>The system</El>
                <El as="p" css="margin:0;font-size:clamp(1.4rem,2.6vw,2.4rem);line-height:1.15;letter-spacing:-.04em;text-wrap:pretty">{c.system}</El>
              </El>
            </El>
            <El css="margin-top:clamp(56px,7vw,100px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:clamp(24px,3vw,48px);align-items:start">
              <El>
                <El css={`${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:14px`}>Stack</El>
                <El css="display:flex;flex-wrap:wrap;gap:clamp(6px,.8vw,12px)">
                  {(c.stack || []).map((t) => <El as="span" key={t} data-rv="1" css="font-size:clamp(1.4rem,2.6vw,2.4rem);font-weight:300;letter-spacing:-.06em;line-height:1.05;padding-right:clamp(8px,1.2vw,16px);border-right:1px solid rgba(244,241,234,.16)">{t}</El>)}
                </El>
              </El>
              <El css="border-top:1px solid rgba(244,241,234,.16)">
                {delivered.map((d) => (
                  <El key={d} css="display:flex;gap:12px;align-items:baseline;padding:13px 0;border-bottom:1px solid rgba(244,241,234,.12);font-size:16px">
                    <El as="span" css="width:6px;height:6px;background:#F04423;flex-shrink:0;transform:translateY(-3px)" />{d}
                  </El>
                ))}
              </El>
            </El>
          </El>

          {/* 07 Ownership */}
          <El as="section" css={`padding:clamp(80px,10vw,150px) ${PAD};display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(36px,5vw,96px);align-items:center`}>
            <El>
              <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#F04423;margin-bottom:18px`}>04 &#8212; Ownership</El>
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.2rem,4.6vw,4.6rem);line-height:.92;letter-spacing:-.06em;font-weight:500">Theirs, <Em>from day one.</Em></El>
              <El as="p" data-rv="1" css="margin:clamp(20px,2.4vw,30px) 0 0;max-width:44ch;font-size:clamp(16px,1.35vw,19px);line-height:1.6;color:#B7B2AA">{chapters.ownership}</El>
              <El as="a" href="#start" data-rv="1" css="display:inline-flex;align-items:center;gap:12px;margin-top:28px;border-bottom:1px solid #F04423;padding-bottom:6px;font-size:15px">Ask for the full metrics on a call <span>&#8594;</span></El>
            </El>
            <El as="button" type="button" onClick={() => setLb(images.length - 1)} data-rv="1" aria-label="View image larger" css="display:block;width:100%;padding:0;border:0;cursor:zoom-in;aspect-ratio:4/3;position:relative;overflow:hidden;background:#141216">
              <El css={`position:absolute;inset:0;background-position:center;background-size:cover;background-repeat:no-repeat;background-image:url("${images[images.length - 1].src}")`} />
            </El>
          </El>

          {/* 08 Next */}
          <El as="section" css={`padding:0 ${PAD}`}>
            <El as={Link} href={`/work/${next.slug}`} css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));border-top:1px solid rgba(244,241,234,.16);border-bottom:1px solid rgba(244,241,234,.16);color:#F4F1EA" hover="color:#F04423">
              <El css="padding:clamp(28px,3.4vw,52px) clamp(0px,3vw,48px) clamp(28px,3.4vw,52px) 0;display:flex;flex-direction:column;justify-content:space-between;gap:24px">
                <El as="span" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85`}>Next case study &#183; {next.sector}</El>
                <El as="span" css="font-size:clamp(3rem,8vw,8rem);line-height:.82;letter-spacing:-.08em;font-weight:500;transition:color .3s">{next.name} &#8594;</El>
              </El>
              <El css={`min-height:260px;background-color:#141216;background-position:center;background-size:cover;background-image:url("${next.img}")`} />
            </El>
          </El>

          {/* 09 More */}
          <El as="section" css={`padding:clamp(70px,8vw,120px) ${PAD}`}>
            <El css="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:16px;margin-bottom:clamp(22px,2.6vw,34px)">
              <El as="h2" css="margin:0;font-size:clamp(1.8rem,3.4vw,3.2rem);letter-spacing:-.055em;font-weight:500">More {moreLabel} <Em>work.</Em></El>
              <El as={Link} href="/work" css="border-bottom:1px solid #F04423;padding-bottom:5px;font-size:15px">All {total} case studies &#8594;</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:clamp(12px,1.4vw,20px)">
              {more.map((m) => (
                <El as={Link} key={m.slug} href={`/work/${m.slug}`} css="display:flex;flex-direction:column;gap:14px">
                  <El css="aspect-ratio:4/3;overflow:hidden;background:#141216">
                    <El css={`width:100%;height:100%;background-position:center;background-size:cover;background-image:url("${m.img}");transition:transform 1.1s cubic-bezier(.2,.8,.2,1)`} hover="transform:scale(1.05)" />
                  </El>
                  <El css="display:flex;justify-content:space-between;gap:12px;align-items:baseline">
                    <El as="span" css="font-size:clamp(1.3rem,2vw,1.7rem);font-weight:500;letter-spacing:-.045em">{m.name}</El>
                    <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:#8E8A85`}>{m.sector}</El>
                  </El>
                </El>
              ))}
            </El>
          </El>

          {/* 10 Start */}
          <El as="section" id="start" css={`background:#F04423;color:#08070A;padding:clamp(80px,10vw,150px) ${PAD};display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr));gap:clamp(36px,5vw,80px);align-items:start`}>
            <El>
              <El as="h2" css="margin:0;font-size:clamp(2.6rem,6.4vw,6.4rem);line-height:.86;letter-spacing:-.07em;font-weight:500">Building something <Em>like {c.name}?</Em></El>
              <El as="p" css="margin:22px 0 0;max-width:40ch;font-size:16.5px;line-height:1.55">Tell us what you are building. A senior engineer replies within one business day. NDA on request.</El>
            </El>
            <EstimateForm
              id="case-estimate"
              title={`Start a ${c.sector.toLowerCase()} project`}
              source={`case:${c.slug}`}
              subject={`${c.sector} product like ${c.name}`}
              messageLabel="Project"
              messagePlaceholder="A few lines is plenty"
              dark
            />
          </El>

          <Footer />
        </El>

        {/* Lightbox */}
        {lb >= 0 ? (
          <El css="position:fixed;inset:0;z-index:95;background:rgba(8,7,10,.96);display:flex;align-items:center;justify-content:center;padding:clamp(16px,4vw,60px)" onClick={() => setLb(-1)}>
            <El as="img" src={images[lb].src} alt={images[lb].tag} css="max-width:100%;max-height:100%;object-fit:contain;display:block" />
            <El as="button" type="button" onClick={() => setLb(-1)} aria-label="Close" css={`position:absolute;top:18px;right:18px;width:44px;height:44px;border-radius:50%;border:1px solid rgba(244,241,234,.3);background:transparent;color:#F4F1EA;cursor:pointer;${MONO};font-size:15px`}>✕</El>
            <El as="span" css={`position:absolute;left:0;right:0;bottom:18px;text-align:center;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>{images[lb].tag} &#183; {lb + 1} / {images.length}</El>
          </El>
        ) : null}
      </Shell>
    </>
  );
}

CaseStudy.bare = true;

export async function getStaticPaths() {
  return { paths: cases.map((c) => ({ params: { slug: c.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const c = bySlug[params.slug];
  const idx = cases.findIndex((x) => x.slug === c.slug);
  const chap = (label) => ((c.chapters || []).find((x) => x.label === label) || {}).body || '';

  const images = (c.gallery && c.gallery.length ? c.gallery : [c.img]).map((u, i) => ({
    src: u, tag: `${c.name} · screen ${String(i + 1).padStart(2, '0')}`, real: true,
  }));
  if (images.length < 3 && SECTOR_PHOTO[c.key]) {
    images.push({ src: `https://images.unsplash.com/photo-${SECTOR_PHOTO[c.key]}?w=2000&q=75&auto=format&fit=crop`, tag: 'Sector context', real: false });
  }

  const set = images.length > 1 ? images.slice(1).concat(images.slice(0, 1)) : images;
  const lay = set.length === 1 ? [[12, 2]]
    : set.length === 2 ? [[7, 2], [5, 2]]
      : set.length === 3 ? [[7, 2], [5, 1], [5, 1]]
        : [[7, 2], [5, 1], [5, 1], [12, 2]];
  const mosaic = set.slice(0, lay.length).map((m, i) => ({
    src: m.src, tag: m.tag, index: images.findIndex((x) => x.src === m.src),
    cols: lay[i][0], rows: lay[i][1],
    stage: m.real ? '#141216' : '#0E0D11',
    fit: m.real ? 'contain' : 'cover',
    pad: m.real ? 'clamp(10px,1.4vw,22px)' : '0px',
  }));

  const scope = (c.scope || '').toLowerCase();
  const delivered = [];
  if (/app/.test(scope)) delivered.push('iOS and Android apps');
  if (/web|platform|storefront|e-commerce|marketplace/.test(scope)) delivered.push('Web platform');
  if (/admin|provider|erp/.test(scope)) delivered.push(/erp/.test(scope) ? 'ERP modules and reporting' : 'Admin and operations console');
  if (/marketplace/.test(scope)) delivered.push('Seller and partner tooling');
  delivered.push('Architecture, CI/CD and handover docs');

  const next = cases[(idx + 1) % cases.length];
  const same = cases.filter((x) => x.slug !== c.slug && x.key === c.key);
  const more = (same.length >= 3 ? same : same.concat(cases.filter((x) => x.slug !== c.slug && x.key !== c.key))).slice(0, 3);

  return {
    props: {
      c: { ...c, n: String(idx + 1).padStart(2, '0') },
      total: cases.length,
      images,
      mosaic,
      delivered,
      meta: [
        { k: 'Client', v: c.name },
        { k: 'Sector', v: c.sector },
        { k: 'Scope', v: c.scope },
        { k: 'Stack', v: (c.stack || []).slice(0, 3).join(', ') },
      ],
      chapters: { challenge: chap('The challenge'), product: chap('The product'), build: chap('The build'), ownership: chap('Ownership') },
      next: { slug: next.slug, name: next.name, sector: next.sector, img: next.img },
      moreLabel: same.length ? c.sector.toLowerCase() : 'selected',
      more: more.map((m) => ({ slug: m.slug, name: m.name, sector: m.sector, img: m.img })),
    },
  };
}
