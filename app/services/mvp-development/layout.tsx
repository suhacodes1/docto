import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "MVP Development | Digital Paradigm - Launch Your Healthcare Product Fast",
  description:
    "Health - Digital Paradigm: Launch your healthcare product faster with our MVP development services. We build lean, scalable MVPs to validate ideas and attract early users.",
  keywords:
    "MVP development, minimum viable product, healthcare startup, product validation, lean development",
  openGraph: {
    title:
      "MVP Development | Digital Paradigm - Launch Your Healthcare Product Fast",
    description:
      "Health - Digital Paradigm: Launch your healthcare product faster with our MVP development services. We build lean, scalable MVPs to validate ideas.",
    url: "https://health.digitalparadigm.com/services/mvp-development",
    siteName: "Digital Paradigm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MVP Development | Digital Paradigm - Launch Your Healthcare Product Fast",
    description:
      "Health - Digital Paradigm: Launch your healthcare product faster with our MVP development services. We build lean, scalable MVPs.",
  },
  alternates: {
    canonical: "https://health.digitalparadigm.com/services/mvp-development",
  },
};

export default function MVPDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
