import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Engine Optimization | Digital Paradigm - Strategic SEO Solutions",
  description:
    "Health - Digital Paradigm: Strategic SEO solutions that improve search visibility, drive organic traffic, and attract the right audience.",
  keywords:
    "search engine optimization, seo services, organic traffic, search visibility, keyword targeting",
  openGraph: {
    title: "Search Engine Optimization | Digital Paradigm - Strategic SEO Solutions",
    description:
      "Health - Digital Paradigm: Strategic SEO solutions that improve search visibility, drive organic traffic, and attract the right audience.",
    url: "https://health.digitalparadigm.com/services/seo",
    siteName: "Digital Paradigm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Engine Optimization | Digital Paradigm - Strategic SEO Solutions",
    description:
      "Health - Digital Paradigm: Strategic SEO solutions that improve search visibility, drive organic traffic, and attract the right audience.",
  },
  alternates: {
    canonical: "https://health.digitalparadigm.com/services/seo",
  },
};

export default function SEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
