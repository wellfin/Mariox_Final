import React from 'react';
import El from '@/components/El';
import { MONO, Section, Lines } from '@/components/ui';
import { Seo, ContactBlock } from '@/components/sections';

export default function Contact() {
  return (
    <>
      <Seo title="Contact — request a quote — Mariox Software" description="Tell us what you are building. We reply within one business day." />
      <El as="section" css="padding:clamp(44px,7vw,110px) clamp(18px,4vw,60px) clamp(26px,3.4vw,48px)">
        <El data-fade="1" css="display:flex;align-items:baseline;gap:clamp(14px,2.4vw,32px);padding-bottom:clamp(14px,1.8vw,22px);border-bottom:1px solid rgba(244,241,234,.22)">
          <El as="span" css="width:9px;height:9px;background:#F04423;align-self:center" />
          <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.26em;text-transform:uppercase;color:#8E8A85`}>Contact</El>
          <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.26em;text-transform:uppercase;color:#F4F1EA;margin-left:auto;text-align:right`}>Reply within one business day</El>
        </El>
        <Lines
          lines={['Get in touch', 'with Mariox today.']}
          accentFrom={1}
          pb=".045em"
          css="margin:clamp(28px,4vw,64px) 0 0;max-width:15ch;font-size:clamp(2.6rem,9.5vw,9rem);line-height:.83;letter-spacing:-.052em;font-weight:800;text-transform:uppercase"
        />
        <El as="p" data-fade="1" css="margin:clamp(26px,3.4vw,50px) 0 0;max-width:48ch;font-size:clamp(16px,1.35vw,20px);line-height:1.5;color:#B7B2AA">Tell us what you are building and what you need help with. We will come back with an honest read on scope, sequence and cost.</El>
      </El>
      <ContactBlock title="" top={false} />
    </>
  );
}
