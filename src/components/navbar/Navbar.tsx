"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import DesktopNav from "./components/DesktopNav";
import MobileMenu from "./components/MobileMenu";
import HamburgerIcon from "./components/HamburgerIcon";
import NavSkeleton from "./components/NavSkeleton";
import styles from "./Navbar.module.css";
import type { User } from "@supabase/supabase-js";
import { useAuthStore } from "@/store/authStore";
import { logout } from "@/app/utils/authUtils/authActions";
import {
  loggedInLinks,
  loggedOutLinks,
} from "@/app/utils/constants/navbarConstants";

interface NavbarProps {
  user: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const login = useAuthStore((state) => state.login);
  const setLoading = useAuthStore((state) => state.setLoading);

  useEffect(() => {
    // This effect runs whenever the `user` prop changes.
    // If a user exists, update the Zustand store.
    if (user) {
      login({ id: user.id, email: user.email }); // Assuming 'email' for the name
    } else {
      // If the user logs out, reset the store.
      useAuthStore.getState().logout();
    }
    setLoading(false);
  }, [user, login]);

  const { isLoggedIn, logout: storeLogout, loading } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => setIsOpen((prev) => !prev);
  const handleCloseMenu = () => setIsOpen(false);

  const handleLogout = async () => {
    // First, call the async action to log out from your backend (e.g., Supabase)
    await logout();
    // Then, update your local state store
    storeLogout();
    // And finally, close the mobile menu
    handleCloseMenu();
  };

  // useEffect hook to handle window resizing
  useEffect(() => {
    const handleResize = () => {
      // Check if the viewport width is larger than the mobile breakpoint (640px)
      // and if the menu is currently open.
      if (window.innerWidth >= 640 && isOpen) {
        handleCloseMenu();
      }
    };

    // Add event listener for the 'resize' event
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]); // Re-run the effect only when the 'isOpen' state changes

  // Select which links to display based on the user auth status
  const navLinks = isLoggedIn ? loggedInLinks : loggedOutLinks;

  // Conditional rendering for the loading state
  if (loading) {
    return <NavSkeleton />;
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          AntTrack
        </Link>

        {/* Desktop Nav - hidden on mobile via CSS */}
        <DesktopNav
          navLinks={navLinks}
          handleLogout={handleLogout}
          isLoggedIn={isLoggedIn}
        />

        {/* Hamburger Icon - hidden on desktop via CSS */}
        <HamburgerIcon isOpen={isOpen} toggleMenu={handleToggleMenu} />
      </div>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        navLinks={navLinks}
        isOpen={isOpen}
        onClose={handleCloseMenu}
        handleLogout={handleLogout}
        isLoggedIn={isLoggedIn}
      />
    </nav>
  );
};

export default Navbar;
