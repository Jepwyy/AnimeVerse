import React from 'react'
import { useQuery } from 'react-query'
import axios from '../api/api'

const Release = () => {
  const summerQuery = useQuery(['summer'], async () => {
    const response = await axios.get(
      `meta/anilist/advanced-search?season=SUMMER&year=2023`
    )
    return response.data
  })

  const fallQuery = useQuery(['fall'], async () => {
    const response = await axios.get(
      `meta/anilist/advanced-search?season=FALL&year=2023`
    )
    return response.data
  })

  const springQuery = useQuery(['spring'], async () => {
    const response = await axios.get(
      `meta/anilist/advanced-search?season=SPRING&year=2023`
    )
    return response.data
  })

  const winterQuery = useQuery(['winter'], async () => {
    const response = await axios.get(
      `meta/anilist/advanced-search?season=WINTER&year=2023`
    )
    return response.data
  })

  console.log('Summer Data:', summerQuery.data)
  console.log('Fall Data:', fallQuery.data)
  console.log('Spring Data:', springQuery.data)
  console.log('Winter Data:', winterQuery.data)

  return (
    <div>
      <div>
        <h2>Summer</h2>
        {summerQuery.isLoading ? (
          'Loading...'
        ) : (
          <pre>{JSON.stringify(summerQuery.data, null, 2)}</pre>
        )}
      </div>
      <div>
        <h2>Fall</h2>
        {fallQuery.isLoading ? (
          'Loading...'
        ) : (
          <pre>{JSON.stringify(fallQuery.data, null, 2)}</pre>
        )}
      </div>
      <div>
        <h2>Spring</h2>
        {springQuery.isLoading ? (
          'Loading...'
        ) : (
          <pre>{JSON.stringify(springQuery.data, null, 2)}</pre>
        )}
      </div>
      <div>
        <h2>Winter</h2>
        {winterQuery.isLoading ? (
          'Loading...'
        ) : (
          <pre>{JSON.stringify(winterQuery.data, null, 2)}</pre>
        )}
      </div>
    </div>
  )
}

export default Release
