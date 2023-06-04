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
    setAnimeList(response.data.results)
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
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
      <AnimeList animeList={animeList} />
      <div>
        <iframe
          src={
            'https://player.nscdn.ml/player.html?p=JnRpdGxlPWtpbWV0c3Utbm8teWFpYmEtZXBpc29kZS0xMSAmZmlsZT1odHRwczovL3RhLTAxMS5hYmVjZG4uY29tLzFhYjVkNDUyNzNhOTE4M2JlYmI1OGViNzRkNTcyMmQ4ZWE2Mzg0ZjM1MGNhZjAwOGYwOGNmMDE4ZjFmMDU2NmQwY2I4MmEyYTc5OTgzMGQxYWY5N2NkM2Y0YjZhOWE4MWVmM2FlZDJmYjc4MzI5MmIxYWJjZjFiODU2MGExZDFhYTMwODAwOGI4ODQyMDI5ODUyMmE5Zjc2MWU1YWExMDI0ZmJlNzRlNWFhODUzY2ZjOTMzY2QxMjE5MzI3ZDEyMzJlOTE4NDdhMTg1MDIxYjE4NGMwMjdmOTdhZTczMmIzNzA4ZWU2YmViODBiYTVkYjY2MjhjZWQ0M2YxMTk2ZmUvOGJjN2U1NmJmNTE4YWQ4ZTFhNDJlODJjMGNlNTFlMWQvZXAuMTEuMTY3NzYyNDgzMS5tM3U4JnRodW1ibmFpbHM9aHR0cHM6Ly9jYWNoZS5hbmljZG4uc3RyZWFtL2ltYWdlcy80ODdhMDA1NTBkYjVhNmQ3NWYyOTM2YzE0MjljZjIzMi8xMS52dHQ='
          }
          title='Anime Episode'
          allowFullScreen
          width={900}
          height={500}
        />
      </div>
    </div>
  )
}

export default SearchAnime
