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



// const CustomFood = require('../models/CustomFood');

// exports.createCustomFood = async (req, res) => {
//   try {
//     const { name, notes, image, userId } = req.body;

//     // Ensure the user is authenticated
//     if (!req.user || req.user.id !== userId) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     const newCustomFood = new CustomFood({
//       name,
//       notes,
//       image,
//       isApproved: false,
//       user: userId
//     });

//     await newCustomFood.save();
//     res.status(201).json({ message: 'Custom food submitted successfully' });
//   } catch (error) {
//     console.error('Error creating custom food:', error);
//     res.status(500).json({ message: 'Error submitting custom food', error: error.message });
//   }
// };


// exports.getCustomFoodByUser = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const customFoodItems = await CustomFood.find({ user: userId });
//     res.status(200).json({ customFoodItems });
//   } catch (error) {
//     console.error('Error fetching custom food items:', error);
//     res.status(500).json({ message: 'Error fetching custom food items', error: error.message });
//   }
// };


// const CustomFood = require('../models/CustomFood');

// exports.createCustomFood = async (req, res) => {
//   try {
//     const { name, notes, image, quantity, userId } = req.body;

//     // Ensure the user is authenticated
//     if (!req.user || req.user.id !== userId) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     const newCustomFood = new CustomFood({
//       name,
//       notes,
//       image,
//       quantity,
//       isApproved: false,
//       user: userId
//     });

//     await newCustomFood.save();
//     res.status(201).json({ message: 'Custom food submitted successfully' });
//   } catch (error) {
//     console.error('Error creating custom food:', error);
//     res.status(500).json({ message: 'Error submitting custom food', error: error.message });
//   }
// };

// exports.getCustomFoodByUser = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const customFoodItems = await CustomFood.find({ user: userId });
//     res.status(200).json({ customFoodItems });
//   } catch (error) {
//     console.error('Error fetching custom food items:', error);
//     res.status(500).json({ message: 'Error fetching custom food items', error: error.message });
//   }
// };


// controllers/customFoodController.js
const CustomFood = require('../models/CustomFood');
const Cart = require('../models/Cart');

exports.createCustomFood = async (req, res) => {
  try {
    const { name, notes, image, quantity, userId } = req.body;

    if (!req.user || req.user.id !== userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const newCustomFood = new CustomFood({
      name,
      notes,
      image,
      quantity,
      isApproved: false,
      price:0,
      user: userId
    });

    await newCustomFood.save();
    res.status(201).json({ message: 'Custom food submitted successfully' });
  } catch (error) {
    console.error('Error creating custom food:', error);
    res.status(500).json({ message: 'Error submitting custom food', error: error.message });
  }
};

exports.getCustomFoodByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const customFoodItems = await CustomFood.find({ user: userId });
    res.status(200).json({ customFoodItems });
  } catch (error) {
    console.error('Error fetching custom food items:', error);
    res.status(500).json({ message: 'Error fetching custom food items', error: error.message });
  }
};



exports.deleteCustomFood = async (req, res) => {
  try {
    const { itemId } = req.params;
    const userId = req.user.id;

    const customFood = await CustomFood.findOne({ _id: itemId, user: userId });
    if (!customFood) {
      return res.status(404).json({ message: 'Custom food item not found' });
    }

    // Remove the custom food item from all carts
    await Cart.updateMany(
      { 'customItems.customFood': itemId },
      { $pull: { customItems: { customFood: itemId } } }
    );

    // Delete the custom food item
    await CustomFood.findByIdAndDelete(itemId);

    res.status(200).json({ message: 'Custom food item deleted successfully' });
  } catch (error) {
    console.error('Error deleting custom food item:', error);
    res.status(500).json({ message: 'Error deleting custom food item', error: error.message });
  }
};