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
        <Link href="/" className="navbar-logo">
          <Image src={Logo} alt="Healthcare Logo" className="h-10 w-auto" />
        </Link>

        <nav className="navbar-links">
          <Link
            href="/"
            className={`nav-link ${isActive("/") ? "active" : ""}`}
          >
            Home
          </Link>

          <Link
            href="/services"
            className={`nav-link ${isActive("/services") ? "active" : ""}`}
          >
            Services
          </Link>

          <Link
            href="/about"
            className={`nav-link ${isActive("/about") ? "active" : ""}`}
          >
            About
          </Link>

          {/* <Link href="/" className={`nav-link`}>
            Blog
          </Link> */}

          <Link
            href="/contact"
            className={`nav-link ${isActive("/contact") ? "active" : ""}`}
          >
            Contact
          </Link>
        </nav>

        <div className="navbar-actions">
          <Link href="/contact" className="contact-button">
            Contact Us
          </Link>

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
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
              <Link href="/about" onClick={closeMenu}>
                About
              </Link>
              <Link href="/services" onClick={closeMenu}>
                Services
              </Link>
              <Link href="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </nav>
          </aside>
        </>
      )}
    </header>
  );
}
