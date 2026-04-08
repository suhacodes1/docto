'use client';

import ServiceLandingLayout from '@/app/components/ServiceLandingLayout';
import {
  CalendarCheck,
  Users,
  Repeat,
  Dot,
} from 'lucide-react';

const faqData = [
  { q: 'How fast can we launch a patient acquisition page?', a: 'Standard builds can go live in 4–6 weeks with polished UX, mobile-first performance, and core SEO implemented from day 1.' },
  { q: 'Can you connect with our existing booking system?', a: 'Yes. We can integrate major providers and custom APIs so you keep appointments in one dashboard without double data entry.' },
  { q: 'Do these pages run fast on mobile?', a: 'Absolutely. Tailwind-based responsive rendering and image optimizations minimize load time and deliver high Core Web Vitals scores.' },
  { q: 'Will the design work for multiple service pages?', a: 'Yes — the layout uses reusable sections; you can swap titles, text, icons, and CTAs for each service page.' },
  { q: 'Is there a support/maintenance option?', a: 'We provide monthly support plans for content updates, performance monitoring, A/B tests, and security patches.' },
  { q: 'Can we update the page content from admin?', a: 'We can add a content CMS integration (e.g., Sanity, Contentful, Strapi) if required for non-technical editing.' },
];

export default function DentalClinicServicePage() {
  return (
    <ServiceLandingLayout
      hero={{
        subtitle: 'Dental Clinics',
        title: 'Fill your chairs with',
        highlight: 'a predictable flow of high-quality patients.',
        description: 'We partner with dental clinics to build scalable patient acquisition systems that increase bookings, reduce no-shows, and drive consistent monthly revenue.',
        primaryAction: { label: 'Our Service', href: '/services' },
        secondaryAction: { label: 'See Pricing', href: '/pricing' },
        emergencyPhone: '+612-5119-4369',
        imageSrc: '/assets/img/who-we-work-with/1.webp',
        imageAlt: 'Dental service hero',
      }}
      aboutBlock={{
        smallTitle: 'About Us',
        title: "CORE POSITIONING",
        description: 'Healthcare businesses don’t struggle because of a lack of marketing—they struggle because they lack a connected growth system. We operate as a long-term growth partner, designing and implementing end-to-end systems that manage your entire patient journey—from first search to confirmed booking and beyond.',
        imageSrc: '/assets/img/who-we-work-with/2.webp',
        imageAlt: 'Dental practice about',
      }}
      featureBlock={{
        heading: 'Our Approach',
        description: 'We build and optimise three core growth engines inside your practice:',
        features: [
          {
            icon: <Users size={32} className="text-[#ef2f6b]" />,
            title: 'Patient Acquisition',
            text: 'We position your clinic where high-intent patients are already searching through: Google search optimisation, Paid advertising campaigns, Local visibility strategies.',
          },
          {
            icon: <CalendarCheck size={32} className="text-[#ef2f6b]" />,
            title: 'Conversion Systems',
            text: 'We turn enquiries into booked appointments by improving: website and landing page performance, call handling and enquiry response, automated follow-ups and reminders.',
          },
          {
            icon: <Repeat size={32} className="text-[#ef2f6b]" />,
            title: 'Retention & Reactivation',
            text: 'We help you maximise patient lifetime value through: recall systems, reactivation campaigns, ongoing engagement strategies.',
          },
        ],
      }}
      statsBlock={{
        heading: 'OUTCOMES',
        description: 'Our systems are designed to help you:',
        stats: [
          { value: 'Steady flow', label: 'of qualified enquiries' },
          { value: 'Higher conversion', label: 'from enquiry to booking' },
          { value: 'Fewer missed', label: 'opportunities and no-shows' },
          { value: 'Predictable growth', label: 'and a scalable revenue pipeline' },
        ],
      }}
      processBlock={{
        sectionTitle: 'Fill More Dental Appointments with Ready Patients',
        sectionDescription: 'Most dental clinics rely heavily on referrals or inconsistent marketing.',
        sectionSubheading: 'We help you:',
        items: [
          'Attract high-value treatments (implants, cosmetic, Invisalign)',
          'Reduce empty chair time',
          'Improve patient conversion at reception level',
        ],
        mainImageSrc: '/assets/img/who-we-work-with/3.webp',
        mainImageAlt: 'Dental appointments',
      }}
      infoBlock={{
        topTitle: 'WHY US',
        heading: 'We are not a traditional marketing agency.',
        leftTitle: 'What We Don\'t Do',
        leftItems: [
          'We don\'t just run campaigns',
          'We don\'t operate in silos',
          'We don\'t focus on vanity metrics',
        ],
        centerImageSrc: '/assets/img/who-we-work-with/4.webp',
        centerImageAlt: 'Why choose us',
        quote: 'Instead, we build integrated growth systems that are measurable, continuously optimised, and aligned with real business outcomes.',
        features: ['Measurable Results', 'Continuous Optimisation', 'Real Business Outcomes'],
      }}
      faqBlock={{
        heading: 'Frequently Asked Questions',
        description: 'Common questions from clinic owners before their first project kickoff.',
        faqs: faqData,
      }}
    />
  );
}
