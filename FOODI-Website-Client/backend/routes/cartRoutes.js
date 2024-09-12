// const express = require('express');
// const router = express.Router();
// const { protect } = require('../middleware/authenticateJWT');
// const {
//   addToCart,
//   getCartItems,
//   updateCartItem,
//   removeCartItem,
//   getCartCount
// } = require('../controllers/cartController');

// router.post('/add', protect, addToCart);
// router.get('/', protect, getCartItems);
// router.post('/update', protect, updateCartItem);
// router.delete('/remove/:itemId', protect, removeCartItem);
// router.get('/count', protect, getCartCount);

// module.exports = router;



// const express = require('express');
// const router = express.Router();
// const { authenticateJWT:protect } = require('../middleware/authenticateJWT');

// const {
//   addToCart,
//   getCartItems,
//   updateCartItem,
//   removeCartItem,
//   getCartCount,
// } = require('../controllers/cartController');

// router.post('/add', protect, addToCart);
// router.get('/', protect, getCartItems);
// router.post('/update', protect, updateCartItem);
// router.delete('/remove/:itemId', protect, removeCartItem);
// router.get('/count', protect, getCartCount);

// module.exports = router;



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