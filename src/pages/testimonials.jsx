import React, { useState } from 'react';
import El from '@/components/El';
import { Seo, JsonLd } from '@/components/sections';
import Nav from '@/components/final/Nav';
import Footer from '@/components/final/Footer';
import ProofBand from '@/components/final/ProofBand';
import EstimateForm from '@/components/final/EstimateForm';
import { MONO, PAD, Em, Shell } from '@/components/final/ui';
import { useReveal } from '@/components/final/fx';
import { cases } from '@/data/final/cases';
import { SITE_URL } from '@/data/site';

// Client reviews page from the design's `testimonials`: the Google rating, the
// featured quote carousel, the reviews in full and the client marquee.

const QUOTES = [
  { quote: 'They brought our vision to life with a modern, user-friendly UI/UX design and delivered the mobile app exactly as we had imagined, on time and with top-notch quality.', name: 'Sangeeta Chaudhary', role: 'Google review' },
  { quote: 'Their honest, reliable, and hardworking team delivers a flawless product beyond expectations.', name: 'Akhil Malhotra', role: 'Client' },
  { quote: 'He displayed clear understanding of the project and deliverables, which made me initiate the project with Mariox Software. I really appreciate him and his team.', name: 'Startup founder', role: 'Trustpilot review' },
];

const RATING = { value: '4.8', count: 138 };
const GOOGLE = 'https://www.google.com/search?q=Mariox+Software+Noida+reviews';
const STAR = 'polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)';

export default function Testimonials() {
  const [qi, setQi] = useState(0);
  useReveal([qi]);

  const q = QUOTES[qi];
  const names = cases.map((c) => c.name).slice(0, 24);
  const loop = names.concat(names);

  return (
    <>
      <Seo
        title="Client Reviews & Testimonials — Mariox Software"
        description="Mariox Software is rated 4.8 out of 5 from 138 Google reviews. Read and watch what clients say about working with our app, web and AI development team."
        canonical={`${SITE_URL}/testimonials`}
      />
      <JsonLd
        id="testimonials-rating"
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Mariox Software',
          url: SITE_URL,
          aggregateRating: { '@type': 'AggregateRating', ratingValue: RATING.value, reviewCount: RATING.count, bestRating: '5' },
          review: QUOTES.map((x) => ({
            '@type': 'Review',
            reviewBody: x.quote,
            author: { '@type': 'Person', name: x.name },
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          })),
        }}
      />

      <Shell>
        <Nav active="testimonials" ctaHref="/book-consultation" ctaLabel="Book a call" />
        <El as="main">
          {/* 01 Hero */}
          <El as="section" css={`position:relative;padding:clamp(140px,14vw,200px) ${PAD} clamp(56px,7vw,110px);overflow:hidden;isolation:isolate`}>
            <El aria-hidden="true" css="position:absolute;inset:-4% 0;z-index:-2;background:#08070A url('/assets/company/team-group-2026.jpg') center 35%/cover no-repeat" />
            <El aria-hidden="true" css="position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(8,7,10,.95) 0%,rgba(8,7,10,.82) 42%,rgba(8,7,10,.4) 100%),linear-gradient(0deg,#08070A 0%,rgba(8,7,10,0) 40%)" />
            <El>
              <El css={`display:flex;align-items:center;gap:12px;${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#B7B2AA`}>
                <El as="span" css="width:7px;height:7px;background:#F04423" />Client reviews
              </El>
              <El as="h1" css="margin:clamp(18px,2.4vw,28px) 0 0;font-size:clamp(3rem,8.2vw,8.6rem);line-height:.86;letter-spacing:-.07em;font-weight:500;max-width:15ch">
                <El as="span" css="display:block">{RATING.value} out of 5,</El>
                <El as="span" css="display:block">from <Em>{RATING.count} reviews.</Em></El>
              </El>
              <El as="p" css="margin:clamp(22px,2.8vw,34px) 0 0;max-width:52ch;font-size:clamp(16px,1.4vw,20px);line-height:1.5;color:#D9D5CD;text-wrap:pretty">What founders and teams say after working with Mariox, in their own words.</El>
              <El css="display:flex;flex-wrap:wrap;gap:12px;margin-top:clamp(28px,3.4vw,44px)">
                <El as="a" href="/contact" css="display:flex;align-items:center;gap:14px;background:#F04423;color:#08070A;padding:18px 26px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap;transition:background .3s" hover="background:#F4F1EA;color:#08070A">Start a project <span>&#8594;</span></El>
                <El as="a" href={GOOGLE} target="_blank" rel="noopener" css="display:flex;align-items:center;gap:14px;border:1px solid rgba(244,241,234,.35);padding:18px 24px;border-radius:999px;font-size:15px;white-space:nowrap;transition:border-color .3s" hover="border-color:#F4F1EA;color:#F4F1EA">Read them on Google</El>
              </El>
              <El css="display:flex;align-items:center;gap:18px;margin-top:clamp(28px,3.4vw,44px)">
                <El as="span" css="display:flex;gap:4px">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <El as="span" key={s} css={`width:22px;height:22px;background:#F04423;clip-path:${STAR}`} />
                  ))}
                </El>
                <El as="span" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#B7B2AA`}>Google &#183; {RATING.count} reviews</El>
              </El>
            </El>
          </El>

          <ProofBand eyebrow="The team clients talk about" title="Real people" titleEm="behind every review." />

          {/* 02 Featured */}
          <El as="section" css={`background:#F4F1EA;color:#08070A;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:clamp(28px,4vw,72px);align-items:start">
              <El css="display:flex;flex-direction:column;gap:18px">
                <El as="span" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55`}>In their words</El>
                <El css="display:flex;gap:8px">
                  {QUOTES.map((x, i) => (
                    <El
                      as="button"
                      type="button"
                      key={x.name}
                      onClick={() => setQi(i)}
                      aria-label={`Show review ${i + 1}`}
                      aria-pressed={qi === i}
                      css={`cursor:pointer;width:${qi === i ? '44px' : '14px'};height:6px;border:0;padding:0;background:${qi === i ? '#F04423' : 'rgba(8,7,10,.25)'};transition:width .4s,background .3s`}
                    />
                  ))}
                </El>
              </El>
              <El as="figure" css="grid-column:span 2;min-width:min(100%,320px);margin:0;display:flex;flex-direction:column;gap:clamp(24px,3vw,40px)">
                <El as="blockquote" css="margin:0;font-size:clamp(1.8rem,4vw,3.8rem);line-height:1.05;letter-spacing:-.05em;font-weight:500;text-wrap:balance">
                  <El as="span" css="color:#F04423">&#8220;</El>{q.quote}<El as="span" css="color:#F04423">&#8221;</El>
                </El>
                <El as="figcaption" css="display:flex;flex-wrap:wrap;gap:8px 18px;align-items:baseline;padding-top:18px;border-top:1px solid rgba(8,7,10,.2)">
                  <El as="span" css="font-size:18px;font-weight:600;letter-spacing:-.02em">{q.name}</El>
                  <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55`}>{q.role}</El>
                </El>
              </El>
            </El>
          </El>

          {/* 03 Client stories */}
          <El as="section" css={`background:#08070A;color:#F4F1EA;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,4.6vw,64px)">
              <El>
                <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:16px`}>Client stories</El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.4rem,5.8vw,6rem);line-height:.88;letter-spacing:-.065em;font-weight:500">Read them <Em>in full.</Em></El>
              </El>
              <El as="p" data-rv="1" css="margin:0;max-width:46ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">The reviews Mariox clients left, exactly as they wrote them.</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:clamp(14px,1.6vw,22px)">
              {QUOTES.map((s) => (
                <El as="figure" key={s.name} data-rv="1" css="margin:0;display:flex;flex-direction:column;gap:16px">
                  <El as="blockquote" css="margin:0;aspect-ratio:9/12;background:#141216;border:1px solid rgba(244,241,234,.14);padding:clamp(24px,2.8vw,36px);display:flex;flex-direction:column;justify-content:center;gap:18px;font-size:clamp(1.05rem,1.7vw,1.4rem);line-height:1.35;letter-spacing:-.025em">
                    <El as="span" css={`${MONO};font-size:34px;line-height:1;color:#F04423`}>&#8220;</El>
                    {s.quote}
                  </El>
                  <El as="figcaption" css="display:flex;flex-direction:column;gap:6px">
                    <El as="span" css="font-size:17px;font-weight:500;letter-spacing:-.02em">{s.name}</El>
                    <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85`}>{s.role}</El>
                  </El>
                </El>
              ))}
            </El>
          </El>

          {/* 04 Clients */}
          <El as="section" aria-label="Clients" css="background:#08070A;padding:0 0 clamp(90px,11vw,170px);overflow:hidden">
            <El css={`padding:0 ${PAD};margin-bottom:28px;${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85`}>Some of the teams we have built for</El>
            <El css="display:flex;width:max-content;animation:mxMarquee 70s linear infinite">
              {loop.map((c, i) => (
                <El as="span" key={`${c}-${i}`} css="display:flex;align-items:center;gap:clamp(24px,3vw,48px);padding-right:clamp(24px,3vw,48px);font-size:clamp(1.8rem,4vw,3.6rem);font-weight:500;letter-spacing:-.06em;white-space:nowrap;color:#F4F1EA">
                  {c}<El as="span" css="width:12px;height:12px;background:#F04423;display:inline-block" />
                </El>
              ))}
            </El>
          </El>

          {/* 05 Review */}
          <El as="section" css={`background:#F4F1EA;color:#08070A;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(28px,4vw,72px);align-items:end">
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.4rem,5.6vw,5.8rem);line-height:.88;letter-spacing:-.065em;font-weight:500">Worked with us? <Em>Tell people.</Em></El>
              <El css="display:flex;flex-direction:column;gap:18px">
                <El as="p" data-rv="1" css="margin:0;max-width:44ch;font-size:16.5px;line-height:1.55;color:#4A4741">Reviews help other founders choose well. It takes two minutes on Google, and we read every one.</El>
                <El as="a" data-rv="1" href={GOOGLE} target="_blank" rel="noopener" css="align-self:flex-start;display:flex;align-items:center;gap:12px;background:#08070A;color:#F4F1EA;padding:17px 24px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap">Leave a Google review <span>&#8599;</span></El>
              </El>
            </El>
          </El>

          {/* CTA */}
          <El as="section" css={`background:#F04423;color:#08070A;padding:clamp(80px,10vw,150px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(28px,4vw,72px);align-items:end">
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.6rem,6.6vw,7rem);line-height:.86;letter-spacing:-.07em;font-weight:500">Be our next <Em>review.</Em></El>
              <El css="display:flex;flex-direction:column;gap:20px">
                <El as="p" data-rv="1" css="margin:0;max-width:42ch;font-size:clamp(16px,1.3vw,18px);line-height:1.5">Tell us what you are building. A senior engineer replies within one business day.</El>
                <El data-rv="1" css="display:flex;flex-wrap:wrap;gap:10px">
                  <El as="a" href="/book-consultation" css="display:flex;align-items:center;gap:12px;background:#08070A;color:#F4F1EA;padding:18px 26px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap;transition:background .3s,color .3s" hover="background:#F4F1EA;color:#08070A">Book a free consultation <span>&#8594;</span></El>
                  <El as="a" href="/contact" css="display:flex;align-items:center;gap:12px;border:1px solid rgba(8,7,10,.45);color:#08070A;padding:18px 24px;border-radius:999px;font-size:15px;white-space:nowrap;transition:background .3s,color .3s" hover="background:#08070A;color:#F4F1EA">Contact us</El>
                </El>
              </El>
            </El>
          </El>

          <EstimateForm id="estimate" source="testimonials" subject="Enquiry from the reviews page" />

          <Footer />
        </El>
      </Shell>
    </>
  );
}

Testimonials.bare = true;
