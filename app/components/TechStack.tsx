"use client";

import { useScrollReveal } from "./useScrollReveal";

const tools = [
  "N8N", "Make.com", "GoHighLevel", "Zapier", "Next.js", "React",
  "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "MongoDB",
  "Redis", "Stripe", "OpenAI", "Claude AI", "Retell AI", "ElevenLabs",
  "fal.ai", "HeyGen", "Twilio", "Vercel", "Node.js", "Prisma",
  "LangChain", "Framer Motion", "Apify",
];

export default function TechStack() {
  useScrollReveal();

  return (
    <section className="section" style={{ overflow: "hidden" }}>
      <div className="container reveal" style={{ marginBottom: 48 }}>
        <div style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Tech Stack</span>
          <h2
            className="section-heading"
            style={{ textAlign: "center", margin: "0 auto 16px" }}
          >
            Tools I <span className="gradient-text">work with</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            Battle-tested across 50+ production automations and 6 SaaS platforms.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="reveal" style={{ position: "relative" }}>
        {/* Fade edges */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 120,
            height: "100%",
            background: "linear-gradient(90deg, var(--bg-primary), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 120,
            height: "100%",
            background: "linear-gradient(270deg, var(--bg-primary), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div style={{ overflow: "hidden" }}>
          <div className="marquee-track">
            {[...tools, ...tools].map((tool, i) => (
              <div
                key={`${tool}-${i}`}
                style={{
                  padding: "14px 28px",
                  marginRight: 12,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-lg)",
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  whiteSpace: "nowrap",
                  transition: "border-color 0.3s ease, color 0.3s ease",
                }}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
