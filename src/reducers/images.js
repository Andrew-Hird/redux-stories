const images = (state = [], action) => {
  switch (action.type) {
    case 'ADD_IMAGE':
      return [
        ...state, {
          id: action.id,
          image: action.image
        }
      ]

    case 'DELETE_IMAGE':
      return state.filter(image => image.id !== action.id)

    default:
      return state
  }
}

export default images
