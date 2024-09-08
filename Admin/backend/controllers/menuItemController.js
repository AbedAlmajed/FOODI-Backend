// controllers/menuItemController.js
const MenuItem = require('../models/MenuItem');

exports.createMenuItem = async (req, res) => {
  try {
    const { recipeName, category, price, recipeDetails, imageUrl } = req.body;
    const newMenuItem = new MenuItem({
      recipeName,
      category,
      price,
      recipeDetails,
      imageUrl
    });
    const savedMenuItem = await newMenuItem.save();
    res.status(201).json(savedMenuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
