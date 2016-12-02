import React from 'react'

import AddWord from './AddWord'
import FilterWords from './FilterWords'
import WordsContainer from '../containers/WordsContainer'

import AddImage from './AddImage'
import ImagesContainer from '../containers/ImagesContainer'

const App = () => (
  <div className='app-container'>
    <AddWord />
    <FilterWords />
    <WordsContainer />
    <hr/>
    <AddImage />
    <hr/>
    <ImagesContainer />
  </div>
)

export default App
