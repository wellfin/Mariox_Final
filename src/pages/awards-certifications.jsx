import React from 'react';
import El from '@/components/El';
import { Seo } from '@/components/sections';
import Nav from '@/components/final/Nav';
import Footer from '@/components/final/Footer';
import ProofBand from '@/components/final/ProofBand';
import EstimateForm from '@/components/final/EstimateForm';
import { MONO, PAD, Em, Shell } from '@/components/final/ui';
import { useReveal } from '@/components/final/fx';
import { SITE_URL } from '@/data/site';

// Certifications & partners page from the design's `awards-certifications`.
// Platform logos come from Google's favicon service, as in the design; each
// tile links to the service page for that platform on this site.

const favicon = (domain) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

const CERTS = [
  { t: 'Amazon Web Services', domain: 'aws.amazon.com', list: ['Solutions Architect', 'Developer', 'DevOps Engineer'] },
  { t: 'Microsoft Azure', domain: 'azure.microsoft.com', list: ['Azure Developer', 'Azure Administrator', 'Solutions Architect Expert'] },
  { t: 'Google Cloud', domain: 'cloud.google.com', list: ['Professional Cloud Architect', 'Professional Data Engineer', 'Associate Cloud Engineer'] },
];

const PLATFORMS = [
  ['Salesforce', 'salesforce.com', '/salesforce-development'],
  ['Microsoft Dynamics 365', 'dynamics.microsoft.com', '/microsoft-dynamics-365'],
  ['SAP Commerce Cloud', 'sap.com', '/sap-commerce-development'],
  ['Odoo', 'odoo.com', '/odoo-development'],
  ['Shopify', 'shopify.com', '/shopify-development-company'],
  ['Stripe', 'stripe.com', '/api-and-integrations'],
  ['Razorpay', 'razorpay.com', '/api-and-integrations'],
  ['Firebase', 'firebase.google.com', '/mobile-app-development-company'],
];

const MILESTONES = [
  { v: '2016', k: 'Founded' },
  { v: '100+', k: 'In-house engineers' },
  { v: '300+', k: 'Products shipped' },
  { v: '4', k: 'Offices, one team' },
];

export default function AwardsCertifications() {
  useReveal([]);

  return (
    <>
      <Seo
        title="Certifications & Partners — Mariox Software"
        description="Mariox Software engineers are certified on AWS, Microsoft Azure and Google Cloud. We implement Salesforce, Dynamics 365, SAP Commerce, Odoo and Shopify, and are rated 4.8 on Google."
        canonical={`${SITE_URL}/awards-certifications`}
      />

      <Shell>
        <Nav active="awards-certifications" ctaHref="/book-consultation" ctaLabel="Book a call" />
        <El as="main">
          {/* 01 Hero */}
          <El as="section" css={`position:relative;padding:clamp(140px,14vw,200px) ${PAD} clamp(56px,7vw,110px);overflow:hidden;isolation:isolate`}>
            <El aria-hidden="true" css="position:absolute;inset:-4% 0;z-index:-2;background:#08070A url('/assets/company/office-workspace.jpg') center/cover no-repeat" />
            <El aria-hidden="true" css="position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(8,7,10,.95) 0%,rgba(8,7,10,.82) 42%,rgba(8,7,10,.4) 100%),linear-gradient(0deg,#08070A 0%,rgba(8,7,10,0) 40%)" />
            <El>
              <El css={`display:flex;align-items:center;gap:12px;${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#B7B2AA`}>
                <El as="span" css="width:7px;height:7px;background:#F04423" />Recognition
              </El>
              <El as="h1" css="margin:clamp(18px,2.4vw,28px) 0 0;font-size:clamp(3rem,8.2vw,8.6rem);line-height:.86;letter-spacing:-.07em;font-weight:500;max-width:15ch">
                <El as="span" css="display:block">Certified,</El>
                <El as="span" css="display:block">reviewed, <Em>trusted.</Em></El>
              </El>
              <El as="p" css="margin:clamp(22px,2.8vw,34px) 0 0;max-width:52ch;font-size:clamp(16px,1.4vw,20px);line-height:1.5;color:#D9D5CD;text-wrap:pretty">The credentials behind the work: cloud certifications held by our engineers, the platforms we implement, and what clients say about us in public.</El>
              <El css="display:flex;flex-wrap:wrap;gap:12px;margin-top:clamp(28px,3.4vw,44px)">
                <El as="a" href="/testimonials" css="display:flex;align-items:center;gap:14px;background:#F04423;color:#08070A;padding:18px 26px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap;transition:background .3s" hover="background:#F4F1EA;color:#08070A">Read client reviews <span>&#8594;</span></El>
                <El as="a" href="/security" css="display:flex;align-items:center;gap:14px;border:1px solid rgba(244,241,234,.35);padding:18px 24px;border-radius:999px;font-size:15px;white-space:nowrap;transition:border-color .3s" hover="border-color:#F4F1EA;color:#F4F1EA">Security &amp; compliance</El>
              </El>
            </El>
          </El>

          <ProofBand eyebrow="Certified people, real offices" title="Credentials backed" titleEm="by a real team." />

          {/* 02 Certifications */}
          <El as="section" css={`background:#08070A;color:#F4F1EA;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,4.6vw,64px)">
              <El>
                <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:16px`}>Certifications</El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.4rem,5.8vw,6rem);line-height:.88;letter-spacing:-.065em;font-weight:500">Certified on the clouds <Em>you run on.</Em></El>
              </El>
              <El as="p" data-rv="1" css="margin:0;max-width:46ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">Our engineers hold professional certifications across the three major cloud platforms.</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:clamp(12px,1.4vw,20px)">
              {CERTS.map((c) => (
                <El key={c.t} data-rv="1" css="display:flex;flex-direction:column;gap:18px;padding:clamp(26px,3vw,40px);border:1px solid rgba(244,241,234,.16);min-height:340px;transition:border-color .3s" hover="border-color:#F04423">
                  <El as="span" css="display:flex;align-items:center;gap:14px">
                    <El as="span" role="img" aria-label={`${c.t} logo`} css={`width:56px;height:56px;background:#FFFFFF center/34px no-repeat;background-image:url('${favicon(c.domain)}')`} />
                    <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#F04423`}>Certified engineers</El>
                  </El>
                  <El as="span" css="font-size:clamp(1.8rem,3vw,2.6rem);font-weight:500;letter-spacing:-.06em;line-height:.95">{c.t}</El>
                  <El css="margin-top:auto;display:flex;flex-direction:column">
                    {c.list.map((x) => (
                      <El as="span" key={x} css="display:flex;gap:10px;align-items:baseline;padding:9px 0;border-top:1px solid rgba(244,241,234,.12);font-size:14.5px;color:#D9D5CD">
                        <El as="span" css="width:5px;height:5px;background:#F04423;flex-shrink:0;transform:translateY(-3px)" />{x}
                      </El>
                    ))}
                  </El>
                </El>
              ))}
            </El>
          </El>

          {/* 03 Platforms */}
          <El as="section" css={`background:#F4F1EA;color:#08070A;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,4.6vw,64px)">
              <El>
                <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55;margin-bottom:16px`}>Platforms we implement</El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.4rem,5.8vw,6rem);line-height:.88;letter-spacing:-.065em;font-weight:500">Business platforms, <Em>done properly.</Em></El>
              </El>
              <El as="p" data-rv="1" css="margin:0;max-width:46ch;font-size:16.5px;line-height:1.55;color:#4A4741">We implement, customise and integrate these platforms for clients.</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));border-top:1px solid rgba(8,7,10,.2);border-left:1px solid rgba(8,7,10,.2)">
              {PLATFORMS.map(([t, domain, href]) => (
                <El as="a" key={t} href={href} data-rv="1" css="display:flex;flex-direction:column;gap:16px;min-height:170px;padding:clamp(20px,2.4vw,28px);border-right:1px solid rgba(8,7,10,.2);border-bottom:1px solid rgba(8,7,10,.2);color:#08070A;transition:background .3s" hover="background:#FFFFFF">
                  <El as="span" role="img" aria-label={`${t} logo`} css={`width:44px;height:44px;background:#FFFFFF center/28px no-repeat;background-image:url('${favicon(domain)}');border:1px solid rgba(8,7,10,.1)`} />
                  <El as="span" css="margin-top:auto;display:flex;justify-content:space-between;gap:10px;align-items:baseline">
                    <El as="span" css="font-size:clamp(1.15rem,1.7vw,1.4rem);font-weight:500;letter-spacing:-.035em">{t}</El>
                    <El as="span" css="color:#F04423">&#8594;</El>
                  </El>
                </El>
              ))}
            </El>
          </El>

          {/* 04 Proof */}
          <El as="section" css={`background:#08070A;color:#F4F1EA;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(14px,1.6vw,22px)">
              <El as="a" href="/testimonials" data-rv="1" css="grid-row:span 2;display:flex;flex-direction:column;justify-content:space-between;gap:24px;padding:clamp(28px,3.4vw,48px);background:#F04423;color:#08070A;min-height:420px">
                <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase`}>Client rating</El>
                <El as="span">
                  <El as="span" css="display:block;font-size:clamp(6rem,14vw,12rem);font-weight:500;letter-spacing:-.09em;line-height:.8">4.8</El>
                  <El as="span" css="display:block;margin-top:14px;font-size:clamp(1.2rem,1.8vw,1.5rem);font-weight:500;letter-spacing:-.03em">out of 5 on Google, from 138 reviews</El>
                </El>
                <El as="span" css="display:flex;align-items:center;gap:10px;font-size:15px;font-weight:500">Read the reviews <span>&#8594;</span></El>
              </El>
              {MILESTONES.map((m) => (
                <El key={m.k} data-rv="1" css="display:flex;justify-content:space-between;align-items:flex-end;gap:16px;padding:clamp(22px,2.6vw,34px);border:1px solid rgba(244,241,234,.16)">
                  <El as="span" css="font-size:clamp(2.6rem,5vw,4.4rem);font-weight:300;letter-spacing:-.07em;line-height:.85">{m.v}</El>
                  <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;text-align:right`}>{m.k}</El>
                </El>
              ))}
            </El>
          </El>

          {/* CTA */}
          <El as="section" css={`background:#F04423;color:#08070A;padding:clamp(80px,10vw,150px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(28px,4vw,72px);align-items:end">
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.6rem,6.6vw,7rem);line-height:.86;letter-spacing:-.07em;font-weight:500">Work with a team <Em>you can check.</Em></El>
              <El css="display:flex;flex-direction:column;gap:20px">
                <El as="p" data-rv="1" css="margin:0;max-width:42ch;font-size:clamp(16px,1.3vw,18px);line-height:1.5">Ask us for references in your industry on the first call.</El>
                <El data-rv="1" css="display:flex;flex-wrap:wrap;gap:10px">
                  <El as="a" href="/book-consultation" css="display:flex;align-items:center;gap:12px;background:#08070A;color:#F4F1EA;padding:18px 26px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap;transition:background .3s,color .3s" hover="background:#F4F1EA;color:#08070A">Book a free consultation <span>&#8594;</span></El>
                  <El as="a" href="/contact" css="display:flex;align-items:center;gap:12px;border:1px solid rgba(8,7,10,.45);color:#08070A;padding:18px 24px;border-radius:999px;font-size:15px;white-space:nowrap;transition:background .3s,color .3s" hover="background:#08070A;color:#F4F1EA">Contact us</El>
                </El>
              </El>
            </El>
          </El>

          <EstimateForm id="estimate" source="awards-certifications" subject="Enquiry from the certifications page" />

          <Footer />
        </El>
      </Shell>
    </>
  );
}

AwardsCertifications.bare = true;
