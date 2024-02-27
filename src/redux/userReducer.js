// userReducer.js
import { LOG_IN, LOG_OUT } from './userActions'

const initialState = {
  isLoggedIn: false,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isLoggedIn: true }
    case LOG_OUT:
      return { ...state, isLoggedIn: false }
    default:
      return state
  }
}
