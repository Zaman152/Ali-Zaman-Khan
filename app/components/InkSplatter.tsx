"use client";

/**
 * Sparse field of ink flecks and drifting sakura petals.
 * Meant to be scattered across the hero at low opacity.
 */

const INK = "#3D3029";
const INK_SOFT = "#5C4A3A";
const PETAL = "#9B4D3A";

export default function InkSplatter({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ink flecks */}
      <circle cx={36} cy={48} r={2.2} fill={INK} opacity="0.2" />
      <circle cx={52} cy={34} r={1.3} fill={INK} opacity="0.16" />
      <circle cx={44} cy={64} r={0.9} fill={INK_SOFT} opacity="0.14" />
      <circle cx={148} cy={92} r={1.8} fill={INK_SOFT} opacity="0.16" />
      <circle cx={162} cy={80} r={1} fill={INK_SOFT} opacity="0.13" />
      <circle cx={230} cy={170} r={2} fill={INK} opacity="0.18" />
      <circle cx={244} cy={158} r={1.2} fill={INK} opacity="0.14" />
      <circle cx={96} cy={198} r={1.5} fill={INK_SOFT} opacity="0.15" />
      <circle cx={30} cy={158} r={1.1} fill={INK} opacity="0.13" />
      <circle cx={210} cy={60} r={1.4} fill={INK_SOFT} opacity="0.14" />

      {/* drifting petals */}
      <ellipse cx={110} cy={44} rx={3} ry={1.8} transform="rotate(-28 110 44)" fill={PETAL} opacity="0.24" />
      <ellipse cx={190} cy={120} rx={2.6} ry={1.6} transform="rotate(18 190 120)" fill={PETAL} opacity="0.2" />
      <ellipse cx={66} cy={120} rx={2.2} ry={1.4} transform="rotate(-10 66 120)" fill={PETAL} opacity="0.17" />
      <ellipse cx={150} cy={230} rx={3.2} ry={1.9} transform="rotate(32 150 230)" fill={PETAL} opacity="0.22" />
      <ellipse cx={250} cy={240} rx={2.4} ry={1.5} transform="rotate(-22 250 240)" fill={PETAL} opacity="0.18" />
      <ellipse cx={40} cy={236} rx={2} ry={1.3} transform="rotate(12 40 236)" fill={PETAL} opacity="0.15" />
    </svg>
  );
}
