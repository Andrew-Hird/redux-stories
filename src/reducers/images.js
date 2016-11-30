const images = (state = [], action) => {
  switch (action.type) {
    case 'ADD_IMAGE':
      return [
        ...state,
        {
          id: action.id,
          image: action.image
        }
      ]

    default:
      return state
  }
}

export default images
