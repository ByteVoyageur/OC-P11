// HomePage component
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import getToken from '../../hooks/getToken'
import Navbar from '../../components/Navbar'
import Main from '../../components/Main'
import Footer from '../../components/Footer'
import './style.css'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const { isLoggedIn, firstName } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const token = getToken()
  const [userFirstName, setUserFirstName] = useState('')

  useEffect(() => {
    if (token) {
      fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((reponse) => reponse.json())
        .then((data) => {
          // if firstName is not null, set the userFirstName state to the value of firstName
          setUserFirstName(data.firstName)
        })
    }
  }, [token])
  const handleSignOut = () => {
    dispatch({ type: 'LOG_OUT' })
    setUserFirstName('') // when user logs out, set the userFirstName state to an empty string
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
