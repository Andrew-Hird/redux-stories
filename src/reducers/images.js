const images = (state = [
  {
    id: 0,
    image: 'http://dreamatico.com/data_images/kitten/kitten-3.jpg',
    description: null
  }, {
    id: 1,
    image: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg',
    description: null
  }
], action) => {
  switch (action.type) {

    case 'ADD_IMAGE':
      return [
        ...state, {
          id: action.id,
          image: action.image
        }
      ]

    case 'ADD_IMAGE_DESCRIPTION':
      return state.map((image, index) => {
        if (image.id === action.id) {
          return Object.assign({}, image, {
            description: action.description
          })
        }
        return image
      })

    case 'DELETE_IMAGE':
      return state.filter(image => image.id !== action.id)

    default:
      return state
  }
}

export default images
