



// authRoutes.js
const express = require('express');
const router = express.Router();
const { login, authenticate, logout } = require('../controllers/authController');

router.post('/login', login);
router.get('/logout', logout);
router.get('/protected', authenticate, (req, res) => {
  res.json({ message: 'This is a protected route', admin: req.admin });
});

module.exports = router;