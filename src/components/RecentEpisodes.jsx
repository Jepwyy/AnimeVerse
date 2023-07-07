import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import axios from '../api/api'
import {
  MdLocalMovies,
  MdOutlineStarRate,
  MdArrowBackIosNew,
  MdArrowForwardIos,
} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { formatRate } from '../utils/useFormats'
const RecentEpisodes = () => {
  const [page, setPage] = useState(1)
  const [next, setNext] = useState(false)
  const [prev, setPrev] = useState(false)

  const { data, isError, isLoading } = useQuery(
    ['recentEp', page],
    async () => {
      const response = await axios.get(
        `meta/anilist/recent-episodes?page=${page}&perPage=14&provider=gogoanime`
      )

      return response.data
    }
  )

  return (
    <div className=''>
      <div className='flex items-center justify-between my-2'>
        <div className='text-[#dddddd] font-semibold lg:text-2xl text-base'>
          Recently Updated
        </div>
        <div className='flex items-center gap-1'>
          <button
            disabled={page == 1 ? true : false}
            onClick={() => setPage(page - 1)}
            className='text-[#dddddd] bg-[#202020] hover:bg-[#2a2a2a] rounded p-1 disabled:cursor-not-allowed '
          >
            <MdArrowBackIosNew size={20} />
          </button>
          <div className='text-[#dddddd] font-semibold py-[.10rem] px-2 bg-[#202020] hover:bg-[#2a2a2a] rounded '>
            {page}
          </div>
          <button
            disabled={isLoading ? true : false}
            onClick={() => setPage(page + 1)}
            className=' text-[#dddddd] bg-[#202020] hover:bg-[#2a2a2a] rounded p-1 disabled:cursor-not-allowe'
          >
            <MdArrowForwardIos size={20} />
          </button>
        </div>
      </div>

      <div
        className={`grid lg:grid-cols-7 grid-cols-3 gap-[.81rem] ${
          isLoading ? 'brightness-50' : ''
        } `}
      >
        {data?.results?.map((anime) => (
          <Link key={anime.episodeId} to={`/info/${anime.id}`}>
            <div className='w-[100%]  rounded-md '>
              <img className=' aspect-[2/3]' src={anime.image} />
              <div className='bg-[#242424] flex items-center justify-between p-1  leading-none'>
                <div className='flex items-center text-[#fff] gap-[.10rem] md:text-[.8rem] text-[.7rem]'>
                  <span className='flex items-center bg-[#03C988] py-[.15rem] px-[.25rem] rounded-l'>
                    <MdLocalMovies /> {anime.episodeNumber}
                  </span>
                  <span className='flex items-center bg-[#8f7003] py-[.15rem] px-[.25rem] rounded-r'>
                    <MdOutlineStarRate />
                    {anime.rating == null ? '--' : formatRate(anime.rating)}
                  </span>
                </div>
                <div className='text-[#aaaaaa] md:text-[.9rem] text-[.7rem] font-medium'>
                  {anime.type}
                </div>
              </div>
              <div className='md:text-[1rem] text-[.9rem] font-normal leading-none text-[#aaaaaa]'>
                <p className='line-clamp-2'>
                  {anime.title.english == null
                    ? anime.title.userPreferred
                    : anime.title.english}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RecentEpisodes
