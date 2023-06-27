import React, { useState } from 'react'
import Topbar from '../components/Topbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-row h-screen'>
      <div className='overflow-hidden w-screen'>
        <div className='flex flex-col flex-1 w-full'>
          <Topbar />
        </div>
        <div className='flex-1 z-[0] p-0 min-h-0 bg-[#101112] h-full w-full overflow-auto relative'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
