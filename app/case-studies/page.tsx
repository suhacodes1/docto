"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Growth Habit Tracker & Mental Health App",
    category: "Health",
    platform: "Mobile App",
    services: "UX/UI Design, Mobile App Development, Mental Health",
    image: "/assets/img/casestudyrevamp-pages/preview-banners/1.webp",
    imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/1.webp",
    link: "/casestudies/growth",
    positioning: "left",
  },
  {
    id: 2,
    title: "Healthcare SaaS Dashboard",
    category: "Health",
    platform: "Web App",
    services: "UI/UX Design, Dashboard Design, SaaS Development",
    image: "/assets/img/casestudyrevamp-pages/preview-banners/2.webp",
    imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/2.webp",
    link: "/casestudies/healthcare-saas",
    positioning: "right",
  },
  {
    id: 3,
    title: "Docsy",
    category: "Health",
    platform: "Mobile App",
    services: "UX/UI Design, Mobile App Development, Health Monitoring",
    image: "/assets/img/casestudyrevamp-pages/preview-banners/3.webp",
    imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/3.webp",
    link: "/casestudies/health-monitoring",
    positioning: "left",
  },
  {
    id: 4,
    title: "Patient Management Software",
    category: "Health",
    platform: "Web App",
    services: "UX/UI Design, Web Development, Patient Management",
    image: "/assets/img/casestudyrevamp-pages/preview-banners/4.webp",
    imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/4.webp",
    link: "/casestudies/patient-management",
    positioning: "right",
  },
  {
    id: 5,
    title: "Sedrica Dental",
    category: "Health",
    platform: "Web App",
    services: "UX/UI Design, Web Development, Dental",
    image: "/assets/img/casestudyrevamp-pages/preview-banners/5.webp",
    imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/5.webp",
    link: "/casestudies/sedrica-dental",
    positioning: "left",
  },
  {
    id: 6,
    title: "OneraQ Care",
    category: "Health",
    platform: "Mobile App",
    services: "UX/UI Design, Mobile App Development, Health Monitoring",
    image: "/assets/img/casestudyrevamp-pages/preview-banners/6.webp",
    imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/6.webp",
    link: "/casestudies/health-monitoring-2",
    positioning: "left",
  },
  {
    id: 7,
    title: "AI-Powered Healthcare Chatbots",
    category: "Health",
    platform: "Mobile App",
    services: "UX/UI Design, Mobile App Development, AI Integration",
    image: "/assets/img/casestudyrevamp-pages/preview-banners/7.webp",
    imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/7.webp",
    link: "/casestudies/ai-health-chatbot",
    positioning: "left",
  },
  {
    id: 8,
    title: "Digital Health Platform",
    category: "Health",
    platform: "Mobile App",
    services: "UX/UI Design, Mobile App Development, Health Management",
    image: "/assets/img/casestudyrevamp-pages/preview-banners/8.webp",
    imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/8.webp",
    link: "/casestudies/digital-health-platform",
    positioning: "right",
  },
  {
    id: 9,
    title: "Healthcare SAAS Platform and Web Design",
    category: "Health",
    platform: "Mobile App",
    services: "UX/UI Design, Mobile App Development, Health Management",
    image: "/assets/img/casestudyrevamp-pages/preview-banners/9.webp",
    imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/9.webp",
    link: "/casestudies/healthcare-saas-2",
    positioning: "left",
  },
  {
    id: 10,
    title: "LifeOS – Personal AI Agents App & UX UI Design",
    category: "Health",
    platform: "Mobile App",
    services: "UX/UI Design, Mobile App Development, AI Integration",
    image: "/assets/img/casestudyrevamp-pages/preview-banners/10.webp",
    imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/10.webp",
    link: "/casestudies/lifeos-ai-agents",
    positioning: "right",
  },
  {
    id: 11,
    title: "Medico Clinic",
    category: "Health",
    platform: "Mobile App",
    services: "UX/UI Design, Mobile App Development, Clinic Management",
    image: "/assets/img/casestudyrevamp-pages/preview-banners/11.webp",
    imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/11.webp",
    link: "/casestudies/medico-clinic",
    positioning: "right",
  },
  {
    id: 12,
    title: "Modo – AI-Enhanced CRM Platform for Manufacturing",
    category: "Health",
    platform: "Mobile App",
    services: "UX/UI Design, Mobile App Development, AI Integration",
    image: "/assets/img/casestudyrevamp-pages/preview-banners/13.webp",
    imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/13.webp",
    link: "/casestudies/modo-ai-crm",
    positioning: "left",
  },
  {
    id: 13,
    title: "Sentos — AI Ophthalmology Clinic",
    category: "Health",
    platform: "Mobile App",
    services: "UX/UI Design, Mobile App Development, AI Integration",
    image: "/assets/img/casestudyrevamp-pages/preview-banners/14.webp",
    imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/14.webp",
    link: "/casestudies/sentos-ai",
    positioning: "left",
  },
];

export default function CaseStudiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedPlatform, setSelectedPlatform] = useState("All Platforms");

  const categories = ["All Categories", ...new Set(projects.map((p) => p.category))];
  const platforms = ["All Platforms", ...new Set(projects.map((p) => p.platform))];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.services.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Categories" || project.category === selectedCategory;

      const matchesPlatform =
        selectedPlatform === "All Platforms" || project.platform === selectedPlatform;

      return matchesSearch && matchesCategory && matchesPlatform;
    });
  }, [searchTerm, selectedCategory, selectedPlatform]);

  const handleClearAll = () => {
    setSearchTerm("");
    setSelectedCategory("All Categories");
    setSelectedPlatform("All Platforms");
  };

  return (
    <div>
      {/* Banner Section */}
      <section className="bg-[#ebebeb] pb-12 pt-24 md:pt-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-[#ef2f6b] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-[#ef2f6b] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-[#ef2f6b] mb-6">
              Our Case Studies
            </h1>
            <p className="text-lg md:text-xl text-black">
              From patient acquisition to clinic growth, see how we empower healthcare professionals with technology that drives results.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-[#ebebeb] pb-8 pt-16 md:sticky top-14 z-20 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search by keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 text-white placeholder-slate-500 border border-slate-700 rounded-lg focus:outline-none focus:border-[#ef2f6b] transition-colors"
              />
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ef2f6b]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Category Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-slate-900 text-white border border-slate-700 rounded-lg focus:outline-none focus:border-[#ef2f6b] transition-colors cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Platform Dropdown */}
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="px-4 py-3 bg-slate-900 text-white border border-slate-700 rounded-lg focus:outline-none focus:border-[#ef2f6b] transition-colors cursor-pointer"
            >
              {platforms.map((plat) => (
                <option key={plat} value={plat}>
                  {plat}
                </option>
              ))}
            </select>

            {/* Clear All Button */}
            <button
              onClick={handleClearAll}
              className="px-6 py-3 bg-[#ef2f6b] hover:bg-[#d92a5a] text-white font-semibold rounded-lg transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-slate-900 rounded-lg overflow-hidden border border-slate-800 hover:border-[#ef2f6b] transition-all hover:shadow-lg hover:shadow-[#ef2f6b]/20"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={project.imageMobile}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Category Badge */}
                    <span className="inline-block text-xs font-medium text-white uppercase rounded-full bg-[#ef2f6b] px-3 py-1 mb-4">
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {project.title}
                    </h3>

                    {/* Meta Info */}
                    <div className="space-y-3 mb-8 text-sm">
                      <div>
                        <span className="text-slate-400">Platform:</span>
                        <p className="text-white font-semibold">{project.platform}</p>
                      </div>
                      <div>
                        <span className="text-slate-400">Services:</span>
                        <p className="text-white font-semibold text-sm">{project.services}</p>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <Link
                        href="/contact"
                        className="flex-1 bg-[#ef2f6b] hover:bg-[#d92a5a] text-white px-4 py-3 rounded-md font-medium text-center transition"
                      >
                        Quote
                      </Link>
                      <Link
                        href={project.link}
                        className="flex-1 border border-[#ef2f6b] hover:bg-[#ef2f6b] text-[#ef2f6b] hover:text-white px-4 py-3 rounded-md font-medium text-center transition"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-white text-xl font-semibold mb-4">No projects found</p>
              <p className="text-slate-400 mb-8">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={handleClearAll}
                className="px-6 py-3 bg-[#ef2f6b] hover:bg-[#d92a5a] text-white font-semibold rounded-lg transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* Results Count */}
          <div className="text-center mt-12">
            <p className="text-slate-400">
              Showing <span className="text-[#ef2f6b] font-semibold">{filteredProjects.length}</span> of{" "}
              <span className="text-[#ef2f6b] font-semibold">{projects.length}</span> projects
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
