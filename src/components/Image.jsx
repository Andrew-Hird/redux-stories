import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addImageDescription } from '../actions'

function submitDescription (e, id, dispatch) {
  if (e.keyCode === 13) {
    dispatch(addImageDescription(e.currentTarget.value, id))
    e.currentTarget.value = ''
  }
}

let Image = ({id, image, description, onClick, dispatch}) => (
  <div className="image">
    <button onClick={onClick}>x</button>
    <img
      src={image}
      style={{height: 200, width: 200}} />
      <br/>
      <input
        placeholder="Enter image description"
        style={{display: description ? 'none' : ''}}
        onKeyUp={e => {
          submitDescription(e, id, dispatch)
        }}
        />
        <br/>
    {description}
    <hr/>
  </div>
)

Image = connect()(Image)

export default Image

Image.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  dispatch: PropTypes.func
}
