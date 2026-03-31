import ServicePageLayout from "@/app/components/ServicePageLayout";
import { Monitor, MousePointerClick, CalendarCheck, BarChart3, Globe, Users } from "lucide-react";

export default function ConversionFocusedWebsitePage() {
  return (
    <ServicePageLayout
      category="Launch System"
      titleTop="Conversion-Focused"
      titleMain="Website"
      titleBottom="for Clinics"
      intro="A high-performing website designed to turn visitors into booked patients with clear messaging, trust signals, and strong conversion paths."

      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"

      heroImage="/images/services/conversion-focused-website/hero.jpg"
      heroImageAlt="Conversion focused healthcare website"

      sectionTwoTitle="Why Your Clinic Needs a Conversion-Focused Website"
      sectionTwoTextOne="Your website should do more than look good. It should help turn visitors into actual patient enquiries and bookings through clear calls to action, strong service messaging, and an easy-to-use experience."
      sectionTwoTextTwo="A conversion-focused website helps build trust quickly, reduce drop-off, and guide potential patients toward booking an appointment or contacting your clinic."

      sectionTwoImage="/images/services/conversion-focused-website/section-two.jpg"
      sectionTwoImageAlt="Clinic website strategy"

      featureCards={[
        {
          icon: <Monitor size={28} />,
          title: "Clear Service Messaging",
          text: "Show patients exactly what you offer and why they should choose your clinic.",
        },
        {
          icon: <MousePointerClick size={28} />,
          title: "Stronger Calls to Action",
          text: "Guide users toward booking, calling, or submitting an enquiry with less friction.",
        },
        {
          icon: <CalendarCheck size={28} />,
          title: "More Appointment Bookings",
          text: "Turn more traffic into real patient bookings through better page structure and flow.",
        },
      ]}

      valueTitle="What Makes a Website Convert Better"
      valueTextOne="A conversion-focused website is designed around user intent. It helps patients quickly find the information they need, trust your clinic, and take action."
      valueTextTwo="This includes fast loading pages, strong trust elements, easy navigation, clear headlines, and a seamless journey from landing on the site to booking an appointment."

      valueImage="/images/services/conversion-focused-website/value.jpg"
      valueImageAlt="Website conversion optimisation"

      consultationText="Want a clinic website that actually drives more patient bookings?"

      buildTitle="What We Include in a Conversion-Focused Website"
      buildItems={[
        "High-converting homepage structure",
        "Clear service pages",
        "Mobile responsive design",
        "Strong calls to action",
        "Trust-building sections and testimonials",
        "Lead capture and enquiry forms",
        "Booking integration",
        "SEO-friendly page structure",
      ]}

      buildImage="/images/services/conversion-focused-website/build.jpg"
      buildImageAlt="Conversion focused website features"

      quoteText="A well-designed website should not just attract visitors — it should turn them into real enquiries and booked patients."

      relatedServices={[
        {
          icon: <Globe size={26} />,
          title: "Local Visibility Setup",
          text: "Improve your visibility so local patients can find and trust your clinic.",
        },
        {
          icon: <BarChart3 size={26} />,
          title: "Conversion Tracking & Analytics",
          text: "Track what is working and measure which channels drive enquiries.",
        },
        {
          icon: <Users size={26} />,
          title: "Patient Acquisition Campaigns",
          text: "Drive high-intent traffic to your website from paid campaigns.",
        },
      ]}

      faqs={[
        {
          q: "What is a conversion-focused website?",
          a: "It is a website designed to guide visitors toward taking action, such as booking an appointment, submitting an enquiry, or calling your clinic.",
        },
        {
          q: "How is this different from a normal website?",
          a: "A normal website may just display information, while a conversion-focused website is structured to increase enquiries, bookings, and patient trust.",
        },
        {
          q: "Can you redesign an existing clinic website?",
          a: "Yes, an existing website can be improved with stronger messaging, layout, calls to action, and conversion strategy.",
        },
        {
          q: "Will this help with mobile users too?",
          a: "Yes, the website should be designed to perform well across desktop, tablet, and mobile devices.",
        },
      ]}

      finalCtaText="Ready to build a website that turns more visitors into patients?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}