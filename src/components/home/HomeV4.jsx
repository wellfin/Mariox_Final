import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import El from '../El';
import HomeLeadForm from './HomeLeadForm';
import {
  chapters, navLinks, clients, words, stats, stack, caseRows, filterNames,
  pillars, services, ai, aiStack, techTabs, industries, steps, engage, trust, faq, footerCols,
} from '@/data/homeV4';

// "Mariox Home v4" design: its own header, chapter rail, loader, cursor,
// instanced-cube canvas and pinned sections. Motion logic is ported from the
// design's component; GSAP, Lenis and three.js load in the browser only.

const MONO = "font-family:'Geist Mono',monospace";
const SERIF = "font-family:'Instrument Serif',serif";
const PAD_X = 'clamp(18px,4vw,64px)';
const H2 = 'margin:0;font-size:clamp(2.6rem,6.4vw,6.6rem);line-height:.88;letter-spacing:-.06em;font-weight:500';
const CHAPTER = `${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:16px`;
const LEAD = 'margin:0;max-width:42ch;font-size:16.5px;line-height:1.55;color:#B7B2AA';

// Italic serif fragment inside a heading.
const Em = ({ children }) => <El as="em" css={`${SERIF};font-weight:400;letter-spacing:-.03em`}>{children}</El>;

export default function HomeV4() {
  const root = useRef(null);
  const loader = useRef(null);
  const loaderSq = useRef(null);
  const loaderNum = useRef(null);
  const canvas = useRef(null);
  const cur = useRef(null);
  const curLabel = useRef(null);
  const follow = useRef(null);
  const rail = useRef(null);
  const nav = useRef(null);
  const statement = useRef(null);
  const processRef = useRef(null);
  const ptrackWrap = useRef(null);
  const ptrack = useRef(null);
  const pbar = useRef(null);
  const cta = useRef(null);

  // Shared mutable state the animation frames read.
  const fx = useRef({ x: 0, y: 0, nx: 0, ny: 0, cx: -200, cy: -200, rx: -200, ry: -200, fxp: -400, fyp: -400, label: null, ctaBoost: 0, assemble: 0, loaderGone: false });

  const [narrow, setNarrow] = useState(false);
  const [railOn, setRailOn] = useState(false);
  const [menu, setMenu] = useState(false);
  const [svc, setSvc] = useState(0);
  const [filter, setFilter] = useState('All');
  const [tech, setTech] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const activeService = services[svc] || services[0];
  const rows = caseRows.filter((c) => filter === 'All' || c.group === filter);

  // Image that follows the cursor on work rows and service pillars.
  const showFollow = useCallback((img) => () => {
    const f = follow.current;
    if (!f) return;
    if (!img || window.matchMedia('(pointer: coarse)').matches) { f.style.opacity = 0; return; }
    f.style.backgroundImage = 'url(' + img + ')';
    f.style.opacity = 1;
  }, []);

  useEffect(() => {
    const mqNarrow = window.matchMedia('(max-width: 860px)');
    const mqRail = window.matchMedia('(min-width: 1200px)');
    const onMq = () => { setNarrow(mqNarrow.matches); setRailOn(mqRail.matches); setMenu(false); };
    onMq();
    mqNarrow.addEventListener('change', onMq);
    mqRail.addEventListener('change', onMq);

    const k = fx.current;
    const onMove = (e) => {
      k.nx = (e.clientX / window.innerWidth) * 2 - 1;
      k.ny = (e.clientY / window.innerHeight) * 2 - 1;
      k.cx = e.clientX; k.cy = e.clientY;
      const t = e.target.closest ? e.target.closest('[data-cursor],a,button,input,textarea') : null;
      k.label = t ? (t.getAttribute('data-cursor') || '') : null;
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    const onScroll = () => {
      const n = nav.current;
      if (!n) return;
      const s = window.scrollY > 40;
      n.style.paddingTop = n.style.paddingBottom = s ? '14px' : '24px';
      n.style.background = s ? 'rgba(8,7,10,.86)' : 'rgba(8,7,10,0)';
      n.style.backdropFilter = n.style.webkitBackdropFilter = s ? 'blur(14px)' : 'none';
      n.style.borderBottomColor = s ? 'rgba(244,241,234,.1)' : 'rgba(244,241,234,0)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Custom cursor + follow image
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    if (cur.current && coarse) cur.current.style.display = 'none';
    let dead = false;
    let rafC;
    const tick = () => {
      rafC = requestAnimationFrame(tick);
      k.rx += (k.cx - k.rx) * 0.2; k.ry += (k.cy - k.ry) * 0.2;
      k.fxp += (k.cx + 30 - k.fxp) * 0.12; k.fyp += (k.cy - 105 - k.fyp) * 0.12;
      if (dead) return;
      const c = cur.current, lbl = curLabel.current, f = follow.current;
      if (c && c.style.display !== 'none') {
        const t = k.label;
        c.style.transform = 'translate3d(' + k.rx + 'px,' + k.ry + 'px,0) scale(' + (t ? 1 : t === '' ? 0.42 : 0.13) + ')';
        c.style.background = t === '' ? 'rgba(240,68,35,.28)' : '#F04423';
        if (lbl) { lbl.textContent = t || ''; lbl.style.opacity = t ? 1 : 0; }
      }
      if (f) f.style.transform = 'translate3d(' + k.fxp + 'px,' + k.fyp + 'px,0)';
    };
    tick();

    const hideLoader = (force) => {
      const L = loader.current;
      if (!L || k.loaderGone) return;
      k.loaderGone = true;
      if (force || !window.gsap) { L.style.display = 'none'; k.assemble = 1; return; }
      window.gsap.to(L, { yPercent: -100, duration: 1.05, ease: 'expo.inOut', onComplete: () => { L.style.display = 'none'; } });
    };
    const loaderFallback = setTimeout(() => hideLoader(true), 4000);

    let ctx, mm, lenis, lenisTicker, renderer, raf3, onResize3;

    // ---- GSAP / Lenis ------------------------------------------------------
    const initMotion = async () => {
      const [{ gsap: g }, { ScrollTrigger: ST }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
      if (dead || !root.current) return;
      window.gsap = g;
      g.registerPlugin(ST);
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const el = root.current;
      const q = (s) => Array.from(el.querySelectorAll(s));
      clearTimeout(loaderFallback);

      if (!reduce) {
        try {
          const mod = await import('@studio-freight/lenis');
          const L = mod.default || mod.Lenis || mod;
          lenis = new L({ lerp: 0.09 });
          lenis.on('scroll', ST.update);
          lenisTicker = (t) => lenis.raf(t * 1000);
          g.ticker.add(lenisTicker);
          g.ticker.lagSmoothing(0);
        } catch (e) { /* smooth scroll is optional */ }
      }

      ctx = g.context(() => {
        const num = loaderNum.current, sq = loaderSq.current, o = { v: 0 };
        if (reduce) {
          hideLoader(true);
        } else {
          g.timeline()
            .to(o, { v: 100, duration: 1.3, ease: 'power2.inOut', onUpdate: () => { if (num) num.textContent = Math.round(o.v); } }, 0)
            .fromTo(sq, { scale: 0.2 }, { scale: 1, duration: 1.3, ease: 'power2.inOut' }, 0)
            .add(() => { hideLoader(false); g.to(k, { assemble: 1, duration: 2.6, ease: 'expo.out' }); }, 1.35)
            .from(q('[data-line]'), { yPercent: 115, duration: 1.5, ease: 'expo.out', stagger: 0.1 }, 1.65)
            .from(q('[data-hf]'), { opacity: 0, y: 18, duration: 1.2, ease: 'expo.out', stagger: 0.08 }, 2.1);
        }

        if (!reduce) {
          q('[data-rv]').forEach((e) => g.from(e, { opacity: 0, y: 44, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: e, start: 'top 90%' } }));
          q('[data-count]').forEach((e) => {
            const to = +e.getAttribute('data-count'), c = { v: 0 };
            e.textContent = '0';
            ST.create({ trigger: e, start: 'top 90%', once: true, onEnter: () => g.to(c, { v: to, duration: 2.2, ease: 'expo.out', onUpdate: () => { e.textContent = Math.round(c.v); } }) });
          });
          const panels = q('[data-panel]');
          panels.forEach((p, i) => {
            if (i === panels.length - 1) return;
            const inner = p.querySelector('[data-pin]');
            g.to(inner, { scale: 0.9, opacity: 0.35, borderRadius: 18, ease: 'none', scrollTrigger: { trigger: panels[i + 1], start: 'top bottom', end: 'top top', scrub: true } });
          });
          q('[data-panel] img').forEach((img) => g.fromTo(img, { scale: 1.18 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: img.closest('[data-panel]'), start: 'top bottom', end: 'top top', scrub: true } }));
        }

        g.fromTo(q('[data-word]'), { color: '#CFCAC1' }, { color: (i, e) => e.getAttribute('data-c') || '#08070A', ease: 'none', stagger: 0.5, scrollTrigger: { trigger: statement.current, start: 'top 70%', end: 'center 45%', scrub: true } });
        ST.create({ trigger: cta.current, start: 'top bottom', end: 'center center', scrub: true, onUpdate: (s) => { k.ctaBoost = s.progress; } });

        if (rail.current) {
          Array.from(rail.current.querySelectorAll('[data-ch]')).forEach((a) => {
            const sec = el.querySelector('#' + a.getAttribute('data-ch'));
            if (!sec) return;
            const label = a.querySelector('[data-chl]'), bar = a.querySelector('[data-chb]');
            const set = (on) => {
              if (!a.isConnected) return;
              a.style.opacity = on ? 1 : 0.45;
              if (label) label.style.maxWidth = on ? '140px' : '0px';
              if (bar) bar.style.transform = on ? 'scaleX(2.4)' : 'scaleX(1)';
            };
            ST.create({ trigger: sec, start: 'top 50%', end: 'bottom 50%', onToggle: (s) => set(s.isActive) });
          });
        }
      }, root);

      // Process strip pins and scrolls sideways on wide screens.
      mm = g.matchMedia(root);
      mm.add('(min-width: 900px)', () => {
        const wrap = processRef.current, tw = ptrackWrap.current, tr = ptrack.current, bar = pbar.current;
        if (!wrap || !tw || !tr) return undefined;
        tw.style.overflowX = 'hidden';
        const dist = () => Math.max(0, tr.scrollWidth - tw.clientWidth);
        g.to(tr, {
          x: () => -dist(),
          ease: 'none',
          scrollTrigger: {
            trigger: wrap, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 0.8, invalidateOnRefresh: true,
            onUpdate: (s) => { if (bar) bar.style.transform = 'scaleX(' + s.progress + ')'; },
          },
        });
        return () => { tw.style.overflowX = 'auto'; };
      });
      setTimeout(() => ST.refresh(), 700);
    };

    // ---- three.js cube field ----------------------------------------------
    const init3D = async () => {
      const T = await import('three');
      if (dead || !canvas.current) return;
      let R;
      try { R = new T.WebGLRenderer({ canvas: canvas.current, antialias: true, powerPreference: 'high-performance' }); } catch (e) { return; }
      renderer = R;
      const mobile = window.innerWidth < 760;
      R.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 1.75));
      R.setClearColor(0x08070a, 1);
      const scene = new T.Scene();
      scene.fog = new T.Fog(0x08070a, 18, 46);
      const cam = new T.PerspectiveCamera(32, 1, 0.1, 120);

      const D = mobile ? 8 : 11, S = 0.62, half = ((D - 1) * S) / 2, N = D * D * D;
      const geo = new T.BoxGeometry(0.5, 0.5, 0.5);
      const mat = new T.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4, metalness: 0.55 });
      const mesh = new T.InstancedMesh(geo, mat, N);
      const cA = new T.Color(0x1d1c21), cB = new T.Color(0x34323a), cO = new T.Color(0xf04423);
      const P = [];
      const side = Math.ceil(Math.sqrt(N));
      let idx = 0;
      for (let x = 0; x < D; x++) for (let y = 0; y < D; y++) for (let z = 0; z < D; z++) {
        const surf = x === 0 || y === 0 || z === 0 || x === D - 1 || y === D - 1 || z === D - 1;
        const r = Math.random();
        const orange = (x === D - 1 && y > D * 0.55 && z > D * 0.55) || r < 0.012;
        const tx = x * S - half, ty = y * S - half, tz = z * S - half;
        const th = Math.random() * 6.283, ph = Math.acos(2 * Math.random() - 1), rad = 9 + Math.random() * 14;
        const gi = idx % side, gj = Math.floor(idx / side);
        P.push({ t: [tx, ty, tz], s: [Math.sin(ph) * Math.cos(th) * rad, Math.sin(ph) * Math.sin(th) * rad, Math.cos(ph) * rad], f: [(gi - side / 2) * 0.7, -3.2, (gj - side / 2) * 0.7], seed: Math.random() * 6.28, surf });
        mesh.setColorAt(idx++, orange ? cO : surf && r < 0.4 ? cB : cA);
      }
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      const group = new T.Group();
      group.add(mesh);
      scene.add(group);

      scene.add(new T.AmbientLight(0xffffff, 0.4));
      const d1 = new T.DirectionalLight(0xffffff, 1.4); d1.position.set(10, 16, 12); scene.add(d1);
      const d2 = new T.DirectionalLight(0xffe2d4, 0.6); d2.position.set(-12, -4, -10); scene.add(d2);
      const pl = new T.PointLight(0xf04423, 4, 18); scene.add(pl);

      const dummy = new T.Object3D(), clock = new T.Clock(), ray = new T.Raycaster(), inv = new T.Matrix4();
      const hitL = new T.Vector3(), sph = new T.Sphere(new T.Vector3(), half * 1.9), hit = new T.Vector3();
      let push = 0;
      onResize3 = () => {
        R.setSize(window.innerWidth, window.innerHeight, false);
        cam.aspect = window.innerWidth / window.innerHeight;
        cam.updateProjectionMatrix();
      };
      onResize3();
      window.addEventListener('resize', onResize3);
      const ox = mobile ? 0 : 3.4, oy = mobile ? 2.2 : 0.6;
      const ease = (t) => 1 - Math.pow(1 - t, 3);

      const loop = () => {
        raf3 = requestAnimationFrame(loop);
        const cv = canvas.current;
        if (document.hidden || dead || !cv) return;
        const t = clock.getElapsedTime();
        const hp = Math.min(1, window.scrollY / (window.innerHeight * 1.1));
        const cb = k.ctaBoost;
        cv.style.opacity = Math.max(Math.max(0.1, 1 - hp * 0.9), cb * 0.9);
        k.x += (k.nx - k.x) * 0.05; k.y += (k.ny - k.y) * 0.05;
        const a = ease(Math.min(1, k.assemble));
        const flat = ease(Math.max(0, Math.min(1, hp * 1.2))) * (1 - cb);
        group.position.set(ox * (1 - flat * 0.6) * (1 - cb), oy - flat * 0.5, 0);
        group.rotation.y = t * 0.12 + k.x * 0.5 + hp * 1.2;
        group.rotation.x = 0.42 + k.y * 0.25 - flat * 0.3;
        cam.position.set(0, 1.2 + flat * 3, 17 - cb * 3);
        cam.lookAt(0, 0, 0);
        group.updateMatrixWorld();
        ray.setFromCamera({ x: k.x, y: -k.y }, cam);
        inv.copy(group.matrixWorld).invert();
        const lr = ray.ray.clone().applyMatrix4(inv);
        const on = lr.intersectSphere(sph, hit);
        push += ((on ? 1 : 0) - push) * 0.06;
        if (on) hitL.lerp(hit, 0.15);
        pl.position.copy(hitL.clone().applyMatrix4(group.matrixWorld)).add(new T.Vector3(0, 0, 3));
        for (let n = 0; n < N; n++) {
          const p = P[n];
          let x = p.s[0] + (p.t[0] - p.s[0]) * a, y = p.s[1] + (p.t[1] - p.s[1]) * a, z = p.s[2] + (p.t[2] - p.s[2]) * a;
          x += (p.f[0] - x) * flat; y += (p.f[1] - y) * flat; z += (p.f[2] - z) * flat;
          const br = Math.sin(t * 1.2 + p.seed) * 0.03 * a;
          const dx = x - hitL.x, dy = y - hitL.y, dz = z - hitL.z, dd = Math.sqrt(dx * dx + dy * dy + dz * dz) + 0.001;
          const pf = push * 1.6 * Math.exp(-(dd * dd) / 3.2) * (1 - flat);
          x += (dx / dd) * pf + br; y += (dy / dd) * pf; z += (dz / dd) * pf;
          dummy.position.set(x, y, z);
          const sc = (0.25 + 0.75 * a) * (p.surf || flat > 0.5 ? 1 : 0.6);
          dummy.scale.set(sc, sc, sc);
          dummy.rotation.set((1 - a) * p.seed, (1 - a) * p.seed * 0.5, 0);
          dummy.updateMatrix();
          mesh.setMatrixAt(n, dummy.matrix);
        }
        mesh.instanceMatrix.needsUpdate = true;
        R.render(scene, cam);
      };
      loop();
    };

    initMotion().catch(() => hideLoader(true));
    init3D().catch(() => {});

    return () => {
      dead = true;
      clearTimeout(loaderFallback);
      cancelAnimationFrame(rafC);
      cancelAnimationFrame(raf3);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      if (onResize3) window.removeEventListener('resize', onResize3);
      mqNarrow.removeEventListener('change', onMq);
      mqRail.removeEventListener('change', onMq);
      if (mm) mm.revert();
      if (ctx) ctx.revert();
      if (lenis) { if (window.gsap && lenisTicker) window.gsap.ticker.remove(lenisTicker); lenis.destroy(); }
      if (renderer) renderer.dispose();
    };
  }, []);

  // Statement words keep their final colour in an attribute for the scrub tween.
  const wordColor = (w) => (w.c === '#F04423' ? { 'data-c': '#F04423' } : {});

  return (
    <El ref={root} css="position:relative;background:#08070A;color:#F4F1EA;font-family:Geist,'Helvetica Neue',Helvetica,sans-serif;overflow-x:clip">

      {/* Loader */}
      <El ref={loader} aria-hidden="true" css={`position:fixed;inset:0;z-index:100;background:#08070A;display:flex;flex-direction:column;justify-content:space-between;padding:${PAD_X}`}>
        <El css={`display:flex;justify-content:space-between;${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85`}><span>Mariox Software</span><span>Est. engineering partner</span></El>
        <El css="display:flex;align-items:flex-end;justify-content:space-between;gap:20px">
          <El ref={loaderSq} css="width:clamp(56px,7vw,110px);height:clamp(56px,7vw,110px);background:#F04423;transform-origin:0 100%" />
          <El ref={loaderNum} css="font-size:clamp(5rem,16vw,16rem);font-weight:300;letter-spacing:-.07em;line-height:.8">0</El>
        </El>
      </El>

      {/* Mobile menu */}
      {narrow && menu ? (
        <El css="position:fixed;inset:0;z-index:80;background:#08070A;display:flex;flex-direction:column;padding:96px 22px 32px">
          <El as="nav" aria-label="Mobile" css="display:flex;flex-direction:column;border-top:1px solid rgba(244,241,234,.14)">
            {chapters.map((n) => (
              <El as="a" key={n.id} href={n.href} onClick={() => setMenu(false)} css="display:flex;align-items:baseline;justify-content:space-between;padding:18px 0;border-bottom:1px solid rgba(244,241,234,.14);font-size:clamp(2rem,9vw,3rem);font-weight:500;letter-spacing:-.05em">
                <span>{n.label}</span><El as="span" css={`${MONO};font-size:12px;color:#8E8A85`}>{n.n}</El>
              </El>
            ))}
          </El>
          <El as="a" href="#contact" onClick={() => setMenu(false)} css="margin-top:auto;display:flex;justify-content:space-between;align-items:center;background:#F04423;color:#08070A;padding:20px 22px;border-radius:999px;font-size:16px;font-weight:500">Start a project <span>&#8594;</span></El>
        </El>
      ) : null}

      <El as="canvas" ref={canvas} aria-hidden="true" css="position:fixed;inset:0;width:100vw;height:100vh;z-index:0;display:block;pointer-events:none;background:radial-gradient(55% 55% at 62% 50%,#191613 0%,#08070A 72%)" />

      <El ref={cur} aria-hidden="true" css="position:fixed;top:0;left:0;width:92px;height:92px;margin:-46px 0 0 -46px;border-radius:50%;background:#F04423;z-index:9999;pointer-events:none;display:flex;align-items:center;justify-content:center;transform:translate3d(-200px,-200px,0) scale(.13);will-change:transform">
        <El as="span" ref={curLabel} css={`${MONO};font-size:12px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:#08070A;opacity:0;transition:opacity .2s`} />
      </El>
      <El ref={follow} aria-hidden="true" css="position:fixed;top:0;left:0;width:320px;height:210px;z-index:60;pointer-events:none;background:#141216 center/cover no-repeat;opacity:0;transform:translate3d(-400px,-400px,0);transition:opacity .35s;will-change:transform" />

      {/* Chapter rail */}
      <El as="nav" ref={rail} aria-label="Chapters" css={`position:fixed;right:clamp(14px,1.6vw,28px);top:50%;transform:translateY(-50%);z-index:65;display:${railOn ? 'flex' : 'none'};flex-direction:column;gap:14px;mix-blend-mode:difference`}>
        {chapters.map((c) => (
          <El as="a" key={c.id} href={c.href} data-ch={c.id} css={`display:flex;align-items:center;justify-content:flex-end;gap:10px;${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#F4F1EA;opacity:.45;transition:opacity .3s`}>
            <El as="span" data-chl="1" css="max-width:0;overflow:hidden;white-space:nowrap;transition:max-width .45s cubic-bezier(.2,.8,.2,1)">{c.label}</El>
            <span>{c.n}</span>
            <El as="span" data-chb="1" css="width:14px;height:1px;background:#F4F1EA;transform-origin:100% 50%;transition:transform .45s" />
          </El>
        ))}
      </El>

      {/* Header */}
      <El as="header" ref={nav} // The menu overlay sits at z-80; the header goes above it while open so the
      // close button stays tappable.
      css={`position:fixed;top:0;left:0;right:0;z-index:${menu ? 85 : 70};display:flex;align-items:center;justify-content:space-between;gap:24px;padding:24px ${PAD_X};border-bottom:1px solid rgba(244,241,234,0);transition:padding .45s cubic-bezier(.2,.8,.2,1),background .45s,border-color .45s`}>
        <El as="a" href="#top" aria-label="Mariox Software home" css="display:flex;align-items:center;gap:11px;color:#F4F1EA">
          <El as="span" css="width:18px;height:18px;background:#F04423" />
          <El as="span" css="font-size:17px;font-weight:600;letter-spacing:-.04em">MARIOX</El>
          <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.14em;color:#8E8A85;text-transform:uppercase`}>Software</El>
        </El>
        {!narrow ? (
          <El css="display:flex;align-items:center;gap:clamp(18px,2.4vw,36px)">
            {navLinks.map((n) => <El as="a" key={n.href} href={n.href} css="font-size:14px;color:#D9D5CD">{n.label}</El>)}
            <El as="a" href="#contact" data-cursor="Start" css="display:flex;align-items:center;gap:10px;background:#F4F1EA;color:#08070A;padding:12px 18px;border-radius:999px;font-size:14px;font-weight:500;white-space:nowrap;transition:background .3s" hover="background:#F04423;color:#08070A">Start a project <span>&#8594;</span></El>
          </El>
        ) : (
          <El as="button" type="button" onClick={() => setMenu((m) => !m)} css={`background:transparent;border:1px solid rgba(244,241,234,.3);color:#F4F1EA;border-radius:999px;padding:11px 18px;min-height:44px;${MONO};font-size:12px;letter-spacing:.12em;text-transform:uppercase;cursor:pointer`}>{menu ? 'Close' : 'Menu'}</El>
        )}
      </El>

      <El as="main" id="top" css="position:relative;z-index:1">

        {/* 01 Hero */}
        <El as="section" css={`position:relative;min-height:100svh;display:grid;grid-template-rows:1fr auto;padding:130px ${PAD_X} clamp(24px,3vw,40px)`}>
          <El aria-hidden="true" css="position:absolute;left:0;right:0;bottom:0;height:46%;background:linear-gradient(to top,#08070A 12%,rgba(8,7,10,0));pointer-events:none" />
          <El css="position:relative;align-self:end">
            <El data-hf="1" css="display:flex;align-items:center;gap:12px;margin-bottom:clamp(18px,2.4vw,30px)">
              <El as="span" css="width:7px;height:7px;background:#F04423;animation:mxPulse 2.4s ease-in-out infinite" />
              <El as="span" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#B7B2AA`}>Digital product engineering &#183; since day one, senior only</El>
            </El>
            <El as="h1" css="margin:0;font-weight:500;font-size:clamp(3.4rem,11.5vw,13rem);line-height:.84;letter-spacing:-.065em">
              <El as="span" css="display:block;overflow:hidden;padding-bottom:.03em"><El as="span" data-line="1" css="display:block">Products,</El></El>
              <El as="span" css="display:block;overflow:hidden;padding-bottom:.03em"><El as="span" data-line="1" css="display:block;padding-left:clamp(0px,9vw,180px)">engineered</El></El>
              <El as="span" css="display:block;overflow:hidden;padding-bottom:.1em"><El as="span" data-line="1" css="display:block"><El as="em" css={`${SERIF};font-weight:400;letter-spacing:-.035em`}>to last</El><El as="span" css="color:#F04423">.</El></El></El>
            </El>
          </El>
          <El css="position:relative;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));gap:clamp(20px,3vw,48px);align-items:end;margin-top:clamp(28px,3.6vw,52px);padding-top:clamp(18px,2.2vw,26px);border-top:1px solid rgba(244,241,234,.16)">
            <El as="p" data-hf="1" css="margin:0;max-width:38ch;font-size:clamp(15.5px,1.25vw,18px);line-height:1.55;color:#B7B2AA;text-wrap:pretty">We design, engineer and scale digital products for startups and enterprises. 100+ senior engineers, honest scoping, code you own.</El>
            <El data-hf="1" css={`display:flex;flex-direction:column;gap:8px;${MONO};font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;color:#8E8A85`}>
              <span><El as="span" css="color:#F4F1EA">4.8 &#9733;</El> Google &#183; 138 reviews</span>
              <span>AWS &#183; Azure &#183; Google Cloud certified</span>
            </El>
            <El data-hf="1" css="display:flex;flex-wrap:wrap;gap:10px">
              <El as="a" href="#contact" data-cursor="Start" css="display:flex;align-items:center;gap:14px;background:#F04423;color:#08070A;padding:18px 24px;border-radius:999px;font-size:15px;font-weight:500;white-space:nowrap;transition:background .3s" hover="background:#F4F1EA;color:#08070A">Start a project <span>&#8594;</span></El>
              <El as="a" href="#work" css="display:flex;align-items:center;gap:14px;border:1px solid rgba(244,241,234,.3);padding:18px 24px;border-radius:999px;font-size:15px;white-space:nowrap;transition:border-color .3s" hover="border-color:#F4F1EA;color:#F4F1EA">See the work &#8595;</El>
            </El>
          </El>
        </El>

        {/* 02 Clients */}
        <El as="section" aria-label="Clients" css="position:relative;background:#08070A;padding:clamp(30px,3.4vw,48px) 0;border-top:1px solid rgba(244,241,234,.1);overflow:hidden">
          <El css="display:flex;width:max-content;animation:mxMarquee 52s linear infinite">
            {[0, 1].map((loop) => (
              <El key={loop} aria-hidden={loop === 1 ? 'true' : undefined} css="display:flex;align-items:center">
                {clients.map((c) => (
                  <El as="span" key={c} css="display:flex;align-items:center;gap:clamp(28px,3.4vw,56px);padding-right:clamp(28px,3.4vw,56px);font-size:clamp(1.5rem,2.8vw,2.6rem);font-weight:500;letter-spacing:-.05em;color:#8E8A85;white-space:nowrap">
                    {c}<El as="span" css="width:7px;height:7px;background:#F04423" />
                  </El>
                ))}
              </El>
            ))}
          </El>
        </El>

        {/* 03 Statement */}
        <El as="section" id="about" ref={statement} css={`position:relative;background:#F4F1EA;color:#08070A;padding:clamp(100px,13vw,220px) ${PAD_X} clamp(70px,9vw,140px)`}>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:clamp(24px,4vw,64px)">
            <El css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55`}>Chapter 00 &#8212; Mariox</El>
            <El as="p" css="grid-column:span 3;min-width:min(100%,300px);margin:0;font-size:clamp(2rem,4.8vw,5rem);line-height:1.02;letter-spacing:-.05em;font-weight:500;display:flex;flex-wrap:wrap;column-gap:.24em">
              {words.map((w, i) => (
                <El as="span" key={i} data-word="1" {...wordColor(w)} css={`font-family:${w.f};font-style:${w.s};font-weight:${w.wt};color:${w.c}`}>{w.t}</El>
              ))}
            </El>
          </El>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));margin-top:clamp(70px,9vw,150px);border-top:1px solid rgba(8,7,10,.16)">
            {stats.map((s) => (
              <El key={s.l} data-rv="1" css="padding:clamp(22px,2.6vw,34px) clamp(0px,1.4vw,22px) 0 0">
                <El css="font-size:clamp(3.6rem,8vw,8.5rem);line-height:.85;letter-spacing:-.07em;font-weight:300"><El as="span" data-count={s.v}>{s.v}</El><El as="span" css="color:#F04423">{s.suf}</El></El>
                <El css={`margin-top:16px;${MONO};font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:#5E5A55`}>{s.l}</El>
              </El>
            ))}
          </El>
        </El>

        {/* 04 Work */}
        <El as="section" id="work" css="position:relative;background:#08070A">
          <El css={`padding:clamp(90px,11vw,170px) ${PAD_X} clamp(36px,4vw,60px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end`}>
            <El>
              <El data-rv="1" css={CHAPTER}>Chapter 01 &#8212; Work</El>
              <El as="h2" data-rv="1" css={H2}>Five products, <Em>opened up.</Em></El>
            </El>
            <El as="p" data-rv="1" css={LEAD}>What the business needed, the system underneath it, and the stack that runs it today.</El>
          </El>

          <El>
            {stack.map((c) => (
              <El as="article" key={c.name} data-panel="1" css="position:sticky;top:0;height:100vh;min-height:620px;overflow:hidden;background:#08070A;border-top:1px solid rgba(244,241,234,.12)">
                <El data-pin="1" css="position:absolute;inset:0;transform-origin:50% 0">
                  <El as="img" src={c.img} alt={c.alt} loading="lazy" data-cursor="View" css="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block" />
                  <El aria-hidden="true" css="position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,7,10,.94) 0%,rgba(8,7,10,.78) 38%,rgba(8,7,10,.15) 72%),linear-gradient(to top,rgba(8,7,10,.85),rgba(8,7,10,0) 45%)" />
                  <El css={`position:relative;height:100%;display:flex;flex-direction:column;justify-content:space-between;padding:clamp(96px,9vw,130px) ${PAD_X} clamp(28px,3.4vw,48px)`}>
                    <El css={`display:flex;justify-content:space-between;gap:20px;${MONO};font-size:11.5px;letter-spacing:.14em;text-transform:uppercase`}>
                      <El as="span" css="color:#F04423">{c.sector}</El><El as="span" css="color:#B7B2AA">{c.n} / 05</El>
                    </El>
                    <El css="max-width:720px">
                      <El as="h3" css="margin:0;font-size:clamp(3.4rem,10vw,10rem);line-height:.82;letter-spacing:-.07em;font-weight:500"><El as={Link} href={c.href} data-cursor="View">{c.name}</El></El>
                      <El as="p" css="margin:clamp(18px,2.2vw,28px) 0 0;max-width:30ch;font-size:clamp(1.15rem,1.8vw,1.6rem);line-height:1.25;letter-spacing:-.025em;text-wrap:pretty">{c.body}</El>
                      <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:20px 40px;margin-top:clamp(22px,2.8vw,36px);padding-top:20px;border-top:1px solid rgba(244,241,234,.2)">
                        <El>
                          <El css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;margin-bottom:8px`}>The system</El>
                          <El as="p" css="margin:0;font-size:14.5px;line-height:1.5;color:#D9D5CD">{c.system}</El>
                        </El>
                        <El>
                          <El css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;margin-bottom:10px`}>Stack &#183; {c.scope}</El>
                          <El css="display:flex;flex-wrap:wrap;gap:6px">
                            {c.tech.map((t) => <El as="span" key={t} css="border:1px solid rgba(244,241,234,.28);border-radius:999px;padding:6px 12px;font-size:13px;color:#F4F1EA;background:rgba(8,7,10,.4)">{t}</El>)}
                          </El>
                        </El>
                      </El>
                    </El>
                  </El>
                </El>
              </El>
            ))}
          </El>

          {/* Case index */}
          <El css={`position:relative;z-index:2;background:#08070A;padding:clamp(70px,8vw,130px) ${PAD_X} clamp(90px,10vw,160px)`}>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(28px,3.4vw,48px)">
              <El>
                <El data-rv="1" css={CHAPTER}>Case index</El>
                <El as="h3" data-rv="1" css="margin:0;font-size:clamp(2.2rem,4.6vw,4.6rem);line-height:.9;letter-spacing:-.06em;font-weight:500">Every product, <Em>on the record.</Em></El>
              </El>
              <El as="p" data-rv="1" css={LEAD}>A working index of products we have engineered. Filter by sector, hover for a look.</El>
            </El>
            <El css="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:22px">
              {filterNames.map((l) => {
                const on = filter === l;
                const count = l === 'All' ? caseRows.length : caseRows.filter((c) => c.group === l).length;
                return (
                  <El as="button" type="button" key={l} onClick={() => setFilter(l)} aria-pressed={on} css={`cursor:pointer;min-height:44px;white-space:nowrap;border-radius:999px;padding:10px 18px;border:1px solid ${on ? '#F04423' : 'rgba(244,241,234,.25)'};background:${on ? '#F04423' : 'transparent'};color:${on ? '#08070A' : '#D9D5CD'};font-family:Geist,sans-serif;font-size:14px;transition:all .25s`}>
                    {l} <El as="span" css="opacity:.6;margin-left:4px">{count}</El>
                  </El>
                );
              })}
            </El>
            <El css="border-top:1px solid rgba(244,241,234,.16)" onMouseLeave={showFollow(null)}>
              {rows.map((c, i) => (
                <El as={Link} key={c.name} href={c.href} onMouseEnter={showFollow(c.img)} data-cursor="View" css="display:grid;grid-template-columns:48px minmax(0,2fr) minmax(0,1.4fr) minmax(0,1fr);gap:6px 24px;align-items:baseline;padding:clamp(14px,1.6vw,20px) 0;border-bottom:1px solid rgba(244,241,234,.16);transition:color .25s,padding-left .4s cubic-bezier(.2,.8,.2,1)" hover="color:#F04423;padding-left:14px">
                  <El as="span" css={`${MONO};font-size:11px;color:#8E8A85`}>{String(i + 1).padStart(2, '0')}</El>
                  <El as="span" css="font-size:clamp(1.15rem,2vw,1.8rem);font-weight:500;letter-spacing:-.045em">{c.name}</El>
                  <El as="span" css="font-size:14.5px;color:#B7B2AA">{c.sector}</El>
                  <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:#8E8A85;text-align:right`}>{c.scope}</El>
                </El>
              ))}
            </El>
            <El as={Link} href="/case-study" css="display:inline-flex;align-items:center;gap:12px;margin-top:28px;border-bottom:1px solid #F04423;padding-bottom:6px;font-size:15px">Open the full archive <span>&#8594;</span></El>
          </El>
        </El>

        {/* 05 Services */}
        <El as="section" id="services" css={`position:relative;background:#F4F1EA;color:#08070A;padding:clamp(100px,12vw,190px) ${PAD_X}`}>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(44px,5.6vw,90px)">
            <El>
              <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55;margin-bottom:16px`}>Chapter 02 &#8212; Services</El>
              <El as="h2" data-rv="1" css={H2}>Four disciplines. <Em>One team.</Em></El>
            </El>
            <El as="p" data-rv="1" css="margin:0;max-width:44ch;font-size:16.5px;line-height:1.55;color:#4A4741">The people who plan a product and the people who ship it sit in the same room, so nothing gets lost in the handover.</El>
          </El>
          <El css="border-top:1px solid rgba(8,7,10,.18)" onMouseLeave={showFollow(null)}>
            {pillars.map((p) => (
              <El key={p.n} onMouseEnter={showFollow(p.img)} data-cursor="" css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:clamp(16px,3vw,48px);padding:clamp(28px,3.4vw,50px) 0;border-bottom:1px solid rgba(8,7,10,.18);transition:background .45s,padding .5s cubic-bezier(.2,.8,.2,1)" hover="background:#08070A;color:#F4F1EA;padding-left:clamp(14px,2vw,30px);padding-right:clamp(14px,2vw,30px)">
                <El css="display:flex;gap:clamp(14px,2vw,26px);align-items:baseline">
                  <El as="span" css={`${MONO};font-size:12px;color:#F04423`}>{p.n}</El>
                  <El as="h3" css="margin:0;font-size:clamp(2.4rem,5.6vw,5.6rem);line-height:.86;letter-spacing:-.065em;font-weight:500">{p.t}</El>
                </El>
                <El as="p" css="margin:0;max-width:36ch;font-size:clamp(16px,1.35vw,19px);line-height:1.45;text-wrap:pretty;opacity:.85">{p.b}</El>
                <El css="display:flex;flex-direction:column;gap:7px">
                  {p.list.map((s) => (
                    <El as="span" key={s} css="font-size:15px;display:flex;gap:10px;align-items:baseline"><El as="span" css="width:5px;height:5px;background:#F04423;flex-shrink:0;transform:translateY(-3px)" />{s}</El>
                  ))}
                </El>
              </El>
            ))}
          </El>

          <El css="margin-top:clamp(64px,8vw,130px)">
            <El css="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:16px;margin-bottom:clamp(22px,2.6vw,34px)">
              <El as="h3" data-rv="1" css="margin:0;font-size:clamp(1.8rem,3.4vw,3.2rem);letter-spacing:-.055em;font-weight:500">Seventeen services. <Em>Pick one, or all.</Em></El>
              <El as="span" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55`}>Hover to explore</El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr));gap:clamp(28px,4vw,72px);align-items:start">
              <El css="border-top:1px solid rgba(8,7,10,.18)">
                {services.map((s, i) => {
                  const on = i === svc;
                  return (
                    <El as="button" type="button" key={s.name} onMouseEnter={() => setSvc(i)} onFocus={() => setSvc(i)} onClick={() => setSvc(i)} css={`width:100%;background:transparent;border:0;border-bottom:1px solid rgba(8,7,10,.14);padding:clamp(12px,1.3vw,16px) 0;cursor:pointer;display:grid;grid-template-columns:40px 1fr auto;gap:14px;align-items:baseline;text-align:left;color:${on ? '#F04423' : '#08070A'};font-family:Geist,sans-serif;transition:color .25s,padding-left .4s cubic-bezier(.2,.8,.2,1);padding-left:${on ? '12px' : '0px'}`}>
                      <El as="span" css={`${MONO};font-size:11px;color:#5E5A55`}>{s.n}</El>
                      <El as="span" css="font-size:clamp(1.1rem,1.8vw,1.6rem);font-weight:500;letter-spacing:-.04em;line-height:1.05">{s.name}</El>
                      <El as="span" css={`font-size:15px;color:#F04423;opacity:${on ? 1 : 0}`}>&#8594;</El>
                    </El>
                  );
                })}
              </El>
              <El css="position:sticky;top:110px;background:#08070A;color:#F4F1EA">
                <El css="aspect-ratio:16/9;overflow:hidden;background:#141216">
                  <El as="img" src={activeService.img} alt={activeService.alt} loading="lazy" css="width:100%;height:100%;object-fit:cover;display:block" />
                </El>
                <El css="padding:clamp(22px,2.6vw,36px);display:flex;flex-direction:column;gap:18px">
                  <El css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#F04423`}>Service {activeService.n}</El>
                  <El as="h3" css="margin:0;font-size:clamp(1.8rem,3vw,2.8rem);line-height:.95;letter-spacing:-.055em;font-weight:500">{activeService.name}</El>
                  <El as="p" css="margin:0;font-size:16px;line-height:1.55;color:#B7B2AA">{activeService.desc}</El>
                  <El css="display:flex;flex-wrap:wrap;gap:8px">
                    {activeService.get.map((d) => <El as="span" key={d} css="border:1px solid rgba(244,241,234,.22);border-radius:999px;padding:7px 13px;font-size:13.5px;color:#D9D5CD">{d}</El>)}
                  </El>
                  <El css="display:flex;flex-wrap:wrap;gap:16px;justify-content:space-between;align-items:center;border-top:1px solid rgba(244,241,234,.16);padding-top:18px">
                    <El as="span" css={`${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#8E8A85`}>From our work &#183; {activeService.client}</El>
                    <El as="a" href="#contact" data-cursor="Start" css="display:flex;align-items:center;gap:10px;background:#F04423;color:#08070A;padding:13px 18px;border-radius:999px;font-size:14px;font-weight:500;white-space:nowrap">Discuss this <span>&#8594;</span></El>
                  </El>
                </El>
              </El>
            </El>
          </El>
        </El>

        {/* 06 AI */}
        <El as="section" id="ai" css={`position:relative;background:#08070A;padding:clamp(100px,12vw,190px) ${PAD_X}`}>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr));gap:clamp(36px,5vw,96px);align-items:start">
            <El css="position:sticky;top:120px">
              <El data-rv="1" css={CHAPTER}>Chapter 03 &#8212; AI</El>
              <El as="h2" data-rv="1" css={H2}>AI that ships <Em>inside the product.</Em></El>
              <El as="p" data-rv="1" css="margin:28px 0 0;max-width:40ch;font-size:16.5px;line-height:1.55;color:#B7B2AA">Not demos. Copilots, agents and automation connected to your data, evaluated before launch and monitored after it.</El>
              <El data-rv="1" css="display:flex;flex-wrap:wrap;gap:8px;margin-top:28px">
                {aiStack.map((s) => <El as="span" key={s} css="border:1px solid rgba(244,241,234,.22);border-radius:999px;padding:7px 13px;font-size:13.5px;color:#D9D5CD">{s}</El>)}
              </El>
            </El>
            <El css="border-top:1px solid rgba(244,241,234,.16)">
              {ai.map((a) => (
                <El key={a.n} data-rv="1" css="padding:clamp(28px,3.4vw,48px) 0;border-bottom:1px solid rgba(244,241,234,.16);display:grid;grid-template-columns:56px 1fr;gap:18px">
                  <El as="span" css={`${MONO};font-size:12px;color:#F04423;padding-top:10px`}>{a.n}</El>
                  <El>
                    <El as="h3" css="margin:0;font-size:clamp(1.7rem,3vw,2.8rem);line-height:.95;letter-spacing:-.055em;font-weight:500">{a.t}</El>
                    <El as="p" css="margin:14px 0 0;max-width:44ch;font-size:16px;line-height:1.5;color:#B7B2AA">{a.b}</El>
                    <El css={`margin-top:14px;${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#8E8A85`}>e.g. {a.e}</El>
                  </El>
                </El>
              ))}
            </El>
          </El>
        </El>

        {/* 07 Technology */}
        <El as="section" id="technology" css={`position:relative;background:#08070A;padding:0 ${PAD_X} clamp(100px,12vw,190px)`}>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,5vw,72px);padding-top:clamp(70px,8vw,120px);border-top:1px solid rgba(244,241,234,.12)">
            <El>
              <El data-rv="1" css={CHAPTER}>Chapter 04 &#8212; Technology</El>
              <El as="h2" data-rv="1" css={H2}>A stack chosen <Em>for the problem.</Em></El>
            </El>
            <El as="p" data-rv="1" css={LEAD}>Proven technology where reliability matters, newer tools where they earn their place.</El>
          </El>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:clamp(24px,4vw,64px);align-items:start">
            <El css="display:flex;flex-direction:column;border-top:1px solid rgba(244,241,234,.16)">
              {techTabs.map((t, i) => (
                <El as="button" type="button" key={t.label} onClick={() => setTech(i)} onMouseEnter={() => setTech(i)} css={`cursor:pointer;background:transparent;border:0;border-bottom:1px solid rgba(244,241,234,.16);padding:14px 0;min-height:48px;display:flex;justify-content:space-between;align-items:baseline;color:${i === tech ? '#F04423' : '#F4F1EA'};font-family:Geist,sans-serif;font-size:clamp(1.1rem,1.6vw,1.35rem);font-weight:500;letter-spacing:-.035em;text-align:left`}>
                  {t.label}<El as="span" css={`${MONO};font-size:11px;color:#8E8A85`}>{String(t.items.length).padStart(2, '0')}</El>
                </El>
              ))}
            </El>
            <El css="grid-column:span 2;min-width:min(100%,300px);display:flex;flex-wrap:wrap;gap:clamp(10px,1.2vw,16px);align-content:flex-start;min-height:280px">
              {techTabs[tech].items.map((x) => (
                <El as="span" key={x} css="font-size:clamp(2rem,4.6vw,4.6rem);font-weight:300;letter-spacing:-.06em;line-height:1.05;padding-right:clamp(10px,1.4vw,22px);border-right:1px solid rgba(244,241,234,.16)">{x}</El>
              ))}
            </El>
          </El>
        </El>

        {/* 08 Industries */}
        <El as="section" id="industries" css={`position:relative;background:#08070A;padding:0 ${PAD_X} clamp(100px,12vw,190px)`}>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,5vw,72px);padding-top:clamp(70px,8vw,120px);border-top:1px solid rgba(244,241,234,.12)">
            <El>
              <El data-rv="1" css={CHAPTER}>Chapter 05 &#8212; Industries</El>
              <El as="h2" data-rv="1" css={H2}>Ten industries. <Em>Real clients in each.</Em></El>
            </El>
            <El as="p" data-rv="1" css={LEAD}>We know the workflows, regulation and peak-traffic problems behind the sectors where software matters most.</El>
          </El>
          <El css="display:flex;flex-wrap:wrap;border-top:1px solid rgba(244,241,234,.14);border-left:1px solid rgba(244,241,234,.14)">
            {industries.map((i) => (
              <El as={Link} key={i.name} href={i.href} data-cursor="Explore" className="mx-ind" css={`flex:1 1 33.333%;min-width:min(100%,300px);position:relative;min-height:clamp(260px,26vw,360px);border-right:1px solid rgba(244,241,234,.14);border-bottom:1px solid rgba(244,241,234,.14);overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;padding:clamp(20px,2.2vw,30px);color:#F4F1EA`}>
                <El as="img" src={i.img} alt="" loading="lazy" className="mx-ind-img" css="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transform:scale(1.08);transition:opacity .6s,transform 1.2s cubic-bezier(.2,.8,.2,1)" />
                <El css={`position:relative;display:flex;justify-content:space-between;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;pointer-events:none`}><span>{i.n}</span><El as="span" css="color:#F04423">&#8599;</El></El>
                <El css="position:relative;pointer-events:none">
                  <El as="h3" css="margin:0;font-size:clamp(2rem,3.4vw,3.2rem);line-height:.9;letter-spacing:-.06em;font-weight:500">{i.name}</El>
                  <El as="p" css="margin:10px 0 0;font-size:14.5px;line-height:1.45;color:#D9D5CD">{i.what}</El>
                  {i.clients ? <El css={`margin-top:12px;${MONO};font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:#8E8A85`}>{i.clients}</El> : null}
                </El>
              </El>
            ))}
            <El as="a" href="#contact" data-cursor="Start" css={`flex:999 1 33.333%;min-width:min(100%,300px);min-height:clamp(260px,26vw,360px);border-right:1px solid rgba(244,241,234,.14);border-bottom:1px solid rgba(244,241,234,.14);background:#F04423;color:#08070A;display:flex;flex-direction:column;justify-content:space-between;gap:28px;padding:clamp(20px,2.2vw,30px);transition:background .4s`} hover="background:#F4F1EA;color:#08070A">
              <El css={`display:flex;justify-content:space-between;${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase`}><span>Not listed?</span><span>&#8599;</span></El>
              <El>
                <El as="h3" css="margin:0;max-width:14ch;font-size:clamp(2.2rem,4.4vw,4.4rem);line-height:.9;letter-spacing:-.06em;font-weight:500">Your industry? <Em>Talk to us.</Em></El>
                <El as="p" css="margin:14px 0 0;max-width:44ch;font-size:15.5px;line-height:1.5">The engineering problems repeat across sectors: payments, scheduling, inventory, compliance, scale. Tell us yours.</El>
              </El>
            </El>
          </El>
        </El>

        {/* 09 Process */}
        <El as="section" id="process" ref={processRef} css="position:relative;background:#F4F1EA;color:#08070A;overflow:hidden">
          <El css={`min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:clamp(90px,9vw,120px) 0 clamp(40px,4vw,60px)`}>
            <El css={`padding:0 ${PAD_X};display:flex;flex-wrap:wrap;gap:20px;justify-content:space-between;align-items:flex-end;margin-bottom:clamp(30px,4vw,56px)`}>
              <El>
                <El css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#5E5A55;margin-bottom:16px`}>Chapter 06 &#8212; Process</El>
                <El as="h2" css={H2}>Idea <Em>to scale.</Em></El>
              </El>
              <El css="flex:1;max-width:420px;min-width:200px;height:2px;background:rgba(8,7,10,.12)"><El ref={pbar} css="height:2px;background:#F04423;transform-origin:0 50%;transform:scaleX(0)" /></El>
            </El>
            <El ref={ptrackWrap} className="mx-ptrack" css="overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding-inline:clamp(18px,4vw,64px)">
              <El ref={ptrack} css={`display:flex;width:max-content;padding:0 ${PAD_X};will-change:transform`}>
                {steps.map((s) => (
                  <El key={s.n} css="scroll-snap-align:start;width:min(84vw,520px);flex-shrink:0;padding-right:clamp(24px,3vw,48px);margin-right:clamp(24px,3vw,48px);border-right:1px solid rgba(8,7,10,.14)">
                    <El css="font-size:clamp(7rem,16vw,15rem);font-weight:300;letter-spacing:-.08em;line-height:.8;color:#08070A">{s.n}</El>
                    <El as="h3" css="margin:clamp(20px,2.4vw,32px) 0 0;font-size:clamp(1.8rem,2.8vw,2.6rem);font-weight:500;letter-spacing:-.05em"><El as="span" css="color:#F04423">&#9632;</El> {s.t}</El>
                    <El as="p" css="margin:12px 0 0;max-width:34ch;font-size:16px;line-height:1.5;color:#4A4741">{s.b}</El>
                    <El css={`margin-top:16px;${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#5E5A55`}>You get &#183; {s.out}</El>
                  </El>
                ))}
              </El>
            </El>
          </El>
        </El>

        {/* 10 Engagement */}
        <El as="section" id="engage" css={`position:relative;background:#08070A;padding:clamp(100px,12vw,190px) ${PAD_X} 0`}>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,5vw,72px)">
            <El>
              <El data-rv="1" css={CHAPTER}>Chapter 07 &#8212; Ways to work</El>
              <El as="h2" data-rv="1" css={H2}>Three ways <Em>to start.</Em></El>
            </El>
            <El as="p" data-rv="1" css={LEAD}>Choose the model that fits the stage you are at. Many clients start with a fixed scope and move to a dedicated team.</El>
          </El>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:clamp(12px,1.4vw,20px)">
            {engage.map((e) => (
              <El key={e.n} data-rv="1" css="background:#F4F1EA;color:#08070A;padding:clamp(26px,3vw,44px);min-height:380px;display:flex;flex-direction:column;gap:18px;transition:background .45s" hover="background:#F04423">
                <El as="span" css={`${MONO};font-size:11px;letter-spacing:.14em`}>{e.n}</El>
                <El as="h3" css="margin:0;font-size:clamp(1.8rem,2.8vw,2.6rem);line-height:.95;letter-spacing:-.055em;font-weight:500">{e.t}</El>
                <El as="p" css="margin:0;font-size:15.5px;line-height:1.5;color:#2E2B28">{e.b}</El>
                <El css="margin-top:auto;border-top:1px solid rgba(8,7,10,.16);padding-top:16px;font-size:14.5px"><El as="span" css={`${MONO};font-size:11px;letter-spacing:.12em;text-transform:uppercase`}>Best for &#183; </El>{e.best}</El>
              </El>
            ))}
          </El>
        </El>

        {/* 11 Proof */}
        <El as="section" id="proof" css={`position:relative;background:#08070A;padding:clamp(100px,12vw,190px) ${PAD_X}`}>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(36px,5vw,72px)">
            <El>
              <El data-rv="1" css={CHAPTER}>Chapter 08 &#8212; Proof</El>
              <El as="h2" data-rv="1" css={H2}>Certified, reviewed, <Em>retained.</Em></El>
            </El>
            <El as="p" data-rv="1" css={LEAD}>The people in the pitch are the people who write the code, and everything they build belongs to you.</El>
          </El>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(12px,1.4vw,20px)">
            <El data-rv="1" css="background:#F04423;color:#08070A;padding:clamp(26px,3vw,44px);display:flex;flex-direction:column;justify-content:space-between;gap:40px;min-height:340px">
              <El as="span" css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase`}>Google reviews</El>
              <El>
                <El css="font-size:clamp(5rem,10vw,9rem);font-weight:300;letter-spacing:-.08em;line-height:.8">4.8</El>
                <El css="margin-top:14px;font-size:18px;font-weight:500;letter-spacing:-.02em">&#9733;&#9733;&#9733;&#9733;&#9733; from 138 verified reviews</El>
              </El>
            </El>
            <El css="display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,180px),1fr));border-top:1px solid rgba(244,241,234,.14);border-left:1px solid rgba(244,241,234,.14);grid-column:span 2;min-width:min(100%,320px)">
              {trust.map((t, i) => (
                <El key={i} data-rv="1" css="border-right:1px solid rgba(244,241,234,.14);border-bottom:1px solid rgba(244,241,234,.14);padding:clamp(20px,2.2vw,30px);min-height:170px;display:flex;flex-direction:column;justify-content:space-between;gap:20px">
                  <El as="span" css={`${MONO};font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85`}>{t.k}</El>
                  <El>
                    <El css="font-size:clamp(1.3rem,1.9vw,1.75rem);font-weight:500;letter-spacing:-.045em;line-height:1">{t.t}</El>
                    <El css="margin-top:7px;font-size:13.5px;color:#8E8A85">{t.s}</El>
                  </El>
                </El>
              ))}
            </El>
          </El>
          <El css="margin-top:clamp(56px,7vw,110px)">
            <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8E8A85;margin-bottom:22px`}>Engineering partner to</El>
            <El css="display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,190px),1fr));border-top:1px solid rgba(244,241,234,.14);border-left:1px solid rgba(244,241,234,.14)">
              {clients.map((c) => (
                <El key={c} css="border-right:1px solid rgba(244,241,234,.14);border-bottom:1px solid rgba(244,241,234,.14);height:120px;display:flex;align-items:center;justify-content:center;font-size:clamp(1.2rem,1.7vw,1.5rem);font-weight:500;letter-spacing:-.045em;color:#B7B2AA;transition:color .3s,background .3s" hover="color:#08070A;background:#F4F1EA">{c}</El>
              ))}
            </El>
          </El>
        </El>

        {/* 12 FAQ */}
        <El as="section" id="faq" css={`position:relative;background:#08070A;padding:0 ${PAD_X} clamp(100px,12vw,190px)`}>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(28px,4vw,72px);align-items:start;padding-top:clamp(70px,8vw,120px);border-top:1px solid rgba(244,241,234,.12)">
            <El as="h2" data-rv="1" css="margin:0;font-size:clamp(2.2rem,4.6vw,4.4rem);line-height:.9;letter-spacing:-.06em;font-weight:500">Before <Em>we talk.</Em></El>
            <El css="grid-column:span 2;min-width:min(100%,300px);border-top:1px solid rgba(244,241,234,.16)">
              {faq.map((q, i) => {
                const open = openFaq === i;
                return (
                  <El key={q.q} css="border-bottom:1px solid rgba(244,241,234,.16)">
                    <El as="button" type="button" onClick={() => setOpenFaq(open ? -1 : i)} aria-expanded={open} css="width:100%;background:transparent;border:0;color:#F4F1EA;cursor:pointer;display:flex;justify-content:space-between;gap:20px;align-items:baseline;padding:clamp(18px,2vw,26px) 0;text-align:left;font-family:Geist,sans-serif;font-size:clamp(1.15rem,1.8vw,1.55rem);font-weight:500;letter-spacing:-.035em">
                      {q.q}<El as="span" css={`${MONO};font-size:18px;color:#F04423`}>{open ? '−' : '+'}</El>
                    </El>
                    {open ? <El as="p" css="margin:0 0 24px;max-width:60ch;font-size:16px;line-height:1.6;color:#B7B2AA">{q.a}</El> : null}
                  </El>
                );
              })}
            </El>
          </El>
        </El>

        {/* 13 Contact */}
        <El as="section" id="contact" ref={cta} css={`position:relative;min-height:100vh;padding:clamp(100px,11vw,170px) ${PAD_X}`}>
          <El aria-hidden="true" css="position:absolute;inset:0;background:linear-gradient(to bottom,#08070A 0%,rgba(8,7,10,.3) 35%,rgba(8,7,10,.6) 100%);pointer-events:none" />
          <El css="position:relative;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,400px),1fr));gap:clamp(36px,5vw,90px);align-items:end">
            <El>
              <El data-rv="1" css={`${MONO};font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#B7B2AA;margin-bottom:24px`}>Chapter 09 &#8212; Start</El>
              <El as="h2" data-rv="1" css="margin:0;font-size:clamp(3.2rem,9vw,10rem);line-height:.84;letter-spacing:-.07em;font-weight:500">Have an idea <El as="em" css={`${SERIF};font-weight:400;letter-spacing:-.035em`}>worth building?</El></El>
              <El data-rv="1" css="display:flex;flex-wrap:wrap;gap:10px 28px;margin-top:clamp(28px,3.4vw,44px);font-size:16px">
                <El as="a" href="mailto:admin@marioxsoftware.com" css="border-bottom:1px solid rgba(244,241,234,.4);padding-bottom:4px">admin@marioxsoftware.com</El>
                <El as="a" href="tel:+919599287045" css="border-bottom:1px solid rgba(244,241,234,.4);padding-bottom:4px">+91 95992 87045</El>
              </El>
            </El>
            <El data-rv="1" css="background:rgba(8,7,10,.88);backdrop-filter:blur(12px);border:1px solid rgba(244,241,234,.18);padding:clamp(24px,3vw,44px)">
              <HomeLeadForm />
            </El>
          </El>
        </El>

        {/* 14 Footer */}
        <El as="footer" css={`position:relative;background:#08070A;border-top:1px solid rgba(244,241,234,.12);padding:clamp(48px,6vw,88px) ${PAD_X} 28px;overflow:hidden`}>
          <El css="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,170px),1fr));gap:clamp(28px,4vw,56px)">
            <El as="p" css="grid-column:span 2;min-width:min(100%,260px);margin:0;max-width:22ch;font-size:clamp(1.5rem,2.4vw,2.2rem);line-height:1.08;letter-spacing:-.045em;font-weight:500">Build digital products <El as="em" css={`${SERIF};font-weight:400`}>that matter.</El></El>
            {footerCols.map((col) => (
              <El key={col.h}>
                <El css={`${MONO};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8E8A85;margin-bottom:16px`}>{col.h}</El>
                <El css="display:flex;flex-direction:column;gap:10px">
                  {col.links.map((l) => <El as="a" key={l.t} href={l.href} css="font-size:15px;color:#D9D5CD">{l.t}</El>)}
                </El>
              </El>
            ))}
          </El>
          <El aria-hidden="true" css="margin-top:clamp(48px,6vw,90px);display:flex;align-items:flex-end;gap:clamp(10px,1.6vw,26px);line-height:.74">
            <El as="span" css="width:clamp(40px,11vw,190px);height:clamp(40px,11vw,190px);background:#F04423;flex-shrink:0;margin-bottom:.06em" />
            <El as="span" css="font-size:clamp(4rem,19.5vw,22rem);font-weight:500;letter-spacing:-.08em;white-space:nowrap">MARIOX</El>
          </El>
          <El css={`display:flex;flex-wrap:wrap;gap:16px;justify-content:space-between;margin-top:28px;padding-top:20px;border-top:1px solid rgba(244,241,234,.12);${MONO};font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#8E8A85`}>
            <span>&#169; {new Date().getFullYear()} Mariox Software</span>
            <El css="display:flex;gap:22px"><El as="a" href="/terms-and-conditions" css="color:#8E8A85">Terms</El></El>
          </El>
        </El>
      </El>
    </El>
  );
}
