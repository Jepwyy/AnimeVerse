import React from 'react'

//icon
import { FaRandom } from 'react-icons/fa'
import { TbMovie } from 'react-icons/tb'
import { FaBook } from 'react-icons/fa'

//logo
import logo from '../assets/img/logo.png'

//components
import SearchBar from './SearchBar'

const Topbar = () => {
  return (
    <div className='w-full h-16 sticky bg-[#24292F] flex justify-between items-center px-14'>
      <div className='flex items-center w-[70%] gap-8'>
        <div className='flex items-center mr-6'>
          <img className='h-7 mr-1' src={logo} alt='logo' />
          <div className='text-white text-4xl font-cyberjunkies'>
            Anime<span className='text-[#03C988]'>Verse</span>
          </div>
        </div>
        <SearchBar />
        <div className='text-[#AAAAAA] text-base font-semibold flex items-center gap-1 cursor-pointer hover:text-[#03C988]'>
          <FaRandom size={20} />
          Random
        </div>
        <div className='text-[#AAAAAA] text-base font-semibold flex items-center gap-1 cursor-pointer hover:text-[#03C988]'>
          <TbMovie size={20} />
          Movie
        </div>
        <div className='text-[#AAAAAA] text-base font-semibold flex items-center gap-1 cursor-pointer hover:text-[#03C988]'>
          <FaBook size={20} />
          Genre
        </div>
      </div>
      <div className='bg-[#03C988] hover:bg-[#03c987e1] text-gray-100 font-semibold py-1 px-4 rounded-md inline-flex items-center'>
        Login
      </div>
    </div>
  )
}

export default Topbar

//Movie Genre Recommend switch[eng, jap]
