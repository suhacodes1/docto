import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Digital Paradigm - Healthcare Digital Experts",
  description:
    "Health - Digital Paradigm: Learn about our mission to help healthcare brands grow with clarity, trust, and strategic digital solutions. Meet our team and discover our approach.",
  keywords:
    "about digital paradigm, healthcare digital agency, digital marketing experts, healthcare technology",
  openGraph: {
    title: "About Us | Digital Paradigm - Healthcare Digital Experts",
    description:
      "Health - Digital Paradigm: Learn about our mission to help healthcare brands grow with clarity, trust, and strategic digital solutions.",
    url: "https://health.digitalparadigm.com/about",
    siteName: "Digital Paradigm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Digital Paradigm - Healthcare Digital Experts",
    description:
      "Health - Digital Paradigm: Learn about our mission to help healthcare brands grow with clarity, trust, and strategic digital solutions.",
  },
  alternates: {
    canonical: "https://health.digitalparadigm.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
