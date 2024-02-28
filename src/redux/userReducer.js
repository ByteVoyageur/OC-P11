// userReducer.js
import { LOG_IN, LOG_OUT, SET_FIRST_NAME } from './userActions'

const initialState = {
  isLoggedIn: false,
  token: null,
  firstName: '',
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        firstName: action.payload.firstName,
      }
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        firstName: '',
      }
    case SET_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload,
      }
    default:
      return state
  }
}
