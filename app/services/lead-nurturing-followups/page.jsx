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
      category="HEALTH CLINIC GROWTH SYSTEM"
      titleTop="Lead Nurturing "
      titleMain="& Follow-Ups"
      titleBottom=""
      intro={`Most patients don’t book on the first interaction.

We build smart follow-up systems that nurture leads, build trust, and convert them into appointments over time.`}
      primaryCtaText="BOOK A DEMO"
      primaryCtaLink="/contact"

      heroImage="/assets/img/inner-pages/lead-nurturing-follow-ups/001.webp"
      heroImageAlt="Lead nurturing follow-ups for clinics"

      sectionTwoTitle="Most clinics lose leads after the first contact"
      sectionTwoTextOne={`A patient shows interest… then disappears.

No follow-up. No reminder. No second touch.`}
      sectionTwoTextTwo={`This is where most clinics lose a huge percentage of potential patients.

Patients get busy, forget, or hesitate — and without follow-up, they never come back.

We implement a Lead Nurturing & Follow-Up System that keeps your clinic top-of-mind and guides patients toward booking.`}
      sectionTwoImage="/assets/img/inner-pages/lead-nurturing-follow-ups/002.webp"
      sectionTwoImageAlt="Clinic lead nurturing system"

      featureCards={[
        {
          icon: <Send size={28} />,
          title: "Automated Follow-Up Sequences",
          text: "Send timely messages that re-engage and remind patients.",
        },
        {
          icon: <MessageCircleHeart size={28} />,
          title: "Multi-Channel Nurturing",
          text: "Reach patients via SMS, WhatsApp, and email.",
        },
        {
          icon: <UserRoundPlus size={28} />,
          title: "Smart Timing & Personalization",
          text: "Deliver the right message at the right time to increase conversions.",
        },
      ]}

      valueTitle="Convert interest into action — even days later"
      valueTextOne={`Not every patient books immediately — and that’s normal.

The key is staying connected.

Our system nurtures leads with helpful reminders, information, and gentle prompts that guide them back to booking.`}
      valueResultItems={[
        { text: "Higher conversion rates", tag: "More bookings", tagColor: "pink" },
        { text: "More booked appointments", tag: "Better outcomes", tagColor: "green" },
        { text: "Better use of existing leads", tag: "Less waste", tagColor: "blue" },
      ]}
      valueImage="/assets/img/inner-pages/lead-nurturing-follow-ups/003.webp"
      valueImageAlt="Lead nurturing for clinic growth"

      consultationText="What happens to your leads after the first contact?"

      buildTitle="Built for clinics that want to maximise every lead"
      buildItems={[
        "Clinics getting inquiries but low bookings",
        "Clinics with no follow-up system",
        "Clinics running ads with unconverted leads",
        "Clinics with long decision cycles",
        "Clinics wanting better patient engagement",
        "Clinics aiming to increase conversion rates",
      ]}
      buildImage="/assets/img/inner-pages/lead-nurturing-follow-ups/004.webp"
      buildImageAlt="Lead follow-up workflow build"

      quoteText="Most conversions happen in the follow-up — don’t miss them."

      relatedServices={[
        {
          icon: <RefreshCcw size={26} />,
          title: "AI Lead Response System",
          text: "Capture and respond to leads instantly.",
        },
        {
          icon: <CalendarClock size={26} />,
          title: "PatientFlow AI",
          text: "Automate the entire lead-to-booking journey.",
        },
        {
          icon: <HeartHandshake size={26} />,
          title: "Missed Call Text-Back System",
          text: "Recover lost leads and start conversations.",
        },
      ]}

      faqs={[
        {
          q: "How many follow-ups are included?",
          a: "It depends on your strategy — typically multiple touchpoints over days or weeks.",
        },
        {
          q: "Will patients find this annoying?",
          a: "No — messages are designed to be helpful, relevant, and well-timed.",
        },
        {
          q: "Which channels are used?",
          a: "SMS, WhatsApp, email, or a combination based on your clinic.",
        },
        {
          q: "Can this increase my booking rate?",
          a: "Yes — follow-ups significantly improve conversions.",
        },
        {
          q: "Is this automated?",
          a: "Yes — once set up, it runs automatically.",
        },
        {
          q: "How long does setup take?",
          a: "Usually 1–2 weeks.",
        },
      ]}

      finalCtaText={`Ready to Convert More Leads Without More Traffic?

Make the most of every inquiry with a system that nurtures, engages, and converts patients automatically.`}
      finalCtaButtonText="Get Free Conversion Audit"
      finalCtaButtonLink="/contact"
    />
  );
}