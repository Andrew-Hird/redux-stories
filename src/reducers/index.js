import { combineReducers } from 'redux'

import filter from './filter'
import words from './words'
import images from './images'

export default combineReducers({
  filter,
  words,
  images
})
