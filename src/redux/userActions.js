// userActions.js

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

export const logIn = (token, firstName) => ({
  type: LOG_IN,
  payload: {
    token,
    firstName,
  },
})

export const logOut = () => ({
  type: LOG_OUT,
})
