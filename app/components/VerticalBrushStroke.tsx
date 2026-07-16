"use client";

/**
 * Vertical calligraphic accent for the hero's left margin:
 * two abstract brush glyphs (kanji-like gesture, not real text)
 * stacked above a red artist's seal.
 */

const INK = "#3D3029";
const SEAL = "#9B4D3A";
const CREAM = "#F5F0E8";

export default function VerticalBrushStroke({
  className = "",
  animate = true,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 84 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${animate ? "ink-anim" : ""}`}
      aria-hidden="true"
    >
      <defs>
        <filter id="vb-rough" x="-12%" y="-6%" width="124%" height="112%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.06 0.08"
            numOctaves="3"
            seed="11"
            result="n"
          />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="4" />
        </filter>
      </defs>

      <g filter="url(#vb-rough)" stroke={INK} strokeLinecap="round" fill="none">
        {/* Glyph one — vertical spine, crossbar, falling flick */}
        <path className="ink-stroke" pathLength={1} d="M42 14 C40 42 44 74 41 108" strokeWidth="9" opacity="0.8" />
        <path className="ink-stroke" pathLength={1} style={{ animationDelay: "160ms" }} d="M20 52 C32 48 50 49 64 53" strokeWidth="6" opacity="0.75" />
        <path className="ink-stroke" pathLength={1} style={{ animationDelay: "320ms" }} d="M42 76 C51 87 59 95 68 100" strokeWidth="4" opacity="0.62" />
        <path className="ink-stroke" pathLength={1} style={{ animationDelay: "440ms" }} d="M28 96 C24 103 19 108 13 112" strokeWidth="3.2" opacity="0.55" />

        {/* Glyph two — crossbar first, heavier spine, twin sweeps */}
        <path className="ink-stroke" pathLength={1} style={{ animationDelay: "560ms" }} d="M17 156 C33 152 53 153 68 157" strokeWidth="6" opacity="0.76" />
        <path className="ink-stroke" pathLength={1} style={{ animationDelay: "700ms" }} d="M43 136 C41 168 45 204 42 240" strokeWidth="8.5" opacity="0.8" />
        <path className="ink-stroke" pathLength={1} style={{ animationDelay: "880ms" }} d="M43 194 C34 212 26 226 14 238" strokeWidth="4.2" opacity="0.62" />
        <path className="ink-stroke" pathLength={1} style={{ animationDelay: "1000ms" }} d="M43 194 C52 209 60 219 70 227" strokeWidth="3.4" opacity="0.58" />
      </g>

      {/* Ink dot — the pause of the brush */}
      <circle className="ink-fill" style={{ animationDelay: "1150ms" }} cx={58} cy={122} r={2.4} fill={INK} opacity="0.5" />

      {/* Red seal, set slightly askew like a hand-pressed stamp */}
      <g className="ink-fill" style={{ animationDelay: "1250ms" }} transform="rotate(-2.5 42 320)">
        <rect x={24} y={302} width={36} height={36} rx={2.5} fill={SEAL} opacity="0.82" />
        {/* abstract cream marks carved into the seal */}
        <g stroke={CREAM} strokeWidth="2.4" strokeLinecap="round" fill="none" opacity="0.9">
          <path d="M32 311 L32 329" />
          <path d="M32 314 C37 312 42 312 46 314" />
          <path d="M52 310 L52 322" />
          <path d="M46 327 C49 329 52 330 55 329" />
          <path d="M39 321 L44 321" />
        </g>
      </g>
    </svg>
  );
}
