import React from 'react'
import HLSVideoPlayer from '../components/HLSVideoPlayer'

const Player = () => {
  const sources = [
    {
      url: 'https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.360.m3u8',
      isM3U8: true,
      quality: '360p',
    },
    {
      url: 'https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.480.m3u8',
      isM3U8: true,
      quality: '480p',
    },
    {
      url: 'https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.720.m3u8',
      isM3U8: true,
      quality: '720p',
    },
    {
      url: 'https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.1080.m3u8',
      isM3U8: true,
      quality: '1080p',
    },
    {
      url: 'https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.m3u8',
      isM3U8: true,
      quality: 'default',
    },
    {
      url: 'https://www002.anifastcdn.info/videos/hls/lZX0LRWwzYqhFLzETxZMGA/1687536200/184141/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.m3u8',
      isM3U8: true,
      quality: 'backup',
    },
  ]
  return (
    <div>
      <HLSVideoPlayer sources={sources} />
    </div>
  )
}

export default Player
