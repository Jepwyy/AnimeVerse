import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//icon
import { FaRandom } from 'react-icons/fa'
import { TbMovie } from 'react-icons/tb'
import { FaBook } from 'react-icons/fa'
import { IoSearchSharp } from 'react-icons/io5'

//logo
import logo from '../assets/img/logo.png'

//components
import SearchBar from './SearchBar'

const Topbar = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className='w-full h-16 sticky bg-[#1D1E1F] border border-[#2A2B2C] flex justify-between items-center lg:px-14 px-5 z-10'>
      <div className='flex items-center w-[90%] gap-8'>
        <Link to={`/`}>
          <div
            className={` items-center mr-6 ${
              isActive ? 'hidden' : 'flex'
            } lg:flex`}
          >
            <img className='h-7 mr-1' src={logo} alt='logo' />
            <div className='text-white text-4xl font-cyberjunkies'>
              Anime<span className='text-[#07bf67]'>Verse</span>
            </div>
          </div>
        </Link>
        <SearchBar isActive={isActive} setIsActive={setIsActive} />
        <div className='text-[#AAAAAA] text-base font-semibold lg:flex hidden items-center gap-1 cursor-pointer hover:text-[#03C988]'>
          <FaRandom size={20} />
          Random
        </div>
        <div className='text-[#AAAAAA] text-base font-semibold lg:flex hidden items-center gap-1 cursor-pointer hover:text-[#03C988]'>
          <TbMovie size={20} />
          Movie
        </div>
        <div className='text-[#AAAAAA] text-base font-semibold lg:flex hidden items-center gap-1 cursor-pointer hover:text-[#03C988]'>
          <FaBook size={20} />
          Genre
        </div>
      </div>
      <div className='flex items-center gap-5'>
        <IoSearchSharp
          onClick={() => setIsActive(true)}
          size={25}
          className='text-[#AAAAAA]  text-base font-semibold lg:hidden flex items-center gap-1 cursor-pointer hover:text-[#03C988]'
        />
        <div className='hidden  bg-[#03C988] hover:bg-[#03c987e1] text-gray-100 font-semibold py-1 px-4 rounded-md md:inline-flex items-center'>
          Login
        </div>
      </div>
    </div>
  )
}

export default Topbar

//Movie Genre Recommend switch[eng, jap]
