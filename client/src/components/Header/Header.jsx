import React from 'react'
import Navbar from './Navbar'
import styles from './Header.module.css'
import { observer } from 'mobx-react-lite'

const Header = observer(() => {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>Кроссворды</div>
        <Navbar/>
    </div>
  )
})

export default Header