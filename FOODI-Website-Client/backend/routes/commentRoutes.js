// // Route: routes/commentRoutes.js
// const express = require('express');
// const router = express.Router();
// const commentController = require('../controllers/commentController');
// const {authenticateJWT} = require('../middleware/authenticateJWT'); // Assuming you have auth middleware

// router.post('/comments', authenticateJWT, commentController.createComment);
// router.get('/comments/:menuItemId', commentController.getComments);

// module.exports = router;








// Route: routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { authenticateJWT } = require('../middleware/authenticateJWT');

router.post('/comments', authenticateJWT, commentController.createComment);
router.get('/comments/:menuItemId', commentController.getComments);
router.put('/comments/:id', authenticateJWT, commentController.updateComment);
router.delete('/comments/:id', authenticateJWT, commentController.deleteComment);

module.exports = router;