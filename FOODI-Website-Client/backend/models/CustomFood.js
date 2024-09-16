// const mongoose = require('mongoose');

// const customFoodSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   notes: {
//     type: String,
//   },
//   image: {
//     type: String,
//   },
//   isApproved: {
//     type: Boolean,
//     default: false,
//   },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
// }, {
//   timestamps: true,
// });

// const CustomFood = mongoose.model('CustomFood', customFoodSchema);

// module.exports = CustomFood;



// const mongoose = require('mongoose');

// const customFoodSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   notes: {
//     type: String,
//   },
//   image: {
//     type: String,
//   },
//   quantity: {
//     type: Number,
//     required: true,
//     min: 1,
//     default: 1,
//   },
//   isApproved: {
//     type: Boolean,
//     default: false,
//   },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
// }, {
//   timestamps: true,
// });

// const CustomFood = mongoose.model('CustomFood', customFoodSchema);

// module.exports = CustomFood;



// // models/CustomFood.js
// const mongoose = require('mongoose');

// const customFoodSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   notes: {
//     type: String,
//   },
//   image: {
//     type: String,
//   },
//   quantity: {
//     type: Number,
//     required: true,
//     min: 1,
//     default: 1,
//   },
//   isApproved: {
//     type: Boolean,
//     default: false,
//   },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
// }, {
//   timestamps: true,
// });

// const CustomFood = mongoose.model('CustomFood', customFoodSchema);

// module.exports = CustomFood;





// models/CustomFood.js
const mongoose = require('mongoose');

const customFoodSchema = new mongoose.Schema({
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
  quantity: {
    type: Number,
    required: true,
    min: 1,
    default: 1,
  },
  price: {
    type: Number,
    min: 0,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
}, {
  timestamps: true,
});

const CustomFood = mongoose.model('CustomFood', customFoodSchema);

module.exports = CustomFood;