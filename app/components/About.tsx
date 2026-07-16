import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section className="section-padding">
      <div className="content-container">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="eyebrow mb-8">ABOUT</p>
            <p className="lead-text">
              I architect end-to-end automation systems — from AI voice agents and multi-channel outreach
              engines to real-time revenue reconciliation pipelines. My stack spans n8n, Make.com,
              GoHighLevel, Supabase, and custom Next.js applications.
            </p>
            <p className="body-text leading-relaxed mt-8" style={{ color: "var(--ink-medium)" }}>
              Every system I build is designed to replace manual work entirely — not just speed it up.
              Whether that&apos;s a voice agent booking appointments at 3am or a reconciliation engine
              catching payment discrepancies before accounting notices, the goal is always the same:
              intelligence that operates without you.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
