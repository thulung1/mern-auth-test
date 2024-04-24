const express = require('express');
const { registerUser, loginUser, logoutUser, refetchProfile } = require('../controllers/user.controllers')

const router = express.Router();

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/logout', logoutUser)
router.get('/profile', refetchProfile)

module.exports = router