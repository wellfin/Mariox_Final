import React from 'react';
import El from '@/components/El';
import { PageHero, Section } from '@/components/ui';
import { Seo } from '@/components/sections';
import { termsHtml } from '@/data/terms';

export default function TermsAndConditions() {
  return (
    <>
      <Seo title="Terms & Conditions — Mariox Software" description="Website terms of use for marioxsoftware.com." />
      <PageHero eyebrow={<>Legal &nbsp;/&nbsp; Website terms of use</>} a="Terms &" b="conditions." />
      <Section>
        <El data-fade="1" className="mx-prose" dangerouslySetInnerHTML={{ __html: termsHtml }} />
      </Section>
    </>
  );
}
