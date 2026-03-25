import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Enterprise Software Development | Digital Paradigm - Robust Business Systems",
  description:
    "Health - Digital Paradigm: Enterprise-grade software solutions designed to streamline operations and support complex business needs.",
  keywords:
    "enterprise software development, business systems, workflow automation, internal tools, secure architecture",
  openGraph: {
    title:
      "Enterprise Software Development | Digital Paradigm - Robust Business Systems",
    description:
      "Health - Digital Paradigm: Enterprise-grade software solutions designed to streamline operations and support complex business needs.",
    url: "https://digitalparadigm.com/health/services/enterprise-software-development",
    siteName: "Digital Paradigm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Enterprise Software Development | Digital Paradigm - Robust Business Systems",
    description:
      "Health - Digital Paradigm: Enterprise-grade software solutions designed to streamline operations and support complex business needs.",
  },
  alternates: {
    canonical:
      "https://digitalparadigm.com/health/services/enterprise-software-development",
  },
};

export default function EnterpriseSoftwareDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
