// models/MenuItem.js
const mongoose = require('mongoose');

const foodSoonSchema = new mongoose.Schema({
  recipeName: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  recipeDetails: String,
  imageUrl: String
});

const MenuItem = mongoose.model('FoodSoon', foodSoonSchema);

module.exports = MenuItem;



