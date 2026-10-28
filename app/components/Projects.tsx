"use client";

import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";
import { customApps, n8nProjects, makeProjects, ghlProjects, zapierProjects } from "../data/projects";
import type { Project } from "../data/projects";

const flagships = customApps.filter((p) => p.flagship);

const categories = [
  { id: "flagship", label: "Featured Apps" },
  { id: "n8n", label: "N8N" },
  { id: "make", label: "Make.com" },
  { id: "ghl", label: "GHL" },
  { id: "zapier", label: "Zapier" },
];

const categoryProjects: Record<string, Project[]> = {
  flagship: flagships,
  n8n: n8nProjects,
  make: makeProjects,
  ghl: ghlProjects,
  zapier: zapierProjects,
};

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m7 17 9.2-9.2M17 17V7H7" />
    </svg>
  );
}

export default function Projects() {
  useScrollReveal();
  const [active, setActive] = useState("flagship");
  const projects = categoryProjects[active] || [];

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Heading */}
        <div className="reveal" style={{ marginBottom: 48, maxWidth: 600 }}>
          <span className="eyebrow">Portfolio</span>
          <h2 className="section-heading">
            Projects that{" "}
            <span className="gradient-text">deliver results</span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.7 }}>
            From enterprise automations processing thousands of records to full SaaS platforms with AI at their core.
          </p>
        </div>

        {/* Category tabs */}
        <div
          className="reveal"
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 40,
            flexWrap: "wrap",
          }}
        >
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              style={{
                padding: "10px 20px",
                fontFamily: "var(--font-body)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.02em",
                color: active === c.id ? "#fff" : "var(--text-secondary)",
                background: active === c.id
                  ? "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))"
                  : "var(--bg-card)",
                border: `1px solid ${active === c.id ? "transparent" : "var(--border-subtle)"}`,
                borderRadius: "100px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: active === "flagship"
              ? "repeat(auto-fit, minmax(340px, 1fr))"
              : "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 16,
          }}
        >
          {projects.map((p) => (
            <div
              key={p.name}
              className="glass-card"
              style={{
                padding: active === "flagship" ? 32 : 24,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Flagship glow bar */}
              {active === "flagship" && (
                <div
                  style={{
                    width: 40,
                    height: 3,
                    borderRadius: 2,
                    background: "linear-gradient(90deg, var(--accent-blue), var(--accent-purple))",
                    marginBottom: 20,
                  }}
                />
              )}

              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: active === "flagship" ? 22 : 17,
                  letterSpacing: "-0.01em",
                  color: "var(--text-primary)",
                  margin: "0 0 10px 0",
                  lineHeight: 1.3,
                }}
              >
                {p.name}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  margin: "0 0 16px 0",
                  flex: 1,
                }}
              >
                {p.description}
              </p>

              {/* Stack tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                {p.stack.slice(0, 5).map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
                {p.stack.length > 5 && (
                  <span className="tag">+{p.stack.length - 5}</span>
                )}
              </div>

              {/* Links */}
              {p.links.length > 0 && (
                <div style={{ display: "flex", gap: 12 }}>
                  {p.links.slice(0, 2).map((link, i) => (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        fontFamily: "var(--font-body)",
                        fontSize: 13,
                        fontWeight: 500,
                        color: "var(--accent-blue)",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {link.includes("loom") ? "Demo" : "View"}
                      <ExternalIcon />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
