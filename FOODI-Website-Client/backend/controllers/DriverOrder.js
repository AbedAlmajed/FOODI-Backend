// In your main server file (e.g., app.js or server.js)









// // In ./controllers/DriverOrder.js
// const Payment = require('../models/Payment');

// exports.getDriverPayments = async (req, res) => {
//   try {
//     const driverId = req.driver.id;
//     console.log('Fetching payments for driver:', driverId);
//     const payments = await Payment.find({ assignedDriver: driverId })
//       .populate('userId', 'name email')
//       .sort('-createdAt');
//     console.log('Payments found:', payments.length);
//     res.status(200).json(payments);
//   } catch (error) {
//     console.error('Error in getDriverPayments:', error);
//     res.status(500).json({ message: 'Error fetching payments', error: error.message });
//   }
// };



//////////////////////////////////////////////////////////////////done.....................

// // In ./controllers/DriverOrder.js
// const Payment = require('../models/Payment');

// exports.getDriverPayments = async (req, res) => {
//   try {
//     const driverId = req.driver.id;
//     console.log('Fetching payments for driver:', driverId);
//     const payments = await Payment.find({ assignedDriver: driverId })
//       .populate('userId', 'name email')
//       .sort('-createdAt');
//     console.log('Payments found:', payments.length);
//     res.status(200).json(payments);
//   } catch (error) {
//     console.error('Error in getDriverPayments:', error);
//     res.status(500).json({ message: 'Error fetching payments', error: error.message });
//   }
// };

// exports.updatePaymentStatus = async (req, res) => {
//   try {
//     const { paymentId } = req.params;
//     const { status } = req.body;

//     if (!['pending', 'complete'].includes(status)) {
//       return res.status(400).json({ message: 'Invalid status' });
//     }

//     const payment = await Payment.findByIdAndUpdate(
//       paymentId,
//       { status },
//       { new: true }
//     );

//     if (!payment) {
//       return res.status(404).json({ message: 'Payment not found' });
//     }

//     res.status(200).json(payment);
//   } catch (error) {
//     console.error('Error in updatePaymentStatus:', error);
//     res.status(500).json({ message: 'Error updating payment status', error: error.message });
//   }
// };


//////////////////////////////////////////////////////////////fianl version ////////////////////

// // In ./controllers/DriverOrder.js
// const Payment = require('../models/Payment');

// exports.getDriverPayments = async (req, res) => {
//   try {
//     const driverId = req.driver.id;
//     console.log('Fetching payments for driver:', driverId);
//     const payments = await Payment.find({ assignedDriver: driverId })
//       .populate('userId', 'name email')
//       .sort('-createdAt');
//     console.log('Payments found:', payments.length);
//     res.status(200).json(payments);
//   } catch (error) {
//     console.error('Error in getDriverPayments:', error);
//     res.status(500).json({ message: 'Error fetching payments', error: error.message });
//   }
// };

// exports.updatePaymentStatus = async (req, res) => {
//   try {
//     const { paymentId } = req.params;
//     const { status } = req.body;

//     if (!['pending', 'completed', 'failed'].includes(status)) {
//       return res.status(400).json({ message: 'Invalid status' });
//     }

//     const payment = await Payment.findByIdAndUpdate(
//       paymentId,
//       { status },
//       { new: true }
//     );

//     if (!payment) {
//       return res.status(404).json({ message: 'Payment not found' });
//     }

//     res.status(200).json(payment);
//   } catch (error) {
//     console.error('Error in updatePaymentStatus:', error);
//     res.status(500).json({ message: 'Error updating payment status', error: error.message });
//   }
// };













const Payment = require('../models/Payment');
const Driver = require('../models/driveModel');

exports.getDriverPayments = async (req, res) => {
  try {
    const driverId = req.driver.id;
    const payments = await Payment.find({ assignedDriver: driverId })
      .populate('userId', 'name email')
      .sort('-createdAt');
    res.status(200).json(payments);
  } catch (error) {
    console.error('Error in getDriverPayments:', error);
    res.status(500).json({ message: 'Error fetching payments', error: error.message });
  }
};

exports.updatePaymentStatus = async (req, res) => {
  try {
    const { paymentId } = req.params;
    const { status } = req.body;
    const driverId = req.driver.id;

    if (!['pending', 'completed', 'failed'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    // Start a session for transaction
    const session = await Payment.startSession();
    session.startTransaction();

    try {
      // Update payment status
      const payment = await Payment.findByIdAndUpdate(
        paymentId,
        { status },
        { new: true, session }
      );

      if (!payment) {
        await session.abortTransaction();
        return res.status(404).json({ message: 'Payment not found' });
      }

      // Update driver status based on payment status
      const driverStatus = status === 'pending' ? 'busy' : 'available';
      await Driver.findByIdAndUpdate(
        driverId,
        { status: driverStatus },
        { session }
      );

      await session.commitTransaction();
      res.status(200).json(payment);
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  } catch (error) {
    console.error('Error in updatePaymentStatus:', error);
    res.status(500).json({ message: 'Error updating payment status', error: error.message });
  }
}; 



