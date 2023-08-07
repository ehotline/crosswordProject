import React from 'react'
import styles from './Crosswords.module.css'

const CrosswordItem = ({ crossword, selectedCrossword, ...props }) => {
    return (
        <div className={`${styles.crosswordItem} ${crossword.Id === selectedCrossword.Id ? styles.selected : ''}`} {...props}>
            <div className={styles.title}>
                {crossword.Title}
            </div>
        </div>
    )
}

export default CrosswordItem