// // routes/menuItemRoutes.js
// const express = require('express');
// const router = express.Router();
// const menuItemController = require('../controllers/menuItemController');

// router.post('/menu-items', menuItemController.createMenuItem);

// module.exports = router;



const express = require('express');
const router = express.Router();
const menuItemController = require('../controllers/menuItemController');

router.post('/menu-items', menuItemController.createMenuItem);
router.get('/menu-items', menuItemController.getMenuItems);
router.delete('/menu-items/:id', menuItemController.deleteMenuItem);
router.put('/menu-items/:id', menuItemController.updateMenuItem);

module.exports = router;