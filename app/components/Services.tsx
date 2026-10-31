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
    stats: [
      { label: "Workflows", value: "16", change: "+3 this month" },
      { label: "Executions", value: "48.2K", change: "+12%" },
      { label: "Uptime", value: "99.9%", change: "" },
    ],
    actions: [
      { initials: "TL", color: "#E67E50", text: "Review vendor OCR pipeline accuracy.", due: "Due Fri" },
      { initials: "MO", color: "#4CAF80", text: "Deploy newsletter automation v2.", due: "This week" },
      { initials: "SR", color: "#9C6ADE", text: "Update webhook endpoints for CRM sync.", due: "Nov 3" },
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
    stats: [
      { label: "Scenarios", value: "7", change: "Active" },
      { label: "Operations", value: "12.4K", change: "+8%" },
      { label: "Success", value: "98.7%", change: "" },
    ],
    actions: [
      { initials: "RP", color: "#E67E50", text: "Sync Retell call logs to GHL pipeline.", due: "Due Mon" },
      { initials: "SP", color: "#4CAF80", text: "Verify Stripe webhook payload format.", due: "This week" },
      { initials: "AI", color: "#9C6ADE", text: "Test AI proposal draft for new client.", due: "Nov 5" },
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
    stats: [
      { label: "Funnels", value: "14", change: "Live" },
      { label: "Leads", value: "3.2K", change: "+22%" },
      { label: "Conversion", value: "18.4%", change: "+2.1 pts" },
    ],
    actions: [
      { initials: "PD", color: "#E67E50", text: "Launch interior detailing chatbot flow.", due: "Due Wed" },
      { initials: "MC", color: "#4CAF80", text: "Review missed-call revenue metrics.", due: "This week" },
      { initials: "SG", color: "#9C6ADE", text: "Update service segregation tags.", due: "Nov 1" },
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
    stats: [
      { label: "MRR", value: "$48.2K", change: "+4.2%" },
      { label: "Active users", value: "12,480", change: "" },
      { label: "Activation", value: "64%", change: "+3.1 pts" },
    ],
    actions: [
      { initials: "TL", color: "#E67E50", text: "Review Q3 usage report before Friday.", due: "Due Fri" },
      { initials: "MO", color: "#4CAF80", text: "Invite 3 members to Growth.", due: "This week" },
      { initials: "SR", color: "#9C6ADE", text: "Update billing details for client.", due: "Sep 30" },
    ],
  },
];

function DashboardMockup({ tab }: { tab: typeof tabs[0] }) {
  const sidebarItems = [
    { icon: "◻", label: "Dashboard", active: true },
    { icon: "▤", label: "Reports", active: false },
    { icon: "◉", label: "Members", count: "12", active: false },
    { icon: "⬡", label: "Billing", active: false },
  ];

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "14px 18px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
      </div>

      <div style={{ display: "flex", minHeight: 340 }}>
        {/* Sidebar */}
        <div
          style={{
            width: 170,
            borderRight: "1px solid rgba(255,255,255,0.05)",
            padding: "16px 10px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* Workspace */}
          <div style={{ padding: "6px 10px", marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 20, height: 20, borderRadius: 4, background: "#4A90D9" }} />
              <span style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>Acme</span>
              <span style={{ fontSize: 10, color: "var(--text-muted)", marginLeft: "auto", padding: "2px 6px", borderRadius: 4, background: "rgba(255,255,255,0.06)" }}>v2.4</span>
            </div>
          </div>
          <div style={{ fontSize: 10, color: "var(--text-muted)", padding: "4px 10px", textTransform: "uppercase", letterSpacing: "0.08em" }}>General</div>
          {sidebarItems.map((item) => (
            <div
              key={item.label}
              style={{
                padding: "8px 10px",
                borderRadius: 8,
                fontSize: 13,
                color: item.active ? "var(--text-primary)" : "var(--text-muted)",
                background: item.active ? "rgba(255,255,255,0.06)" : "transparent",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ fontSize: 12, opacity: 0.6 }}>{item.icon}</span>
              {item.label}
              {item.count && (
                <span style={{ marginLeft: "auto", fontSize: 11, color: "var(--text-muted)" }}>{item.count}</span>
              )}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: "20px 24px" }}>
          {/* Welcome header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 20, fontWeight: 400, fontStyle: "italic", color: "var(--text-primary)" }}>
                Welcome, <em>Alice!</em>
              </span>
              <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#E07090", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 600, color: "#fff" }}>AM</span>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button style={{ padding: "6px 14px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", color: "var(--text-secondary)", fontSize: 12, cursor: "pointer" }}>Export</button>
              <button style={{ padding: "6px 14px", borderRadius: 8, border: "none", background: "#4A90D9", color: "#fff", fontSize: 12, cursor: "pointer" }}>Upgrade</button>
            </div>
          </div>

          {/* Stat cards */}
          <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
            {tab.stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  flex: 1,
                  padding: "14px 16px",
                  borderRadius: 10,
                  border: `1px solid rgba(255,255,255,${i === 0 ? "0.08" : "0.05"})`,
                  background: i === 0 ? "rgba(255,255,255,0.03)" : "transparent",
                }}
              >
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 6 }}>{stat.label}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                  <span style={{ fontSize: 22, fontWeight: 500, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>{stat.value}</span>
                  {stat.change && <span style={{ fontSize: 11, color: "#4CAF80" }}>{stat.change}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Action items */}
          <div style={{ marginBottom: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}>Action items</span>
              <span style={{ fontSize: 11, color: "var(--text-muted)", padding: "2px 8px", borderRadius: 10, background: "rgba(255,255,255,0.06)" }}>3</span>
            </div>
            {tab.actions.map((action) => (
              <div
                key={action.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 0",
                  borderTop: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: action.color,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    fontWeight: 600,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {action.initials}
                </span>
                <span style={{ fontSize: 13, color: "var(--text-secondary)", flex: 1 }}>{action.text}</span>
                <span style={{ fontSize: 11, color: "var(--text-muted)", whiteSpace: "nowrap" }}>{action.due}</span>
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

        {/* Content — proper two-column grid */}
        <div
          key={tab.id}
          className="tab-content-active services-content"
        >
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

          {/* Right — dashboard mockup */}
          <div>
            <DashboardMockup tab={tab} />
          </div>
        </div>
      </div>

      <style>{`
        .services-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: start;
        }
        @media (min-width: 768px) {
          .services-content {
            grid-template-columns: 1fr 1.2fr;
          }
        }
      `}</style>
    </section>
  );
}
