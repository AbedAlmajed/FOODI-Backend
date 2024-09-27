// // In ./routes/DriveOrderRoutes.js
// const express = require('express');
// const router = express.Router();
// const driverOrderController = require('../controllers/DriverOrder');
// const { authenticateDriver } = require('../middleware/authenticateJWT');

// router.get('/driver/payments', authenticateDriver, driverOrderController.getDriverPayments);

// module.exports = router;



// In ./routes/DriveOrderRoutes.js
const express = require('express');
const router = express.Router();
const driverOrderController = require('../controllers/DriverOrder');
const { authenticateDriver } = require('../middleware/authenticateJWT');

router.get('/driver/payments', authenticateDriver, driverOrderController.getDriverPayments);
router.put('/driver/payment/:paymentId/status', authenticateDriver, driverOrderController.updatePaymentStatus);

module.exports = router;