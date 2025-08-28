import Link from "next/link";
import styles from "../Navbar.module.css";

const NavSkeleton = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        {/* Only show the logo during the loading state */}
        <Link href="/" className={styles.logo}>
          AntTrack
        </Link>
      </div>
    </nav>
  );
};

export default NavSkeleton;
