import React, { useRef, useState, useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

const Banner = () => {
  const [progress, setProgress] = useState(0) // State to track progress
  const progressRef = useRef({ swiper: null })

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
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onSwiper={(swiper) => {
          progressRef.current.swiper = swiper
        }}
        className='h-[30rem]'
      >
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-1.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-2.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-3.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-4.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-5.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-6.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-7.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-8.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-9.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-10.jpg' />
        </SwiperSlide>
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
