const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const tokenValidation = require('../middleware/tokenValidation')

router.post('/signup', userController.createUser)

router.post('/login', userController.loginUser)

router.post(
  '/profile',
  tokenValidation.validateToken,
  userController.getUserProfile
)

// add a new route to handle PUT requests to /profile
router.get(
  '/profile',
  tokenValidation.validateToken, // ensure the token is valid
  userController.getUserProfile // use the getUserProfile controller
)

router.put(
  '/profile',
  tokenValidation.validateToken,
  userController.updateUserProfile
)

module.exports = router
