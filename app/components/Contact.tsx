"use client";

import { useScrollReveal } from "./useScrollReveal";

export default function Contact() {
  useScrollReveal();

  return (
    <section id="contact" className="section" style={{ position: "relative" }}>
      {/* Background glow */}
      <div
        className="glow-orb glow-orb-blue"
        style={{ bottom: "10%", left: "30%", opacity: 0.15 }}
      />
      <div
        className="glow-orb glow-orb-purple"
        style={{ bottom: "20%", right: "20%", opacity: 0.12 }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          className="reveal glass-card"
          style={{
            maxWidth: 720,
            margin: "0 auto",
            padding: "64px 48px",
            textAlign: "center",
          }}
        >
          <span className="eyebrow" style={{ justifyContent: "center" }}>Get in Touch</span>
          <h2
            className="section-heading"
            style={{ textAlign: "center", margin: "0 auto 20px" }}
          >
            Let&apos;s build your{" "}
            <span className="gradient-text">next system</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              maxWidth: 480,
              margin: "0 auto 40px",
            }}
          >
            Whether you need an automation audit, a CRM overhaul, or a
            full SaaS build — I&apos;m ready to scope it out.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:alizamankhan152@gmail.com"
              className="btn-primary"
            >
              Send an Email
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              href="https://github.com/Zaman152"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              GitHub
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m7 17 9.2-9.2M17 17V7H7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
