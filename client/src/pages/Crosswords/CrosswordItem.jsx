import React from 'react'

const CrosswordItem = ({ crossword, selectedCrossword, ...props }) => {
    return (
        <div className={crossword.Id === selectedCrossword.Id ? "crosswordItem selected" : 'crosswordItem'} {...props}>
            <div className='title'>
                {crossword.Title}
            </div>
        </div>
    )
}

export default CrosswordItem