import React from 'react'
import axios from '../api/api'
import { useQuery } from 'react-query'
const Schedule = () => {
  const { data, isLoading, isError } = useQuery(['sched'], async () => {
    const response = await axios.get(`meta/anilist/airing-schedule`)
    return response.data
  })
  console.log(data)
  return (
    <div className='bg-[#242424]'>
      <div>sched</div>
    </div>
  )
}

export default Schedule
