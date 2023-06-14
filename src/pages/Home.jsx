import React from 'react'

import Banner from '../components/Banner'
import RecentEpisode from '../components/RecentEpisode'
import TopList from '../components/TopList'

const Home = () => {
  return (
    <div className=''>
      <div className='px-14 w-full flex flex-row'>
        <RecentEpisode />
        <TopList />
      </div>
    </div>
  )
}

export default Home
