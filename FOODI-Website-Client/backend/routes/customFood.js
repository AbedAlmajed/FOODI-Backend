// // routes/customFood.js
// const express = require('express');
// const router = express.Router();
// const customFoodController = require('../controllers/customFoodController');

// router.post('/custom-food', customFoodController.createCustomFood);

// module.exports = router;



const express = require('express');
const router = express.Router();
const customFoodController = require('../controllers/customFoodController');
const { authenticateJWT } = require('../middleware/authenticateJWT');

router.post('/custom-food', authenticateJWT, customFoodController.createCustomFood);

module.exports = router;