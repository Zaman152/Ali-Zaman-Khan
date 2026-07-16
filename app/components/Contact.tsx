import ScrollReveal from "./ScrollReveal";
import BrushStroke from "./BrushStroke";
import Enso from "./Enso";

export default function Contact() {
  return (
    <section className="section-padding pb-32" id="contact">
      <div className="content-container relative">
        {/* Ensō — draws itself as the section scrolls into view */}
        <div className="absolute -top-16 right-0 md:right-16 w-64 md:w-[400px] opacity-40 pointer-events-none">
          <Enso className="w-full h-auto" />
        </div>

        <ScrollReveal>
          <BrushStroke className="w-full max-w-xs h-4 mb-16" />
          <div className="max-w-lg relative">
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
