"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Ensō — the single-breath brush circle. Draws itself when scrolled
 * into view; sits as a faint wash behind the contact section.
 */

const INK = "#3D3029";

export default function Enso({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${drawn ? "ink-anim" : ""}`}
      aria-hidden="true"
    >
      <defs>
        <filter id="en-rough" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.045 0.045"
            numOctaves="3"
            seed="19"
            result="n"
          />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="7" />
        </filter>
      </defs>
      <g filter="url(#en-rough)" stroke={INK} strokeLinecap="round" fill="none" transform="rotate(-8 200 200)">
        {/* the full sweep — open at the top, one breath */}
        <path
          className="ink-stroke"
          pathLength={1}
          style={{ animationDuration: "1600ms" }}
          d="M275 70 A150 150 0 1 1 149 59"
          strokeWidth="9"
          opacity="0.5"
        />
        {/* heavier landing where the brush first touches */}
        <path
          className="ink-stroke"
          pathLength={1}
          style={{ animationDuration: "500ms" }}
          d="M275 70 A150 150 0 0 1 341 149"
          strokeWidth="13"
          opacity="0.42"
        />
      </g>
    </svg>
  );
}
