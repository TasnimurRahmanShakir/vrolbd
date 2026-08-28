import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Vision Recruiting & Overseas Ltd. (License 1173)",
  description:
    "Discover the heritage, leadership, ISO 9001:2015 accredited trade test infrastructure, and Board of Directors of Vision Recruiting. Over 18 years of ethical, sovereign overseas workforce mobilization.",
  keywords: [
    "About Vision Recruiting",
    "Government Approved Agency 1173",
    "Board of Directors Vision Recruiting",
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
    title: "About Us | Vision Recruiting & Overseas Ltd. (License 1173)",
    description:
      "Transforming Bangladeshi technical manpower into certified global engineering capital for 18+ years across sovereign mega-infrastructure.",
    url: "https://vrolbd.com/about",
    siteName: "Vision Recruiting & Overseas Ltd.",
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
    name: "Vision Recruiting & Overseas Ltd.",
    alternateName: "Vision Recruiting",
    url: "https://vrolbd.com",
    logo: "https://vrolbd.com/images/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pritom Zaman Tower, Level-3, 37/2, Purana Paltan, Culvert Road",
      addressLocality: "Dhaka",
      postalCode: "1000",
      addressCountry: "BD",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+880-2-226639178",
      contactType: "customer service",
      areaServed: ["BD", "SA", "AE", "QA", "KW", "OM", "BH", "RO", "MY", "JP"],
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
