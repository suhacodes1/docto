import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Web Portal Development | Digital Paradigm - Secure User Portals",
  description:
    "Health - Digital Paradigm: Secure and user-friendly portals for customers, staff, and partners to access data, services, and workflows.",
  keywords:
    "web portal development, user portals, secure access, role-based dashboards, workflow visibility",
  openGraph: {
    title:
      "Web Portal Development | Digital Paradigm - Secure User Portals",
    description:
      "Health - Digital Paradigm: Secure and user-friendly portals for customers, staff, and partners to access data, services, and workflows.",
    url: "https://health.digitalparadigm.com/services/web-portal-development",
    siteName: "Digital Paradigm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Portal Development | Digital Paradigm - Secure User Portals",
    description:
      "Health - Digital Paradigm: Secure and user-friendly portals for customers, staff, and partners to access data, services, and workflows.",
  },
  alternates: {
    canonical:
      "https://health.digitalparadigm.com/services/web-portal-development",
  },
};

export default function WebPortalDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
