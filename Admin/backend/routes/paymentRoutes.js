// // routes/paymentRoutes.js
// const express = require('express');
// const router = express.Router();
// const paymentController = require('../controllers/paymentController');

// router.get('/', paymentController.getAllPayments);
// router.get('/:id', paymentController.getPaymentById);

// module.exports = router;


///////////////////////////////////////////////////////////work correct////////////////////

// // routes/paymentRoutes.js
// const express = require('express');
// const router = express.Router();
// const paymentController = require('../controllers/paymentController');

// router.get('/', paymentController.getAllPayments);
// router.get('/:id', paymentController.getPaymentById);
// router.put('/:id/complete', paymentController.updatePaymentStatus);
// router.delete('/:id', paymentController.deletePayment);

// module.exports = router;





///////////////////goooooooooooooooooooooooooooooooooooooood//////



// // routes/paymentRoutes.js
// const express = require('express');
// const router = express.Router();
// const paymentController = require('../controllers/paymentController');

// router.get('/', paymentController.getAllPayments);
// router.get('/available-drivers', paymentController.getAvailableDrivers);
// router.get('/:id', paymentController.getPaymentById);
// router.put('/:id/complete', paymentController.updatePaymentStatus);
// router.delete('/:id', paymentController.deletePayment);
// router.post('/assign-driver', paymentController.assignDriver);

// module.exports = router;






////////////////////



// routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.get('/', paymentController.getAllPayments);
router.get('/available-drivers', paymentController.getAvailableDrivers);
router.get('/:id', paymentController.getPaymentById);
router.put('/:id/complete', paymentController.updatePaymentStatus);
router.delete('/:id', paymentController.deletePayment);
router.post('/assign-driver', paymentController.assignDriver);
router.post('/complete-delivery', paymentController.completeDelivery);

module.exports = router;