import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  const scoreText = score > 0 ? score : 0
  return (
    <>
      <div className="logo-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </div>
      <div className="logo-container">
        <p className="score">Score: {scoreText}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    </>
  )
}

export default NavBar
