"use client";

import Link from "next/link";
import { signup } from "../../utils/authUtils/authActions";
import styles from "./SignupPage.module.css";

export default function SignupPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Create an Account</h1>
        <form className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={styles.input}
          />

          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className={styles.input}
          />

          <button type="submit" formAction={signup} className={styles.button}>
            Sign Up
          </button>
        </form>

        <p className={styles.toggleMessage}>
          Already have an account?{" "}
          <Link href="/login" className={styles.toggleLink}>
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}
