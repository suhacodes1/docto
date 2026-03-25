import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Custom Web Development | Digital Paradigm - Tailored Healthcare Websites",
  description:
    "Health - Digital Paradigm: Get custom web development for your healthcare business. We build scalable websites and platforms designed around your workflows, users, and growth goals.",
  keywords:
    "custom web development, healthcare websites, web platforms, scalable web solutions, custom coding",
  openGraph: {
    title:
      "Custom Web Development | Digital Paradigm - Tailored Healthcare Websites",
    description:
      "Health - Digital Paradigm: Get custom web development for your healthcare business. We build scalable websites and platforms designed around your workflows.",
    url: "https://digitalparadigm.com/health/services/custom-web-development",
    siteName: "Digital Paradigm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Custom Web Development | Digital Paradigm - Tailored Healthcare Websites",
    description:
      "Health - Digital Paradigm: Get custom web development for your healthcare business. We build scalable websites and platforms designed around your workflows.",
  },
  alternates: {
    canonical:
      "https://digitalparadigm.com/health/services/custom-web-development",
  },
};

export default function CustomWebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
