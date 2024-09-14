



const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
  quantity: { type: Number, required: true, min: 1 }
});

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [cartItemSchema],
  total: { type: Number, default: 0 }
});

// Method to calculate and update the total
cartSchema.methods.calculateTotal = async function() {
  await this.populate('items.menuItem');
  this.total = this.items.reduce((sum, item) => {
    return sum + (item.menuItem.price * item.quantity);
  }, 0);
};

// Pre-save hook to ensure total is always calculated before saving
cartSchema.pre('save', async function(next) {
  await this.calculateTotal();
  next();
});

module.exports = mongoose.model('Cart', cartSchema);