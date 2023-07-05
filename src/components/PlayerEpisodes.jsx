import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const PlayerEpisodes = ({ animeInfo, id }) => {
  const { ep } = useParams()
  const [rangeFilter, setRangeFilter] = useState('')
  const episodes =
    animeInfo?.episodes && animeInfo.episodes.length > 0
      ? [...animeInfo.episodes].reverse()
      : null

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

  const filterEpisodesByRange = () => {
    if (!rangeFilter) {
      return episodes
    }

    const [start, end] = rangeFilter.split('-').map(Number)
    return episodes.slice(start - 1, end)
  }

  const filteredEpisodes = filterEpisodesByRange()

  return (
    <div>
      {/* Select element for range filtering */}
      <select className='mb-3' value={rangeFilter} onChange={handleRangeFilter}>
        <option value=''>All Episodes</option>
        {episodes &&
          generateRangeOptions(episodes.length).map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      <div className='grid grid-cols-2 px-2 gap-1 gap-y-3 max-h-[31.7rem] overflow-y-auto '>
        {filteredEpisodes?.map((episode) => {
          const isSaved = localStorage.getItem('ep')?.includes(episode.id)

          return (
            <Link to={`/play/${id}/${episode?.id}`} key={episode.id}>
              <div
                className={`text-white  p-1 ${
                  ep === episode?.id
                    ? 'bg-[#07bf67]'
                    : isSaved
                    ? 'bg-[#0c6339]'
                    : 'bg-[#555]'
                }`}
              >
                {episode.id}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default PlayerEpisodes
