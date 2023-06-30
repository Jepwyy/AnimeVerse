import React, { useRef, useState, useEffect } from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import { RiStarSFill } from 'react-icons/ri'
import { formatRate } from '../utils/useFormats'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import axios from '../api/api'
import { useQuery } from 'react-query'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

const Banner = () => {
  const [progress, setProgress] = useState(0) // State to track progress
  const progressRef = useRef({ swiper: null })

  const { data, isLoading, isError } = useQuery(['trending'], () =>
    axios
      .get(
        `meta/anilist/advanced-search?sort=["TRENDING_DESC"]&page=1&perPage=20`
      )
      .then((res) => {
        const results = res.data.results.filter(
          (obj) => obj.status !== 'Not yet aired'
        )
        console.log(results)

        const filteredResult = results.slice(0, 10)
        console.log(filteredResult)
        return filteredResult
      })
  )
  // console.log(data)

  useEffect(() => {
    const calculateProgress = (swiper) => {
      const progress = (swiper.realIndex / (swiper.slides.length - 1)) * 100
      setProgress(progress)
    }

    const swiper = progressRef.current.swiper

    if (swiper) {
      calculateProgress(swiper)

      swiper.on('slideChange', () => {
        calculateProgress(swiper)
      })
    }
  }, [])

  return (
    <div className=''>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onSwiper={(swiper) => {
          progressRef.current.swiper = swiper
        }}
        className='lg:h-[24rem] h-[12rem] rounded-t-lg '
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='relative flex h-full items-center justify-center '>
              <img
                className='w-full h-full brightness-50 blur-[2px]'
                src={
                  item.cover == null
                    ? 'https://img.freepik.com/free-photo/deep-blue-plain-concrete-textured-background_53876-103890.jpg'
                    : item.cover
                }
              />

              <div className='absolute w-[90%] z-10  flex  '>
                <div className='lg:w-[50%] w-full flex flex-col justify-center items-start gap-2 pr-[8%]'>
                  <div>
                    <div className='lg:text-4xl text-2xl font-bold text-white line-clamp-2'>
                      {item.title.english == null
                        ? item.title.userPreferred
                        : item.title.english}
                    </div>
                    <div className='flex flex-row gap-3 text-[#aaa] lg:text-base text-xs'>
                      <span className=''>{item.releaseDate}</span>
                      <span className='flex items-center'>
                        <RiStarSFill /> {formatRate(item.rating)}
                      </span>
                      <span className='flex items-center'>
                        <BsFillPlayFill /> {item.totalEpisodes}
                      </span>
                      <span>{item.type}</span>
                      <span>{item.status}</span>
                    </div>
                  </div>
                  <div className='text-white line-clamp-2 lg:text-sm text-xs font-normal'>
                    {item.description}
                  </div>
                  <div>
                    <button className='flex items-center justify-center bg-[#07bf67] rounded lg:px-4 px-3 lg:py-2 py-1 text-white text-xs'>
                      <BsFillPlayFill size={23} /> Watch Now
                    </button>
                  </div>
                </div>
                <div className='w-[50%] lg:flex hidden justify-center items-center '>
                  <img
                    className='h-[19rem] skew-y-3 shadow-xl rounded-md'
                    src={item.image}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='my-carousel-progress'>
        <div
          className='my-carousel-progress-bar'
          ref={progressRef}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}

export default Banner
