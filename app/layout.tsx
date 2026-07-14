import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali Zaman — Automation & AI Systems",
  description: "Portfolio of Ali Zaman: end-to-end automation systems, AI voice agents, and custom SaaS applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
