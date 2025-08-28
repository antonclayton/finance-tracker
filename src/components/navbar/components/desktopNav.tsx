import React from "react";
import Link from "next/link";
import styles from "../Navbar.module.css";
import { NavLink } from "@/app/utils/types/navTypes";

interface DesktopNavProps {
  navLinks: NavLink[];
}

const DesktopNav: React.FC<DesktopNavProps> = ({ navLinks }) => {
  return (
    <div className={styles.desktopNav}>
      {navLinks.map((link) => (
        <Link key={link.name} href={link.href} className={styles.navLink}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default DesktopNav;
