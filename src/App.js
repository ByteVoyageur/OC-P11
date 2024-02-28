// App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import HomePage from './pages/HomePage'
import SignInPage from './pages/SignInPage'
import User from './pages/User'
import UserEdit from './pages/UserEdit'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/sign-in' element={<SignInPage />} />
          <Route path='/user' element={<User />} />
          <Route path='/edit-profile' element={<UserEdit />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
