import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const User = () => {
  const dispatch = useDispatch()

  const handleSignOut = () => {
    dispatch({ type: 'LOG_OUT' })
  }
  return (
    <>
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
          <Link className='main-nav-item' to='/user'>
            <i className='fa fa-user-circle'></i>
            Tony
          </Link>
          <Link className='main-nav-item' to='/' onClick={handleSignOut}>
            <i className='fa fa-sign-out'></i>
            Sign Out
          </Link>
        </div>
      </nav>
      <main className='main bg-dark'>
        <div class='header'>
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button class='edit-button'>Edit Name</button>
        </div>
        <h2 class='sr-only'>Accounts</h2>
        <section class='account'>
          <div class='account-content-wrapper'>
            <h3 class='account-title'>Argent Bank Checking (x8349)</h3>
            <p class='account-amount'>$2,082.79</p>
            <p class='account-amount-description'>Available Balance</p>
          </div>
          <div class='account-content-wrapper cta'>
            <button class='transaction-button'>View transactions</button>
          </div>
        </section>
        <section class='account'>
          <div class='account-content-wrapper'>
            <h3 class='account-title'>Argent Bank Savings (x6712)</h3>
            <p class='account-amount'>$10,928.42</p>
            <p class='account-amount-description'>Available Balance</p>
          </div>
          <div class='account-content-wrapper cta'>
            <button class='transaction-button'>View transactions</button>
          </div>
        </section>
        <section class='account'>
          <div class='account-content-wrapper'>
            <h3 class='account-title'>Argent Bank Credit Card (x8349)</h3>
            <p class='account-amount'>$184.30</p>
            <p class='account-amount-description'>Current Balance</p>
          </div>
          <div class='account-content-wrapper cta'>
            <button class='transaction-button'>View transactions</button>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <p className='footer-text'>Copyright 2020 Argent Bank</p>
      </footer>
    </>
  )
}

export default User
