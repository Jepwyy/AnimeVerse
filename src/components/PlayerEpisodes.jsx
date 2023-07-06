import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PiSortDescending, PiSortAscending } from 'react-icons/pi'
const PlayerEpisodes = ({ animeInfo, id, episodes }) => {
  const { ep } = useParams()
  const [rangeFilter, setRangeFilter] = useState('')
  const [isDescending, setIsDescending] = useState(
    animeInfo?.episodes?.[0]?.id !== ep
  ) // Added state for sorting order

  console.log(episodes)

  useEffect(() => {
    const savedEpisodes = localStorage.getItem('ep') || ''
    const episodesArray = savedEpisodes.split(',')

    if (!episodesArray.includes(ep)) {
      episodesArray.push(ep)
      localStorage.setItem('ep', episodesArray.join(','))
    }
  }, [ep])

  const generateRangeOptions = (max) => {
    const options = []
    for (let i = 1; i <= max; i += 10) {
      const endRange = Math.min(i + 9, max)
      options.push({
        value: `${i}-${endRange}`,
        label: `${i}-${endRange}`,
      })
    }
    return options
  }

  const handleRangeFilter = (event) => {
    setRangeFilter(event.target.value)
  }

  const handleSortOrder = () => {
    setIsDescending(!isDescending)
  }

  const filterEpisodesByRange = () => {
    if (!rangeFilter) {
      return episodes || [] // Return an empty array if episodes is null
    }

    const [start, end] = rangeFilter.split('-').map(Number)
    return episodes?.slice(start - 1, end) || [] // Return an empty array if episodes is null
  }

  const filteredEpisodes = filterEpisodesByRange()

  // Sort the episodes based on the selected order (descending/ascending)
  const sortedEpisodes = isDescending
    ? filteredEpisodes
    : [...filteredEpisodes].reverse()

  return (
    <div className=''>
      {/* Select element for range filtering */}
      <div className='p-3 flex gap-1 border-b border-[#555]'>
        <select
          className='bg-[#333] text-[#ccc] text-xs p-1 rounded scrollbar-thin scrollbar-thumb-black scrollbar-track-[#101112]'
          value={rangeFilter}
          onChange={handleRangeFilter}
        >
          <option value=''>All Episodes</option>
          {episodes &&
            generateRangeOptions(episodes.length).map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>
        {/* Button for changing sorting order */}
        <button
          className='bg-[#333] text-[#ccc] text-xs p-1 rounded'
          onClick={handleSortOrder}
        >
          {isDescending ? (
            <PiSortDescending size={20} />
          ) : (
            <PiSortAscending size={20} />
          )}
        </button>
      </div>
      <div className='p-3 rounded-sm'>
        <div className='grid grid-cols-1 gap-1 px-1  gap-y-1 max-h-[34.5rem] overflow-y-auto scrollbar-thin scrollbar-thumb-[#444] scrollbar-track-[#101112]'>
          {sortedEpisodes?.map((episode) => {
            const isSaved = localStorage.getItem('ep')?.includes(episode.id)

            return (
              <Link to={`/play/${id}/${episode?.id}`} key={episode.id}>
                <div
                  className={`text-[#ccc] line-clamp-1  p-1 ${
                    ep === episode?.id
                      ? 'bg-[#07bf67]'
                      : isSaved
                      ? 'bg-[#0c6339]'
                      : 'bg-[#333]'
                  }`}
                >
                  <span className='pl-1 font-semibold'>{episode?.number}</span>{' '}
                  - <span className='text-sm'>{episode.title}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PlayerEpisodes
