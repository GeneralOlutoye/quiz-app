import React from 'react'

export const Result = (props) => {

    return (
        <div className='reset'>
            <h3>{`Your total score is ${props.score}`}</h3>
            <h1>
                {`Percentage ${props.score * 100 / props.questions.length}% `}
            </h1>

            <button className='resetBtn' onClick={()=>props.start()} >RESET</button>
        </div>
    )
}
