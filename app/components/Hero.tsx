"use client";

import { useEffect, useState } from "react";
import InkBranch from "./InkBranch";
import VerticalBrushStroke from "./VerticalBrushStroke";
import InkSplatter from "./InkSplatter";

const TITLE = "ALI ZAMAN";

export default function Hero() {
  const [lettersVisible, setLettersVisible] = useState<boolean[]>(
    new Array(TITLE.length).fill(false)
  );
  const [branchVisible, setBranchVisible] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setPrefersReduced(true);
      setLettersVisible(new Array(TITLE.length).fill(true));
      setBranchVisible(true);
      return;
    }

    TITLE.split("").forEach((_, i) => {
      setTimeout(() => {
        setLettersVisible((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 200 + i * 30);
    });

    setTimeout(() => setBranchVisible(true), 200 + TITLE.length * 30 + 600);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative left vertical brushstroke */}
      <div
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-12 h-72 pointer-events-none"
        style={{
          opacity: branchVisible ? 1 : 0,
          transition: prefersReduced ? "none" : "opacity 800ms ease 200ms",
        }}
      >
        <VerticalBrushStroke className="w-full h-full" />
      </div>

      {/* Decorative scattered ink */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: branchVisible ? 1 : 0,
          transition: prefersReduced ? "none" : "opacity 1000ms ease 400ms",
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-40 h-40">
          <InkSplatter className="w-full h-full" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 rotate-45">
          <InkSplatter className="w-full h-full" />
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p
          className="eyebrow mb-8 md:mb-10"
          style={{
            opacity: lettersVisible[0] ? 1 : 0,
            transition: prefersReduced ? "none" : "opacity 600ms ease",
          }}
        >
          AUTOMATION &amp; AI SYSTEMS
        </p>

        {/* Main title — letter by letter */}
        <h1
          className="title-hero mb-6 md:mb-8 flex flex-wrap justify-center"
          aria-label={TITLE}
        >
          {TITLE.split("").map((char, i) => (
            <span
              key={i}
              style={{
                opacity: lettersVisible[i] ? 1 : 0,
                transform: lettersVisible[i] ? "translateY(0)" : "translateY(8px)",
                transition: prefersReduced
                  ? "none"
                  : "opacity 400ms ease, transform 400ms ease",
                display: "inline-block",
                whiteSpace: char === " " ? "pre" : "normal",
              }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <p
          className="tagline"
          style={{
            opacity: lettersVisible[TITLE.length - 1] ? 1 : 0,
            transition: prefersReduced ? "none" : "opacity 600ms ease 100ms",
          }}
        >
          Where automation becomes intelligence.
        </p>
      </div>

      {/* Ink branch — right side */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-72 md:w-96 lg:w-[520px] pointer-events-none"
        style={{
          opacity: branchVisible ? 0.42 : 0,
          transition: prefersReduced ? "none" : "opacity 600ms ease",
        }}
      >
        <InkBranch className="w-full h-auto" />
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: branchVisible ? 1 : 0,
          transition: prefersReduced ? "none" : "opacity 600ms ease 300ms",
        }}
      >
        <span className="eyebrow text-[9px]">SCROLL</span>
        <div
          className="w-px h-8 bg-ink-light"
          style={{
            animation: prefersReduced ? "none" : "scrollBounce 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
