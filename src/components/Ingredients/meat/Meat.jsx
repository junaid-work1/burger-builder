import React, { useContext } from 'react'
import { appData } from '../../../App'
import './meat.css'
export default function Meat() {
  const { meatCount } = useContext(appData)
  return (
    <>
      {meatCount.map(item => {
        return <div className='Ingredient__Meat' key={item} />
      })}
    </>
  )
}
