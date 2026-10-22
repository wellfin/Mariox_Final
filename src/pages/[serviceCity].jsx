import React from 'react';
import ServiceCityPage from '@/components/ServiceCityPage';
import TopCompanies from '@/components/TopCompanies';
import ServicePage from '@/components/ServicePage';
import ServiceDetail, { serviceProps } from '@/components/final/ServiceDetail';
import { localServiceAt, servicePageProps } from '@/data/growthServices';

// Every root-level slug: first the 72 design service pages (e.g. /crm-development),
// then the older service pages from src/data (e.g. /web-development), then the SEO
// landing pages served by the content API, exactly as on the live site. Unknown
// slugs or API failures go home.
export default function DynamicPage({ service, svc, rows, parent, pageDetails, serviceCity }) {
  if (service) return <ServiceDetail {...service} />;
  if (svc) return <ServicePage svc={svc} rows={rows} parent={parent} />;
  const data = (pageDetails && pageDetails.data) || {};
  if (data.isTopCity === true) {
    return <TopCompanies data={data} companies={data.companies || []} serviceCity={serviceCity} />;
  }
  return <ServiceCityPage data={data} serviceCity={serviceCity} />;
}

const home = { redirect: { destination: '/', permanent: false } };

export async function getServerSideProps({ params, res }) {
  const { serviceCity } = params;

  // The design's service pages live at the root, so they are matched first.
  const service = serviceCity && serviceProps(serviceCity);
  if (service) {
    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400');
    return { props: { service, bare: true } };
  }

  const local = serviceCity && localServiceAt(serviceCity);
  if (local) return servicePageProps(local.slug);
  if (!serviceCity || serviceCity.trim() === '' || !process.env.NEXT_PUBLIC_BASE_API_URL) return home;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/homeScreen/${serviceCity}`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    if (!response.ok) return home;

    const data = await response.json();
    if (!data || !data.data || Object.keys(data.data).length === 0) return home;

    return { props: { isValidService: true, pageDetails: data, serviceCity } };
  } catch (error) {
    clearTimeout(timeoutId);
    console.error('Fetch error or timeout:', error.message);
    return home;
  }
}
