import React, { PropTypes } from 'react'

const Image = ({image, onClick}) => (
  <div>
    <button onClick={onClick}></button>
    <img
      src={image}
      style={{height: 250}} />
  </div>
)

Image.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Image
