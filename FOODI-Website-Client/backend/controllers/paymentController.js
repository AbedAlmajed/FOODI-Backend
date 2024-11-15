// const dotenv = require('dotenv');
// dotenv.config();
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const Payment = require('../models/Payment');

// exports.processPayment = async (req, res) => {
//   const { paymentMethodId, amount, deliveryInfo, orderSummary } = req.body;

//   try {
//     // Create a PaymentIntent with the order amount and currency
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: 'usd',
//       payment_method: paymentMethodId,
//       confirm: true,
//     });

//     // Save payment info to database
//     const payment = new Payment({
//       stripePaymentIntentId: paymentIntent.id,
//       amount: amount / 100, // Convert back to dollars
//       deliveryInfo,
//       orderSummary,
//     });

//     await payment.save();

//     res.json({ success: true, paymentIntent });
//   } catch (error) {
//     console.error('Error processing payment:', error);
//     res.status(500).json({ success: false, error: error.message });
//   }
// };











// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const Payment = require('../models/Payment');

// exports.processPayment = async (req, res) => {
//   const { paymentMethodId, amount, deliveryInfo, orderSummary } = req.body;

//   console.log('Received payment request:', { paymentMethodId, amount, deliveryInfo, orderSummary });

//   try {
//     // Create a PaymentIntent with the order amount and currency
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: 'usd',
//       payment_method: paymentMethodId,
//       confirm: true,
//     });

//     console.log('Payment intent created:', paymentIntent.id);

//     // Save payment info to database
//     const payment = new Payment({
//       stripePaymentIntentId: paymentIntent.id,
//       amount: amount / 100, // Convert back to dollars
//       deliveryInfo,
//       orderSummary,
//     });

//     await payment.save();
//     console.log('Payment saved to database:', payment._id);

//     res.json({ success: true, paymentIntent });
//   } catch (error) {
//     console.error('Error processing payment:', error);
//     res.status(500).json({ success: false, error: error.message });
//   }
// };








// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const Payment = require('../models/Payment');

// exports.processPayment = async (req, res) => {
//   const { paymentMethodId, amount, deliveryInfo, orderSummary } = req.body;

//   console.log('Received payment request:', { paymentMethodId, amount, deliveryInfo, orderSummary });

//   try {
//     // Create a PaymentIntent with the order amount and currency
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: 'usd',
//       payment_method: paymentMethodId,
//       confirm: true,
//       return_url: 'http://localhost:3000/payment-success', // Add this line
//       automatic_payment_methods: {
//         enabled: true,
//         allow_redirects: 'always'
//       }
//     });

//     console.log('Payment intent created:', paymentIntent.id);

//     // Save payment info to database
//     const payment = new Payment({
//       stripePaymentIntentId: paymentIntent.id,
//       amount: amount / 100, // Convert back to dollars
//       deliveryInfo,
//       orderSummary,
//     });

//     await payment.save();
//     console.log('Payment saved to database:', payment._id);

//     res.json({ success: true, paymentIntent });
//   } catch (error) {
//     console.error('Error processing payment:', error);
//     console.error('Error stack:', error.stack);
//     res.status(500).json({ 
//       success: false, 
//       error: error.message, 
//       stack: process.env.NODE_ENV === 'development' ? error.stack : undefined 
//     });
//   }
// };



//////////////////////////////////////////////////final version///////////////////////////


// controllers/paymentController.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Payment = require('../models/Payment');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.processPayment = async (req, res) => {
  const { paymentMethodId, amount, deliveryInfo, orderSummary } = req.body;
  const token = req.headers.authorization.split(' ')[1];
  
  try {
    // Decode the JWT token to get the user ID
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.id;

    console.log('Received payment request:', { paymentMethodId, amount, deliveryInfo, orderSummary, userId });

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true,
      return_url: 'http://localhost:3000/payment-success',
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'always'
      }
    });

    console.log('Payment intent created:', paymentIntent.id);

    // Save payment info to database
    const payment = new Payment({
      userId,
      stripePaymentIntentId: paymentIntent.id,
      amount: amount / 100, // Convert back to dollars
      status: 'pending', // Set status to completed if payment is successful
      deliveryInfo,
      orderSummary,
    });

    await payment.save();
    console.log('Payment saved to database:', payment._id);

    // Update user's order history (assuming you have an orders field in your User model)
    await User.findByIdAndUpdate(userId, {
      $push: { orders: payment._id }
    });

    res.json({ success: true, paymentIntent });
  } catch (error) {
    console.error('Error processing payment:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({ 
      success: false, 
      error: error.message, 
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined 
    });
  }
};
