import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/crosswords'>Кроссворды</Link>
        <Link to='/info'>О сайте</Link>
        <button>Log In</button>
    </div>
  )
}

export default Navbar