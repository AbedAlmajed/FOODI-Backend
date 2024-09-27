// const MenuItem = require('../models/FoodSoon');

// exports.createMenuItem = async (req, res) => {
//   try {
//     const newMenuItem = new MenuItem(req.body);
//     const savedMenuItem = await newMenuItem.save();
//     res.status(201).json(savedMenuItem);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.getAllMenuItems = async (req, res) => {
//   try {
//     const menuItems = await MenuItem.find();
//     res.json(menuItems);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getMenuItemById = async (req, res) => {
//   try {
//     const menuItem = await MenuItem.findById(req.params.id);
//     if (!menuItem) return res.status(404).json({ message: 'Menu item not found' });
//     res.json(menuItem);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.updateMenuItem = async (req, res) => {
//   try {
//     const updatedMenuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedMenuItem) return res.status(404).json({ message: 'Menu item not found' });
//     res.json(updatedMenuItem);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.deleteMenuItem = async (req, res) => {
//   try {
//     const deletedMenuItem = await MenuItem.findByIdAndDelete(req.params.id);
//     if (!deletedMenuItem) return res.status(404).json({ message: 'Menu item not found' });
//     res.json({ message: 'Menu item deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };










const MenuItem = require('../models/FoodSoon');

exports.createMenuItem = async (req, res) => {
  try {
    const newMenuItem = new MenuItem(req.body);
    const savedMenuItem = await newMenuItem.save();
    res.status(201).json(savedMenuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllMenuItems = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const total = await MenuItem.countDocuments();
    const items = await MenuItem.find().skip(skip).limit(limit);

    res.json({
      items,
      total,
      page,
      pages: Math.ceil(total / limit)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMenuItemById = async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    if (!menuItem) return res.status(404).json({ message: 'Menu item not found' });
    res.json(menuItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateMenuItem = async (req, res) => {
  try {
    const updatedMenuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMenuItem) return res.status(404).json({ message: 'Menu item not found' });
    res.json(updatedMenuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteMenuItem = async (req, res) => {
  try {
    const deletedMenuItem = await MenuItem.findByIdAndDelete(req.params.id);
    if (!deletedMenuItem) return res.status(404).json({ message: 'Menu item not found' });
    res.json({ message: 'Menu item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};