// userActions.js

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

export const logIn = (token) => ({
  type: LOG_IN,
  payload: token,
})

export const logOut = () => ({
  type: LOG_OUT,
})
