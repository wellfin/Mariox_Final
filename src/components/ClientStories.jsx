import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import El from './El';
import { isolateScroll } from '@/lib/fx';
import { stories } from '@/data/saasLanding';

// "In our clients' words" from the landing designs: a 4:5 frame with a play
// button and the clip length, then the quote and attribution.
// The frames stay empty until the real client videos are added — put a YouTube,
// Vimeo or direct .mp4 URL on a story's `video` field in src/data/saasLanding.js
// and it plays here.

const MONO = "font-family:'JetBrains Mono',monospace";
const PAD_X = 'clamp(16px,4vw,56px)';

// YouTube / Vimeo links become embeds; anything else is used as-is.
function embed(url) {
  if (!url) return '';
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{6,})/);
  if (yt) return 'https://www.youtube.com/embed/' + yt[1] + '?autoplay=1&rel=0';
  const vm = url.match(/vimeo\.com\/(\d+)/);
  if (vm) return 'https://player.vimeo.com/video/' + vm[1] + '?autoplay=1';
  return url;
}

const isFile = (url) => /\.(mp4|webm|mov)(\?|$)/i.test(url || '');

function VideoModal({ open, story, onClose }) {
  const boxRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => (open && mounted ? isolateScroll(boxRef.current) : undefined), [open, mounted]);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open || !mounted || !story) return null;
  const src = embed(story.video);
  return createPortal(
    <El
      ref={boxRef}
      role="dialog"
      aria-modal="true"
      aria-label={story.name + ' testimonial'}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      css="position:fixed;inset:0;z-index:9995;background:rgba(8,7,10,.94);display:flex;align-items:center;justify-content:center;padding:clamp(16px,4vw,56px);font-family:Archivo,'Helvetica Neue',Helvetica,sans-serif;color:#F4F1EA"
    >
      <El css="width:min(100%,1100px);display:flex;flex-direction:column;gap:14px">
        <El css="display:flex;justify-content:space-between;align-items:center">
          <El as="span" css={`${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9B968F`}>{story.name} &#183; {story.role}</El>
          <El as="button" type="button" onClick={onClose} data-cursor="1" css={`cursor:pointer;background:transparent;border:0;${MONO};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#F4F1EA`}>Close &#215;</El>
        </El>
        {src ? (
          isFile(src) ? (
            <El as="video" src={src} controls autoPlay playsInline css="width:100%;aspect-ratio:16/9;background:#000;border:0" />
          ) : (
            <El as="iframe" src={src} title={story.name + ' testimonial'} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen css="width:100%;aspect-ratio:16/9;border:0;background:#000" />
          )
        ) : (
          <El css={`aspect-ratio:16/9;border:1px dashed rgba(244,241,234,.3);display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;${MONO};font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#9B968F;line-height:1.7`}>
            Video not added yet
          </El>
        )}
      </El>
    </El>,
    document.body
  );
}

export default function ClientStories() {
  const [open, setOpen] = useState(null);

  return (
    <El as="section" id="stories" css={`padding:clamp(64px,9vw,150px) ${PAD_X}`}>
      <El css="display:flex;flex-wrap:wrap;gap:20px;align-items:flex-end;justify-content:space-between;margin-bottom:clamp(28px,4vw,56px)">
        <El as="h2" css="margin:0;max-width:18ch;font-size:clamp(2rem,4.6vw,3.8rem);line-height:.95;letter-spacing:-.045em;font-weight:800">In our clients&#8217; words.</El>
        <El as="span" css={`${MONO};font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#9B968F`}>Published reviews &#183; Google, Trustpilot</El>
      </El>

      <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:clamp(16px,2vw,28px)">
        {stories.map((t, i) => (
          <El key={t.name} data-fade="1" css="display:flex;flex-direction:column">
            <El css="position:relative;aspect-ratio:4/5;border:1px solid rgba(244,241,234,.14);background:#111013;overflow:hidden">
              <El
                as="button"
                type="button"
                aria-label={'Play ' + t.name + ' testimonial'}
                onClick={() => setOpen(i)}
                data-cursor="1"
                css="position:absolute;left:16px;bottom:16px;width:56px;height:56px;border:0;background:#F04423;color:#08070A;display:flex;align-items:center;justify-content:center;font-size:17px;cursor:pointer;transition:transform .3s"
                hover="transform:scale(1.08)"
              >
                &#9654;
              </El>
              <El as="span" css={`position:absolute;right:14px;bottom:16px;${MONO};font-size:11px;letter-spacing:.12em;color:#F4F1EA;background:#08070A;padding:6px 9px`}>{t.length || '0:16'}</El>
            </El>
            <El as="p" css="margin:clamp(18px,2vw,24px) 0 0;font-size:clamp(1.05rem,1.5vw,1.25rem);line-height:1.4;letter-spacing:-.015em;font-weight:500;text-wrap:pretty">&#8220;{t.quote}&#8221;</El>
            <El css="margin-top:16px;padding-top:14px;border-top:1px solid rgba(244,241,234,.14);display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap">
              <El as="span" css="font-size:14.5px;font-weight:700">{t.name}</El>
              <El as="span" css={`${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#9B968F`}>{t.role}</El>
            </El>
          </El>
        ))}
      </El>

      <VideoModal open={open !== null} story={open !== null ? stories[open] : null} onClose={() => setOpen(null)} />
    </El>
  );
}
