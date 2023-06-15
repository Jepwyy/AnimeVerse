import React, { useState, useRef, useEffect } from 'react'
import { useQuery } from 'react-query'
import axios from '../api/api'

//icons
import { HiSearch } from 'react-icons/hi'
import { TbHexagonLetterS } from 'react-icons/tb'
import { IoEnterOutline } from 'react-icons/io5'
import { BsFillPlayFill, BsFillStarFill } from 'react-icons/bs'

const SearchBar = () => {
  const [isActive, setIsActive] = useState(false)
  const inputRef = useRef(null)
  const [query, setQuery] = useState('')
  const [result, setResult] = useState([])

  const handleSuggest = async (e) => {
    setQuery(e.target.value)
  }

  const { data, isLoading, isError } = useQuery(
    ['search-suggest', query],
    async () => {
      const response = await axios.get(
        `meta/anilist/advanced-search?query=${query}`
      )
      return response.data.results
    }
  )

  useEffect(() => {
    if (data) {
      const filter = data.slice(0, 5)
      setResult(filter)
    }
  }, [data])

  const handleBlur = () => {
    setIsActive(false)
    setQuery('')
  }

  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isActive])

  return (
    <div className='w-[55%] relative '>
      {isActive ? (
        <div className=''>
          <div className='w-full ' onBlur={handleBlur}>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <HiSearch className='w-5 h-5 text-gray-500' />
            </div>
            <input
              ref={inputRef}
              onChange={handleSuggest}
              autoComplete='off'
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
            {/* search-suggest */}
            <div className='absolute left-0 right-0 bg-[#141414] text-sm rounded-b-lg py-1 '>
              <div className='text-[#aaaaaa]  ml-2.5 mb-1.5'>
                <span className='border-b border-[#aaaaaa]'>Anime</span>
              </div>
              <div className=''>
                {query == '' ? (
                  <></>
                ) : (
                  result.map((anime) => (
                    <div key={anime.id} className='flex px-2.5 py-1 '>
                      <img className='h-20' src={anime.image} />
                      <div className='text-[#aaaaaa] flex flex-col py-1 pl-2'>
                        <div className=' text-lg font-normal'>
                          {anime.title.english}
                        </div>
                        <div className='flex items-center gap-2 text-[#515151]'>
                          <span className='flex items-center '>
                            <BsFillPlayFill size={18} /> {anime.totalEpisodes}
                          </span>
                          <span>&bull;</span>
                          <span className='flex items-center gap-1'>
                            <BsFillStarFill /> {anime.rating}
                          </span>
                          <span>&bull;</span>
                          <span className='font-thin'>{anime.type}</span>
                          <span>&bull;</span>
                          <span className='font-thin'>{anime.releaseDate}</span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
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
