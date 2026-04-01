import ServicePageLayout from "@/app/components/ServicePageLayout";
import {
  CalendarDays,
  Clock3,
  Smartphone,
  CheckCircle2,
  Globe,
  Users,
} from "lucide-react";

export default function OnlineBookingIntegrationPage() {
  return (
    <ServicePageLayout
      category="HEALTH CLINIC GROWTH SYSTEM"
      titleTop="Online Booking"
      titleMain="Integration"
      intro={`Every extra step loses patients.

We build seamless online booking systems that make it easy for patients to schedule instantly — anytime, from any device.`}
      primaryCtaText="BOOK A DEMO"
      primaryCtaLink="/contact"

      heroImage="/assets/img/inner-pages/Online Booking Integration/001.png"
      heroImageAlt="Online booking integration for clinics"

      sectionTwoTitle="If booking isn’t instant, patients drop off."
      sectionTwoTextOne={`Calling takes time. Waiting for replies creates friction.

Today’s patients expect speed and convenience — if they can’t book immediately, they move on to another clinic.`}
      sectionTwoTextTwo={`Most clinics lose patients not because of poor marketing…

…but because of a broken booking experience.

We implement Online Booking Systems that remove friction and turn interest into confirmed appointments in seconds.`}
      sectionTwoImage="/assets/img/inner-pages/Online Booking Integration/002.jpeg"
      sectionTwoImageAlt="Clinic appointment booking system"

      featureCards={[
        {
          icon: <CalendarDays size={28} />,
          title: "Instant Appointment Scheduling",
          text: "Allow patients to book appointments 24/7 without waiting.",
        },
        {
          icon: <Clock3 size={28} />,
          title: "Seamless User Experience",
          text: "Simple, intuitive booking flow designed to reduce drop-offs.",
        },
        {
          icon: <Smartphone size={28} />,
          title: "Smart Calendar Integration",
          text: "Sync with your availability to avoid double bookings and confusion.",
        },
      ]}

      valueTitle="Make booking effortless — increase conversions instantly"
      valueTextOne={`The easier it is to book, the more patients you get.

We design booking experiences that are fast, clear, and frictionless — so patients can go from interest to confirmed appointment in just a few clicks.`}
 valueResultItems={[
  { text: "Better patient experience", tag: "Higher satisfaction", tagColor: "pink" },
  { text: "Higher conversion rates",  tag: "More bookings",     tagColor: "green" },
  { text: "Fewer missed opportunities", tag: "Consistent growth", tagColor: "blue"  },
]}
      valueImage="/assets/img/inner-pages/Online Booking Integration/003.png"
      valueImageAlt="Online booking and scheduling for clinics"

      consultationText="How easy is it for your patients to book right now?"

      buildTitle="Built for clinics that want more confirmed appointments"
      buildItems={[
        "Clinics relying on calls or manual booking",
        "Clinics missing inquiries after hours",
        "Clinics with high drop-off before booking",
        "Busy clinics needing automated scheduling",
        "Clinics running ads or driving online traffic",
        "Clinics wanting a modern patient experience",
      ]}
      buildImage="/assets/img/inner-pages/Online Booking Integration/004.png"
      buildImageAlt="Online appointment integration setup"

      quoteText="Don’t let friction cost you patients."

      relatedServices={[
        {
          icon: <Globe size={26} />,
          title: "Conversion-Focused Website",
          text: "Turn visitors into bookings with better design and structure.",
        },
        {
          icon: <CheckCircle2 size={26} />,
          title: "PatientFlow AI",
          text: "Automate responses and guide patients to booking.",
        },
        {
          icon: <Users size={26} />,
          title: "CRM & Automation Setup",
          text: "Manage appointments and patient data efficiently.",
        },
      ]}

      faqs={[
        {
          q: "Can patients book anytime?",
          a: "Yes — the system works 24/7, even outside clinic hours.",
        },
        {
          q: "Will it integrate with my current schedule?",
          a: "Yes — we sync it with your availability to avoid conflicts.",
        },
        {
          q: "Can I customize appointment types?",
          a: "Absolutely — based on your services and consultation types.",
        },
        {
          q: "Will patients get reminders?",
          a: "Yes — automated confirmations and reminders are included.",
        },
        {
          q: "Can it connect with my website?",
          a: "Yes — it integrates seamlessly with your existing setup.",
        },
        {
          q: "Will this reduce no-shows?",
          a: "Yes — reminders and a smoother booking experience significantly reduce no-shows.",
        },
      ]}

      finalCtaText={`Ready to Make Booking Effortless for Your Patients?

Remove friction, capture more appointments, and create a seamless experience your patients expect.`}
      finalCtaButtonText="Get Free Booking Audit"
      finalCtaButtonLink="/contact"
    />
  );
}