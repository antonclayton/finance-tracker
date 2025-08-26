"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

// The simple navigation data
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Transactions", href: "/transactions" },
  { name: "Reports", href: "/reports" },
  { name: "Profile", href: "/profile" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        {/* Logo or App Title */}
        <div className={styles.logo}>AntTrack</div>

        {/* Desktop Navigation Links (hidden on small screens) */}
        <div className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} passHref>
              <div className={styles.navLink}>{link.name}</div>
            </Link>
          ))}
        </div>

        {/* Hamburger Icon for Mobile (hidden on desktop) */}
        <div className={styles.hamburgerMenu}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.hamburgerButton}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                // Close icon (X) when menu is open
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon when menu is closed
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay (conditionally rendered) */}
      {isOpen && (
        <div className={styles.mobileMenuOverlay}>
          <div className={styles.mobileNavLinks}>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} passHref>
                <div
                  className={styles.mobileNavLink}
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {link.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
