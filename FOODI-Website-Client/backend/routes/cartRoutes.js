


const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middleware/authenticateJWT');
const {
  addToCart,
  getCartItems,
  updateCartItem,
  removeCartItem,
  getCartCount,
} = require('../controllers/cartController');

router.post('/add', authenticateJWT, addToCart);
router.get('/', authenticateJWT, getCartItems);
router.post('/update', authenticateJWT, updateCartItem);
router.delete('/remove/:itemId', authenticateJWT, removeCartItem);
router.get('/count', authenticateJWT, getCartCount);

module.exports = router;