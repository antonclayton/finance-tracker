import React from "react";
import styles from "../Navbar.module.css";

interface HamburgerButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  toggleMenu,
}) => {
  return (
    <div className={styles.hamburgerMenu}>
      <button onClick={toggleMenu} className={styles.hamburgerButton}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
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
  );
};

export default HamburgerButton;
