const express = require('express');
const router = express.Router();
const menuItemController = require('../controllers/foodSoonController');

router.get('/', menuItemController.getAllMenuItems);


module.exports = router;