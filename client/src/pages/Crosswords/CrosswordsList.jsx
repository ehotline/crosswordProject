import React, { useEffect, useState } from 'react'
import styles from './Crosswords.module.css'
import CrosswordItem from './CrosswordItem'

const CrosswordsList = ({ crosswords, isCrosswordsLoading, selectedCrossword, setSelectedCrossword, isCrosswordsChanged }) => {
    return (
        <div className={styles.crosswordsList}>
            {
                isCrosswordsLoading
                    ?
                    <div className={styles.container}>
                        <h3>Загрузка кроссвордов...</h3>
                    </div>
                    :
                    !crosswords.length && !isCrosswordsLoading
                        ?
                        <div className={styles.container}>
                            <h3>Нет кроссвордов</h3>
                        </div>
                        :
                        crosswords.map(c =>
                            <CrosswordItem key={c.Id} crossword={c} selectedCrossword={selectedCrossword} onClick={() => setSelectedCrossword(c)} />
                        )
            }
        </div>
    )
}

export default CrosswordsList