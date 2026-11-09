import React, { useEffect, useRef, useState } from 'react';

// The design's `proposal-film.js`: a 20-second concept film built out of DOM,
// not video. Five scenes of four seconds each — the finding, three module
// sketches and the closing line — with a scrub bar under them.

const D = 4;
const N = 5;
const T = D * N;
const MONO = "'Geist Mono',monospace";

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const ease = (t) => 1 - (1 - clamp(t, 0, 1)) ** 3;

function Dash({ t, c }) {
  const bars = [0.42, 0.66, 0.5, 0.82, 0.7, 0.92, 0.78];
  const a = ease(t * 3);
  return (
    <div style={{ position: 'absolute', inset: '14% 10%', background: '#121116', border: '1px solid rgba(244,241,234,.12)', display: 'grid', gridTemplateColumns: '18% 1fr', opacity: a, transform: `translateY(${(1 - a) * 30}px)` }}>
      <div style={{ borderRight: '1px solid rgba(244,241,234,.1)', padding: '8%', display: 'flex', flexDirection: 'column', gap: '10%' }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} style={{ height: 8, borderRadius: 4, background: i === 1 ? c : 'rgba(244,241,234,.14)', width: `${60 + i * 7}%` }} />
        ))}
      </div>
      <div style={{ padding: '5%', display: 'grid', gridTemplateRows: 'auto 1fr', gap: '6%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '4%' }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ border: '1px solid rgba(244,241,234,.12)', padding: '8% 10%' }}>
              <div style={{ height: 6, width: '50%', background: 'rgba(244,241,234,.2)', borderRadius: 3 }} />
              <div style={{ marginTop: 10, fontSize: 'clamp(12px,2.2vw,26px)', fontWeight: 500, letterSpacing: '-.04em', color: i === 0 ? c : '#F4F1EA' }}>
                {Math.round(ease(t * 2 - i * 0.15) * [128, 64, 92][i]) + (i === 2 ? '%' : 'k')}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3%', borderBottom: '1px solid rgba(244,241,234,.14)' }}>
          {bars.map((b, i) => (
            <div key={b} style={{ flex: 1, height: `${ease(t * 2.2 - i * 0.08) * b * 100}%`, background: i === 5 ? c : 'rgba(244,241,234,.22)' }} />
          ))}
        </div>
      </div>
    </div>
  );
}

const MSGS = [
  ['in', 'Hi! What are you looking for today?'],
  ['out', 'Something for a 10-day trip'],
  ['in', 'Here are three options that fit…'],
  ['out', 'The second one, please'],
];

function Phone({ t, c, name }) {
  const a = ease(t * 3);
  return (
    <div style={{ position: 'absolute', top: '8%', bottom: '8%', left: '50%', width: '26%', transform: `translateX(-50%) translateY(${(1 - a) * 40}px)`, opacity: a, background: '#121116', borderRadius: 22, border: '1px solid rgba(244,241,234,.16)', padding: '4% 3%', display: 'flex', flexDirection: 'column', gap: '4%' }}>
      <div style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '.14em', textTransform: 'uppercase', color: '#8E8A85', textAlign: 'center', paddingBottom: '4%', borderBottom: '1px solid rgba(244,241,234,.1)' }}>{name}</div>
      {MSGS.map((m, i) => {
        const o = ease((t - 0.15 - i * 0.17) * 5);
        return (
          <div key={m[1]} style={{ alignSelf: m[0] === 'out' ? 'flex-end' : 'flex-start', maxWidth: '82%', padding: '6px 9px', borderRadius: 10, fontSize: 'clamp(8px,1vw,12px)', lineHeight: 1.3, background: m[0] === 'out' ? c : 'rgba(244,241,234,.1)', color: m[0] === 'out' ? '#08070A' : '#F4F1EA', opacity: o, transform: `translateY(${(1 - o) * 10}px)` }}>
            {m[1]}
          </div>
        );
      })}
    </div>
  );
}

const LIT = [3, 7, 12, 18, 24, 26, 31, 38, 43, 47];

function Grid({ t, c }) {
  return (
    <div style={{ position: 'absolute', inset: '16% 12%', display: 'grid', gridTemplateColumns: 'repeat(10,1fr)', gridTemplateRows: 'repeat(5,1fr)', gap: '1.4%' }}>
      {Array.from({ length: 50 }).map((_, i) => {
        const a = ease(t * 1.6 - (i % 10) * 0.04 - Math.floor(i / 10) * 0.06);
        return <div key={i} style={{ background: LIT.includes(i) ? c : 'rgba(244,241,234,.1)', opacity: a, transform: `scale(${0.6 + 0.4 * a})` }} />;
      })}
    </div>
  );
}

export default function ProposalFilm({ slug = 'x', name = '', brand = '#F04423', film = [], shot = '' }) {
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(true);
  const last = useRef(null);

  // Where the viewer left this film last time. Read after mount so the server
  // and the first client render agree.
  useEffect(() => {
    try {
      const v = parseFloat(window.localStorage.getItem(`mx-film-${slug}`));
      if (Number.isFinite(v)) setTime(v % T);
    } catch (e) { /* private window, blocked storage — start at zero */ }
  }, [slug]);

  useEffect(() => {
    let raf;
    const tick = (now) => {
      if (last.current != null && playing) {
        setTime((x) => {
          const n = (x + (now - last.current) / 1000) % T;
          try { window.localStorage.setItem(`mx-film-${slug}`, n.toFixed(2)); } catch (e) { /* ignore */ }
          return n;
        });
      }
      last.current = now;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); last.current = null; };
  }, [playing, slug]);

  const tt = Number.isFinite(time) ? clamp(time, 0, T - 0.001) : 0;
  const s = Math.min(N - 1, Math.max(0, Math.floor(tt / D)));
  const lt = (tt - s * D) / D;
  const fade = Math.min(ease(lt * 6), ease((1 - lt) * 6));

  const label = (txt, sub) => (
    <div style={{ position: 'absolute', left: '6%', bottom: '9%', right: '6%', opacity: fade, transform: `translateY(${(1 - ease(lt * 4)) * 16}px)` }}>
      {sub ? <div style={{ fontFamily: MONO, fontSize: 'clamp(9px,1vw,12px)', letterSpacing: '.16em', textTransform: 'uppercase', color: brand, marginBottom: 10 }}>{sub}</div> : null}
      <div style={{ fontSize: 'clamp(20px,4.2vw,56px)', fontWeight: 500, letterSpacing: '-.05em', lineHeight: 0.95, color: '#F4F1EA' }}>{txt}</div>
    </div>
  );

  let scene;
  if (s === 0) {
    scene = (
      <div style={{ position: 'absolute', inset: 0 }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: shot ? `url("${shot}")` : 'none', backgroundSize: 'cover', backgroundPosition: 'top center', transform: `scale(${1.04 + lt * 0.08})`, opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(8,7,10,.95) 10%,rgba(8,7,10,.35) 70%)' }} />
        <div style={{ position: 'absolute', top: '8%', left: '6%', fontFamily: MONO, fontSize: 'clamp(9px,1vw,12px)', letterSpacing: '.16em', textTransform: 'uppercase', color: '#F4F1EA', opacity: fade }}>{`Mariox × ${name}`}</div>
        {label(film[0], 'What we found')}
      </div>
    );
  } else if (s === 4) {
    scene = (
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', textAlign: 'center' }}>
        <div style={{ opacity: fade, transform: `scale(${0.96 + ease(lt * 3) * 0.04})` }}>
          <div style={{ fontSize: 'clamp(22px,4.8vw,64px)', fontWeight: 500, letterSpacing: '-.05em', lineHeight: 0.95 }}>
            {film[4]}<span style={{ color: '#F04423' }}>.</span>
          </div>
          <div style={{ marginTop: 18, fontFamily: MONO, fontSize: 'clamp(9px,1vw,12px)', letterSpacing: '.16em', textTransform: 'uppercase', color: '#8E8A85' }}>A proposal from Mariox Software</div>
        </div>
      </div>
    );
  } else {
    const M = [Dash, Phone, Grid][s - 1] || Dash;
    scene = (
      <div style={{ position: 'absolute', inset: 0 }}>
        <M t={lt} c={brand} name={name} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(8,7,10,.92) 4%,rgba(8,7,10,0) 45%)' }} />
        {label(film[s], `Module 0${s}`)}
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#08070A', overflow: 'hidden', color: '#F4F1EA', fontFamily: "Geist,'Helvetica Neue',sans-serif", border: '1px solid rgba(244,241,234,.1)' }}>
      {scene}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', gap: 12, padding: '0 14px 12px' }}>
        <button type="button" onClick={() => setPlaying((p) => !p)} aria-label={playing ? 'Pause' : 'Play'} style={{ width: 30, height: 30, border: '1px solid rgba(244,241,234,.3)', background: 'rgba(8,7,10,.6)', color: '#F4F1EA', cursor: 'pointer', fontSize: 11, flex: 'none' }}>
          {playing ? '❚❚' : '▶'}
        </button>
        <div
          role="slider"
          tabIndex={0}
          aria-label="Scrub the concept film"
          aria-valuemin={0}
          aria-valuemax={T}
          aria-valuenow={Math.floor(tt)}
          onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); setTime(clamp((e.clientX - r.left) / r.width, 0, 0.999) * T); }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') setTime((x) => (x + 1) % T);
            if (e.key === 'ArrowLeft') setTime((x) => (x - 1 + T) % T);
          }}
          style={{ flex: 1, height: 14, display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        >
          <div style={{ position: 'relative', width: '100%', height: 2, background: 'rgba(244,241,234,.2)' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${(tt / T) * 100}%`, background: '#F04423' }} />
          </div>
        </div>
        <span style={{ fontFamily: MONO, fontSize: 10, color: '#B7B2AA', flex: 'none' }}>
          {`0:${String(Math.floor(tt)).padStart(2, '0')} / 0:${T}`}
        </span>
      </div>
    </div>
  );
}
