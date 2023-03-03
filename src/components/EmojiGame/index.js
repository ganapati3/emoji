/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = props
    this.state = {
      emojiList: emojisList,
      score: 0,
      topScore: 0,
      lastClickedId: [],
      isSame: false,
    }
  }

  compareWithPreviousEmoji = id => {
    const {emojiList} = this.state
    const shuffledEmojis = emojiList.sort(() => Math.random() - 0.5)
    this.setState(prevState => ({
      score: !prevState.lastClickedId.includes(id)
        ? prevState.score + 1
        : prevState.score,
      isSame: prevState.lastClickedId.includes(id),
      lastClickedId: [...prevState.lastClickedId, id],
      emojiList: shuffledEmojis,
    }))
  }

  renderEmojisContainer = () => {
    const {emojiList} = this.state
    return (
      <ul className="emojis-container">
        {emojiList.map(eachItem => (
          <EmojiCard
            emojiDetails={eachItem}
            key={eachItem.id}
            compareWithPreviousEmoji={this.compareWithPreviousEmoji}
          />
        ))}
      </ul>
    )
  }

  getResult = () => {
    const {topScore} = this.state
    this.setState(prevState => ({
      topScore:
        prevState.score > prevState.topScore && prevState.topScore !== 12
          ? prevState.score
          : topScore,
      lastClickedId: [],
      isSame: false,
      score: 0,
    }))
  }

  renderResult = () => {
    const {score, topScore} = this.state
    return (
      <WinOrLoseCard
        topScore={topScore}
        score={score}
        getResult={this.getResult}
      />
    )
  }

  render() {
    const {score, topScore, isSame} = this.state

    return (
      <div className="emoji-game-container">
        <nav className="nav-bar">
          <NavBar score={score} topScore={topScore} />
        </nav>
        <div className="container">
          {isSame ? this.renderResult() : this.renderEmojisContainer()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
