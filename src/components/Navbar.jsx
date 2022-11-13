import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id="navbar" class="navbar">
        <div className='menuIcon'>
          <ul className='navbar-list'>
            <li><NavLink class="nav-link scrollto " to="/">Home</NavLink></li>
            <li><NavLink class="nav-link scrollto active" to="/about">About</NavLink></li>
            <li><NavLink class="nav-link scrollto active" to="/service">Services</NavLink></li>
            <li><NavLink class="nav-link scrollto active" to="/contact">Contact</NavLink></li>

          </ul>
          </div>
        </nav>
  )
}

export default Navbar
