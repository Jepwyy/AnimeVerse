import React, { useEffect, useState } from 'react'
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  VolumeMenuButton,
} from 'video-react'
import { TbSettingsFilled } from 'react-icons/tb'
import 'video-react/dist/video-react.css'
import Hls from 'hls.js'

const VideoPlayer = ({ sources }) => {
  const [hls, setHls] = useState(null)
  const [selectedQuality, setSelectedQuality] = useState(sources[0].quality)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const videoElement = document.getElementsByClassName('video-react-video')[0]

    if (Hls.isSupported()) {
      if (!hls) {
        const newHls = new Hls()
        setHls(newHls)
        newHls.loadSource(sources[0].url)
        newHls.attachMedia(videoElement)
        newHls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoElement.play()
        })
      }
    } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
      videoElement.src = sources[0].url
      videoElement.addEventListener('loadedmetadata', () => {
        videoElement.play()
      })
    }

    return () => {
      if (hls) {
        hls.destroy()
      }
    }
  }, [sources, hls])
  const handleQualityChange = (quality) => {
    setSelectedQuality(quality)
    const selectedSource = sources.find((src) => src.quality === quality)
    if (selectedSource && hls) {
      hls.destroy()
      const newHls = new Hls()
      setHls(newHls)
      newHls.loadSource(selectedSource.url)
      newHls.attachMedia(
        document.getElementsByClassName('video-react-video')[0]
      )
      newHls.on(Hls.Events.MANIFEST_PARSED, () => {
        document.getElementsByClassName('video-react-video')[0].play()
      })
    }
    setIsDropdownOpen(false)
  }

  return (
    <Player autoPlay={false}>
      <source src={sources[0].url} type='application/x-mpegURL' />
      <ControlBar>
        <ReplayControl seconds={5} order={2.1} />
        <VolumeMenuButton vertical />
        <ForwardControl seconds={5} order={3.1} />
        {/* Add additional controls or components here as needed */}
        <div className='' order={7}>
          <button
            className=' hover:bg-gray-700 text-white py-2 px-4 rounded focus:outline-none'
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <TbSettingsFilled size={15} />
          </button>
          {isDropdownOpen && (
            <div className='mt-2 absolute right-0 bottom-8 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
              {sources.map((source) => (
                <button
                  key={source.quality}
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'
                  onClick={() => handleQualityChange(source.quality)}
                >
                  {source.quality}
                </button>
              ))}
            </div>
          )}
        </div>
      </ControlBar>
    </Player>
  )
}

export default VideoPlayer
