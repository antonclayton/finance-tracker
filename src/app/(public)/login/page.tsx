"use client";

import Link from "next/link";
import { login } from "../../utils/authUtils/authActions";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Welcome Back</h1>
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

          <button type="submit" formAction={login} className={styles.button}>
            Log In
          </button>
        </form>

        <p className={styles.toggleMessage}>
          Don’t have an account?{" "}
          <Link href="/signup" className={styles.toggleLink}>
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}
