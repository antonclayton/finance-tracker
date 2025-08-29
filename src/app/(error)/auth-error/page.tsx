import Link from "next/link";
import styles from "./AuthErrorPage.module.css";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function AuthError() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <ErrorOutlineIcon color="primary" fontSize="large" />
        <h1 className={`${styles.title} mt-2`}>Authentication Error</h1>
        <p className={styles.message}>
          Sorry, something went wrong. Please make sure you have verified your
          email or are logged in. If you don't have an account, please sign up!
        </p>
        <Link href="/" className={styles.button}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
