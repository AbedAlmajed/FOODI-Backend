// const CustomFood = require('../models/customFoodModel');
// const User = require('../models/User');
// const nodemailer = require('nodemailer');



// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//       user: 'abedalmajedalajarmah@gmail.com',
//       pass: 'ndgx zdev lywb gohb'
//     },
//   });
// exports.getAllCustomFoods = async (req, res) => {
//   try {
//     const customFoods = await CustomFood.find().populate('user', 'email name');
//     res.json(customFoods);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching custom foods', error: error.message });
//   }
// };

// exports.toggleApproval = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const customFood = await CustomFood.findById(id).populate('user', 'email');
    
//     if (!customFood) {
//       return res.status(404).json({ message: 'Custom food not found' });
//     }

//     customFood.isApproved = !customFood.isApproved;
//     await customFood.save();

//     // Send email to user
//     const emailSubject = customFood.isApproved ? 'Your custom food has been approved' : 'Your custom food has been rejected';
//     const emailText = customFood.isApproved 
//       ? `Your custom food "${customFood.name}" has been approved.`
//       : `Your custom food "${customFood.name}" has been rejected.`;

//     await transporter.sendMail({
//         from: 'abedalmajedalajarmah@gmail.com',
//         to: customFood.user.email,
//       subject: emailSubject,
//       text: emailText,
//     });

//     res.json({ message: 'Approval status updated and email sent', customFood });
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating approval status', error: error.message });
//   }
// };




const CustomFood = require('../models/customFoodModel');
const User = require('../models/User');
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

exports.getAllCustomFoods = async (req, res) => {
  try {
    const customFoods = await CustomFood.find().populate('user', 'email name');
    res.json(customFoods);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching custom foods', error: error.message });
  }
};

exports.toggleApproval = async (req, res) => {
  try {
    const { id } = req.params;
    const customFood = await CustomFood.findById(id).populate('user', 'email');
    
    if (!customFood) {
      return res.status(404).json({ message: 'Custom food not found' });
    }

    customFood.isApproved = !customFood.isApproved;
    await customFood.save();

    const emailSubject = customFood.isApproved ? 'Your custom food has been approved' : 'Your custom food has been rejected';
    const emailText = customFood.isApproved 
      ? `Your custom food "${customFood.name}" has been approved.`
      : `Your custom food "${customFood.name}" has been rejected.`;

    await transporter.sendMail({
        from: 'abedalmajedalajarmah@gmail.com',
        to: customFood.user.email,
      subject: emailSubject,
      text: emailText,
    });

    res.json({ message: 'Approval status updated and email sent', customFood });
  } catch (error) {
    res.status(500).json({ message: 'Error updating approval status', error: error.message });
  }
};

exports.setPrice = async (req, res) => {
  try {
    const { id } = req.params;
    const { price } = req.body;

    if (typeof price !== 'number' || price < 0) {
      return res.status(400).json({ message: 'Invalid price. Please provide a non-negative number.' });
    }

    const customFood = await CustomFood.findByIdAndUpdate(
      id,
      { price },
      { new: true, runValidators: true }
    );

    if (!customFood) {
      return res.status(404).json({ message: 'Custom food not found' });
    }

    res.json({ message: 'Price updated successfully', customFood });
  } catch (error) {
    res.status(500).json({ message: 'Error updating price', error: error.message });
  }
};