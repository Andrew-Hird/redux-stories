import React, {PropTypes} from 'react'

import Word from './Word'

const Words = ({words, onClick}) => (
  <div>
    {words.map(word =>
      <Word
        key={word.id}
        onClick={() => onClick(word.id)}
        {...word}
        />
    )}
  </div>
)

Words.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      word: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired
}

export default Words
