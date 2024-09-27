



// models/Cart.js
const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
  quantity: { type: Number, required: true, min: 1 }
});

const customFoodItemSchema = new mongoose.Schema({
  customFood: { type: mongoose.Schema.Types.ObjectId, ref: 'CustomFood', required: true },
  quantity: { type: Number, required: true, min: 1 }
});

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [cartItemSchema],
  customItems: [customFoodItemSchema],
  total: { type: Number, default: 0 }
});

cartSchema.methods.calculateTotal = async function() {
  await this.populate('items.menuItem');
  await this.populate('customItems.customFood');
  
  const regularItemsTotal = this.items.reduce((sum, item) => {
    return sum + (item.menuItem.price * item.quantity);
  }, 0);
  
  const customItemsTotal = this.customItems.reduce((sum, item) => {
    return sum + (item.customFood.price * item.quantity);
  }, 0);
  
  this.total = regularItemsTotal + customItemsTotal;
};

cartSchema.pre('save', async function(next) {
  await this.calculateTotal();
  next();
});

module.exports = mongoose.model('Cart', cartSchema);