import ScrollReveal from "./ScrollReveal";
import BrushStroke from "./BrushStroke";

export default function Contact() {
  return (
    <section className="section-padding pb-32" id="contact">
      <div className="content-container">
        <ScrollReveal>
          <BrushStroke className="w-full max-w-xs h-4 mb-16" />
          <div className="max-w-lg">
            <h2 className="title-contact mb-6">Let&apos;s build something.</h2>
            <p className="body-text mb-8" style={{ color: "var(--ink-medium)" }}>
              Have a system that needs to run itself? Let&apos;s talk.
            </p>
            <a
              href="mailto:alizamankhan152@gmail.com"
              className="contact-link"
            >
              alizamankhan152@gmail.com →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
