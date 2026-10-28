export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        padding: "40px 0",
        textAlign: "center",
      }}
    >
      <div className="container">
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 14,
            color: "var(--text-secondary)",
          }}
        >
          &copy; {new Date().getFullYear()} Ali Zaman. Built with Next.js &amp; shipped fast.
        </p>
      </div>
    </footer>
  );
}
