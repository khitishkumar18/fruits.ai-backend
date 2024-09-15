// app/routes/userRoutes.js
const express = require('express');
const { check } = require('express-validator');
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

// Register a new user
router.post(
  '/register',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters long').isLength({ min: 6 })
  ],
  registerUser
);

// Login a user
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  loginUser
);

module.exports = router;
