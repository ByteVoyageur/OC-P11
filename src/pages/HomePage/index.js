// Homepage component
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Main from '../../components/Main'
import Footer from '../../components/Footer'
import './style.css'
import { logOut } from '../../redux/userActions'
import useFetchUserProfile from '../../hooks/useFetchUserProfile'

const HomePage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoggedIn, firstName } = useSelector((state) => state.user) // get isLoggedIn and firstName from Redux state

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/') // redirect to Home page if not logged in
    }
  }, [isLoggedIn, navigate])

  useFetchUserProfile() // call the custom hook to fetch user profile

  const handleSignOut = () => {
    dispatch(logOut(() => navigate('/')))
  }

  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        firstName={firstName}
        onSignOut={handleSignOut}
      />
      <Main />
      <Footer />
    </>
  )
}

export default HomePage
