import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import PlayerEpisodes from '../components/PlayerEpisodes'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import axios from '../api/api'
import { useAnimeInfo } from '../utils/useAnimeInfo'

const Player = () => {
  const { animeInfo, fetchAnimeInfo } = useAnimeInfo((state) => state)
  const { ep } = useParams()
  const { id } = useParams()

  useEffect(() => {
    fetchAnimeInfo(id)
  }, [id])

  const {
    data: sources,
    isError,
    isLoading,
  } = useQuery(['recentEp', ep], async () => {
    const response = await axios.get(`meta/anilist/watch/${ep}`)
    return response.data.sources
  })

  const [selectedQuality, setSelectedQuality] = useState('')

  useEffect(() => {
    if (sources && sources.length > 0) {
      setSelectedQuality(sources[0].quality)
    }
  }, [sources])

  const handleQualityChange = (event) => {
    setSelectedQuality(event.target.value)
  }

  return (
    <div>
      {sources && sources.length > 0 ? (
        <>
          <ReactPlayer
            url={
              sources.find((source) => source.quality === selectedQuality)?.url
            }
            controls
          />
          <div>
            <label className='text-white' htmlFor='qualitySelect'>
              Quality:
            </label>
            <select
              id='qualitySelect'
              value={selectedQuality}
              onChange={handleQualityChange}
            >
              {sources.map((source) => (
                <option key={source.quality} value={source.quality}>
                  {source.quality}
                </option>
              ))}
            </select>
          </div>
        </>
      ) : (
        <p>Loading sources...</p>
      )}
      <PlayerEpisodes id={id} animeInfo={animeInfo} />
    </div>
  )
}

export default Player
