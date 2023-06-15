import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import axios from '../api/api'
import { MdLocalMovies, MdOutlineStarRate } from 'react-icons/md'

const RecentEpisodes = () => {
  const [page, setPage] = useState(1)
  const [next, setNext] = useState(false)
  const [prev, setPrev] = useState(false)
  const [episodes, setEpisodes] = useState([])

  const { data, isError, isLoading } = useQuery(
    ['recentEp', page],
    async () => {
      const response = await axios.get(
        `meta/anilist/recent-episodes?page=${page}&perPage=20&provider=gogoanime`
      )
      return response.data
    }
  )
  console.log(page)

  useEffect(() => {
    if (data) {
      setEpisodes(data.results)
    }
  }, [data])

  return (
    <div className='w-[75%]'>
      <div className='flex items-center justify-between'>
        <div className='text-white'>Recent Episodes</div>
        <div className='flex items-center gap-3'>
          <button
            disabled={page == 1 ? true : false}
            onClick={() => setPage(page - 1)}
            className='bg-[#03C988] hover:bg-[#03c987e1] text-gray-100 font-semibold py-1 px-4 rounded-md inline-flex items-center '
          >
            prev
          </button>
          <button
            disabled={next}
            onClick={() => setPage(page + 1)}
            className='bg-[#03C988] hover:bg-[#03c987e1] text-gray-100 font-semibold py-1 px-4 rounded-md inline-flex items-center '
          >
            next
          </button>
        </div>
      </div>

      <div className='flex flex-wrap gap-3'>
        {episodes.map((anime) => (
          <div key={anime.id} className='bg-[#242424] w-[11rem] rounded-md'>
            <img className='h-[16rem]' src={anime.image} />
            <div className='flex items-center justify-between p-1  leading-none'>
              <div className='flex items-center text-[#fff] gap-[.10rem] text-[.8rem]'>
                <span className='flex items-center bg-[#03C988] py-[.15rem] px-[.25rem] rounded-l'>
                  <MdLocalMovies /> 12
                </span>
                <span className='flex items-center bg-[#8f7003] py-[.15rem] px-[.25rem] rounded-r'>
                  <MdOutlineStarRate /> 12
                </span>
              </div>
              <div className='text-[#aaaaaa] text-[.9rem] font-medium'>TV</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentEpisodes
