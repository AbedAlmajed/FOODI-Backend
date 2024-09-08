
const express = require('express');
const { getUsers, toggleUserStatus, getActiveUserCount } = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers);
router.put('/toggle-status/:userId', toggleUserStatus);
router.get('/count', getActiveUserCount);

module.exports = router;