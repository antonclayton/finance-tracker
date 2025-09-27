"use client";

import React from 'react'
import { useAuthStore } from '@/store/authStore';
import styles from './ProfilePage.module.css';

const Profile = () => {
  const { user } = useAuthStore();
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Profile</h1>
        <div className={styles.row}>
          <span className={styles.label}>Email:</span>
          <span className={styles.value}>{user?.email ?? '—'}</span>
        </div>
      </div>
    </div>
  )
}

export default Profile