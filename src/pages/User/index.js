// User page
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/Navbar'
import FormEditName from '../../components/FormEditName'
import TransactionAccount from '../../components/TransactionAccount'
import Footer from '../../components/Footer'
import { logOut } from '../../redux/userActions'
import useFetchUserProfile from '../../hooks/useFetchUserProfile'
import { useNavigate } from 'react-router-dom'

const User = () => {
  const dispatch = useDispatch()
  const { isLoggedIn, firstName, lastName } = useSelector((state) => state.user)
  const [showForm, setShowForm] = useState(false)

  useFetchUserProfile()

  const Navigate = useNavigate()
  const handleSignOut = () => {
    dispatch(logOut(() => Navigate('/')))
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
            {firstName} {lastName}!
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
