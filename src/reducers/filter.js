const filter = (state = [], action) => {
  switch (action.type) {

    case 'FILTER_WORDS':
      return action.input

    default:
      return state
  }
}

export default filter
