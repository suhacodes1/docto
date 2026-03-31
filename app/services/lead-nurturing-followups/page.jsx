import ServicePageLayout from "@/app/components/ServicePageLayout";
import {
  CalendarClock,
  HeartHandshake,
  MessageCircleHeart,
  RefreshCcw,
  Send,
  UserRoundPlus,
} from "lucide-react";

export default function LeadNurturingFollowupsPage() {
  return (
    <ServicePageLayout
      category="PatientFlow AI"
      titleTop="Lead Nurturing"
      titleMain="Follow-Ups"
      titleBottom="for Clinics"
      intro="Stay top of mind with structured follow-up systems that help more enquiries turn into booked appointments over time."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/services/lead-nurturing-followups/hero.webp"
      heroImageAlt="Lead nurturing follow-ups for clinics"
      sectionTwoTitle="Why Lead Nurturing Follow-Ups Matter"
      sectionTwoTextOne="Not every patient books immediately after their first enquiry. Some need more time, more information, or a few reminders before they are ready to take action."
      sectionTwoTextTwo="Lead nurturing follow-ups help clinics stay visible and supportive throughout that decision-making process without relying on manual follow-up every time."
      sectionTwoImage="/assets/img/services/lead-nurturing-followups/section-two.webp"
      sectionTwoImageAlt="Clinic lead nurturing system"
      featureCards={[
        {
          icon: <Send size={28} />,
          title: "Consistent Follow-Up",
          text: "Create structured communication that keeps leads engaged after their first enquiry.",
        },
        {
          icon: <MessageCircleHeart size={28} />,
          title: "Stronger Relationships",
          text: "Build trust over time with timely, helpful, and patient-friendly messaging.",
        },
        {
          icon: <UserRoundPlus size={28} />,
          title: "More Bookings Over Time",
          text: "Help more undecided leads convert when they are ready to move forward.",
        },
      ]}
      valueTitle="How Nurturing Follow-Ups Support Growth"
      valueTextOne="Lead nurturing helps clinics capture more value from existing enquiries by reducing the number of leads that go cold after first contact."
      valueTextTwo="It is especially useful for clinics with longer decision cycles, higher-value services, or patients who need multiple touchpoints before booking."
      valueImage="/assets/img/services/lead-nurturing-followups/value.webp"
      valueImageAlt="Lead nurturing for clinic growth"
      consultationText="Want to convert more leads with smarter follow-up?"
      buildTitle="What We Help Build"
      buildItems={[
        "Lead nurturing message sequences",
        "Follow-up timing workflows",
        "Patient education touchpoints",
        "Trust-building communication flows",
        "Booking reminder pathways",
        "Cold lead re-engagement support",
        "Conversion-focused messaging journeys",
        "Longer decision-cycle follow-up systems",
      ]}
      buildImage="/assets/img/services/lead-nurturing-followups/build.webp"
      buildImageAlt="Lead follow-up workflow build"
      quoteText="The right follow-up at the right time can turn hesitation into a booked appointment."
      relatedServices={[
        {
          icon: <RefreshCcw size={26} />,
          title: "Patient Reactivation Campaigns",
          text: "Reconnect with past patients and older contacts who may be ready to return.",
        },
        {
          icon: <CalendarClock size={26} />,
          title: "No-Show Reduction Workflows",
          text: "Strengthen patient communication before and after appointments.",
        },
        {
          icon: <HeartHandshake size={26} />,
          title: "AI Chatbot Website & SMS",
          text: "Create faster, more responsive patient communication from first contact onward.",
        },
      ]}
      faqs={[
        {
          q: "What is lead nurturing for clinics?",
          a: "It is a structured follow-up approach that helps clinics stay engaged with leads until they are ready to book.",
        },
        {
          q: "Why do follow-ups matter so much?",
          a: "Many patients do not book immediately, so consistent follow-up helps reduce drop-off and improve conversions.",
        },
        {
          q: "Can this work for high-value treatments?",
          a: "Yes, nurturing is especially helpful when patients need more time or reassurance before making a decision.",
        },
        {
          q: "Does this mean constant messaging?",
          a: "No, good nurturing focuses on timely and helpful communication rather than overwhelming contact.",
        },
      ]}
      finalCtaText="Ready to turn more enquiries into booked patients?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}