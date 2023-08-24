import React, { useContext } from 'react'
import styles from './UserProfileBadge.module.css'
import { observer } from 'mobx-react-lite'
import { AuthContext } from '../../contexts/AuthContext'

const UserProfileBadge = observer(() => {
    const { Context } = useContext(AuthContext)

    return (
        <div className={styles.main}>
            <div className={styles.username}>{Context.user?.Username}</div>
            <div className={styles.image}/>
        </div>
    )
})

export default UserProfileBadge