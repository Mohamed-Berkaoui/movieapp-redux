import React from 'react'
import { Link, useLocation } from 'react-router'

function Navbar() {
  const location = useLocation()
  return (
    <nav className='navbar'>
      <Link to="/" className='navbar-logo'>🎬 MoviesApp</Link>
      <ul className='navbar-links'>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/favorits" className={location.pathname === '/favorits' ? 'active' : ''}>Favourites</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar