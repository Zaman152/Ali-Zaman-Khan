"use client";

export default function InkSplatter({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="30" cy="40" r="2.5" fill="#3D3029" opacity="0.22" />
      <circle cx="45" cy="28" r="1.5" fill="#3D3029" opacity="0.18" />
      <circle cx="38" cy="55" r="1" fill="#3D3029" opacity="0.15" />
      <circle cx="22" cy="32" r="1.8" fill="#3D3029" opacity="0.20" />
      <circle cx="55" cy="45" r="1.2" fill="#3D3029" opacity="0.16" />
      <circle cx="120" cy="80" r="2" fill="#5C4A3A" opacity="0.18" />
      <circle cx="135" cy="68" r="1.5" fill="#5C4A3A" opacity="0.15" />
      <circle cx="112" cy="95" r="1.2" fill="#5C4A3A" opacity="0.14" />
      <circle cx="145" cy="88" r="1" fill="#5C4A3A" opacity="0.12" />
      <circle cx="160" cy="140" r="2.2" fill="#3D3029" opacity="0.20" />
      <circle cx="172" cy="128" r="1.4" fill="#3D3029" opacity="0.16" />
      <circle cx="155" cy="152" r="1" fill="#3D3029" opacity="0.13" />
      <circle cx="80" cy="160" r="1.8" fill="#5C4A3A" opacity="0.18" />
      <circle cx="90" cy="172" r="1.2" fill="#5C4A3A" opacity="0.14" />
      <circle cx="70" cy="148" r="0.8" fill="#5C4A3A" opacity="0.12" />
      <circle cx="15" cy="130" r="1.5" fill="#3D3029" opacity="0.16" />
      <circle cx="25" cy="118" r="1" fill="#3D3029" opacity="0.13" />
      <circle cx="185" cy="50" r="1.8" fill="#5C4A3A" opacity="0.16" />
      <circle cx="178" cy="62" r="1" fill="#5C4A3A" opacity="0.13" />
    </svg>
  );
}
