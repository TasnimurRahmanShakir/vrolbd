import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance, Ethics & Legal Framework | Vision Recruiting (License 1173)",
  description:
    "Explore Vision Recruiting's zero-exploitation charter, Government License 1173 compliance, ISO 9001:2015 certified recruitment standards, and ILO fair migration safeguards.",
  keywords: [
    "Ethical Recruitment Bangladesh",
    "BMET License 1173 Compliance",
    "Zero Recruitment Fees Agency",
    "ILO Fair Migration Dhaka",
    "Overseas Worker Legal Rights",
    "GAMCA Medical Verification",
    "Vision Recruiting Compliance Standards",
  ],
  alternates: {
    canonical: "https://vrolbd.com/compliance",
  },
  openGraph: {
    title: "Compliance, Ethics & Legal Framework | Vision Recruiting (License 1173)",
    description:
      "Upholding sovereign integrity, transparent bilingual contracts, and zero-exploitation recruitment across international workforce corridors.",
    url: "https://vrolbd.com/compliance",
    siteName: "Vision Recruiting & Overseas Ltd.",
    locale: "en_US",
    type: "website",
  },
};

export default function ComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GovernmentPermit",
    name: "Government Overseas Recruiting License 1173",
    issuedBy: {
      "@type": "GovernmentOrganization",
      name: "Ministry of Expatriates' Welfare and Overseas Employment, Bangladesh",
    },
    validIn: {
      "@type": "Country",
      name: "Bangladesh",
    },
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
