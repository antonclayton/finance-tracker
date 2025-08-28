import Link from "next/link";
import styles from "./page.module.css";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";

export default function AuthError() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <MarkEmailUnreadIcon color="primary" fontSize="large" />
        <h1 className={`${styles.title} mt-2`}>Verify Your Email</h1>
        <p className={styles.message}>
          We've sent a verification link to your email address. Please open your
          email and click the link to verify your account. Once verified, you
          can log in and start using your account.
        </p>
        <Link href="/login" className={styles.button}>
          Login Here
        </Link>
      </div>
    </div>
  );
}
