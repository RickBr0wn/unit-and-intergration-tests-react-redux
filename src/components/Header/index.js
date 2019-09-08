import React from 'react'
import Logo from '../../assets/images/logo.png'
import './index.scss'

const Header = () => (
  <header test-attr='header-component'>
    <div className='wrap'>
      <div className='logo'>
        <img className='logo-img' src={Logo} alt='spinning React logo' />
      </div>
    </div>
  </header>
)

export default Header
