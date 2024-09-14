




const mongoose = require('mongoose');

const customFoodSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
    image: {
      type: String,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
  },
  {
    timestamps: true,
  }
);

const CustomFood = mongoose.model('CustomFood', customFoodSchema);

module.exports = CustomFood;