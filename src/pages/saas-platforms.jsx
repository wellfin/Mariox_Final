import React from 'react';
import ServiceDetail from '@/components/final/ServiceDetail';
import { landingServiceProps } from '@/data/serviceAdapters';
import { saasIncluded, saasGet, cases, faq } from '@/data/saasLanding';

// SaaS landing. Rendered in the design's service layout, from this page's own copy.
export default function SaasPlatforms() {
  return <ServiceDetail {...landingServiceProps({
    slug: 'saas-platforms',
    name: 'SaaS development',
    tagline: 'Platforms built for the thousandth customer',
    desc: 'Multi-tenancy, subscription billing, onboarding and the admin tooling that decides whether a SaaS product is a business or a demo. MVP to scale, built by 100+ senior engineers.',
    included: { items: saasIncluded, get: saasGet },
    cases,
    faq,
  })} />;
}

SaasPlatforms.bare = true;
