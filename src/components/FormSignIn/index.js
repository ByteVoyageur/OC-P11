// FormSignIn.js
import React from 'react'

function FormSignIn({ email, setEmail, password, setPassword, handleSignIn }) {
  return (
    <form>
      <div className='input-wrapper'>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='input-wrapper'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='input-remember'>
        <input type='checkbox' id='remember-me' />
        <label htmlFor='remember-me'>Remember me</label>
      </div>
      <button
        type='submit'
        className='sign-in-button'
        onClick={(e) => {
          e.preventDefault()
          handleSignIn(e)
        }}
      >
        Sign In
      </button>
    </form>
  )
}

export default FormSignIn
