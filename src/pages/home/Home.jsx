import React, { useContext } from 'react'

import { AppData } from 'App'
import BuildBurger from 'components/order burger/BuildBurger'
import Bacon from 'components/Ingredients/bacon/Bacon'
import Cheese from 'components/Ingredients/cheese/Cheese'
import Lettuce from 'components/Ingredients/lettuce/Lettuce'
import Meat from 'components/Ingredients/meat/Meat'

import './home.css'

const Home = () => {
  const {
    lettuceCount,
    setLettuceCount,
    baconCount,
    setBaconCount,
    cheeseCount,
    setCheeseCount,
    meatCount,
    setMeatCount,
    totalAmount
  } = useContext(AppData)

  const deleteIngrediant = (ingrediantType, ingrediantLength) => {
    if (ingrediantType === 'Lettuce') {
      const result = lettuceCount.filter((item, index) => {
        return index !== ingrediantLength - 1
      })
      setLettuceCount(result)
    } else if (ingrediantType === 'Bacon') {
      const result = baconCount.filter((item, index) => {
        return index !== ingrediantLength - 1
      })
      setBaconCount(result)
    } else if (ingrediantType === 'Cheese') {
      const result = cheeseCount.filter((item, index) => {
        return index !== ingrediantLength - 1
      })
      setCheeseCount(result)
    } else {
      const result = meatCount.filter((item, index) => {
        return index !== ingrediantLength - 1
      })
      setMeatCount(result)
    }
  }

  return (
    <>
      <div className='home-main'>
        <div className='ingrediant-burgerTop'>
          <div className='burger-seed1' />
          <div className='burger-seed2' />
          <div className='burger-seed3' />
          <div className='burger-seed4' />
          <div className='burger-seed5' />
        </div>

        {totalAmount === 3 && <p>No Ingredients Added</p>}
        <Lettuce />
        <Bacon />
        <Cheese />
        <Meat />
        <div className='ingrediant-burgerBottom' />
      </div>
      <BuildBurger deleteIngrediant={deleteIngrediant} />
    </>
  )
}

export default Home
