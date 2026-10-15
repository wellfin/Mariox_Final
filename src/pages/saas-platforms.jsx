import React from 'react';
import MarketingLanding from '@/components/MarketingLanding';
import {
  saasIncluded, saasGet, apps, cases, faq, heroNeeds, heroBudgets,
} from '@/data/saasLanding';

// "Mariox SaaS Landing" design.
export default function SaasPlatforms() {
  return (
    <MarketingLanding
      seo={{
        title: 'SaaS Development Company — Multi-tenant SaaS Platforms | Mariox Software',
        description: 'SaaS product development company. Multi-tenancy, subscription billing, onboarding and admin tooling built by 100+ senior engineers. Free SaaS estimate in one business day.',
      }}
      eyebrow={<>SaaS development &#183; trusted by Graphy, Learnosity &amp; Fynd</>}
      h1="SaaS Development Company."
      h1Accent="Platforms built for the thousandth customer."
      sub="Multi-tenancy, subscription billing, onboarding and the admin tooling that decides whether a SaaS product is a business or a demo. MVP to scale, built by 100+ senior engineers."
      formTitle="Get a free SaaS estimate"
      badges={false}
      heroNeeds={heroNeeds}
      heroBudgets={heroBudgets}
      included={{
        a: 'Everything a SaaS needs to',
        b: 'become a business.',
        sub: 'The tenancy and billing model gets decided in week one, because both are painful to change later. We build the admin console early so support never needs production database access.',
        items: saasIncluded,
        get: saasGet,
      }}
      appsTitle={'Looking to build a SaaS like…'}
      appsHint="Pick a model to see what goes into it"
      apps={apps}
      quotePrefix="We want to build a SaaS like"
      cases={cases}
      faq={faq}
    />
  );
}
