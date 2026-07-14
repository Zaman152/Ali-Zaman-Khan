"use client";

export default function InkBranch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Main branch — thick tapered stroke going left */}
      <path
        d="M510 180 C470 175 420 170 370 165 C310 158 250 155 190 158 C140 160 90 168 40 180"
        stroke="#3D3029"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
      {/* Upper branch fork */}
      <path
        d="M370 165 C355 145 335 122 308 105 C288 92 262 82 238 75"
        stroke="#3D3029"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.48"
      />
      {/* Upper sub-branch */}
      <path
        d="M308 105 C295 90 278 76 260 64 C248 56 234 50 220 46"
        stroke="#3D3029"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      {/* Lower branch fork */}
      <path
        d="M420 170 C408 188 390 208 368 224 C350 238 328 248 305 254"
        stroke="#3D3029"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.42"
      />
      {/* Thin twig upper right */}
      <path
        d="M238 75 C228 65 215 55 200 48"
        stroke="#5C4A3A"
        strokeWidth="0.9"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      />
      {/* Thin twig lower right */}
        <path
        d="M308 105 C318 92 330 80 346 70"
        stroke="#5C4A3A"
        strokeWidth="0.9"
        strokeLinecap="round"
        fill="none"
        opacity="0.32"
      />
      {/* Bud cluster 1 */}
      <ellipse cx="200" cy="47" rx="5" ry="3" fill="#5C4A3A" opacity="0.38" transform="rotate(-20 200 47)" />
      <ellipse cx="212" cy="42" rx="4" ry="2.5" fill="#5C4A3A" opacity="0.32" transform="rotate(-30 212 42)" />
      <ellipse cx="196" cy="54" rx="3.5" ry="2" fill="#5C4A3A" opacity="0.28" transform="rotate(-10 196 54)" />
      {/* Bud cluster 2 */}
      <ellipse cx="219" cy="46" rx="4.5" ry="2.5" fill="#5C4A3A" opacity="0.34" transform="rotate(-25 219 46)" />
      <ellipse cx="226" cy="40" rx="3" ry="2" fill="#5C4A3A" opacity="0.28" transform="rotate(-35 226 40)" />
      {/* Bud cluster 3 */}
      <ellipse cx="346" cy="68" rx="5" ry="2.8" fill="#5C4A3A" opacity="0.35" transform="rotate(15 346 68)" />
      <ellipse cx="354" cy="62" rx="3.5" ry="2" fill="#5C4A3A" opacity="0.28" transform="rotate(5 354 62)" />
      <ellipse cx="340" cy="63" rx="3" ry="1.8" fill="#5C4A3A" opacity="0.25" transform="rotate(20 340 63)" />
      {/* Bud cluster 4 */}
      <ellipse cx="305" cy="252" rx="4.5" ry="2.5" fill="#5C4A3A" opacity="0.3" transform="rotate(-15 305 252)" />
      <ellipse cx="296" cy="258" rx="3.5" ry="2" fill="#5C4A3A" opacity="0.25" transform="rotate(-5 296 258)" />
      {/* Small ink dots — petal fall */}
      <circle cx="280" cy="88" r="1.8" fill="#5C4A3A" opacity="0.22" />
      <circle cx="265" cy="95" r="1.2" fill="#5C4A3A" opacity="0.18" />
      <circle cx="320" cy="115" r="1.5" fill="#5C4A3A" opacity="0.20" />
      <circle cx="248" cy="80" r="1" fill="#5C4A3A" opacity="0.16" />
      <circle cx="360" cy="218" r="1.8" fill="#5C4A3A" opacity="0.20" />
      <circle cx="342" cy="230" r="1.2" fill="#5C4A3A" opacity="0.16" />
    </svg>
  );
}
