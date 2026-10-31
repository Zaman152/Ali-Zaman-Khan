"use client";

import JimoBot from "./JimoBot";
import ConcentricCircles from "./ConcentricCircles";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "120px 16px 80px",
      }}
    >
      <ConcentricCircles top="55%" left="50%" />

      {/* Bot — positioned below center so text sits above the head, bot peeks through */}
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.55,
          zIndex: 0,
        }}
      >
        <JimoBot size="hero" />
      </div>

      {/* Text content — positioned in upper-center area */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: 900,
        }}
      >
        <h1 className="heading-hero">
          I build systems that{" "}
          <span style={{ position: "relative", display: "inline-block" }}>
            automate
            <span
              style={{
                position: "absolute",
                bottom: -2,
                left: 0,
                height: 2,
                background: "var(--text-primary)",
                animation:
                  "drawUnderline 1.2s cubic-bezier(0.16,1,0.3,1) 0.5s forwards",
                width: 0,
              }}
            />
          </span>
          , scale &amp; drive revenue
        </h1>

        <p
          style={{
            marginTop: 24,
            fontSize: 18,
            fontWeight: 400,
            color: "var(--text-secondary)",
            maxWidth: 600,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.6,
          }}
        >
          Automation &amp; AI systems architect — N8N, Make.com, GHL, and
          custom SaaS solutions
        </p>

        <div
          style={{
            marginTop: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <a href="#contact" className="btn-primary">
            Book a Call
          </a>
          <span
            style={{
              fontSize: 32,
              animation: "wave 2s ease-in-out infinite",
              display: "inline-block",
              transformOrigin: "70% 70%",
            }}
            aria-hidden
          >
            👋
          </span>
        </div>
      </div>
    </section>
  );
}
