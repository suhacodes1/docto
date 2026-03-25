import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Responsive Web Design | Digital Paradigm - Seamless Cross-Device Experiences",
  description:
    "Health - Digital Paradigm: Modern responsive websites that deliver seamless experiences across desktop, tablet, and mobile devices.",
  keywords:
    "responsive web design, mobile-friendly websites, cross-device design, adaptive layouts, modern web design",
  openGraph: {
    title:
      "Responsive Web Design | Digital Paradigm - Seamless Cross-Device Experiences",
    description:
      "Health - Digital Paradigm: Modern responsive websites that deliver seamless experiences across desktop, tablet, and mobile devices.",
    url: "https://digitalparadigm.com/health/services/responsive-web-design",
    siteName: "Digital Paradigm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Responsive Web Design | Digital Paradigm - Seamless Cross-Device Experiences",
    description:
      "Health - Digital Paradigm: Modern responsive websites that deliver seamless experiences across desktop, tablet, and mobile devices.",
  },
  alternates: {
    canonical:
      "https://digitalparadigm.com/health/services/responsive-web-design",
  },
};

export default function ResponsiveWebDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
