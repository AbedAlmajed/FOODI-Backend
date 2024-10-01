// const Payment = require('../models/Payment');

// exports.getUserOrders = async (req, res) => {
//     try {
//         const orders = await Payment.find({ user: req.user.id })
//             .sort({ createdAt: -1 });
        
//         res.json(orders);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// };

// exports.updateOrderStatus = async (req, res) => {
//     try {
//         const { orderId, status } = req.body;
//         const order = await Payment.findById(orderId);

//         if (!order) {
//             return res.status(404).json({ message: 'Order not found' });
//         }

//         // Check if the user is an admin (you'll need to implement admin authentication)
//         if (!req.user.isAdmin) {
//             return res.status(403).json({ message: 'Not authorized to update order status' });
//         }

//         order.status = status;
//         await order.save();

//         res.json(order);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// };









// // controllers/orderController.js
// const Payment = require('../models/Payment');

// exports.getUserOrders = async (req, res) => {
//   try {
//     const userId = req.user.id; // Assuming you're using authentication middleware

//     const orders = await Payment.find({ userId })
//       .sort({ createdAt: -1 }) // Sort by most recent first
//       .select('createdAt stripePaymentIntentId amount status'); // Select only necessary fields

//     const formattedOrders = orders.map(order => ({
//       orderDate: order.createdAt.toLocaleDateString(),
//       transactionId: order.stripePaymentIntentId,
//       price: order.amount.toFixed(2),
//       status: order.status
//     }));

//     res.json(formattedOrders);
//   } catch (error) {
//     console.error('Error fetching user orders:', error);
//     res.status(500).json({ message: 'Error fetching orders', error: error.message });
//   }
// };





// controllers/orderController.js
const Payment = require('../models/Payment');
const Driver = require('../models/driveModel');

exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you're using authentication middleware

    const orders = await Payment.find({ userId })
      .sort({ createdAt: -1 }) // Sort by most recent first
      .populate('assignedDriver', 'name phone') // Populate driver information
      .lean(); // Convert to plain JavaScript object for easier manipulation

    const formattedOrders = orders.map(order => ({
      orderDate: order.createdAt.toLocaleDateString(),
      transactionId: order.stripePaymentIntentId,
      price: order.amount.toFixed(2),
      status: order.status,
      deliveryInfo: order.deliveryInfo,
      orderSummary: order.orderSummary,
      assignedDriver: order.assignedDriver ? {
        name: order.assignedDriver.name,
        phone: order.assignedDriver.phone
      } : null
    }));

    res.json(formattedOrders);
  } catch (error) {
    console.error('Error fetching user orders:', error);
    res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
};