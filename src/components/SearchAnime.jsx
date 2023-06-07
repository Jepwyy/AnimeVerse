import React, { useState } from 'react'
import axios from 'axios'
import AnimeList from './AnimeList'
import { Link } from 'react-router-dom'

const SearchAnime = () => {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [animeList, setAnimeList] = useState([])
  const [suggestions, setSuggestions] = useState([])

  const handleSearch = async (event) => {
    event.preventDefault()
    const url = `https://api.consumet.org/anime/gogoanime/${query}?page=${page}`
    const response = await axios.get(url)
    setAnimeList(response.data.results)
  }

  const handleInputChange = async (event) => {
    const inputValue = event.target.value
    setQuery(inputValue)

    if (inputValue.trim() === '') {
      setSuggestions([])
      return
    }

    const url = `https://api.consumet.org/anime/gogoanime/${inputValue}?page=${page}`
    const response = await axios.get(url)
    setSuggestions(response.data.results)
  }

  console.log(animeList)

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          className='text-black bg-slate-50 border-black border-2'
          placeholder='test'
          value={query}
          onChange={handleInputChange}
        />
        <button type='submit'>Search</button>
      </form>
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((anime) => (
            <li key={anime.id}>
              <Link to={`/anime/gogoanime/info/${anime.id}`}>
                <button>{anime.title}</button>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <AnimeList animeList={animeList} />
    </div>
  )
}

export default SearchAnime
