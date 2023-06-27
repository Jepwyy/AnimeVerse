import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const PlayerEpisodes = ({ animeInfo, id }) => {
  const episodes =
    animeInfo?.episodes && animeInfo.episodes.length > 0
      ? animeInfo.episodes
      : null

  // Get the previously clicked episode ID from cookies
  const [clickedEpisodeId, setClickedEpisodeId] = useState(
    () => JSON.parse(localStorage.getItem('clickedEpisodeId')) || []
  )

  const handleClick = (episodeId) => {
    // Update the clickedEpisodeId state
    setClickedEpisodeId((prevClickedEpisodes) => [
      ...prevClickedEpisodes,
      episodeId,
    ])

    // Save the clicked episode ID in cookies
    localStorage.setItem('clickedEpisodeId', JSON.stringify(clickedEpisodeId))
  }

  const isEpisodeClicked = (episodeId) => clickedEpisodeId.includes(episodeId)

  return (
    <div className='flex flex-wrap gap-2'>
      {episodes?.map((ep) => (
        <Link to={`/play/${id}/${ep?.id}`} key={ep.id}>
          <div
            className={`text-white border border-[#07bf67] p-1 ${
              isEpisodeClicked(ep.id) ? 'bg-[#0b3e26]' : 'bg-[#07bf67]'
            }`}
            onClick={() => handleClick(ep.id)}
          >
            {ep.id}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PlayerEpisodes
