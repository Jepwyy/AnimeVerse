import React from 'react'

import logo from '../assets/img/logo.png'

//components
import SearchBar from './SearchBar'

const Topbar = () => {
  return (
    <div className='w-full h-16 sticky bg-[#24292F] flex justify-between items-center px-14'>
      <div className='flex items-center w-[60%]'>
        <img className='h-7 mr-1' src={logo} alt='logo' />
        <div className='text-white text-4xl font-cyberjunkies'>
          Anime<span className='text-[#03C988]'>Verse</span>
        </div>
        <SearchBar />
      </div>
      <div>navs</div>
    </div>
  )
}

export default Topbar

//Movie Genre Recommend switch[eng, jap]
