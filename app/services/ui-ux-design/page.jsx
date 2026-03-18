"use client";

import ServicePageLayout from "@/app/components/ServicePageLayout";

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
    <ServicePageLayout
      category="Creative & Digital Solutions"
      titleTop="UI/UX"
      titleMain="Design"
      titleBottom=""
      intro="We create intuitive, modern, and visually engaging digital experiences that help brands connect with users and improve usability across every touchpoint."
      primaryCtaText="Start Your Design"
      primaryCtaLink="/contact"

      heroImage="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop"
      heroImageAlt="UI UX design workspace"

      sectionTwoTitle="Design that feels effortless"
      sectionTwoTextOne="Great design is more than visuals — it’s about creating experiences that are intuitive, smooth, and enjoyable to use."
      sectionTwoTextTwo="We focus on user behaviour, usability, and consistency to ensure your product delivers a seamless experience across every interaction."
      sectionTwoImage="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop"
      sectionTwoImageAlt="UI design planning"

      featureCards={[
        {
          icon: "🎨",
          title: "Elegant Interfaces",
          text: "Visually refined designs that represent your brand professionally.",
        },
        {
          icon: "🧠",
          title: "Intuitive Experience",
          text: "Clear user flows that make your product easy to navigate.",
        },
        {
          icon: "❤️",
          title: "User-Centred Design",
          text: "Design decisions focused on real user needs and behaviour.",
        },
      ]}

      valueTitle="Better design, better results"
      valueTextOne="Strong UI/UX design helps users interact with your product effortlessly, improving engagement and overall satisfaction."
      valueTextTwo="We combine visual design and usability principles to create experiences that feel natural and effective."
      valueImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
      valueImageAlt="Team working on UI UX"

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
      buildImage="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
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
          icon: "💻",
          title: "Web Development",
          text: "Bring your designs to life with high-performance websites.",
        },
        {
          icon: "📱",
          title: "Responsive Web Design",
          text: "Ensure your designs work seamlessly across devices.",
        },
        {
          icon: "🚀",
          title: "MVP Development",
          text: "Launch user-focused products quickly and efficiently.",
        },
      ]}

      faqs={faqs}

      finalCtaText="We design digital experiences that are intuitive, visually strong, and built to keep users engaged — helping your product stand out and perform better."
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}