// routes/menuItemRoutes.js
const express = require('express');
const router = express.Router();
const menuItemController = require('../controllers/menuItemController');

router.post('/menu-items', menuItemController.createMenuItem);

module.exports = router;