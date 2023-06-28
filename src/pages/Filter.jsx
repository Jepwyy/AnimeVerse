import React from 'react'
import { useTopbar } from '../utils/useTopbar'

const Filter = () => {
  const { advanceSearch } = useTopbar((state) => state)
  return <div>{advanceSearch}</div>
}

export default Filter
