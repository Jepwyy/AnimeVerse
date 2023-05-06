import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SearchAnime from '../components/SearchAnime'
import AnimePlayer from '../components/AnimePlayer'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SearchAnime />} />
        <Route path='/anime/:id' element={<AnimePlayer />} />
      </Routes>
    </Router>
  )
}

export default App
