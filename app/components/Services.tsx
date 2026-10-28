"use client";

import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

const tabs = [
  {
    id: "n8n",
    label: "01 N8N Workflows",
    title: "N8N Workflow Automation",
    description:
      "End-to-end workflow automation using N8N — from lead capture and CRM sync to AI-powered email responders, voice agents, and multi-channel outreach systems. Self-hosted, infinitely customizable.",
    features: [
      "Multi-step workflow orchestration",
      "AI agent integrations (Claude, GPT)",
      "Webhook-driven event processing",
      "Database & API integrations",
      "Error handling & monitoring",
    ],
  },
  {
    id: "make",
    label: "02 Make.com",
    title: "Make.com Integrations",
    description:
      "Visual automation scenarios connecting your CRM, voice agents, payment processors, and AI tools. Perfect for sales operations hubs and real-time data sync.",
    features: [
      "Multi-scenario architectures",
      "Retell AI voice integration",
      "Stripe payment tracking",
      "AI proposal generation",
      "CRM synchronization",
    ],
  },
  {
    id: "ghl",
    label: "03 GHL Systems",
    title: "GoHighLevel Complete Setups",
    description:
      "Full GHL ecosystems — funnels, pipelines, chatbots, automation workflows, SaaS apps, and metric dashboards. From lead capture to customer lifecycle management.",
    features: [
      "Complete funnel & pipeline builds",
      "AI chatbot & SMS systems",
      "Service segregation workflows",
      "Image handling automation",
      "SaaS app development",
    ],
  },
  {
    id: "custom",
    label: "04 Custom SaaS",
    title: "Custom Applications & SaaS",
    description:
      "Full-stack SaaS platforms built with Next.js, React, TypeScript, and modern databases. From AI-powered content platforms to field operations PWAs and ad-intelligence tools.",
    features: [
      "Next.js 16 & React 19",
      "Supabase / PostgreSQL backends",
      "AI & LLM integrations",
      "Stripe billing & auth",
      "PWA & mobile-first design",
    ],
  },
];

function MockupWindow({ activeTab }: { activeTab: string }) {
  const sidebarItems = ["Dashboard", "Workflows", "Analytics", "Settings"];
  return (
    <div className="mockup-window">
      <div className="mockup-toolbar">
        <div className="mockup-dot" style={{ background: "#FF5F57" }} />
        <div className="mockup-dot" style={{ background: "#FEBC2E" }} />
        <div className="mockup-dot" style={{ background: "#28C840" }} />
        <span
          style={{
            marginLeft: "auto",
            fontSize: 12,
            color: "var(--text-muted)",
          }}
        >
          {activeTab}.dashboard
        </span>
      </div>
      <div style={{ display: "flex", minHeight: 280 }}>
        {/* Sidebar */}
        <div
          style={{
            width: 160,
            borderRight: "1px solid rgba(255,255,255,0.05)",
            padding: "16px 12px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {sidebarItems.map((item, i) => (
            <div
              key={item}
              style={{
                padding: "8px 12px",
                borderRadius: 8,
                fontSize: 13,
                color: i === 0 ? "var(--text-primary)" : "var(--text-muted)",
                background:
                  i === 0 ? "rgba(255,255,255,0.06)" : "transparent",
              }}
            >
              {item}
            </div>
          ))}
        </div>
        {/* Main content */}
        <div style={{ flex: 1, padding: 20 }}>
          <div
            style={{
              height: 12,
              width: "60%",
              background: "rgba(255,255,255,0.08)",
              borderRadius: 6,
              marginBottom: 16,
            }}
          />
          <div
            style={{
              height: 8,
              width: "90%",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 4,
              marginBottom: 10,
            }}
          />
          <div
            style={{
              height: 8,
              width: "75%",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 4,
              marginBottom: 10,
            }}
          />
          <div
            style={{
              height: 8,
              width: "82%",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 4,
              marginBottom: 24,
            }}
          />
          {/* Stat cards */}
          <div style={{ display: "flex", gap: 12 }}>
            {[40, 55, 35].map((w, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: 60,
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  padding: 12,
                }}
              >
                <div
                  style={{
                    height: 6,
                    width: `${w}%`,
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: 3,
                    marginBottom: 8,
                  }}
                />
                <div
                  style={{
                    height: 10,
                    width: "50%",
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: 5,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);
  const ref = useScrollReveal();
  const tab = tabs[active];

  return (
    <section
      id="services"
      ref={ref}
      style={{ padding: "120px 0 80px", position: "relative" }}
    >
      <div className="content-container">
        <h2
          className="heading-section reveal"
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          What I do
        </h2>

        {/* Tabs */}
        <div
          className="reveal"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
            marginBottom: 48,
          }}
        >
          {tabs.map((t, i) => (
            <button
              key={t.id}
              className={`tab ${i === active ? "tab-active" : ""}`}
              onClick={() => setActive(i)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          key={tab.id}
          className="tab-content-active"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 40,
            alignItems: "start",
          }}
        >
          <style>{`
            @media (min-width: 768px) {
              .services-grid { grid-template-columns: 1fr 1fr !important; }
            }
          `}</style>
          <div className="services-grid" style={{ display: "contents" }}>
            {/* Left — text */}
            <div>
              <h3 className="heading-card" style={{ marginBottom: 16 }}>
                {tab.title}
              </h3>
              <p
                className="body-text"
                style={{ maxWidth: 500, marginBottom: 24 }}
              >
                {tab.description}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {tab.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontSize: 14,
                      color: "var(--text-secondary)",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "var(--text-muted)",
                        flexShrink: 0,
                      }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — mockup */}
            <div>
              <MockupWindow activeTab={tab.id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
