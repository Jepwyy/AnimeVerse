import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from '../api/api'
import { useAnimeInfo } from '../utils/useAnimeInfo'

const Info = () => {
  const { id } = useParams()

  const {
    data: info,
    isError,
    isLoading,
  } = useQuery(['info', id], () =>
    axios
      .get(`meta/anilist/info/${id}?provider=gogoanime`)
      .then((res) => res.data)
  )
  const ep = info?.episodes[info?.episodes.length - 1]

  return (
    <div className='text-white bg-slate-500 h-screen'>
      <img
        className='relative w-full h-[20%] lg:h-[23%] brightness-50'
        src={info?.cover}
      />
      <div className=' '>
        <img className='w-[10rem]' src={info?.image} />
        <h1 className=''>{info?.title.english}</h1>
      </div>
      <div>
        <Link to={`/play/${ep?.id}`}>
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
