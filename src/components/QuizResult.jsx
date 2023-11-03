import React from 'react'

function QuizResult(props) {
  return (
<>

    <div className='show-score'>
      Your Score <br/>
      <h1>{props.score}</h1>
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult
