import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from '../api/api'
const TopList = () => {
  const { data, isLoading, error } = useQuery(['topList'], () =>
    axios
      .get(
        `meta/anilist/advanced-search?sort=["TRENDING_DESC"]&page=1&perPage=10`
      )
      .then((res) => {
        const results = res.data.results
        return results
      })
  )
  console.log(data)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }
  return (
    <div className='w-[25%]'>
      <div className='flex justify-between'>
        <div className='text-[#dddddd] font-semibold lg:text-1xl text-base'>
          Trending Anime
        </div>
      </div>
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title.english}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TopList
