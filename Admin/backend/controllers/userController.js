

// const User = require('../models/User');

// // Get all users
// exports.getUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Update user status
// exports.updateUser = async (req, res) => {
//   try {
//     const { userId, isActive } = req.body;
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     user.isActive = isActive !== undefined ? isActive : user.isActive;
//     await user.save();
//     res.status(200).json({ message: 'User status updated successfully', user });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // // Get the count of active users
// // exports.getActiveUserCount = async (req, res) => {
// //   try {
// //     const activeUserCount = await User.countDocuments({ isActive: true }); // استعلام المستخدمين النشطين
// //     res.status(200).json({ count: activeUserCount }); // تأكد من وجود "count" في الاستجابة
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };
// // Get the count of active users
// exports.getActiveUserCount = async (req, res) => {
//   try {
//     // استعلام قاعدة البيانات للعثور على المستخدمين النشطين
//     const activeUserCount = await User.countDocuments({ isActive: true }); 
//     res.status(200).json({ count: activeUserCount }); // إرجاع العدد في الاستجابة
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };



const User = require('../models/User');
const nodemailer = require('nodemailer');

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  // Add your email service configuration here
  // For example, using Gmail:
  service: 'gmail',
  auth: {
    user: 'abedalmajedalajarmah@gmail.com',
    pass: 'ndgx zdev lywb gohb'
  }
});

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Toggle user status
exports.toggleUserStatus = async (req, res) => {
  try {
    const { userId } = req.params;
    const { isActive } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.isActive = isActive;
    await user.save();

    // Send email to user
    const mailOptions = {
      from: 'abedalmajedalajarmah@gmail.com',
      to: user.email,
      subject: `Your account status has been updated`,
      text: `Your account status has been changed to ${isActive ? 'active' : 'inactive'}.`
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'User status updated successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get the count of active users
exports.getActiveUserCount = async (req, res) => {
  try {
    const activeUserCount = await User.countDocuments({ isActive: true });
    res.status(200).json({ count: activeUserCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};