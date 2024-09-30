// // controllers/paymentController.js
// const Payment = require('../models/Payment');

// exports.getAllPayments = async (req, res) => {
//   try {
//     const payments = await Payment.find().populate('userId', 'name email');
//     res.json(payments);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching payments', error: error.message });
//   }
// };

// exports.getPaymentById = async (req, res) => {
//   try {
//     const payment = await Payment.findById(req.params.id).populate('userId', 'name email');
//     if (!payment) {
//       return res.status(404).json({ message: 'Payment not found' });
//     }
//     res.json(payment);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching payment', error: error.message });
//   }
// };






//////////////////////////////////////////////////////////////////work correct////////////////////////



// // controllers/paymentController.js
// const Payment = require('../models/Payment');

// exports.getAllPayments = async (req, res) => {
//   try {
//     const payments = await Payment.find().populate('userId', 'name email');
//     res.json(payments);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching payments', error: error.message });
//   }
// };

// exports.getPaymentById = async (req, res) => {
//   try {
//     const payment = await Payment.findById(req.params.id).populate('userId', 'name email');
//     if (!payment) {
//       return res.status(404).json({ message: 'Payment not found' });
//     }
//     res.json(payment);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching payment', error: error.message });
//   }
// };

// // New function to update payment status
// exports.updatePaymentStatus = async (req, res) => {
//   try {
//     const payment = await Payment.findByIdAndUpdate(
//       req.params.id,
//       { status: 'completed' },
//       { new: true }
//     );
//     if (!payment) {
//       return res.status(404).json({ message: 'Payment not found' });
//     }
//     res.json(payment);
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating payment status', error: error.message });
//   }
// };

// // New function to delete payment
// exports.deletePayment = async (req, res) => {
//   try {
//     const payment = await Payment.findByIdAndDelete(req.params.id);
//     if (!payment) {
//       return res.status(404).json({ message: 'Payment not found' });
//     }
//     res.json({ message: 'Payment deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting payment', error: error.message });
//   }
// };









/////////////////////////////////////////////////////////goooooood///////////////////

// // controllers/paymentController.js
// const Payment = require('../models/Payment');
// const Driver = require('../models/driveModel');

// exports.getAllPayments = async (req, res) => {
//   try {
//     const payments = await Payment.find().populate('userId', 'name email').populate('assignedDriver', 'name email');
//     res.json(payments);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching payments', error: error.message });
//   }
// };

// exports.getPaymentById = async (req, res) => {
//   try {
//     const payment = await Payment.findById(req.params.id).populate('userId', 'name email').populate('assignedDriver', 'name email');
//     if (!payment) {
//       return res.status(404).json({ message: 'Payment not found' });
//     }
//     res.json(payment);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching payment', error: error.message });
//   }
// };

// exports.updatePaymentStatus = async (req, res) => {
//   try {
//     const payment = await Payment.findByIdAndUpdate(
//       req.params.id,
//       { status: 'completed' },
//       { new: true }
//     );
//     if (!payment) {
//       return res.status(404).json({ message: 'Payment not found' });
//     }
//     res.json(payment);
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating payment status', error: error.message });
//   }
// };

// exports.deletePayment = async (req, res) => {
//   try {
//     const payment = await Payment.findByIdAndDelete(req.params.id);
//     if (!payment) {
//       return res.status(404).json({ message: 'Payment not found' });
//     }
//     res.json({ message: 'Payment deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting payment', error: error.message });
//   }
// };

// exports.assignDriver = async (req, res) => {
//   try {
//     const { paymentId, driverId } = req.body;
//     const payment = await Payment.findByIdAndUpdate(
//       paymentId,
//       { assignedDriver: driverId },
//       { new: true }
//     ).populate('assignedDriver', 'name email');
//     if (!payment) {
//       return res.status(404).json({ message: 'Payment not found' });
//     }
//     res.json(payment);
//   } catch (error) {
//     res.status(500).json({ message: 'Error assigning driver', error: error.message });
//   }
// };

// exports.getAvailableDrivers = async (req, res) => {
//   try {
//     const drivers = await Driver.find({ isApproved: true });
//     res.json(drivers);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching available drivers', error: error.message });
//   }
// };







/////////////////////////////////////////////////////done........................


// // controllers/paymentController.js
// const Payment = require('../models/Payment');
// const Driver = require('../models/driveModel');

// exports.getAllPayments = async (req, res) => {
//   try {
//     const payments = await Payment.find().populate('userId', 'name email').populate('assignedDriver', 'name email');
//     res.json(payments);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching payments', error: error.message });
//   }
// };

// exports.getPaymentById = async (req, res) => {
//   try {
//     const payment = await Payment.findById(req.params.id).populate('userId', 'name email').populate('assignedDriver', 'name email');
//     if (!payment) {
//       return res.status(404).json({ message: 'Payment not found' });
//     }
//     res.json(payment);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching payment', error: error.message });
//   }
// };

// exports.updatePaymentStatus = async (req, res) => {
//   try {
//     const payment = await Payment.findByIdAndUpdate(
//       req.params.id,
//       { status: 'completed' },
//       { new: true }
//     );
//     if (!payment) {
//       return res.status(404).json({ message: 'Payment not found' });
//     }
//     res.json(payment);
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating payment status', error: error.message });
//   }
// };

// exports.deletePayment = async (req, res) => {
//   try {
//     const payment = await Payment.findByIdAndDelete(req.params.id);
//     if (!payment) {
//       return res.status(404).json({ message: 'Payment not found' });
//     }
//     // If a driver was assigned, set them back to available
//     if (payment.assignedDriver) {
//       await Driver.findByIdAndUpdate(payment.assignedDriver, { status: 'available' });
//     }
//     res.json({ message: 'Payment deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting payment', error: error.message });
//   }
// };

// exports.assignDriver = async (req, res) => {
//   try {
//     const { paymentId, driverId } = req.body;
//     const payment = await Payment.findByIdAndUpdate(
//       paymentId,
//       { assignedDriver: driverId },
//       { new: true }
//     ).populate('assignedDriver', 'name email');
//     if (!payment) {
//       return res.status(404).json({ message: 'Payment not found' });
//     }
//     // Set the assigned driver's status to busy
//     await Driver.findByIdAndUpdate(driverId, { status: 'busy' });
//     res.json(payment);
//   } catch (error) {
//     res.status(500).json({ message: 'Error assigning driver', error: error.message });
//   }
// };

// exports.getAvailableDrivers = async (req, res) => {
//   try {
//     const drivers = await Driver.find({ isApproved: true, status: 'available' });
//     res.json(drivers);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching available drivers', error: error.message });
//   }
// };

// exports.completeDelivery = async (req, res) => {
//   try {
//     const { paymentId } = req.body;
//     const payment = await Payment.findById(paymentId);
//     if (!payment) {
//       return res.status(404).json({ message: 'Payment not found' });
//     }
//     // Set the driver back to available
//     await Driver.findByIdAndUpdate(payment.assignedDriver, { status: 'available' });
//     // Update payment status
//     payment.status = 'completed';
//     await payment.save();
//     res.json({ message: 'Delivery completed successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error completing delivery', error: error.message });
//   }
// };














////




const Payment = require('../models/Payment');
const Driver = require('../models/driveModel');

exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate('userId', 'name email').populate('assignedDriver', 'name email');
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching payments', error: error.message });
  }
};

exports.getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id).populate('userId', 'name email').populate('assignedDriver', 'name email');
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching payment', error: error.message });
  }
};

exports.updatePaymentStatus = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndUpdate(
      req.params.id,
      { status: 'completed' },
      { new: true }
    );
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: 'Error updating payment status', error: error.message });
  }
};

exports.deletePayment = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    // If a driver was assigned, set them back to available
    if (payment.assignedDriver) {
      await Driver.findByIdAndUpdate(payment.assignedDriver, { status: 'available' });
    }
    res.json({ message: 'Payment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting payment', error: error.message });
  }
};

exports.assignDriver = async (req, res) => {
  try {
    const { paymentId, driverId } = req.body;
    const payment = await Payment.findByIdAndUpdate(
      paymentId,
      { assignedDriver: driverId },
      { new: true }
    ).populate('assignedDriver', 'name email');
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    // Set the assigned driver's status to busy
    await Driver.findByIdAndUpdate(driverId, { status: 'busy' });
    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: 'Error assigning driver', error: error.message });
  }
};

exports.getAvailableDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find({ isApproved: true, status: 'available' });
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching available drivers', error: error.message });
  }
};

exports.completeDelivery = async (req, res) => {
  try {
    const { paymentId } = req.body;
    const payment = await Payment.findById(paymentId);
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    // Set the driver back to available
    await Driver.findByIdAndUpdate(payment.assignedDriver, { status: 'available' });
    // Update payment status
    payment.status = 'completed';
    await payment.save();
    res.json({ message: 'Delivery completed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error completing delivery', error: error.message });
  }
};

exports.reassignDriver = async (req, res) => {
  try {
    const { paymentId, driverId } = req.body;
    const payment = await Payment.findById(paymentId);
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    const driver = await Driver.findById(driverId);
    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }

    if (driver.status !== 'available') {
      return res.status(400).json({ message: 'Driver is not available' });
    }

    // Update the payment with the new driver
    payment.assignedDriver = driverId;
    await payment.save();

    // Set the new driver's status to busy
    driver.status = 'busy';
    await driver.save();

    res.json({ message: 'Driver reassigned successfully', payment });
  } catch (error) {
    res.status(500).json({ message: 'Error reassigning driver', error: error.message });
  }
};



