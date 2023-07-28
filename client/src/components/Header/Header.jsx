import React from 'react'
import Navbar from '../Navbar'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>CrosswordsProject</div>
        <Navbar/>
    </div>
  )
}

export default Header