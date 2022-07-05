import React, { useContext } from 'react'

import { AppData } from 'App'
import './bacon.css'

const Bacon = () => {
  const { baconCount } = useContext(AppData)

  return (
    <>
      {baconCount.map((item, index) => {
        return <div className='ingredient-bacon' key={index.toString() + 1} />
      })}
    </>
  )
}

export default Bacon
