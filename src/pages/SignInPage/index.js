// SignInPage component
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logIn as logInAction } from '../../redux/userActions'
import FormSignIn from '../../components/FormSignIn'
import useAPILogIn from '../../hooks/useAPILogIn'
import './style.css'

const SignInPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.user) // access the user state
  const navigate = useNavigate()
  const { logIn: apiLogIn } = useAPILogIn()

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/user')
    }
  }, [isLoggedIn, navigate])

  const handleSignIn = async (event) => {
    event.preventDefault()
    try {
      const data = await apiLogIn(email, password)
      if (data.status === 200) {
        // Login successful
        const { token } = data.body
        localStorage.setItem('token', token)
        dispatch(logInAction(token))
        navigate('/user')
      } else {
        // Login failed
        console.log('Login failed:', data.message)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <nav className='main-nav'>
        <a className='main-nav-logo' href='/'>
          <img
            className='main-nav-logo-image'
            src='/argentBankLogo.png'
            alt='Argent Bank Logo'
          />
          <h1 className='sr-only'>Argent Bank</h1>
        </a>
        <div>
          <a className='main-nav-item' href='/sign-in'>
            <i className='fa fa-user-circle'></i>
            Sign In
          </a>
        </div>
      </nav>
      <main className='main bg-dark'>
        <section className='sign-in-content'>
          <i className='fa fa-user-circle sign-in-icon'></i>
          <h1>Sign In</h1>
          <FormSignIn
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSignIn={handleSignIn}
          />
        </section>
      </main>
      <footer className='footer'>
        <p className='footer-text'>Copyright 2020 Argent Bank</p>
      </footer>
    </>
  )
}

export default SignInPage
