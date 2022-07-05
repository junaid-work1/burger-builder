import React, { useState, createContext, useEffect } from 'react'

import './App.css'
import AllRoutes from 'routes'

export const AppData = createContext({})

function App() {
  const [flag, setFlag] = useState(true)
  const [lettuceCount, setLettuceCount] = useState([])
  const [baconCount, setBaconCount] = useState([])
  const [cheeseCount, setCheeseCount] = useState([])
  const [meatCount, setMeatCount] = useState([])
  const [totalAmount, setTotalAmount] = useState(0)
  const [orderList, setOrderList] = useState([])

  useEffect(() => {
    const sum =
      3 +
      lettuceCount.length * 0.5 +
      baconCount.length * 0.7 +
      cheeseCount.length * 0.4 +
      meatCount.length * 1.3
    setTotalAmount(sum)
  }, [lettuceCount, baconCount, cheeseCount, meatCount])

  return (
    <div className='App'>
      <AppData.Provider
        value={{
          flag,
          setFlag,
          cheeseCount,
          setCheeseCount,
          meatCount,
          setMeatCount,
          lettuceCount,
          setLettuceCount,
          baconCount,
          setBaconCount,
          totalAmount,
          orderList,
          setOrderList
        }}
      >
        <AllRoutes />
      </AppData.Provider>
    </div>
  )
}

export default App
