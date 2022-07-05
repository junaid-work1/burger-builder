import React from 'react'
import PropTypes from 'prop-types'

import './button.css'

const Button = ({ clickDecrease, clickIncrease, classNameLess, classNameMore, disable }) => {
  return (
    <div className='main-btn-box'>
      <button
        className={`${classNameLess}`}
        onClick={() => {
          clickDecrease()
        }}
        disabled={disable}
      >
        Less
      </button>
      <button
        className={`${classNameMore}`}
        onClick={() => {
          clickIncrease()
        }}
      >
        More
      </button>
    </div>
  )
}

export default Button

Button.propTypes = {
  clickDecrease: PropTypes.func,
  clickIncrease: PropTypes.func,
  classNameMore: PropTypes.string,
  classNameLess: PropTypes.string,
  disable: PropTypes.bool
}
