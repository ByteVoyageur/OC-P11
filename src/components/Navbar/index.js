// Navbar component
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ isLoggedIn, onSignOut, firstName }) {
  const name = typeof firstName === 'string' ? firstName : ''

  console.log('after this is it string ？', firstName)
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
          <>
            <span>Welcome, {name}</span>
            <a className='main-nav-item' onClick={onSignOut}>
              <i className='fa fa-user-circle'></i>
              Sign Out
            </a>
          </>
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
