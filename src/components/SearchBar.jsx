import React, { useState, useRef, useEffect } from 'react'
import { useQuery } from 'react-query'
import axios from '../api/api'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
//icons
import { HiSearch } from 'react-icons/hi'
import { TbHexagonLetterS } from 'react-icons/tb'
import { IoEnterOutline } from 'react-icons/io5'
import { BsFillPlayFill, BsFillStarFill } from 'react-icons/bs'
import { useTopbar } from '../utils/useTopbar'

const SearchBar = ({ isActive, setIsActive }) => {
  const { setAdvanceSearch } = useTopbar((state) => state)
  const inputRef = useRef(null)
  const [query, setQuery] = useState('')
  const [result, setResult] = useState([])
  const componentRef = useRef(null)
  const navigate = useNavigate()

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

  const handleClose = () => {
    setIsActive(false)
    setQuery('')
  }

  const handleSubmit = () => {
    navigate(`/result`)
    setAdvanceSearch(query)
    setIsActive(false)
    setQuery('')
  }

  useEffect(() => {
    if (data) {
      const filter = data.slice(0, 5)
      setResult(filter)
    }
  }, [data])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setIsActive(false)
        setQuery('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isActive])

  return (
    <div className='lg:w-[40%] w-[90%] relative '>
      {isActive ? (
        <div ref={componentRef} className=''>
          <div className='w-full '>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <HiSearch className='w-5 h-5 text-gray-500' />
            </div>
            <form onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                onChange={handleSuggest}
                autoComplete='off'
                type='text'
                id='ssearch'
                className='bg-[#141414] text-white text-sm rounded-t-lg focus:ring-0 block w-full pl-10 p-2.5 outline-none'
                placeholder='Search anime active...'
              />
              <button
                type='submit'
                className='absolute inset-y-0 right-0 flex items-center pr-3'
              >
                <IoEnterOutline className='w-4 h-4 text-gray-500 hover:text-gray-900' />
              </button>
            </form>
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
                    <Link
                      key={anime.id}
                      to={`/info/${anime.id}`}
                      onClick={handleClose}
                    >
                      <div className='flex px-2.5 py-1 '>
                        <img className='h-20' src={anime.image} />
                        <div className='text-[#aaaaaa] flex flex-col py-1 pl-2'>
                          <div className=' md:text-lg text-base font-normal line-clamp-2'>
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
                            <span className='font-thin'>
                              {anime.releaseDate}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className='relative w-full hidden lg:inline'
          onClick={() => setIsActive(true)}
        >
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <HiSearch className='w-5 h-5 text-gray-500' />
          </div>
          <input
            type='text'
            id='search'
            autoComplete='off'
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
