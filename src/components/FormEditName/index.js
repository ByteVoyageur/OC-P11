import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserName } from '../../redux/userActions' // import the action creator

function FormEditName() {
  const dispatch = useDispatch()
  const userName = useSelector((state) => state.user.userName) // access userName from Redux state
  const [newUserName, setNewUserName] = useState('') // local state for new username

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setUserName(newUserName)) // dispatch action to update userName
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
