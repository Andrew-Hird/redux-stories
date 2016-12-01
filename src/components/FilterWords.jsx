import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { filterWords } from '../actions'

function submitFilter (e, dispatch) {
  dispatch(filterWords(e.currentTarget.value))
}

let FilterWords = ({ dispatch }) => (
  <input
    placeholder="filter words"
    onChange={e => submitFilter(e, dispatch)}
    />
)

FilterWords = connect()(FilterWords)

export default FilterWords

FilterWords.propTypes = {
  dispatch: PropTypes.func,
  onChange: PropTypes.func
}
