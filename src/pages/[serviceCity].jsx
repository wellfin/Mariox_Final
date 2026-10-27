import React from 'react';
import ServiceCityPage from '@/components/ServiceCityPage';
import TopCompanies from '@/components/TopCompanies';
import ServiceDetail, { serviceProps } from '@/components/final/ServiceDetail';
import { localServiceAt } from '@/data/growthServices';
import { codedServiceProps, panelServiceProps } from '@/data/serviceAdapters';

// Every root-level slug, in the design's look: first the 72 coded service pages
// (e.g. /crm-development), then the older ones from src/data, then whatever the
// admin panel holds, including its city pages. Unknown slugs go home.
export default function DynamicPage({ detail, city, pageDetails, serviceCity }) {
  const data = (pageDetails && pageDetails.data) || {};
  if (data.isTopCity === true) {
    return <TopCompanies data={data} companies={data.companies || []} serviceCity={serviceCity} />;
  }
  if (detail) return <ServiceDetail {...detail} city={city} />;
  return <ServiceCityPage data={data} serviceCity={serviceCity} />;
}

const home = { redirect: { destination: '/', permanent: false } };

// One content-API call, with a timeout. Returns null on any failure so a page
// that has its own content still renders when the API is slow or down.
async function panelData(slug, ms = 6000) {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) return null;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/homeScreen/${slug}`, { signal: controller.signal });
    if (!res.ok) return null;
    const json = await res.json();
    const data = json && json.data;
    return data && Object.keys(data).length ? data : null;
  } catch (error) {
    console.error(`Content API failed for ${slug}:`, error.message);
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function getServerSideProps({ params, res }) {
  const { serviceCity } = params;

  // The design's service pages live at the root, so they are matched first.
  // Where the admin panel also holds that slug, its SEO meta, about copy, FAQs
  // and top-service links are merged into the design layout.
  const service = serviceCity && serviceProps(serviceCity);
  if (service) {
    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400');
    return { props: { detail: { ...service, panel: await panelData(serviceCity) }, bare: true } };
  }

  // City pages (/<service>-in-<city>) use the same design, with the city's own
  // copy from the panel. Only the panel knows which cities exist, so a slug with
  // no entry falls through to the old route below.
  const cityMatch = /^(.+)-in-([a-z0-9-]+)$/.exec(serviceCity || '');
  const cityBase = cityMatch && serviceProps(cityMatch[1]);
  if (cityBase) {
    const panel = await panelData(serviceCity);
    if (panel && panel.isTopCity !== true) {
      res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400');
      const city = panel.cityName || cityMatch[2].replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
      return { props: { detail: { ...cityBase, panel }, bare: true, city } };
    }
    if (panel) return { props: { pageDetails: { data: panel }, serviceCity, bare: false } };
    return home;
  }

  const local = serviceCity && localServiceAt(serviceCity);
  if (local) {
    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400');
    return { props: { detail: codedServiceProps(local.slug), bare: true } };
  }

  // Anything else the panel holds, service or city page, in the same design.
  const panel = await panelData(serviceCity, 10000);
  if (!panel) return home;
  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400');
  if (panel.isTopCity === true) {
    return { props: { pageDetails: { data: panel }, serviceCity, bare: false } };
  }
  return {
    props: { detail: panelServiceProps(panel), bare: true, city: panel.cityName || null },
  };
}
