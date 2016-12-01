const words = (state = [
  {
    id: 0,
    word: 'cat'
  }, {
    id: 1,
    word: 'dog'
  }, {
    id: 2,
    word: 'frog'
  }, {
    id: 3,
    word: 'donut'
  }, {
    id: 4,
    word: 'toad'
  }
], action) => {
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
