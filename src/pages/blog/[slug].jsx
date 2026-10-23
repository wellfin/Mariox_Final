import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import El from '@/components/El';
import { Seo, JsonLd } from '@/components/sections';
import Nav from '@/components/final/Nav';
import Footer from '@/components/final/Footer';
import { MONO, PAD, Em, Shell } from '@/components/final/ui';
import { posts, bySlug, catLabel } from '@/data/final/blog';
import { SITE_URL } from '@/data/site';

// Article page from the design's `Mariox Blog Post`: reading progress, the
// in-article contents list, the body and three related reads.
//
// The body below is the design's sample copy. When the WordPress posts are
// connected, replace `blocks` with the post's own content: every `h` becomes an
// entry in the contents list automatically.

export default function BlogPost({ post, blocks, related }) {
  const bar = useRef(null);
  const [wide, setWide] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)');
    const on = () => setWide(mq.matches);
    on();
    mq.addEventListener('change', on);
    const onScroll = () => {
      const h = document.body.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.width = `${h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0}%`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { mq.removeEventListener('change', on); window.removeEventListener('scroll', onScroll); };
  }, []);

  const url = `${SITE_URL}/blog/${post.slug}`;
  const share = [
    { t: 'in', label: 'Share on LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
    { t: 'X', label: 'Share on X', href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}` },
    { t: 'Mail', label: 'Share by email', href: `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(url)}` },
  ];
  const toc = blocks.filter((b) => b.h);

  return (
    <>
      <Seo
        title={`${post.title} | Mariox Software Blog`}
        description={post.excerpt}
        canonical={url}
        openGraph={{ type: 'article', images: [{ url: SITE_URL + post.img, alt: post.title }] }}
      />
      <JsonLd
        id="blog-post"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          image: SITE_URL + post.img,
          mainEntityOfPage: url,
          author: { '@type': 'Organization', name: 'Mariox Software' },
          publisher: { '@type': 'Organization', name: 'Mariox Software', url: SITE_URL },
        }}
      />

      <Shell>
        <El aria-hidden="true" css="position:fixed;top:0;left:0;right:0;height:3px;z-index:95;background:transparent">
          <El ref={bar} css="height:100%;width:0%;background:#F04423" />
        </El>
        <Nav active="blog" ctaHref="/contact" />
        <El as="main">
          {/* 01 Article header */}
          <El as="header" css={`padding:clamp(130px,13vw,170px) ${PAD} clamp(36px,4vw,56px);max-width:1280px;margin:0 auto`}>
            <El as="nav" aria-label="Breadcrumb" css={`display:flex;flex-wrap:wrap;gap:10px;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;margin-bottom:clamp(22px,3vw,36px)`}>
              <El as={Link} href="/blog">Blog</El><span>/</span>
              <El as={Link} href={`/blog?cat=${post.cat}`} css="color:#F04423">{catLabel[post.cat]}</El>
            </El>
            <El as="h1" css="margin:0;max-width:20ch;font-size:clamp(2.4rem,6vw,6rem);line-height:.92;letter-spacing:-.065em;font-weight:500;text-wrap:balance">{post.title}</El>
            <El as="p" css="margin:clamp(22px,2.6vw,32px) 0 0;max-width:52ch;font-size:clamp(1.15rem,1.8vw,1.55rem);line-height:1.35;letter-spacing:-.025em;color:#D9D5CD;text-wrap:pretty">{post.excerpt}</El>
            <El css="display:flex;flex-wrap:wrap;align-items:center;gap:14px 28px;margin-top:clamp(26px,3vw,40px);padding-top:20px;border-top:1px solid rgba(244,241,234,.16)">
              <El as="span" css="display:flex;align-items:center;gap:12px">
                <El as="span" css="width:40px;height:40px;background:#F04423;display:flex;align-items:center;justify-content:center;font-weight:600;color:#08070A;font-size:15px">M</El>
                <El as="span" css="display:flex;flex-direction:column;gap:2px">
                  <El as="span" css="font-size:15px;font-weight:500">Mariox editorial team</El>
                  <El as="span" css="font-size:13px;color:#8E8A85">Engineers, designers and strategists</El>
                </El>
              </El>
              <El as="span" css="margin-left:auto;display:flex;gap:8px">
                {share.map((s) => (
                  <El as="a" key={s.t} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} css={`min-width:44px;height:44px;padding:0 14px;border:1px solid rgba(244,241,234,.25);border-radius:999px;display:flex;align-items:center;justify-content:center;${MONO};font-size:12px;color:#D9D5CD;transition:all .25s`} hover="border-color:#F04423;color:#F04423">{s.t}</El>
                ))}
              </El>
            </El>
          </El>

          {/* 02 Cover */}
          <El css={`padding:0 ${PAD};max-width:1280px;margin:0 auto`}>
            <El role="img" aria-label={post.title} css={`aspect-ratio:21/9;background-color:#141216;background-size:cover;background-position:center;background-image:url("${post.img}")`} />
          </El>

          {/* 03 Body */}
          <El as="section" css={`padding:clamp(56px,7vw,110px) ${PAD};max-width:1280px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:clamp(32px,5vw,80px)`}>
            <El as="aside" css={`position:sticky;top:110px;align-self:start;display:${wide ? 'flex' : 'none'};flex-direction:column;gap:10px`}>
              <El as="span" css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;margin-bottom:6px`}>In this article</El>
              {toc.map((t) => (
                <El as="a" key={t.id} href={`#${t.id}`} css="font-size:15px;line-height:1.35;color:#D9D5CD;padding:8px 0 8px 14px;border-left:2px solid rgba(244,241,234,.16);transition:border-color .3s,color .3s" hover="border-color:#F04423;color:#F04423">{t.h}</El>
              ))}
            </El>

            <El as="article" css="grid-column:span 2;min-width:min(100%,300px);max-width:720px;font-size:18.5px;line-height:1.7;color:#D9D5CD">
              {blocks.map((b) => (
                <El key={b.id} id={b.id} css="scroll-margin-top:100px;margin-bottom:28px">
                  {b.h ? <El as="h2" css="margin:clamp(20px,3vw,36px) 0 16px;font-size:clamp(1.6rem,2.6vw,2.2rem);line-height:1.1;letter-spacing:-.045em;font-weight:500;color:#F4F1EA">{b.h}</El> : null}
                  {b.p ? <El as="p" css="margin:0">{b.p}</El> : null}
                  {b.list ? (
                    <El as="ul" css="margin:16px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:10px">
                      {b.list.map((li) => (
                        <El as="li" key={li} css="display:flex;gap:14px;align-items:baseline">
                          <El as="span" css="width:6px;height:6px;background:#F04423;flex-shrink:0;transform:translateY(-3px)" />{li}
                        </El>
                      ))}
                    </El>
                  ) : null}
                  {b.quote ? <El as="blockquote" css="margin:clamp(20px,3vw,36px) 0;padding:0 0 0 24px;border-left:3px solid #F04423;font-family:'Instrument Serif',serif;font-size:clamp(1.4rem,2.4vw,2rem);line-height:1.25;color:#F4F1EA">{b.quote}</El> : null}
                </El>
              ))}

              <El css="margin-top:clamp(36px,5vw,64px);background:#F4F1EA;color:#08070A;padding:clamp(24px,3vw,40px);display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:20px">
                <El css="display:flex;flex-direction:column;gap:6px;max-width:38ch">
                  <El as="span" css="font-size:clamp(1.3rem,2vw,1.7rem);font-weight:500;letter-spacing:-.04em;line-height:1.1">Planning something like this?</El>
                  <El as="span" css="font-size:15px;color:#4A4741">Talk to a senior engineer. Free estimate in one business day.</El>
                </El>
                <El as={Link} href="/contact" css="display:flex;align-items:center;gap:12px;background:#08070A;color:#F4F1EA;padding:16px 24px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap">Start a project <span>&#8594;</span></El>
              </El>
            </El>
          </El>

          {/* 04 Related */}
          <El as="section" css={`padding:clamp(70px,8vw,120px) ${PAD};border-top:1px solid rgba(244,241,234,.12)`}>
            <El css="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:16px;margin-bottom:clamp(28px,3vw,44px)">
              <El as="h2" css="margin:0;font-size:clamp(2rem,4vw,3.6rem);letter-spacing:-.055em;font-weight:500">Keep <Em>reading.</Em></El>
              <El as={Link} href="/blog" css="font-size:15px;border-bottom:1px solid #F04423;padding-bottom:4px">All articles &#8594;</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,300px),1fr));gap:clamp(16px,1.8vw,28px)">
              {related.map((p) => (
                <El as={Link} key={p.slug} href={`/blog/${p.slug}`} css="display:flex;flex-direction:column;gap:14px;color:#F4F1EA">
                  <El role="img" aria-label={p.title} css={`aspect-ratio:3/2;background-color:#141216;background-size:cover;background-position:center;background-image:url("${p.img}")`} />
                  <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#F04423`}>{catLabel[p.cat]}</El>
                  <El as="h3" css="margin:0;font-size:clamp(1.15rem,1.6vw,1.4rem);line-height:1.15;letter-spacing:-.035em;font-weight:500">{p.title}</El>
                </El>
              ))}
            </El>
          </El>

          <Footer />
        </El>
      </Shell>
    </>
  );
}

BlogPost.bare = true;

export async function getStaticPaths() {
  return { paths: posts.map((p) => ({ params: { slug: p.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const post = bySlug[params.slug];
  const blocks = [
    { id: 'b1', p: `${post.excerpt} This page shows how a full article reads on the new Mariox site. The live article text from the blog drops into this layout.` },
    { id: 's1', h: 'The short version', p: 'Every article opens with the answer first, so a busy founder or CTO gets the point in the first screen and can decide whether to read on.' },
    { id: 'b2', list: ['Headings build the table of contents on the left automatically', 'Lists, quotes and images keep long reads easy to scan', 'A reading bar at the top shows progress through the article'] },
    { id: 's2', h: 'What this means for your product', p: 'Body text is set at a comfortable reading size and line length, with clear spacing between sections. Links inside the article use the Mariox orange.' },
    { id: 'b3', quote: 'Good software is built by people who understand the business it serves.' },
    { id: 's3', h: 'Where to go from here', p: 'Each article ends with a short call to action and three related articles from the same topic, so readers keep moving through the site.' },
  ];
  const same = posts.filter((x) => x.cat === post.cat && x.slug !== post.slug).slice(0, 3);
  const fill = same.length < 3 ? posts.filter((x) => x.slug !== post.slug && !same.includes(x)).slice(0, 3 - same.length) : [];
  return { props: { post, blocks, related: same.concat(fill) } };
}
