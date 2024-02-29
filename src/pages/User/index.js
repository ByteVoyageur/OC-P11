// User page
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/Navbar'
import FormEditName from '../../components/FormEditName'
import TransactionAccount from '../../components/TransactionAccount'
import Footer from '../../components/Footer'
import { logOut } from '../../redux/userActions'
import useFetchUserProfile from '../../hooks/useFetchUserProfile'

const User = () => {
  const dispatch = useDispatch()
  const { isLoggedIn, firstName } = useSelector((state) => state.user)
  const [showForm, setShowForm] = useState(false)

  useFetchUserProfile()

  const handleSignOut = () => {
    dispatch(logOut())
  }

  const handleEditButtonClick = () => {
    setShowForm(true)
  }

  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        firstName={firstName}
        onSignOut={handleSignOut}
      />
      <main className='main bg-dark'>
        <div className='header'>
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className='edit-button' onClick={handleEditButtonClick}>
            Edit Name
          </button>
          {showForm && <FormEditName />}
        </div>
        <TransactionAccount />
      </main>
      <Footer />
    </>
  )
}

export default User
