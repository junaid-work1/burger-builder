import React, { useContext } from 'react'
import { appData } from '../../../App'
import './bacon.css'
export default function Bacon() {
  const { baconCount } = useContext(appData)
  return (
    <>
      {baconCount.map(item => {
        return <div className='Ingredient__Bacon' key={item} />
      })}
    </>
  )
}
