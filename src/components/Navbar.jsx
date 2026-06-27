import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {

  return (
    <nav className='navbar'>
      <NavLink to="/" className='navbar-logo'>🎬 MoviesApp</NavLink>
      <ul className='navbar-links'>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/favorits" >Favourites</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar