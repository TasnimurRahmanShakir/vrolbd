import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | VROLBD Overseas Recruitment Ltd. (License 1173)",
  description:
    "Discover the heritage, leadership, ISO 9001:2015 accredited trade test infrastructure, and Board of Directors of VROLBD. Over 18 years of ethical, sovereign overseas workforce mobilization.",
  keywords: [
    "About VROLBD",
    "Government Approved Agency 1173",
    "Board of Directors VROLBD",
    "Syed Miraj Hossain Chairman",
    "Md. Mukul Hossain Managing Director",
    "Sirajul Islam Lipon Founding President",
    "Trade Testing Center Dhaka",
    "Ethical Recruitment Charter Bangladesh",
  ],
  alternates: {
    canonical: "https://vrolbd.com/about",
  },
  openGraph: {
    title: "About Us | VROLBD Overseas Recruitment Ltd. (License 1173)",
    description:
      "Transforming Bangladeshi technical manpower into certified global engineering capital for 18+ years across sovereign mega-infrastructure.",
    url: "https://vrolbd.com/about",
    siteName: "VROLBD Overseas Recruitment Ltd.",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VROLBD Overseas Recruitment Ltd.",
    alternateName: "VROLBD",
    url: "https://vrolbd.com",
    logo: "https://vrolbd.com/images/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Banani Commercial Area",
      addressLocality: "Dhaka",
      postalCode: "1213",
      addressCountry: "BD",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+880-02-883-9910",
      contactType: "customer service",
      areaServed: ["BD", "SA", "AE", "QA", "KW", "OM", "BH"],
      availableLanguage: ["English", "Bengali", "Arabic"],
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
