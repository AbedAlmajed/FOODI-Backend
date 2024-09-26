// driverController.js
const Driver = require('../models/driveModel');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'abedalmajedalajarmah@gmail.com',
    pass: 'ndgx zdev lywb gohb'
  },
});

exports.getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.toggleApprovalStatus = async (req, res) => {
  try {
    const driver = await Driver.findById(req.params.id);
    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }
    driver.isApproved = !driver.isApproved;
    await driver.save();

    // Send email notification
    const mailOptions = {
      from: 'abedalmajedalajarmah@gmail.com',
      to: driver.email,
      subject: 'Driver Approval Status Update',
      text: `Your approval status has been updated to: ${driver.isApproved ? 'Approved' : 'Not Approved'}`,
    };

    await transporter.sendMail(mailOptions);

    res.json(driver);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
