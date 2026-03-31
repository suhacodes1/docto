import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design | Digital Paradigm - Intuitive User Experiences",
  description:
    "Health - Digital Paradigm: Thoughtful user interface and experience design that improves usability, engagement, and product clarity.",
  keywords:
    "ui ux design, user interface design, user experience design, intuitive interfaces, product usability",
  openGraph: {
    title: "UI/UX Design | Digital Paradigm - Intuitive User Experiences",
    description:
      "Health - Digital Paradigm: Thoughtful user interface and experience design that improves usability, engagement, and product clarity.",
    url: "https://health.digitalparadigm.com/services/ui-ux-design",
    siteName: "Digital Paradigm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design | Digital Paradigm - Intuitive User Experiences",
    description:
      "Health - Digital Paradigm: Thoughtful user interface and experience design that improves usability, engagement, and product clarity.",
  },
  alternates: {
    canonical: "https://health.digitalparadigm.com/services/ui-ux-design",
  },
};

export default function UIUXDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
