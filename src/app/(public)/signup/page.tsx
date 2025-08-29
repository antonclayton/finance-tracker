"use client";

import Link from "next/link";
import { useState } from "react";
import { signup } from "../../utils/authUtils/authActions";
import styles from "./SignupPage.module.css";

// Simple email validation util
function isValidEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(isValidEmail(value));
  };

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
            value={email}
            onChange={handleEmailChange}
          />
          {!emailValid && <p className={styles.error}>Invalid email address</p>}

          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className={styles.input}
          />

          <button
            type="submit"
            formAction={signup}
            className={styles.button}
            disabled={!emailValid}
          >
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
