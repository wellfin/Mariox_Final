import React, { useState } from 'react';
import El from '@/components/El';
import { Seo, JsonLd } from '@/components/sections';
import Nav from '@/components/final/Nav';
import Footer from '@/components/final/Footer';
import ProofBand from '@/components/final/ProofBand';
import EstimateForm from '@/components/final/EstimateForm';
import { MONO, PAD, Em, Shell } from '@/components/final/ui';
import { useReveal } from '@/components/final/fx';
import { SITE_URL } from '@/data/site';

// Security & compliance page from the design's `security`: the six commitments,
// the standards we build products against, what happens at every stage of a
// project, and the security questions clients ask before signing.

const COMMITMENTS = [
  { n: '01', t: 'NDA first', b: 'We sign your NDA, or send ours, before you share anything detailed.', tags: ['Mutual NDA', 'Team confidentiality'] },
  { n: '02', t: 'You own the IP', b: 'Custom code, designs and documentation transfer to you on payment, as set out in your contract.', tags: ['Code', 'Designs', 'Accounts'] },
  { n: '03', t: 'Least-privilege access', b: 'Named accounts with multi-factor authentication, only for the people who need them, removed the day they leave the project.', tags: ['MFA', 'Access reviews'] },
  { n: '04', t: 'Secure development', b: 'Code review on every change, dependency scanning, secrets kept out of repositories and checks against the OWASP Top 10.', tags: ['Code review', 'OWASP', 'SAST'] },
  { n: '05', t: 'Careful data handling', b: 'Production data stays in your cloud. We test with anonymised data and encrypt data in transit and at rest.', tags: ['Encryption', 'Anonymised test data'] },
  { n: '06', t: 'No single point of failure', b: 'Backups, documented runbooks and shared knowledge, so your product never depends on one person.', tags: ['Backups', 'Runbooks'] },
];

const COMPLIANCE = [
  { t: 'GDPR', k: 'EU & UK privacy', b: 'Consent, data minimisation, right to erasure and data processing records.' },
  { t: 'DPDP Act', k: 'India, 2023', b: 'Consent notices, purpose limits and grievance handling for Indian users.' },
  { t: 'HIPAA', k: 'US healthcare', b: 'Access logging, encryption and audit trails for patient data.' },
  { t: 'PCI DSS', k: 'Payments', b: 'Tokenised payments and scope reduction so card data never touches your servers.' },
  { t: 'SOC 2', k: 'SaaS readiness', b: 'Logging, change management and access controls auditors look for.' },
  { t: 'ISO 27001', k: 'Information security', b: 'Controls and documentation aligned with the standard for your product.' },
];

const LIFECYCLE = [
  { t: 'Kick-off', x: ['NDA and access plan agreed', 'Repositories and cloud in your accounts', 'Security requirements written down'] },
  { t: 'Build', x: ['Code review on every change', 'Automated dependency and code scanning', 'Secrets in a vault, never in code'] },
  { t: 'Before launch', x: ['Vulnerability scan and fixes', 'Penetration test coordination', 'Load and failover testing'] },
  { t: 'Live', x: ['Monitoring and alerting', 'Patching on an agreed schedule', 'Incident response plan'] },
  { t: 'Handover', x: ['Full documentation', 'Credentials rotated', 'Our access removed'] },
];

const FAQ = [
  ['Will you sign our NDA?', 'Yes. Send it over and we will sign before your first detailed call.'],
  ['Where is the code stored?', 'In your own GitHub, GitLab or Bitbucket organisation from day one, or in a private repository we transfer to you.'],
  ['Can you work inside our cloud and tools?', 'Yes. Most clients give us scoped access to their AWS, Azure or Google Cloud accounts and their own Jira and Slack.'],
  ['Do you use our data to train AI models?', 'No. Your data is only used to build and run your product. AI features use providers and settings that do not train on your data.'],
];

export default function Security() {
  const [faqOpen, setFaqOpen] = useState(0);
  useReveal([faqOpen]);

  return (
    <>
      <Seo
        title="Security & Compliance — NDA, IP Ownership, Data Protection | Mariox Software"
        description="How Mariox Software protects your idea, code and data: NDA first, full IP ownership, least-privilege access, secure development, and products built for GDPR, HIPAA, PCI DSS and SOC 2."
        canonical={`${SITE_URL}/security`}
      />
      <JsonLd id="security-faq" data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }} />

      <Shell>
        <Nav active="security" ctaHref="/book-consultation" ctaLabel="Book a call" />
        <El as="main">
          {/* 01 Hero */}
          <El as="section" css={`position:relative;padding:clamp(140px,14vw,200px) ${PAD} clamp(56px,7vw,110px);overflow:hidden;isolation:isolate`}>
            <El aria-hidden="true" css="position:absolute;inset:-4% 0;z-index:-2;background:#08070A url('/assets/ai/ai-control-room.jpg') center/cover no-repeat" />
            <El aria-hidden="true" css="position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(8,7,10,.95) 0%,rgba(8,7,10,.82) 42%,rgba(8,7,10,.4) 100%),linear-gradient(0deg,#08070A 0%,rgba(8,7,10,0) 40%)" />
            <El>
              <El css={`display:flex;align-items:center;gap:12px;${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#B7B2AA`}>
                <El as="span" css="width:7px;height:7px;background:#F04423" />Security &amp; compliance
              </El>
              <El as="h1" css="margin:clamp(18px,2.4vw,28px) 0 0;font-size:clamp(3rem,8.2vw,8.6rem);line-height:.86;letter-spacing:-.07em;font-weight:500;max-width:15ch">
                <El as="span" css="display:block">Your idea,</El>
                <El as="span" css="display:block">your code, <Em>your data.</Em></El>
              </El>
              <El as="p" css="margin:clamp(22px,2.8vw,34px) 0 0;max-width:52ch;font-size:clamp(16px,1.4vw,20px);line-height:1.5;color:#D9D5CD;text-wrap:pretty">How we protect what you share with us, from the first call to years after launch.</El>
              <El css="display:flex;flex-wrap:wrap;gap:12px;margin-top:clamp(28px,3.4vw,44px)">
                <El as="a" href="mailto:admin@marioxsoftware.com?subject=NDA%20request" css="display:flex;align-items:center;gap:14px;background:#F04423;color:#08070A;padding:18px 26px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap;transition:background .3s" hover="background:#F4F1EA;color:#08070A">Request our NDA <span>&#8594;</span></El>
                <El as="a" href="/book-consultation" css="display:flex;align-items:center;gap:14px;border:1px solid rgba(244,241,234,.35);padding:18px 24px;border-radius:999px;font-size:15px;white-space:nowrap;transition:border-color .3s" hover="border-color:#F4F1EA;color:#F4F1EA">Book a free consultation</El>
              </El>
            </El>
          </El>

          <ProofBand eyebrow="Where your project lives" title="Our offices," titleEm="our people, your data safe." />

          {/* 02 Commitments */}
          <El as="section" css={`background:#08070A;color:#F4F1EA;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="margin-bottom:clamp(36px,4.6vw,64px)">
              <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:16px`}>Our commitments</El>
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.4rem,5.8vw,6rem);line-height:.88;letter-spacing:-.065em;font-weight:500">Six things that <Em>are never optional.</Em></El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));border-top:1px solid rgba(244,241,234,.16);border-left:1px solid rgba(244,241,234,.16)">
              {COMMITMENTS.map((c) => (
                <El key={c.n} data-rv="1" css="display:flex;flex-direction:column;gap:14px;min-height:280px;padding:clamp(24px,2.8vw,38px);border-right:1px solid rgba(244,241,234,.16);border-bottom:1px solid rgba(244,241,234,.16)">
                  <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#F04423`}>{c.n}</El>
                  <El as="span" css="font-size:clamp(1.5rem,2.4vw,2.1rem);font-weight:500;letter-spacing:-.05em;line-height:1">{c.t}</El>
                  <El as="span" css="font-size:15.5px;line-height:1.55;color:#B7B2AA">{c.b}</El>
                  <El as="span" css="margin-top:auto;display:flex;flex-wrap:wrap;gap:6px">
                    {c.tags.map((g) => (
                      <El as="span" key={g} css="border:1px solid rgba(244,241,234,.22);border-radius:999px;padding:5px 11px;font-size:12.5px;color:#D9D5CD">{g}</El>
                    ))}
                  </El>
                </El>
              ))}
            </El>
          </El>

          {/* 03 Compliance */}
          <El as="section" css={`background:#F4F1EA;color:#08070A;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,4.6vw,64px)">
              <El>
                <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55;margin-bottom:16px`}>Regulated products</El>
                <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.4rem,5.8vw,6rem);line-height:.88;letter-spacing:-.065em;font-weight:500">Built for <Em>your auditor.</Em></El>
              </El>
              <El as="p" data-rv="1" css="margin:0;max-width:46ch;font-size:16.5px;line-height:1.55;color:#4A4741">We build products that must meet these standards. Your auditor certifies your product; we design the controls and hand over the evidence and documentation they ask for.</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:clamp(12px,1.4vw,18px)">
              {COMPLIANCE.map((c) => (
                <El key={c.t} data-rv="1" css="background:#FFFFFF;padding:clamp(22px,2.6vw,32px);display:flex;flex-direction:column;gap:10px;min-height:200px">
                  <El as="span" css="font-size:clamp(1.6rem,2.6vw,2.3rem);font-weight:500;letter-spacing:-.055em;line-height:.95">{c.t}</El>
                  <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:#C2361A`}>{c.k}</El>
                  <El as="span" css="margin-top:auto;font-size:15px;line-height:1.5;color:#4A4741">{c.b}</El>
                </El>
              ))}
            </El>
          </El>

          {/* 04 Lifecycle */}
          <El as="section" css={`background:#08070A;padding:clamp(90px,11vw,170px) ${PAD}`}>
            <El css="margin-bottom:clamp(36px,4.6vw,64px)">
              <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:16px`}>On every project</El>
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.4rem,5.8vw,6rem);line-height:.88;letter-spacing:-.065em;font-weight:500">Security at <Em>every stage.</Em></El>
            </El>
            <El css="position:relative;padding-left:clamp(28px,4vw,56px)">
              <El aria-hidden="true" css="position:absolute;left:clamp(6px,1vw,12px);top:0;bottom:0;width:1px;background:rgba(244,241,234,.16)" />
              <El aria-hidden="true" data-line="1" css="position:absolute;left:clamp(6px,1vw,12px);top:0;bottom:0;width:2px;margin-left:-.5px;background:#F04423;transform-origin:top" />
              {LIFECYCLE.map((l) => (
                <El key={l.t} data-rv="1" css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:12px clamp(20px,3vw,56px);padding:clamp(22px,2.6vw,34px) 0;border-bottom:1px solid rgba(244,241,234,.12)">
                  <El as="span" css="font-size:clamp(1.6rem,2.8vw,2.5rem);font-weight:500;letter-spacing:-.055em">{l.t}</El>
                  <El as="span" css="display:flex;flex-direction:column">
                    {l.x.map((x) => (
                      <El as="span" key={x} css="display:flex;gap:10px;align-items:baseline;padding:7px 0;font-size:15.5px;color:#D9D5CD">
                        <El as="span" css="width:5px;height:5px;background:#F04423;flex-shrink:0;transform:translateY(-3px)" />{x}
                      </El>
                    ))}
                  </El>
                </El>
              ))}
            </El>
          </El>

          {/* FAQ */}
          <El as="section" css={`background:#08070A;padding:clamp(90px,10vw,160px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(28px,4vw,72px);align-items:start">
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.2rem,4.6vw,4.4rem);line-height:.9;letter-spacing:-.06em;font-weight:500">Security <Em>questions.</Em></El>
              <El css="grid-column:span 2;min-width:min(100%,320px);border-top:1px solid rgba(244,241,234,.16)">
                {FAQ.map(([question, answer], i) => {
                  const on = faqOpen === i;
                  return (
                    <El key={question} css="border-bottom:1px solid rgba(244,241,234,.16)">
                      <El as="button" type="button" onClick={() => setFaqOpen(on ? -1 : i)} aria-expanded={on} css="width:100%;display:flex;justify-content:space-between;align-items:baseline;gap:16px;padding:22px 0;background:none;border:0;color:#F4F1EA;text-align:left;cursor:pointer;font-family:Geist,sans-serif;font-size:clamp(1.05rem,1.6vw,1.35rem);font-weight:500;letter-spacing:-.025em">
                        <span>{question}</span>
                        <El as="span" css={`color:#F04423;${MONO};font-size:18px`}>{on ? '−' : '+'}</El>
                      </El>
                      {on ? <El css="padding:0 0 24px;max-width:62ch;font-size:16px;line-height:1.6;color:#B7B2AA">{answer}</El> : null}
                    </El>
                  );
                })}
              </El>
            </El>
          </El>

          {/* CTA */}
          <El as="section" css={`background:#F04423;color:#08070A;padding:clamp(80px,10vw,150px) ${PAD}`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(28px,4vw,72px);align-items:end">
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.6rem,6.6vw,7rem);line-height:.86;letter-spacing:-.07em;font-weight:500">Share your idea, <Em>safely.</Em></El>
              <El css="display:flex;flex-direction:column;gap:20px">
                <El as="p" data-rv="1" css="margin:0;max-width:42ch;font-size:clamp(16px,1.3vw,18px);line-height:1.5">We sign your NDA before the first detailed conversation.</El>
                <El data-rv="1" css="display:flex;flex-wrap:wrap;gap:10px">
                  <El as="a" href="/book-consultation" css="display:flex;align-items:center;gap:12px;background:#08070A;color:#F4F1EA;padding:18px 26px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap;transition:background .3s,color .3s" hover="background:#F4F1EA;color:#08070A">Book a free consultation <span>&#8594;</span></El>
                  <El as="a" href="/contact" css="display:flex;align-items:center;gap:12px;border:1px solid rgba(8,7,10,.45);color:#08070A;padding:18px 24px;border-radius:999px;font-size:15px;white-space:nowrap;transition:background .3s,color .3s" hover="background:#08070A;color:#F4F1EA">Contact us</El>
                </El>
              </El>
            </El>
          </El>

          <EstimateForm id="estimate" source="security" subject="Security & compliance" />

          <Footer />
        </El>
      </Shell>
    </>
  );
}

Security.bare = true;
