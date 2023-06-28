import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import axios from '../api/api'
import { MdLocalMovies, MdOutlineStarRate } from 'react-icons/md'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

const RecentEpisodes = () => {
  const [page, setPage] = useState(1)
  const [next, setNext] = useState(false)
  const [prev, setPrev] = useState(false)
  const [episodes, setEpisodes] = useState([])

  const { data, isError, isLoading } = useQuery(
    ['recentEp', page],
    async () => {
      const response = await axios.get(
        `meta/anilist/recent-episodes?page=${page}&perPage=14&provider=gogoanime`
      )
      return response.data
    }
  )

  useEffect(() => {
    if (data) {
      setEpisodes(data.results)
    }
  }, [data])

  return (
    <div className='md:w-[75%] w-full mb-20'>
      <div className='flex items-center justify-between my-2'>
        <div className='text-[#dddddd] font-semibold lg:text-3xl text-base'>
          Recently Updated
        </div>
        <div className='flex items-center gap-3'>
          <button
            disabled={page == 1 ? true : false}
            onClick={() => setPage(page - 1)}
            className='bg-[#03C988] hover:bg-[#03c987e1] text-gray-100 font-semibold py-1 px-4 rounded-md inline-flex items-center '
          >
            <GrFormPrevious />
          </button>
          <div className='text-[#dddddd]'>{page}</div>
          <button
            disabled={isLoading ? true : false}
            onClick={() => setPage(page + 1)}
            className='bg-[#03C988] hover:bg-[#03c987e1] text-gray-100 font-semibold py-1 px-4 rounded-md inline-flex items-center '
          >
            <GrFormNext />
          </button>
        </div>
      </div>

      <div className='grid md:grid-cols-7 grid-cols-3 gap-[.81rem]'>
        {episodes.map((anime) => (
          <div key={anime.episodeId} className='w-[100%]  rounded-md '>
            <img className=' aspect-[2/3]' src={anime.image} />
            <div className='bg-[#242424] flex items-center justify-between p-1  leading-none'>
              <div className='flex items-center text-[#fff] gap-[.10rem] md:text-[.8rem] text-[.7rem]'>
                <span className='flex items-center bg-[#03C988] py-[.15rem] px-[.25rem] rounded-l'>
                  <MdLocalMovies /> {anime.episodeNumber}
                </span>
                <span className='flex items-center bg-[#8f7003] py-[.15rem] px-[.25rem] rounded-r'>
                  <MdOutlineStarRate />{' '}
                  {anime.rating == null ? '--' : anime.rating}
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
        ))}
      </div>
    </div>
  )
}

export default RecentEpisodes
