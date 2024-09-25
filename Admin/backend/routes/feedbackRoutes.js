// routes/feedbackRoutes.js
const express = require('express');
const router = express.Router();
const { getAllFeedback, updateFeedbackStatus } = require('../controllers/feedbackController');

router.get('/', getAllFeedback);
router.put('/:id', updateFeedbackStatus);

module.exports = router;