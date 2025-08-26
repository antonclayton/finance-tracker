"use client";

import React, { useState } from "react";
import Link from "next/link";
import DesktopNav from "./components/desktopNav";
import MobileMenu from "./components/mobileMenu";
import HamburgerIcon from "./components/HamburgerIcon";
import styles from "./Navbar.module.css";

// Navigation data
const navLinks = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Transactions", href: "/transactions" },
  { name: "Reports", href: "/reports" },
  { name: "Profile", href: "/profile" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => setIsOpen((prev) => !prev);
  const handleCloseMenu = () => setIsOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          AntTrack
        </Link>

        {/* Desktop Nav - hidden on mobile via CSS */}
        <DesktopNav navLinks={navLinks} />

        {/* Hamburger Icon - hidden on desktop via CSS */}
        <HamburgerIcon isOpen={isOpen} toggleMenu={handleToggleMenu} />
      </div>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        navLinks={navLinks}
        isOpen={isOpen}
        onClose={handleCloseMenu}
      />
    </nav>
  );
};

export default Navbar;
