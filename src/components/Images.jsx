import React, { PropTypes } from 'react'

import Image from './Image'

const Images = ({ images, onClick }) => (
  <div>
    {images.map(image =>
      <Image
        key={image.id}
        onClick={() => onClick(image.id)}
        {...image}
        />
    )}
  </div>
)

Images.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired
}

export default Images
