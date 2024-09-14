

const Cart = require('../models/Cart');
const MenuItem = require('../models/MenuItem');

exports.addToCart = async (req, res) => {
  try {
    const { itemId, quantity } = req.body;
    const userId = req.user.id;

    if (!itemId || !quantity) {
      return res.status(400).json({ message: 'ItemId and quantity are required' });
    }

    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

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

    await cart.save();

    const cartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

    res.status(200).json({ message: 'Item added to cart', cartCount, total: cart.total });
  } catch (error) {
    console.error('Error in addToCart:', error);
    res.status(500).json({ message: 'Error adding item to cart', error: error.message });
  }
};

exports.getCartItems = async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await Cart.findOne({ user: userId }).populate('items.menuItem');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    await cart.calculateTotal();
    await cart.save();

    res.status(200).json({ items: cart.items, total: cart.total });
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ message: 'Error fetching cart items', error: error.message });
  }
};

exports.updateCartItem = async (req, res) => {
  try {
    const { itemId, quantity } = req.body;
    const userId = req.user.id;

    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const cartItemIndex = cart.items.findIndex(item => item.menuItem.toString() === itemId);
    if (cartItemIndex === -1) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    if (quantity > 0) {
      cart.items[cartItemIndex].quantity = quantity;
    } else {
      cart.items.splice(cartItemIndex, 1);
    }

    await cart.save();

    const cartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

    res.status(200).json({ message: 'Cart item updated', cartCount, total: cart.total });
  } catch (error) {
    console.error('Error updating cart item:', error);
    res.status(500).json({ message: 'Error updating cart item', error: error.message });
  }
};

exports.removeCartItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const userId = req.user.id;

    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const cartItemIndex = cart.items.findIndex(item => item.menuItem.toString() === itemId);
    if (cartItemIndex === -1) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    cart.items.splice(cartItemIndex, 1);

    await cart.save();

    const cartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

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
    if (cart) {
      await cart.calculateTotal();
      await cart.save();
    }
    const count = cart ? cart.items.reduce((sum, item) => sum + item.quantity, 0) : 0;

    res.status(200).json({ count, total: cart ? cart.total : 0 });
  } catch (error) {
    console.error('Error fetching cart count:', error);
    res.status(500).json({ message: 'Error fetching cart count', error: error.message });
  }
};