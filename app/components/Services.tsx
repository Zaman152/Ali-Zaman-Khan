"use client";

import { useScrollReveal } from "./useScrollReveal";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
      </svg>
    ),
    title: "N8N Automations",
    description: "Complex multi-step workflows — lead management, OCR invoice processing, AI email responders, social media engines, KPI reporting, and reconciliation systems.",
    count: "16+ Projects",
    color: "var(--accent-blue)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    title: "Make.com Integrations",
    description: "Retell voice agent integrations, CRM syncs, Stripe payment tracking, and AI-powered proposal drafters for sales operations.",
    count: "5+ Projects",
    color: "var(--accent-purple)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "GHL CRM Setups",
    description: "Complete lifecycle systems — lead capture, path routing, follow-ups, service segregation, funnels, pipelines, chatbots, dashboards, and full SaaS builds.",
    count: "18+ Builds",
    color: "var(--accent-cyan)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
        <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
        <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 .64 7.95" />
      </svg>
    ),
    title: "Custom SaaS Apps",
    description: "Full-stack applications — AI avatar platforms, sales suites, field ops PWAs, ad intelligence tools, content automation hubs, and AI venue management.",
    count: "6+ Apps",
    color: "var(--accent-blue)",
  },
];

export default function Services() {
  useScrollReveal();

  return (
    <section id="services" className="section" style={{ position: "relative" }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: 64, maxWidth: 560 }}>
          <span className="eyebrow">What I Do</span>
          <h2 className="section-heading">
            Full-stack automation{" "}
            <span className="gradient-text">expertise</span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.7 }}>
            From simple Zapier zaps to enterprise-grade N8N workflows and
            custom Next.js SaaS platforms — I build the systems that
            replace manual work.
          </p>
        </div>

        <div
          className="stagger-children"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {services.map((s) => (
            <div key={s.title} className="glass-card" style={{ padding: 32 }}>
              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "var(--radius-md)",
                  background: `${s.color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: s.color,
                  marginBottom: 20,
                }}
              >
                {s.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 20,
                  letterSpacing: "-0.01em",
                  color: "var(--text-primary)",
                  margin: "0 0 12px 0",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  margin: "0 0 20px 0",
                }}
              >
                {s.description}
              </p>
              <span className="tag">{s.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
