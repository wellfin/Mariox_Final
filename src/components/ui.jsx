import React, { useState } from 'react';
import Link from 'next/link';
import El from './El';
import { setStage } from '@/lib/fx';
import { CONTACT, tech as techData } from '@/data/site';

// Shared blocks from the Mariox Software Site design. Style strings are copied
// verbatim from the design file so the rendered result matches it exactly.

export const MONO = "font-family:'JetBrains Mono',monospace";
const PAD_X = 'clamp(18px,4vw,60px)';
const BORDER_TOP = 'border-top:1px solid rgba(244,241,234,.1)';

const isInternal = (href) => typeof href === 'string' && href.startsWith('/');

// Anchor that uses next/link for internal routes.
export function A({ href, ...rest }) {
  if (isInternal(href)) return <El as={Link} href={href} {...rest} />;
  const ext = typeof href === 'string' && /^https?:/.test(href);
  return <El as="a" href={href} {...(ext ? { target: '_blank', rel: 'noopener' } : {})} {...rest} />;
}

export function Eyebrow({ children, pulse, mb = 'clamp(20px,2.8vw,38px)', fade = true }) {
  return (
    <El data-fade={fade ? '1' : undefined} css={`display:flex;align-items:center;gap:12px;margin-bottom:${mb}`}>
      <El as="span" css={`width:7px;height:7px;background:#F04423${pulse ? ';animation:mxPulse 2.2s ease-in-out infinite' : ''}`} />
      <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.24em;text-transform:uppercase;color:#8E8A85`}>{children}</El>
    </El>
  );
}

export function Lines({ lines, accentFrom, pb = '.04em', as = 'h1', css }) {
  return (
    <El as={as} css={css}>
      {lines.map((l, i) => (
        <El as="span" key={i} css={`display:block;overflow:hidden;padding-bottom:${pb}`}>
          <El as="span" data-line="1" css={`display:block${i >= accentFrom ? ';color:#F04423' : ''}`}>{l}</El>
        </El>
      ))}
    </El>
  );
}

export function BackLink({ href, children, mb = 'clamp(22px,3vw,40px)' }) {
  return (
    <A href={href} data-cursor="1" data-fade="1" css={`display:inline-flex;align-items:center;gap:10px;${MONO};font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;color:#8E8A85;margin-bottom:${mb}`}>
      <span>&#8592;</span> {children}
    </A>
  );
}

// Page header: eyebrow, two-line H1 (second line in accent), lead paragraph.
export function PageHero({ eyebrow, a, b, sub, back, pad = 'clamp(48px,8vw,130px)', eyebrowMb, children, h1Size = 'clamp(2.5rem,8.5vw,8rem)' }) {
  return (
    <El as="section" css={`padding:${pad} ${PAD_X} clamp(30px,4vw,56px)`}>
      {back}
      <Eyebrow mb={eyebrowMb}>{eyebrow}</Eyebrow>
      <Lines
        lines={[a, b].filter(Boolean)}
        accentFrom={1}
        css={`margin:0;max-width:20ch;font-size:${h1Size};line-height:.85;letter-spacing:-.05em;font-weight:800;text-transform:uppercase`}
      />
      {sub ? (
        <El as="p" data-fade="1" css="margin:clamp(26px,3.4vw,48px) 0 0;max-width:52ch;font-size:clamp(16px,1.35vw,20px);line-height:1.5;color:#B7B2AA">{sub}</El>
      ) : null}
      {children}
    </El>
  );
}

export function StartButton({ href = '/contact', children = 'Start a project', arrow = '↗', light }) {
  return (
    <A
      href={href}
      data-cursor="start"
      css={light
        ? `display:flex;align-items:center;gap:14px;background:#F4F1EA;color:#08070A;padding:19px 26px;${MONO};font-size:11.5px;font-weight:500;letter-spacing:.16em;text-transform:uppercase;transition:background .35s,color .35s`
        : `display:flex;align-items:center;gap:14px;background:#F04423;color:#08070A;padding:21px 30px;${MONO};font-size:11.5px;font-weight:500;letter-spacing:.16em;text-transform:uppercase;transition:background .35s`}
      hover={light ? 'background:#F04423;color:#08070A' : 'background:#F4F1EA'}
    >
      {children} <span>{arrow}</span>
    </A>
  );
}

export function GhostButton({ href, children, onClick, small }) {
  return (
    <A
      href={href}
      onClick={onClick}
      data-cursor="1"
      css={`display:flex;align-items:center;gap:14px;border:1px solid rgba(244,241,234,.3);padding:${small ? '19px 26px' : '21px 30px'};${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;transition:border-color .35s,color .35s`}
      hover="border-color:#F04423;color:#F04423"
    >
      {children}
    </A>
  );
}

// Closing call-to-action block used at the end of every page.
export function CtaSection({ a, b, secondary, cta = true, children }) {
  return (
    <El as="section" data-cta={cta ? '1' : undefined} css={`padding:clamp(70px,11vw,190px) ${PAD_X};${BORDER_TOP};text-align:center`}>
      <Lines lines={[a, b]} accentFrom={1} as="h2" pb=".05em" css="margin:0 auto;max-width:16ch;font-size:clamp(2.2rem,8vw,7.5rem);line-height:.88;letter-spacing:-.048em;font-weight:800;text-transform:uppercase" />
      <El data-fade="1" css="display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin-top:clamp(32px,4vw,64px)">
        <StartButton />
        {secondary || <GhostButton href={CONTACT.tel}>Talk to our team</GhostButton>}
      </El>
      {children}
    </El>
  );
}

export function SectionTitle({ children, mb = 'clamp(26px,3.4vw,52px)', size = 'clamp(1.9rem,5.4vw,4.4rem)', fade = true }) {
  return (
    <El as="h2" data-fade={fade ? '1' : undefined} css={`margin:0 0 ${mb};font-size:${size};line-height:.92;letter-spacing:-.04em;font-weight:800;text-transform:uppercase`}>
      {children}
    </El>
  );
}

export function AccentLink({ href, children }) {
  return (
    <A href={href} data-cursor="1" css={`${MONO};font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:#F04423;border-bottom:1px solid #F04423;padding-bottom:4px`}>
      {children}
    </A>
  );
}

export function SectionHead({ title, href, link, mb = 'clamp(32px,4.5vw,70px)' }) {
  return (
    <El data-fade="1" css={`display:flex;flex-wrap:wrap;gap:20px;align-items:flex-end;justify-content:space-between;margin-bottom:${mb}`}>
      <El as="h2" css="margin:0;font-size:clamp(1.9rem,5.4vw,4.6rem);line-height:.92;letter-spacing:-.04em;font-weight:800;text-transform:uppercase">{title}</El>
      {href ? <AccentLink href={href}>{link}</AccentLink> : null}
    </El>
  );
}

export function Section({ children, css = '', top = true, pad = 'clamp(44px,7vw,110px)', ...rest }) {
  return (
    <El as="section" css={`padding:${pad} ${PAD_X}${top ? ';' + BORDER_TOP : ''}${css ? ';' + css : ''}`} {...rest}>
      {children}
    </El>
  );
}

// Numbered row links (services list on home and /services).
export function ServiceRows({ items }) {
  return (
    <El css="border-top:1px solid rgba(244,241,234,.14)">
      {items.map((s) => (
        <A
          key={s.href + s.n}
          href={s.href}
          data-row="1"
          data-cursor="view"
          onMouseEnter={() => setStage(s.stage || 0)}
          css="color:#F4F1EA;position:relative;display:grid;grid-template-columns:auto minmax(0,1fr);gap:clamp(16px,3vw,48px);align-items:center;padding:clamp(20px,2.6vw,34px) clamp(6px,1.6vw,24px);border-bottom:1px solid rgba(244,241,234,.14);transition:background .45s cubic-bezier(.2,.8,.2,1),padding-left .45s cubic-bezier(.2,.8,.2,1),color .45s"
          hover="background:#F04423;color:#08070A;padding-left:clamp(18px,3.4vw,56px)"
        >
          <El as="span" css={`${MONO};font-size:11.5px;opacity:.5`}>{s.n}</El>
          <El css="display:flex;flex-wrap:wrap;gap:10px 28px;align-items:baseline;justify-content:space-between">
            <El as="span" css="font-size:clamp(1.2rem,3.4vw,2.9rem);font-weight:700;letter-spacing:-.035em;line-height:1.02;text-transform:uppercase">{s.name}</El>
            <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;opacity:.62;max-width:34ch`}>{s.tag}</El>
          </El>
        </A>
      ))}
    </El>
  );
}

// Numbered non-link rows with title + body (includes, builds, roles).
export function InfoRows({ items, mono }) {
  return (
    <El css="border-top:1px solid rgba(244,241,234,.14)">
      {items.map((i, k) => (
        <El
          key={k}
          data-row="1"
          css="display:grid;grid-template-columns:auto minmax(0,1fr);gap:clamp(14px,3vw,44px);align-items:baseline;padding:clamp(16px,2.2vw,28px) clamp(6px,1.6vw,22px);border-bottom:1px solid rgba(244,241,234,.14);transition:background .4s,padding-left .4s,color .4s"
          hover="background:#F04423;color:#08070A;padding-left:clamp(16px,3vw,48px)"
        >
          <El as="span" css={`${MONO};font-size:11px;opacity:.45`}>{i.n}</El>
          <El css="display:flex;flex-wrap:wrap;gap:6px 24px;align-items:baseline;justify-content:space-between">
            <El as="span" css="font-size:clamp(1.05rem,2.4vw,1.95rem);font-weight:700;letter-spacing:-.032em;line-height:1.06;text-transform:uppercase">{i.title}</El>
            {mono ? (
              <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;opacity:.6;max-width:44ch`}>{i.body}</El>
            ) : (
              <El as="span" css="font-size:14.5px;line-height:1.5;opacity:.72;max-width:52ch">{i.body}</El>
            )}
          </El>
        </El>
      ))}
    </El>
  );
}

// Numbered cards with a top rule (deliverables, challenges).
export function RuleCards({ items, min = '250px', gap = 'clamp(22px,3vw,52px)' }) {
  return (
    <El css={`display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,${min}),1fr));gap:${gap}`}>
      {items.map((d, k) => (
        <El key={k} data-fade="1" css="border-top:1px solid rgba(244,241,234,.22);padding-top:clamp(16px,2vw,24px)">
          <El css={`${MONO};font-size:10.5px;letter-spacing:.18em;color:#F04423;margin-bottom:14px`}>{d.n}</El>
          <El css="font-size:clamp(1.1rem,1.9vw,1.5rem);font-weight:700;letter-spacing:-.03em;line-height:1.12">{d.title}</El>
          {d.body ? <El as="p" css="margin:11px 0 0;font-size:14.5px;line-height:1.55;color:#B7B2AA">{d.body}</El> : null}
          {d.children}
        </El>
      ))}
    </El>
  );
}

export function Chips({ items, fade = true }) {
  return (
    <El data-fade={fade ? '1' : undefined} css="display:flex;flex-wrap:wrap;gap:9px">
      {items.map((t) => (
        <El as="span" key={t} css="font-size:clamp(13.5px,1.1vw,16px);border:1px solid rgba(244,241,234,.2);padding:10px 14px;color:#F4F1EA;transition:border-color .3s,color .3s" hover="border-color:#F04423;color:#F04423">
          {t}
        </El>
      ))}
    </El>
  );
}

export function Lead({ children, fade = true, css = '' }) {
  return (
    <El as="p" data-fade={fade ? '1' : undefined} css={`margin:0;font-size:clamp(15.5px,1.25vw,18px);line-height:1.6;color:#B7B2AA${css ? ';' + css : ''}`}>
      {children}
    </El>
  );
}

export function TwoParas({ a, b, fade = true }) {
  return (
    <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:clamp(24px,4vw,80px);max-width:1100px">
      <Lead fade={fade}>{a}</Lead>
      <Lead fade={fade}>{b}</Lead>
    </El>
  );
}

export function StatsGrid({ items }) {
  return (
    <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:clamp(28px,4vw,64px)">
      {items.map((s) => (
        <El key={s.label} data-fade="1" css="border-top:1px solid rgba(244,241,234,.22);padding-top:clamp(18px,2.2vw,28px)">
          <El data-count={s.value} data-suffix={s.suffix} css="font-size:clamp(3rem,7.5vw,7rem);line-height:.86;font-weight:800;letter-spacing:-.055em">{s.display}</El>
          <El css={`margin-top:clamp(14px,1.6vw,22px);${MONO};font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;color:#8E8A85`}>{s.label}</El>
        </El>
      ))}
    </El>
  );
}

// Hover-fill tiles in a hairline grid (pillars, AI layer, hire models).
export function TileGrid({ items, cols = 'repeat(2,minmax(0,1fr))', minH = '270px', render }) {
  return (
    <El css={`display:grid;grid-template-columns:${cols};gap:1px;background:rgba(244,241,234,.14);border:1px solid rgba(244,241,234,.14)`}>
      {items.map((p, k) => (
        <El key={k} data-fade="1" css={`background:rgba(8,7,10,.82);padding:clamp(24px,3vw,44px);display:flex;flex-direction:column;gap:16px;min-height:${minH};transition:background .4s,color .4s`} hover="background:#F04423;color:#08070A">
          {render ? render(p) : (
            <>
              <El as="span" css={`${MONO};font-size:10px;letter-spacing:.2em;text-transform:uppercase;opacity:.55`}>{p.n}</El>
              <El as="span" css="margin-top:auto;font-size:clamp(1.4rem,2.6vw,2.2rem);font-weight:800;letter-spacing:-.035em;line-height:1;text-transform:uppercase">{p.title}</El>
              <El as="p" css="margin:0;font-size:14.5px;line-height:1.55;opacity:.78">{p.body}</El>
            </>
          )}
        </El>
      ))}
    </El>
  );
}

// Vertical timeline with scroll-driven progress line.
export function StepList({ items, compact }) {
  return (
    <El css="position:relative">
      <El css="position:absolute;top:0;bottom:0;left:clamp(4px,1vw,14px);width:1px;background:rgba(244,241,234,.14)" />
      <El data-progress-line="1" css="position:absolute;top:0;left:clamp(4px,1vw,14px);width:1px;height:0%;background:#F04423" />
      {items.map((p) => (
        <El
          key={p.n}
          data-fade="1"
          css={compact
            ? 'display:grid;grid-template-columns:auto minmax(0,1fr);gap:clamp(20px,4vw,72px);align-items:start;padding:clamp(22px,3.4vw,52px) 0 clamp(22px,3.4vw,52px) clamp(26px,4vw,60px);border-bottom:1px solid rgba(244,241,234,.1)'
            : 'display:grid;grid-template-columns:auto minmax(0,1fr);gap:clamp(20px,4vw,72px);align-items:start;padding:clamp(26px,4vw,64px) 0 clamp(26px,4vw,64px) clamp(26px,4vw,60px);border-bottom:1px solid rgba(244,241,234,.1)'}
        >
          <El css={compact
            ? 'font-size:clamp(2.2rem,6vw,5.5rem);line-height:.82;font-weight:800;letter-spacing:-.06em;color:rgba(244,241,234,.14)'
            : 'font-size:clamp(2.6rem,7vw,6.5rem);line-height:.82;font-weight:800;letter-spacing:-.06em;color:rgba(244,241,234,.14)'}>{p.n}</El>
          <El css={compact ? 'padding-top:clamp(4px,1vw,12px)' : 'padding-top:clamp(4px,1vw,14px)'}>
            <El css={compact
              ? 'font-size:clamp(1.3rem,3vw,2.4rem);font-weight:800;letter-spacing:-.04em;line-height:1;text-transform:uppercase'
              : 'font-size:clamp(1.4rem,3.4vw,2.8rem);font-weight:800;letter-spacing:-.04em;line-height:1;text-transform:uppercase'}>{p.title}</El>
            <El as="p" css={`margin:${compact ? '13px' : '14px'} 0 0;font-size:clamp(14.5px,1.2vw,17px);line-height:1.55;color:#B7B2AA;max-width:52ch`}>{p.body}</El>
          </El>
        </El>
      ))}
    </El>
  );
}

// Category picker + chip cloud (Technology).
export function TechExplorer({ minH = '200px' }) {
  const [active, setActive] = useState('Frontend');
  return (
    <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:clamp(24px,4vw,72px);align-items:start">
      <El css="display:flex;flex-direction:column">
        {Object.keys(techData).map((label) => {
          const on = active === label;
          return (
            <El
              key={label}
              role="button"
              tabIndex={0}
              onClick={() => setActive(label)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(label); } }}
              data-cursor="1"
              css={`cursor:pointer;display:flex;align-items:baseline;justify-content:space-between;gap:20px;padding:clamp(13px,1.5vw,19px) 0;border-bottom:1px solid rgba(244,241,234,.14);color:${on ? '#F04423' : '#F4F1EA'};transition:color .3s`}
            >
              <El as="span" css="font-size:clamp(1.05rem,2vw,1.65rem);font-weight:700;letter-spacing:-.03em;text-transform:uppercase">{label}</El>
              <El as="span" css={`${MONO};font-size:10px;letter-spacing:.16em;opacity:${on ? 1 : 0.45}`}>{String(techData[label].length).padStart(2, '0')}</El>
            </El>
          );
        })}
      </El>
      <El css={`display:flex;flex-wrap:wrap;gap:9px;align-content:flex-start;min-height:${minH}`}>
        {techData[active].map((t) => (
          <El as="span" key={t} css="font-size:clamp(14px,1.15vw,16.5px);border:1px solid rgba(244,241,234,.2);padding:11px 15px;color:#F4F1EA;transition:border-color .3s,color .3s" hover="border-color:#F04423;color:#F04423">{t}</El>
        ))}
      </El>
    </El>
  );
}

const IMG_BOX = 'overflow:hidden;aspect-ratio:16/10;background:#111013;background-image:repeating-linear-gradient(135deg,rgba(244,241,234,.06) 0 2px,transparent 2px 11px)';
const hideImg = (e) => { if (e && e.target) e.target.style.display = 'none'; };

export function CardImage({ src, alt, scale = '1.07' }) {
  return (
    <El css={IMG_BOX}>
      {src ? (
        <El as="img" src={src} alt={alt} loading="lazy" onError={hideImg} css="width:100%;height:100%;object-fit:cover;display:block;transition:transform .9s cubic-bezier(.2,.8,.2,1);filter:saturate(.85)" hover={`transform:scale(${scale})`} />
      ) : null}
    </El>
  );
}

export function StackTags({ items, mt = '2px' }) {
  if (!items || !items.length) return null;
  return (
    <El css={`display:flex;flex-wrap:wrap;gap:7px;margin-top:${mt}`}>
      {items.map((t) => (
        <El as="span" key={t} css={`${MONO};font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;border:1px solid rgba(244,241,234,.2);padding:6px 9px;color:#B7B2AA`}>{t}</El>
      ))}
    </El>
  );
}

// Horizontal-track card (home "Selected work").
export function TrackCard({ w }) {
  return (
    <A href={w.url} data-cursor="view" css="display:flex;flex-direction:column;width:clamp(280px,42vw,620px);border:1px solid rgba(244,241,234,.14);background:rgba(8,7,10,.7);transition:border-color .4s" hover="border-color:#F04423">
      <CardImage src={w.img} alt={w.name} />
      <El css="padding:clamp(20px,2.4vw,36px);display:flex;flex-direction:column;gap:14px;border-top:1px solid rgba(244,241,234,.14)">
        <El css={`display:flex;justify-content:space-between;${MONO};font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#8E8A85`}><span>Project {w.n}</span><El as="span" css="color:#F04423">{w.sector}</El></El>
        <El css="font-size:clamp(1.35rem,2.6vw,2.3rem);font-weight:700;letter-spacing:-.035em;line-height:1.02;text-transform:uppercase">{w.name}</El>
        <El as="p" css="margin:0;font-size:14.5px;line-height:1.55;color:#B7B2AA;max-width:46ch">{w.body}</El>
        <StackTags items={w.stack} />
      </El>
    </A>
  );
}

// Wide split card (Work page).
export function WorkRow({ w }) {
  return (
    <A href={w.url} data-fade="1" data-cursor="view" css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:1px;background:rgba(244,241,234,.14);border:1px solid rgba(244,241,234,.14);color:#F4F1EA;transition:border-color .4s" hover="border-color:#F04423">
      <CardImage src={w.img} alt={w.name} scale="1.06" />
      <El css="background:#08070A;padding:clamp(24px,3.4vw,56px);display:flex;flex-direction:column;justify-content:center;gap:16px">
        <El css={`display:flex;justify-content:space-between;gap:16px;${MONO};font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#8E8A85`}><span>Project {w.n}</span><El as="span" css="color:#F04423;text-align:right">{w.sector}</El></El>
        <El css="font-size:clamp(1.5rem,3.4vw,2.9rem);font-weight:800;letter-spacing:-.04em;line-height:1;text-transform:uppercase">{w.name}</El>
        {w.body ? <El as="p" css="margin:0;font-size:15px;line-height:1.55;color:#B7B2AA;max-width:48ch">{w.body}</El> : null}
        <StackTags items={w.stack} mt="4px" />
      </El>
    </A>
  );
}

// Compact case card (industry "Shipped work", related work).
export function CaseCard({ c, label = 'Case study' }) {
  return (
    <A href={c.url} data-fade="1" data-cursor="view" css="display:flex;flex-direction:column;border:1px solid rgba(244,241,234,.14);background:rgba(8,7,10,.7);color:#F4F1EA;transition:border-color .4s" hover="border-color:#F04423">
      <CardImage src={c.img} alt={c.name} />
      <El css="padding:clamp(18px,2.2vw,30px);display:flex;flex-direction:column;gap:11px;border-top:1px solid rgba(244,241,234,.14)">
        <El css={`display:flex;justify-content:space-between;${MONO};font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#8E8A85`}><span>{label}</span><El as="span" css="color:#F04423">View &#8599;</El></El>
        <El css="font-size:clamp(1.2rem,2.2vw,1.8rem);font-weight:700;letter-spacing:-.035em;line-height:1.04;text-transform:uppercase">{c.name}</El>
        {c.body ? <El as="p" css="margin:0;font-size:14px;line-height:1.55;color:#B7B2AA">{c.body}</El> : null}
      </El>
    </A>
  );
}

export function CardGrid({ children, min = '290px' }) {
  return (
    <El css={`display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,${min}),1fr));gap:clamp(16px,2vw,28px)`}>
      {children}
    </El>
  );
}
