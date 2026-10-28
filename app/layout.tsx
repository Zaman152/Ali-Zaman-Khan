import type { Metadata } from "next";
import "@fontsource-variable/dm-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali Zaman — Automation & AI Systems Architect",
  description:
    "Portfolio of Ali Zaman Khan: end-to-end automation systems, AI voice agents, and custom SaaS applications. N8N, Make.com, GHL, and custom solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
