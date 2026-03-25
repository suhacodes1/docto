import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing | Digital Paradigm - Data-Driven Engagement",
  description:
    "Health - Digital Paradigm: Data-driven social media strategies that increase brand awareness, engagement, and customer loyalty.",
  keywords:
    "social media marketing, brand awareness, engagement growth, social campaigns, digital marketing",
  openGraph: {
    title: "Social Media Marketing | Digital Paradigm - Data-Driven Engagement",
    description:
      "Health - Digital Paradigm: Data-driven social media strategies that increase brand awareness, engagement, and customer loyalty.",
    url: "https://digitalparadigm.com/health/services/social-media-marketing",
    siteName: "Digital Paradigm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Social Media Marketing | Digital Paradigm - Data-Driven Engagement",
    description:
      "Health - Digital Paradigm: Data-driven social media strategies that increase brand awareness, engagement, and customer loyalty.",
  },
  alternates: {
    canonical:
      "https://digitalparadigm.com/health/services/social-media-marketing",
  },
};

export default function SocialMediaMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
