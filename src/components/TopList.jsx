import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from '../api/api'
import { MdLocalMovies, MdOutlineStarRate } from 'react-icons/md'
import { formatRate } from '../utils/useFormats'
import { Link } from 'react-router-dom'

const TopList = () => {
  const { data, isLoading, error } = useQuery(['topList'], async () => {
    try {
      const response = await axios.get(
        'meta/anilist/trending?page=1&perPage=30'
      )
      const results = response.data.results.filter(
        (obj) => obj.status == 'Ongoing'
      )

      const filteredResult = results.slice(0, 9)
      return filteredResult
    } catch (error) {
      // Handle the error here
      console.error('An error occurred:', error)
      throw error
    }
  })

  if (isLoading) {
    return (
      <div className=''>
        <div className='h-[5rem] animate-pulse w-full bg-[#191919] rounded-md my-2'></div>
        <div className='h-[5rem] animate-pulse w-full bg-[#191919] rounded-md my-2'></div>
        <div className='h-[5rem] animate-pulse w-full bg-[#191919] rounded-md my-2'></div>
        <div className='h-[5rem] animate-pulse w-full bg-[#191919] rounded-md my-2'></div>
        <div className='h-[5rem] animate-pulse w-full bg-[#191919] rounded-md my-2'></div>
        <div className='h-[5rem] animate-pulse w-full bg-[#191919] rounded-md my-2'></div>
        <div className='h-[5rem] animate-pulse w-full bg-[#191919] rounded-md my-2'></div>
        <div className='h-[5rem] animate-pulse w-full bg-[#191919] rounded-md my-2'></div>
        <div className='h-[5rem] animate-pulse w-full bg-[#191919] rounded-md my-2'></div>
      </div>
    )
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }
  return (
    <div className=''>
      <div className='flex justify-between my-2'>
        <div className='text-[#dddddd] font-semibold lg:text-2xl text-base'>
          Top Airing Anime
        </div>
      </div>
      <div className='border-t-2 border-[#07bf67]'>
        {data.map((item, index) => (
          <Link key={item.id} to={`/info/${item.id}`}>
            <div
              className={`relative     rounded-md my-2 ${
                index + 1 === 1
                  ? 'border-r border-[#07bf67]'
                  : index + 1 === 2
                  ? 'border-r border-[#bd4c60]'
                  : index + 1 === 3
                  ? 'border-r border-[#8f7003]'
                  : ''
              }`}
            >
              <img
                className='absolute -z-10 w-full h-full object-cover rounded-md brightness-50 blur-[1px]'
                src={
                  item.cover == null
                    ? 'https://img.freepik.com/free-photo/deep-blue-plain-concrete-textured-background_53876-103890.jpg'
                    : item.cover
                }
                alt='Background'
              />
              <div className=' flex flex-row gap-3.5 px-3.5'>
                <div
                  className={`flex items-center w-[2.1rem] font-extrabold text-6xl ${
                    index + 1 === 1
                      ? 'text-[#07bf67]'
                      : index + 1 === 2
                      ? 'text-[#bd4c60]'
                      : index + 1 === 3
                      ? 'text-[#8f7003]'
                      : 'text-[#aaaaaa]'
                  }`}
                >
                  {index + 1}
                </div>
                <div className=''>
                  <img
                    className='h-[5rem] min-w-[4rem] max-w-[4rem] '
                    src={item.image}
                  />
                </div>
                <div className='flex flex-col justify-center font-normal  lg:text-base text-xs uppercase w-[70%] gap-1'>
                  <div className='text-[#fff] line-clamp-2'>
                    {item.title.english == null
                      ? item.title.userPreferred
                      : item.title.english}
                  </div>
                  <div className='flex items-center text-[#aaa] gap-1 md:text-[.8rem] text-[.7rem]'>
                    <div className='flex items-center  gap-[.10rem] text-[#fff]'>
                      <span className='flex items-center bg-[#03C988] py-[.01em] px-[.25rem] rounded-l'>
                        <MdLocalMovies /> {item.totalEpisodes}
                      </span>
                      <span className='flex items-center bg-[#8f7003] py-[.01em] px-[.25rem] rounded-r'>
                        <MdOutlineStarRate />
                        {formatRate(item.rating)}
                      </span>
                    </div>
                    <span>&bull;</span>
                    <span className='font-thin'>{item.type}</span>
                    <span>&bull;</span>
                    <span className='font-thin'>{item.releaseDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TopList
