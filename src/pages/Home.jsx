import React from 'react'

import Banner from '../components/Banner'
import RecentEpisodes from '../components/RecentEpisodes'
import TopList from '../components/TopList'
import Test from '../components/Test'

const Home = () => {
  return (
    <div className=''>
      <div className='px-14 w-full flex flex-row'>
        <RecentEpisodes />
        <TopList />
      </div>
    </div>
  )
}

export default Home
