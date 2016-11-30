const images = (state = [
  {
    id: 0,
    image: 'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx'
  }, {
    id: 1,
    image: 'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/dog-medium-landing-hero.ashx'
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

    default:
      return state
  }
}

export default images
