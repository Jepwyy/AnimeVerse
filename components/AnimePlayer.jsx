import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'

const AnimePlayer = ({ match }) => {
  const id = match.params.id
  const [animeDetails, setAnimeDetails] = useState({})
  const [selectedEpisode, setSelectedEpisode] = useState('')

  const fetchAnimeDetails = async () => {
    const url = `https://api.consumet.org/anime/gogoanime/${id}`
    const response = await axios.get(url)
    setAnimeDetails(response.data)
  }

  useEffect(() => {
    fetchAnimeDetails()
  }, [])

  return (
    <div>
      <h1>{animeDetails.title}</h1>
      <ReactPlayer url={selectedEpisode} controls />
      <ul>
        {animeDetails.episodes.map((episode) => (
          <li key={episode.id}>
            <button onClick={() => setSelectedEpisode(episode.video)}>
              {episode.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AnimePlayer
