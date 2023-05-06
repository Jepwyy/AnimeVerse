import React, { useState } from 'react'
import axios from 'axios'
import AnimeList from './AnimeList'

const SearchAnime = () => {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [animeList, setAnimeList] = useState([])

  const handleSearch = async (event) => {
    event.preventDefault()
    const url = `https://api.consumet.org/anime/gogoanime/${query}?page=${page}`
    const response = await axios.get(url)
    setAnimeList(response.data)
  }
  console.log(animeList)

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
      {/* <AnimeList animeList={animeList} /> */}
    </div>
  )
}

export default SearchAnime
