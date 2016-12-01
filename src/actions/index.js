let nextWordId = 5
let nextImageId = 0

export const addWord = (word) => {
  return {
    type: 'ADD_WORD',
    id: nextWordId++,
    word
  }
}

export const deleteWord = (id) => {
  return {
    type: 'DELETE_WORD',
    id: id
  }
}

export const filterWords = (input) => {
  return {
    type: 'FILTER_WORDS',
    input: input
  }
}

export const addImage = (image) => {
  return {
    type: 'ADD_IMAGE',
    id: nextImageId++,
    image
  }
}

export const deleteImage = (id) => {
  return {
    type: 'DELETE_IMAGE',
    id: id
  }
}
