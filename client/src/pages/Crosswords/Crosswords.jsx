import React, { useEffect, useState } from 'react'
import CrosswordItem from './CrosswordItem'
import './Crosswords.css'
import { useFetching } from '../../hooks/useFetching'
import CrosswordService from '../../services/CrosswordService'

const Crosswords = () => {
    const [crosswords, setCrosswords] = useState([])
    const [selectedCrossword, setSelectedCrossword] = useState({})
    const [fetchCrosswords, isLoadingCrosswords, error] = useFetching(async () => {
        const response = await CrosswordService.getAll()
        setCrosswords(response.data)
        if(response.data[0]) {
            setSelectedCrossword(response.data[0])
        }
    })

    const crosswordItemClick = (c) => {
        setSelectedCrossword(c)
    }

    useEffect(() => {
        fetchCrosswords()
    }, [])
    if (isLoadingCrosswords) {
        return (
            <div>Загрузка кроссвордов...</div>
        )
    }
    return (
        <div className='main'>
            <div className='crosswordsList'>
                {
                    crosswords.map(c =>
                        <CrosswordItem key={c.Id} crossword={c} selectedCrossword={selectedCrossword} onClick={() => crosswordItemClick(c)} />
                    )
                }
            </div>
            <div className='crosswordInfo'>
                <div>{selectedCrossword?.Description}</div>
            </div>
        </div>
    )
}

export default Crosswords