import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graphic Design | Digital Paradigm - Creative Visual Assets",
  description:
    "Health - Digital Paradigm: Creative visual assets that strengthen your brand identity and communicate your message effectively.",
  keywords:
    "graphic design, visual assets, brand identity, creative design, marketing materials",
  openGraph: {
    title: "Graphic Design | Digital Paradigm - Creative Visual Assets",
    description:
      "Health - Digital Paradigm: Creative visual assets that strengthen your brand identity and communicate your message effectively.",
    url: "https://health.digitalparadigm.com/services/graphic-design",
    siteName: "Digital Paradigm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Design | Digital Paradigm - Creative Visual Assets",
    description:
      "Health - Digital Paradigm: Creative visual assets that strengthen your brand identity and communicate your message effectively.",
  },
  alternates: {
    canonical: "https://health.digitalparadigm.com/services/graphic-design",
  },
};

export default function GraphicDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
