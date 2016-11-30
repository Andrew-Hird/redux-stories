import React, { PropTypes } from 'react'

const Image = ({image}) => (
  <img
    src={image}
    style={{height: 250}} />
)

Image.propTypes = {
  image: PropTypes.string.isRequired
}

export default Image
