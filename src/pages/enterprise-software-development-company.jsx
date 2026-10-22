import React from 'react';
import MarketingLanding from '@/components/MarketingLanding';
import { apps, cases, faq, heroNeeds, heroBudgets } from '@/data/enterpriseLanding';

// "Mariox Enterprise Landing" (`landing-enterprise` in the final folder): the
// broad custom-software campaign page, kept alongside the app, SaaS, CRM and
// ERP landings. It sits at /enterprise-software-development-company so the
// service page keeps the plain /enterprise-software-development slug.
export default function EnterpriseSoftwareDevelopmentCompany() {
  return (
    <MarketingLanding
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
      appsTitle={'Looking to build something like…'}
      appsHint="Pick a model to see how we'd build it"
      apps={apps}
      quotePrefix="We want to build a platform like"
      cases={cases}
      faq={faq}
    />
  );
}
