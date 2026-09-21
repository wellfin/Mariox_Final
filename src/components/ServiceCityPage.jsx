import React, { useState } from 'react';
import Link from 'next/link';
import El from './El';
import {
  MONO, A, Eyebrow, Section, SectionHead, SectionTitle, Lead, StepList, TechExplorer,
  TileGrid, CaseCard, CardGrid, CtaSection,
} from './ui';
import { Seo, JsonLd, FaqSection, Testimonials, ContactBlock } from './sections';
import ContactForm from './ContactForm';
import ContactModal from './ContactModal';
import { SITE_URL, processSteps, featuredWork } from '@/data/site';
import { industries } from '@/data/industries';
import { serviceTestimonials } from '@/data/testimonials';
import { serviceWebPageSchema, localBusinessSchema, breadcrumbSchema } from '@/data/schemas';
import { setStage } from '@/lib/fx';

const whyCards = [
  {
    n: '01',
    title: 'Free Consultation',
    body: 'Consult with us and learn about our various services that can help your business grow and generate higher ROI. We ensure that website development services are accessible to all, and budget should never be an issue, so we offer our services at feasible prices and various payment facilities. Our professional business and project management team works around the clock to resolve all your doubts. Take a free consultation today, join us, observe changes, and see your business touch the skies.',
  },
  {
    n: '02',
    title: '360 Scalability',
    body: 'Our company emphasizes the dynamic growth of your business. Hence, web and app development services can be the right stop for all your business-related issues. They comprise mobile app development, digital marketing, QA testing, website app development, Oracle, and other compatible solutions that can work wonders for client expectations and growth.',
  },
  {
    n: '03',
    title: '24/7 Support & On-Time Delivery',
    body: 'Our company emphasizes the dynamic growth of your business. Hence, web and app development services can be the right stop for all your business-related issues. They comprise mobile app development, digital marketing, QA testing, website app development, Oracle, and other compatible solutions that can work wonders for client expectations and growth.',
  },
];

const appServices = (inCity) => [
  { n: '01', title: 'Android App Development', body: `Mariox is one of the best Android app development companies${inCity}, offering fully functional and secure application solutions tailored to business needs. Our company has an ample understanding of frameworks, industry experience, technical knowledge and innovative approaches.` },
  { n: '02', title: 'iOS App Development', body: `Our highly-skilled iOS application developers${inCity} have the combined experience and knowledge of working on and delivering iPhone and iPad apps for various apps covering such genres as Healthcare, Business, Entertainment, Technology, Lifestyle, Travel, and more.` },
  { n: '03', title: 'Hybrid App Development', body: `Hybrid application development${inCity} involves creating an app compatible with numerous platforms. It uses a framework that works on iOS, Android, and Windows platforms. Hybrid application development uses web technologies such as CSS, JavaScript and HTML.` },
  { n: '04', title: 'E-Commerce App Development', body: `Being an end-to-end e-commerce app development company${inCity}, we use advanced technologies to unlock potential revenue streams for you while maximising the business prospects of your application or product.` },
  { n: '05', title: 'React Native App Development', body: `Team up with the top React Native app development company${inCity}, and develop your great idea along with our team of professional developers who will strengthen your mission and boost your business success through their contemporary technology implementation.` },
  { n: '06', title: 'Cross-Platform App Development', body: `Our expert team${inCity}, with years of experience, knows what creates apps that run smoothly on various platforms. Those apps lift your business to a completely new level. Mariox will make sure that you get the highest quality product, smooth operation, and the best possible support in services throughout the lifetime of your app.` },
];

const titleCase = (s) => s.replace(/\b\w/g, (c) => c.toUpperCase());

function Breadcrumb({ items }) {
  if (!items || !items.length) return null;
  return (
    <El as="nav" aria-label="Breadcrumb" data-fade="1" css="margin-bottom:clamp(22px,3vw,40px)">
      <El as="ol" css={`list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:8px 12px;${MONO};font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:#8E8A85`}>
        {items.map((item, i) => (
          <El as="li" key={i} css="display:inline-flex;align-items:center;gap:12px">
            {i > 0 ? <El as="span" aria-hidden="true" css="color:#57544F">/</El> : null}
            {i === items.length - 1 ? (
              <El as="span" aria-current="page" css="color:#F4F1EA">{item.name}</El>
            ) : (
              <El as={Link} href={item.slug || '/'} data-cursor="1" css="color:#8E8A85">{item.name}</El>
            )}
          </El>
        ))}
      </El>
    </El>
  );
}

function LinkColumns({ title, links }) {
  if (!links || !links.length) return null;
  return (
    <El css="margin-bottom:clamp(32px,4vw,60px)">
      <SectionTitle mb="clamp(20px,2.6vw,36px)" size="clamp(1.7rem,4.4vw,3.4rem)">{title}</SectionTitle>
      <El data-fade="1" css="display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,230px),1fr));gap:0 clamp(20px,3vw,48px);border-top:1px solid rgba(244,241,234,.14)">
        {links.map((l, i) => (
          <El
            as="a"
            key={l.slug + i}
            href={'/' + l.slug}
            data-cursor="1"
            css="display:block;padding:12px 0;border-bottom:1px solid rgba(244,241,234,.14);font-size:14.5px;line-height:1.4;color:#B7B2AA;transition:color .3s"
            hover="color:#F04423"
          >
            {l.pageName}
          </El>
        ))}
      </El>
    </El>
  );
}

export default function ServiceCityPage({ data = {}, serviceCity = '' }) {
  const [modal, setModal] = useState(false);
  // City pages carry cityName from the API; plain service pages have no city.
  const slugCity = /-in-([a-z-]+)$/.exec(serviceCity || '');
  const cityName = data.cityName || (slugCity ? titleCase(slugCity[1].replace(/-/g, ' ')) : '');
  const inCity = cityName ? ` in ${cityName}` : '';
  const canonical = `${SITE_URL}/${serviceCity}`;
  const images = Array.isArray(data.images) ? data.images : [];

  return (
    <>
      <Seo
        title={(data.seoMeta && data.seoMeta.title) || 'Mariox Software'}
        description={(data.seoMeta && data.seoMeta.description) || 'Website and mobile app development services by Mariox Software.'}
        canonical={canonical}
        openGraph={{ site_name: 'MarioxSoftware', images: [{ url: `${SITE_URL}/img/mobile-dev-banner.webp` }] }}
      />
      <JsonLd id="service-webpage" data={serviceWebPageSchema(data.slug || serviceCity)} />
      <JsonLd id="service-localbusiness" data={localBusinessSchema} />
      <JsonLd id="breadcrumb" data={breadcrumbSchema(data.breadcrumb, SITE_URL)} />

      <El as="section" css="padding:clamp(40px,6vw,96px) clamp(18px,4vw,60px) clamp(48px,7vw,110px)">
        <Breadcrumb items={data.breadcrumb} />
        <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));gap:clamp(32px,5vw,96px);align-items:start">
          <div>
            <Eyebrow>{cityName ? <>{cityName} &nbsp;/&nbsp; </> : null}{data.pageName || 'Development services'}</Eyebrow>
            <El as="h1" data-fade="1" css="margin:0;max-width:18ch;font-size:clamp(2.2rem,5.6vw,5.4rem);line-height:.9;letter-spacing:-.045em;font-weight:800;text-transform:uppercase">
              {data.h1Text}
            </El>
            {data.h1Desc ? (
              <El as="p" data-fade="1" css="margin:clamp(24px,3vw,44px) 0 0;max-width:52ch;font-size:clamp(16px,1.35vw,20px);line-height:1.5;color:#B7B2AA">{data.h1Desc}</El>
            ) : null}
            <El data-fade="1" css="display:flex;flex-wrap:wrap;gap:14px 24px;align-items:center;margin-top:clamp(28px,3.6vw,52px)">
              <A href="/contact" data-cursor="start" css={`display:flex;align-items:center;gap:14px;background:#F4F1EA;color:#08070A;padding:19px 26px;${MONO};font-size:11.5px;font-weight:500;letter-spacing:.16em;text-transform:uppercase;transition:background .35s,color .35s`} hover="background:#F04423;color:#08070A">Contact us <span>&#8594;</span></A>
              <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:#F04423`}>iOS development</El>
              <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:#F04423`}>Android development</El>
            </El>
          </div>
          <El data-fade="1">
            <ContactForm cityName={cityName} title="Get in touch" id="enquiry-hero" compact />
          </El>
        </El>
      </El>

      {images.length ? (
        <Section>
          {images.map((item, index) => (
            <El
              key={index}
              css={`display:flex;flex-wrap:wrap;${index % 2 ? 'flex-direction:row-reverse;' : ''}gap:clamp(24px,4vw,80px);align-items:center;padding:clamp(24px,3.4vw,56px) 0;${index ? 'border-top:1px solid rgba(244,241,234,.1)' : ''}`}
            >
              <El data-fade="1" css="flex:1 1 340px">
                <El as="h2" css="margin:0 0 clamp(18px,2.4vw,30px);font-size:clamp(1.6rem,3.6vw,3rem);line-height:.96;letter-spacing:-.04em;font-weight:800;text-transform:uppercase">{item.title}</El>
                <El className="mx-prose" dangerouslySetInnerHTML={{ __html: item.content || '' }} />
                <El
                  as="button"
                  type="button"
                  onClick={() => setModal(true)}
                  data-cursor="start"
                  css={`margin-top:clamp(18px,2.4vw,30px);cursor:pointer;border:0;display:inline-flex;align-items:center;gap:14px;background:#F04423;color:#08070A;padding:19px 26px;${MONO};font-size:11px;font-weight:500;letter-spacing:.16em;text-transform:uppercase;transition:background .35s`}
                  hover="background:#F4F1EA"
                >
                  We help you go online &ndash; Contact us <span>&#8599;</span>
                </El>
              </El>
              <El data-fade="1" css="flex:1 1 340px;overflow:hidden;border:1px solid rgba(244,241,234,.14);background:#111013">
                {item.image ? <El as="img" src={item.image} alt={item.title || 'mariox'} loading="lazy" css="width:100%;height:auto;display:block" /> : null}
              </El>
            </El>
          ))}
        </Section>
      ) : null}

      <Section pad="clamp(60px,9vw,140px)">
        <SectionHead title="How it runs" href="/process" link={'Full process ↗'} mb="clamp(32px,4vw,64px)" />
        <StepList items={processSteps} />
      </Section>

      <Section pad="clamp(60px,9vw,140px)">
        <SectionHead title="Technology" href="/technologies" link={'Full stack ↗'} mb="clamp(32px,4vw,60px)" />
        <TechExplorer />
      </Section>

      <Section pad="clamp(60px,9vw,140px)">
        <SectionTitle>App development service for your business needs</SectionTitle>
        <El css="display:grid;gap:18px;max-width:880px;margin-bottom:clamp(36px,5vw,80px)">
          <Lead>At Mariox Software, we pride ourselves on delivering custom solutions for startups and big brands. From strategy to UI/UX design to digital prototyping, we are a mobile app and website development company{inCity} with expertise in developing and designing innovative mobile and website development services for all devices. With a strong focus on emerging technologies, our skilled team is here to lead the growth of your next successful venture.</Lead>
          <Lead>We are a top-rated mobile app development company{inCity}. You can rely on Mariox&#8217;s talented team of developers to streamline your business processes, reach a large number audience with an online presence or just about anything on the website.</Lead>
          <Lead>We have always met the standards of the ever-changing challenges of the IT sector. We believe more in actions, which is why we have become the most preferred app development company{inCity} across technologies like Laravel, PHP, Django/Python, AngularJS, CodeIgniter, and many more.</Lead>
        </El>
        <TileGrid items={whyCards} cols="repeat(auto-fit,minmax(min(100%,300px),1fr))" minH="320px" />
      </Section>

      <Section pad="clamp(60px,9vw,140px)">
        <SectionTitle>Our explicit app development services</SectionTitle>
        <TileGrid items={appServices(inCity)} cols="repeat(auto-fit,minmax(min(100%,300px),1fr))" minH="320px" />
      </Section>

      <Section pad="clamp(60px,9vw,140px)">
        <SectionHead title="Case study" href="/case-study" link={'All work ↗'} mb="clamp(26px,3.4vw,50px)" />
        <CardGrid>
          {featuredWork.map((w) => (
            <CaseCard key={w.url} c={{ ...w, slug: w.url }} label={w.sector} />
          ))}
        </CardGrid>
      </Section>

      <Section pad="clamp(60px,9vw,140px)">
        <El data-fade="1" css="display:flex;flex-wrap:wrap;gap:16px;align-items:baseline;justify-content:space-between;margin-bottom:clamp(28px,3.4vw,50px)">
          <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.22em;text-transform:uppercase;color:#8E8A85`}>Industries</El>
          <A href="/industries" data-cursor="1" css={`${MONO};font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:#F04423;border-bottom:1px solid #F04423;padding-bottom:4px`}>Explore all sixteen &#8599;</A>
        </El>
        <El css="display:flex;flex-wrap:wrap;gap:clamp(10px,1.4vw,20px) clamp(20px,3vw,52px);align-items:baseline">
          {industries.map((i) => (
            <El as={Link} key={i.slug} href={'/industries/' + i.slug} data-cursor="view" onMouseEnter={() => setStage(i.stage)} css="font-size:clamp(1.5rem,4.6vw,4.2rem);font-weight:800;letter-spacing:-.045em;line-height:1.05;text-transform:uppercase;color:rgba(244,241,234,.62);transition:color .35s cubic-bezier(.2,.8,.2,1)" hover="color:#F04423">{i.name}</El>
          ))}
        </El>
      </Section>

      <Testimonials items={serviceTestimonials} />

      <FaqSection faqs={data.faqs} title="Frequently asked questions" />

      {data.aboutService && data.pageName ? (
        <Section>
          <SectionTitle>About {data.pageName}</SectionTitle>
          <El data-fade="1" className="mx-prose" dangerouslySetInnerHTML={{ __html: data.aboutService }} />
        </Section>
      ) : null}

      {(data.topCities && data.topCities.length) || (data.topServices && data.topServices.length) ? (
        <Section>
          <LinkColumns title="Top cities" links={data.topCities} />
          <LinkColumns title="Top services" links={data.topServices} />
        </Section>
      ) : null}

      <ContactBlock cityName={cityName} title="Get in touch" id="enquiry-footer" />
      <CtaSection a="Have a big idea?" b={'Let’s build it.'} />

      <ContactModal open={modal} onClose={() => setModal(false)} cityName={cityName} />
    </>
  );
}
