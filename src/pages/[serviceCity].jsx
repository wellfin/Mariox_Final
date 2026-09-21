import React from 'react';
import ServiceCityPage from '@/components/ServiceCityPage';
import TopCompanies from '@/components/TopCompanies';

// SEO landing pages (e.g. /android-app-development-company-in-noida) served by the
// content API, exactly as on the live site: unknown slugs or API failures go home.
export default function DynamicPage({ pageDetails, serviceCity }) {
  const data = (pageDetails && pageDetails.data) || {};
  if (data.isTopCity === true) {
    return <TopCompanies data={data} companies={data.companies || []} serviceCity={serviceCity} />;
  }
  return <ServiceCityPage data={data} serviceCity={serviceCity} />;
}

const home = { redirect: { destination: '/', permanent: false } };

export async function getServerSideProps({ params }) {
  const { serviceCity } = params;
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
