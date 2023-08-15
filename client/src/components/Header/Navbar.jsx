import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link className={styles.link} to='/crosswords'>Кроссворды</Link>
            <Link className={styles.link} to='/info'>О сайте</Link>
            <Link className={styles.linkButton} to='/auth'>Войти</Link>
        </div>
    )
}

export default Navbar