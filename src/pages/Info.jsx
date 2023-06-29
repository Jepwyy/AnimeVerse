import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from '../api/api'
import { useAnimeInfo } from '../utils/useAnimeInfo'

const Info = () => {
  const { id } = useParams()
  const { animeInfo, fetchAnimeInfo } = useAnimeInfo((state) => state)

  // useEffect(() => {
  //   fetchAnimeInfo(id)
  // }, [id])

  const { data, isLoading, isError } = useQuery(['info', id], () =>
    fetchAnimeInfo(id)
  )
  console.log(data)

  const ep =
    animeInfo?.episodes && animeInfo.episodes.length > 0
      ? animeInfo.episodes[animeInfo.episodes.length - 1]
      : null

  if (isLoading) {
    return <p>Loading...</p>
  }
  return (
    <div className='text-white bg-slate-500 h-screen'>
      <img
        className='relative w-full h-[20%] lg:h-[23%] brightness-50'
        src={animeInfo?.cover}
      />
      <div className=' '>
        <img className='w-[10rem]' src={animeInfo?.image} />
        <h1 className=''>{animeInfo?.title?.english}</h1>
      </div>
      <div>
        <Link to={`/play/${id}/${ep?.id}`}>
          <button className='bg-black'>Watch</button>
        </Link>
      </div>
    </div>
  )
}

export default Info

//#07bf67
//#1D1E1F
//#2A2B2C
