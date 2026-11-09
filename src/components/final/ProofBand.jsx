import React from 'react';
import El from '../El';
import { MONO, PAD, Em } from './ui';

// The design's shared `Mariox Proof Band`: office photos in a mosaic, the
// numbers under them and the client list. Several pages drop it in with their
// own heading, so only the copy is a prop.

const PHOTOS = [
  ['/assets/company/team-office-wide.jpg', 'The Mariox team in Noida', 'Noida HQ', '1 / span 7', '1 / span 2', 'center 40%'],
  ['/assets/company/office-meeting-room.jpg', 'Client workshop in our meeting room', 'Client workshops', '8 / span 5', '1 / span 1', 'center'],
  ['/assets/company/team-office-seated.jpg', 'Engineers at work', 'Engineering floor', '8 / span 5', '2 / span 1', 'center 35%'],
  ['/assets/company/team-group-2026.jpg', 'Mariox team 2026', '100+ in-house', '1 / span 4', '3 / span 1', 'center 30%'],
  ['/assets/company/office-workspace.jpg', 'Mariox workspace', 'Bengaluru', '5 / span 4', '3 / span 1', 'center'],
  ['/assets/company/team-offsite-group.jpg', 'Team offsite', 'Team culture', '9 / span 4', '3 / span 1', 'center 30%'],
];

const STATS = [
  { v: '2016', l: 'Founded' },
  { v: '100+', l: 'In-house team' },
  { v: '300+', l: 'Products shipped' },
  { v: '4', l: 'Offices' },
  { v: '4.8★', l: '138 Google reviews' },
];

const CLIENTS = ['Airwallex', 'Zeller', 'Kogan', 'HotDoc', 'Graphy', 'MILKRUN', 'Snitch', 'Fynd', 'Testbook', 'Skydo'];

export default function ProofBand({
  eyebrow = 'Mariox in numbers',
  title = 'A real team,',
  titleEm = 'in real offices.',
  body = 'Since 2016, 100+ in-house engineers, designers and product people have shipped software from Noida, Bengaluru, Dallas and Australia.',
}) {
  return (
    <El as="section" css={`background:#08070A;color:#F4F1EA;padding:clamp(56px,7vw,110px) ${PAD}`}>
      <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(28px,3.4vw,48px)">
        <El>
          <El css={`display:flex;align-items:center;gap:12px;${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:16px`}>
            <El as="span" css="width:7px;height:7px;background:#F04423" />{eyebrow}
          </El>
          <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.2rem,5vw,4.8rem);line-height:.9;letter-spacing:-.06em;font-weight:500;text-wrap:balance">
            {title} <Em color="#F04423">{titleEm}</Em>
          </El>
        </El>
        <El as="p" data-rv="1" css="margin:0;max-width:46ch;font-size:clamp(15.5px,1.25vw,17.5px);line-height:1.55;color:#B7B2AA">{body}</El>
      </El>

      <El css="display:grid;grid-template-columns:repeat(12,minmax(0,1fr));grid-auto-rows:clamp(120px,14vw,220px);gap:clamp(6px,.8vw,12px)">
        {PHOTOS.map(([src, alt, cap, col, row, pos]) => (
          <El as="figure" key={src + col} css={`margin:0;position:relative;overflow:hidden;background:#141216;grid-column:${col};grid-row:${row}`}>
            <El role="img" aria-label={alt} css={`position:absolute;inset:0;background-size:cover;background-position:${pos};background-image:url('${src}');transition:transform 1.2s cubic-bezier(.2,.8,.2,1)`} hover="transform:scale(1.05)" />
            <El as="figcaption" css={`position:absolute;left:0;bottom:0;right:0;padding:28px 14px 12px;background:linear-gradient(0deg,rgba(8,7,10,.85),rgba(8,7,10,0));${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#F4F1EA`}>{cap}</El>
          </El>
        ))}
      </El>

      <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));border-top:1px solid rgba(244,241,234,.16);margin-top:clamp(28px,3.4vw,48px)">
        {STATS.map((s) => (
          <El key={s.l} css="padding:20px clamp(0px,1.4vw,20px) 4px 0;display:flex;flex-direction:column;gap:8px">
            <El as="span" css="font-size:clamp(2.4rem,4.6vw,4.2rem);font-weight:300;letter-spacing:-.07em;line-height:.9">{s.v}</El>
            <El as="span" css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>{s.l}</El>
          </El>
        ))}
      </El>

      <El css="display:flex;flex-wrap:wrap;align-items:baseline;gap:10px 26px;margin-top:clamp(28px,3vw,40px);padding-top:20px;border-top:1px solid rgba(244,241,234,.12)">
        <El as="span" css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>Trusted by</El>
        {CLIENTS.map((c) => (
          <El as="span" key={c} css="font-size:clamp(15px,1.3vw,18px);font-weight:500;letter-spacing:-.025em;color:#D9D5CD">{c}</El>
        ))}
      </El>
    </El>
  );
}
