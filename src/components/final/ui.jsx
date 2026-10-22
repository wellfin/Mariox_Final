import React, { useState } from 'react';
import El from '../El';

// Shared pieces of the "final-website" design language: mono labels, the serif
// italic fragment, the client marquee and the FAQ accordion.

export const MONO = "font-family:'Geist Mono',monospace";
export const SERIF = "font-family:'Instrument Serif',serif";
export const PAD = 'clamp(18px,4vw,64px)';
export const ORANGE = '#F04423';
export const LABEL = `${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85`;
export const LABEL_DARK = `${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55`;
export const LEAD = 'margin:0;max-width:44ch;font-size:16.5px;line-height:1.55;color:#B7B2AA';

export const MARQUEE_CLIENTS = ['Airwallex', 'Zeller', 'Kogan', 'HotDoc', 'Graphy', 'MILKRUN', 'Snitch', 'Fynd', 'Testbook', 'Skydo', 'Lunar', 'StockGro'];

export function Em({ children, color }) {
  return <El as="em" css={`${SERIF};font-weight:400;letter-spacing:-.03em${color ? ';color:' + color : ''}`}>{children}</El>;
}

// Section heading block: mono eyebrow + display headline + optional lead copy.
export function Head({ eyebrow, title, lead, light = false, gap = 'clamp(36px,4.6vw,64px)', size = 'clamp(2.4rem,5.6vw,5.6rem)' }) {
  return (
    <El css={`display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:${gap}`}>
      <El>
        {eyebrow ? <El data-rv="1" css={`${light ? LABEL_DARK : LABEL};margin-bottom:16px`}>{eyebrow}</El> : null}
        <El as="h2" data-rv="1" css={`margin:0;font-size:${size};line-height:.9;letter-spacing:-.06em;font-weight:500`}>{title}</El>
      </El>
      {lead ? <El as="p" data-rv="1" css={light ? 'margin:0;max-width:44ch;font-size:16.5px;line-height:1.55;color:#4A4741' : LEAD}>{lead}</El> : null}
    </El>
  );
}

export function Marquee({ items = MARQUEE_CLIENTS, seconds = 50, border = 'bottom' }) {
  return (
    <El as="section" aria-label="Clients" css={`padding:clamp(30px,3.4vw,48px) 0;overflow:hidden;border-${border}:1px solid rgba(244,241,234,.1)`}>
      <El css={`display:flex;width:max-content;animation:mxMarquee ${seconds}s linear infinite`}>
        {[0, 1].map((loop) => (
          <El key={loop} aria-hidden={loop === 1 ? 'true' : undefined} css="display:flex;align-items:center">
            {items.map((c) => (
              <El as="span" key={c} css="display:flex;align-items:center;gap:clamp(24px,3vw,48px);padding-right:clamp(24px,3vw,48px);font-size:clamp(1.3rem,2.4vw,2.2rem);font-weight:500;letter-spacing:-.05em;color:#8E8A85;white-space:nowrap">
                {c}<El as="span" css="width:6px;height:6px;background:#F04423" />
              </El>
            ))}
          </El>
        ))}
      </El>
    </El>
  );
}

export const OWNERSHIP_FAQ = [
  { q: 'Who owns the code?', a: 'You do, from the first commit. Repositories, cloud and store accounts sit in your name.' },
  { q: 'Do you sign an NDA?', a: 'Yes, before the first detailed conversation.' },
  { q: 'Where is the team based?', a: 'Our 100+ in-house team works from offices in Noida and Bangalore, with client teams in Dallas and Australia.' },
];

export function Faq({ items, title, first = 0 }) {
  const [open, setOpen] = useState(first);
  return (
    <El as="section" css={`padding:0 ${PAD} clamp(90px,11vw,170px)`}>
      <El css="display:flex;flex-wrap:wrap;gap:clamp(28px,4vw,72px);align-items:flex-start;padding-top:clamp(60px,7vw,100px);border-top:1px solid rgba(244,241,234,.14)">
        <El as="h2" data-rv="1" css="flex:1 1 280px;margin:0;font-size:clamp(2.2rem,4.6vw,4.4rem);line-height:.9;letter-spacing:-.06em;font-weight:500">{title}</El>
        <El css="flex:2 1 460px;min-width:min(100%,300px);border-top:1px solid rgba(244,241,234,.16)">
          {items.map((q, i) => {
            const on = open === i;
            return (
              <El key={q.q} css="border-bottom:1px solid rgba(244,241,234,.16)">
                <El as="button" type="button" onClick={() => setOpen(on ? -1 : i)} aria-expanded={on} css="width:100%;background:transparent;border:0;color:#F4F1EA;cursor:pointer;display:flex;justify-content:space-between;gap:20px;align-items:baseline;padding:clamp(18px,2vw,24px) 0;text-align:left;font-family:Geist,sans-serif;font-size:clamp(1.1rem,1.7vw,1.45rem);font-weight:500;letter-spacing:-.035em">
                  {q.q}<El as="span" css={`${MONO};font-size:18px;color:#F04423`}>{on ? '−' : '+'}</El>
                </El>
                {on ? <El as="p" css="margin:0 0 22px;max-width:60ch;font-size:16px;line-height:1.6;color:#B7B2AA">{q.a}</El> : null}
              </El>
            );
          })}
        </El>
      </El>
    </El>
  );
}

// Closing call to action used at the end of most pages.
export function CtaBand({ title, href = '#estimate', label = 'Get a free estimate' }) {
  return (
    <El as="section" css={`padding:clamp(100px,12vw,190px) ${PAD};text-align:center`}>
      <El as="h2" data-rv="1" css="margin:0 auto;max-width:14ch;font-size:clamp(3rem,8.4vw,9rem);line-height:.84;letter-spacing:-.075em;font-weight:500">{title}</El>
      <El data-rv="1" css="display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-top:clamp(28px,3.4vw,44px)">
        <El as="a" href={href} css="display:flex;align-items:center;gap:14px;background:#F04423;color:#08070A;padding:20px 28px;border-radius:999px;font-size:16px;font-weight:500;white-space:nowrap">{label} <span>&#8594;</span></El>
        <El as="a" href="tel:+919599287045" css="display:flex;align-items:center;gap:14px;border:1px solid rgba(244,241,234,.3);padding:20px 28px;border-radius:999px;font-size:16px;white-space:nowrap">+91 95992 87045</El>
      </El>
    </El>
  );
}

// Grid of numbered cards (ways to engage, models, …).
export function Models({ models }) {
  return (
    <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:clamp(12px,1.4vw,20px)">
      {models.map((m) => (
        <El key={m.n} data-rv="1" css={`border:1px solid ${m.border || 'rgba(244,241,234,.16)'};background:${m.bg || 'transparent'};padding:clamp(24px,2.8vw,40px);min-height:300px;display:flex;flex-direction:column;gap:14px`}>
          <El css={`display:flex;justify-content:space-between;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase`}>
            <El as="span" css="color:#F04423">{m.n}</El><El as="span" css="color:#8E8A85">{m.tag}</El>
          </El>
          <El as="h3" css="margin:auto 0 0;font-size:clamp(1.7rem,2.6vw,2.4rem);line-height:.95;letter-spacing:-.055em;font-weight:500">{m.t}</El>
          <El as="p" css="margin:0;font-size:15px;line-height:1.5;color:#B7B2AA">{m.b}</El>
        </El>
      ))}
    </El>
  );
}

export const WHY_MARIOX = [
  { n: '01', t: 'In-house since 2016', b: 'A decade of shipping with one team, not a network of freelancers.' },
  { n: '02', t: 'Senior from week one', b: 'The people who scope your project are the people who build it.' },
  { n: '03', t: '300+ products shipped', b: 'For Airwallex, Zeller, Kogan, HotDoc, Graphy and hundreds more.' },
  { n: '04', t: 'You own everything', b: 'Code, cloud accounts and documentation in your name from day one.' },
  { n: '05', t: '4 offices, your time zone', b: 'Noida, Bangalore, Dallas and Australia, with agreed overlap hours.' },
];

export function WhyBand({ items = WHY_MARIOX, title }) {
  return (
    <El as="section" css={`background:#F04423;color:#08070A;padding:clamp(90px,11vw,160px) ${PAD}`}>
      <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(36px,5vw,90px);align-items:start">
        <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.6rem,6.4vw,6.6rem);line-height:.86;letter-spacing:-.07em;font-weight:500">{title}</El>
        <El css="border-top:1px solid rgba(8,7,10,.3)">
          {items.map((w) => (
            <El key={w.n} data-rv="1" css="display:grid;grid-template-columns:52px 1fr;gap:16px;padding:clamp(18px,2.2vw,24px) 0;border-bottom:1px solid rgba(8,7,10,.3)">
              <El as="span" css={`${MONO};font-size:12px;letter-spacing:.12em`}>{w.n}</El>
              <El>
                <El css="font-size:clamp(1.25rem,1.9vw,1.65rem);font-weight:500;letter-spacing:-.045em">{w.t}</El>
                <El as="p" css="margin:6px 0 0;max-width:46ch;font-size:15px;line-height:1.5">{w.b}</El>
              </El>
            </El>
          ))}
        </El>
      </El>
    </El>
  );
}

// Every page in the design sits inside this root: the dark ground, the ivory
// text colour and the Geist stack. Bare pages skip the site Layout, so the
// shell has to set them.
export function Shell({ children, ...rest }) {
  return (
    <El css="position:relative;background:#08070A;color:#F4F1EA;font-family:Geist,'Helvetica Neue',Helvetica,sans-serif;overflow-x:clip" {...rest}>
      {children}
    </El>
  );
}
