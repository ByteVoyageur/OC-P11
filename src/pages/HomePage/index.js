import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getToken from '../../hooks/getToken'
import Navbar from '../../components/Navbar'
import Main from '../../components/Main'
import Footer from '../../components/Footer'
import './style.css'
import { setFirstName, logOut } from '../../redux/userActions'

const HomePage = () => {
  const { isLoggedIn, firstName } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const token = getToken()

  useEffect(() => {
    if (isLoggedIn) {
      fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log(response.status) // Check the status of the response
          return response.json()
        })
        .then((data) => {
          console.log(data) // Check the data returned from the server
          if (data.body) {
            console.log('First Name:', data.body.firstName)
            dispatch(setFirstName(data.body.firstName))
          }
        })
        .catch((error) => {
          console.error(
            'There has been a problem with your fetch operation:',
            error
          )
        })
    }
  }, [isLoggedIn, token, dispatch]) // only run the effect if these values change

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
