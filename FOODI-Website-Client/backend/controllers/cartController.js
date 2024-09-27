
// controllers/cartController.js
const Cart = require('../models/Cart');
const MenuItem = require('../models/MenuItem');
const CustomFood = require('../models/CustomFood');

exports.addToCart = async (req, res) => {
  try {
    const { itemId, quantity, isCustom } = req.body;
    const userId = req.user.id;

    if (!itemId || !quantity) {
      return res.status(400).json({ message: 'ItemId and quantity are required' });
    }

    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, items: [], customItems: [] });
    }

    if (isCustom) {
      const customFood = await CustomFood.findById(itemId);
      if (!customFood || !customFood.isApproved) {
        return res.status(404).json({ message: 'Approved custom food item not found' });
      }

      const existingItemIndex = cart.customItems.findIndex(item => item.customFood.toString() === itemId);
      if (existingItemIndex > -1) {
        cart.customItems[existingItemIndex].quantity += quantity;
      } else {
        cart.customItems.push({ customFood: itemId, quantity });
      }
    } else {
      const menuItem = await MenuItem.findById(itemId);
      if (!menuItem) {
        return res.status(404).json({ message: 'Menu item not found' });
      }

      const existingItemIndex = cart.items.findIndex(item => item.menuItem.toString() === itemId);
      if (existingItemIndex > -1) {
        cart.items[existingItemIndex].quantity += quantity;
      } else {
        cart.items.push({ menuItem: itemId, quantity });
      }
    }

    await cart.calculateTotal();
    await cart.save();

    res.status(200).json({ message: 'Item added to cart', cart });
  } catch (error) {
    console.error('Error in addToCart:', error);
    res.status(500).json({ message: 'Error adding item to cart', error: error.message });
  }
};

exports.getCartItems = async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await Cart.findOne({ user: userId })
      .populate('items.menuItem')
      .populate('customItems.customFood');

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json({ 
      items: cart.items, 
      customItems: cart.customItems, 
      total: cart.total
    });
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ message: 'Error fetching cart items', error: error.message });
  }
};

exports.updateCartItem = async (req, res) => {
  try {
    const { itemId, quantity, isCustom } = req.body;
    const userId = req.user.id;

    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    let itemArray = isCustom ? cart.customItems : cart.items;
    let itemField = isCustom ? 'customFood' : 'menuItem';

    const cartItemIndex = itemArray.findIndex(item => item[itemField].toString() === itemId);
    if (cartItemIndex === -1) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    if (quantity > 0) {
      itemArray[cartItemIndex].quantity = quantity;
    } else {
      itemArray.splice(cartItemIndex, 1);
    }

    await cart.calculateTotal();
    await cart.save();

    res.status(200).json({ message: 'Cart item updated', cart });
  } catch (error) {
    console.error('Error updating cart item:', error);
    res.status(500).json({ message: 'Error updating cart item', error: error.message });
  }
};


exports.removeCartItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { isCustom } = req.query;
    const userId = req.user.id;

    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    if (isCustom === 'true') {
      const customItemIndex = cart.customItems.findIndex(item => item.customFood.toString() === itemId);
      if (customItemIndex === -1) {
        return res.status(404).json({ message: 'Custom item not found in cart' });
      }
      cart.customItems.splice(customItemIndex, 1);
    } else {
      const cartItemIndex = cart.items.findIndex(item => item.menuItem.toString() === itemId);
      if (cartItemIndex === -1) {
        return res.status(404).json({ message: 'Item not found in cart' });
      }
      cart.items.splice(cartItemIndex, 1);
    }

    await cart.save();

    const cartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0) +
                      cart.customItems.reduce((sum, item) => sum + item.quantity, 0);

    res.status(200).json({ message: 'Item removed from cart', cartCount, total: cart.total });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ message: 'Error removing item from cart', error: error.message });
  }
};


exports.getCartCount = async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(200).json({ count: 0, total: 0 });
    }

    const count = cart.items.reduce((sum, item) => sum + item.quantity, 0) +
                  cart.customItems.reduce((sum, item) => sum + item.quantity, 0);

    res.status(200).json({ count, total: cart.total });
  } catch (error) {
    console.error('Error fetching cart count:', error);
    res.status(500).json({ message: 'Error fetching cart count', error: error.message });
  }
};






exports.clearCart = async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = [];
    cart.customItems = [];
    cart.total = 0;

    await cart.save();

    res.status(200).json({ message: 'Cart cleared successfully' });
  } catch (error) {
    console.error('Error clearing cart:', error);
    res.status(500).json({ message: 'Error clearing cart', error: error.message });
  }
};