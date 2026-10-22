import React from 'react';
import { useRouter } from 'next/router';
import El from '@/components/El';
import MarketingLanding from '@/components/MarketingLanding';
import { A, ServiceRows } from '@/components/ui';
import { groupRows } from '@/data/growthServices';
import { apps, cases, faq, heroNeeds, heroBudgets, appIncluded, appPlatforms } from '@/data/enterpriseLanding';

// The design's app-development landing (`landing-app-development`), with the
// App Demos animation in the models panel and the app service links kept for
// internal linking.
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
        title: 'Mobile App Development Company — iOS, Android & Flutter Apps | Mariox Software',
        description: 'Mobile app development company for iOS, Android, Flutter and React Native apps. 300+ products shipped by 100+ senior engineers. Free estimate in one business day.',
      }}
      eyebrow={<>App development &#183; trusted by MILKRUN, Graphy, Fampay &amp; HotDoc</>}
      h1={<>Mobile App Development Company.</>}
      h1Accent="Apps people open every day."
      sub="iOS, Android, Flutter and React Native apps, from first wireframe to store release and beyond. Built by 100+ senior engineers, with a fixed-scope estimate in one business day."
      formTitle="Get a free app estimate"
      included={{
        a: 'Everything an app needs',
        b: 'to work.',
        sub: 'The app is only the visible part. We build the backend, admin panel, payments and analytics behind it.',
        items: appIncluded,
        get: appPlatforms,
      }}
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
