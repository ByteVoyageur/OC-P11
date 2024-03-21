// userActions.js

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const SET_FIRST_NAME = 'SET_FIRST_NAME'
export const SET_LAST_NAME = 'SET_LAST_NAME'
export const SET_USER_NAME = 'SET_USER_NAME'

export const logIn = (token, firstName) => ({
  type: LOG_IN,
  payload: {
    token,
    firstName,
  },
})

export const setFirstName = (firstName) => ({
  type: SET_FIRST_NAME,
  payload: firstName,
})

export const setLastName = (lastName) => ({
  type: SET_LAST_NAME,
  payload: lastName,
})

export const setUserName = (userName) => ({
  type: SET_USER_NAME,
  payload: userName,
})

export const logOut = (callback) => {
  return (dispatch) => {
    localStorage.removeItem('token')
    dispatch({
      type: LOG_OUT,
    })
    callback?.()
  }
}
