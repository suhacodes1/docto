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
      category="Launch System"
      titleTop="Online Booking"
      titleMain="Integration"
      titleBottom="for Clinics"
      intro="Seamless appointment booking that converts patient interest into instant bookings with a smooth, convenient, and user-friendly experience."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/services/online-booking-integration/hero.webp"
      heroImageAlt="Online booking integration for clinics"
      sectionTwoTitle="Why Online Booking Matters for Clinics"
      sectionTwoTextOne="Patients expect convenience. If they cannot book quickly and easily, they may leave your site and choose another clinic instead. A smooth online booking system helps reduce friction and capture patient intent at the right moment."
      sectionTwoTextTwo="By making appointments easier to schedule, your clinic can improve the patient experience, save staff time, and increase completed bookings from website traffic."
      sectionTwoImage="/assets/img/services/online-booking-integration/section-two.webp"
      sectionTwoImageAlt="Clinic appointment booking system"
      featureCards={[
        {
          icon: <CalendarDays size={28} />,
          title: "Instant Appointment Booking",
          text: "Let patients book appointments easily without needing to call during business hours.",
        },
        {
          icon: <Clock3 size={28} />,
          title: "Reduced Booking Friction",
          text: "Make the booking process faster and simpler so fewer potential patients drop off.",
        },
        {
          icon: <Smartphone size={28} />,
          title: "Mobile-Friendly Experience",
          text: "Allow patients to book from any device with a smooth and responsive booking journey.",
        },
      ]}
      valueTitle="How Online Booking Supports Clinic Growth"
      valueTextOne="An effective booking integration helps convert more website visitors into real appointments by making the next step clear and convenient."
      valueTextTwo="It also improves operational efficiency by reducing manual scheduling work, supporting better availability visibility, and creating a smoother experience for both patients and staff."
      valueImage="/assets/img/services/online-booking-integration/value.webp"
      valueImageAlt="Online booking and scheduling for clinics"
      consultationText="Want to make it easier for patients to book appointments online?"
      buildTitle="What We Help Integrate"
      buildItems={[
        "Seamless appointment booking flow",
        "Website booking integration",
        "Mobile responsive booking experience",
        "Clear call-to-action placement",
        "Reduced patient drop-off points",
        "Real-time availability display foundations",
        "User-friendly patient journey design",
        "Better booking conversion support",
      ]}
      buildImage="/assets/img/services/online-booking-integration/build.webp"
      buildImageAlt="Online appointment integration setup"
      quoteText="The easier it is for patients to book, the more likely they are to choose your clinic at the moment they are ready."
      relatedServices={[
        {
          icon: <Globe size={26} />,
          title: "Conversion-Focused Website",
          text: "Strengthen your booking results with a website designed to guide visitors toward action.",
        },
        {
          icon: <CheckCircle2 size={26} />,
          title: "Local Visibility Setup",
          text: "Help more local patients discover your clinic before guiding them into your booking flow.",
        },
        {
          icon: <Users size={26} />,
          title: "Patient Acquisition Campaigns",
          text: "Drive more high-intent traffic to your clinic and convert that demand into booked appointments.",
        },
      ]}
      faqs={[
        {
          q: "Why is online booking important for clinics?",
          a: "It gives patients a faster and more convenient way to schedule appointments, which can improve conversions and overall patient experience.",
        },
        {
          q: "Will online booking reduce calls to reception?",
          a: "It can reduce some manual scheduling work by allowing patients to book directly through your website.",
        },
        {
          q: "Can patients book from their phone?",
          a: "Yes, a good online booking integration should be mobile-friendly and easy to use across different devices.",
        },
        {
          q: "Does online booking help increase appointments?",
          a: "It can improve booking conversion by making the process simpler and capturing patient intent right away.",
        },
      ]}
      finalCtaText="Ready to turn more website visitors into booked appointments?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}