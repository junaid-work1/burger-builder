import React, { useState, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { AppData } from 'App'
import logo from 'assets/images/burger-logo.png'

import './header.css'

const Header = () => {
  const { flag, setFlag } = useContext(AppData)
  const [mobileNavBar, setMobileNavBar] = useState(false)

  const loginElement = (
    <li className='item'>
      <Link to='signin'>Login</Link>
    </li>
  )

  const logoutEement = (
    <>
      <li className='item'>
        <Link to='order'>Orders</Link>
      </li>
      <li className='item'>
        <Link
          to='/'
          onClick={() => {
            setFlag(true)
          }}
        >
          Logout
        </Link>
      </li>
    </>
  )

  const loginElementForMobile = (
    <li className='mobile-item'>
      <Link to='signin'>Login</Link>
    </li>
  )

  const logoutElementForMobile = (
    <>
      <li className='mobile-item'>
        <Link to='order'>Orders</Link>
      </li>
      <li className='mobile-item'>
        <Link
          to='/'
          onClick={() => {
            setFlag(true)
          }}
        >
          Logout
        </Link>
      </li>
    </>
  )

  const mobileNavBarToggle = () => {
    setMobileNavBar(!mobileNavBar)
  }

  return (
    <div className='main-header'>
      <div className='header-left'>
        <img src={logo} alt='burger-logo' />
      </div>
      <div className='header-right topnav responsive' id='myTopnav'>
        <div className='header-list'>
          <ul className='list-item'>
            <li className='item'>
              <Link to='/'>Buger Builder</Link>
            </li>
            {flag ? loginElement : logoutEement}
            <a href='#' className='icon' onClick={mobileNavBarToggle}>
              <i className='fa fa-bars' />
            </a>
          </ul>

          {!mobileNavBar && (
            <ul className='mobile-navbar'>
              <li className='mobile-item'>
                <img src={logo} alt='burger-logo' />
              </li>
              <li className='mobile-item'>
                <Link to='/'>Buger Builder</Link>
              </li>
              {flag ? loginElementForMobile : logoutElementForMobile}
            </ul>
          )}
        </div>
      </div>

      <Outlet />
    </div>
  )
}

export default Header
