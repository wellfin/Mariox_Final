import React from 'react';
import ServiceDetail from '@/components/final/ServiceDetail';
import { landingServiceProps } from '@/data/serviceAdapters';
import { appIncluded, appPlatforms, cases, faq } from '@/data/enterpriseLanding';

// App development landing. Rendered in the design's service layout, from this page's own copy.
export default function AppDevelopment() {
  return <ServiceDetail {...landingServiceProps({
    slug: 'app-development',
    name: 'Mobile app development',
    tagline: 'Apps people open every day',
    desc: 'iOS, Android, Flutter and React Native apps, from first wireframe to store release and beyond. Built by 100+ senior engineers, with a fixed-scope estimate in one business day.',
    included: { items: appIncluded, get: appPlatforms },
    cases,
    faq,
  })} />;
}

AppDevelopment.bare = true;
