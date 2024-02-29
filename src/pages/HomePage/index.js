import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import getToken from '../../hooks/getToken'
import Navbar from '../../components/Navbar'
import Main from '../../components/Main'
import Footer from '../../components/Footer'
import './style.css'
import { logOut } from '../../redux/userActions'
import useFetchUserProfile from '../../hooks/useFetchUserProfile'

const HomePage = () => {
  const dispatch = useDispatch()
  const { isLoggedIn, firstName } = useSelector((state) => state.user) // get isLoggedIn and firstName from Redux state
  useFetchUserProfile() // call the custom hook to fetch user profile

  const handleSignOut = () => {
    dispatch(logOut()) // use action creator to log out
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
