import React, { useState, useRef, useEffect } from 'react'
import { HiSearch } from 'react-icons/hi'
import { TbHexagonLetterS } from 'react-icons/tb'
import { IoEnterOutline } from 'react-icons/io5'

const SearchBar = () => {
  const [isActive, setIsActive] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isActive])

  return (
    <div className='w-[55%] relative'>
      {isActive ? (
        <div className=''>
          <div className='absulute w-full' onBlur={() => setIsActive(false)}>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <HiSearch className='w-5 h-5 text-gray-500' />
            </div>
            <input
              ref={inputRef}
              type='text'
              id='voice-search'
              className='bg-[#141414] text-white text-sm rounded-t-lg focus:ring-0 block w-full pl-10 p-2.5 outline-none'
              placeholder='Search anime active...'
            />
            <button
              type='button'
              className='absolute inset-y-0 right-0 flex items-center pr-3'
            >
              <IoEnterOutline className='w-4 h-4 text-gray-500 hover:text-gray-900' />
            </button>
            <div className='absolute z-20 left-0 right-0 bg-[#141414]  text-white text-sm rounded-b-lg py-1 px-2.5'>
              Anime
              <div className='flex'>
                <img
                  className='h-20'
                  src='https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-PEn1CTc93blC.jpg'
                />
                <div>Demon Slayer</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='relative w-full' onClick={() => setIsActive(true)}>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <HiSearch className='w-5 h-5 text-gray-500' />
          </div>
          <input
            type='text'
            id='voice-search'
            className='bg-[#141414] text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 outline-none'
            placeholder='Search anime...'
          />
          <button
            type='button'
            className='absolute inset-y-0 right-0 flex items-center pr-3'
          >
            <TbHexagonLetterS className='w-4 h-4 text-gray-500 hover:text-gray-900' />
          </button>
        </div>
      )}
    </div>
  )
}

export default SearchBar
