import React from 'react';
import { useRouter } from 'next/router';
import El from '@/components/El';
import MarketingLanding from '@/components/MarketingLanding';
import { A, ServiceRows } from '@/components/ui';
import { groupRows } from '@/data/growthServices';
import { apps, cases, faq, heroNeeds, heroBudgets } from '@/data/enterpriseLanding';

// "Mariox Enterprise Landing" design, with the App Demos animation in the
// models panel and the app-development service links kept for internal linking.
const MONO = "font-family:'JetBrains Mono',monospace";

export default function AppDevelopment({ rows }) {
  const router = useRouter();
  const start = (() => {
    const q = router.query.app;
    if (typeof q !== 'string') return 0;
    const i = apps.findIndex((a) => a.demo === q.toLowerCase());
    return i >= 0 ? i : 0;
  })();

  return (
    <MarketingLanding
      key={start}
      startApp={start}
      seo={{
        title: 'Custom Software & App Development Company — Mariox Software',
        description: 'The engineering team behind products for Airwallex, Kogan, Zeller, HotDoc and Lunar. Talk to a solution architect about your next platform.',
      }}
      eyebrow={<>Trusted by Airwallex, Zeller, Kogan &amp; HotDoc</>}
      h1={<>Custom Software &amp; App Development Company</>}
      h1Accent="for serious products."
      sub="Web apps, mobile apps, CRM, ERP, SaaS and AI, built by 100+ senior engineers for startups and enterprises. Get a fixed-scope estimate within one business day."
      formTitle="Get a free project estimate"
      heroNeeds={heroNeeds}
      heroBudgets={heroBudgets}
      appsTitle={'Looking to build an app like…'}
      appsHint="Pick a model to see how we'd build it"
      apps={apps}
      quotePrefix="We want to build an app like"
      cases={cases}
      faq={faq}
    >
      {rows && rows.length ? (
        <El as="section" css="padding:0 clamp(16px,4vw,56px) clamp(56px,8vw,120px)">
          <El css="display:flex;flex-wrap:wrap;gap:16px;align-items:baseline;justify-content:space-between;margin-bottom:clamp(22px,3vw,40px)">
            <El as="h2" css="margin:0;font-size:clamp(1.8rem,3.6vw,2.8rem);line-height:1;letter-spacing:-.04em;font-weight:800">App development services.</El>
            <A href="/services" data-cursor="1" css={`${MONO};font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#F04423;border-bottom:1px solid #F04423;padding-bottom:4px`}>All services &#8599;</A>
          </El>
          <ServiceRows items={rows} />
        </El>
      ) : null}
    </MarketingLanding>
  );
}

export async function getStaticProps() {
  return { props: { rows: groupRows('app-development') } };
}
