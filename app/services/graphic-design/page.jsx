"use client";

import ServicePageLayout from "@/app/components/ServicePageLayout";
import { Palette, Megaphone, Sparkles, Brush, Smartphone, Monitor } from 'lucide-react';

const faqs = [
  {
    q: "What graphic design services do you offer?",
    a: "We create brand visuals, social media graphics, marketing collateral, digital assets, promotional materials, presentation designs, and print-ready creative work tailored to your business.",
  },
  {
    q: "Can you design assets that match our brand identity?",
    a: "Yes. We design with your brand colours, typography, tone, and visual direction in mind so every asset feels consistent and recognisable across platforms.",
  },
  {
    q: "Do you create graphics for both digital and print?",
    a: "Absolutely. We design assets optimised for websites, social media, email campaigns, ads, presentations, brochures, flyers, and other print materials.",
  },
  {
    q: "Can you help if we do not have a strong brand style yet?",
    a: "Yes. We can help shape a stronger visual direction through design choices that improve consistency, clarity, and overall brand presentation.",
  },
  {
    q: "How long does a graphic design project take?",
    a: "Timelines depend on the type and quantity of assets needed. A single design task may take a few days, while a broader creative package or campaign may take longer depending on revisions and scope.",
  },
  {
    q: "Do you provide ongoing design support?",
    a: "Yes. We can support ongoing creative needs for campaigns, content, promotions, branded materials, and new business initiatives as your brand grows.",
  },
];

export default function GraphicDesign() {
  return (
    <><ServicePageLayout
        category="Branding & Creative Services"
        titleTop="Your"
        titleMain="Graphic"
        titleBottom="Design"
        intro="We craft impactful visual designs that communicate your message, strengthen your brand identity, and leave a lasting impression across digital and print platforms."
        primaryCtaText="Start Your Project"
        primaryCtaLink="/contact"
        heroImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
        heroImageAlt="Creative graphic design workspace"
        sectionTwoTitle="Design that captures attention"
        sectionTwoTextOne="Strong graphic design helps businesses present themselves with confidence. The right visuals make your message clearer, your brand more recognisable, and your marketing more engaging."
        sectionTwoTextTwo="We create designs that align with your identity, support your goals, and help your business look polished across every touchpoint — from social content to campaign assets and promotional materials."
        sectionTwoImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
        sectionTwoImageAlt="Creative team working on visual design"
        featureCards={[
          {
            icon: <Palette size={38} />,
            title: "Brand-Aligned Visuals",
            text: "Every design is created to reflect your brand identity clearly and consistently across digital and print platforms.",
          },
          {
            icon: <Megaphone size={38} />,
            title: "Marketing-Ready Assets",
            text: "We design creative materials that support campaigns, promotions, launches, and everyday brand communication.",
          },
          {
            icon: <Sparkles size={38} />,
            title: "Memorable Presentation",
            text: "Professional design helps your business stand out, look more credible, and leave a stronger impression.",
          },
        ]}
        valueTitle="Better visuals create stronger brand impact"
        valueTextOne="Graphic design is not just about making things look good — it shapes how people perceive your business. Strong visuals can build trust, improve recognition, and help your message land more effectively."
        valueTextTwo="From digital campaigns to brand assets and promotional materials, we focus on creating designs that are clear, professional, and built to support real business growth."
        valueImage="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop"
        valueImageAlt="Graphic design work and creative assets"
        consultationText="Looking for professional graphic design support?"
        buildTitle="We create visual assets for every brand touchpoint"
        buildItems={[
          "Social media graphics and campaign visuals",
          "Branded promotional materials and marketing assets",
          "Presentation design and business collateral",
          "Digital ads, banners, and creative content",
          "Print-ready brochures, flyers, and posters",
          "Consistent visual assets for web and business use",
        ]}
        buildImage="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop"
        buildImageAlt="Graphic design tools and creative workspace"
        processTitle="How we turn ideas into strong visual assets"
        processSteps={[
          {
            step: "01",
            title: "Creative Brief",
            text: "We understand your brand, audience, goals, and the purpose behind each design deliverable.",
          },
          {
            step: "02",
            title: "Concept Design",
            text: "We explore layouts, visual directions, and creative ideas that align with your brand identity.",
          },
          {
            step: "03",
            title: "Design Development",
            text: "Chosen concepts are refined into polished, professional assets ready for real-world use.",
          },
          {
            step: "04",
            title: "Delivery & Support",
            text: "Final files are prepared for digital or print use, with support for consistency across future materials.",
          },
        ]}
        quoteText="Great design does more than look impressive — it helps your brand communicate clearly, feel more professional, and stay memorable in a crowded market."
        relatedServices={[
          {
            icon: <Brush size={38} />,
            title: "Brand Identity Design",
            text: "Visual identity work that strengthens consistency across logos, brand assets, and presentation materials.",
          },
          {
            icon: <Smartphone size={38} />,
            title: "Social Media Design",
            text: "Creative social assets designed to improve engagement, consistency, and campaign performance online.",
          },
          {
            icon: <Monitor size={38} />,
            title: "UI/UX Design",
            text: "User-focused interface design that combines visual quality with usability across websites and platforms.",
          },
        ]}
        faqs={faqs}
        finalCtaText="Our team creates thoughtful, brand-aligned visuals that help your business stand out with more clarity, consistency, and impact across every platform."
        finalCtaButtonText="Book Your Free Design Consultation"
        finalCtaButtonLink="/contact"
      />
    </>
  );
}

