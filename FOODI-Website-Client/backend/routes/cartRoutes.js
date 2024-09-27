


const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middleware/authenticateJWT');
const {
  addToCart,
  getCartItems,
  updateCartItem,
  removeCartItem,
  getCartCount,clearCart
} = require('../controllers/cartController');

router.post('/add', authenticateJWT, addToCart);
router.get('/', authenticateJWT, getCartItems);
router.post('/update', authenticateJWT, updateCartItem);
router.delete('/remove/:itemId', authenticateJWT, removeCartItem);
router.get('/count', authenticateJWT, getCartCount);
router.post('/clear', authenticateJWT, clearCart);
module.exports = router;