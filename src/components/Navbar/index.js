// Navbar component
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ isLoggedIn, onSignOut, firstName }) {
  const name = typeof firstName === 'string' ? firstName : ''

  console.log('onSignOut function:', onSignOut)

  return (
    <nav className='main-nav'>
      <Link className='main-nav-logo' to='/'>
        <img
          className='main-nav-logo-image'
          src='/argentBankLogo.png'
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      <div>
        {isLoggedIn ? (
          <div className='nav-to'>
            <Link className='nav-user-link' to='/user'>
              {name}
            </Link>
            <button
              className='main-nav-item button-no-style'
              onClick={onSignOut}
            >
              <i className='fa fa-user-circle'></i>
              Sign Out
            </button>
          </div>
        ) : (
          <Link className='main-nav-item' to='/sign-in'>
            <i className='fa fa-user-circle'></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
