"use client";

import { useScrollReveal } from "./useScrollReveal";

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "80px 0 60px",
        position: "relative",
        textAlign: "center",
      }}
    >
      <div className="content-container">
        <h2 className="heading-section reveal" style={{ marginBottom: 16 }}>
          Let&apos;s build something together.
        </h2>
        <p
          className="reveal"
          style={{
            fontSize: 18,
            color: "var(--text-secondary)",
            maxWidth: 560,
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          Whether it&apos;s automation, AI, or a custom SaaS solution — let&apos;s
          talk.
        </p>

        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <a href="mailto:alizamankhan152@gmail.com" className="btn-primary">
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

        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:alizamankhan152@gmail.com"
            style={{
              fontSize: 14,
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            alizamankhan152@gmail.com
          </a>
          <a
            href="https://github.com/zaman152"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 14,
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
