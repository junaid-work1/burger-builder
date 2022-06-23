import React, { useContext } from 'react'
import { appData } from '../../../App'
import './lettuce.css'
export default function Lettuce() {
  const { lettuceCount } = useContext(appData)
  return (
    <>
      {lettuceCount.map(item => {
        return <div className='Ingredient__Lettuce' key={item} />
      })}
    </>
  )
}
