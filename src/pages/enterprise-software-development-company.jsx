import React from 'react';
import ServiceDetail from '@/components/final/ServiceDetail';
import { landingServiceProps } from '@/data/serviceAdapters';
import { appIncluded, appPlatforms, cases, faq } from '@/data/enterpriseLanding';

// Enterprise / custom software landing. Rendered in the design's service layout, from this page's own copy.
export default function EnterpriseSoftwareDevelopmentCompany() {
  return <ServiceDetail {...landingServiceProps({
    slug: 'enterprise-software-development-company',
    name: 'Custom software & app development',
    tagline: 'For serious products',
    desc: 'Web apps, mobile apps, CRM, ERP, SaaS and AI, built by 100+ senior engineers for startups and enterprises. Get a fixed-scope estimate within one business day.',
    included: { items: appIncluded, get: appPlatforms },
    cases,
    faq,
  })} />;
}

EnterpriseSoftwareDevelopmentCompany.bare = true;
