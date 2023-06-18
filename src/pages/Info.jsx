import React from 'react'
import { useAnimeInfo } from '../utils/useAnimeInfo'

const Info = () => {
  const { test, setTest } = useAnimeInfo((state) => state)
  // console.log(test)

  // const handleButton = () => {
  //   setTest(11)
  // }
  return (
    <div className='text-white bg-slate-500 h-screen flex  justify-center'>
      <img
        className='relative w-full h-[100vh] brightness-50'
        src='https://s4.anilist.co/file/anilistcdn/media/anime/banner/141249-ssUG44UgGOMK.jpg'
      />
      <div className='absolute '>kasjdhaksjdhaksd</div>
      {/* <div className='border border-black px-[10%] top-[28%] absolute top flex items-center'>
        <img
          className='w-[30%]'
          src='https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx141249-8tjavEDHmLoT.jpg'
        />
        <h1 className=''>Title</h1>
      </div> */}
    </div>
  )
}

export default Info
