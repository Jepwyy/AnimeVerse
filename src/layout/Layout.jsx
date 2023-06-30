import React, { useState } from 'react'
import Topbar from '../components/Topbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div className='flex flex-row h-screen'>
      <div className='overflow-hidden w-screen'>
        <div className='flex flex-col flex-1 w-full'>
          <Topbar />
        </div>
        <div className='flex-1 z-[0]  bg-[#101112]  h-[100vh] w-full overflow-auto relative scrollbar-thin scrollbar-thumb-black scrollbar-track-[#101112]'>
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
