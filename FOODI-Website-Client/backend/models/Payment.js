// const mongoose = require('mongoose');

// const PaymentSchema = new mongoose.Schema({
//   stripePaymentIntentId: {
//     type: String,
//     required: true,
//   },
//   amount: {
//     type: Number,
//     required: true,
//   },
//   deliveryInfo: {
//     name: String,
//     email: String,
//     address: String,
//     city: String,
//     state: String,
//     zipCode: String,
//   },
//   orderSummary: {
//     totalPrice: Number,
//     itemCount: Number,
//     items: [{
//       name: String,
//       quantity: Number,
//       price: Number,
//     }],
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model('Payment', PaymentSchema);




///////////////////////////////////////////////work /////////////////////////////



// // models/Payment.js
// const mongoose = require('mongoose');

// const PaymentSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   stripePaymentIntentId: {
//     type: String,
//     required: true,
//   },
//   amount: {
//     type: Number,
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ['pending', 'completed', 'failed'],
//     default: 'pending',
//   },
//   deliveryInfo: {
//     name: String,
//     email: String,
//     address: String,
//     city: String,
//     state: String,
//     zipCode: String,
//   },
//   orderSummary: {
//     totalPrice: Number,
//     itemCount: Number,
//     items: [{
//       name: String,
//       quantity: Number,
//       price: Number,
//     }],
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model('Payment', PaymentSchema);

/////////////////




// models/Payment.js
const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  stripePaymentIntentId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
  deliveryInfo: {
    name: String,
    email: String,
    address: String,
    city: String,
    state: String,
    zipCode: String,
  },
  orderSummary: {
    totalPrice: Number,
    itemCount: Number,
    items: [{
      name: String,
      quantity: Number,
      price: Number,
    }],
  },
  assignedDriver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Driver',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Payment', PaymentSchema);