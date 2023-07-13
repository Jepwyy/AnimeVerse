import React from 'react'
import { Link } from 'react-router-dom'
import {
  MdLocalMovies,
  MdOutlineStarRate,
  MdArrowBackIosNew,
  MdArrowForwardIos,
} from 'react-icons/md'
import { formatRate } from '../utils/useFormats'
const Relations = ({ animeInfo }) => {
  return (
    <div>
      <div className='text-[#dddddd] font-semibold lg:text-2xl text-base mb-5'>
        Relations
      </div>
      <div
        className={`grid lg:grid-cols-7 grid-cols-3 max-h-[44rem] overflow-y-auto gap-[.81rem] scrollbar-thin scrollbar-thumb-black scrollbar-track-[#101112] px-1`}
      >
        {animeInfo?.relations
          ?.filter((obj) => obj.type !== 'MANGA' && obj.type !== 'NOVEL')
          .map((item) => (
            <Link key={item.id} to={`/info/${item.id}`}>
              <div className='w-[100%]  rounded-md '>
                <img className=' aspect-[2/3] rounded-t-md' src={item?.image} />
                <div className='bg-[#242424] flex items-center justify-between p-1  leading-none'>
                  <div className='flex items-center text-[#fff] gap-[.10rem] md:text-[.8rem] text-[.7rem]'>
                    <span className='flex items-center bg-[#03C988] py-[.15rem] px-[.25rem] rounded-l'>
                      <MdLocalMovies /> {item?.episodes}
                    </span>
                    <span className='flex items-center bg-[#8f7003] py-[.15rem] px-[.25rem] rounded-r'>
                      <MdOutlineStarRate />
                      {formatRate(item?.rating)}
                    </span>
                  </div>
                  <div className='text-[#aaaaaa] md:text-[.9rem] text-[.7rem] font-medium'>
                    {item?.type}
                  </div>
                </div>
                <div className='md:text-[1rem] text-[.9rem] font-normal leading-none text-[#aaaaaa]'>
                  <p className='line-clamp-2'>
                    {item?.title.english == null
                      ? item?.title.userPreferred
                      : item?.title.english}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Relations
