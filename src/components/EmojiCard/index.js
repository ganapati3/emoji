import './index.css'

const EmojiCard = props => {
  const {emojiDetails, compareWithPreviousEmoji} = props
  const {id, emojiUrl, emojiName} = emojiDetails
  const shuffleEmojis = () => {
    compareWithPreviousEmoji(id)
  }

  return (
    <li className="emoji-container">
      <button onClick={shuffleEmojis} className="emoji-button" type="button">
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
