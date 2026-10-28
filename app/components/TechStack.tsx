"use client";

import { useScrollReveal } from "./useScrollReveal";

const row1 = [
  "N8N",
  "Make.com",
  "GoHighLevel",
  "Zapier",
  "Supabase",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Vercel",
];

const row2 = [
  "OpenAI",
  "Claude API",
  "Python",
  "REST APIs",
  "Webhooks",
  "Stripe",
  "Retell AI",
  "MongoDB",
  "Redis",
  "Twilio",
  "ElevenLabs",
  "Framer Motion",
];

function MarqueeRow({
  items,
  reverse,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div
      style={{
        overflow: "hidden",
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}>
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              borderRadius: 100,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--text-secondary)",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      style={{ padding: "60px 0 80px", position: "relative" }}
    >
      <h2
        className="heading-section reveal"
        style={{ textAlign: "center", marginBottom: 40 }}
      >
        Tools &amp; technologies
      </h2>
      <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
