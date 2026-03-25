import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pay-Per-Click Advertising | Digital Paradigm - Performance-Driven Campaigns",
  description:
    "Health - Digital Paradigm: Performance-focused paid advertising campaigns designed to generate leads and maximise return on ad spend.",
  keywords:
    "pay per click, ppc advertising, paid campaigns, lead generation, ad spend optimization",
  openGraph: {
    title:
      "Pay-Per-Click Advertising | Digital Paradigm - Performance-Driven Campaigns",
    description:
      "Health - Digital Paradigm: Performance-focused paid advertising campaigns designed to generate leads and maximise return on ad spend.",
    url: "https://digitalparadigm.com/health/services/ppc",
    siteName: "Digital Paradigm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pay-Per-Click Advertising | Digital Paradigm - Performance-Driven Campaigns",
    description:
      "Health - Digital Paradigm: Performance-focused paid advertising campaigns designed to generate leads and maximise return on ad spend.",
  },
  alternates: {
    canonical: "https://digitalparadigm.com/health/services/ppc",
  },
};

export default function PPCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
