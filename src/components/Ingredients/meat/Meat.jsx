import React, { useContext } from 'react'

import { AppData } from 'App'
import './meat.css'

const Meat = () => {
  const { meatCount } = useContext(AppData)

  return (
    <>
      {meatCount.map((item, index) => {
        return <div className='ingredient-meat' key={index.toString() + 1} />
      })}
    </>
  )
}

export default Meat
