/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { questions } from '../questions/question'
import { Result } from '../result'


export const QuestionPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [result, setResult] = useState(false)
    const [score, setScore] = useState(0)
    const [state, setState] = useState([])


    const prev = () => {
        if (currentQuestion !== 0 && currentQuestion !== questions.length) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }

    const next = () => {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setResult(true);
        }

    }

    const optionClicked = (isCorrect, color) => {
        if (isCorrect) {
            setScore(score + 1)
        }
    }

    const reset = () => {
        setScore(0)
        setCurrentQuestion(0)
        setResult(false)
    }

    useEffect(() => {
        setState(questions)
    }, [])

    return (
        <div className='questionPage'>
            {result ?
                <Result
                    score={score}
                    questions={questions}
                    start={reset}
                />

                :
                <div>
                    <h1>{state[currentQuestion]?.question}</h1>
                    <ul>

                        {state[currentQuestion]?.options?.map((answer, index) =>
                            <>
                                <li style={{}}
                                    onClick={() => optionClicked(answer.isCorrect)}
                                > {answer.answer}</li>
                            </>
                        )}
                    </ul>
                    <div className='buttonArea'>
                        <button className='btn1' disabled={currentQuestion === 0 ? true : false} onClick={() => prev()} > Prev </button>
                        <button className='btn2' onClick={() => next()} > Next </button>
                    </div>
                    {`Question ${currentQuestion + 1} of ${questions.length} `}

                </div>
            }
        </div>
    )
}
