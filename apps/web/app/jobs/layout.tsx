import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Overseas Jobs & Requisitions | Vision Recruiting (License 1173)",
  description:
    "Explore verified government-accredited overseas jobs in Saudi Arabia, UAE, Qatar, Kuwait, Oman, and Bahrain. High-earning tax-free wages, company-provided accommodation, BMET smart card protection, and direct fast-track consular visa intake.",
  keywords: [
    "Overseas Jobs Bangladesh",
    "Gulf Jobs Dhaka",
    "BMET Approved Agency License 1173",
    "Saudi Arabia Work Visa",
    "Dubai MEP Engineer Jobs",
    "Qatar Hospitality Vacancy",
    "6G Welder Jobs Middle East",
    "Kuwait Nursing Recruitment",
    "Vision Recruiting Job Portal",
    "Legal Overseas Employment",
  ],
  alternates: {
    canonical: "https://vrolbd.com/jobs",
  },
  openGraph: {
    title: "Live Overseas Jobs & Requisitions | Vision Recruiting (License 1173)",
    description:
      "Explore 100% legal government-approved overseas vacancies across GCC & European corridors with competitive tax-free earnings and pre-departure boarding.",
    url: "https://vrolbd.com/jobs",
    siteName: "Vision Recruiting & Overseas Ltd.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://vrolbd.com/images/og-jobs.jpg",
        width: 1200,
        height: 630,
        alt: "Vision Recruiting Overseas Portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Overseas Jobs & Requisitions | Vision Recruiting (License 1173)",
    description:
      "Government-licensed recruitment portal with instant trade testing, BMET smart card clearance, and verified overseas career deployment.",
    images: ["https://vrolbd.com/images/og-jobs.jpg"],
  },
};

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    name: "Government Approved Overseas Manpower Openings",
    description:
      "Verified technical, engineering, healthcare, and hospitality vacancies across GCC enterprise corridors by Vision Recruiting (License 1173).",
    hiringOrganization: {
      "@type": "Organization",
      name: "Vision Recruiting & Overseas Ltd.",
      sameAs: "https://vrolbd.com",
      logo: "https://vrolbd.com/images/logo.png",
    },
    employmentType: "FULL_TIME",
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: {
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
