"use client";

export default function VerticalBrushStroke({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Primary vertical stroke — thick at center, tapers */}
      <path
        d="M30 5 C28 30 26 60 27 90 C28 130 32 170 31 210 C30 250 28 280 30 315"
        stroke="#3D3029"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.20"
      />
      {/* Secondary stroke offset — ink bleeds */}
      <path
        d="M26 20 C24 55 23 95 25 130 C27 165 30 200 29 240 C28 268 27 290 28 308"
        stroke="#5C4A3A"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.14"
      />
      {/* Short horizontal accent strokes — calligraphic */}
      <path
        d="M18 80 C22 79 30 79.5 40 80"
        stroke="#3D3029"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.22"
      />
      <path
        d="M20 140 C24 139 32 139.5 42 141"
        stroke="#3D3029"
        strokeWidth="0.9"
        strokeLinecap="round"
        fill="none"
        opacity="0.18"
      />
      <path
        d="M16 200 C21 199 29 199.5 38 200.5"
        stroke="#3D3029"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.16"
      />
      <path
        d="M22 260 C26 259.5 33 260 41 261"
        stroke="#3D3029"
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.14"
      />
      {/* Ink dots accent */}
      <circle cx="34" cy="45" r="1.5" fill="#3D3029" opacity="0.18" />
      <circle cx="24" cy="105" r="1" fill="#3D3029" opacity="0.15" />
      <circle cx="36" cy="175" r="1.2" fill="#5C4A3A" opacity="0.16" />
      <circle cx="22" cy="225" r="0.9" fill="#5C4A3A" opacity="0.14" />
    </svg>
  );
}
