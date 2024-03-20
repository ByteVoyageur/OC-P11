import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.user)

  return isLoggedIn ? children : <Navigate to='/sign-in' replace />
}

export default RequireAuth
