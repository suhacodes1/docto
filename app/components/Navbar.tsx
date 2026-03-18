"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../public/assets/img/Logos/LogoDark.webp";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="site-header">
      <div className="container navbar-wrap">
        <a href="/" className="navbar-logo">
          <Image src={Logo} alt="Healthcare Logo" className="h-10 w-auto" />
        </a>

        <nav className="navbar-links">
          <a href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            Home
          </a>

          <a
            href="/services"
            className={`nav-link ${isActive("/services") ? "active" : ""}`}
          >
            Services
          </a>

          <a
            href="/about"
            className={`nav-link ${isActive("/about") ? "active" : ""}`}
          >
            About
          </a>

          {/* <a href="/" className={`nav-link`}>
            Blog
          </a> */}

          <a
            href="/contact"
            className={`nav-link ${isActive("/contact") ? "active" : ""}`}
          >
            Contact
          </a>
        </nav>

        <div className="navbar-actions">
          <a href="/contact" className="contact-button">
            Get in Touch
          </a>

          <button
            className="mobile-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <div className="mobile-sidebar-overlay" onClick={closeMenu} />

          <aside className="mobile-sidebar open">
            <div className="mobile-sidebar-top">
              <span className="mobile-sidebar-title">Menu</span>

              <button
                className="mobile-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="mobile-nav">
              <a href="/" onClick={closeMenu}>
                Home
              </a>
              <a href="/about" onClick={closeMenu}>
                About
              </a>
              <a href="/services" onClick={closeMenu}>
                Services
              </a>
              <a href="/contact" onClick={closeMenu}>
                Contact
              </a>
            </nav>
          </aside>
        </>
      )}
    </header>
  );
}
