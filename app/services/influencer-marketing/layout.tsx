import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Influencer Marketing | Digital Paradigm - Authentic Brand Partnerships",
  description:
    "Health - Digital Paradigm: Partnerships with relevant creators to expand reach, build trust, and amplify your brand message.",
  keywords:
    "influencer marketing, creator partnerships, brand collaborations, authentic marketing, social reach",
  openGraph: {
    title:
      "Influencer Marketing | Digital Paradigm - Authentic Brand Partnerships",
    description:
      "Health - Digital Paradigm: Partnerships with relevant creators to expand reach, build trust, and amplify your brand message.",
    url: "https://digitalparadigm.com/health/services/influencer-marketing",
    siteName: "Digital Paradigm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Influencer Marketing | Digital Paradigm - Authentic Brand Partnerships",
    description:
      "Health - Digital Paradigm: Partnerships with relevant creators to expand reach, build trust, and amplify your brand message.",
  },
  alternates: {
    canonical: "https://digitalparadigm.com/health/services/influencer-marketing",
  },
};

export default function InfluencerMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
