import React, { useState, createContext, useEffect } from 'react'
import './App.css'
import Home from './pages/home/Home'
import Header from './components/header/Header.jsx'
import SignIn from './pages/authentication/login/SignIn'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checkout from './pages/checkout/Checkout'
import Order from './pages/order/Order'
import ContactForm from './pages/contactForm/ContactForm'

export const appData = createContext({})

function App() {
  const [flag, setFlag] = useState(true) // for header menu
  const [lettuceCount, setLettuceCount] = useState([])
  const [baconCount, setBaconCount] = useState([])
  const [cheeseCount, setCheeseCount] = useState([])
  const [meatCount, setMeatCount] = useState([])
  const [totalAmount, setTotalAmount] = useState(0) // state for total bill
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
      <BrowserRouter>
        <appData.Provider
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
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='signin' element={<SignIn />} />
            <Route path='contactform' element={<ContactForm />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='order' element={<Order />} />
          </Routes>
        </appData.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
