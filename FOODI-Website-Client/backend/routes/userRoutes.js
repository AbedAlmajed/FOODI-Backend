

// userRoutes.js

const express = require('express');
const { registerUser, googleAuth, loginUser, getUserProfile, updateUserProfile } = require('../controllers/userController');
const passport = require('passport');
const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/login' }),
  googleAuth
);

// Protected routes
router.get('/profile/:userId', authenticateJWT, getUserProfile);
router.put('/profile/:userId', authenticateJWT, updateUserProfile);

module.exports = router;



