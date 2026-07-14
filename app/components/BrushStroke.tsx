"use client";

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
      {/* Main brush stroke — tapers at both ends like a real ink brush */}
      <path
        d="M0 12 C20 10 50 8 90 9.5 C140 11 190 13 240 12.5 C290 12 330 10 365 11 C380 11.5 392 12 400 12"
        stroke="#3D3029"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.30"
      />
      {/* Second lighter pass for ink wash depth */}
      <path
        d="M5 13.5 C40 12 80 11 130 12 C180 13 230 13.5 280 12.8 C320 12.2 360 11.5 398 12.5"
        stroke="#5C4A3A"
        strokeWidth="0.7"
        strokeLinecap="round"
        fill="none"
        opacity="0.18"
      />
      {/* Ink drip at end */}
      <circle cx="398" cy="13" r="1.2" fill="#3D3029" opacity="0.22" />
      <circle cx="3" cy="12.5" r="0.8" fill="#3D3029" opacity="0.18" />
    </svg>
  );
}
