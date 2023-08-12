import React, { useEffect, useState } from 'react'
import styles from './Crosswords.module.css'
import CrosswordItem from './CrosswordItem'

const CrosswordsList = ({crosswords, isCrosswordsLoading, selectedCrossword, setSelectedCrossword, isCrosswordsChanged}) => {

    if (isCrosswordsLoading) {
        return (
            <div>Загрузка кроссвордов...</div>
        )
    }
    if (!crosswords.length && !isCrosswordsLoading) {
        return (
            <div>Нет кроссвордов</div>
        )
    }

    return (
        <div className={styles.crosswordsList}>
            {
                crosswords.map(c =>
                    <CrosswordItem key={c.Id} crossword={c} selectedCrossword={selectedCrossword} onClick={() => setSelectedCrossword(c)} />
                )
            }
        </div>
    )
}

export default CrosswordsList