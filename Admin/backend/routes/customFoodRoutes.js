const express = require('express');
const router = express.Router();
const customFoodController = require('../controllers/customFoodController');

router.get('/', customFoodController.getAllCustomFoods);
router.put('/toggle-approval/:id', customFoodController.toggleApproval);

module.exports = router;