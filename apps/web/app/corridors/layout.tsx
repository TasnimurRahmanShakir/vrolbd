import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Deployment Corridors | VROLBD Overseas Recruitment (License 1173)",
  description:
    "Explore VROLBD's sovereign international manpower corridors in Saudi Arabia, UAE, Qatar, Kuwait, Oman, Bahrain, and Europe. Pre-approved governmental visa quotas, direct embassy attestation, and rapid turnkey deployment.",
  keywords: [
    "Saudi Arabia Manpower Corridor",
    "Dubai UAE Recruitment Agency",
    "Qatar Work Visa Agency Dhaka",
    "Kuwait MOH Nursing Agency",
    "Oman Substation Engineer Jobs",
    "Bahrain HVAC Technician Jobs",
    "VROLBD Global Corridors",
    "BMET License 1173 Corridors",
  ],
  alternates: {
    canonical: "https://vrolbd.com/corridors",
  },
  openGraph: {
    title: "Global Deployment Corridors | VROLBD Overseas Recruitment (License 1173)",
    description:
      "Direct government-to-government and enterprise-grade bilateral workforce deployment across GCC mega-infrastructure and European industrial corridors.",
    url: "https://vrolbd.com/corridors",
    siteName: "VROLBD Overseas Recruitment Ltd.",
    locale: "en_US",
    type: "website",
  },
};

export default function CorridorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Overseas Manpower Mobilization Corridors",
    provider: {
      "@type": "Organization",
      name: "VROLBD Overseas Recruitment Ltd.",
      sameAs: "https://vrolbd.com",
    },
    areaServed: ["Saudi Arabia", "United Arab Emirates", "Qatar", "Kuwait", "Oman", "Bahrain", "Poland", "Romania"],
    serviceType: "International Recruitment and Consular Workforce Deployment",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
