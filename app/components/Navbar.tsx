"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [showHomeDropdown, setShowHomeDropdown] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container navbar-wrap">
        <div className="navbar-logo">
          <Link href="/" className="navbar-logo-text">
            Doctio
          </Link>
        </div>

        <nav className="navbar-links">
          <div
            className="nav-item nav-item-dropdown"
            onMouseEnter={() => setShowHomeDropdown(true)}
            onMouseLeave={() => setShowHomeDropdown(false)}
          >
            <Link
              href="/"
              className={`nav-link ${pathname === "/" ? "active" : ""}`}
            >
              Home
            </Link>

            {showHomeDropdown && (
              <div className="nav-dropdown">
                <Link href="/" className="dropdown-link">
                  Home One
                </Link>
                <Link href="/" className="dropdown-link">
                  Home Two
                </Link>
                <Link href="/" className="dropdown-link">
                  Home Three
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className={`nav-link ${pathname === "/about" ? "active" : ""}`}
          >
            About Us
          </Link>

          <Link
            href="/services"
            className={`nav-link ${
              pathname.startsWith("/services") ? "active" : ""
            }`}
          >
            Our Services
          </Link>

          <Link
            href="/#blog"
            className={`nav-link ${pathname === "/blog" ? "active" : ""}`}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
          >
            Contact
          </Link>
        </nav>

        <div className="navbar-actions">
          <button className="contact-button">
            <span className="contact-text">Contact Us</span>
            <span className="contact-divider">|</span>
            <span className="contact-plus">+</span>
          </button>
        </div>
      </div>
    </header>
  );
}
