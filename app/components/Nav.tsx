"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled
          ? "rgba(0,0,0,0.9)"
          : "rgba(0,0,0,0.8)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        transition: "background 0.3s ease",
      }}
    >
      <div
        className="content-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 18,
            color: "var(--text-primary)",
            textDecoration: "none",
            letterSpacing: "-0.3px",
          }}
        >
          Ali Zaman
        </a>

        {/* Center links — hidden on mobile */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="nav-links-desktop"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: 14,
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="#contact" className="btn-nav nav-book-btn">
            Book a Call
          </a>
          <a href="#contact" className="btn-outline" style={{ fontSize: 14, padding: "10px 20px" }}>
            Let&apos;s Talk
          </a>
        </div>
      </div>

      <style>{`
        .nav-links-desktop { display: none !important; }
        .nav-book-btn { display: none !important; }
        @media (min-width: 768px) {
          .nav-links-desktop { display: flex !important; }
          .nav-book-btn { display: inline-flex !important; }
        }
      `}</style>
    </nav>
  );
}
