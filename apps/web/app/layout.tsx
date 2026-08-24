import type { Metadata } from "next";
import { Noto_Serif, Noto_Serif_Bengali, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { QueryProvider } from "@/providers/query-provider";
import "./globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-serif",
  display: "swap",
});

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-serif-bengali",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

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
    <html
      lang="en"
      className={`dark ${notoSerif.variable} ${notoSerifBengali.variable} ${outfit.variable} ${plusJakarta.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Material Symbols Outlined Font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        {/* Google Fonts Noto Serif & Noto Serif Bengali */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Noto+Serif+Bengali:wght@400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
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
