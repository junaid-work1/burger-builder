import React, { useContext } from 'react'
import './home.css'
import { appData } from '../../App'
import BuildBurger from '../../components/order burger/BuildBurger'
import Lettuce from '../../components/Ingredients/lettuce/Lettuce'
import Bacon from '../../components/Ingredients/bacon/Bacon'
import Cheese from '../../components/Ingredients/cheese/Cheese'
import Meat from '../../components/Ingredients/meat/Meat'
export default function Home() {
  const {
    lettuceCount,
    setLettuceCount,
    baconCount,
    setBaconCount,
    cheeseCount,
    setCheeseCount,
    meatCount,
    setMeatCount
  } = useContext(appData)

  // Function for Remove Ingrediants
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
      <div className='home__main'>
        <div className='Ingrediant__burgerTop'>
          <div className='Burger__Seed1' />
          <div className='Burger__Seed2' />
          <div className='Burger__Seed3' />
          <div className='Burger__Seed4' />
          <div className='Burger__Seed5' />
        </div>

        {lettuceCount.length === 0 &&
          baconCount.length === 0 &&
          cheeseCount.length === 0 &&
          meatCount.length === 0 && <p>No Ingredients Added</p>}
        <Lettuce />
        <Bacon />
        <Cheese />
        <Meat />
        <div className='Ingrediant__burgerBottom' />
      </div>
      <BuildBurger deleteIngrediant={deleteIngrediant} />
    </>
  )
}
