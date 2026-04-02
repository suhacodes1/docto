import ServicePageLayout from "@/app/components/ServicePageLayout";
import { Monitor, MousePointerClick, CalendarCheck, BarChart3, Globe, Users } from "lucide-react";

export default function ConversionFocusedWebsitePage() {
  return (
    <ServicePageLayout
      category="HEALTH CLINIC GROWTH SYSTEM"
      titleTop="Conversion Focused"
      titleMain="Website"
      intro="Your website shouldn’t just look good — it should generate patients.

We design high-converting clinic websites built to turn every visitor into a booked appointment."

      primaryCtaText="GET A FREE WEBSITE AUDIT"
      primaryCtaLink="/contact"

      heroImage="/assets/img/inner-pages/conversion-focused-website/001.webp"
      heroImageAlt="Clinic website hero"

      sectionTwoTitle="Most clinic websites look fine. But they don’t convert."
      sectionTwoTextOne="Slow loading. Confusing layouts. No clear booking path.

Patients land on your website — and leave without taking action."
      sectionTwoTextTwo="The problem isn’t traffic. It’s conversion.

We build conversion-focused clinic websites designed to guide visitors step-by-step toward booking — removing friction and increasing trust at every stage."

      sectionTwoImage="/assets/img/inner-pages/conversion-focused-website/002.webp"
      sectionTwoImageAlt="Clinic website strategy"

      featureCards={[
        {
          icon: <Monitor size={28} />,
          title: "Conversion-First Design",
          text: "Every section is strategically built to guide visitors toward booking an appointment.",
        },
        {
          icon: <MousePointerClick size={28} />,
          title: "Clear Patient Journey",
          text: "From landing to booking — a smooth, intuitive experience with zero confusion.",
        },
        {
          icon: <CalendarCheck size={28} />,
          title: "Mobile-Optimized Experience",
          text: "Designed for mobile-first users where most patient decisions happen.",
        },
      ]}

valueTitle="Turn clicks into real patient bookings"

valueTextOne={`A website should do one thing well: convert.

We combine design, psychology, and strategy to ensure your visitors don’t just browse — they take action.`}

valueResultItems={[
  { text: "Higher booking rates", tag: "More patients", tagColor: "pink" },
  { text: "Lower cost per lead", tag: "Better ROI", tagColor: "green" },
  { text: "Better patient experience", tag: "Higher satisfaction", tagColor: "blue" },
]}

      valueImage="/assets/img/inner-pages/conversion-focused-website/003.webp"
      valueImageAlt="Website conversion optimisation"

      consultationText="Is your website helping you grow — or costing you patients?"

      buildTitle="Perfect for clinics that want better results from their website"
      buildItems={[
        "Clinics with outdated or low-performing websites",
        "New clinics needing a strong online presence",
        "Clinics getting traffic but low bookings",
        "Clinics running paid ads without conversions",
        "Premium clinics wanting a high-end digital presence",
        "Clinics transitioning to digital-first growth",
      ]}

      buildImage="/assets/img/inner-pages/conversion-focused-website/004.webp"
      buildImageAlt="Conversion focused website features"

      quoteText="A beautiful website is good. A converting website is better."

      relatedServices={[
        {
          icon: <Globe size={26} />,
          title: "Landing Page Design",
          text: "High-converting pages for specific campaigns and offers.",
        },
        {
          icon: <BarChart3 size={26} />,
          title: "Conversion Rate Optimization (CRO)",
          text: "Improve your existing website performance.",
        },
        {
          icon: <Users size={26} />,
          title: "Booking System Integration",
          text: "Seamless appointment scheduling for better user experience.",
        },
      ]}

      faqs={[
        {
          q: "How is this different from a normal website?",
          a: "It’s built specifically to convert visitors into patients — not just to look good.",
        },
        {
          q: "How long does it take to build?",
          a: "Typically 2–5 weeks depending on complexity.",
        },
        {
          q: "Will it work on mobile devices?",
          a: "Yes — it’s fully optimized for mobile-first users.",
        },
        {
          q: "Can you redesign my existing website?",
          a: "Absolutely — we can improve or rebuild it for better performance.",
        },
        {
          q: "Do you include booking systems?",
          a: "Yes — we integrate seamless appointment booking flows.",
        },
        {
          q: "Will this help with ads performance?",
          a: "Yes — a better website significantly improves conversion rates from ads.",
        },
      ]}

      finalCtaText="Ready to Turn Your Website into a Patient-Generating Machine?

Stop losing patients due to poor design and weak messaging. Build a website that works for your clinic — 24/7."
      finalCtaButtonText="Get Free Website Audit"
      finalCtaButtonLink="/contact"
    />
  );
}