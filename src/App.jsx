import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import SearchAnime from './components/SearchAnime'
import AnimePlayer from './components/AnimePlayer'
import AnimeList from './components/AnimeList'

//layout
import Layout from './layout/Layout'

//pages
import Home from './pages/Home'
import Info from './pages/Info'
import Player from './pages/Player'
import Filter from './pages/Filter'
import Result from './pages/Result'

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: 'always',
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/info/:id' element={<Info />} />
            <Route path='/play/:id/:ep' element={<Player />} />
            <Route path='/result' element={<Result />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
