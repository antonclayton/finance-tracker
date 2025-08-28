import React from "react";
import Link from "next/link";
import styles from "../Navbar.module.css";
import { NavLink } from "@/app/utils/types/navTypes";

interface DesktopNavProps {
  navLinks: NavLink[];
  handleLogout: () => void;
  isLoggedIn: boolean;
}

const DesktopNav: React.FC<DesktopNavProps> = ({
  navLinks,
  handleLogout,
  isLoggedIn,
}) => {
  return (
    <div className={styles.desktopNav}>
      {navLinks.map((link) => (
        <Link key={link.name} href={link.href} className={styles.navLink}>
          {link.name}
        </Link>
      ))}
      {isLoggedIn && (
        <form action={handleLogout}>
          <button className={`${styles.navLink} ${styles.logoutButton}`}>
            Logout
          </button>
        </form>
      )}
    </div>
  );
};

export default DesktopNav;
