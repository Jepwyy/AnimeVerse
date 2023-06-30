import React from 'react'

import Banner from '../components/Banner'
import RecentEpisodes from '../components/RecentEpisodes'
import TopList from '../components/TopList'

const Home = () => {
  console.log('test')
  return (
    <div className='md:px-14 px-6 w-full mt-5'>
      <Banner />
      <div className=' flex lg:flex-row flex-col gap-6 mb-20'>
        <div className='lg:w-[75%] min-h-[45.5rem] w-full'>
          <RecentEpisodes />
        </div>
        <div className='w-[25%]'>
          <TopList />
        </div>
      </div>
    </div>
  )
}

export default Home
