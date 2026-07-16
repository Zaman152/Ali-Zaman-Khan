"use client";

import { useEffect, useRef, useState } from "react";
import InkBranch from "./InkBranch";
import VerticalBrushStroke from "./VerticalBrushStroke";
import InkSplatter from "./InkSplatter";

const TITLE = "ALI ZAMAN";

export default function Hero() {
  const [lettersVisible, setLettersVisible] = useState<boolean[]>(
    new Array(TITLE.length).fill(false)
  );
  const [inkVisible, setInkVisible] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);
  const branchRef = useRef<HTMLDivElement>(null);

  // Gentle parallax: the branch drifts down slightly as the page scrolls
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (branchRef.current) {
          branchRef.current.style.transform = `translateY(${window.scrollY * 0.08}px)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setPrefersReduced(true);
      setLettersVisible(new Array(TITLE.length).fill(true));
      setInkVisible(true);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    TITLE.split("").forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setLettersVisible((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, 200 + i * 30)
      );
    });
    timers.push(
      setTimeout(() => setInkVisible(true), 200 + TITLE.length * 30 + 600)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const inkFade = (delay = 0) => ({
    opacity: inkVisible ? 1 : 0,
    transition: prefersReduced ? "none" : `opacity 900ms ease ${delay}ms`,
  });

  return (
    <section className="relative min-h-[85vh] md:min-h-[92vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Autumn moon — a faint warm wash rising behind the title */}
      <div
        className="absolute left-[55%] top-[42%] -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] md:w-[560px] md:h-[560px] rounded-full pointer-events-none"
        style={{
          ...inkFade(250),
          background:
            "radial-gradient(circle, rgba(155,77,58,0.10) 0%, rgba(155,77,58,0.05) 48%, rgba(155,77,58,0) 68%)",
        }}
      />
      {/* Ink branch — bleeds in from the right edge, riding the title line */}
      <div
        className="absolute right-0 top-[24%] sm:top-[40%] -translate-y-1/2 w-52 sm:w-96 md:w-[520px] lg:w-[680px] pointer-events-none"
        style={inkFade(0)}
      >
        <div ref={branchRef}>
          <div className="branch-sway">
            <InkBranch className="w-full h-auto" animate={inkVisible} />
          </div>
        </div>
      </div>

      {/* Calligraphic glyphs + red seal — left margin, lower half */}
      <div
        className="absolute left-4 md:left-12 top-[66%] -translate-y-1/2 w-14 md:w-[76px] pointer-events-none hidden sm:block"
        style={inkFade(150)}
      >
        <div className="glyph-sway">
          <VerticalBrushStroke className="w-full h-auto" animate={inkVisible} />
        </div>
      </div>

      {/* Drifting petals and ink flecks */}
      <div className="absolute inset-0 pointer-events-none" style={inkFade(300)}>
        <div className="absolute top-[8%] left-[12%] w-40 md:w-64 h-40 md:h-64">
          <InkSplatter className="w-full h-full" />
        </div>
        <div className="absolute top-[16%] right-[18%] w-52 h-52 rotate-90 hidden md:block">
          <InkSplatter className="w-full h-full" />
        </div>
        <div className="absolute bottom-[12%] left-[30%] w-40 md:w-60 h-40 md:h-60 -rotate-45">
          <InkSplatter className="w-full h-full" />
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto">
        <p
          className="eyebrow mb-8 md:mb-12"
          style={{
            opacity: lettersVisible[0] ? 1 : 0,
            transition: prefersReduced ? "none" : "opacity 600ms ease",
          }}
        >
          AUTOMATION &amp; AI SYSTEMS
        </p>

        {/* Main title — letter by letter, wrapping only between words */}
        <h1
          className="title-hero mb-8 md:mb-10 flex flex-wrap justify-center gap-x-[0.5em]"
          aria-label={TITLE}
        >
          {(() => {
            let letterIndex = -1;
            return TITLE.split(" ").map((word, w) => (
              <span key={w} className="whitespace-nowrap">
                {word.split("").map((char) => {
                  letterIndex += 1;
                  const i = letterIndex;
                  return (
                    <span
                      key={i}
                      style={{
                        opacity: lettersVisible[i] ? 1 : 0,
                        transform: lettersVisible[i]
                          ? "translateY(0)"
                          : "translateY(8px)",
                        transition: prefersReduced
                          ? "none"
                          : "opacity 400ms ease, transform 400ms ease",
                        display: "inline-block",
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
              </span>
            ));
          })()}
        </h1>

        <p
          className="tagline"
          style={{
            opacity: lettersVisible[TITLE.length - 1] ? 1 : 0,
            transition: prefersReduced ? "none" : "opacity 600ms ease 100ms",
          }}
        >
          Where automation becomes intelligence.
        </p>

        {/* Tool stack — quiet enumeration under the tagline */}
        <p className="eyebrow mt-10 md:mt-12" style={inkFade(400)}>
          {["N8N", "MAKE.COM", "GOHIGHLEVEL", "ZAPIER", "NEXT.JS"].map(
            (tool, i, arr) => (
              <span key={tool}>
                {tool}
                {i < arr.length - 1 && (
                  <span style={{ color: "var(--terracotta)" }}> · </span>
                )}
              </span>
            )
          )}
        </p>
      </div>

      {/* Scroll indicator — a single quiet line */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={inkFade(450)}
      >
        <div
          className="scroll-line"
          style={{
            animation: prefersReduced ? "none" : "scrollBounce 2.4s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
