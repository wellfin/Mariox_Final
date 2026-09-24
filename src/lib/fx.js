// Motion layer ported from the Mariox Software Site design component:
// particle scene (three.js), custom cursor, scroll progress, sticky nav,
// reveal-on-scroll, count-up, GSAP scroll scenes and Lenis smooth scroll.
// Pages only need data-* attributes (data-fade, data-line, data-row, data-count,
// data-track, data-progress-line, data-cta, data-cursor, data-hero) to opt in.

const ACCENT = '#F04423';

export const fx = {
  m: { x: -200, y: -200 },
  r: { x: -200, y: -200 },
  tilt: { x: 0, y: 0 },
  label: '',
  hot: false,
  stage: 0,
  stageTarget: 0,
  focus: 0,
};

// Rows and industry names morph the particle field on hover.
export const setStage = (n) => {
  fx.stageTarget = n;
};

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const touch = () => window.matchMedia('(hover: none)').matches;

export function initCursor(dot, ring, label) {
  if (touch()) return () => {};
  const onMove = (e) => {
    fx.m.x = e.clientX;
    fx.m.y = e.clientY;
    const t = e.target.closest ? e.target.closest('[data-cursor],a,button') : null;
    const kind = t ? t.getAttribute('data-cursor') || '1' : '';
    fx.label = kind === 'view' ? 'View' : kind === 'start' ? 'Start' : '';
    fx.hot = !!t;
  };
  window.addEventListener('mousemove', onMove, { passive: true });
  let raf;
  const tick = () => {
    if (dot && ring) {
      fx.r.x += (fx.m.x - fx.r.x) * 0.13;
      fx.r.y += (fx.m.y - fx.r.y) * 0.13;
      dot.style.transform = 'translate3d(' + (fx.m.x - 4) + 'px,' + (fx.m.y - 4) + 'px,0) scale(' + (fx.hot ? 0 : 1) + ')';
      dot.style.transition = 'transform .15s linear';
      const sc = fx.label ? 1 : fx.hot ? 0.62 : 0.35;
      ring.style.transform = 'translate3d(' + (fx.r.x - 28) + 'px,' + (fx.r.y - 28) + 'px,0) scale(' + sc + ')';
      ring.style.background = fx.label ? ACCENT : 'transparent';
      ring.style.borderColor = fx.hot ? ACCENT : 'rgba(244,241,234,.35)';
      if (label && label.textContent !== fx.label) label.textContent = fx.label;
      if (label) label.style.opacity = fx.label ? 1 : 0;
    }
    raf = requestAnimationFrame(tick);
  };
  tick();
  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener('mousemove', onMove);
  };
}

export function initScroll(prog, nav) {
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    if (prog) prog.style.width = p * 100 + '%';
    if (nav) {
      const on = window.scrollY > 40;
      nav.style.background = on ? 'rgba(8,7,10,.82)' : 'transparent';
      nav.style.borderBottomColor = on ? 'rgba(244,241,234,.12)' : 'rgba(244,241,234,0)';
      nav.style.backdropFilter = on ? 'blur(16px)' : 'none';
      nav.style.paddingTop = on ? '14px' : '20px';
      nav.style.paddingBottom = on ? '14px' : '20px';
    }
    if (!window.__mxST) fx.stageTarget = p * 4;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  return () => window.removeEventListener('scroll', onScroll);
}

// Hero headline and eyebrow entrance on the home page.
let introTimer;
export function intro() {
  const q = (k) => document.querySelector('[data-hero="' + k + '"]');
  [
    [q('l1'), 260],
    [q('l2'), 400],
  ].forEach(([el, delay]) => {
    if (!el) return;
    el.style.transition = 'transform 1.25s cubic-bezier(.16,1,.3,1) ' + delay + 'ms';
    requestAnimationFrame(() => requestAnimationFrame(() => { el.style.transform = 'translateY(0)'; }));
  });
  [
    [q('eyebrow'), 120],
    [q('foot'), 780],
  ].forEach(([el, delay]) => {
    if (!el) return;
    el.style.transition = 'opacity 1s ease ' + delay + 'ms, transform 1s cubic-bezier(.16,1,.3,1) ' + delay + 'ms';
    el.style.transform = 'translateY(18px)';
    requestAnimationFrame(() => requestAnimationFrame(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }));
  });
  clearTimeout(introTimer);
  introTimer = setTimeout(() => {
    [q('l1'), q('l2')].forEach((el) => { if (el) { el.style.transition = 'none'; el.style.transform = 'translateY(0)'; } });
    [q('eyebrow'), q('foot')].forEach((el) => { if (el) { el.style.opacity = '1'; el.style.transform = 'none'; } });
  }, 2400);
}

function count(el) {
  if (el._d) return;
  el._d = true;
  const target = parseFloat(el.getAttribute('data-count'));
  if (!target) return;
  const suffix = el.getAttribute('data-suffix') || '';
  const t0 = performance.now(), dur = 1600;
  const step = (t) => {
    const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * e) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

let io, revealTimer;
export function reveal() {
  if (io) io.disconnect();
  requestAnimationFrame(() => {
    const els = Array.from(document.querySelectorAll('[data-fade]'));
    els.forEach((el) => {
      if (el.dataset.mxShown) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity .9s cubic-bezier(.2,.8,.2,1), transform 1s cubic-bezier(.2,.8,.2,1)';
    });
    io = new IntersectionObserver(
      (ent) => {
        ent.forEach((e, i) => {
          if (!e.isIntersecting) return;
          // A block taller than the viewport can never reach the 12% ratio, so
          // long API content (e.g. /app-development) reveals on first contact.
          const tall = e.boundingClientRect.height > window.innerHeight * 0.9;
          if (e.intersectionRatio < 0.12 && !tall) return;
          const el = e.target;
          el.dataset.mxShown = '1';
          el.style.transitionDelay = i * 80 + 'ms';
          el.style.opacity = '1';
          el.style.transform = 'none';
          const n = el.querySelector('[data-count]');
          if (n) count(n);
          io.unobserve(el);
        });
      },
      { threshold: [0, 0.12], rootMargin: '0px 0px -6% 0px' }
    );
    els.forEach((el) => { if (!el.dataset.mxShown) io.observe(el); });
    clearTimeout(revealTimer);
    revealTimer = setTimeout(() => {
      els.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 1.15) {
          el.style.opacity = '1';
          el.style.transform = 'none';
        }
      });
    }, 2000);
  });
}

// ---- GSAP scroll scenes -------------------------------------------------

let gsapRef = null, STRef = null, pinTween = null, anchorNode = null, domTick = null, paused = false;

function teardownScene(track) {
  if (pinTween) {
    if (pinTween.scrollTrigger) pinTween.scrollTrigger.kill(true);
    pinTween.kill();
    pinTween = null;
  }
  if (STRef) STRef.getAll().forEach((t) => t.kill(true));
  document.querySelectorAll('[data-row],[data-line]').forEach((el) => { el.style.opacity = ''; el.style.transform = ''; });
  const tr = track || document.querySelector('[data-track]');
  if (tr) tr.style.transform = '';
}

function buildScene() {
  const gsap = gsapRef, ST = STRef;
  if (!gsap || !ST || reduced()) return;

  gsap.utils.toArray('[data-line]').forEach((el) => {
    gsap.fromTo(el, { yPercent: 112 }, { yPercent: 0, duration: 1.15, ease: 'expo.out', immediateRender: false,
      scrollTrigger: { trigger: el, start: 'top 94%', once: true } });
  });

  gsap.utils.toArray('[data-row]').forEach((el) => {
    gsap.fromTo(el, { xPercent: -3, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 0.8, ease: 'power3.out', immediateRender: false,
      scrollTrigger: { trigger: el, start: 'top 96%', once: true } });
  });

  const pin = document.querySelector('#work');
  const track = pin ? pin.querySelector('[data-track]') : null;
  if (pin && track && window.innerWidth > 900) {
    const dist = () => Math.max(0, track.scrollWidth - window.innerWidth + 60);
    pinTween = gsap.to(track, { x: () => -dist(), ease: 'none',
      scrollTrigger: { trigger: pin, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1 } });
  }

  const line = document.querySelector('[data-progress-line]');
  if (line && line.parentElement) {
    gsap.to(line, { height: '100%', ease: 'none',
      scrollTrigger: { trigger: line.parentElement, start: 'top 72%', end: 'bottom 70%', scrub: 0.6 } });
  }

  ST.create({ trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: true,
    onUpdate: (self) => { fx.stageTarget = self.progress * 4; } });

  const cta = document.querySelector('[data-cta]');
  if (cta) {
    ST.create({ trigger: cta, start: 'top 80%', end: 'bottom bottom',
      onUpdate: (self) => { fx.focus = self.progress; }, onLeaveBack: () => { fx.focus = 0; } });
  }

  ST.refresh();
  setTimeout(() => ST && ST.refresh(), 700);
}

// Called before a route change so pinned sections (which GSAP wraps in a
// spacer element) are restored before React unmounts them.
export function killScene() {
  if (!STRef) return;
  paused = true;
  teardownScene();
  anchorNode = null;
}

export function syncScene(force) {
  if (force) paused = false;
  if (!gsapRef || !STRef || paused) return;
  const anchor = document.querySelector('#work') || document.querySelector('main');
  const stale = STRef.getAll().some((t) => t.trigger && !document.body.contains(t.trigger));
  const changed = anchor !== anchorNode;
  if (!force && !stale && !changed) return;
  anchorNode = anchor;
  fx.focus = 0;
  teardownScene();
  buildScene();
}

export async function initGsap() {
  const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
  gsap.registerPlugin(ScrollTrigger);
  gsapRef = gsap;
  STRef = ScrollTrigger;
  window.__mxST = ScrollTrigger;
  syncScene(true);
  if (!domTick) domTick = setInterval(() => syncScene(), 400);
  return ScrollTrigger;
}

// ---- Lenis ----------------------------------------------------------------

let lenis = null;
export async function initLenis() {
  if (reduced() || lenis) return lenis;
  const mod = await import('@studio-freight/lenis');
  const L = mod.default || mod.Lenis || mod;
  lenis = new L({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
  const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
  if (STRef) { lenis.on('scroll', STRef.update); STRef.refresh(); }
  return lenis;
}

// Keeps wheel/touch scrolling inside an element (dropdown lists, dialogs)
// instead of letting Lenis turn it into page scroll. Returns a cleanup function.
export function isolateScroll(el) {
  if (!el) return () => {};
  const stop = (e) => e.stopPropagation();
  el.addEventListener('wheel', stop, { passive: true });
  el.addEventListener('touchmove', stop, { passive: true });
  return () => {
    el.removeEventListener('wheel', stop);
    el.removeEventListener('touchmove', stop);
  };
}

export function scrollTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
  else window.scrollTo(0, 0);
}

export function scrollToEl(sel) {
  const el = typeof sel === 'string' ? document.querySelector(sel) : sel;
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -80 });
  else el.scrollIntoView({ behavior: 'smooth' });
}

// ---- three.js particle field --------------------------------------------

function shape(kind, i, n) {
  const g = 2.399963;
  if (kind === 0) {
    const y = 1 - (i / (n - 1)) * 2, r = Math.sqrt(Math.max(0, 1 - y * y)), th = g * i;
    const k = 6.6 * (0.82 + 0.18 * Math.sin(i * 0.7));
    return [Math.cos(th) * r * k, y * k, Math.sin(th) * r * k];
  }
  if (kind === 1) {
    const s = Math.ceil(Math.cbrt(n)), x = i % s, y = Math.floor(i / s) % s, z = Math.floor(i / (s * s));
    const c = (s - 1) / 2, u = 9.2 / s;
    return [(x - c) * u, (y - c) * u, (z - c) * u];
  }
  if (kind === 2) {
    const p = 2, q = 3, t = (i / n) * Math.PI * 2 * q;
    const rr = 3.4 + 1.5 * Math.cos((p * t) / q * 3);
    const j = (i % 9) * 0.11 - 0.44;
    return [(rr + j) * Math.cos(t), (1.5 + j) * Math.sin((p * t) / q * 3), (rr + j) * Math.sin(t)];
  }
  if (kind === 3) {
    const s = Math.ceil(Math.sqrt(n)), x = i % s, z = Math.floor(i / s), c = (s - 1) / 2, u = 19 / s;
    const dx = (x - c) * u, dz = (z - c) * u;
    return [dx, Math.sin(Math.sqrt(dx * dx + dz * dz) * 0.55) * 1.15 - 1.4, dz];
  }
  const a = g * i, rr = 6.4 * Math.pow(i / n, 0.62);
  return [Math.cos(a) * rr * 0.5, (i / n - 0.5) * 7.6, Math.sin(a) * rr * 0.5];
}

export async function initThree(cv, particleCount = 8000) {
  if (!cv) return () => {};
  const THREE = await import('three');
  if (!cv.clientWidth) await new Promise((r) => setTimeout(r, 120));
  const mobile = window.innerWidth < 760;
  const N = Math.max(900, Math.min(12000, mobile ? 2600 : particleCount));
  const W = () => cv.clientWidth || 1, H = () => cv.clientHeight || 1;

  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(48, W() / H(), 0.1, 200);
  cam.position.set(0, 0, 20);
  let rnd;
  try {
    rnd = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: !mobile, powerPreference: 'high-performance' });
  } catch (e) {
    return () => {};
  }
  rnd.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.5 : 2));
  rnd.setSize(W(), H(), false);

  const accent = new THREE.Color(ACCENT);
  const ivory = new THREE.Color('#F4F1EA');

  const targets = [0, 1, 2, 3, 4].map((k) => {
    const a = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) { const p = shape(k, i, N); a[i * 3] = p[0]; a[i * 3 + 1] = p[1]; a[i * 3 + 2] = p[2]; }
    return a;
  });

  const pos = new Float32Array(N * 3), col = new Float32Array(N * 3), seed = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    const r = 34;
    pos[i * 3] = (Math.random() - 0.5) * r; pos[i * 3 + 1] = (Math.random() - 0.5) * r; pos[i * 3 + 2] = (Math.random() - 0.5) * r;
    const c = i % 11 === 0 ? accent : ivory;
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    seed[i] = Math.random();
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({
    size: mobile ? 0.075 : 0.055, vertexColors: true, transparent: true, opacity: 0.72,
    sizeAttenuation: true, blending: THREE.AdditiveBlending, depthWrite: false,
  }));
  const group = new THREE.Group();
  group.add(pts);

  const LN = Math.min(420, Math.floor(N / 14));
  const lgeo = new THREE.BufferGeometry();
  const lpos = new Float32Array(LN * 2 * 3);
  lgeo.setAttribute('position', new THREE.BufferAttribute(lpos, 3));
  const lines = new THREE.LineSegments(lgeo, new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.14, blending: THREE.AdditiveBlending, depthWrite: false }));
  group.add(lines);
  scene.add(group);

  const clock = new THREE.Clock();
  let assemble = 0, lskip = false, raf;

  const onResize = () => { if (!cv.clientWidth) return; cam.aspect = W() / H(); cam.updateProjectionMatrix(); rnd.setSize(W(), H(), false); };
  window.addEventListener('resize', onResize);
  let ro;
  if (window.ResizeObserver) { ro = new ResizeObserver(onResize); ro.observe(cv); }

  const P = geo.attributes.position.array;
  const loop = () => {
    const t = clock.getElapsedTime();
    assemble = Math.min(1, assemble + 0.0075);
    const ease = 1 - Math.pow(1 - assemble, 3);

    fx.stage += (fx.stageTarget - fx.stage) * 0.045;
    const s = Math.max(0, Math.min(3.999, fx.stage));
    const i0 = Math.floor(s), i1 = Math.min(4, i0 + 1), mix = s - i0;
    const A = targets[i0], B = targets[i1];
    const focus = fx.focus || 0;

    for (let i = 0; i < N; i++) {
      const ix = i * 3;
      const tx = A[ix] + (B[ix] - A[ix]) * mix;
      const ty = A[ix + 1] + (B[ix + 1] - A[ix + 1]) * mix;
      const tz = A[ix + 2] + (B[ix + 2] - A[ix + 2]) * mix;
      const bo = 0.34 * (0.4 + seed[i]);
      const wx = tx + Math.sin(t * 0.55 + seed[i] * 9.4) * bo;
      const wy = ty + Math.cos(t * 0.47 + seed[i] * 7.1) * bo;
      const wz = tz + Math.sin(t * 0.51 + seed[i] * 5.3) * bo;
      const cf = 1 - focus * 0.72;
      const k = 0.055 + ease * 0.055;
      P[ix] += (wx * cf - P[ix]) * k;
      P[ix + 1] += (wy * cf - P[ix + 1]) * k;
      P[ix + 2] += (wz * cf - P[ix + 2]) * k;
    }
    geo.attributes.position.needsUpdate = true;

    if (!lskip) {
      for (let j = 0; j < LN; j++) {
        const a = (j * 13) % N, b = (j * 13 + 7) % N;
        const o = j * 6;
        lpos[o] = P[a * 3]; lpos[o + 1] = P[a * 3 + 1]; lpos[o + 2] = P[a * 3 + 2];
        lpos[o + 3] = P[b * 3]; lpos[o + 4] = P[b * 3 + 1]; lpos[o + 5] = P[b * 3 + 2];
      }
      lgeo.attributes.position.needsUpdate = true;
    }
    lskip = !lskip;
    lines.material.opacity = 0.16 * (1 - Math.min(1, s / 2.2)) * ease;

    const mx = fx.m.x / window.innerWidth - 0.5 || 0;
    const my = fx.m.y / window.innerHeight - 0.5 || 0;
    fx.tilt.x += (my * 0.34 - fx.tilt.x) * 0.04;
    fx.tilt.y += (mx * 0.5 - fx.tilt.y) * 0.04;
    group.rotation.x = fx.tilt.x;
    group.rotation.y = t * 0.055 + fx.tilt.y;
    pts.material.opacity = (0.28 + 0.46 * ease) * (1 - focus * 0.15);
    cam.position.z = 20 - ease * 2.2 - focus * 3.4;

    rnd.render(scene, cam);
    raf = requestAnimationFrame(loop);
  };
  loop();

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', onResize);
    if (ro) ro.disconnect();
    rnd.dispose();
  };
}
