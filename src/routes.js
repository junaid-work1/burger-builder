import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'

import Checkout from 'pages/checkout/Checkout'
import ContactForm from 'pages/contactForm/ContactForm'
import Header from 'components/header/Header.jsx'
import Home from 'pages/home/Home'
import Order from 'pages/order/Order'
import SignIn from 'pages/authentication/login/SignIn'

const rout = [
  { path: '/', element: <Home /> },
  { path: 'signin', element: <SignIn /> },
  { path: 'contactform', element: <ContactForm /> },
  { path: 'checkout', element: <Checkout /> },
  { path: 'order', element: <Order /> }
]
const AllRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {rout.map(item => (
            <Route path={item.path} element={item.element} key={item.path} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AllRoutes
