import React, { useState, useEffect, useRef } from 'react'
import PlayerEpisodes from '../components/PlayerEpisodes'
import { useQuery } from 'react-query'
import { useParams, useNavigate } from 'react-router-dom'
import axios from '../api/api'
import { useAnimeInfo } from '../utils/useAnimeInfo'

const Player = () => {
  const { animeInfo, fetchAnimeInfo } = useAnimeInfo((state) => state)
  const navigate = useNavigate()
  const { ep } = useParams()
  const { id } = useParams()

  useEffect(() => {
    fetchAnimeInfo(id)
  }, [id])

  const { data, isError, isLoading } = useQuery(['recentEp', ep], async () => {
    const response = await axios.get(`stream/${ep}`)
    return response.data.nspl.main
  })

  const episodes =
    animeInfo?.episodes && animeInfo.episodes.length > 0
      ? [...animeInfo.episodes].reverse()
      : null

  const playNextEpisode = () => {
    const currentIndex = episodes.findIndex((episode) => episode.id === ep)
    const nextEpisodeId = episodes[currentIndex + 1]?.id
    if (nextEpisodeId) {
      navigate(`/play/${id}/${nextEpisodeId}`)
    }
  }

  return (
    <div className='lg:px-14 px-5 pt-10'>
      <div className='flex lg:flex-row gap-5 flex-col'>
        <div className='w-[20%]'>
          <PlayerEpisodes id={id} animeInfo={animeInfo} episodes={episodes} />
        </div>
        <div className='w-[60%] lg:order-none order-first rounded-md'>
          <div>
            <iframe
              src={data}
              title='Anime Episode'
              allowFullScreen
              className='bg-blue-500 w-full  aspect-video'
            />
          </div>
          <div className='flex justify-between'>
            <h1></h1>
            <div>
              <button
                className='bg-white'
                onClick={playNextEpisode}
                disabled={
                  !episodes || episodes.length === 0 || episodes.length === 1
                }
              >
                Play Next Episode
              </button>
            </div>
          </div>
        </div>

        <div className='w-[20%]'>asd</div>
        {/* {isLoading ? (
          <div className='bg-blue-500 lg:w-1/2  aspect-video'>Loading.....</div>
        ) : (
          <div className='lg:w-1/2'>
            <iframe
              src={data}
              title='Anime Episode'
              allowFullScreen
              className='bg-blue-500 w-full  aspect-video'

              // className='w-[90%] h-[12rem] md:h-[31rem]'
            />
            <button
              className='bg-white'
              onClick={playNextEpisode}
              disabled={
                !episodes || episodes.length === 0 || episodes.length === 1
              }
            >
              Play Next Episode
            </button>
          </div>
        )} */}
        {/* <div className='lg:w-1/2 pl-3 lg:pt-0 pt-3'>
          <PlayerEpisodes id={id} animeInfo={animeInfo} episodes={episodes} />
        </div> */}
      </div>
    </div>
  )
}

export default Player
