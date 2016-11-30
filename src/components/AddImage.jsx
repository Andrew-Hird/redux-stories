import React from 'react'
import { connect } from 'react-redux'
import { addImage } from '../actions'

function submitImage (e, dispatch) {
  if (e.keyCode === 13) {
    dispatch(addImage(e.currentTarget.value))
    e.currentTarget.value = ''
  }
}

let AddImage = ({ dispatch }) => (
  <input
    placeholder="Enter image url"
    onKeyUp={e => {
      submitImage(e, dispatch)
    }}
    />
)

AddImage = connect()(AddImage)

export default AddImage
