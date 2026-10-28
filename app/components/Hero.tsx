"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      {/* Perspective grid */}
      <div className="perspective-grid" />

      {/* Glow orbs */}
      <div
        className="glow-orb glow-orb-blue"
        style={{ top: "10%", left: "15%", opacity: mounted ? 0.3 : 0, transition: "opacity 2s ease" }}
      />
      <div
        className="glow-orb glow-orb-purple"
        style={{ top: "20%", right: "10%", opacity: mounted ? 0.25 : 0, transition: "opacity 2s ease 0.5s" }}
      />

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        {/* Eyebrow */}
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            marginBottom: 24,
          }}
        >
          <span className="eyebrow">Automation &amp; AI Systems Architect</span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: "clamp(40px, 7vw, 80px)",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            margin: "0 auto 28px",
            maxWidth: 900,
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
          }}
        >
          I build systems that{" "}
          <span className="gradient-text-hero">automate, scale</span>{" "}
          &amp; drive revenue
        </h1>

        {/* Sub text */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(16px, 1.8vw, 20px)",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            maxWidth: 620,
            margin: "0 auto 40px",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
          }}
        >
          End-to-end automation, AI voice agents, CRM builds &amp; custom SaaS
          — engineered with N8N, Make.com, GHL, Supabase &amp; Next.js.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.45s",
          }}
        >
          <a href="#projects" className="btn-primary">
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m7 17 9.2-9.2M17 17V7H7" />
            </svg>
          </a>
          <a href="#contact" className="btn-outline">
            Book a Call
          </a>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 48,
            marginTop: 72,
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "50+", label: "Automations Built" },
            { value: "6+", label: "Custom SaaS Apps" },
            { value: "15+", label: "CRM Setups" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 36,
                  letterSpacing: "-0.02em",
                }}
                className="gradient-text"
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: "var(--text-muted)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginTop: 4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: mounted ? 0.5 : 0,
          transition: "opacity 1.5s ease 1s",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 32,
            background: "var(--text-muted)",
          }}
        />
      </div>
    </section>
  );
}
