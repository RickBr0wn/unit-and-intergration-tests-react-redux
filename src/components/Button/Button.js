import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

const Button = ({ text, onClickFn }) => {
  return (
    <button
      test-attr='button-component'
      className='btn'
      onClick={() => (onClickFn ? onClickFn() : null)}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClickFn: PropTypes.func.isRequired
}

export default Button
