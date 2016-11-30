import React from 'react'

import AddWord from './AddWord'
import WordsContainer from '../containers/WordsContainer'
import AddImage from './AddImage'
import ImagesContainer from '../containers/ImagesContainer'

const App = () => (
  <div className='app-container'>
    <AddWord />
    <WordsContainer />
    <AddImage />
    <ImagesContainer />
  </div>
)

export default App
