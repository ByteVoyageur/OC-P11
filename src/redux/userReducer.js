// userReducer.js
import {
  LOG_IN,
  LOG_OUT,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_USER_NAME,
} from './userActions'

const initialState = {
  isLoggedIn: false,
  token: null,
  firstName: '',
  lastName: '',
  userName: '',
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
        lastName: '',
        userName: '',
      }
    case SET_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload,
      }
    case SET_LAST_NAME:
      return {
        ...state,
        lastName: action.payload,
      }
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.payload,
      }
    default:
      return state
  }
}
