import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Development | Digital Paradigm - Scalable Software Platforms",
  description:
    "Health - Digital Paradigm: Robust SaaS platforms built with scalable architecture, intuitive user experiences, and secure infrastructure.",
  keywords:
    "saas development, software as a service, scalable platforms, subscription software, cloud applications",
  openGraph: {
    title: "SaaS Development | Digital Paradigm - Scalable Software Platforms",
    description:
      "Health - Digital Paradigm: Robust SaaS platforms built with scalable architecture, intuitive user experiences, and secure infrastructure.",
    url: "https://digitalparadigm.com/health/services/saas-development",
    siteName: "Digital Paradigm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Development | Digital Paradigm - Scalable Software Platforms",
    description:
      "Health - Digital Paradigm: Robust SaaS platforms built with scalable architecture, intuitive user experiences, and secure infrastructure.",
  },
  alternates: {
    canonical: "https://digitalparadigm.com/health/services/saas-development",
  },
};

export default function SaaSDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
