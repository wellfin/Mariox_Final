import React, { useState } from 'react';
import Link from 'next/link';
import El from '@/components/El';
import { Seo, JsonLd } from '@/components/sections';
import Nav from '@/components/final/Nav';
import Footer from '@/components/final/Footer';
import Newsletter from '@/components/final/Newsletter';
import { MONO, PAD, Em, Shell } from '@/components/final/ui';
import { useReveal } from '@/components/final/fx';
import { posts, cats, catLabel } from '@/data/final/blog';
import { SITE_URL } from '@/data/site';

// Blog index from the design's `Mariox Blog`: search, a featured article with
// three picks, sticky category filters, load-more and the newsletter band.

const PAGE = 12;
const pick = (start) => posts.find((p) => p.slug.indexOf(start) === 0);

export default function BlogIndex() {
  const [cat, setCat] = useState('all');
  const [q, setQ] = useState('');
  const [shown, setShown] = useState(PAGE);
  useReveal([cat, q, shown]);

  const query = q.trim().toLowerCase();
  const list = posts.filter((p) => (cat === 'all' || p.cat === cat)
    && (!query || `${p.title} ${p.excerpt}`.toLowerCase().includes(query)));
  const items = list.slice(0, shown);

  const lead = pick('demystifying-the-process') || posts[0];
  const side = [pick('ai-powered-apps'), pick('react-vs-react-native'), pick('saas-product-design')].filter(Boolean);
  const showFeatured = !query && cat === 'all' && !!lead;

  return (
    <>
      <Seo
        title="Blog: App, Web, AI & Software Development Insights | Mariox Software"
        description="Articles from the Mariox Software team on mobile apps, web development, AI, frameworks, design and growth."
        canonical={`${SITE_URL}/blog`}
      />
      <JsonLd
        id="blog-itemlist"
        data={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Mariox Software blog',
          url: `${SITE_URL}/blog`,
          blogPost: posts.slice(0, 20).map((p) => ({
            '@type': 'BlogPosting', headline: p.title, description: p.excerpt, url: `${SITE_URL}/blog/${p.slug}`,
          })),
        }}
      />

      <Shell>
        <Nav active="blog" ctaHref="/contact" />
        <El as="main">
          {/* 01 Hero */}
          <El as="section" css={`padding:clamp(130px,13vw,180px) ${PAD} clamp(40px,5vw,72px)`}>
            <El css={`display:flex;align-items:center;gap:12px;${MONO};font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#B7B2AA;margin-bottom:clamp(20px,2.6vw,32px)`}>
              <El as="span" css="width:8px;height:8px;background:#F04423;animation:mxPulse 2.4s ease-in-out infinite" />
              <span>The Mariox blog &#183; {posts.length} articles</span>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:clamp(28px,4vw,72px);align-items:end">
              <El as="h1" css="margin:0;font-size:clamp(3.2rem,9vw,9.6rem);line-height:.84;letter-spacing:-.075em;font-weight:500">Notes from <Em color="#F04423">the build.</Em></El>
              <El css="display:flex;flex-direction:column;gap:20px">
                <El as="p" css="margin:0;max-width:44ch;font-size:clamp(16px,1.35vw,19px);line-height:1.55;color:#D9D5CD">What our engineers, designers and strategists have learned shipping apps, platforms and AI products since 2016.</El>
                <El as="label" css="display:flex;align-items:center;gap:12px;border:1px solid rgba(244,241,234,.25);border-radius:999px;padding:0 20px;min-height:54px;max-width:520px">
                  <El as="span" aria-hidden="true" css="width:11px;height:11px;border:1.5px solid #9B968F;border-radius:50%;flex-shrink:0" />
                  <input type="search" value={q} onChange={(e) => { setQ(e.target.value); setShown(PAGE); }} placeholder="Search articles: Flutter, AI, SEO…" aria-label="Search articles" style={{ flex: 1, minWidth: 0, background: 'transparent', border: 0, outline: 'none', color: '#F4F1EA', fontFamily: 'Geist, sans-serif', fontSize: 16, padding: '14px 0' }} />
                </El>
              </El>
            </El>
          </El>

          {/* 02 Featured */}
          {showFeatured ? (
            <El as="section" css={`padding:0 ${PAD} clamp(70px,8vw,120px)`}>
              <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(16px,2vw,28px)">
                <El as={Link} href={`/blog/${lead.slug}`} data-rv="1" className="mx-card" css="grid-column:span 2;min-width:min(100%,340px);display:flex;flex-direction:column;gap:20px;color:#F4F1EA">
                  <El css="position:relative;aspect-ratio:16/9;overflow:hidden;background:#141216">
                    <El role="img" aria-label={lead.title} css={`position:absolute;inset:0;background-color:#141216;background-size:cover;background-position:center;background-image:url("${lead.img}");transition:transform 1.2s cubic-bezier(.2,.8,.2,1)`} hover="transform:scale(1.04)" />
                    <El as="span" css={`position:absolute;top:16px;left:16px;${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;background:#F04423;color:#08070A;padding:7px 11px`}>Featured</El>
                  </El>
                  <El css="display:flex;flex-direction:column;gap:12px">
                    <El as="span" css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#F04423`}>{catLabel[lead.cat]}</El>
                    <El as="h2" css="margin:0;font-size:clamp(1.9rem,3.6vw,3.4rem);line-height:.98;letter-spacing:-.055em;font-weight:500;text-wrap:balance">{lead.title}</El>
                    <El as="p" css="margin:0;max-width:60ch;font-size:16.5px;line-height:1.5;color:#B7B2AA">{lead.excerpt}</El>
                    <El as="span" css="font-size:15px;color:#F4F1EA;border-bottom:1px solid #F04423;align-self:flex-start;padding-bottom:4px">Read article &#8594;</El>
                  </El>
                </El>
                <El css="display:flex;flex-direction:column;gap:clamp(16px,2vw,28px)">
                  {side.map((p) => (
                    <El as={Link} key={p.slug} href={`/blog/${p.slug}`} data-rv="1" css="display:grid;grid-template-columns:120px minmax(0,1fr);gap:16px;align-items:start;padding-bottom:clamp(16px,2vw,28px);border-bottom:1px solid rgba(244,241,234,.14);color:#F4F1EA">
                      <El role="img" aria-label={p.title} css={`aspect-ratio:1;background-color:#141216;background-size:cover;background-position:center;background-image:url("${p.img}")`} />
                      <El css="display:flex;flex-direction:column;gap:8px">
                        <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#F04423`}>{catLabel[p.cat]}</El>
                        <El as="span" css="font-size:clamp(1.05rem,1.4vw,1.25rem);line-height:1.15;letter-spacing:-.03em;font-weight:500">{p.title}</El>
                      </El>
                    </El>
                  ))}
                </El>
              </El>
            </El>
          ) : null}

          {/* 03 All articles */}
          <El as="section" id="all" css={`padding:0 ${PAD} clamp(100px,11vw,170px)`}>
            <El css="position:sticky;top:64px;z-index:5;background:rgba(8,7,10,.92);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding:16px 0;border-top:1px solid rgba(244,241,234,.12);border-bottom:1px solid rgba(244,241,234,.12);margin-bottom:clamp(28px,3vw,44px)">
              {cats.map((c) => {
                const on = cat === c.id;
                const count = c.id === 'all' ? posts.length : posts.filter((p) => p.cat === c.id).length;
                return (
                  <El as="button" type="button" key={c.id} aria-pressed={on} onClick={() => { setCat(c.id); setShown(PAGE); }} css={`cursor:pointer;min-height:42px;white-space:nowrap;border-radius:999px;padding:9px 16px;border:1px solid ${on ? '#F04423' : 'rgba(244,241,234,.25)'};background:${on ? '#F04423' : 'transparent'};color:${on ? '#08070A' : '#D9D5CD'};font-family:Geist,sans-serif;font-size:14px;transition:all .25s`}>
                    {c.label} <El as="span" css="opacity:.6;margin-left:4px">{count}</El>
                  </El>
                );
              })}
            </El>

            <El css="display:flex;justify-content:space-between;gap:16px;align-items:baseline;margin-bottom:22px">
              <El as="h2" css="margin:0;font-size:clamp(1.8rem,3.4vw,3rem);letter-spacing:-.05em;font-weight:500">
                {query ? `Results for “${q.trim()}”` : cat === 'all' ? 'Latest articles' : catLabel[cat]}
              </El>
              <El as="span" css="font-size:14.5px;color:#8E8A85">{list.length ? `Showing ${items.length} of ${list.length}` : ''}</El>
            </El>

            <El css="display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,320px),1fr));gap:clamp(36px,4vw,56px) clamp(16px,1.8vw,28px)">
              {items.map((p, i) => (
                <El as={Link} key={p.slug} href={`/blog/${p.slug}`} className="mx-card" css="display:flex;flex-direction:column;gap:16px;color:#F4F1EA">
                  <El css="position:relative;aspect-ratio:3/2;overflow:hidden;background:#141216">
                    <El role="img" aria-label={p.title} css={`position:absolute;inset:0;background-color:#141216;background-size:cover;background-position:center;background-image:url("${p.img}");transition:transform 1.1s cubic-bezier(.2,.8,.2,1)`} hover="transform:scale(1.04)" />
                  </El>
                  <El css={`display:flex;justify-content:space-between;gap:12px;${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase`}>
                    <El as="span" css="color:#F04423">{catLabel[p.cat]}</El>
                    <El as="span" css="color:#8E8A85">{String(i + 1).padStart(2, '0')}</El>
                  </El>
                  <El as="h3" css="margin:0;font-size:clamp(1.2rem,1.7vw,1.5rem);line-height:1.12;letter-spacing:-.035em;font-weight:500;text-wrap:pretty">{p.title}</El>
                  <El as="p" css="margin:0;font-size:15px;line-height:1.5;color:#B7B2AA">{p.excerpt}</El>
                  <El as="span" css="margin-top:auto;font-size:14.5px;color:#F04423">Read &#8594;</El>
                </El>
              ))}
            </El>

            {!list.length ? (
              <El css="padding:clamp(48px,6vw,90px) 0;display:flex;flex-direction:column;gap:14px;align-items:flex-start">
                <El css="font-size:clamp(1.6rem,3vw,2.6rem);font-weight:500;letter-spacing:-.05em">Nothing on that yet.</El>
                <El as="button" type="button" onClick={() => { setCat('all'); setQ(''); setShown(PAGE); }} css="cursor:pointer;background:transparent;border:0;color:#F04423;font-family:Geist,sans-serif;font-size:15px;border-bottom:1px solid #F04423;padding:0 0 4px">Show all articles</El>
              </El>
            ) : null}

            {list.length > items.length ? (
              <El css="display:flex;flex-direction:column;align-items:center;gap:14px;margin-top:clamp(44px,5vw,72px)">
                <El css="width:min(100%,280px);height:2px;background:rgba(244,241,234,.14)">
                  <El css={`height:100%;background:#F04423;width:${Math.round((items.length / Math.max(1, list.length)) * 100)}%`} />
                </El>
                <El as="button" type="button" onClick={() => setShown((n) => n + PAGE)} css="cursor:pointer;display:flex;align-items:center;gap:12px;border:1px solid rgba(244,241,234,.3);background:transparent;color:#F4F1EA;padding:16px 26px;border-radius:999px;font-family:Geist,sans-serif;font-size:15px;transition:background .3s,color .3s" hover="background:#F4F1EA;color:#08070A">Load more articles &#8595;</El>
              </El>
            ) : null}
          </El>

          <Newsletter />

          {/* 05 CTA */}
          <El as="section" css={`padding:clamp(90px,10vw,160px) ${PAD};display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:28px`}>
            <El as="h2" css="margin:0;max-width:16ch;font-size:clamp(2.4rem,5.4vw,5.4rem);line-height:.9;letter-spacing:-.06em;font-weight:500">Reading is good. <Em>Building is better.</Em></El>
            <El as={Link} href="/contact" css="display:flex;align-items:center;gap:14px;background:#F4F1EA;color:#08070A;padding:20px 28px;border-radius:999px;font-size:16px;font-weight:500;white-space:nowrap;transition:background .3s" hover="background:#F04423;color:#08070A">Start a project <span>&#8594;</span></El>
          </El>

          <Footer />
        </El>
      </Shell>
    </>
  );
}

BlogIndex.bare = true;
