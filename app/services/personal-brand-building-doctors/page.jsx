import ServicePageLayout from "@/app/components/ServicePageLayout";
import ProcessSectionServicesThree from "@/app/components/ProcessSectionServicesThree";
import {
  BadgePlus,
  BriefcaseMedical,
  Mic,
  Star,
  Stethoscope,
  UserCircle2,
} from "lucide-react";

export default function PersonalBrandBuildingDoctorsPage() {
  return (
    <ServicePageLayout
      category="AUTHORITY BUILDER SYSTEM"
      titleTop="Turn Doctors Into the First Choice"
      titleMain="— Not Just an Option"
      titleBottom=""
      intro={`Patients don’t just choose clinics — they choose people they trust.

We build personal brands that position doctors as recognised authorities patients actively seek out.`}
      primaryCtaText="BOOK A BRAND STRATEGY CALL"
      primaryCtaLink="/contact"
      heroImage="/assets/img/inner-pages/personal-brand-building/1.webp"
      heroImageAlt="Personal brand building for doctors"
      sectionTwoTitle="If patients don’t know you — they can’t choose you"
      sectionTwoTextOne={`Today’s patient journey includes Google, social media, and content. If you’re not visible — you’re invisible.`}
      sectionTwoTextTwo={`Even great doctors get overlooked without a strong presence. We build your Doctor Authority System.`}
      sectionTwoImage="/assets/img/inner-pages/personal-brand-building/2.webp"
      sectionTwoImageAlt="Doctor personal brand strategy"
      featureCards={[
        {
          icon: <UserCircle2 size={28} />,
          title: "Authority Positioning",
          text: "Define your niche and expertise clearly.",
        },
        {
          icon: <Stethoscope size={28} />,
          title: "Content-Driven Visibility",
          text: "Build trust through consistent content.",
        },
        {
          icon: <Star size={28} />,
          title: "Multi-Platform Presence",
          text: "Stay visible where patients are.",
        },
      ]}
      valueTitle="Turn expertise into influence — and influence into patients"
      valueTextOne={`When patients trust you before meeting you — conversion becomes easy.`}
      valueResultItems={[
        { text: "More direct inquiries", tagColor: "pink" },
        { text: "Premium positioning", tagColor: "green" },
        { text: "Stronger patient relationships", tagColor: "blue" },
      ]}
      valueImage="/assets/img/inner-pages/personal-brand-building/3.webp"
      valueImageAlt="Doctor authority and visibility growth"
      consultationText="Are patients choosing you — or just the clinic brand?"
      buildTitle="What We Help Build"
      buildItems={[
        "Doctor visibility strategy",
        "Practitioner authority positioning",
        "Educational content frameworks",
        "Thought leadership content support",
        "Trust-building personal brand systems",
        "Profile and credibility enhancements",
        "Human-centred brand storytelling",
        "Practitioner-led content pathways",
      ]}
      buildImage="/assets/img/inner-pages/personal-brand-building/4.webp"
      buildImageAlt="Doctor brand system build"
      quoteText="Patients are more likely to choose a doctor they already trust."
      relatedServices={[
        {
          icon: <Mic size={26} />,
          title: "Educational Content Short & Long",
          text: "Build authority through useful content that showcases practitioner expertise.",
        },
        {
          icon: <BriefcaseMedical size={26} />,
          title: "Video Testimonials",
          text: "Support doctor credibility with real patient stories and trust signals.",
        },
        {
          icon: <BadgePlus size={26} />,
          title: "Review Generation Campaigns",
          text: "Strengthen practitioner reputation with more visible patient feedback.",
        },
      ]}
      faqs={[
        {
          q: "Why does personal branding matter for doctors?",
          a: "Patients often choose practitioners they feel familiar with and confident in, not just the clinic itself.",
        },
        {
          q: "Does this only help specialists?",
          a: "No, personal branding can help any practitioner build trust, authority, and visibility.",
        },
        {
          q: "What kind of content supports a doctor’s brand?",
          a: "Educational content, videos, testimonials, and profile-based credibility content all help.",
        },
        {
          q: "Can personal branding help clinic growth overall?",
          a: "Yes, stronger practitioner visibility can improve trust, conversion, and long-term brand differentiation.",
        },
      ]}
      finalCtaText={`Ready to Become the Doctor Patients Trust First?`}
      finalCtaButtonText="BOOK A BRAND STRATEGY CALL"
      finalCtaButtonLink="/contact"
      processComponent={<ProcessSectionServicesThree />}
    />
  );
}