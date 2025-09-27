'use client';

import { useState } from 'react';
import { createClient } from '../../../utils/supabase/client';
import Link from 'next/link';
import styles from './ResetPasswordPage.module.css';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(value.length >= 8);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!passwordValid) {
      setError('Password must be at least 8 characters.');
      return;
    }
    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
        setPassword('');
      setSuccess('Password has been reset! You can now log in.');
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Reset Password</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter new password"
          className={styles.input}
          required
        />
        {!passwordValid && (
            <p className={styles.error}>
              Password must be at least 8 characters
            </p>
          )}
        <button type="submit" disabled={loading} className={styles.button}>
          {loading ? 'Resetting...' : 'Reset Password'}
        </button>
        {error && <div className={styles.error}>{error}</div>}
        {success && <div className={styles.success}>{success}</div>}
        <div className={styles.link}>
          <Link href="/login">Return to login</Link>
        </div>
      </form>
    </div>
  );
}