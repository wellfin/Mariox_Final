import React from 'react';
import El from './El';
import { MONO, PageHero, Section, CtaSection } from './ui';
import { Seo } from './sections';

const FIELDS = [
  ['founded', 'Founded'],
  ['employees', 'Employees'],
  ['hourly_rate', 'Hourly rates'],
  ['rating', 'Clutch rating'],
  ['email', 'Email'],
  ['phone', 'Contact'],
];

export default function TopCompanies({ data = {}, companies = [], serviceCity = '' }) {
  const title = (data.seoMeta && data.seoMeta.title) || data.h1Text || 'Top companies';
  return (
    <>
      <Seo title={title} description={(data.seoMeta && data.seoMeta.description) || ''} />
      <PageHero
        eyebrow={<>Rankings &nbsp;/&nbsp; {serviceCity.replace(/-/g, ' ')}</>}
        a={data.h1Text || 'Top companies'}
        sub={data.h1Desc}
        h1Size="clamp(2.2rem,6vw,5.6rem)"
      />
      <Section top={false} pad="0" css="padding-bottom:clamp(56px,8vw,130px);display:grid;gap:clamp(16px,2vw,28px)">
        {companies.map((c, index) => (
          <El key={c._id || index} data-fade="1" css="border:1px solid rgba(244,241,234,.14);background:rgba(8,7,10,.7)">
            <El css="display:flex;flex-wrap:wrap;gap:20px 32px;align-items:center;justify-content:space-between;padding:clamp(20px,2.8vw,40px)">
              <El css="display:flex;flex-wrap:wrap;gap:20px;align-items:center;flex:1 1 420px">
                {c.logo ? (
                  <El css="width:88px;height:88px;background:#F4F1EA;display:grid;place-items:center;flex-shrink:0">
                    <El as="img" src={c.logo} alt={c.name} loading="lazy" css="max-width:76px;max-height:76px;object-fit:contain" />
                  </El>
                ) : null}
                <El css="flex:1 1 260px">
                  <El css={`${MONO};font-size:10.5px;letter-spacing:.18em;color:#F04423;margin-bottom:8px`}>{String(index + 1).padStart(2, '0')}</El>
                  <El as="h2" css="margin:0;font-size:clamp(1.3rem,2.6vw,2.2rem);font-weight:800;letter-spacing:-.035em;line-height:1.02;text-transform:uppercase">{c.name}</El>
                  {c.description ? <El as="p" css="margin:10px 0 0;font-size:14.5px;line-height:1.55;color:#B7B2AA;max-width:70ch">{c.description}</El> : null}
                </El>
              </El>
              {c.website ? (
                <El as="a" href={c.website} target="_blank" rel="noopener noreferrer" data-cursor="view" css={`display:flex;align-items:center;gap:12px;border:1px solid rgba(244,241,234,.3);padding:15px 20px;${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;transition:border-color .35s,color .35s`} hover="border-color:#F04423;color:#F04423">
                  Go to website <span>&#8599;</span>
                </El>
              ) : null}
            </El>
            {c.services && c.services.length ? (
              <El css="display:flex;flex-wrap:wrap;gap:7px;padding:0 clamp(20px,2.8vw,40px) clamp(18px,2.4vw,30px)">
                {c.services.map((s, i) => (
                  <El as="span" key={i} css={`${MONO};font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;border:1px solid rgba(244,241,234,.2);padding:6px 9px;color:#B7B2AA`}>{s}</El>
                ))}
              </El>
            ) : null}
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,160px),1fr));gap:1px;background:rgba(244,241,234,.14);border-top:1px solid rgba(244,241,234,.14)">
              {FIELDS.filter(([k]) => c[k]).map(([k, label]) => (
                <El key={k} css="background:#08070A;padding:clamp(14px,1.8vw,22px) clamp(20px,2.8vw,40px)">
                  <El css={`${MONO};font-size:9.5px;letter-spacing:.2em;text-transform:uppercase;color:#8E8A85;margin-bottom:6px`}>{label}</El>
                  <El css="font-size:15px;word-break:break-word">{c[k]}</El>
                </El>
              ))}
            </El>
          </El>
        ))}
      </Section>
      <CtaSection a="Looking for a" b="partner that ships?" />
    </>
  );
}
