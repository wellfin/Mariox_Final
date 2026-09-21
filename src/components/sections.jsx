import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import El from './El';
import { MONO, Section, SectionTitle, SectionHead, TileGrid } from './ui';
import ContactForm from './ContactForm';
import { SITE_URL, CONTACT, offices } from '@/data/site';
import { defaultFaqs } from '@/data/faqs';
import { defaultTestimonials } from '@/data/testimonials';

const stripTags = (html) => (typeof html === 'string' ? html.replace(/<[^>]*>/g, '') : '');

// Title, description and canonical for every page.
export function Seo({ title, description, canonical, noindex, openGraph }) {
  const router = useRouter();
  const path = router.asPath.split(/[?#]/)[0];
  const url = canonical || SITE_URL + (path === '/' ? '' : path);
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      noindex={noindex}
      openGraph={{ url, title, description, siteName: 'Mariox Software', type: 'website', locale: 'en_US', ...openGraph }}
      twitter={{ site: '@MarioxSoftwares', cardType: 'summary_large_image' }}
    />
  );
}

export function JsonLd({ id, data }) {
  if (!data) return null;
  return (
    <Head>
      <script key={id} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
    </Head>
  );
}

// FAQ accordion with FAQPage structured data. Answers may contain HTML.
export function FaqSection({ faqs, title = 'Common questions', schema = true }) {
  const list = faqs && faqs.length ? faqs : defaultFaqs;
  const [open, setOpen] = useState(0);
  const data = schema && faqs && faqs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: stripTags(f.answer) },
        })),
      }
    : null;

  return (
    <Section>
      <JsonLd id="faq-schema" data={data} />
      <SectionTitle>{title}</SectionTitle>
      <El css="border-top:1px solid rgba(244,241,234,.16)">
        {list.map((f, i) => {
          const on = open === i;
          return (
            <El key={i} data-fade="1" css="border-bottom:1px solid rgba(244,241,234,.16)">
              <El
                as="button"
                type="button"
                aria-expanded={on}
                onClick={() => setOpen(on ? -1 : i)}
                data-cursor="1"
                css={`cursor:pointer;width:100%;background:transparent;border:0;text-align:left;display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:clamp(14px,3vw,44px);align-items:baseline;padding:clamp(16px,2.2vw,28px) clamp(6px,1.6vw,22px);color:${on ? '#F04423' : '#F4F1EA'};transition:color .3s`}
              >
                <El as="span" css={`${MONO};font-size:11px;opacity:.45`}>{String(i + 1).padStart(2, '0')}</El>
                <El as="span" css="font-size:clamp(1rem,1.9vw,1.5rem);font-weight:700;letter-spacing:-.025em;line-height:1.2">{f.question}</El>
                <El as="span" css={`${MONO};font-size:18px;line-height:1;transition:transform .3s;transform:rotate(${on ? 45 : 0}deg)`}>+</El>
              </El>
              {on ? (
                typeof f.answer === 'string' ? (
                  <El className="mx-prose" css="padding:0 clamp(6px,1.6vw,22px) clamp(20px,2.6vw,34px) clamp(40px,6vw,84px);font-size:15px" dangerouslySetInnerHTML={{ __html: f.answer }} />
                ) : (
                  <El className="mx-prose" css="padding:0 clamp(6px,1.6vw,22px) clamp(20px,2.6vw,34px) clamp(40px,6vw,84px);font-size:15px">{f.answer}</El>
                )
              ) : null}
            </El>
          );
        })}
      </El>
    </Section>
  );
}

// Enquiry form beside contact tiles (layout from the Editorial contact page).
export function ContactBlock({ cityName, title = 'Get in touch', lead, id = 'enquiry', top = true }) {
  return (
    <Section top={top} pad="clamp(56px,8vw,130px)" id={id + '-section'}>
      <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(32px,5vw,96px);align-items:start">
        <El data-fade="1">
          {lead ? <El as="p" css="margin:0 0 clamp(24px,3vw,40px);max-width:48ch;font-size:clamp(16px,1.35vw,20px);line-height:1.5;color:#B7B2AA">{lead}</El> : null}
          <ContactForm cityName={cityName} title={title} id={id} />
        </El>
        <ContactTiles />
      </El>
    </Section>
  );
}

export function ContactTiles({ withOffices = true }) {
  const tile = 'background:#08070A;padding:clamp(22px,2.8vw,36px);display:flex;flex-direction:column;gap:10px;color:#F4F1EA;transition:background .35s';
  const small = `${MONO};font-size:9.5px;letter-spacing:.22em;text-transform:uppercase`;
  return (
    <El data-fade="1" css="display:grid;gap:1px;background:rgba(244,241,234,.16);border:1px solid rgba(244,241,234,.16)">
      <El as="a" href={'mailto:' + CONTACT.email} data-cursor="1" css={tile} hover="background:#F04423;color:#08070A">
        <El as="span" css={`${small};opacity:.62`}>New business</El>
        <El as="span" css="font-size:clamp(1.05rem,1.7vw,1.35rem);font-weight:700;letter-spacing:-.03em;word-break:break-word">{CONTACT.email}</El>
      </El>
      <El as="a" href={CONTACT.tel} data-cursor="1" css={tile} hover="background:#F04423;color:#08070A">
        <El as="span" css={`${small};opacity:.62`}>Phone</El>
        <El as="span" css="font-size:clamp(1.05rem,1.7vw,1.35rem);font-weight:700;letter-spacing:-.03em">{CONTACT.phone}</El>
      </El>
      {withOffices
        ? offices.map((o) => (
            <El key={o.city} css="background:#08070A;padding:clamp(22px,2.8vw,36px);display:flex;flex-direction:column;gap:9px">
              <El as="span" css={`${small};color:#F04423`}>{o.country}</El>
              <El as="span" css="font-size:clamp(1.05rem,1.7vw,1.35rem);font-weight:800;letter-spacing:-.032em;text-transform:uppercase">{o.city}</El>
              <El as="p" css="margin:0;font-size:13px;line-height:1.5;color:#8E8A85">{o.address}</El>
            </El>
          ))
        : null}
    </El>
  );
}

export function Testimonials({ items = defaultTestimonials, title = 'What clients say' }) {
  if (!items || !items.length) return null;
  return (
    <Section>
      <SectionHead title={title} mb="clamp(26px,3.4vw,52px)" />
      <TileGrid
        items={items}
        cols="repeat(auto-fit,minmax(min(100%,300px),1fr))"
        minH="300px"
        render={(t) => (
          <>
            <El as="span" css={`${MONO};font-size:28px;line-height:1;color:#F04423`}>&#8220;</El>
            <El as="p" css="margin:0;font-size:clamp(15px,1.25vw,17.5px);line-height:1.55">{t.testimonial}</El>
            <El css={`margin-top:auto;padding-top:14px;border-top:1px solid rgba(244,241,234,.16);${MONO};font-size:10.5px;letter-spacing:.18em;text-transform:uppercase`}>
              {t.name}
              {t.designation ? <El as="span" css="opacity:.6"> / {t.designation}</El> : null}
            </El>
          </>
        )}
      />
    </Section>
  );
}
