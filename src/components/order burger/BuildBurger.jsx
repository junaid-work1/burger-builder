import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React, { useState, useContext } from 'react'
import { Modal } from 'react-responsive-modal'

import { AppData } from 'App'
import Button from 'components/elements/button/Button'

import 'react-responsive-modal/styles.css'
import './buildburger.css'
import './ordersummary.css'

const BuildBurger = ({ deleteIngrediant }) => {
  const {
    lettuceCount,
    setLettuceCount,
    baconCount,
    setBaconCount,
    cheeseCount,
    setCheeseCount,
    meatCount,
    setMeatCount,
    flag,
    totalAmount
  } = useContext(AppData)

  const [open, setOpen] = useState(false)
  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)

  return (
    <div className='buildBurger-main'>
      {totalAmount > 3 ? (
        <p>
          Current price: <strong>${totalAmount.toFixed(2)}</strong>
        </p>
      ) : (
        <p>
          Current price: <strong>$3.00</strong>
        </p>
      )}

      <div className='ingrediant-item-box'>
        <div className='ingrediant-item'>Lettuce</div>
        <Button
          clickDecrease={() => {
            deleteIngrediant('Lettuce', lettuceCount.length)
          }}
          clickIncrease={() => {
            setLettuceCount([...lettuceCount, `Entry ${lettuceCount.length}`])
          }}
          classNameLess={'ingrediant-btn-less'}
          classNameMore={'ingrediant-btn-more'}
          disable={lettuceCount.length === 0}
        />
      </div>
      <div className='ingrediant-item-box'>
        <div className='ingrediant-item'>Bacon</div>
        <Button
          clickDecrease={() => {
            deleteIngrediant('Bacon', baconCount.length)
          }}
          clickIncrease={() => {
            setBaconCount([...baconCount, `Entry ${baconCount.length}`])
          }}
          classNameLess={'ingrediant-btn-less'}
          classNameMore={'ingrediant-btn-more'}
          disable={baconCount.length === 0}
        />
      </div>
      <div className='ingrediant-item-box'>
        <div className='ingrediant-item'>Cheese</div>
        <Button
          clickDecrease={() => {
            deleteIngrediant('Cheese', cheeseCount.length)
          }}
          clickIncrease={() => {
            setCheeseCount([...cheeseCount, `Entry ${cheeseCount.length}`])
          }}
          classNameLess={'ingrediant-btn-less'}
          classNameMore={'ingrediant-btn-more'}
          disable={cheeseCount.length === 0}
        />
      </div>
      <div className='ingrediant-item-box'>
        <div className='ingrediant-item'>Meat</div>
        <Button
          clickDecrease={() => {
            deleteIngrediant('Meat', meatCount.length)
          }}
          clickIncrease={() => {
            setMeatCount([...meatCount, `Entry ${meatCount.length}`])
          }}
          classNameLess={'ingrediant-btn-less'}
          classNameMore={'ingrediant-btn-more'}
          disable={meatCount.length === 0}
        />
      </div>

      {flag ? (
        <Link to='/signin'>
          <button
            className='buildBurger-order-btn'
            disabled={totalAmount > 3 ? false : true}
            onClick={() => {
              onOpenModal()
            }}
          >
            SIGN UP TO ORDER
          </button>
        </Link>
      ) : (
        <button
          className='buildBurger-order-btn'
          disabled={totalAmount > 3 ? false : true}
          onClick={() => {
            onOpenModal()
          }}
        >
          ORDER
        </button>
      )}
      <div>
        <Modal open={open} onClose={onCloseModal} center className='modal-size'>
          <h2>Your Order Summary:</h2>
          <ul>
            <li className='item'>Lettuce: {lettuceCount.length}</li>
            <li className='item'>Bacon: {baconCount.length}</li>
            <li className='item'>Cheese: {cheeseCount.length}</li>
            <li className='item'>Meat: {meatCount.length}</li>
          </ul>
          <h2>Total Price: ${totalAmount.toFixed(2)}</h2>
          <p>Continue to Checkout?</p>
          <div className='confirmation-box'>
            <p className='confirmation-cancel' onClick={onCloseModal}>
              Cancel
            </p>
            <Link to='checkout'>
              <p className='confirmation-done'>Continue</p>
            </Link>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default BuildBurger

BuildBurger.propTypes = {
  deleteIngrediant: PropTypes.func
}
