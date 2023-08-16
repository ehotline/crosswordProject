import React, { useEffect, useState } from 'react'
import styles from './Crosswords.module.css'
import { useFetching } from '../../hooks/useFetching'
import CrosswordsList from './CrosswordsList'
import CrosswordService from '../../services/CrosswordService'
import GlobalWrapper from '../../components/GlobalWrapper/GlobalWrapper'

const Crosswords = () => {
    const [selectedCrossword, setSelectedCrossword] = useState(null)
    const [isCrosswordRemoved, setIsCrosswordRemoved] = useState([false, 0])
    const [crosswords, setCrosswords] = useState([])
    const [fetchCrosswords, isCrosswordsLoading, error] = useFetching(async () => {
        const response = await CrosswordService.getAll()
        setCrosswords(response.data)
        if (response.data[0]) {
            setSelectedCrossword(response.data[0])
        }
    })

    useEffect(() => {
        fetchCrosswords()
    }, [])

    useEffect(() => {
        if (isCrosswordRemoved[0] === false) {
            return
        } else {
            const removedIndex = isCrosswordRemoved[1]
            if (crosswords.length > removedIndex) {
                setSelectedCrossword(crosswords[removedIndex])
            } else if (crosswords.length > 0) {
                setSelectedCrossword(crosswords[crosswords.length - 1])
            } else {
                setSelectedCrossword(null)
            }
            setIsCrosswordRemoved([false, 0])
        }
    }, [crosswords])

    const createCrossword = async () => {
        const randomNumber = Math.floor(Math.random() * 1000)
        const response = await CrosswordService.add({
            Title: "Кроссворд" + randomNumber,
            Description: "Описание" + randomNumber,
            Rows: 6,
            Columns: 5
        })
        if (!crosswords.length) {
            fetchCrosswords()
        } else {
            setCrosswords([...crosswords, response.data])
        }
    }

    const removeCrossword = () => {
        if (!selectedCrossword) return
        const removedId = selectedCrossword.Id
        const removedIndex = crosswords.indexOf(selectedCrossword)
        CrosswordService.remove(removedId)
        setCrosswords(crosswords.filter(c => c.Id !== removedId))
        setIsCrosswordRemoved([true, removedIndex])
    }

    return (
        <GlobalWrapper>
            <div className={styles.main}>
                <CrosswordsList
                    crosswords={crosswords}
                    isCrosswordsLoading={isCrosswordsLoading}
                    selectedCrossword={selectedCrossword}
                    setSelectedCrossword={setSelectedCrossword}
                />
                <div className={styles.sideBar}>
                    <div className={`${styles.container} ${styles.crosswordInfo}`}>
                        <button className={`${styles.button} ${styles.create}`} onClick={createCrossword}>Создать</button>
                        <button className={`${styles.button} ${styles.delete}`} onClick={removeCrossword}>Удалить</button>
                        <div className={styles.line} />
                        <div className={styles.description}>{selectedCrossword?.Description}</div>
                    </div>
                </div>
            </div>
        </GlobalWrapper>
    )
}

export default Crosswords