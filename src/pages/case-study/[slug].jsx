import React from 'react';
import El from '@/components/El';
import {
  MONO, PageHero, BackLink, Section, SectionTitle, Lead, CaseCard, CardGrid, CtaSection,
} from '@/components/ui';
import { Seo, Testimonials, FaqSection, ContactBlock } from '@/components/sections';
import { caseStudies, caseStudySlugs } from '@/data/caseStudies';
import { getWorkList } from '@/data/work';

const IMG_BOX = 'overflow:hidden;background:#111013;background-image:repeating-linear-gradient(135deg,rgba(244,241,234,.06) 0 2px,transparent 2px 11px);border:1px solid rgba(244,241,234,.14)';
const hideImg = (e) => { if (e && e.target) e.target.style.display = 'none'; };

function Shot({ src, alt }) {
  return (
    <El data-fade="1" css={IMG_BOX}>
      <El as="img" src={src} alt={alt} loading="lazy" onError={hideImg} css="width:100%;height:auto;display:block" />
    </El>
  );
}

// Same gallery rhythm as the live site: wide/offset pair, single, even pair.
function buildGalleryBlocks(images) {
  const blocks = [];
  let i = 0, p = 0;
  while (i < images.length) {
    const remaining = images.length - i;
    const pattern = p % 3;
    if (pattern !== 1 && remaining >= 2) {
      blocks.push({ type: pattern === 0 ? 'asymmetric' : 'pair', images: [images[i], images[i + 1]] });
      i += 2;
    } else {
      blocks.push({ type: 'single', images: [images[i]] });
      i += 1;
    }
    p += 1;
  }
  return blocks;
}

function Gallery({ block, alt }) {
  const cols = block.type === 'single' ? '1fr' : block.type === 'asymmetric' ? 'repeat(auto-fit,minmax(min(100%,320px),1fr))' : 'repeat(auto-fit,minmax(min(100%,280px),1fr))';
  return (
    <Section top={false} pad="0" css="padding-bottom:clamp(32px,4vw,64px)">
      <El css={`display:grid;grid-template-columns:${cols};gap:clamp(14px,1.8vw,26px);align-items:end`}>
        {block.images.map((src, k) => <Shot key={src + k} src={src} alt={alt} />)}
      </El>
    </Section>
  );
}

function TextBlock({ section, index }) {
  return (
    <Section pad="clamp(40px,6vw,96px)">
      <El css="display:flex;flex-wrap:wrap;gap:clamp(20px,4vw,80px);align-items:flex-start">
        <El data-fade="1" css="flex:1 1 260px">
          <El css={`${MONO};font-size:10.5px;letter-spacing:.18em;color:#F04423;margin-bottom:14px`}>{String(index + 1).padStart(2, '0')}</El>
          <El as="h2" css="margin:0;font-size:clamp(1.5rem,3.4vw,2.8rem);font-weight:800;letter-spacing:-.04em;line-height:1;text-transform:uppercase">{section.title}</El>
        </El>
        <El css="flex:2 1 420px;display:grid;gap:18px;max-width:760px">
          {(section.paragraphs || []).map((p, k) => (
            <Lead key={k} css={index === 0 && k === 0 ? 'color:#F4F1EA;font-size:clamp(17px,1.6vw,22px);line-height:1.5' : ''}>{p}</Lead>
          ))}
          {section.list && section.list.length ? (
            <El data-fade="1" css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr));gap:0 clamp(20px,3vw,48px);margin-top:6px;border-top:1px solid rgba(244,241,234,.14)">
              {section.list.map((item, k) => (
                <El key={k} css="display:flex;gap:12px;align-items:baseline;padding:12px 0;border-bottom:1px solid rgba(244,241,234,.14);font-size:14.5px;line-height:1.45;color:#F4F1EA">
                  <El as="span" css="width:5px;height:5px;background:#F04423;flex-shrink:0;transform:translateY(-2px)" />{item}
                </El>
              ))}
            </El>
          ) : null}
        </El>
      </El>
    </Section>
  );
}

export default function CaseStudyPage({ cs, related }) {
  const blocks = buildGalleryBlocks(cs.galleryImages || []);
  const content = [];
  let b = 0;
  (cs.sections || []).forEach((section, i) => {
    content.push(<TextBlock key={'s' + i} section={section} index={i} />);
    if ((i + 1) % 2 === 0 && b < blocks.length) {
      content.push(<Gallery key={'g' + b} block={blocks[b]} alt={cs.companyName} />);
      b += 1;
    }
  });
  while (b < blocks.length) {
    content.push(<Gallery key={'g' + b} block={blocks[b]} alt={cs.companyName} />);
    b += 1;
  }

  const tagline = (cs.tagline || '').replace(/^[\s—–-]+/, '');
  const headlineIsFull = cs.headline && cs.headline === cs.tagline;

  return (
    <>
      <Seo title={cs.seoTitle} description={cs.seoDescription} />
      <PageHero
        pad="clamp(44px,7vw,110px)"
        eyebrowMb="clamp(18px,2.6vw,34px)"
        back={<BackLink href="/case-study">All work</BackLink>}
        eyebrow={<>Case study &nbsp;/&nbsp; {(cs.metaTags || []).join('  /  ')}</>}
        a={headlineIsFull ? cs.headline : cs.companyName}
        b={headlineIsFull ? undefined : tagline}
        h1Size="clamp(2.4rem,7.5vw,7rem)"
      />

      {cs.heroImage ? (
        <Section top={false} pad="0" css="padding-bottom:clamp(40px,6vw,96px)">
          <Shot src={cs.heroImage} alt={cs.companyName} />
        </Section>
      ) : null}

      {content}

      {cs.technology && cs.technology.length ? (
        <Section>
          <SectionTitle mb="clamp(24px,3vw,44px)">Technology</SectionTitle>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:clamp(22px,3vw,52px)">
            {cs.technology.map((t, k) => (
              <El key={k} data-fade="1" css="border-top:1px solid rgba(244,241,234,.22);padding-top:clamp(16px,2vw,24px)">
                <El css={`${MONO};font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:#F04423;margin-bottom:12px`}>{t.label}</El>
                <El css="font-size:clamp(1.1rem,1.9vw,1.5rem);font-weight:700;letter-spacing:-.03em;line-height:1.12">{t.value}</El>
              </El>
            ))}
          </El>
        </Section>
      ) : null}

      {related.length ? (
        <Section>
          <El data-fade="1" css="display:flex;flex-wrap:wrap;gap:18px;align-items:flex-end;justify-content:space-between;margin-bottom:clamp(26px,3.4vw,50px)">
            <El as="h2" css="margin:0;font-size:clamp(1.9rem,5.4vw,4.4rem);line-height:.92;letter-spacing:-.04em;font-weight:800;text-transform:uppercase">More work</El>
            <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;color:#8E8A85`}>Related case studies</El>
          </El>
          <CardGrid>
            {related.map((c) => <CaseCard key={c.slug} c={c} />)}
          </CardGrid>
        </Section>
      ) : null}

      <Testimonials />
      <FaqSection />
      <ContactBlock title="Have a similar project?" />
      <CtaSection a="Have an idea" b="worth building?" />
    </>
  );
}

export async function getStaticPaths() {
  return { paths: caseStudySlugs.map((slug) => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const cs = caseStudies[params.slug];
  const work = getWorkList();
  const me = work.find((w) => w.slug === params.slug);
  const primary = me ? me.tags.find((t) => t !== 'app-dev') : null;
  const related = work
    .filter((w) => w.slug !== params.slug && (!primary || w.tags.includes(primary)))
    .slice(0, 3)
    .map((w) => ({ slug: w.slug, name: w.name, url: w.url, img: w.img, body: w.body }));
  return { props: { cs: JSON.parse(JSON.stringify(cs)), related } };
}
