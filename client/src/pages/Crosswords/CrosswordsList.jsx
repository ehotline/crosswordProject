import React, { useEffect, useState } from 'react'
import styles from './Crosswords.module.css'
import { useFetching } from '../../hooks/useFetching'
import CrosswordService from '../../services/CrosswordService'
import CrosswordItem from './CrosswordItem'

const CrosswordsList = ({selectedCrossword, setSelectedCrossword, isCrosswordsChanged}) => {
    const [crosswords, setCrosswords] = useState([])
    const [fetchCrosswords, isLoadingCrosswords, error] = useFetching(async () => {
        const response = await CrosswordService.getAll()
        setCrosswords(response.data)
        if (response.data[0]) {
            setSelectedCrossword(response.data[0])
        }
    })

    useEffect(() => {
        fetchCrosswords()
        console.log(123);
    }, [isCrosswordsChanged])

    if (isLoadingCrosswords) {
        return (
            <div>Загрузка кроссвордов...</div>
        )
    }
    if (!crosswords.length && !isLoadingCrosswords) {
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