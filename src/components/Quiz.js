import React from 'react'
import {shuffleArray} from './utils'
import QA from '../QA/QA.json'

const Quiz = ( {handleNextQuestion, showAnswer, handleAnswer, data: {question,correct, incorrect}}) => {

    const shuffledAnswer = shuffleArray([correct, ...incorrect])
    console.log(shuffledAnswer)

    return (
        <div className = 'flex flex-col'>
            <div className = 'bg-white text-purple-800 p-10 rounded-lg shadow-md'>
                <h2 className = 'text-2xl'>
                {question}
                </h2>
            </div>
            <div className = 'grid grid-cols-2 gap-6 mt-6'>
                {shuffledAnswer.map(answer => {
                    const txtColor = showAnswer ? 
                    answer === correct ? 'text-green-500' : 'text-red-500': 'text-purple-900'
                    //const textColor = showAnswer ? 'text-white' : 'text-purple-800'
                    return (
                        <button 
                            className={`bg-white ${txtColor}  p-4 font-semibold rounded shadow`}
                            onClick={() => handleAnswer(answer)} >
                            {answer}
                        </button>
                );
            })}
            </div>
            {showAnswer && (
                
                <button onClick = {handleNextQuestion} className = {`ml-auto bg-purple-700 text-white p-4 font-semibold rounded shadow mt-6`}>
                    Next Question
                </button>
            )}
            
        </div>
    )
}

export default Quiz;