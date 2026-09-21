import React from 'react';
import { PageHero, CtaSection, GhostButton } from '@/components/ui';
import { Seo } from '@/components/sections';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found — Mariox Software" noindex />
      <PageHero eyebrow={<>404 &nbsp;/&nbsp; Page not found</>} a="Nothing" b="shipped here." sub="The page you are looking for has moved or never existed. The work, services and industries are all one click away." />
      <CtaSection a="Start from" b="the beginning." cta={false} secondary={<GhostButton href="/">Back to home</GhostButton>} />
    </>
  );
}
