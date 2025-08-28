import React from "react";
import Link from "next/link";
import styles from "../Navbar.module.css";
import { NavLink } from "@/app/utils/types/navTypes";

interface DesktopNavProps {
  navLinks: NavLink[];
  className: string;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ navLinks, className }) => {
  return (
    <div className={`${styles.desktopNav} ${className}`}>
      {navLinks.map((link) => (
        <Link key={link.name} href={link.href} className={styles.navLink}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default DesktopNav;
