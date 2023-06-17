import React from 'react'
import { useAnimeInfo } from '../utils/useAnimeInfo'

const Info = () => {
  const { test, setTest } = useAnimeInfo((state) => state)
  // console.log(test)

  // const handleButton = () => {
  //   setTest(11)
  // }
  return (
    <div className='text-white bg-slate-500 h-screen'>
      <img
        className='relative w-full h-2/5'
        src='https://s4.anilist.co/file/anilistcdn/media/anime/banner/141249-ssUG44UgGOMK.jpg'
      />
      <img
        className='w-[11%] absolute '
        src='https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx141249-8tjavEDHmLoT.jpg'
      />
      <div>{test}</div>
      <input
        className='text-black'
        onChange={(e) => setTest(e.target.value)}
        type='text'
      />
      {/* <button onClick={handleButton} className='bg-white text-black'>
        Button
      </button> */}
    </div>
  )
}

export default Info
