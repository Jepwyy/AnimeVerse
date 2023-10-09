import React from 'react'
import { useQuery } from 'react-query'
import axios from '../api/api'
import { Link } from 'react-router-dom'
import { MdOutlineStarRate } from 'react-icons/md'
import { formatRate } from '../utils/useFormats'

const Release = () => {
  const summerQuery = useQuery(['summer'], async () => {
    const response = await axios.get(
      `meta/anilist/advanced-search?season=SUMMER&year=2023`
    )
    return response.data
  })

  const fallQuery = useQuery(['fall'], async () => {
    const response = await axios.get(
      `meta/anilist/advanced-search?season=FALL&year=2023`
    )
    return response.data
  })

  const springQuery = useQuery(['spring'], async () => {
    const response = await axios.get(
      `meta/anilist/advanced-search?season=SPRING&year=2023`
    )
    return response.data
  })

  const winterQuery = useQuery(['winter'], async () => {
    const response = await axios.get(
      `meta/anilist/advanced-search?season=WINTER&year=2023`
    )
    return response.data
  })

  console.log('Summer Data:', summerQuery?.data?.results)
  // console.log('Fall Data:', fallQuery.data)
  // console.log('Spring Data:', springQuery.data)
  // console.log('Winter Data:', winterQuery.data)

  return (
    <div className='mt-4'>
      <h2 className='text-[#dddddd] font-semibold lg:text-2xl text-lg mb-2'>
        Release
      </h2>
      <div className='flex lg:flex-row flex-col gap-2'>
        <div className='flex flex-col gap-3 lg:w-1/4 w-full'>
          <h2 className='text-[#dddddd] font-semibold lg:text-xl text-base'>
            Summer
          </h2>
          {summerQuery.isLoading
            ? 'Loading...'
            : summerQuery?.data.results.map((item) => (
                <Link
                  to={`/info/${item.id}`}
                  key={item.id}
                  className='flex flex-row gap-4 bg-[#242424] rounded'
                >
                  <img
                    className='h-[5.7rem] min-w-[4.5rem] max-w-[4.5rem] rounded-l'
                    src={item.image}
                  />
                  <div className='flex flex-col justify-center'>
                    <div className='font-normal  lg:text-sm text-xs uppercase line-clamp-1 text-[#ccc]'>
                      {item.title.english == null
                        ? item.title.userPreferred
                        : item.title.english}
                    </div>
                    <div className='flex items-center text-[#aaa] gap-1 md:text-[.8rem] text-[.7rem]'>
                      <span className='font-thin'>{item.type}</span>
                      <span>&bull;</span>
                      <span className='font-thin'>{item.episodes} Eps</span>
                      <span>&bull;</span>
                      <span className='flex items-center'>
                        <MdOutlineStarRate /> {formatRate(item.rating)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
        <div className='flex flex-col gap-3 lg:w-1/4 w-full'>
          <h2 className='text-[#dddddd] font-semibold lg:text-xl text-base'>
            Fall
          </h2>
          {fallQuery.isLoading
            ? 'Loading...'
            : fallQuery?.data.results.map((item) => (
                <Link
                  to={`/info/${item.id}`}
                  key={item.id}
                  className='flex flex-row gap-4 bg-[#242424] rounded'
                >
                  <img
                    className='h-[5.7rem] min-w-[4.5rem] max-w-[4.5rem] rounded-l'
                    src={item.image}
                  />
                  <div className='flex flex-col justify-center'>
                    <div className='font-normal  lg:text-sm text-xs uppercase line-clamp-1 text-[#ccc]'>
                      {item.title.english == null
                        ? item.title.userPreferred
                        : item.title.english}
                    </div>
                    <div className='flex items-center text-[#aaa] gap-1 md:text-[.8rem] text-[.7rem]'>
                      <span className='font-thin'>{item.type}</span>
                      <span>&bull;</span>
                      <span className='font-thin'>{item.episodes} Eps</span>
                      <span>&bull;</span>
                      <span className='flex items-center'>
                        <MdOutlineStarRate /> {formatRate(item.rating)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
        <div className='flex flex-col gap-3 lg:w-1/4 w-full'>
          <h2 className='text-[#dddddd] font-semibold lg:text-xl text-base'>
            Spring
          </h2>
          {springQuery.isLoading
            ? 'Loading...'
            : springQuery?.data.results.map((item) => (
                <Link
                  to={`/info/${item.id}`}
                  key={item.id}
                  className='flex flex-row gap-4 bg-[#242424] rounded'
                >
                  <img
                    className='h-[5.7rem] min-w-[4.5rem] max-w-[4.5rem] rounded-l'
                    src={item.image}
                  />
                  <div className='flex flex-col justify-center'>
                    <div className='font-normal  lg:text-sm text-xs uppercase line-clamp-1 text-[#ccc]'>
                      {item.title.english == null
                        ? item.title.userPreferred
                        : item.title.english}
                    </div>
                    <div className='flex items-center text-[#aaa] gap-1 md:text-[.8rem] text-[.7rem]'>
                      <span className='font-thin'>{item.type}</span>
                      <span>&bull;</span>
                      <span className='font-thin'>{item.episodes} Eps</span>
                      <span>&bull;</span>
                      <span className='flex items-center'>
                        <MdOutlineStarRate /> {formatRate(item.rating)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
        <div className='flex flex-col gap-3 lg:w-1/4 w-full'>
          <h2 className='text-[#dddddd] font-semibold lg:text-xl text-base'>
            Winter
          </h2>
          {winterQuery.isLoading
            ? 'Loading...'
            : winterQuery?.data.results.map((item) => (
                <Link
                  to={`/info/${item.id}`}
                  key={item.id}
                  className='flex flex-row gap-4 bg-[#242424] rounded'
                >
                  <img
                    className='h-[5.7rem] min-w-[4.5rem] max-w-[4.5rem] rounded-l'
                    src={item.image}
                  />
                  <div className='flex flex-col justify-center'>
                    <div className='font-normal  lg:text-sm text-xs uppercase line-clamp-1 text-[#ccc]'>
                      {item.title.english == null
                        ? item.title.userPreferred
                        : item.title.english}
                    </div>
                    <div className='flex items-center text-[#aaa] gap-1 md:text-[.8rem] text-[.7rem]'>
                      <span className='font-thin'>{item.type}</span>
                      <span>&bull;</span>
                      <span className='font-thin'>{item.episodes} Eps</span>
                      <span>&bull;</span>
                      <span className='flex items-center'>
                        <MdOutlineStarRate /> {formatRate(item.rating)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  )
}

export default Release
