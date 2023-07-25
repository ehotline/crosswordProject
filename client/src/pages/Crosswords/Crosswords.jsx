import React, { useEffect, useState } from 'react'
import CrosswordItem from './CrosswordItem'

const Crosswords = () => {
    const [crosswords, setCrosswords] = useState([])
    useEffect(() => {
        setCrosswords([
            { Id: 1, Title: 'Первый кроссворд', Description: 'Описание1' },
            { Id: 2, Title: 'Второй кроссворд', Description: 'Описание2' },
            { Id: 3, Title: 'Третий кроссворд', Description: 'Описание3' }
        ])
    }, [])
    if(!crosswords.length) {
        return(
            <div>Кроссвордов нет...</div>
        )
    }
    return (
        <div className='crosswordsList'>
            {
                crosswords.map(c =>
                    <CrosswordItem key={c.Id} crossword={c}/>
                )
            }
        </div>
    )
}

export default Crosswords