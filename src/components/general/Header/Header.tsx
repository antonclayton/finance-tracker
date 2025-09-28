import React from 'react'
import styles from './Header.module.css'

const Header = ({title}: {title: string}) => {
  return (
    <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
    </div>
  )
}

export default Header