import React from 'react';
import ServiceDetail from '@/components/final/ServiceDetail';
import { landingServiceProps } from '@/data/serviceAdapters';
import { hero, included, cases, faq } from '@/data/erpLanding';

// ERP landing. Rendered in the design's service layout, from this page's own copy.
export default function ErpSoftwareDevelopment() {
  return <ServiceDetail {...landingServiceProps({
    slug: 'erp-software-development',
    name: 'ERP software development',
    tagline: hero.h1Accent,
    desc: hero.sub,
    included,
    cases,
    faq,
  })} />;
}

ErpSoftwareDevelopment.bare = true;
