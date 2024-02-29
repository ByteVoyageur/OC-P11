// FormEditName component
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserName } from '../../redux/userActions' // import the action creator
import axios from 'axios' // import axios

function FormEditName() {
  const dispatch = useDispatch()
  const userName = useSelector((state) => state.user.userName) // get current userName from Redux state
  const token = useSelector((state) => state.user.token?.token) // get token from Redux state
  const [newUserName, setNewUserName] = useState(userName) // initialize newUserName with current userName
  const [isEmpty, setIsEmpty] = useState(false) // initialize isEmpty with false
  const [isSuccess, setIsSuccess] = useState(false) // initialize isSuccess with false
  const isLoggedIn = !!token // initialize isLoggedIn based on whether token exists

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (newUserName === '') {
      setIsEmpty(true) // set isEmpty to true if newUserName is empty
      return
    }
    try {
      const response = await axios.put(
        'http://localhost:3001/api/v1/user/profile',
        { userName: newUserName },
        { headers: { Authorization: `Bearer ${token}` } }
      ) // send PUT request to API
      if (response.status === 200) {
        dispatch(setUserName(newUserName)) // dispatch action to update userName
        setIsSuccess(true) // set isSuccess to true if update is successful
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className='sign-in-content'>
      {!isLoggedIn && <p style={{ color: 'red' }}>Please log in first.</p>}
      <div className='form-edit-name-title'>
        <h2>My user name is: {userName}</h2>
        <h3>Change user name to:</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='input-wrapper'>
          <label htmlFor='newUsername'>change user name to: </label>
          <input
            id='newUsername'
            value={newUserName}
            onChange={(e) => {
              setNewUserName(e.target.value)
              setIsEmpty(false) // reset isEmpty when input changes
              setIsSuccess(false) // reset isSuccess when input changes
            }} // update local state when input changes
            className='input-wrapper input'
          />
          {isEmpty && <p style={{ color: 'red' }}>Input cannot be empty.</p>}
          {isSuccess && (
            <p style={{ color: 'red' }}>Username updated successfully.</p>
          )}
        </div>
        <button type='submit' className='sign-in-button'>
          change
        </button>
      </form>
    </section>
  )
}
export default FormEditName
