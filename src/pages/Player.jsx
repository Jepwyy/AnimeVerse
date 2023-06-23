import React, { useState } from 'react'
import ReactPlayer from 'react-player'

const Player = () => {
  const sources = [
    {
      url: 'https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.360.m3u8',
      quality: '360p',
    },
    {
      url: 'https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.480.m3u8',
      quality: '480p',
    },
    {
      url: 'https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.720.m3u8',
      quality: '720p',
    },
    {
      url: 'https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.1080.m3u8',
      quality: '1080p',
    },
    {
      url: 'https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.m3u8',
      quality: 'default',
    },
  ]

  const downloadLink =
    'https://gogohd.net/download?id=MTg0MTQx&token=lLxDVe0Ix2n2Zudx5ZacMA&expires=1687528999'

  const [selectedQuality, setSelectedQuality] = useState(sources[0].quality)

  const handleQualityChange = (event) => {
    setSelectedQuality(event.target.value)
  }
  return (
    <div>
      <ReactPlayer
        url={sources.find((source) => source.quality === selectedQuality).url}
        controls
      />
      <div>
        <label htmlFor='qualitySelect'>Quality:</label>
        <select
          id='qualitySelect'
          value={selectedQuality}
          onChange={handleQualityChange}
        >
          {sources.map((source) => (
            <option key={source.quality} value={source.quality}>
              {source.quality}
            </option>
          ))}
        </select>
      </div>
      <a href={downloadLink} target='_blank' rel='noopener noreferrer'>
        Download
      </a>
    </div>
  )
}

export default Player
