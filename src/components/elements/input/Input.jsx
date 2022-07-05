import React from 'react'

import PropTypes from 'prop-types'

const Input = ({ handleChange, value, name, placeholder }) => {
  return (
    <div>
      <input
        type='text'
        className='input-inputElement'
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default Input

Input.propTypes = {
  handleChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string
}
