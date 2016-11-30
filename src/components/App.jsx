import React from 'react'

import AddWord from './AddWord'
import WordsContainer from '../containers/WordsContainer'

const App = () => (
  <div className='app-container'>
    <AddWord />
    <WordsContainer />
  </div>
)

export default App
