import React, { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from '../api/api'
import { useAnimeInfo } from '../utils/useAnimeInfo'
import { formatPopularity, formatRate } from '../utils/useFormats'
import { IoPlaySharp, IoPlayOutline } from 'react-icons/io5'
const Info = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { animeInfo, fetchAnimeInfo } = useAnimeInfo((state) => state)

  const HTMLRenderer = ({ htmlString }) => (
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
  )

  const { data, isLoading, isError } = useQuery(['info', id], () =>
    fetchAnimeInfo(id)
  )

  const ep =
    animeInfo?.episodes && animeInfo.episodes.length > 0
      ? animeInfo.episodes[animeInfo.episodes.length - 1]
      : null

  if (isLoading) {
    return <p>Loading...</p>
  }

  console.log(animeInfo?.episodes.length)

  const handleLatest = () => {
    if (animeInfo?.episodes.length == 0) {
      alert('Not yet released')
    } else {
      navigate(`/play/${id}/${animeInfo?.episodes[0]?.id}`)
    }
  }

  const handleStartt = () => {
    if (animeInfo?.episodes.length == 0) {
      alert('Not yet released')
    } else {
      navigate(`/play/${id}/${ep?.id}`)
    }
  }

  return (
    <div className='text-white pb-20'>
      <img
        className=' w-full h-[10rem] lg:h-[15rem] brightness-50'
        src={
          animeInfo?.cover == null
            ? 'https://i.pinimg.com/originals/c0/c4/f0/c0c4f06b14625c8fb9c4cdcbaa58c6d8.png'
            : animeInfo?.cover
        }
      />
      <div className='lg:px-24 px-6 flex justify-between mt-4 gap-5'>
        <div>
          <div className='lg:text-2xl text-lg font-medium text-white'>
            {animeInfo?.title.english}
          </div>
          <div className='lg:text-base text-sm font-normal text-[#aaaaaa]'>
            {animeInfo?.title.native}
          </div>
          <div className='text-[#aaa] text-sm'>{animeInfo?.duration}min</div>
        </div>
        <div>
          <Link
            className={`py-2 px-2 rounded-md text-sm font-medium uppercase flex items-center justify-center bg-[#ff0000]`}
            to={`https://www.youtube.com/watch?v=${animeInfo?.trailer?.id}`}
          >
            <IoPlaySharp size={18} /> Trailer
          </Link>
        </div>
      </div>
      <div className='lg:px-24 px-6 flex flex-col lg:flex-row lg:mt-3 gap-5 lg:gap-0'>
        <div className=' lg:w-[20%] w-full lg:pr-10 lg:px-0 px-16'>
          <div className='lg:w-[70%] flex flex-col gap-3'>
            <img className='w-[100%] mt-[2.7rem]' src={animeInfo?.image} />
            <button
              onClick={handleLatest}
              className='w-full bg-[#07bf67] hover:bg-[#129055] py-2 rounded-md text-sm font-medium uppercase flex items-center justify-center'
            >
              <IoPlayOutline size={20} /> Watch Latest Episode
            </button>
            <button
              onClick={handleStartt}
              className='w-full border border-[#07bf67] text-[#07bf67] hover:text-white hover:bg-[#07bf67] py-2 rounded-md text-sm font-medium uppercase flex items-center justify-center'
            >
              <IoPlayOutline size={20} /> Start Watching
            </button>
            <div className='flex gap-3 justify-center flex-wrap'>
              {animeInfo?.genres.map((genre, index) => (
                <span
                  className='border border-[#aaa] px-2 rounded-full text-[#aaa] font-light text-sm'
                  key={index}
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className='lg:w-[40%] w-full'>
          <h1 className='font-bold text-white text-lg mb-2'>DETAILS</h1>
          <div className='border-t-2 border-[#07bf67]'>
            <table className='lg:w-[80%] w-full'>
              <tbody>
                <tr className='border-b border-[#444]'>
                  <td className='text-[#aaa] pt-3 pb-1'>COUNTRY</td>
                  <td className='text-end font-medium pt-3 pb-1'>
                    {animeInfo?.countryOfOrigin}
                  </td>
                </tr>
                <tr className='border-b border-[#444]'>
                  <td className='text-[#aaa] pt-3 pb-1'>POPULARITY</td>
                  <td className='text-end font-medium pt-3 pb-1'>
                    {formatPopularity(animeInfo?.popularity)}k
                  </td>
                </tr>
                <tr className='border-b border-[#444]'>
                  <td className='text-[#aaa] pt-3 pb-1'>STATUS</td>
                  <td className='text-end font-medium pt-3 pb-1'>
                    {animeInfo?.status}
                  </td>
                </tr>
                <tr className='border-b border-[#444]'>
                  <td className='text-[#aaa] pt-3 pb-1'>RELEASE YEAR</td>
                  <td className='text-end font-medium pt-3 pb-1'>
                    {animeInfo?.releaseDate}
                  </td>
                </tr>
                <tr className='border-b border-[#444]'>
                  <td className='text-[#aaa] pt-3 pb-1'>START DATE</td>
                  <td className='text-end font-medium pt-3 pb-1'>
                    {animeInfo?.startDate.month}, {animeInfo?.startDate.day},{' '}
                    {animeInfo?.startDate.year}
                  </td>
                </tr>
                <tr className='border-b border-[#444]'>
                  <td className='text-[#aaa] pt-3 pb-1'>END DATE</td>
                  <td className='text-end font-medium pt-3 pb-1'>
                    {animeInfo?.endDate.month}, {animeInfo?.endDate.day},{' '}
                    {animeInfo?.endDate.year}
                  </td>
                </tr>
                <tr className='border-b border-[#444]'>
                  <td className='text-[#aaa] pt-3 pb-1'>TOTAL EPISODES</td>
                  <td className='text-end font-medium pt-3 pb-1'>
                    {animeInfo?.totalEpisodes}
                  </td>
                </tr>
                <tr className='border-b border-[#444]'>
                  <td className='text-[#aaa] pt-3 pb-1'>CURRENT EPISODES</td>
                  <td className='text-end font-medium pt-3 pb-1'>
                    {animeInfo?.currentEpisode}
                  </td>
                </tr>
                <tr className='border-b border-[#444]'>
                  <td className='text-[#aaa] pt-3 pb-1'>RATING</td>
                  <td className='text-end font-medium pt-3 pb-1'>
                    {formatRate(animeInfo?.rating)}
                  </td>
                </tr>
                <tr className='border-b border-[#444]'>
                  <td className='text-[#aaa] pt-3 pb-1'>SEASON</td>
                  <td className='text-end font-medium pt-3 pb-1'>
                    {animeInfo?.season}
                  </td>
                </tr>
                <tr className='border-b border-[#444]'>
                  <td className='text-[#aaa] pt-3 pb-1'>STUDIO</td>
                  <td className='text-end font-medium pt-3 pb-1'>
                    {animeInfo?.studios}
                  </td>
                </tr>
                <tr className='border-b border-[#444]'>
                  <td className='text-[#aaa] pt-3 pb-1'>TYPE</td>
                  <td className='text-end font-medium pt-3 pb-1'>
                    {animeInfo?.type}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='lg:w-[40%] w-full'>
          <h1 className='font-bold text-white text-lg mb-2'>STORYLINE</h1>
          <div className='border-t-2 border-[#07bf67]'>
            <div className='mt-3 text-sm'>
              <HTMLRenderer htmlString={animeInfo?.description} />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Info

//#07bf67
//#1D1E1F
//#2A2B2C
