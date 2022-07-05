import React, { useContext } from 'react'

import { AppData } from 'App'
import './order.css'

const Order = () => {
  const { orderList } = useContext(AppData)

  return (
    <div>
      {orderList.map((item, index) => {
        return (
          <div className='order-main' key={index.toString() + 1}>
            <p>
              Ingredients: <span className='order-label'>bacon ({item.baconCount.length})</span>
              <span className='order-label'>cheese ({item.cheeseCount.length})</span>
              <span className='order-label'>lettuce ({item.lettuceCount.length})</span>
              <span className='order-label'>meat ({item.meatCount.length})</span>
            </p>
            <p>
              <strong className='order-amount'>$: {item.totalAmount.toFixed()}</strong>
            </p>
          </div>
        )
      })}
      {orderList.length === 0 && <h3 className='order-amount'>No Orders</h3>}
    </div>
  )
}

export default Order
