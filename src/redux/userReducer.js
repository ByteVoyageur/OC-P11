// userReducer.js
import { LOG_IN, LOG_OUT } from './userActions'

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
        token: action.payload,
        firstName: action.payload.firstName,
      }
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        firstName: '',
      }
    default:
      return state
  }
}
