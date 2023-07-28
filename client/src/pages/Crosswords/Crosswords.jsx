import React, { useEffect, useState } from 'react'
import CrosswordItem from './CrosswordItem'
import './Crosswords.css'

const Crosswords = () => {
    const [crosswords, setCrosswords] = useState([])
    useEffect(() => {
        setCrosswords([
            { Id: 1, Title: 'Первый кроссворд', Description: 'Описание1' },
            { Id: 2, Title: 'Второй кроссворд', Description: 'Описание2' },
            { Id: 3, Title: 'Третий кроссворд', Description: 'Описание3' }
        ])
    }, [])
    if (!crosswords.length) {
        return (
            <div>Кроссвордов нет...</div>
        )
    }
    return (
        <div className='main'>
            <div className='crosswordsList'>
                {
                    crosswords.map(c =>
                        <CrosswordItem key={c.Id} crossword={c} />
                    )
                }
            </div>
            <div className='crosswordInfo'>
                TEXT
            </div>
        </div>
    )
}

export default Crosswords