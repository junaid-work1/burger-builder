import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { appData } from '../../App'
import './buildburger.css'
import { Link } from 'react-router-dom'
import './ordersummary.css'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'

export default function BuildBurger({ deleteIngrediant }) {
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
  } = useContext(appData)
  const [open, setOpen] = useState(false) // state for model
  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)
  return (
    <div className='BuildBurger__main'>
      {totalAmount > 3 ? (
        <p>
          Current price: <strong>${totalAmount.toFixed(2)}</strong>
        </p>
      ) : (
        <p>
          Current price: <strong>$3.00</strong>
        </p>
      )}

      <div className='Ingrediant__item-box'>
        <div className='Ingrediant__item'>Lettuce</div>
        <button
          className='Ingrediant-btn__less'
          disabled={lettuceCount.length === 0}
          onClick={() => {
            deleteIngrediant('Lettuce', lettuceCount.length)
          }}
        >
          Less
        </button>
        <button
          className='Ingrediant-btn__more'
          onClick={() => {
            setLettuceCount([...lettuceCount, `Entry ${lettuceCount.length}`])
          }}
        >
          More
        </button>
      </div>
      <div className='Ingrediant__item-box'>
        <div className='Ingrediant__item'>Bacon</div>
        <button
          className='Ingrediant-btn__less'
          disabled={baconCount.length === 0}
          onClick={() => {
            deleteIngrediant('Bacon', baconCount.length)
          }}
        >
          Less
        </button>
        <button
          className='Ingrediant-btn__more'
          onClick={() => {
            setBaconCount([...baconCount, `Entry ${baconCount.length}`])
          }}
        >
          More
        </button>
      </div>
      <div className='Ingrediant__item-box'>
        <div className='Ingrediant__item'>Cheese</div>
        <button
          className='Ingrediant-btn__less'
          disabled={cheeseCount.length === 0}
          onClick={() => {
            deleteIngrediant('Cheese', cheeseCount.length)
          }}
        >
          Less
        </button>
        <button
          className='Ingrediant-btn__more'
          onClick={() => {
            setCheeseCount([...cheeseCount, `Entry ${cheeseCount.length}`])
          }}
        >
          More
        </button>
      </div>
      <div className='Ingrediant__item-box'>
        <div className='Ingrediant__item'>Meat</div>
        <button
          className='Ingrediant-btn__less'
          disabled={meatCount.length === 0}
          onClick={() => {
            deleteIngrediant('Meat', meatCount.length)
          }}
        >
          Less
        </button>
        <button
          className='Ingrediant-btn__more'
          onClick={() => {
            setMeatCount([...meatCount, `Entry ${meatCount.length}`])
          }}
        >
          More
        </button>
      </div>
      {flag ? (
        <Link to='/signin'>
          <button
            className='BuildBurger__Order-btn'
            disabled={
              !(
                lettuceCount.length > 0 ||
                baconCount.length > 0 ||
                cheeseCount.length > 0 ||
                meatCount.length > 0
              )
            }
            onClick={() => {
              onOpenModal()
            }}
          >
            SIGN UP TO ORDER
          </button>
        </Link>
      ) : (
        <button
          className='BuildBurger__Order-btn'
          disabled={
            !(
              lettuceCount.length > 0 ||
              baconCount.length > 0 ||
              cheeseCount.length > 0 ||
              meatCount.length > 0
            )
          }
          onClick={() => {
            onOpenModal()
          }}
        >
          ORDER
        </button>
      )}
      <div>
        <Modal open={open} onClose={onCloseModal} center className='modal__Size'>
          <h2>Your Order Summary:</h2>
          <ul>
            <li className='item'>Lettuce: {lettuceCount.length}</li>
            <li className='item'>Bacon: {baconCount.length}</li>
            <li className='item'>Cheese: {cheeseCount.length}</li>
            <li className='item'>Meat: {meatCount.length}</li>
          </ul>
          <h2>Total Price: ${totalAmount.toFixed(2)}</h2>
          <p>Continue to Checkout?</p>
          <div className='confirmation__box'>
            <p className='confirmation__cancel' onClick={onCloseModal}>
              Cancel
            </p>
            <Link to='checkout'>
              <p className='confirmation__done'>Continue</p>
            </Link>
          </div>
        </Modal>
      </div>
    </div>
  )
}

BuildBurger.propTypes = {
  deleteIngrediant: PropTypes.func
}
