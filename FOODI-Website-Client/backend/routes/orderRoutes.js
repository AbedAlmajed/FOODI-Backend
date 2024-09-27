// const express = require('express');
// const router = express.Router();
// const { getUserOrders, updateOrderStatus } = require('../controllers/orderController');
// const { authenticateUser } = require('../middleware/authenticateJWT');

// // Get user orders
// router.get('/orders', authenticateUser, getUserOrders);

// // Update order status (admin only)
// // router.put('/orders/:orderId/status', authenticateUser, updateOrderStatus);

// module.exports = router;





// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const { getUserOrders } = require('../controllers/orderController');
const { authenticateUser } = require('../middleware/authenticateJWT');

router.get('/orders', authenticateUser, getUserOrders);

module.exports = router;