import React from 'react'
import { connect } from 'react-redux'
import { addWord } from '../actions'

function submitWord (e, dispatch) {
  if (e.keyCode === 13) {
    dispatch(addWord(e.currentTarget.value))
    e.currentTarget.value = ''
  }
}

let AddWord = ({ dispatch }) => (
  <input
    placeholder="Enter what you want"
    onKeyUp={e => {
      submitWord(e, dispatch)
    }}
    />
)

AddWord = connect()(AddWord)

export default AddWord
