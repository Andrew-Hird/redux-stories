import React, {PropTypes} from 'react'

const Word = ({word, onClick}) => (
  <div>
    <button onClick={onClick}>x</button>
    I want a {word}
  </div>
)

Word.propTypes = {
  word: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Word
