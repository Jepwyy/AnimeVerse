import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SearchAnime from './components/SearchAnime'
import AnimePlayer from './components/AnimePlayer'
import AnimeList from './components/AnimeList'

//layout
import Layout from './layout/Layout'

//pages
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
