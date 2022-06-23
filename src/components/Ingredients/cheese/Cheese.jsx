import React, { useContext } from 'react'
import { appData } from '../../../App'
import './cheese.css'
export default function Cheese() {
  const { cheeseCount } = useContext(appData)
  return (
    <>
      {cheeseCount.map(item => {
        return <div className='Ingredient__Cheese' key={item} />
      })}
    </>
  )
}
