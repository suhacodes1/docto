"use client";

import ServicePageLayout from "@/app/components/ServicePageLayout";
import { Smartphone, Zap, Target, Monitor, Palette, Rocket } from 'lucide-react';

const faqs = [
  {
    q: "What is responsive web design?",
    a: "Responsive web design ensures your website adapts to different screen sizes, providing a seamless experience across desktop, tablet, and mobile devices.",
  },
  {
    q: "Why is responsive design important?",
    a: "Most users browse on mobile devices. A responsive site improves usability, engagement, and overall user experience.",
  },
  {
    q: "Will my website work on all devices?",
    a: "Yes. We design and test across multiple screen sizes to ensure your website looks and functions properly everywhere.",
  },
  {
    q: "Does responsive design affect SEO?",
    a: "Absolutely. Search engines prioritise mobile-friendly websites, so responsive design helps improve your rankings.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We can upgrade your current website to make it fully responsive and modern.",
  },
  {
    q: "How long does it take to build a responsive site?",
    a: "It depends on complexity, but most responsive websites can be completed within a few weeks.",
  },
];

export default function ResponsiveWebDesign() {
  return (
    <><ServicePageLayout
        category="Web Design & Development"
        titleTop="Responsive"
        titleMain="Web"
        titleBottom="Design"
        intro="We design websites that look polished and perform smoothly across desktops, tablets, and mobile devices for a seamless experience everywhere."
        primaryCtaText="Build Your Website"
        primaryCtaLink="/contact"

        heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop"
        heroImageAlt="Responsive website design across devices"

        sectionTwoTitle="Built to perform on every screen"
        sectionTwoTextOne="Modern users access websites from multiple devices, which means your site needs to adapt seamlessly. We create layouts that remain clean, functional, and visually strong across all screen sizes."
        sectionTwoTextTwo="Our responsive design approach ensures your website maintains usability, readability, and performance whether viewed on mobile, tablet, or desktop."
        sectionTwoImage="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop"
        sectionTwoImageAlt="Responsive website layouts"

        featureCards={[
          {
            icon: <Smartphone size={38} />,
            title: "Mobile-Friendly",
            text: "Optimised layouts that work perfectly on phones and smaller screens.",
          },
          {
            icon: <Zap size={38} />,
            title: "Fast Performance",
            text: "Smooth, efficient browsing experiences across all devices.",
          },
          {
            icon: <Target size={38} />,
            title: "Modern Design",
            text: "Clean, professional interfaces that improve user engagement.",
          },
        ]}

        valueTitle="Consistency across every device"
        valueTextOne="A responsive website ensures your brand looks consistent and professional no matter how users access it. This builds trust and keeps your audience engaged."
        valueTextTwo="We focus on layout flexibility, spacing, and usability to ensure your website feels natural and easy to navigate on every screen."
        valueImage="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop"
        valueImageAlt="UI design across devices"

        consultationText="Ready to build a fully responsive website?"

        buildTitle="What we focus on in responsive design"
        buildItems={[
          "Mobile-first design approach",
          "Flexible layouts and grid systems",
          "Optimised images and performance",
          "Readable typography across devices",
          "Consistent spacing and UI scaling",
          "Cross-device testing and refinement",
        ]}
        buildImage="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
        buildImageAlt="Responsive UI interface"

        processTitle="Our responsive design process"
        processSteps={[
          {
            step: "01",
            title: "Planning",
            text: "Define layout structure, content hierarchy, and device priorities.",
          },
          {
            step: "02",
            title: "Responsive Design",
            text: "Create flexible designs that adapt across all screen sizes.",
          },
          {
            step: "03",
            title: "Development",
            text: "Build responsive components that function smoothly everywhere.",
          },
          {
            step: "04",
            title: "Testing & Refinement",
            text: "Test across devices and refine for consistency and performance.",
          },
        ]}

        quoteText="A great website doesn’t just look good on one screen — it works seamlessly on every screen."

        relatedServices={[
          {
            icon: <Monitor size={38} />,
            title: "Web Development",
            text: "Build scalable, high-performance websites tailored to your needs.",
          },
          {
            icon: <Palette size={38} />,
            title: "UI/UX Design",
            text: "Design intuitive and engaging user experiences.",
          },
          {
            icon: <Rocket size={38} />,
            title: "SEO Services",
            text: "Improve visibility and performance with search optimisation.",
          },
        ]}

        faqs={faqs}

        finalCtaText="We design responsive websites that are modern, fast, and built to perform across every device — helping your business deliver a seamless user experience."
        finalCtaButtonText="Book Your Free Consultation"
        finalCtaButtonLink="/contact"
      />
    </>
  );
}

