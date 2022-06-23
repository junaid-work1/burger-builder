import React, { useContext } from 'react'
import './order.css'
import { appData } from '../../App'
export default function Order() {
  const { totalAmount, orderList } = useContext(appData)
  return (
    <>
      {orderList.map(item => {
        return (
          <>
            {' '}
            <div className='Order__main'>
              <p>
                Ingredients: <span className='order__label'>bacon ({item.baconCount.length})</span>
                <span className='order__label'>cheese ({item.cheeseCount.length})</span>
                <span className='order__label'>lettuce ({item.lettuceCount.length})</span>
                <span className='order__label'>meat ({item.meatCount.length})</span>
              </p>
              <p>
                <strong order__amount>$: {totalAmount}</strong>
              </p>
            </div>
          </>
        )
      })}
      {orderList.length === 0 && <h3 className='order__amount'>No Orders</h3>}
    </>
  )
}
