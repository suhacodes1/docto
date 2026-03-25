"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../public/assets/img/Logos/LogoDark.webp";
import Image from "next/image";
import ServicesDropdown from "./ServicesDropdown";
import { serviceGroups } from "../data/services";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const closeServicesDropdown = () => setServicesDropdownOpen(false);

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const isActive = (path: string) => pathname === path;

  const isServicesActive = () => pathname.startsWith("/services");

  return (
    <header
      className={`w-full fixed top-0 ${
        !isScrolled ? "lg:top-12" : ""
      } left-0 right-0 z-40 bg-white shadow-md transition-all duration-300`}
    >
      <div className="flex items-center justify-between gap-6 container mx-auto md:min-h-[88px] min-h-[70px]">
        <Link href="/" className="flex items-center gap-3 min-w-[220px]">
          <Image
            src={Logo}
            alt="Healthcare Logo"
            className="md:h-10 h-8 w-auto"
          />
        </Link>

        {/* Right side - Desktop Navigation + CTA */}
        <div className="flex items-center gap-6 justify-end flex-1">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className={`text-base font-bold transition-colors ${
                isActive("/")
                  ? "text-[#ef2f6b]"
                  : "text-slate-900 hover:text-[#ef2f6b]"
              }`}
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/services"
                className={`text-base font-bold transition-colors ${
                  isServicesActive() || servicesDropdownOpen
                    ? "text-[#ef2f6b]"
                    : "text-slate-900 hover:text-[#ef2f6b]"
                }`}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                Services
              </Link>
            </div>

            <Link
              href="/about"
              className={`text-base font-bold transition-colors ${
                isActive("/about")
                  ? "text-[#ef2f6b]"
                  : "text-slate-900 hover:text-[#ef2f6b]"
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`text-base font-bold transition-colors ${
                isActive("/contact")
                  ? "text-[#ef2f6b]"
                  : "text-slate-900 hover:text-[#ef2f6b]"
              }`}
            >
              Contact
            </Link>
          </nav>

          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center justify-center bg-[#ef2f6b] text-white rounded-full px-7 py-3 font-bold hover:bg-pink-600 transition-colors"
          >
            Get in Touch
          </Link>

          <button
            className="lg:hidden text-2xl text-slate-900 cursor-pointer"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Dropdown - positioned outside navbar */}
      <ServicesDropdown
        isOpen={servicesDropdownOpen}
        onClose={closeServicesDropdown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* Mobile Sidebar */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMenu}
          />

          <aside className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-slate-900 z-50 flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-slate-800">
              <span className="text-xl font-bold text-white">Menu</span>

              <button
                className="text-white text-2xl cursor-pointer"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-1 p-6 overflow-y-auto flex-1">
              <Link
                href="/"
                onClick={closeMenu}
                className="px-4 py-3 text-white hover:bg-slate-800 rounded transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="px-4 py-3 text-white hover:bg-slate-800 rounded transition-colors"
              >
                About
              </Link>

              <div className="my-2">
                <button
                  className={`w-full flex items-center justify-between px-4 py-3 rounded transition-colors font-semibold ${
                    isServicesActive()
                      ? "text-[#ef2f6b] bg-slate-800"
                      : "text-white hover:bg-slate-800"
                  }`}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <Link href="/services" className="text-white">
                    Services
                  </Link>
                  <span
                    className={`text-xs transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {mobileServicesOpen && (
                  <div className="flex flex-col gap-4 mt-4 pl-4 border-l-2 border-#ef2f6b">
                    {serviceGroups.map((group) => (
                      <div key={group.category} className="flex flex-col gap-2">
                        <h4 className="text-xs font-bold text-pink-400 uppercase tracking-wide">
                          {group.category}
                        </h4>
                        {group.services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="text-sm text-slate-300 hover:text-pink-400 transition-colors"
                            onClick={closeMenu}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="px-4 py-3 text-white hover:bg-slate-800 rounded transition-colors"
              >
                Contact
              </Link>
            </nav>
          </aside>
        </>
      )}
    </header>
  );
}
