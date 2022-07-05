import React, { useContext } from 'react'

import { AppData } from 'App'
import './lettuce.css'

const Lettuce = () => {
  const { lettuceCount } = useContext(AppData)

  return (
    <>
      {lettuceCount.map((item, index) => {
        return <div className='ingredient-lettuce' key={index.toString() + 1} />
      })}
    </>
  )
}

export default Lettuce
