import React, { useState, useEffect, useRef } from 'react'
import PlayerEpisodes from '../components/PlayerEpisodes'
import { useQuery } from 'react-query'
import { useParams, useNavigate } from 'react-router-dom'
import axios from '../api/api'
import { useAnimeInfo } from '../utils/useAnimeInfo'
import { formatTime } from '../utils/useFormats'
import { BiSolidBell } from 'react-icons/bi'
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
      <div className='flex lg:flex-row gap-3 flex-col'>
        <div className='lg:w-[20%] w-full bg-[#010101] rounded-md'>
          <PlayerEpisodes id={id} animeInfo={animeInfo} episodes={episodes} />
        </div>
        <div className='lg:w-[60%] w-full lg:order-none order-first rounded-md bg-[#010101]'>
          <div>
            <iframe
              src={data}
              title='Anime Episode'
              allowFullScreen
              className='bg-blue-500 w-full  aspect-video'
            />
          </div>
          <div className='flex justify-between items-center px-2 py-2'>
            <div>
              {animeInfo?.nextAiringEpisode ? (
                <h1 className='text-[#ccc]'>
                  <BiSolidBell className='inline' size={20} /> Episode{' '}
                  {animeInfo?.nextAiringEpisode?.episode} will air at{' '}
                  {formatTime(animeInfo?.nextAiringEpisode?.airingTime)}
                </h1>
              ) : (
                <h1></h1>
              )}
            </div>
            <div className='flex gap-2'>
              <button className='border border-[#07bf67] text-[#07bf67] hover:text-white hover:bg-[#07bf67] p-1 rounded-md text-sm font-medium uppercase '>
                Download
              </button>
              <button
                className='bg-[#07bf67] hover:bg-[#129055] text-white p-1 rounded-md text-sm font-medium uppercase'
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

        <div className='lg:w-[20%] w-full'>asd</div>
      </div>
    </div>
  )
}

export default Player
