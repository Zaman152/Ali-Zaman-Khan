"use client";

/**
 * Horizontal brush-stroke divider under section headers.
 * A single confident sweep: heavy where the brush lands, trailing dry.
 */

const INK = "#3D3029";
const INK_SOFT = "#5C4A3A";

export default function BrushStroke({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="bs-rough" x="-5%" y="-40%" width="110%" height="180%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02 0.3"
            numOctaves="2"
            seed="4"
            result="n"
          />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="3" />
        </filter>
      </defs>
      <g filter="url(#bs-rough)" stroke={INK} strokeLinecap="round" fill="none">
        {/* the landing of the brush — heavier */}
        <path d="M4 12 C40 10 90 9.5 150 11" strokeWidth="3.2" opacity="0.5" />
        {/* the pull — thinning */}
        <path d="M150 11 C210 12.5 265 12.8 315 12" strokeWidth="1.8" opacity="0.42" />
        {/* the lift — dry trail */}
        <path d="M315 12 C348 11.4 375 11.2 397 11.8" strokeWidth="0.9" opacity="0.3" />
      </g>
      {/* second lighter pass for wash depth */}
      <path
        d="M10 14 C70 12.5 150 12 230 13 C290 13.6 350 13 396 13.5"
        stroke={INK_SOFT}
        strokeWidth="0.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.2"
      />
      <circle cx={397} cy={12.5} r={1.1} fill={INK} opacity="0.25" />
    </svg>
  );
}
