// const express = require('express');
// const router = express.Router();
// const driverController = require('../controllers/driverController');

// router.post('/login', driverController.login);

// module.exports = router;





const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');
const  {authenticateDriver}  = require('../middleware/authenticateJWT');

router.post('/login', driverController.login);
router.get('/me', authenticateDriver, driverController.getDriverData);
router.get('/driver/status', authenticateDriver, driverController.getDriverStatus);

module.exports = router;