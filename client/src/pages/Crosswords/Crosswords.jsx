import React, { useEffect, useState } from 'react'
import styles from './Crosswords.module.css'
import CrosswordsList from './CrosswordsList'

const Crosswords = () => {
    const [selectedCrossword, setSelectedCrossword] = useState({})

    return (
        <div className={styles.main}>
            <CrosswordsList selectedCrossword={selectedCrossword} setSelectedCrossword={setSelectedCrossword}/>
            <div className={styles.sideBar}>
                <div className={`${styles.container} ${styles.crosswordInfo}`}>
                    <button className={`${styles.button} ${styles.create}`}>Создать</button>
                    <button className={`${styles.button} ${styles.delete}`}>Удалить</button>
                    <div className={styles.line} />
                    <div className={styles.description}>{selectedCrossword?.Description}</div>
                </div>
            </div>
        </div>
    )
}

export default Crosswords