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
      titleTop="Video"
      titleMain="Testimonials"
      titleBottom="for Clinics"
      intro="Build stronger trust with patient testimonial videos that make your clinic feel more credible, human, and memorable."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/services/video-testimonials/hero.webp"
      heroImageAlt="Video testimonials for clinics"
      sectionTwoTitle="Why Video Testimonials Matter"
      sectionTwoTextOne="Written reviews are powerful, but video testimonials can create a stronger emotional connection by showing real patient stories in a more personal and credible format."
      sectionTwoTextTwo="For clinics, video testimonials help future patients feel more confident by seeing outcomes, experiences, and trust in a more authentic way."
      sectionTwoImage="/assets/img/services/video-testimonials/section-two.webp"
      sectionTwoImageAlt="Patient testimonial video strategy"
      featureCards={[
        {
          icon: <CirclePlay size={28} />,
          title: "More Authentic Trust",
          text: "Show real patient stories in a format that feels more personal and believable.",
        },
        {
          icon: <HeartHandshake size={28} />,
          title: "Stronger Emotional Connection",
          text: "Help future patients relate to the experiences of people like them.",
        },
        {
          icon: <Star size={28} />,
          title: "Higher Credibility",
          text: "Support your brand with richer social proof across your website and marketing.",
        },
      ]}
      valueTitle="How Video Testimonials Support Growth"
      valueTextOne="Video testimonials help clinics communicate trust faster by making positive patient experiences easier to see, feel, and remember."
      valueTextTwo="They can strengthen performance across landing pages, ads, and social channels where credibility plays a major role in conversion."
      valueImage="/assets/img/services/video-testimonials/value.webp"
      valueImageAlt="Clinic video testimonial marketing"
      consultationText="Want to build stronger trust with real patient stories?"
      buildTitle="What We Help Build"
      buildItems={[
        "Patient testimonial video strategy",
        "Trust-building website video placement",
        "Social proof content integration",
        "Clinic credibility video assets",
        "Story-led testimonial planning",
        "Video content repurposing pathways",
        "Brand trust enhancement content",
        "Conversion support through testimonials",
      ]}
      buildImage="/assets/img/services/video-testimonials/build.webp"
      buildImageAlt="Video testimonial content system"
      quoteText="Seeing and hearing a real patient story often builds trust faster than words alone."
      relatedServices={[
        {
          icon: <MessageSquareQuote size={26} />,
          title: "Review Generation Campaigns",
          text: "Support written reviews with deeper and more persuasive video-based trust signals.",
        },
        {
          icon: <Camera size={26} />,
          title: "Educational Content Short & Long",
          text: "Expand your content strategy with trust-building video alongside educational media.",
        },
        {
          icon: <Users size={26} />,
          title: "Personal Brand Building Doctors",
          text: "Help doctors build familiarity and authority through more visible human content.",
        },
      ]}
      faqs={[
        {
          q: "Why are video testimonials effective for clinics?",
          a: "They help future patients see real stories and build trust in a more personal and emotionally engaging way.",
        },
        {
          q: "Are video testimonials better than written reviews?",
          a: "They are different but complementary, with video often creating stronger emotional connection and credibility.",
        },
        {
          q: "Where can clinics use testimonial videos?",
          a: "They can be used on websites, landing pages, social media, and marketing campaigns.",
        },
        {
          q: "Do they help conversion?",
          a: "Yes, strong testimonials can help reduce hesitation and increase patient confidence in taking action.",
        },
      ]}
      finalCtaText="Ready to build trust with powerful patient stories?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}