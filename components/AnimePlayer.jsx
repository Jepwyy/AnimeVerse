import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const AnimePlayer = () => {
  const { id } = useParams()
  const [animeDetails, setAnimeDetails] = useState({})
  const [selectedEpisode, setSelectedEpisode] = useState('')

  const fetchAnimeDetails = async () => {
    const url = `https://api.consumet.org/anime/gogoanime/info/${id}`
    const response = await axios.get(url)
    setAnimeDetails(response.data)
  }

  useEffect(() => {
    fetchAnimeDetails()
  }, [id])

  const handlePlayEpisode = async (episodeId, serverName) => {
    const episodeUrl = `https://api.amvstr.ml/api/v2/stream/${episodeId}`

    try {
      const videoResponse = await axios.get(episodeUrl, {
        params: { server: serverName },
      })
      console.log(videoResponse?.data?.data?.nspl?.main)
      setSelectedEpisode(videoResponse?.data?.data?.nspl?.main)
    } catch (error) {
      console.error('Error fetching video:', error)
    }
  }

  return (
    <div>
      <h1>{animeDetails.title}</h1>
      {selectedEpisode && (
        <div>
          <h2>Selected Episode:</h2>
          <iframe
            src={selectedEpisode}
            title='Anime Episode'
            allowFullScreen
            width={900}
            height={500}
          />
        </div>
      )}
      <ul>
        {animeDetails.episodes &&
          animeDetails.episodes.map((episode) => (
            <li key={episode.id}>
              <button
                className='text-white'
                onClick={() => handlePlayEpisode(episode.id, 'gogocdn')}
              >
                {episode.number}
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default AnimePlayer
