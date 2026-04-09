import ServicePageLayout from "@/app/components/ServicePageLayout";
import {
  Camera,
  CirclePlay,
  HeartHandshake,
  MessageSquareQuote,
  Star,
  Users,
} from "lucide-react";

export default function VideoTestimonialsPage() {
  return (
    <ServicePageLayout
      category="Authority Builder"
      titleTop="Turn Real Patient Stories"
      titleMain="Into Your Most Powerful"
      titleBottom="Sales Asset"
      intro="Reviews build trust. Video builds belief. We create high-impact video testimonials that show real results, real experiences, and real outcomes — driving faster patient decisions."
      primaryCtaText="BOOK A STRATEGY CALL"
      primaryCtaLink="/contact"
      heroImage="/assets/img/inner-pages/video-testimonials/001.webp"
      heroImageAlt="Video testimonials for clinics"
      sectionTwoTitle="Patients don’t just want proof — they want to see it"
      sectionTwoTextOne="Text reviews are important. But they don’t fully answer: “Will this work for me?” and “Can I trust this clinic?”"
      sectionTwoTextTwo="Video removes doubt instantly. We build a Video Proof System that makes your results visible and believable."
      sectionTwoImage="/assets/img/inner-pages/video-testimonials/002.webp"
      sectionTwoImageAlt="Video proof system for clinics"
      featureCards={[
        {
          icon: <CirclePlay size={28} />,
          title: "Structured Patient Stories",
          text: "Capture before, experience, and outcome journeys in a format that feels clear, persuasive, and real.",
        },
        {
          icon: <HeartHandshake size={28} />,
          title: "High-Impact Production",
          text: "Create testimonial videos designed for clarity, emotion, trust, and stronger patient confidence.",
        },
        {
          icon: <Star size={28} />,
          title: "Multi-Channel Deployment",
          text: "Use your testimonial content across websites, ads, landing pages, and social media.",
        },
      ]}
      valueTitle="Turn trust into immediate action"
      valueTextOne="When patients see others like them getting real results, hesitation disappears and confidence increases."
      valueTextTwo="Drive faster decision-making, higher conversion rates, and stronger emotional trust with visible proof."
      valueImage="/assets/img/inner-pages/video-testimonials/003.webp"
      valueImageAlt="Video testimonials driving trust and conversions for clinics"
      consultationText="Do your patients just read about results — or actually see them?"
      buildTitle="What We Help Build"
      buildItems={[
        "Structured patient testimonial storylines",
        "High-impact testimonial video assets",
        "Trust-building website video placement",
        "Video proof systems for clinics",
        "Social and ad video deployment plans",
        "Story-led patient outcome content",
        "Conversion-focused testimonial campaigns",
        "Multi-channel trust-building content",
      ]}
      buildImage="/assets/img/inner-pages/video-testimonials/004.webp"
      buildImageAlt="Video testimonial system for clinic marketing"
      quoteText="When patients can see real outcomes and hear real experiences, trust happens faster."
      relatedServices={[
        {
          icon: <MessageSquareQuote size={26} />,
          title: "Review Generation Campaigns",
          text: "Strengthen written reviews with richer, more persuasive video-based proof.",
        },
        {
          icon: <Camera size={26} />,
          title: "Educational Content Short & Long",
          text: "Build trust and authority with educational content alongside testimonial media.",
        },
        {
          icon: <Users size={26} />,
          title: "Personal Brand Building Doctors",
          text: "Help doctors become more familiar, credible, and trusted through human-centered content.",
        },
      ]}
      faqs={[
        {
          q: "Why are video testimonials effective for clinics?",
          a: "They help patients see real stories, real outcomes, and real experiences in a way that feels more believable than text alone.",
        },
        {
          q: "Are video testimonials better than written reviews?",
          a: "They work best together, but video often creates stronger emotional trust and faster belief.",
        },
        {
          q: "Where can clinics use testimonial videos?",
          a: "They can be used across websites, landing pages, social media, paid ads, and email campaigns.",
        },
        {
          q: "Do video testimonials help conversions?",
          a: "Yes. They reduce doubt, build trust faster, and help patients feel more confident taking action.",
        },
      ]}
      finalCtaText="Ready to Show Proof That Patients Believe?"
      finalCtaButtonText="BOOK A STRATEGY CALL"
      finalCtaButtonLink="/contact"
    />
  );
}