import React, { useState } from 'react'
import { QuizData } from "../Data/QuizData"
import QuizResult from './QuizResult';

function Quiz() {
  const quizData = QuizData
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [score, setscore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setshowResult] = useState(false);

  const handleForm = () => {
    // It Help's us to maintian the score o the user.
    if (clickedOption == quizData[currentQuestion].answer) {
      setscore(prev => prev + 1)

      setClickedOption(0)
    }
    changeQuestion()
  }

  const changeQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setcurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    }
    else {
      setshowResult(true)
    }
  }
  // const updateScore = () => {
  //   if (clickedOption == quizData[currentQuestion].answer) {
  //     setscore(prev => prev + 1)
  //   }
  // }
  const resetAll = () => {
    setshowResult(false);
    setcurrentQuestion(0);
    setClickedOption(0);
    setcurrentQuestion(0);
  }
  return (
    <div>
      <div className="container">
        {showResult ? (
          <QuizResult score={score} totalScore={quizData.length} tryAgain={resetAll} />
        ) : (
          <div className='my_app'>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}. </span>
              <span id="question-txt">{quizData[currentQuestion].question}</span>
            </div>
            <div className="option-container">
              {quizData[currentQuestion].options.map((option, i) => {
                return (
                  <button
                    //className="option-btn"
                    className={`option-btn ${clickedOption == option ? "checked" : null
                      }`}


                    key={i}
                    onClick={() => setClickedOption(option)}
                  >
                    {option}
                  </button>
                )
              })}

            </div>
            <button id="next-button" disabled={clickedOption === 0} onClick={handleForm} >Next</button>
          </div>)
        }
      </div>
    </div>
  )
}

export default Quiz
