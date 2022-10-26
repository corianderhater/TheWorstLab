import React from 'react'
import './index.scss'
import { ButtonNew } from './ButtonNew'
import { Link } from 'react-router-dom'

const Navbar = () =>{
  return (

      <nav>
        <div className='navbar-item' >
          <Link to='/'>
            <button className='button button-1'>Collection</button>
          </Link>
        </div>

        <div className='navbar-item'>
          <Link to='/collections'>
            <button className='button button-1'>How its done</button>
          </Link>
        </div>

        <div className='navbar-item'>
          <Link to='/collections'>
            <button className='button button-1'>Gallery</button>
          </Link>
        </div>

        <div className='navbar-item'>
          <Link to='/collections'>
            <button className='button button-1'>Contact</button>
          </Link>
        </div>
      </nav>

  )
} 

export default Navbar