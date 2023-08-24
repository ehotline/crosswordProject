import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { ROUTE_AUTH, ROUTE_CROSSWORDS, ROUTE_INFO } from '../../routes'
import { AuthContext } from '../../contexts/AuthContext'
import { observer } from 'mobx-react-lite'
import UserProfileBadge from '../UserProfileBadge/UserProfileBadge'

const Navbar = observer(() => {
    const { Context } = useContext(AuthContext)

    return (
        <div className={styles.navbar}>
            <Link className={styles.link} to={ROUTE_CROSSWORDS}>Кроссворды</Link>
            <Link className={styles.link} to={ROUTE_INFO}>О сайте</Link>
            {!Context.isAuth
                ?
                <Link className={styles.linkButton} to={ROUTE_AUTH}>Войти</Link>
                :
                <UserProfileBadge/>
            }
        </div>
    )
})

export default Navbar