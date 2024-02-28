// userReducer.js
import { LOG_IN, LOG_OUT } from './userActions'

const initialState = {
  isLoggedIn: false,
  token: null,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload,
      }
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
      }
    default:
      return state
  }
}
