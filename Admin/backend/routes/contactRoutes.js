

// contactRoutes.js
const express = require('express');
const { getContacts, respondContact, getMessageCount } = require('../controllers/contactController');
const router = express.Router();

router.get('/', getContacts);
router.put('/respond', respondContact);
router.get('/messages/count', getMessageCount);

module.exports = router;