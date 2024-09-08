// routes/contactRoutes.js
const express = require('express');
const { createContactMessage } = require('../controllers/contactController');

const router = express.Router();

// Route for creating a new contact message
router.post('/contact', createContactMessage);

module.exports = router;
