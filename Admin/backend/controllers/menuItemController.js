// // controllers/menuItemController.js
// const MenuItem = require('../models/MenuItem');

// exports.createMenuItem = async (req, res) => {
//   try {
//     const { recipeName, category, price, recipeDetails, imageUrl } = req.body;
//     const newMenuItem = new MenuItem({
//       recipeName,
//       category,
//       price,
//       recipeDetails,
//       imageUrl
//     });
//     const savedMenuItem = await newMenuItem.save();
//     res.status(201).json(savedMenuItem);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };



// const MenuItem = require('../models/MenuItem');

// exports.createMenuItem = async (req, res) => {
//   try {
//     const { recipeName, category, price, recipeDetails, imageUrl } = req.body;
//     const newMenuItem = new MenuItem({
//       recipeName,
//       category,
//       price,
//       recipeDetails,
//       imageUrl
//     });
//     const savedMenuItem = await newMenuItem.save();
//     res.status(201).json(savedMenuItem);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.getMenuItems = async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 5;
//     const skip = (page - 1) * limit;

//     const total = await MenuItem.countDocuments();
//     const items = await MenuItem.find().skip(skip).limit(limit);

//     res.json({
//       items,
//       total,
//       page,
//       pages: Math.ceil(total / limit)
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.deleteMenuItem = async (req, res) => {
//   try {
//     const deletedItem = await MenuItem.findByIdAndDelete(req.params.id);
//     if (!deletedItem) {
//       return res.status(404).json({ message: 'Item not found' });
//     }
//     res.json({ message: 'Item deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.updateMenuItem = async (req, res) => {
//   try {
//     const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedItem) {
//       return res.status(404).json({ message: 'Item not found' });
//     }
//     res.json(updatedItem);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };


///////////////////////////////////////////////////////////finasal version ////////////////


// const MenuItem = require('../models/MenuItem');

// exports.createMenuItem = async (req, res) => {
//   try {
//     const { recipeName, category, price, recipeDetails, imageUrl } = req.body;
//     const newMenuItem = new MenuItem({
//       recipeName,
//       category,
//       price,
//       recipeDetails,
//       imageUrl
//     });
//     const savedMenuItem = await newMenuItem.save();
//     res.status(201).json(savedMenuItem);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.getMenuItems = async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 5;
//     const skip = (page - 1) * limit;

//     const total = await MenuItem.countDocuments();
//     const items = await MenuItem.find().skip(skip).limit(limit);

//     res.json({
//       items,
//       total,
//       page,
//       pages: Math.ceil(total / limit)
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.deleteMenuItem = async (req, res) => {
//   try {
//     const deletedItem = await MenuItem.findByIdAndDelete(req.params.id);
//     if (!deletedItem) {
//       return res.status(404).json({ message: 'Item not found' });
//     }
//     res.json({ message: 'Item deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.updateMenuItem = async (req, res) => {
//   try {
//     const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedItem) {
//       return res.status(404).json({ message: 'Item not found' });
//     }
//     res.json(updatedItem);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };




const MenuItem = require('../models/MenuItem');

exports.createMenuItem = async (req, res) => {
  try {
    const { recipeName, category, price, recipeDetails, imageUrl } = req.body;
    const newMenuItem = new MenuItem({
      recipeName,
      category,
      price,
      recipeDetails,
      imageUrl
    });
    const savedMenuItem = await newMenuItem.save();
    res.status(201).json(savedMenuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getMenuItems = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || '';
    
    const query = search
      ? {
          $or: [
            { recipeName: { $regex: search, $options: 'i' } },
            { category: { $regex: search, $options: 'i' } }
          ]
        }
      : {};

    const total = await MenuItem.countDocuments(query);
    const items = await MenuItem.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      items,
      total,
      currentPage: page,
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteMenuItem = async (req, res) => {
  try {
    const deletedItem = await MenuItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateMenuItem = async (req, res) => {
  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
