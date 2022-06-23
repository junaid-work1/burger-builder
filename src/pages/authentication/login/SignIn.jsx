import React, { useState, useContext } from 'react'
import './signin.css'
import { appData } from '../../../App'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
  const { setFlag } = useContext(appData)
  const [data, setData] = useState([])
  const [change, setChange] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()

  const registerUser = () => {
    if (email !== '' && password !== '') {
      if (password.length > 5) {
        const result = data.some(element => {
          if (element.email === email) {
            return true
          }
          return false
        })
        if (result !== true) {
          setData(prevData => [...prevData, { email, password }])
          setEmail('')
          setPassword('')
          console.log('Account is Created!')
        }
        if (result) {
          console.log('User already Registered')
        }
      }
    }
  }

  const loginUser = () => {
    const user = { email, password }
    const result = data.some(element => {
      if (element.email === user.email && element.password === user.password) {
        setFlag(false)
        setEmail('')
        setPassword('')
        return true
      }
      return false
    })

    if (result) {
      nav('/')
    }
    if (!result) {
      console.log('User not founded')
    }
  }

  return (
    <div className='authentication__box'>
      <div className='form__box'>
        {change ? (
          <label className='Page__lebal'>Login Form</label>
        ) : (
          <label className='Page__lebal'>Registration Form</label>
        )}

        <label className='form__lebal'>Email</label>
        <input
          className='form__input'
          type='email'
          value={email}
          placeholder='E-mail Address'
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label className='form__lebal'>Password</label>
        <input
          className='form__input'
          type='password'
          value={password}
          placeholder='Password'
          onChange={e => setPassword(e.target.value)}
          required
        />
        {password.length <= 5 && password.length >= 1 && (
          <p className='pass__validation'>invalid password</p>
        )}
        <button
          className='btn'
          onClick={() => {
            if (change) {
              loginUser()
            } else {
              registerUser()
            }
          }}
        >
          SUBMIT
        </button>
        {change ? (
          <button className='btn' onClick={() => setChange(!change)}>
            REGISTER
          </button>
        ) : (
          <button className='btn' onClick={() => setChange(!change)}>
            SIGNIN
          </button>
        )}
      </div>
    </div>
  )
}
