import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SearchAnime from './components/SearchAnime'
import AnimePlayer from './components/AnimePlayer'
import AnimeList from './components/AnimeList'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SearchAnime />} />

        <Route path='/anime/gogoanime/info/:id' element={<AnimePlayer />} />
      </Routes>
    </Router>
  )
}

export default App
