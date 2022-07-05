import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AppData } from 'App'
import Bacon from 'components/Ingredients/bacon/Bacon'
import Cheese from 'components/Ingredients/cheese/Cheese'
import Lettuce from 'components/Ingredients/lettuce/Lettuce'
import Meat from 'components/Ingredients/meat/Meat'

import './checkout.css'

const Checkout = () => {
  const { lettuceCount, baconCount, cheeseCount, meatCount } = useContext(AppData)

  return (
    <div>
      <div className='home-main checkout-box'>
        <h1>We hope it tastes well!</h1>
        <div className='ingrediant-burgerTop'>
          <div className='burger-seed1' />
          <div className='burger-seed2' />
          <div className='burger-seed3' />
          <div className='burger-seed4' />
          <div className='burger-seed5' />
        </div>
        <Lettuce lettuceCount={lettuceCount} />
        <Bacon baconCount={baconCount} />
        <Cheese cheeseCount={cheeseCount} />
        <Meat meatCount={meatCount} />
        <div className='ingrediant-burgerBottom' />
      </div>
      <div className='confirmation-box confirmation-checkout-box'>
        <Link to='/'>
          <p className='confirmation-cancel'>Cancel</p>
        </Link>
        <Link to='/contactform'>
          <p className='confirmation-done'>Continue</p>
        </Link>
      </div>
    </div>
  )
}

export default Checkout
