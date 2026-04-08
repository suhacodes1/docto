// LEGACY SERVICES - COMMENTED OUT
/*
export const serviceGroups = [
  {
    category: "Software Development",
    services: [
      {
        title: "Custom Web Development",
        slug: "custom-web-development",
        description:
          "Custom websites and web platforms built around your business goals, workflows, and long-term growth.",
        heroTitle: "Custom Web Development",
        intro:
          "We create tailored web solutions that go beyond templates. Every build is designed around performance, usability, scalability, and your specific business goals.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
        highlights: [
          "Custom frontend and backend development",
          "Fast, responsive, modern user experience",
          "API integrations and secure architecture",
          "Built to scale as your business grows",
        ],
      },
      {
        title: "MVP Development",
        slug: "mvp-development",
        description:
          "Launch your product faster with lean, scalable MVPs designed to validate ideas and attract early users.",
        heroTitle: "MVP Development",
        intro:
          "We help startups and founders launch quickly with focused MVPs that test ideas, gather real feedback, and create a strong foundation for future growth.",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
        highlights: [
          "Lean product planning and feature prioritisation",
          "Faster launch with essential functionality",
          "Scalable technical foundations",
          "Built for testing, iteration, and growth",
        ],
      },
      {
        title: "SaaS Development",
        slug: "saas-development",
        description:
          "Robust SaaS platforms built with scalable architecture, intuitive user experiences, and secure infrastructure.",
        heroTitle: "SaaS Development",
        intro:
          "We design and develop SaaS products that balance product usability, system reliability, and long-term technical scalability.",
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
        highlights: [
          "Subscription-ready platform development",
          "User dashboards and account systems",
          "Secure and scalable architecture",
          "Clear UX for complex product flows",
        ],
      },
      {
        title: "Enterprise Software Development",
        slug: "enterprise-software-development",
        description:
          "Enterprise-grade software solutions designed to streamline operations and support complex business needs.",
        heroTitle: "Enterprise Software Development",
        intro:
          "We develop robust business systems that improve operational efficiency, connect workflows, and support large-scale organisational needs.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
        highlights: [
          "Business-critical system development",
          "Workflow automation and internal tools",
          "Secure role-based architecture",
          "Built for long-term stability and support",
        ],
      },
      {
        title: "Web Portal Development",
        slug: "web-portal-development",
        description:
          "Secure and user-friendly portals for customers, staff, and partners to access data, services, and workflows.",
        heroTitle: "Web Portal Development",
        intro:
          "We build secure web portals that improve access to information, support structured workflows, and create better digital experiences for users.",
        image:
          "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1600&auto=format&fit=crop",
        highlights: [
          "User portals with secure login systems",
          "Role-based dashboards and access control",
          "Improved workflow visibility and access",
          "Clean, user-friendly portal experiences",
        ],
      },
    ],
  },
  {
    category: "Design and UX",
    services: [
      {
        title: "UI/UX Design",
        slug: "ui-ux-design",
        description:
          "Thoughtful user interface and experience design that improves usability, engagement, and product clarity.",
        heroTitle: "UI/UX Design",
        intro:
          "We create user-focused digital experiences that feel intuitive, polished, and aligned with business goals.",
        image:
          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop",
        highlights: [
          "Wireframes and user journey mapping",
          "Modern interface design systems",
          "Improved clarity, usability, and engagement",
          "Consistent, conversion-aware design decisions",
        ],
      },
      {
        title: "Responsive Web Design",
        slug: "responsive-web-design",
        description:
          "Modern responsive websites that deliver seamless experiences across desktop, tablet, and mobile devices.",
        heroTitle: "Responsive Web Design",
        intro:
          "We design responsive websites that adapt beautifully across all screen sizes while keeping performance and usability strong.",
        image:
          "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=1600&auto=format&fit=crop",
        highlights: [
          "Mobile-first responsive layouts",
          "Consistent cross-device experiences",
          "Better usability and visual balance",
          "Optimised structure for modern browsing",
        ],
      },
      {
        title: "Graphic Design",
        slug: "graphic-design",
        description:
          "Creative visual assets that strengthen your brand identity and communicate your message effectively.",
        heroTitle: "Graphic Design",
        intro:
          "We design compelling visual assets that support your brand identity and help your business communicate clearly and professionally.",
        image:
          "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop",
        highlights: [
          "Brand-supportive visual design",
          "Marketing and promotional assets",
          "Clear and engaging communication design",
          "Consistent visual identity across platforms",
        ],
      },
    ],
  },
  {
    category: "Marketing & Growth",
    services: [
      {
        title: "Search Engine Optimization (SEO)",
        slug: "seo",
        description:
          "Strategic SEO solutions that improve search visibility, drive organic traffic, and attract the right audience.",
        heroTitle: "Search Engine Optimization",
        intro:
          "We improve your online visibility through strategic SEO work that helps your business rank better and attract qualified traffic.",
        image:
          "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1600&auto=format&fit=crop",
        highlights: [
          "On-page and technical SEO improvements",
          "Keyword targeting and content alignment",
          "Organic traffic growth strategies",
          "Search visibility focused on business goals",
        ],
      },
      {
        title: "Social Media Marketing",
        slug: "social-media-marketing",
        description:
          "Data-driven social media strategies that increase brand awareness, engagement, and customer loyalty.",
        heroTitle: "Social Media Marketing",
        intro:
          "We create social media strategies and campaigns that build awareness, improve engagement, and strengthen your digital presence.",
        image:
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop",
        highlights: [
          "Platform-specific content strategies",
          "Brand awareness and engagement growth",
          "Stronger online community building",
          "Data-led campaign direction",
        ],
      },
      {
        title: "Influencer Marketing",
        slug: "influencer-marketing",
        description:
          "Partnerships with relevant creators to expand reach, build trust, and amplify your brand message.",
        heroTitle: "Influencer Marketing",
        intro:
          "We help brands collaborate with suitable creators to build trust, increase reach, and support campaign performance.",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
        highlights: [
          "Creator and audience alignment",
          "Campaign planning and collaboration support",
          "Brand trust and reach expansion",
          "More authentic promotional visibility",
        ],
      },
      {
        title: "Pay-Per-Click (PPC)",
        slug: "ppc",
        description:
          "Performance-focused paid advertising campaigns designed to generate leads and maximise return on ad spend.",
        heroTitle: "Pay-Per-Click Advertising",
        intro:
          "We manage paid campaigns focused on visibility, clicks, conversions, and stronger return on your advertising spend.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
        highlights: [
          "Targeted search and paid ad campaigns",
          "Lead-focused campaign structures",
          "Performance tracking and optimisation",
          "Smarter return on advertising spend",
        ],
      },
    ],
  },
];
*/

// FEATURED HEALTHCARE CLINIC SERVICES
export const serviceGroups = [
  {
    category: "Launch System",
    positioning: "Get your first 50–100 patients in 60 days",
    heroSubtitle: "Clinic Launch Growth System",
    whyItWorks: "New clinics struggle most with starting momentum. You solve that.",
    services: [
      {
        title: "Conversion-Focused Website",
        slug: "conversion-focused-website",
        description: "A high-performing website designed to turn visitors into booked patients.",
        highlights: [
          "Patient-focused design and messaging",
          "Clear call-to-action for bookings",
          "Trust-building elements",
          "Mobile-optimized for patient searches",
        ],
      },
      {
        title: "Local Visibility Setup",
        slug: "local-visibility-setup",
        description: "Optimise your Google presence so patients can easily find and trust you.",
        highlights: [
          "Google Business Profile optimization",
          "Local SEO strategy",
          "Citation and directory management",
          "Local search rankings",
        ],
      },
      {
        title: "Online Booking Integration",
        slug: "online-booking-integration",
        description: "Seamless appointment booking that converts interest into instant bookings.",
        highlights: [
          "Integrated booking system",
          "Automated confirmations",
          "Reduced booking friction",
          "Real-time availability",
        ],
      },
      {
        title: "Patient Acquisition Campaigns",
        slug: "patient-acquisition-campaigns",
        description: "Targeted ads that bring in high-intent patients from day one.",
        highlights: [
          "Geo-targeted advertising",
          "High-intent patient focus",
          "Rapid patient acquisition",
          "Quick ROI measurement",
        ],
      },
      {
        title: "Reputation Builder System",
        slug: "reputation-builder-system",
        description: "Generate your first reviews quickly to build trust and credibility.",
        highlights: [
          "Automated review generation",
          "Trust-building through social proof",
          "Rapid credibility establishment",
          "Positive online reputation",
        ],
      },
    ],
  },
  {
    category: "Growth Engine",
    positioning: "Consistent weekly patient bookings without relying on referrals",
    services: [
      // {
      //   title: "Patient Acquisition (Ads)",
      //   slug: "patient-acquisition-ads",
      //   description: "Drive a steady flow of high-quality patient enquiries.",
      //   highlights: [
      //     "Targeted ad strategies",
      //     "Consistent patient flow",
      //     "Quality lead generation",
      //     "Scalable acquisition",
      //   ],
      // },
      {
        title: "Landing Page Optimisation",
        slug: "landing-page-optimisation",
        description: "Service-specific pages built to maximize conversions.",
        highlights: [
          "Service-specific optimization",
          "Conversion rate improvement",
          "A/B testing and refinement",
          "High-performing pages",
        ],
      },
      {
        title: "Conversion Tracking & Analytics",
        slug: "conversion-tracking-analytics",
        description: "Track what's working and measure true ROI.",
        highlights: [
          "Comprehensive tracking",
          "Performance insights",
          "ROI measurement",
          "Data-driven decisions",
        ],
      },
      {
        title: "AI Lead Response System",
        slug: "ai-lead-response-system",
        description: "Instantly respond to enquiries and capture more bookings.",
        highlights: [
          "24/7 automated responses",
          "Instant enquiry handling",
          "Increased booking capture",
          "Better lead response times",
        ],
      },
      {
        title: "SEO & Content Growth",
        slug: "seo-content-growth",
        description: "Increase long-term visibility through search and content.",
        highlights: [
          "Long-term organic growth",
          "Strategic content creation",
          "Search visibility",
          "Sustainable traffic",
        ],
      },
      {
        title: "Reputation Management",
        slug: "reputation-management",
        description: "Continuously build and maintain a strong online reputation.",
        highlights: [
          "Ongoing reputation building",
          "Review management",
          "Brand trust maintenance",
          "Positive online presence",
        ],
      },
    ],
  },
  {
    category: "PatientFlow AI",
    positioning: "Turn more inquiries into bookings automatically",
    whyItWorks: "This is where you stand out from 90% of agencies.",
    services: [
      {
        title: "AI Chatbot (Website + SMS)",
        slug: "ai-chatbot-website-sms",
        description: "Engage and respond to patients instantly, 24/7.",
        highlights: [
          "24/7 patient engagement",
          "Instant responses",
          "Website and SMS integration",
          "Improved patient experience",
        ],
      },
      {
        title: "Missed Call Text-Back System",
        slug: "missed-call-textback-system",
        description: "Automatically follow up missed calls to recover lost opportunities.",
        highlights: [
          "Automated follow-ups",
          "Lost opportunity recovery",
          "SMS text-back system",
          "Higher conversion rates",
        ],
      },
      {
        title: "Lead Nurturing & Follow-Ups",
        slug: "lead-nurturing-followups",
        description: "Stay top-of-mind and guide patients to book.",
        highlights: [
          "Automated nurture sequences",
          "Top-of-mind positioning",
          "Guided booking path",
          "Improved conversion",
        ],
      },
      {
        title: "No-Show Reduction Workflows",
        slug: "no-show-reduction-workflows",
        description: "Reduce cancellations with automated reminders and follow-ups.",
        highlights: [
          "Automated reminders",
          "No-show reduction",
          "Cancellation prevention",
          "Better attendance rates",
        ],
      },
      {
        title: "Patient Reactivation Campaigns",
        slug: "patient-reactivation-campaigns",
        description: "Bring back past patients and increase lifetime value.",
        highlights: [
          "Automated reactivation",
          "Past patient engagement",
          "Lifetime value increase",
          "Revenue recovery",
        ],
      },
    ],
  },
  {
    category: "Authority Builder",
    positioning: "Become the most trusted clinic in your area",
    services: [
      {
        title: "Review Generation Campaigns",
        slug: "review-generation-campaigns",
        description: "Consistently collect positive reviews to build trust.",
        highlights: [
          "Systematic review collection",
          "Continuous trust building",
          "Positive testimonials",
          "Increased credibility",
        ],
      },
      {
        title: "Video Testimonials",
        slug: "video-testimonials",
        description: "Showcase real patient experiences to boost credibility.",
        highlights: [
          "Authentic patient stories",
          "Video production",
          "Credibility boost",
          "Social proof",
        ],
      },
      {
        title: "Educational Content (Short-form + Blogs)",
        slug: "educational-content-short-long",
        description: "Position your clinic as the go-to expert in your field.",
        highlights: [
          "Expert positioning",
          "Short-form and blog content",
          "Thought leadership",
          "SEO benefits",
        ],
      },
      {
        title: "Personal Brand Building for Doctors",
        slug: "personal-brand-building-doctors",
        description: "Build authority and visibility for practitioners.",
        highlights: [
          "Doctor brand development",
          "Personal visibility",
          "Practitioner authority",
          "Trust and credibility",
        ],
      },
    ],
  },
  {
    category: "Intelligence Dashboard",
    positioning: "Know exactly what's working",
    services: [
      {
        title: "Real-Time Performance Dashboard",
        slug: "realtime-performance-dashboard",
        description: "Monitor your clinic's growth and performance at a glance.",
        highlights: [
          "Real-time insights",
          "Performance monitoring",
          "Growth visibility",
          "Decision-making data",
        ],
      },
      {
        title: "Lead Tracking & Conversion Insights",
        slug: "lead-tracking-conversion-insights",
        description: "Understand where patients come from and what converts.",
        highlights: [
          "Patient source tracking",
          "Conversion analysis",
          "Journey mapping",
          "Optimization insights",
        ],
      },
      {
        title: "ROI & Campaign Attribution",
        slug: "roi-campaign-attribution",
        description: "See exactly which channels are driving results.",
        highlights: [
          "Channel attribution",
          "ROI measurement",
          "Campaign performance",
          "Budget optimization",
        ],
      },
      {
        title: "Patient Flow & Staff Insights",
        slug: "patient-flow-staff-insights",
        description: "Optimise operations and improve patient experience.",
        highlights: [
          "Operational insights",
          "Staff performance",
          "Patient experience optimization",
          "Efficiency improvements",
        ],
      },
    ],
  },
];

export const allServices = serviceGroups.flatMap((group) =>
  group.services.map((service) => ({
    ...service,
    category: group.category,
    positioning: group.positioning,
    whyItWorks: group.whyItWorks,
  }))
);

