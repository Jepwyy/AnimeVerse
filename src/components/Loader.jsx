import React from 'react'
import logo from '../assets/img/logo.png'
const Loader = () => {
  return (
    <div className='absolute z-[1] inset-0 bg-[#191919] bg-opacity-75  flex items-center justify-center py-2 overflow-y-auto'>
      <div className='flex flex-col justify-center items-center'>
        <div className='animate-bounce'>
          <img className=' sm:h-36 h-24' src={logo} />
        </div>
      </div>
    </div>
  )
}

export default Loader
