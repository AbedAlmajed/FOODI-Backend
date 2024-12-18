// routes/driverRoutes.js
const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');

router.get('/', driverController.getAllDrivers);
router.put('/:id/toggle-approval', driverController.toggleApprovalStatus);

module.exports = router;
