"use client";

import { useScrollReveal } from "./useScrollReveal";

const stats = [
  { value: "50+", label: "Projects completed" },
  { value: "100+", label: "Automations built" },
  { value: "4+", label: "Years experience" },
];

const highlights = [
  {
    icon: "⚡",
    title: "Automation Expert",
    desc: "N8N, Make.com, Zapier — end-to-end workflow orchestration",
  },
  {
    icon: "🤖",
    title: "AI Integration",
    desc: "Voice agents, LLM pipelines, and intelligent routing",
  },
  {
    icon: "💻",
    title: "Full-Stack Dev",
    desc: "Next.js, React, TypeScript, Supabase, PostgreSQL",
  },
  {
    icon: "🚀",
    title: "SaaS Builder",
    desc: "Complete platforms with billing, auth, and APIs",
  },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: "80px 0 60px", position: "relative" }}
    >
      <div className="content-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 60,
          }}
        >
          <style>{`
            @media (min-width: 768px) {
              .about-grid { grid-template-columns: 1fr 1fr !important; }
            }
          `}</style>
          <div className="about-grid" style={{ display: "contents" }}>
            {/* Left */}
            <div>
              <span className="eyebrow reveal">ABOUT</span>
              <h2
                className="heading-section reveal"
                style={{ marginTop: 16, marginBottom: 24 }}
              >
                Turning complex workflows into simple, scalable systems
              </h2>
              <p className="body-text reveal" style={{ lineHeight: 1.7, marginBottom: 32 }}>
                I architect end-to-end automation systems — from AI voice agents
                and multi-channel outreach engines to real-time revenue
                reconciliation pipelines. Every system I build is designed to
                replace manual work entirely — not just speed it up.
              </p>

              {/* Stats */}
              <div
                className="reveal"
                style={{ display: "flex", gap: 40, flexWrap: "wrap" }}
              >
                {stats.map((s) => (
                  <div key={s.label}>
                    <div
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 300,
                        fontSize: 40,
                        color: "var(--text-primary)",
                        lineHeight: 1,
                        letterSpacing: "-1px",
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        color: "rgba(244,246,251,0.5)",
                        marginTop: 4,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — highlight cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {highlights.map((h, i) => (
                <div
                  key={h.title}
                  className="reveal"
                  style={{
                    transitionDelay: `${i * 0.05}s`,
                    background: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                    borderRadius: 12,
                    padding: 20,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                  }}
                >
                  <span style={{ fontSize: 24 }}>{h.icon}</span>
                  <div>
                    <div
                      style={{
                        fontWeight: 500,
                        fontSize: 16,
                        color: "var(--text-primary)",
                        marginBottom: 4,
                      }}
                    >
                      {h.title}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        color: "var(--text-muted)",
                        lineHeight: 1.5,
                      }}
                    >
                      {h.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
