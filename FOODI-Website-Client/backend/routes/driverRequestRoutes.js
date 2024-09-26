const express = require('express');
const router = express.Router();
const driverRequestController = require('../controllers/driverRequestController');

router.post('/driver-requests', driverRequestController.createDriverRequest);

module.exports = router;