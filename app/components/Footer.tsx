const columns = [
  {
    title: "Navigate",
    links: [
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "N8N Workflows", href: "#services" },
      { label: "Make.com", href: "#services" },
      { label: "GHL Systems", href: "#services" },
      { label: "Custom SaaS", href: "#services" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Email", href: "mailto:alizamankhan152@gmail.com" },
      { label: "GitHub", href: "https://github.com/zaman152" },
      { label: "LinkedIn", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "60px 0 40px",
      }}
    >
      <div
        className="content-container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 40,
        }}
      >
        <style>{`
          @media (min-width: 640px) {
            .footer-grid { grid-template-columns: 1.2fr repeat(3, 1fr) !important; }
          }
        `}</style>
        <div className="footer-grid" style={{ display: "contents" }}>
          {/* Brand */}
          <div>
            <div
              style={{
                fontWeight: 500,
                fontSize: 18,
                color: "var(--text-primary)",
                marginBottom: 8,
              }}
            >
              Ali Zaman Khan
            </div>
            <div style={{ fontSize: 14, color: "var(--text-muted)" }}>
              © 2026 Ali Zaman Khan
            </div>
            <div
              style={{
                fontSize: 14,
                color: "var(--text-muted)",
                marginTop: 4,
              }}
            >
              Built with ❤️
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: "var(--text-faint)",
                  marginBottom: 16,
                }}
              >
                {col.title}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: 10,
                }}
              >
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    style={{
                      fontSize: 14,
                      color: "rgba(244,246,251,0.5)",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
