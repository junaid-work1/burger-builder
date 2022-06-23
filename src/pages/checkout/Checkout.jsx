import React, { useContext } from 'react'
import './checkout.css'
import { appData } from '../../App'
import Lettuce from '../../components/Ingredients/lettuce/Lettuce'
import Bacon from '../../components/Ingredients/bacon/Bacon'
import Cheese from '../../components/Ingredients/cheese/Cheese'
import Meat from '../../components/Ingredients/meat/Meat'
import { Link } from 'react-router-dom'

export default function Checkout() {
  const { lettuceCount, baconCount, cheeseCount, meatCount } = useContext(appData)
  return (
    <div className='home__main checkout__box'>
      <h1>We hope it tastes well!</h1>
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

      <Lettuce lettuceCount={lettuceCount} />
      <Bacon baconCount={baconCount} />
      <Cheese cheeseCount={cheeseCount} />
      <Meat meatCount={meatCount} />
      <div className='Ingrediant__burgerBottom' />

      <div className='confirmation__box confirmation__Checkout__box'>
        <Link to='/'>
          <p className='confirmation__cancel'>Cancel</p>
        </Link>
        <Link to='/contactform'>
          <p className='confirmation__done'>Continue</p>
        </Link>
      </div>
    </div>
  )
}
