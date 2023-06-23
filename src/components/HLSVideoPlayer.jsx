import React, { useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls'

const HLSVideoPlayer = ({ sources }) => {
  const videoRef = useRef(null)
  const [selectedQuality, setSelectedQuality] = useState(sources[0].quality)

  useEffect(() => {
    const player = videojs(videoRef.current)
    player.src(getSourceUrl(selectedQuality))

    return () => {
      player.dispose()
    }
  }, [selectedQuality])

  const getSourceUrl = (quality) => {
    const source = sources.find((src) => src.quality === quality)
    return source ? source.url : ''
  }

  const handleQualityChange = (e) => {
    const quality = e.target.value
    setSelectedQuality(quality)
  }

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        className='video-js vjs-default-skin'
        controls
      ></video>
      <div>
        <label htmlFor='quality'>Select Quality:</label>
        <select
          id='quality'
          value={selectedQuality}
          onChange={handleQualityChange}
        >
          {sources.map((src) => (
            <option key={src.quality} value={src.quality}>
              {src.quality}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default HLSVideoPlayer
