import React, { useState, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import { AppData } from 'App'

import 'react-toastify/dist/ReactToastify.css'
import './signin.css'

const SignIn = () => {
  const { setFlag } = useContext(AppData)
  const [data, setData] = useState([])
  const [change, setChange] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()
  const notify = message => toast(message)

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
          notify('Account Created')
        } else {
          notify('Already have account')
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
    } else {
      notify('Ivalid email or password')
    }
  }

  return (
    <div className='authentication-box'>
      <div className='form-box'>
        {change ? (
          <label className='page-lebal'>Login Form</label>
        ) : (
          <label className='page-lebal'>Registration Form</label>
        )}

        <label className='form-lebal'>Email</label>
        <input
          className='form-input'
          type='email'
          value={email}
          placeholder='E-mail Address'
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label className='form-lebal'>Password</label>
        <input
          className='form-input'
          type='password'
          value={password}
          placeholder='Password'
          onChange={e => setPassword(e.target.value)}
          required
        />
        {password.length <= 5 && password.length >= 1 && (
          <p className='pass-validation'>invalid password</p>
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
      <ToastContainer />
    </div>
  )
}

export default SignIn
