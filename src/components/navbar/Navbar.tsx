"use client";

import React, { useState } from "react";
import Link from "next/link";
import DesktopNav from "./components/desktopNav";
import MobileMenu from "./components/mobileMenu";
import HamburgerIcon from "./components/HamburgerIcon";
import styles from "./Navbar.module.css";
import { useAuthContext } from "@/app/utils/contexts/AuthContext";

const loggedOutLinks = [
  { name: "Login", href: "/login" },
  { name: "Signup", href: "/signup" },
];

const loggedInLinks = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Transactions", href: "/transactions" },
  { name: "Reports", href: "/reports" },
  { name: "Profile", href: "/profile" },
];

export default function Navbar() {
  const { user, isReady } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);

  // Decide which links to show only when ready
  const navLinks = isReady ? (user ? loggedInLinks : loggedOutLinks) : [];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          AntTrack
        </Link>

        {/* Desktop Nav */}
        <DesktopNav
          navLinks={navLinks}
          className={isReady ? styles.fadeIn : styles.hiddenLinks} // fade in when ready
        />

        {/* Hamburger Icon */}
        <HamburgerIcon
          isOpen={isOpen}
          toggleMenu={() => setIsOpen((prev) => !prev)}
        />
      </div>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        navLinks={navLinks}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </nav>
  );
}
