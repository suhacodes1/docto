"use client";

import ServiceLandingLayout from "@/app/components/ServiceLandingLayout";
import { CalendarCheck, Users, Repeat } from "lucide-react";

const faqData = [
  {
    q: "How fast can we launch a physiotherapy clinic website?",
    a: "Standard builds can go live in 4–6 weeks with health-focused UX, mobile-first performance, and core SEO implemented from day 1.",
  },
  {
    q: "Can you integrate our physiotherapy practice management system?",
    a: "Yes. We can integrate major providers and custom APIs so you keep appointments in one dashboard without double data entry.",
  },
  {
    q: "Do these pages run fast on mobile?",
    a: "Absolutely. Tailwind-based responsive rendering and image optimizations minimize load time and deliver high Core Web Vitals scores.",
  },
  {
    q: "Will the design work for multiple service pages?",
    a: "Yes — the layout uses reusable sections; you can swap titles, text, icons, and CTAs for each physiotherapy specialty.",
  },
  {
    q: "Is there a support/maintenance option?",
    a: "We provide monthly support plans for content updates, performance monitoring, A/B tests, and security patches.",
  },
  {
    q: "Can we update the page content from admin?",
    a: "We can add a content CMS integration (e.g., Sanity, Contentful, Strapi) if required for non-technical editing.",
  },
];

export default function PhysiotherapyClinicsServicePage() {
  return (
    <ServiceLandingLayout
      hero={{
        subtitle: "Physiotherapy Clinics",
        title: "Keep your appointment book full with",
        highlight: "consistent patient flow.",
        description:
          "We partner with physiotherapy clinics to build systems that generate enquiries, improve conversions, and maximise practitioner utilisation.",
        primaryAction: { label: "Our Service", href: "/services" },
        secondaryAction: { label: "See Pricing", href: "/pricing" },
        emergencyPhone: "+612-5119-4369",
        imageSrc:
          "/assets/img/who-we-work-with/17.webp",
        imageAlt: "Physiotherapy clinic hero",
      }}
      aboutBlock={{
        smallTitle: "About Us",
        title: "CORE POSITIONING",
        description:
          "Healthcare businesses don’t struggle because of a lack of marketing—they struggle because they lack a connected growth system. We operate as a long-term growth partner, designing and implementing end-to-end systems that manage your entire patient journey—from first search to confirmed booking and beyond.",
        imageSrc: "/assets/img/who-we-work-with/18.webp",
        imageAlt: "Physiotherapy clinic about",
      }}
      featureBlock={{
        heading: "Our Approach",
        description:
          "We build and optimise three core growth engines inside your practice:",
        features: [
          {
            icon: <Users size={32} className="text-[#ef2f6b]" />,
            title: "Patient Acquisition",
            text: "We position your clinic where high-intent patients are already searching through: Google search optimisation, Paid advertising campaigns, Local visibility strategies.",
          },
          {
            icon: <CalendarCheck size={32} className="text-[#ef2f6b]" />,
            title: "Conversion Systems",
            text: "We turn enquiries into booked appointments by improving: website and landing page performance, call handling and enquiry response, automated follow-ups and reminders.",
          },
          {
            icon: <Repeat size={32} className="text-[#ef2f6b]" />,
            title: "Retention & Reactivation",
            text: "We help you maximise patient lifetime value through: recall systems, reactivation campaigns, ongoing engagement strategies.",
          },
        ],
      }}
      statsBlock={{
        heading: "OUTCOMES",
        description: "Our systems are designed to help you:",
        stats: [
          { value: "Steady flow", label: "of qualified enquiries" },
          { value: "Higher conversion", label: "from enquiry to booking" },
          { value: "Fewer missed", label: "opportunities and no-shows" },
          {
            value: "Predictable growth",
            label: "and a scalable revenue pipeline",
          },
        ],
      }}
      processBlock={{
        sectionTitle: "Turn One-Time Visits into Loyal Patients",
        sectionDescription:
          "Physio clinics often struggle with gaps in appointment schedules.",
        sectionSubheading: "We help you:",
        items: [
          "Maintain consistent patient flow",
          "Improve rebooking rates",
          "Maximise practitioner utilisation",
        ],
        mainImageSrc:
          "/assets/img/who-we-work-with/19.webp",
        mainImageAlt: "Physiotherapy assessment",
      }}
      infoBlock={{
        topTitle: "WHY US",
        heading: "We are not a traditional marketing agency.",
        leftTitle: "What We Don't Do",
        leftItems: [
          "We don't just run campaigns",
          "We don't operate in silos",
          "We don't focus on vanity metrics",
        ],
        centerImageSrc: "/assets/img/who-we-work-with/20.webp",
        centerImageAlt: "Why choose us",
        quote:
          "Instead, we build integrated growth systems that are measurable, continuously optimised, and aligned with real business outcomes.",
        features: [
          "Measurable Results",
          "Continuous Optimisation",
          "Real Business Outcomes",
        ],
      }}
      faqBlock={{
        heading: "Frequently Asked Questions",
        description:
          "Common questions from physiotherapy clinics considering our platform.",
        faqs: faqData,
      }}
    />
  );
}
