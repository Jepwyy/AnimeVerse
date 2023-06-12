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
    <div className='ml-6 w-[60%] relative'>
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
              className='bg-[#141414] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search anime active...'
            />
            <button
              type='button'
              className='absolute inset-y-0 right-0 flex items-center pr-3'
            >
              <IoEnterOutline className='w-4 h-4 text-gray-500 hover:text-gray-900' />
            </button>
            <div className='absolute bottom-[-30px] left-0 right-0 bg-gray-200 text-gray-500 text-sm py-1 px-2.5'>
              Suggestions: Anime 1, Anime 2, Anime 3
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
            className='bg-[#141414] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
