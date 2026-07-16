"use client";

/**
 * Sumi-e cherry branch entering from the right edge.
 * Built from layered tapered strokes run through a turbulence
 * displacement filter so the edges break like a dry brush on washi.
 */

const INK = "#3D3029";
const INK_SOFT = "#5C4A3A";
const PETAL = "#9B4D3A";

function Blossom({
  cx,
  cy,
  scale = 1,
  opacity = 0.32,
}: {
  cx: number;
  cy: number;
  scale?: number;
  opacity?: number;
}) {
  // Five petals around a dark center — loose, hand-set offsets
  const petals = [
    [0, -6.2, -12],
    [5.9, -1.9, 62],
    [3.7, 5.1, 134],
    [-3.7, 5.1, -134],
    [-5.9, -1.9, -62],
  ];
  return (
    <g transform={`translate(${cx} ${cy}) scale(${scale})`}>
      {petals.map(([px, py, rot], i) => (
        <ellipse
          key={i}
          cx={px}
          cy={py}
          rx={4.4}
          ry={3.4}
          transform={`rotate(${rot} ${px} ${py})`}
          fill={PETAL}
          opacity={opacity + (i % 2 === 0 ? 0.05 : -0.04)}
        />
      ))}
      <circle cx={0} cy={0} r={1.6} fill={INK} opacity={0.55} />
      <circle cx={1.8} cy={-1.4} r={0.6} fill={INK} opacity={0.4} />
      <circle cx={-1.7} cy={1.2} r={0.5} fill={INK} opacity={0.4} />
    </g>
  );
}

function Bud({
  cx,
  cy,
  rot = 0,
  scale = 1,
}: {
  cx: number;
  cy: number;
  rot?: number;
  scale?: number;
}) {
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${rot}) scale(${scale})`}>
      <ellipse cx={0} cy={0} rx={3.4} ry={2.2} fill={INK_SOFT} opacity={0.55} />
      <ellipse cx={2.4} cy={-1.6} rx={2} ry={1.3} fill={PETAL} opacity={0.35} />
    </g>
  );
}

export default function InkBranch({
  className = "",
  animate = true,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 620 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${animate ? "ink-anim" : ""}`}
      aria-hidden="true"
    >
      <defs>
        <filter id="ib-rough" x="-8%" y="-8%" width="116%" height="116%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.035 0.09"
            numOctaves="3"
            seed="7"
            result="n"
          />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="5" />
        </filter>
        <filter id="ib-wash" x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      {/* Soft wash under-layer — the wet halo beneath the stroke */}
      <g filter="url(#ib-wash)" opacity="0.09" stroke={INK_SOFT} strokeLinecap="round" fill="none">
        <path className="ink-stroke" pathLength={1} d="M620 148 C575 154 535 162 505 174 C475 186 448 189 430 184" strokeWidth="20" />
        <path className="ink-stroke" pathLength={1} style={{ animationDelay: "250ms" }} d="M430 184 C400 176 372 160 348 140 C326 122 310 100 296 74" strokeWidth="13" />
      </g>

      {/* Branch structure — tapered segments, rough dry-brush edges */}
      <g filter="url(#ib-rough)" stroke={INK} strokeLinecap="round" fill="none">
        {/* trunk from right edge */}
        <path className="ink-stroke" pathLength={1} d="M624 146 C592 150 560 158 532 168 C520 172 512 175 505 178" strokeWidth="13" opacity="0.82" />
        <path className="ink-stroke" pathLength={1} style={{ animationDelay: "180ms" }} d="M505 178 C486 186 466 189 444 184" strokeWidth="9.5" opacity="0.8" />
        <path className="ink-stroke" pathLength={1} style={{ animationDelay: "340ms" }} d="M444 184 C418 178 394 166 372 151" strokeWidth="6.5" opacity="0.76" />
        {/* upward reach */}
        <path className="ink-stroke" pathLength={1} style={{ animationDelay: "500ms" }} d="M372 151 C350 136 332 119 318 101" strokeWidth="4.4" opacity="0.72" />
        <path className="ink-stroke" pathLength={1} style={{ animationDelay: "660ms" }} d="M318 101 C305 84 297 69 293 53" strokeWidth="2.6" opacity="0.66" />
        <path className="ink-stroke" pathLength={1} style={{ animationDelay: "800ms" }} d="M293 53 C290 43 289 35 290 26" strokeWidth="1.2" opacity="0.55" />
        {/* downward fork */}
        <path className="ink-stroke" pathLength={1} style={{ animationDelay: "420ms" }} d="M462 186 C447 202 428 217 404 227" strokeWidth="3.8" opacity="0.7" />
        <path className="ink-stroke" pathLength={1} style={{ animationDelay: "580ms" }} d="M404 227 C382 236 361 240 341 239" strokeWidth="1.8" opacity="0.6" />
        <path className="ink-stroke" pathLength={1} style={{ animationDelay: "730ms" }} d="M341 239 C330 238 320 236 312 233" strokeWidth="0.9" opacity="0.5" />
        {/* short spur, up */}
        <path className="ink-stroke" pathLength={1} style={{ animationDelay: "520ms" }} d="M432 181 C426 166 417 152 404 141" strokeWidth="2.2" opacity="0.64" />
        <path className="ink-stroke" pathLength={1} style={{ animationDelay: "680ms" }} d="M404 141 C396 133 388 128 379 125" strokeWidth="1" opacity="0.52" />
        {/* small spur off the upward reach */}
        <path className="ink-stroke" pathLength={1} style={{ animationDelay: "640ms" }} d="M344 124 C336 116 326 110 315 107" strokeWidth="1.4" opacity="0.56" />
        {/* stub on the trunk underside */}
        <path className="ink-stroke" pathLength={1} style={{ animationDelay: "300ms" }} d="M540 172 C536 181 529 189 519 195" strokeWidth="1.7" opacity="0.6" />
      </g>

      {/* Blossoms, buds and flecks bloom after the brush has passed */}
      <g className="ink-fill" style={{ animationDelay: "950ms" }}>
        <Blossom cx={379} cy={122} scale={1.15} opacity={0.34} />
        <Blossom cx={392} cy={136} scale={0.8} opacity={0.26} />
        <Blossom cx={313} cy={104} scale={1} opacity={0.32} />
        <Blossom cx={291} cy={46} scale={1.2} opacity={0.36} />
        <Blossom cx={305} cy={32} scale={0.75} opacity={0.24} />
        <Blossom cx={312} cy={231} scale={1.05} opacity={0.3} />
        <Blossom cx={330} cy={242} scale={0.7} opacity={0.22} />

        <Bud cx={519} cy={197} rot={40} />
        <Bud cx={352} cy={131} rot={-35} scale={0.9} />
        <Bud cx={296} cy={68} rot={-70} scale={0.85} />
        <Bud cx={362} cy={241} rot={15} scale={0.8} />
        <Bud cx={447} cy={196} rot={60} scale={0.75} />

        <ellipse cx={268} cy={132} rx={2.6} ry={1.6} transform="rotate(-30 268 132)" fill={PETAL} opacity="0.28" />
        <ellipse cx={250} cy={176} rx={2.2} ry={1.4} transform="rotate(20 250 176)" fill={PETAL} opacity="0.22" />
        <ellipse cx={286} cy={210} rx={1.9} ry={1.2} transform="rotate(-15 286 210)" fill={PETAL} opacity="0.18" />
        <circle cx={340} cy={90} r={1.4} fill={INK_SOFT} opacity="0.3" />
        <circle cx={410} cy={110} r={1} fill={INK_SOFT} opacity="0.25" />
        <circle cx={470} cy={215} r={1.6} fill={INK_SOFT} opacity="0.26" />
        <circle cx={385} cy={250} r={0.9} fill={INK_SOFT} opacity="0.2" />
      </g>
    </svg>
  );
}
