// // routes/feedbackRoutes.js
// const express = require('express');
// const router = express.Router();
// const feedbackController = require('../controllers/feedbackController');

// router.post('/', feedbackController.createFeedback);
// router.get('/', feedbackController.getAllFeedback);

// module.exports = router;



// // routes/feedbackRoutes.js
// const express = require('express');
// const router = express.Router();
// const feedbackController = require('../controllers/feedbackController');
// const { authenticateJWT } = require('../middleware/authenticateJWT'); // Assuming you have authentication middleware

// // User routes
// router.post('/', authenticateJWT, feedbackController.createFeedback);
// router.get('/approved', feedbackController.getApprovedFeedback);
// router.get('/user', authenticateJWT, feedbackController.getUserFeedback);

// // // Admin routes
// // router.get('/all', authenticateAdmin, feedbackController.getAllFeedback);
// // router.patch('/approve/:feedbackId', authenticateAdmin, feedbackController.approveFeedback);

// module.exports = router;





const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');
const { authenticateJWT } = require('../middleware/authenticateJWT');

router.post('/', authenticateJWT, feedbackController.createFeedback);
router.put('/', authenticateJWT, feedbackController.updateFeedback);
router.get('/', feedbackController.getAllApprovedFeedback);
router.get('/user', authenticateJWT, feedbackController.getUserFeedback);

module.exports = router;