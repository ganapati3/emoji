import './index.css'

const WinOrLoseCard = props => {
  const {score, getResult} = props
  const winningText =
    score !== 12
      ? [
          'You Lose',
          'Score',
          'https://assets.ccbp.in/frontend/react-js/lose-game-img.png',
        ]
      : [
          'You Won',
          'Best Score',
          'https://assets.ccbp.in/frontend/react-js/won-game-img.png',
        ]

  const playAgain = () => {
    getResult()
  }
  return (
    <div className="result-container">
      <div>
        <h1 className="your-score">{winningText[0]}</h1>
        <p className="score-win">{winningText[1]}</p>
        <p className="score-board">{score}/12</p>
        <button onClick={playAgain} type="button" className="play-btn">
          Play Again
        </button>
      </div>
      <img className="result-image" src={winningText[2]} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
