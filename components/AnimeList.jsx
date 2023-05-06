import React from 'react'
import { Link } from 'react-router-dom'

const AnimeList = ({ animeList }) => {
  return (
    <div>
      <ul>
        {animeList.map((anime) => (
          <li key={anime.id}>
            <Link to={`/anime/${anime.id}`}>
              <button>{anime.title}</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AnimeList
