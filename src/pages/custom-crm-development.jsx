import React from 'react';
import ServiceDetail from '@/components/final/ServiceDetail';
import { landingServiceProps } from '@/data/serviceAdapters';
import { hero, included, cases, faq } from '@/data/crmLanding';

// CRM landing. Rendered in the design's service layout, from this page's own copy.
export default function CustomCrmDevelopment() {
  return <ServiceDetail {...landingServiceProps({
    slug: 'custom-crm-development',
    name: 'Custom CRM development',
    tagline: hero.h1Accent,
    desc: hero.sub,
    included,
    cases,
    faq,
  })} />;
}

CustomCrmDevelopment.bare = true;
