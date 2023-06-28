import React from 'react'
import { TbMapSearch } from 'react-icons/tb'
import { useTopbar } from '../utils/useTopbar'
import { useQuery } from 'react-query'
import axios from '../api/api'
import { formatRate } from '../utils/useFormats'
const Result = () => {
  const { advanceSearch } = useTopbar((state) => state)
  const { data, isLoading, isError } = useQuery(
    ['search-result', advanceSearch],
    async () => {
      const response = await axios.get(
        `meta/anilist/advanced-search?query=${advanceSearch}`
      )
      return response.data
    }
  )

  const result = data?.results

  console.log(result)
  return (
    <div className='lg:px-14 px-5 w-full flex lg:flex-row flex-col pt-10 gap-5'>
      <div className='flex flex-col lg:w-[75%] w-full'>
        <div className='flex items-center gap-1 text-white text-2xl font-thin pb-3'>
          <TbMapSearch size={30} color='#07bf67' />
          Results : {advanceSearch}({data?.totalResults})
        </div>
        <div className='w-full border-t-2 border-[#07bf67]'>
          {result?.map((item) => (
            <div key={item.id} className='flex flex-row gap-7 py-5'>
              <img
                className='h-[14rem] aspect-[2/3] rounded'
                src={item.image}
              />
              <div>
                <div className='text-base font-normal text-[#aaaaaa]'>
                  {item.title.native}
                </div>
                <div className='text-xl font-medium text-white'>
                  {item.title.english}
                </div>
                <div className='flex flex-row gap-5 py-1'>
                  <div className='flex flex-col gap-1'>
                    <span className='text-xs text-[#aaaaaa] '>Type</span>
                    <span className='text-white text-sm font-medium '>
                      {item.type}
                    </span>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <span className='text-xs text-[#aaaaaa] '>Rate</span>
                    <span className='text-white text-sm font-medium '>
                      {formatRate(item.rating)}
                    </span>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <span className='text-xs text-[#aaaaaa] '>
                      Release Date
                    </span>
                    <span className='text-white text-sm font-medium '>
                      {item.releaseDate}
                    </span>
                  </div>
                </div>
                <div className='text-[#aaaaaa] line-clamp-2 text-xs'>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-[25%]'></div>
    </div>
  )
}

export default Result
