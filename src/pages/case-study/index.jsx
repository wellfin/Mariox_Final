import React, { useMemo, useState } from 'react';
import El from '@/components/El';
import { MONO, PageHero, Section, WorkRow, CtaSection } from '@/components/ui';
import { Seo, Testimonials, FaqSection } from '@/components/sections';
import { getWorkList, workFilters } from '@/data/work';

export default function CaseStudyIndex({ work }) {
  const [filter, setFilter] = useState('all');
  const list = useMemo(() => work.filter((w) => filter === 'all' || w.tags.includes(filter)), [work, filter]);

  return (
    <>
      <Seo title="Work — case studies — Mariox Software" description="Shipped projects across fintech, edtech, commerce, quick commerce, healthcare and enterprise systems." />
      <PageHero
        eyebrow={<>Work &nbsp;/&nbsp; {work.length} case studies published</>}
        a="Products we"
        b="put into production."
        sub="The platforms we are able to talk about in detail. Every card opens the full case study."
      />

      <Section top={false} pad="0" css="padding-bottom:clamp(26px,3.4vw,48px)">
        <El data-fade="1" role="tablist" aria-label="Filter case studies" css="display:flex;flex-wrap:wrap;gap:8px">
          {workFilters.map(({ label, value }) => {
            const on = filter === value;
            const count = value === 'all' ? work.length : work.filter((w) => w.tags.includes(value)).length;
            return (
              <El
                as="button"
                type="button"
                role="tab"
                aria-selected={on}
                key={value}
                onClick={() => setFilter(value)}
                data-cursor="1"
                css={`cursor:pointer;display:flex;align-items:center;gap:10px;${MONO};font-size:10px;letter-spacing:.14em;text-transform:uppercase;border:1px solid ${on ? '#F04423' : 'rgba(244,241,234,.22)'};background:${on ? '#F04423' : 'transparent'};color:${on ? '#08070A' : '#B7B2AA'};padding:9px 12px;transition:all .25s`}
              >
                {label}
                <El as="span" css="opacity:.6">{String(count).padStart(2, '0')}</El>
              </El>
            );
          })}
        </El>
      </Section>

      <Section top={false} pad="0" css="padding-bottom:clamp(56px,8vw,130px);display:grid;gap:clamp(16px,2vw,28px)">
        {list.map((w) => <WorkRow key={w.slug} w={w} />)}
      </Section>

      <Testimonials />
      <FaqSection />
      <CtaSection a="Have an idea" b="worth building?" cta={false} />
    </>
  );
}

export async function getStaticProps() {
  return { props: { work: getWorkList() } };
}
