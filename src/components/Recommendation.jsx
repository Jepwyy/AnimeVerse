import React from 'react'
import { MdOutlineStarRate } from 'react-icons/md'
import { formatRate } from '../utils/useFormats'
import { Link } from 'react-router-dom'
const Recommendation = ({ animeInfo }) => {
  return (
    <div>
      <div className='text-[#dddddd] font-semibold lg:text-2xl text-base mb-5'>
        You might also like
      </div>
      <div className='flex flex-col gap-3'>
        {animeInfo?.recommendations?.slice(0, 15).map((item) => (
          <Link
            to={`/info/${item.id}`}
            key={item.id}
            className='flex flex-row gap-4 bg-[#242424] rounded'
          >
            <img className='h-[5.7rem] w-[4.5rem] rounded-l' src={item.image} />
            <div className='flex flex-col justify-center'>
              <div className='font-normal  lg:text-lg text-xs uppercase line-clamp-1 text-[#ccc]'>
                {item.title.english == null
                  ? item.title.userPreferred
                  : item.title.english}
              </div>
              <div className='flex items-center text-[#aaa] gap-1 md:text-[.8rem] text-[.7rem]'>
                <span className='font-thin'>{item.type}</span>
                <span>&bull;</span>
                <span className='font-thin'>{item.episodes} Eps</span>
                <span>&bull;</span>
                <span className='flex items-center'>
                  <MdOutlineStarRate /> {formatRate(item.rating)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Recommendation
