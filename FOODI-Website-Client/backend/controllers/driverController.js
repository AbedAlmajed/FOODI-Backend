// const Driver = require('../models/driveModel');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const driver = await Driver.findOne({ email });
    
//     if (!driver || !(await bcrypt.compare(password, driver.password))) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }
    
//     if (!driver.isApproved) {
//       return res.status(403).json({ message: 'Your account is not approved yet' });
//     }
    
//     const token = jwt.sign({ id: driver._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    
//     res.status(200).json({ driverID: driver._id, token });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };







const Driver = require('../models/driveModel');
const jwt = require('jsonwebtoken');
const Order = require('../models/Payment'); // Add this import

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const driver = await Driver.findOne({ email });
    
    if (!driver || !(await driver.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    if (!driver.isApproved) {
      return res.status(403).json({ message: 'Your account is not approved yet' });
    }
    
    const token = jwt.sign(
      { id: driver._id, isDriver: true },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
    
    res.status(200).json({ driverID: driver._id, token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getDriverData = async (req, res) => {
  try {
    const driver = await Driver.findById(req.driver.id).select('-password');
    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }
    res.status(200).json(driver);
  } catch (error) {
    console.error('Get driver data error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};



// exports.getDriverStatus = async (req, res) => {
//   try {
//     const driver = await Driver.findById(req.driver.id);
//     const pendingOrders = await Order.countDocuments({ driverId: driver._id, status: 'pending' });
//     const completedOrders = await Order.countDocuments({ driverId: driver._id, status: 'completed' });

//     let status = 'available';
//     if (pendingOrders > 0) {
//       status = 'busy';
//     }

//     await Driver.findByIdAndUpdate(driver._id, { status });
//     res.json({ status });
//   } catch (error) {
//     console.error('Get driver status error:', error);
//     res.status(500).json({ message: 'Error fetching driver status' });
//   }
// };


exports.getDriverStatus = async (req, res) => {
  try {
    const driver = await Driver.findById(req.driver.id);
    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }

    const pendingOrders = await Order.countDocuments({ driverId: driver._id, status: 'pending' });
    const status = pendingOrders > 0 ? 'busy' : 'available';

    await Driver.findByIdAndUpdate(driver._id, { status });
    res.json({ status });
  } catch (error) {
    console.error('Get driver status error:', error);
    res.status(500).json({ message: 'Error fetching driver status' });
  }
};