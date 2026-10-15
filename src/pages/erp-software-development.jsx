import React from 'react';
import MarketingLanding from '@/components/MarketingLanding';
import { seo, hero, heroNeeds, heroBudgets, included, apps, cases, faq } from '@/data/erpLanding';

// ERP.dc design.
export default function ErpSoftwareDevelopment() {
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
      appsTitle={'Looking to build an ERP like…'}
      appsHint="Pick a model to see how we'd build it"
      apps={apps}
      quotePrefix="We want to build an ERP like"
      cases={cases}
      faq={faq}
    />
  );
}
