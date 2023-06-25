import React from 'react'
import { Link } from 'react-router-dom'
const PlayerEpisodes = ({ animeInfo, id }) => {
  const episodes =
    animeInfo?.episodes && animeInfo.episodes.length > 0
      ? animeInfo.episodes
      : null
  return (
    <div className='flex flex-wrap gap-2'>
      {episodes?.map((ep) => (
        <Link to={`/play/${id}/${ep?.id}`} key={ep.id}>
          <div className='text-white border border-[#07bf67] p-1 bg-[#07bf67]'>
            {ep.id}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PlayerEpisodes
