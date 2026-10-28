"use client";

import { useScrollReveal } from "./useScrollReveal";

const highlights = [
  { label: "Automation-first approach", desc: "Every system I build is designed to run without manual intervention." },
  { label: "AI-native thinking", desc: "Voice agents, RAG systems, and LLM integrations are core to what I ship." },
  { label: "Full-stack delivery", desc: "From database schema to deployed SaaS — I own the entire pipeline." },
  { label: "Revenue-focused", desc: "Systems measured by revenue generated, leads captured, and time saved." },
];

export default function About() {
  useScrollReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          {/* Left */}
          <div className="reveal">
            <span className="eyebrow">About</span>
            <h2 className="section-heading">
              Systems architect with a{" "}
              <span className="gradient-text">builder&apos;s mindset</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: 24,
              }}
            >
              I specialize in turning complex business processes into automated
              systems that scale. My work spans from N8N workflow engineering
              and GHL CRM architecture to building full SaaS products with
              Next.js, Supabase, and AI APIs.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: 32,
              }}
            >
              Whether it&apos;s a multi-gateway revenue reconciliation engine, an
              AI voice agent that qualifies leads, or a complete field-ops PWA —
              I build systems that replace entire workflows and generate real ROI.
            </p>
            <a href="#contact" className="btn-primary">
              Let&apos;s Work Together
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m7 17 9.2-9.2M17 17V7H7" />
              </svg>
            </a>
          </div>

          {/* Right — highlight cards */}
          <div className="stagger-children" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {highlights.map((h) => (
              <div key={h.label} className="glass-card" style={{ padding: "20px 24px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    fontSize: 16,
                    color: "var(--text-primary)",
                    marginBottom: 6,
                  }}
                >
                  {h.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {h.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive override */}
      <style>{`
        @media (max-width: 768px) {
          #about .container > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
