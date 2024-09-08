// models/MenuItem.js
const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  recipeName: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  recipeDetails: String,
  imageUrl: String
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;