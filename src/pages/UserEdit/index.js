import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getToken from '../../hooks/getToken'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { setFirstName, logOut } from '../../redux/userActions'

const UserEdit = () => {
  const { firstName, isLoggedIn } = useSelector((state) => state.user)
  const [newFirstName, setNewFirstName] = useState(firstName)
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleSignOut = () => {
    dispatch(logOut())
  }

  const handleFirstNameChange = (e) => {
    setNewFirstName(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: logics to submit new first name and password
    console.log('uplod new user name', newFirstName, password)
    // TODO: dispatch action to update the user name in the store
  }

  return (
    <div>
      <Navbar
        isLoggedIn={isLoggedIn}
        firstName={firstName}
        onSignOut={handleSignOut}
      />
      <h1>Edit User Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type='text'
            value={newFirstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type='submit'>Submit Changes</button>
      </form>
      <Footer />
    </div>
  )
}

export default UserEdit
