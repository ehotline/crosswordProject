import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { ROUTE_AUTH, ROUTE_CROSSWORDS, ROUTE_INFO } from '../../routes'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link className={styles.link} to={ROUTE_CROSSWORDS}>Кроссворды</Link>
            <Link className={styles.link} to={ROUTE_INFO}>О сайте</Link>
            <Link className={styles.linkButton} to={ROUTE_AUTH}>Войти</Link>
        </div>
    )
}

export default Navbar