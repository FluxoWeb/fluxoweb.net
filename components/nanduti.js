import { useEffect, useRef } from "react";

// Ñandutí de circuitos: la "tela de araña" guaraní tejida con las trazas del logo.
// Rayos + anillos festoneados, extensiones de circuito a 45° con terminales,
// tejido hilo por hilo, pulsos verdes que encienden terminales y tensión con el cursor.

const GREEN = "39, 212, 107";
const INK = "244, 244, 241";

const SPOKES = 32;
const RINGS = 9;

const lerp = (a, b, t) => a + (b - a) * t;
const clamp01 = (t) => Math.max(0, Math.min(1, t));
const easeOut = (t) => 1 - Math.pow(1 - clamp01(t), 3);

function layout(w, h, variant) {
  const mobile = w < 768;
  if (variant === "quiet") {
    return { cx: w * 0.5, cy: h * 0.5, R: Math.max(w, h) * 0.42 };
  }
  // Páginas internas: la red asoma desde el borde derecho.
  if (variant === "edge") {
    return mobile
      ? { cx: w * 0.92, cy: h * 0.18, R: Math.min(w * 0.7, h * 0.5) }
      : { cx: w * 0.86, cy: h * 0.5, R: Math.min(h * 0.62, w * 0.3) };
  }
  if (mobile) return { cx: w * 0.5, cy: h * 0.3, R: Math.min(w * 0.36, h * 0.24) };
  return { cx: w * 0.68, cy: h * 0.48, R: Math.min(h * 0.34, w * 0.27) };
}

function buildWeb(w, h, variant, avoid = []) {
  const { cx, cy, R } = layout(w, h, variant);
  // Las terminales tienen que verse: quedan dentro del marco, debajo de la navbar.
  const box = { x0: 32, y0: variant === "quiet" ? 32 : 96, x1: w - 32, y1: h - 32 };
  const inBox = (p) => p.x >= box.x0 && p.x <= box.x1 && p.y >= box.y0 && p.y <= box.y1;
  // Zonas de texto (data-web-avoid): ninguna terminal ni traza puede caer sobre ellas.
  const onText = (p) => avoid.some((r) => p.x >= r.x0 && p.x <= r.x1 && p.y >= r.y0 && p.y <= r.y1);
  const inside = (p) => inBox(p) && !onText(p);
  const rot = -Math.PI / 2 + Math.PI / SPOKES;
  const angles = Array.from({ length: SPOKES }, (_, i) => rot + (i / SPOKES) * Math.PI * 2);
  const radii = Array.from({ length: RINGS }, (_, k) => R * Math.pow((k + 1) / RINGS, 1.12));

  // Intersecciones (k = anillo, i = rayo), con desplazamiento animado por el cursor.
  const pts = radii.map((r) =>
    angles.map((a) => ({ x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r, ox: 0, oy: 0 }))
  );

  // Extensiones de circuito: cada 4 rayos sale una traza que dobla a 45° y termina en una terminal.
  const extensions = [];
  angles.forEach((a, i) => {
    if (i % 4 !== 1 && i % 4 !== 3) return;
    const turn = (i % 8 < 4 ? 1 : -1) * (Math.PI / 4);
    const l1 = R * (i % 4 === 1 ? 0.14 : 0.24);
    const l2 = R * (i % 4 === 1 ? 0.2 : 0.12);
    const outer = pts[RINGS - 1][i];
    // Acorta la traza hasta que la terminal entre en el marco; si ni así entra, no se dibuja.
    for (let s = 1; s >= 0.35; s -= 0.05) {
      const p1 = { x: outer.x + Math.cos(a) * l1 * s, y: outer.y + Math.sin(a) * l1 * s };
      const p2 = { x: p1.x + Math.cos(a + turn) * l2 * s, y: p1.y + Math.sin(a + turn) * l2 * s };
      const mid = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
      if (inside(p2) && inside(p1) && inside(mid)) {
        extensions.push({ i, p1, p2, lit: 0 });
        break;
      }
    }
  });

  // Nodos de la red (terminales en anillos intermedios), estilo logo.
  const nodes = [];
  [2, 5, 7].forEach((k) => {
    for (let i = k % 2; i < SPOKES; i += 4) nodes.push({ k, i, lit: 0 });
  });

  return { cx, cy, R, angles, radii, pts, extensions, nodes, pulses: [], variant };
}

// Segmento de anillo: recta, festón hacia afuera o hacia adentro según el anillo (patrón ñandutí).
function ringControl(web, k, i) {
  const a = web.pts[k][i];
  const b = web.pts[k][(i + 1) % SPOKES];
  const mx = (a.x + a.ox + b.x + b.ox) / 2;
  const my = (a.y + a.oy + b.y + b.oy) / 2;
  const style = k % 3;
  if (style === 0) return { a, b, cx: mx, cy: my };
  const dx = mx - web.cx;
  const dy = my - web.cy;
  const len = Math.hypot(dx, dy) || 1;
  const seg = Math.hypot(b.x - a.x, b.y - a.y);
  const bulge = (style === 1 ? 0.32 : -0.22) * seg;
  return { a, b, cx: mx + (dx / len) * bulge, cy: my + (dy / len) * bulge };
}

function drawQuad(ctx, x0, y0, cx, cy, x1, y1, t) {
  // Sub-curva [0, t] por de Casteljau para el tejido progresivo.
  const q0x = lerp(x0, cx, t);
  const q0y = lerp(y0, cy, t);
  const q1x = lerp(cx, x1, t);
  const q1y = lerp(cy, y1, t);
  ctx.moveTo(x0, y0);
  ctx.quadraticCurveTo(q0x, q0y, lerp(q0x, q1x, t), lerp(q0y, q1y, t));
}

function spawnPulse(web) {
  const ext = web.extensions[(Math.random() * web.extensions.length) | 0];
  // Recorrido: centro -> rayo -> extensión -> terminal.
  const path = [{ x: web.cx, y: web.cy }];
  for (let k = 0; k < RINGS; k++) path.push(web.pts[k][ext.i]);
  path.push(ext.p1, ext.p2);
  const lengths = [];
  let total = 0;
  for (let s = 1; s < path.length; s++) {
    const l = Math.hypot(path[s].x - path[s - 1].x, path[s].y - path[s - 1].y);
    lengths.push(l);
    total += l;
  }
  web.pulses.push({ path, lengths, total, d: 0, speed: 0.22 + Math.random() * 0.16, ext });
}

function pointAt(pulse, d) {
  let acc = 0;
  for (let s = 0; s < pulse.lengths.length; s++) {
    const l = pulse.lengths[s];
    if (acc + l >= d) {
      const t = (d - acc) / l;
      const a = pulse.path[s];
      const b = pulse.path[s + 1];
      return { x: lerp(a.x + (a.ox || 0), b.x + (b.ox || 0), t), y: lerp(a.y + (a.oy || 0), b.y + (b.oy || 0), t) };
    }
    acc += l;
  }
  const end = pulse.path[pulse.path.length - 1];
  return { x: end.x, y: end.y };
}

function render(ctx, web, w, h, elapsed, opts) {
  const { reduced } = opts;
  const T = reduced ? 1e9 : elapsed;
  const quiet = web.variant === "quiet";
  const base = quiet ? 0.85 : 1;
  ctx.clearRect(0, 0, w, h);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // Rayos: crecen desde el centro (0–1100 ms).
  ctx.lineWidth = 1;
  ctx.strokeStyle = `rgba(${INK}, ${0.14 * base})`;
  ctx.beginPath();
  for (let i = 0; i < SPOKES; i++) {
    const p = easeOut((T - i * 18) / 900);
    if (p <= 0) continue;
    const reach = p * RINGS;
    let prev = { x: web.cx, y: web.cy, ox: 0, oy: 0 };
    for (let k = 0; k < RINGS; k++) {
      const q = web.pts[k][i];
      const local = clamp01(reach - k);
      if (local <= 0) break;
      ctx.moveTo(prev.x + prev.ox, prev.y + prev.oy);
      ctx.lineTo(lerp(prev.x + prev.ox, q.x + q.ox, local), lerp(prev.y + prev.oy, q.y + q.oy, local));
      prev = q;
    }
  }
  ctx.stroke();

  // Anillos: se tejen uno por uno alrededor del centro (600–2700 ms).
  for (let k = 0; k < RINGS; k++) {
    const start = 600 + k * 170;
    const progress = clamp01((T - start) / 1300) * SPOKES;
    if (progress <= 0) continue;
    const fade = 1 - (k / RINGS) * 0.35;
    ctx.strokeStyle = `rgba(${INK}, ${(k % 3 === 0 ? 0.3 : 0.2) * fade * base})`;
    ctx.lineWidth = k % 3 === 0 ? 1.1 : 0.9;
    ctx.beginPath();
    for (let i = 0; i < Math.ceil(progress); i++) {
      const t = Math.min(1, progress - i);
      const c = ringControl(web, k, i);
      drawQuad(ctx, c.a.x + c.a.ox, c.a.y + c.a.oy, c.cx, c.cy, c.b.x + c.b.ox, c.b.y + c.b.oy, t);
    }
    ctx.stroke();
  }

  // Extensiones de circuito (1900–2800 ms).
  web.extensions.forEach((e, n) => {
    const p = easeOut((T - 1900 - n * 40) / 700);
    if (p <= 0) return;
    const o = web.pts[RINGS - 1][e.i];
    const ox = o.x + o.ox;
    const oy = o.y + o.oy;
    ctx.strokeStyle = `rgba(${INK}, ${0.32 * base})`;
    ctx.lineWidth = 1.1;
    ctx.beginPath();
    ctx.moveTo(ox, oy);
    const first = clamp01(p * 2);
    ctx.lineTo(lerp(ox, e.p1.x, first), lerp(oy, e.p1.y, first));
    if (p > 0.5) {
      const second = clamp01(p * 2 - 1);
      ctx.lineTo(lerp(e.p1.x, e.p2.x, second), lerp(e.p1.y, e.p2.y, second));
    }
    ctx.stroke();
    if (p >= 1) {
      e.lit = Math.max(0, e.lit - 0.012);
      ctx.beginPath();
      ctx.arc(e.p2.x, e.p2.y, 4.2, 0, Math.PI * 2);
      if (e.lit > 0) {
        ctx.fillStyle = `rgba(${GREEN}, ${e.lit})`;
        ctx.fill();
      }
      ctx.strokeStyle = e.lit > 0.05 ? `rgba(${GREEN}, ${0.5 + e.lit * 0.5})` : `rgba(${INK}, ${0.55 * base})`;
      ctx.lineWidth = 1.4;
      ctx.stroke();
    }
  });

  // Nodos en los anillos intermedios.
  const nodesIn = clamp01((T - 2200) / 600);
  if (nodesIn > 0) {
    web.nodes.forEach((n) => {
      const q = web.pts[n.k][n.i];
      n.lit = Math.max(0, n.lit - 0.015);
      ctx.beginPath();
      ctx.arc(q.x + q.ox, q.y + q.oy, 2.6, 0, Math.PI * 2);
      ctx.fillStyle = "#1D1D1D";
      ctx.fill();
      ctx.strokeStyle = n.lit > 0.05 ? `rgba(${GREEN}, ${0.6 + n.lit * 0.4})` : `rgba(${INK}, ${0.4 * nodesIn * base})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    });
  }

  // Centro: roseta del ñandutí.
  const core = easeOut(T / 700);
  ctx.beginPath();
  ctx.arc(web.cx, web.cy, web.radii[0] * 0.55 * core, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(${INK}, ${0.5 * base})`;
  ctx.lineWidth = 1.2;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(web.cx, web.cy, 3.2 * core, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(${GREEN}, 1)`;
  ctx.fill();

  // Pulsos: viajan del centro a una terminal y la encienden.
  if (!reduced) {
    web.pulses = web.pulses.filter((pl) => {
      pl.d += pl.speed * opts.dt;
      const head = pointAt(pl, pl.d);
      const tail = pointAt(pl, Math.max(0, pl.d - 42));
      ctx.beginPath();
      ctx.moveTo(tail.x, tail.y);
      ctx.lineTo(head.x, head.y);
      ctx.strokeStyle = `rgba(${GREEN}, 0.9)`;
      ctx.lineWidth = 1.6;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(head.x, head.y, 2.2, 0, Math.PI * 2);
      ctx.fillStyle = `rgb(${GREEN})`;
      ctx.fill();
      // Enciende los nodos por los que pasa.
      web.nodes.forEach((n) => {
        if (n.i === pl.ext.i) {
          const q = web.pts[n.k][n.i];
          if (Math.hypot(q.x - head.x, q.y - head.y) < 6) n.lit = 1;
        }
      });
      if (pl.d >= pl.total) {
        pl.ext.lit = 1;
        return false;
      }
      return true;
    });
  }
}

export default function Nanduti({ className = "", variant = "hero" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduced = reducedQuery.matches;
    let w = 0;
    let h = 0;
    let web = null;
    let raf = 0;
    let visible = true;
    let startedAt = performance.now();
    let last = startedAt;
    let lastSpawn = 0;
    const pointer = { x: -9999, y: -9999, active: false };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // En escritorio el texto se lee sobre el velo; en móvil la red es fondo de todo el panel.
      const avoid =
        w >= 768
          ? [...(canvas.parentElement?.querySelectorAll("[data-web-avoid]") || [])].map((el) => {
              const r = el.getBoundingClientRect();
              return { x0: r.left - rect.left - 24, y0: r.top - rect.top - 24, x1: r.right - rect.left + 24, y1: r.bottom - rect.top + 24 };
            })
          : [];
      web = buildWeb(w, h, variant, avoid);
      if (reduced) render(ctx, web, w, h, 0, { reduced: true, dt: 0 });
    };

    const tick = (now) => {
      raf = 0;
      if (!visible || reduced) return;
      const dt = Math.min(48, now - last);
      last = now;
      const elapsed = now - startedAt;

      // Tensión: los hilos cercanos al cursor se tensan hacia él y vuelven con resorte.
      const radius = 150;
      for (let k = 0; k < RINGS; k++) {
        for (let i = 0; i < SPOKES; i++) {
          const p = web.pts[k][i];
          let tx = 0;
          let ty = 0;
          if (pointer.active) {
            const dx = pointer.x - p.x;
            const dy = pointer.y - p.y;
            const d = Math.hypot(dx, dy);
            if (d < radius && d > 0.001) {
              const f = Math.pow(1 - d / radius, 2) * 16;
              tx = (dx / d) * f;
              ty = (dy / d) * f;
            }
          }
          p.ox += (tx - p.ox) * 0.12;
          p.oy += (ty - p.oy) * 0.12;
        }
      }

      if (elapsed > 2600 && now - lastSpawn > 420 && web.pulses.length < 9 && web.extensions.length) {
        spawnPulse(web);
        lastSpawn = now;
      }

      render(ctx, web, w, h, elapsed, { reduced: false, dt });
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (!raf && visible && !reduced) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
    };
    const onReduced = (e) => {
      reduced = e.matches;
      if (reduced) render(ctx, web, w, h, 0, { reduced: true, dt: 0 });
      else {
        startedAt = performance.now() - 3000;
        start();
      }
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    // Las zonas de texto cambian cuando carga la fuente: recalcular una vez.
    document.fonts?.ready.then(() => canvas.isConnected && resize());

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && document.visibilityState === "visible";
      start();
    });
    io.observe(canvas);
    const onVisibility = () => {
      visible = document.visibilityState === "visible";
      start();
    };

    const host = canvas.parentElement;
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);
    reducedQuery.addEventListener("change", onReduced);
    start();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      reducedQuery.removeEventListener("change", onReduced);
    };
  }, [variant]);

  return <canvas ref={canvasRef} aria-hidden="true" className={`absolute inset-0 h-full w-full ${className}`} />;
}
