// Motion shared by the "final-website" design pages: scroll reveals, the
// parallax backdrops and the process progress bar. The design ran these from
// each page's componentDidMount; here one hook does it for every page.
import { useEffect } from 'react';

export function useReveal(deps = []) {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let io;
    const id = requestAnimationFrame(() => {
      const els = Array.from(document.querySelectorAll('[data-rv]')).filter((el) => !el._rv);
      els.forEach((el) => {
        el._rv = 1;
        el.style.opacity = '0';
        el.style.transform = 'translateY(36px)';
        el.style.transition = 'opacity 1s cubic-bezier(.2,.8,.2,1), transform 1.1s cubic-bezier(.2,.8,.2,1)';
      });
      io = new IntersectionObserver(
        (es) => es.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.style.opacity = '1';
          e.target.style.transform = 'none';
          io.unobserve(e.target);
        }),
        { threshold: 0.12 }
      );
      els.forEach((el) => io.observe(el));
    });
    return () => { cancelAnimationFrame(id); if (io) io.disconnect(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

// `[data-par]` backdrops drift against the scroll; `procRef`/`procBar` draw the
// process line.
export function useScrollFx(procRef, procBar) {
  useEffect(() => {
    const onScroll = () => {
      const r = procRef && procRef.current, b = procBar && procBar.current;
      if (r && b) {
        const k = r.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (window.innerHeight * 0.8 - k.top) / (k.height + window.innerHeight * 0.3)));
        b.style.width = p * 100 + '%';
      }
      document.querySelectorAll('[data-par]').forEach((el) => {
        const k = el.parentElement.getBoundingClientRect();
        el.style.transform = 'translate3d(0,' + k.top * -0.08 + 'px,0)';
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [procRef, procBar]);
}

// Count-up for `[data-count]` numbers.
export function useCountUp() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-count]'));
    if (!els.length) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { els.forEach((e) => { e.textContent = e.getAttribute('data-count'); }); return undefined; }
    els.forEach((e) => { e.textContent = '0'; });
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      const to = +e.target.getAttribute('data-count');
      const t0 = performance.now();
      const step = (t) => {
        const k = Math.min(1, (t - t0) / 1800);
        e.target.textContent = Math.round(to * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }), { threshold: 0.4 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

// The neural-network canvas behind AI pages (ported from the design's startAI).
export function aiCanvas(c) {
  const ctx = c.getContext('2d');
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  let W = 0, H = 0, nodes = [], links = [], pulses = [], mx = -9999, my = -9999, raf, ro;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const build = () => {
    const r = c.getBoundingClientRect();
    W = r.width; H = r.height;
    c.width = W * dpr; c.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const layers = W < 600 ? [4, 6, 6, 3] : [5, 8, 11, 11, 8, 4];
    nodes = []; links = [];
    layers.forEach((n, li) => {
      for (let i = 0; i < n; i++) {
        nodes.push({ l: li, x: W * (0.1 + (0.8 * li) / (layers.length - 1)), y: H * (0.14 + 0.72 * (n === 1 ? 0.5 : i / (n - 1))), p: Math.random() * 6.28 });
      }
    });
    nodes.forEach((a, ai) => nodes.forEach((b, bi) => { if (b.l === a.l + 1 && Math.random() < 0.55) links.push([ai, bi]); }));
  };
  build();
  ro = new ResizeObserver(build);
  ro.observe(c);
  const onMove = (e) => { const r = c.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; };
  window.addEventListener('mousemove', onMove, { passive: true });
  let t = 0;
  const maxL = () => Math.max.apply(null, nodes.map((n) => n.l));
  const draw = () => {
    raf = requestAnimationFrame(draw);
    t += 0.016;
    ctx.fillStyle = '#08070A';
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = 'rgba(244,241,234,.035)';
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 48) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 48) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    const pos = nodes.map((n) => {
      const dx = mx - n.x, dy = my - n.y, d = Math.hypot(dx, dy), f = d < 160 ? (160 - d) / 160 : 0;
      return [n.x + Math.sin(t + n.p) * 4 - dx * f * 0.08, n.y + Math.cos(t * 0.8 + n.p) * 4 - dy * f * 0.08, f];
    });
    links.forEach(([a, b]) => {
      const A = pos[a], B = pos[b], hot = Math.max(A[2], B[2]);
      ctx.strokeStyle = hot > 0 ? 'rgba(240,68,35,' + (0.15 + hot * 0.5) + ')' : 'rgba(244,241,234,.09)';
      ctx.beginPath(); ctx.moveTo(A[0], A[1]); ctx.lineTo(B[0], B[1]); ctx.stroke();
    });
    if (!reduce && Math.random() < 0.35 && links.length) {
      const L = links[(Math.random() * links.length) | 0];
      if (nodes[L[0]].l === 0 || Math.random() < 0.4) pulses.push({ L, k: 0 });
    }
    pulses = pulses.filter((p) => p.k <= 1);
    pulses.forEach((p) => {
      p.k += 0.022;
      const A = pos[p.L[0]], B = pos[p.L[1]];
      const x = A[0] + (B[0] - A[0]) * p.k, y = A[1] + (B[1] - A[1]) * p.k;
      ctx.fillStyle = '#F04423'; ctx.shadowColor = '#F04423'; ctx.shadowBlur = 12;
      ctx.beginPath(); ctx.arc(x, y, 2.4, 0, 6.28); ctx.fill();
      ctx.shadowBlur = 0;
      if (p.k > 1 && Math.random() < 0.7) {
        const nx = links.filter((l) => l[0] === p.L[1]);
        if (nx.length) pulses.push({ L: nx[(Math.random() * nx.length) | 0], k: 0 });
      }
    });
    const top = maxL();
    pos.forEach((P, i) => {
      const r = 3 + P[2] * 4 + (nodes[i].l === 0 || nodes[i].l === top ? 1.5 : 0);
      ctx.fillStyle = P[2] > 0.1 ? '#F04423' : '#F4F1EA';
      ctx.beginPath(); ctx.arc(P[0], P[1], r, 0, 6.28); ctx.fill();
    });
  };
  draw();
  return () => {
    cancelAnimationFrame(raf);
    if (ro) ro.disconnect();
    window.removeEventListener('mousemove', onMove);
  };
}

// The sticky "work" panels and the smooth scroll the long pages share
// (index, industries, work, company in the design). GSAP, ScrollTrigger and
// Lenis load in the browser only.
export function useGsapScene({ lenis: wantLenis = true, panels = true } = {}) {
  useEffect(() => {
    let dead = false, ctx, lenis, ticker, g;
    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
      if (dead) return;
      g = gsap;
      gsap.registerPlugin(ScrollTrigger);
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (wantLenis && !reduce) {
        try {
          const mod = await import('@studio-freight/lenis');
          const L = mod.default || mod.Lenis || mod;
          lenis = new L({ lerp: 0.09 });
          lenis.on('scroll', ScrollTrigger.update);
          ticker = (t) => lenis.raf(t * 1000);
          gsap.ticker.add(ticker);
          gsap.ticker.lagSmoothing(0);
        } catch (e) { /* smooth scroll is optional */ }
      }
      if (panels && !reduce) {
        ctx = gsap.context(() => {
          const list = Array.from(document.querySelectorAll('[data-panel]'));
          list.forEach((p, i) => {
            if (i === list.length - 1) return;
            const inner = p.querySelector('[data-pin]');
            if (!inner) return;
            gsap.to(inner, {
              scale: 0.9, opacity: 0.35, borderRadius: 18, ease: 'none',
              scrollTrigger: { trigger: list[i + 1], start: 'top bottom', end: 'top top', scrub: true },
            });
          });
          document.querySelectorAll('[data-panel] img').forEach((img) => {
            gsap.fromTo(img, { scale: 1.18 }, {
              scale: 1, ease: 'none',
              scrollTrigger: { trigger: img.closest('[data-panel]'), start: 'top bottom', end: 'top top', scrub: true },
            });
          });
        });
      }
      setTimeout(() => ScrollTrigger.refresh(), 600);
    })();
    return () => {
      dead = true;
      if (ctx) ctx.revert();
      if (lenis) { if (g && ticker) g.ticker.remove(ticker); lenis.destroy(); }
    };
  }, [wantLenis, panels]);
}
