import type { Metadata } from "next";
import { QueryProvider } from "@/providers/query-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "VROLBD | Premier Overseas Recruitment & Global Talent Architecture",
  description:
    "Enterprise overseas recruitment portal providing state-of-the-art talent deployment, manpower sourcing, and global workforce solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Material Symbols Outlined Font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        {/* Google Fonts: Outfit & Plus Jakarta Sans for Corporate Avant-Garde typography */}
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0A192F] text-slate-100 min-h-screen selection:bg-[#C5A059] selection:text-[#0A192F]">
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
