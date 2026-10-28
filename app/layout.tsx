import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/syne";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali Zaman — Automation & AI Systems Architect",
  description:
    "I build end-to-end automation systems, AI agents, and custom SaaS applications using N8N, Make.com, GHL, Supabase, and Next.js.",
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
