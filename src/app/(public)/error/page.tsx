import Link from "next/link";
import styles from "./page.module.css";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function AuthError() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <ErrorOutlineIcon color="primary" fontSize="large" />
        <h1 className={`${styles.title} mt-2`}>Error</h1>
        <p className={styles.message}>Sorry, something went wrong.</p>
        <Link href="/" className={styles.button}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
