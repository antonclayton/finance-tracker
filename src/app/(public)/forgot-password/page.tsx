'use client';

import { useState } from 'react';
import { createClient } from '../../../utils/supabase/client';
import styles from './ForgotPasswordPage.module.css';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  function validateEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSuccess('Password reset email sent! Check your inbox.');
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Forgot Password</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className={styles.input}
          required
        />
        <button type="submit" disabled={loading} className={styles.button}>
          {loading ? 'Sending...' : 'Reset Password'}
        </button>
        {error && <div className={styles.error}>{error}</div>}
        {success && <div className={styles.success}>{success}</div>}
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <a href="/login" style={{ fontSize: '0.95rem', color: '#6d28d9', textDecoration: 'underline' }}>
            Return to login
          </a>
        </div>
      </form>
    </div>
  );
}