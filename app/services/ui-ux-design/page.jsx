"use client";

import ServicePageLayout from "@/app/components/ServicePageLayout";
import { Palette, Brain, Heart, Monitor, Smartphone, Rocket } from 'lucide-react';

const faqs = [
  {
    q: "What is UI/UX design?",
    a: "UI (User Interface) focuses on visual design, while UX (User Experience) focuses on how users interact with your product. Together, they create smooth and engaging digital experiences.",
  },
  {
    q: "Why is UI/UX important?",
    a: "Good UI/UX improves usability, builds trust, and helps users navigate your product easily, leading to better engagement and conversions.",
  },
  {
    q: "Do you design for both web and mobile?",
    a: "Yes. We design responsive interfaces that work seamlessly across web, mobile, and different screen sizes.",
  },
  {
    q: "Do you provide wireframes?",
    a: "Yes. We create wireframes to map out structure, user flows, and content before moving into final design.",
  },
  {
    q: "Can you redesign an existing product?",
    a: "Absolutely. We can improve usability, visual design, and overall experience of your current platform.",
  },
  {
    q: "Do you work with developers?",
    a: "Yes. We ensure designs are developer-friendly and can collaborate to bring designs into production smoothly.",
  },
];

export default function UIUXDesign() {
  return (
    <><ServicePageLayout
        category="Creative & Digital Solutions"
        titleTop="UI/UX"
        titleMain="Design"
        titleBottom=""
        intro="We create intuitive, modern, and visually engaging digital experiences that help brands connect with users and improve usability across every touchpoint."
        primaryCtaText="Start Your Design"
        primaryCtaLink="/contact"

        heroImage="/assets/img/services-page/ui-ux-design/001.webp"
        heroImageAlt="UI UX design workspace"

        sectionTwoTitle="Design that feels effortless"
        sectionTwoTextOne="Great design is more than visuals — it’s about creating experiences that are intuitive, smooth, and enjoyable to use."
        sectionTwoTextTwo="We focus on user behaviour, usability, and consistency to ensure your product delivers a seamless experience across every interaction."
        sectionTwoImage="/assets/img/services-page/ui-ux-design/002.webp"
        sectionTwoImageAlt="Service page image 2"

        featureCards={[
          {
            icon: <Palette size={38} />,
            title: "Elegant Interfaces",
            text: "Visually refined designs that represent your brand professionally.",
          },
          {
            icon: <Brain size={38} />,
            title: "Intuitive Experience",
            text: "Clear user flows that make your product easy to navigate.",
          },
          {
            icon: <Heart size={38} />,
            title: "User-Centred Design",
            text: "Design decisions focused on real user needs and behaviour.",
          },
        ]}

        valueTitle="Better design, better results"
        valueTextOne="Strong UI/UX design helps users interact with your product effortlessly, improving engagement and overall satisfaction."
        valueTextTwo="We combine visual design and usability principles to create experiences that feel natural and effective."
        valueImage="/assets/img/services-page/ui-ux-design/003.webp"
        valueImageAlt="Service page image 3"

        consultationText="Ready to design a better user experience?"

        buildTitle="What we focus on in UI/UX design"
        buildItems={[
          "User journey mapping and research",
          "Wireframes and interface planning",
          "Modern UI design systems",
          "Consistent branding and visual identity",
          "Usability improvements and optimisation",
          "Responsive design across devices",
        ]}
        buildImage="/assets/img/services-page/ui-ux-design/004.webp"
        buildImageAlt="UI dashboard"

        processTitle="Our UI/UX design process"
        processSteps={[
          {
            step: "01",
            title: "Research & Discovery",
            text: "Understand your users, goals, and product direction.",
          },
          {
            step: "02",
            title: "Wireframing",
            text: "Define structure, layout, and user flows.",
          },
          {
            step: "03",
            title: "Visual Design",
            text: "Create polished, modern interfaces aligned with your brand.",
          },
          {
            step: "04",
            title: "Refinement",
            text: "Improve usability and finalise the design for production.",
          },
        ]}

        quoteText="Great design is invisible — it simply feels right to the user."

        relatedServices={[
          {
            icon: <Monitor size={38} />,
            title: "Web Development",
            text: "Bring your designs to life with high-performance websites.",
          },
          {
            icon: <Smartphone size={38} />,
            title: "Responsive Web Design",
            text: "Ensure your designs work seamlessly across devices.",
          },
          {
            icon: <Rocket size={38} />,
            title: "MVP Development",
            text: "Launch user-focused products quickly and efficiently.",
          },
        ]}

        faqs={faqs}

        finalCtaText="We design digital experiences that are intuitive, visually strong, and built to keep users engaged — helping your product stand out and perform better."
        finalCtaButtonText="Book Your Free Consultation"
        finalCtaButtonLink="/contact"
      />
    </>
  );
}

