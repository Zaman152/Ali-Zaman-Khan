"use client";

import { useMemo } from "react";

export default function StarField({ count = 50 }: { count?: number }) {
  const stars = useMemo(() => {
    const s: { x: number; y: number; opacity: number; dur: number; delay: number; size: number }[] = [];
    for (let i = 0; i < count; i++) {
      s.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: 0.2 + Math.random() * 0.4,
        dur: 2 + Math.random() * 3,
        delay: Math.random() * 5,
        size: 1.5 + Math.random() * 1.5,
      });
    }
    return s;
  }, [count]);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {stars.map((s, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            "--dur": `${s.dur}s`,
            "--delay": `${s.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
