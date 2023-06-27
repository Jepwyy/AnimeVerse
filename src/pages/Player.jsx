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
    <div className='lg:px-14 px-5 pt-10'>
      <div className='flex lg:flex-row flex-col'>
        {isLoading ? (
          <div className='bg-blue-500 lg:w-1/2  aspect-video'>Loading.....</div>
        ) : (
          <div className='lg:w-1/2'>
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
        <div className='lg:w-1/2 pl-3 lg:pt-0 pt-3'>
          <PlayerEpisodes id={id} animeInfo={animeInfo} />
        </div>
      </div>
    </div>
  )
}

export default Player
