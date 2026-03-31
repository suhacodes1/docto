import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Digital Paradigm - Let's Discuss Your Project",
  description:
    "Health - Digital Paradigm: Ready to transform your healthcare business? Contact us to discuss your digital project. We help clinics and providers build scalable solutions.",
  keywords:
    "contact digital paradigm, healthcare digital consultation, custom web development quote, SaaS development contact",
  openGraph: {
    title: "Contact Us | Digital Paradigm - Let's Discuss Your Project",
    description:
      "Health - Digital Paradigm: Ready to transform your healthcare business? Contact us to discuss your digital project.",
    url: "https://health.digitalparadigm.com/contact",
    siteName: "Digital Paradigm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Digital Paradigm - Let's Discuss Your Project",
    description:
      "Health - Digital Paradigm: Ready to transform your healthcare business? Contact us to discuss your digital project.",
  },
  alternates: {
    canonical: "https://health.digitalparadigm.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
