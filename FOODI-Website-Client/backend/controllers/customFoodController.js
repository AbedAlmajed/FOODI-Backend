// // controllers/customFoodController.js
// const CustomFood = require('../models/CustomFood');

// exports.createCustomFood = async (req, res) => {
//   try {
//     const { name, notes, image } = req.body;
//     const newCustomFood = new CustomFood({
//       name,
//       notes,
//       image,
//       isApproved: false
//     });
//     await newCustomFood.save();
//     res.status(201).json({ message: 'Custom food submitted successfully' });
//   } catch (error) {
//     console.error('Error creating custom food:', error);
//     res.status(500).json({ message: 'Error submitting custom food' });
//   }
// };



const CustomFood = require('../models/CustomFood');

exports.createCustomFood = async (req, res) => {
  try {
    const { name, notes, image, userId } = req.body;

    // Ensure the user is authenticated
    if (!req.user || req.user.id !== userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const newCustomFood = new CustomFood({
      name,
      notes,
      image,
      isApproved: false,
      user: userId
    });

    await newCustomFood.save();
    res.status(201).json({ message: 'Custom food submitted successfully' });
  } catch (error) {
    console.error('Error creating custom food:', error);
    res.status(500).json({ message: 'Error submitting custom food', error: error.message });
  }
};