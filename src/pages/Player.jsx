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
    <div className='px-14 pt-10'>
      <div className='flex flex-row'>
        {isLoading ? (
          <div className='bg-blue-500 w-1/2  aspect-video'>Loading.....</div>
        ) : (
          <div className='w-1/2'>
            <iframe
              src={data}
              title='Anime Episode'
              allowFullScreen
              width=''
              height=''
              className='bg-blue-500 w-full  aspect-video'

              // className='w-[90%] h-[12rem] md:h-[31rem]'
            />
          </div>
        )}
        <div className='w-1/2 pl-3'>
          <PlayerEpisodes id={id} animeInfo={animeInfo} />
        </div>
      </div>
    </div>
  )
}

export default Player
