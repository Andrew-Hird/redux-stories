import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { addImage } from '../actions'

function submitImage (e, dispatch) {
  if (e.keyCode === 13) {
    dispatch(addImage(e.currentTarget.value))
    e.currentTarget.value = ''
  }
}

let AddImage = ({ dispatch }) => (
  <div>
    <input
      placeholder="Enter image url"
      onKeyUp={e => {
        submitImage(e, dispatch)
      }}
      />
  </div>
)

AddImage = connect()(AddImage)

export default AddImage

AddImage.propTypes = {
  dispatch: PropTypes.func
}
