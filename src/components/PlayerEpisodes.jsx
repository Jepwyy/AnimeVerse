import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const PlayerEpisodes = ({ animeInfo, id }) => {
  const { ep } = useParams()
  const episodes =
    animeInfo?.episodes && animeInfo.episodes.length > 0
      ? animeInfo.episodes
      : null

  useEffect(() => {
    const savedEpisodes = localStorage.getItem('ep') || ''
    const episodesArray = savedEpisodes.split(',')

    if (!episodesArray.includes(ep)) {
      episodesArray.push(ep)
      localStorage.setItem('ep', episodesArray.join(','))
    }
  }, [ep])

  // useEffect(() => {
  //   const savedEpisodes = localStorage.getItem('ep') || ''
  //   const episodesArray = savedEpisodes.split(',')

  //   console.log('Saved Episodes:', episodesArray)
  // }, [])
  // h-[31.7rem]

  return (
    <div className='grid grid-cols-2 px-2 gap-1 gap-y-3 max-h-[31.7rem] overflow-y-auto '>
      {episodes?.map((episode) => {
        const isSaved = localStorage.getItem('ep')?.includes(episode.id)

        return (
          <Link to={`/play/${id}/${episode?.id}`} key={episode.id}>
            <div
              className={`text-white  p-1 ${
                isSaved ? 'bg-[#0c6339]' : 'bg-[#07bf67]'
              }`}
            >
              {episode.id}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default PlayerEpisodes
