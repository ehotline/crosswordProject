import React from 'react'

const CrosswordItem = ({ crossword }) => {
    return (
        <div className='crosswordItem'>
            <div className='title'>
                {crossword.Id}. {crossword.Title}
            </div>
            <div className='description'>
                {crossword.Description}
            </div>
        </div>
    )
}

export default CrosswordItem