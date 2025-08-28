import React from "react";
import Link from "next/link";
import styles from "../Navbar.module.css";
import { NavLink } from "@/app/utils/types/navTypes";

interface MobileMenuProps {
  navLinks: NavLink[];
  isOpen: boolean;
  onClose: () => void;
  handleLogout: () => void;
  isLoggedIn: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  navLinks,
  isOpen,
  onClose,
  handleLogout,
  isLoggedIn,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.mobileMenuOverlay}>
      <div className={styles.mobileNavLinks}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={styles.mobileNavLink}
            onClick={onClose}
          >
            {link.name}
          </Link>
        ))}
        {isLoggedIn && (
          <form action={handleLogout}>
            <button
              className={`${styles.mobileNavLink} ${styles.mobileLogoutButton}`}
            >
              Logout
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
