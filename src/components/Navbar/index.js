import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

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
            <div className='nav-to-user'>
              <FontAwesomeIcon icon={faUserCircle} />
              <Link className='nav-user-link' to='/user'>
                {name}
              </Link>
            </div>
            <button
              className='main-nav-item button-no-style'
              onClick={onSignOut}
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
              Sign Out
            </button>
          </div>
        ) : (
          <Link className='main-nav-item' to='/sign-in'>
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
