import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserName } from '../../redux/userActions' // import the action creator
import axios from 'axios' // import axios

function FormEditName() {
  const dispatch = useDispatch()
  const userName = useSelector((state) => state.user.userName) // get current userName from Redux state
  const token = useSelector((state) => state.user.token?.token) // get token from Redux state
  const [newUserName, setNewUserName] = useState(userName) // initialize newUserName with current userName

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(
        'http://localhost:3001/api/v1/user/profile',
        { userName: newUserName },
        { headers: { Authorization: `Bearer ${token}` } }
      ) // send PUT request to API
      if (response.status === 200) {
        dispatch(setUserName(newUserName)) // dispatch action to update userName
      }
    } catch (error) {
      console.error(error)
    }
  }

  console.log('formEditName组件渲染前把userName显示在这里:', userName)
  return (
    <form onSubmit={handleSubmit}>
      <div className='input-wrapper'>
        <label htmlFor='username'>my user name: {userName}</label>{' '}
        {/* display current userName */}
      </div>
      <div className='input-wrapper'>
        <label htmlFor='newUsername'>change user name to </label>
        <input
          id='newUsername'
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)} // update local state when input changes
        />
      </div>
      <button type='submit'>change</button>
    </form>
  )
}

export default FormEditName
