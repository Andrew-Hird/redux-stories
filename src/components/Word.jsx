import React, {PropTypes} from 'react'

const Word = ({word}) => (
  <div>I want a {word}</div>
)

Word.propTypes = {
  word: PropTypes.string.isRequired
}

export default Word
