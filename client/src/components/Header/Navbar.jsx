import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Link className={styles.link} to='/crosswords'>Кроссворды</Link>
        <Link className={styles.link} to='/info'>О сайте</Link>
        <button className={styles.button}>Войти</button>
    </div>
  )
}

export default Navbar