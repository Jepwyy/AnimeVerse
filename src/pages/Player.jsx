import React, { useState, useEffect, useRef } from 'react'
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

  const { data, isError, isLoading } = useQuery(['recentEp', ep], async () => {
    const response = await axios.get(`stream/${ep}`)
    return response.data.nspl.main
  })
  console.log(data)

  return (
    <div>
      <div>
        {isLoading ? (
          <>Loading.....</>
        ) : (
          <div>
            <iframe
              src={String(data)}
              title='Anime Episode'
              allowFullScreen
              className='w-[90%] h-[12rem] md:h-[31rem]'
            />
          </div>
        )}
      </div>

      <PlayerEpisodes id={id} animeInfo={animeInfo} />
    </div>
  )
}

export default Player
