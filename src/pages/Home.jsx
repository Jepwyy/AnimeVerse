import React from 'react'

import Banner from '../components/Banner'
import RecentEpisodes from '../components/RecentEpisodes'
import TopList from '../components/TopList'

const Home = () => {
  return (
    <div className=''>
      <div className='md:px-14 px-6 w-full flex lg:flex-row flex-col lg:gap-5'>
        <RecentEpisodes />
        <TopList />
      </div>
    </div>
  )
}

export default Home
