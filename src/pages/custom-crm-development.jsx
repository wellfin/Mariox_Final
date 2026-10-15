import React from 'react';
import MarketingLanding from '@/components/MarketingLanding';
import { seo, hero, heroNeeds, heroBudgets, included, apps, cases, faq } from '@/data/crmLanding';

// CRM.dc design.
export default function CustomCrmDevelopment() {
  return (
    <MarketingLanding
      seo={seo}
      eyebrow={hero.eyebrow}
      h1={hero.h1}
      h1Accent={hero.h1Accent}
      sub={hero.sub}
      formTitle={hero.formTitle}
      heroNeeds={heroNeeds}
      heroBudgets={heroBudgets}
      included={included}
      appsTitle={'Looking to build a CRM like…'}
      appsHint="Pick a model to watch how it works"
      apps={apps}
      quotePrefix="We want to build a CRM like"
      cases={cases}
      faq={faq}
    />
  );
}
