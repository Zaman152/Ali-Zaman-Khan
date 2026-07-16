"use client";

import { useEffect, useRef } from "react";

/**
 * Site-wide falling petals & autumn leaves — a canvas particle system
 * with pseudo-3D depth of field: near particles are larger, faster and
 * more opaque; far ones drift small and faint. Each particle tumbles on
 * a simulated third axis (scaleX flip), rides layered sine-wave wind
 * gusts, and swirls away from the cursor.
 *
 * Fixed behind all content (content sits at z-10), pointer-events: none.
 * Skipped entirely under prefers-reduced-motion; paused on hidden tabs.
 */

type Kind = "petal" | "leaf" | "fleck";

interface Particle {
  x: number;
  y: number;
  z: number; // depth 0.35 (far) → 1.5 (near)
  size: number;
  rot: number;
  rotSpeed: number;
  flip: number;
  flipSpeed: number;
  swayPhase: number;
  swayAmp: number;
  vx: number;
  vy: number;
  color: string;
  backColor: string; // darker underside shown mid-flip
  kind: Kind;
}

function darken(hex: string, f: number): string {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.round(((n >> 16) & 255) * f);
  const g = Math.round(((n >> 8) & 255) * f);
  const b = Math.round((n & 255) * f);
  return `rgb(${r},${g},${b})`;
}

const PETAL_COLORS = ["#C08E8E", "#B87E76", "#9B4D3A"];
const LEAF_COLORS = ["#B0793F", "#8F5B33", "#A66A2E", "#9B4D3A"];
const FLECK_COLOR = "#5C4A3A";

function makeParticle(w: number, h: number, spawnAnywhere: boolean): Particle {
  const roll = Math.random();
  const kind: Kind = roll < 0.45 ? "petal" : roll < 0.9 ? "leaf" : "fleck";
  const z = 0.35 + Math.random() * 1.15;
  const palette = kind === "petal" ? PETAL_COLORS : LEAF_COLORS;
  const color =
    kind === "fleck"
      ? FLECK_COLOR
      : palette[Math.floor(Math.random() * palette.length)];
  const isLeaf = kind === "leaf";
  return {
    x: Math.random() * w,
    y: spawnAnywhere ? Math.random() * h : -30 - Math.random() * h * 0.15,
    z,
    size:
      kind === "fleck"
        ? 1 + Math.random() * 1.5
        : isLeaf
          ? 9 + Math.random() * 5
          : 5.5 + Math.random() * 4,
    rot: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * (isLeaf ? 0.012 : 0.02),
    flip: Math.random() * Math.PI * 2,
    // leaves tumble faster so the front/back flip is unmistakable
    flipSpeed: isLeaf ? 0.02 + Math.random() * 0.03 : 0.008 + Math.random() * 0.02,
    swayPhase: Math.random() * Math.PI * 2,
    swayAmp: isLeaf ? 0.8 + Math.random() * 1.0 : 0.3 + Math.random() * 0.7,
    vx: 0,
    vy: 0,
    color,
    backColor: darken(color === FLECK_COLOR ? "#5C4A3A" : color, 0.62),
    kind,
  };
}

function drawPetal(ctx: CanvasRenderingContext2D, s: number) {
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.bezierCurveTo(s * 0.75, -s * 0.55, s * 0.6, s * 0.5, 0, s);
  ctx.bezierCurveTo(-s * 0.6, s * 0.5, -s * 0.75, -s * 0.55, 0, -s);
  ctx.fill();
}

function drawLeaf(ctx: CanvasRenderingContext2D, s: number) {
  // Broad ovate leaf — wide enough that the 3D flip reads clearly
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.bezierCurveTo(s * 0.55, -s * 0.7, s * 0.95, s * 0.1, 0, s);
  ctx.bezierCurveTo(-s * 0.95, s * 0.1, -s * 0.55, -s * 0.7, 0, -s);
  ctx.fill();
  // short stem
  ctx.beginPath();
  ctx.moveTo(0, s);
  ctx.quadraticCurveTo(s * 0.12, s * 1.18, 0, s * 1.35);
  ctx.lineWidth = Math.max(0.5, s * 0.08);
  ctx.strokeStyle = ctx.fillStyle as string;
  ctx.stroke();
  // midrib vein — makes the surface (and its flip) legible
  ctx.beginPath();
  ctx.moveTo(0, -s * 0.7);
  ctx.lineTo(0, s * 0.75);
  ctx.lineWidth = Math.max(0.4, s * 0.06);
  ctx.strokeStyle = "rgba(44,36,32,0.35)";
  ctx.stroke();
}

export default function PetalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let raf = 0;
    let running = true;
    let last = performance.now();
    const mouse = { x: -9999, y: -9999 };

    const targetCount = () =>
      Math.min(42, Math.round((w * h) / (w < 768 ? 60000 : 42000)));

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = targetCount();
      while (particles.length < n) particles.push(makeParticle(w, h, true));
      if (particles.length > n) particles.length = n;
    };

    const onPointer = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const tick = (now: number) => {
      if (!running) return;
      const dt = Math.min(2.5, (now - last) / 16.667); // frames of drift
      last = now;
      const t = now;

      // layered sine wind with slow gusts
      const wind =
        0.35 +
        0.45 * Math.sin(t * 0.00035) +
        0.6 * Math.max(0, Math.sin(t * 0.00011) * Math.sin(t * 0.00007 + 2));

      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        // cursor swirl — push nearby particles away with a sideways bias
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 130 * 130 && d2 > 1) {
          const d = Math.sqrt(d2);
          const f = ((130 - d) / 130) * 0.55 * p.z;
          p.vx += (dx / d) * f - (dy / d) * f * 0.6;
          p.vy += (dy / d) * f * 0.4;
        }
        p.vx *= 0.94;
        p.vy *= 0.94;

        p.swayPhase += 0.02 * dt;
        p.rot += p.rotSpeed * dt;
        p.flip += p.flipSpeed * dt;

        const fall = p.kind === "fleck" ? 0.25 : 0.42;
        p.x +=
          (wind * p.z + Math.sin(p.swayPhase) * p.swayAmp * 0.6 + p.vx) * dt;
        p.y +=
          ((fall + p.z * 0.55) * (0.8 + 0.2 * Math.sin(p.swayPhase * 0.5)) +
            p.vy) *
          dt;

        if (p.y > h + 40 || p.x > w + 60) {
          Object.assign(p, makeParticle(w, h, false));
          if (Math.random() < 0.35) {
            // some re-enter from the left edge mid-screen, riding the wind
            p.x = -40;
            p.y = Math.random() * h * 0.7;
          }
        }

        // signed flip: negative scale shows the mirrored, darker underside
        const flip = Math.cos(p.flip);
        const depthAlpha = 0.2 + (p.z - 0.35) * 0.45;
        const flipShade = 0.6 + 0.4 * Math.abs(flip);
        ctx.globalAlpha = Math.min(0.8, depthAlpha * flipShade);
        ctx.fillStyle = flip < 0 && p.kind !== "fleck" ? p.backColor : p.color;

        ctx.save();
        ctx.translate(p.x, p.y);
        if (p.kind === "fleck") {
          ctx.beginPath();
          ctx.arc(0, 0, p.size * p.z, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // leaves rock side to side as they fall; petals spin freely
          const rock = p.kind === "leaf" ? Math.sin(p.swayPhase) * 0.5 : 0;
          ctx.rotate(p.rot + rock);
          const sf = Math.abs(flip) < 0.12 ? (flip < 0 ? -0.12 : 0.12) : flip;
          ctx.scale(sf, 1);
          const s = p.size * p.z;
          if (p.kind === "petal") drawPetal(ctx, s);
          else drawLeaf(ctx, s);
        }
        ctx.restore();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
