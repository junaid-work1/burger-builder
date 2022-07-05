import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import { AppData } from 'App'
import Input from 'components/elements/input/Input'
import './contact.css'

const ContactForm = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    street: '',
    zipCode: '',
    country: '',
    type: 'cheapest'
  })

  const inputList = [
    { value: contactInfo.name, name: 'name', placeholder: 'Your Name' },
    { value: contactInfo.email, name: 'email', placeholder: 'email' },
    { value: contactInfo.street, name: 'street', placeholder: 'street' },
    { value: contactInfo.zipCode, name: 'zipCode', placeholder: 'zipCode' },
    { value: contactInfo.country, name: 'country', placeholder: 'country' }
  ]
  const [show, setShow] = useState(true)

  const {
    lettuceCount,
    setLettuceCount,
    baconCount,
    setBaconCount,
    cheeseCount,
    setCheeseCount,
    meatCount,
    setMeatCount,
    orderList,
    totalAmount,
    setOrderList
  } = useContext(AppData)

  const handleChange = e => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value.trim()
    })
  }

  useEffect(() => {
    if (
      contactInfo.name !== '' &&
      contactInfo.street !== '' &&
      contactInfo.zipCode !== '' &&
      contactInfo.country !== '' &&
      contactInfo.email !== ''
    ) {
      setShow(false)
    }
  }, [
    contactInfo.name,
    contactInfo.street,
    contactInfo.zipCode,
    contactInfo.country,
    contactInfo.email
  ])

  return (
    <div className='contactData-main'>
      <h4>Enter your Contact Data</h4>
      <div className='contact-form-box'>
        {inputList?.map(item => {
          return (
            <div className='input-box' key={item.name}>
              <Input
                handleChange={handleChange}
                value={item.value}
                name={item.name}
                placeholder={item.placeholder}
              />
            </div>
          )
        })}

        <div className='input-box'>
          <select
            className='input-inputElement'
            name='type'
            value={contactInfo.type}
            onChange={handleChange}
          >
            <option value='fastest'>Fastest</option>
            <option value='cheapest'>Cheapest</option>
          </select>
        </div>
        <Link to='/order'>
          <button
            className='contactData-form-btn button-success'
            onClick={() => {
              setOrderList([
                ...orderList,
                {
                  lettuceCount,
                  meatCount,
                  baconCount,
                  cheeseCount,
                  totalAmount
                }
              ])
              setBaconCount([])
              setCheeseCount([])
              setLettuceCount([])
              setMeatCount([])
            }}
            disabled={show}
          >
            ORDER
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ContactForm
