// userActions.js

// define action types
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

// define action creators
export const logIn = () => ({
  type: LOG_IN,
})

export const logOut = () => ({
  type: LOG_OUT,
})
