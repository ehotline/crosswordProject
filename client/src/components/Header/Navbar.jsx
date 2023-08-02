import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/crosswords'>Кроссворды</Link>
        <Link to='/info'>О сайте</Link>
        <button>Войти</button>
    </div>
  )
}

export default Navbar