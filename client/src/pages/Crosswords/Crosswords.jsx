import React, { useEffect, useState } from 'react'
import styles from './Crosswords.module.css'
import CrosswordsList from './CrosswordsList'
import CrosswordService from '../../services/CrosswordService'

const Crosswords = () => {
    const [selectedCrossword, setSelectedCrossword] = useState({})
    const [isCrosswordsChanged, setIsCrosswordsChanged] = useState(false)

    const createCrossword = () => {
        CrosswordService.add({
            Title: "Кроссворд123",
            Description: "Описание123",
            Rows: 6,
            Columns: 5
        })
        setIsCrosswordsChanged(!isCrosswordsChanged)
        console.log(isCrosswordsChanged);
    }

    return (
        <div className={styles.main}>
            <CrosswordsList
                selectedCrossword={selectedCrossword}
                setSelectedCrossword={setSelectedCrossword}
                isCrosswordsChanged={isCrosswordsChanged}
            />
            <div className={styles.sideBar}>
                <div className={`${styles.container} ${styles.crosswordInfo}`}>
                    <button className={`${styles.button} ${styles.create}`} onClick={createCrossword}>Создать</button>
                    <button className={`${styles.button} ${styles.delete}`}>Удалить</button>
                    <div className={styles.line} />
                    <div className={styles.description}>{selectedCrossword?.Description}</div>
                </div>
            </div>
        </div>
    )
}

export default Crosswords