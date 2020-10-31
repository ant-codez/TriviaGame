import logo from './logo.svg';
import React, {useState, useEffect } from 'react'
import QA from './QA/QA.json'
import {Quiz} from './components'
import './App.css';

function App() {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false)
  const [questions, setQuestions] = useState([]);

{/* 
  const q = QA.map((question) => 
  ({
    ...question,
    answers: [
      question.correct,
      ...question.incorrect
    ].sort(() => Math.random() - 0.5)
  }))

  */}

  //console.log(q)

  const handleAnswer = (answer) => {
    //const newIndex = currentIndex + 1
    //setCurrentIndex(currentIndex + 1);

    if (!showAnswers){
      if (answer === QA[currentIndex].correct){
        setScore(score  + 1)
      }
    }

    setShowAnswers(true);
  }

  const handleNextQuestion = () => {
    setShowAnswers(false);

    setCurrentIndex(currentIndex + 1);
  }

  return gameEnded ?  (
    <h1 className = 'text-3xl text-white font-bold'>Game Over!! Your Score is: {score} </h1> ) : (
    <div className = 'container'>
      <Quiz data = {QA[currentIndex]} handleAnswer={handleAnswer} showAnswer = {showAnswers} handleNextQuestion = {handleNextQuestion}/>
    </div>
  );
}

export default App;
