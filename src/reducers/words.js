const words = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WORD':
      return [
        ...state, {
          id: action.id,
          word: action.word
        }
      ]

    case 'DELETE_WORD':
      return state.filter(word => word.id !== action.id)

    default:
      return state
  }
}

export default words
