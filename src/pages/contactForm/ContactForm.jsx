import React, { useState, useEffect, useContext } from 'react'
import './contact.css'
import { appData } from '../../App'
import { Link } from 'react-router-dom'
export default function ContactForm() {
  const [name, setName] = useState('')
  const [street, setStreet] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [country, setCountry] = useState('')
  const [email, setEmail] = useState('')
  const [type, setType] = useState('cheapest')
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
  } = useContext(appData)
  useEffect(() => {
    if (name !== '' && street !== '' && zipCode !== '' && country !== '' && email !== '') {
      setShow(false)
    }
  }, [name, street, zipCode, country, email])

  const ContactFormData = () => {
    const data = { name, street, zipCode, country, email, type }
    console.log(data)
  }
  return (
    <div className='ContactData__main'>
      <h4>Enter your Contact Data</h4>
      <div className='Contact-form__box'>
        <div className='Input__box'>
          <label className='Input__Label'></label>
          <input
            type='text'
            className='Input__InputElement'
            placeholder='Your Name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className='Input__box'>
          <label className='Input__Label'></label>
          <input
            type='text'
            className='Input__InputElement'
            placeholder='Street'
            value={street}
            onChange={e => setStreet(e.target.value)}
          />
        </div>
        <div className='Input__box'>
          <label className='Input__Label'></label>
          <input
            type='text'
            className='Input__InputElement'
            placeholder='Zip Code'
            value={zipCode}
            onChange={e => setZipCode(e.target.value)}
          />
          {zipCode.length <= 5 && zipCode.length > 0 && (
            <p className='error__message'>Please enter a valid Zip Code</p>
          )}
        </div>
        <div className='Input__box'>
          <label className='Input__Label'></label>
          <input
            type='text'
            className='Input__InputElement'
            placeholder='Country'
            value={country}
            onChange={e => setCountry(e.target.value)}
          />
        </div>
        <div className='Input__box'>
          <label className='Input__Label'></label>
          <input
            type='email'
            className='Input__InputElement'
            placeholder='E-mail'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='Input__box'>
          <label className='Input__Label'></label>
          <select
            className='Input__InputElement'
            value={type}
            onChange={e => setType(e.target.value)}
          >
            <option value='fastest'>Fastest</option>
            <option value='cheapest'>Cheapest</option>
          </select>
        </div>
        <Link to='/order'>
          <button
            className='ContactData__form__btn Button__Success'
            onClick={() => {
              ContactFormData()
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
