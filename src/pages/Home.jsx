import React from 'react'

import Banner from '../components/Banner'
import RecentEpisodes from '../components/RecentEpisodes'
import TopList from '../components/TopList'
import Release from '../components/Release'
import Popular from '../components/Popular'

const Home = () => {
  return (
    <div className='md:px-14 px-6 w-full mt-5'>
      <Banner />
      <div className=' flex lg:flex-row flex-col gap-6 mb-20 mt-8'>
        <div className='lg:w-[75%]  w-full lg:order-none order-2'>
          <div className='min-h-[38.5rem]'>
            <RecentEpisodes />
          </div>
          <div className='min-h-[38.5rem]'>
            <Popular />
          </div>

          <div>
            <Release />
          </div>
        </div>
        <div className='lg:w-[25%] w-full lg:order-none order-1'>
          <TopList />
        </div>
      </div>
    </div>
  )
}

export default Home
