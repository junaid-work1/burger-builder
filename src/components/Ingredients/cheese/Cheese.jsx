import React, { useContext } from 'react'

import { AppData } from 'App'
import './cheese.css'

const Cheese = () => {
  const { cheeseCount } = useContext(AppData)

  return (
    <>
      {cheeseCount.map((item, index) => {
        return <div className='ingredient-cheese' key={index.toString() + 1} />
      })}
    </>
  )
}

export default Cheese
