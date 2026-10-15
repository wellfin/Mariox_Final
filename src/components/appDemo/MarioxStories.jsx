// Client story animation ported from the "Mariox Client Stories" design
// (mariox-stories.jsx). Changes: engine imported instead of read off window,
// the Tweaks editor panel is dropped, and the story comes from a prop.
import React from 'react';
import { useComposition, CompositionStage, Easing, animate, Shot } from '@/lib/anim/animations-v3';

// Scene list and playback from the design file's helmet (16s total).
const SCENES = '[{"name":"Open","dur":1.5,"desc":"Orange square, Client story label and a large quote mark appear"},{"name":"Quote","dur":9,"desc":"The client quote reveals word by word with the key phrase in orange"},{"name":"Attribution","dur":3,"desc":"A rule draws and the client name, role and review source appear"},{"name":"Close","dur":2.5,"desc":"The quote dims, the Mariox lockup and URL appear, then fade to black"}]';
const PLAYBACK = '{"mode":"loop"}';


const W = 1080, H = 1350;
const BK = '#08070A', IV = '#F4F1EA', GR = '#9B968F';
const SANS = "Archivo, 'Helvetica Neue', Helvetica, sans-serif";
const MONO = "'JetBrains Mono', ui-monospace, monospace";

const MOTION = {
  enter: (s, e, a = 0, b = 1) => animate({ from: a, to: b, start: s, end: e, ease: Easing.easeOutExpo }),
  draw:  (s, e, a = 0, b = 1) => animate({ from: a, to: b, start: s, end: e, ease: Easing.easeInOutCubic }),
  pop:   (s, e, a = 0, b = 1) => animate({ from: a, to: b, start: s, end: e, ease: Easing.easeOutBack }),
};

// Verbatim from published reviews. Do not edit the wording.
const STORIES = [
  {
    quote: 'They brought our vision to life with a modern, user-friendly UI/UX design and delivered the mobile app exactly as we had imagined — on time and with top-notch quality.',
    key: ['exactly', 'as', 'we', 'had', 'imagined', 'on', 'time'],
    name: 'Sangeeta Chaudhary', role: 'Mobile app client', source: 'Google review · Aug 2025', stars: 5
  },
  {
    quote: 'Their honest, reliable, and hardworking team delivers a flawless product beyond expectations.',
    key: ['flawless', 'product', 'beyond', 'expectations.'],
    name: 'Akhil Malhotra', role: 'Client', source: 'marioxsoftware.com', stars: 0
  },
  {
    quote: '…he displayed clear understanding of the project, deliverables which made me initiate project with Mariox Software. I really appreciate him and his team.',
    key: ['clear', 'understanding', 'of', 'the', 'project,'],
    name: 'Startup founder', role: 'On working with Rachit Anand', source: 'Trustpilot review', stars: 0
  }
];

function pickStory(n) {
  const i = parseInt(n, 10) || 1;
  return Math.min(Math.max(i, 1), STORIES.length);
}

function Label({ children, style }) {
  return <div style={{ fontFamily: MONO, fontSize: 24, letterSpacing: '.2em', textTransform: 'uppercase', color: GR, ...style }}>{children}</div>;
}

function Quote({ T, CUES, s, OR }) {
  const words = s.quote.split(' ');
  const size = s.quote.length > 140 ? 64 : s.quote.length > 100 ? 72 : 88;
  const start = CUES.Quote + 0.3;
  const span = 4.6;
  const per = span / words.length;
  const push = 1 + 0.03 * MOTION.draw(CUES.Quote, CUES.Close)(T);
  const dim = 1 - 0.75 * MOTION.draw(CUES.Close, CUES.Close + 0.6)(T);
  const up = MOTION.draw(CUES.Close, CUES.Close + 0.8)(T) * -80;
  return (
    <div style={{ position: 'absolute', left: 90, right: 90, top: 300, transform: `translateY(${up}px) scale(${push})`, transformOrigin: 'left top', opacity: dim }}>
      <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: size, lineHeight: 1.12, letterSpacing: '-.03em', color: IV, display: 'flex', flexWrap: 'wrap', columnGap: '0.26em' }}>
        {words.map((w, i) => {
          const at = start + i * per;
          const p = MOTION.enter(at, at + 0.7)(T);
          const hot = s.key.includes(w.replace(/[“”"]/g, ''));
          return (
            <span key={i} style={{ display: 'inline-block', opacity: p, transform: `translateY(${(1 - p) * 30}px)`, color: hot ? OR : IV }}>{w}</span>
          );
        })}
      </div>
    </div>
  );
}

function Attribution({ T, CUES, s, OR }) {
  const a = CUES.Attribution;
  const line = MOTION.draw(a, a + 0.8)(T);
  const n = MOTION.enter(a + 0.2, a + 0.9)(T);
  const r = MOTION.enter(a + 0.45, a + 1.1)(T);
  const out = MOTION.draw(CUES.Close + 0.2, CUES.Close + 0.8)(T);
  return (
    <div style={{ position: 'absolute', left: 90, right: 90, bottom: 250, opacity: 1 - out }}>
      <div style={{ height: 2, width: `${line * 100}%`, background: 'rgba(244,241,234,.3)', marginBottom: 36 }} />
      <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 56, letterSpacing: '-.035em', color: IV, opacity: n, transform: `translateY(${(1 - n) * 20}px)` }}>{s.name}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, marginTop: 18, opacity: r }}>
        <Label style={{ color: IV }}>{s.role}</Label>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {Array.from({ length: s.stars }).map((_, i) => {
            const p = MOTION.pop(a + 0.6 + i * 0.08, a + 1.0 + i * 0.08)(T);
            return <span key={i} style={{ display: 'inline-block', width: 20, height: 20, background: OR, transform: `scale(${p}) rotate(45deg)` }} />;
          })}
        </div>
      </div>
      <Label style={{ marginTop: 14, opacity: r }}>{s.source}</Label>
    </div>
  );
}

function Frame({ T, CUES, idx, OR }) {
  const born = MOTION.pop(0.15, 0.8)(T);
  const lbl = MOTION.enter(0.4, 1.1)(T);
  const mark = MOTION.pop(0.5, 1.2)(T);
  const markFade = 1 - MOTION.draw(CUES.Quote + 0.1, CUES.Quote + 0.9)(T);
  const end = MOTION.draw(CUES.Close + 1.9, CUES.Close + 2.5)(T);
  return (
    <>
      <div style={{ position: 'absolute', left: 90, top: 96, width: 30, height: 30, background: OR, transform: `scale(${born * (1 - end)})` }} />
      <Label style={{ position: 'absolute', left: 142, top: 96, lineHeight: '30px', opacity: lbl * (1 - end) }}>Client story {String(idx).padStart(2, '0')}</Label>
      <Label style={{ position: 'absolute', right: 90, top: 96, lineHeight: '30px', opacity: lbl * (1 - end), color: IV }}>Mariox</Label>
      <div style={{ position: 'absolute', left: 74, top: 130, fontFamily: SANS, fontWeight: 800, fontSize: 300, lineHeight: 1, color: OR, transform: `scale(${mark})`, transformOrigin: 'left top', opacity: markFade }}>“</div>
    </>
  );
}

function Close({ T, CUES, OR }) {
  const c = CUES.Close;
  const p = MOTION.enter(c + 0.4, c + 1.1)(T);
  const end = MOTION.draw(c + 1.9, c + 2.5)(T);
  return (
    <Shot from={c} to={c + 3}>
      <div style={{ position: 'absolute', left: 90, right: 90, bottom: 250, opacity: p * (1 - end), transform: `translateY(${(1 - p) * 30}px)` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div style={{ width: 54, height: 54, background: OR }} />
          <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 72, letterSpacing: '-.04em', color: IV, lineHeight: 1 }}>MARIOX <span style={{ fontWeight: 400, opacity: .5 }}>SOFTWARE</span></div>
        </div>
        <Label style={{ marginTop: 30, color: IV }}>marioxsoftware.com</Label>
      </div>
    </Shot>
  );
}

function Story({ story, accent }) {
  const { T, CUES } = useComposition();
  const OR = accent || '#F04423';
  const idx = pickStory(story);
  const s = STORIES[idx - 1];
  return (
    <div data-screen-label={`story ${idx} · t=${Math.floor(T)}s`} style={{ position: 'absolute', inset: 0, background: BK, overflow: 'hidden' }}>
      <Frame T={T} CUES={CUES} idx={idx} OR={OR} />
      <Quote T={T} CUES={CUES} s={s} OR={OR} />
      <Attribution T={T} CUES={CUES} s={s} OR={OR} />
      <Close T={T} CUES={CUES} OR={OR} />
    </div>
  );
}

// story: 1 | 2 | 3 (matches the published reviews below)
export default function MarioxStories({ story = 1, accent = '#F04423', chrome = false }) {
  return (
    <CompositionStage width={W} height={H} scenes={SCENES} playback={PLAYBACK} bg={BK} chrome={chrome}>
      <Story story={story} accent={accent} />
    </CompositionStage>
  );
}

export { STORIES };
