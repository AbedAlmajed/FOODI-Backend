// const Cart = require('../models/Cart');
// const MenuItem = require('../models/MenuItem');

// // Add item to cart
// exports.addToCart = async (req, res) => {
//   try {
//     const { itemId, quantity } = req.body;
//     const userId = req.user._id;

//     // Find or create a cart for the user
//     let cart = await Cart.findOne({ user: userId });
//     if (!cart) {
//       cart = new Cart({ user: userId, items: [] });
//     }

//     // Find the menu item by its ID
//     const menuItem = await MenuItem.findById(itemId);
//     if (!menuItem) {
//       return res.status(404).json({ message: 'Menu item not found' });
//     }

//     // Check if the item is already in the cart
//     const existingItemIndex = cart.items.findIndex(item => item.menuItem.toString() === itemId);
//     if (existingItemIndex > -1) {
//       // Update quantity if the item exists
//       cart.items[existingItemIndex].quantity += quantity;
//     } else {
//       // Add new item to the cart
//       cart.items.push({ menuItem: itemId, quantity });
//     }

//     // Save the cart
//     await cart.save();

//     // Calculate total cart count
//     const cartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

//     res.status(200).json({ message: 'Item added to cart', cartCount });
//   } catch (error) {
//     res.status(500).json({ message: 'Error adding item to cart', error: error.message });
//   }
// };

// // Get cart items
// exports.getCartItems = async (req, res) => {
//   try {
//     const userId = req.user._id;

//     // Find the cart and populate the menu items
//     const cart = await Cart.findOne({ user: userId }).populate('items.menuItem');
//     if (!cart) {
//       return res.status(404).json({ message: 'Cart not found' });
//     }

//     // Map items for response
//     const cartItems = cart.items.map(item => ({
//       id: item._id,
//       menuItem: {
//         id: item.menuItem._id,
//         recipeName: item.menuItem.recipeName,
//         price: item.menuItem.price,
//         imageUrl: item.menuItem.imageUrl
//       },
//       quantity: item.quantity
//     }));

//     // Calculate total price
//     const total = cartItems.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);

//     res.status(200).json({ items: cartItems, total });
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching cart items', error: error.message });
//   }
// };

// // Update cart item quantity
// exports.updateCartItem = async (req, res) => {
//   try {
//     const { itemId, quantity } = req.body;
//     const userId = req.user._id;

//     // Find the cart
//     const cart = await Cart.findOne({ user: userId });
//     if (!cart) {
//       return res.status(404).json({ message: 'Cart not found' });
//     }

//     // Find the item in the cart
//     const cartItem = cart.items.find(item => item.menuItem.toString() === itemId);
//     if (!cartItem) {
//       return res.status(404).json({ message: 'Item not found in cart' });
//     }

//     // Update quantity or remove item if quantity is zero or less
//     cartItem.quantity = quantity;
//     if (cartItem.quantity <= 0) {
//       cart.items = cart.items.filter(item => item.menuItem.toString() !== itemId);
//     }

//     // Save the updated cart
//     await cart.save();

//     // Calculate updated cart count
//     const updatedCartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

//     res.status(200).json({ message: 'Cart item updated', cartCount: updatedCartCount });
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating cart item', error: error.message });
//   }
// };

// // Remove item from cart
// exports.removeCartItem = async (req, res) => {
//   try {
//     const { itemId } = req.params;
//     const userId = req.user._id;

//     // Find the cart
//     const cart = await Cart.findOne({ user: userId });
//     if (!cart) {
//       return res.status(404).json({ message: 'Cart not found' });
//     }

//     // Remove the item from the cart
//     cart.items = cart.items.filter(item => item.menuItem.toString() !== itemId);

//     // Save the updated cart
//     await cart.save();

//     // Calculate updated cart count
//     const updatedCartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

//     res.status(200).json({ message: 'Item removed from cart', cartCount: updatedCartCount });
//   } catch (error) {
//     res.status(500).json({ message: 'Error removing item from cart', error: error.message });
//   }
// };

// // Get cart count
// exports.getCartCount = async (req, res) => {
//   try {
//     const userId = req.user._id;

//     // Find the cart
//     const cart = await Cart.findOne({ user: userId });
//     const count = cart ? cart.items.reduce((sum, item) => sum + item.quantity, 0) : 0;

//     res.status(200).json({ count });
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching cart count', error: error.message });
//   }
// };




// const Cart = require('../models/Cart');

// // Add item to cart
// exports.addToCart = async (req, res) => {
//   try {
//     const { itemId, quantity } = req.body;
//     const userId = req.user._id;

//     let cart = await Cart.findOne({ user: userId });
//     if (!cart) {
//       cart = new Cart({ user: userId, items: [] });
//     }

//     const menuItem = await MenuItem.findById(itemId);
//     if (!menuItem) {
//       return res.status(404).json({ message: 'Menu item not found' });
//     }

//     const existingItemIndex = cart.items.findIndex(item => item.menuItem.toString() === itemId);
//     if (existingItemIndex > -1) {
//       cart.items[existingItemIndex].quantity += quantity;
//     } else {
//       cart.items.push({ menuItem: itemId, quantity });
//     }

//     await cart.save();

//     const cartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

//     res.status(200).json({ message: 'Item added to cart', cartCount });
//   } catch (error) {
//     console.error('Error adding item to cart:', error);
//     res.status(500).json({ message: 'Error adding item to cart', error: error.message });
//   }
// };


// exports.addToCart = async (req, res) => {
//   try {
//     const { itemId, quantity } = req.body;
//     const userId = req.user.id;

//     console.log('Request body:', req.body);
//     console.log('User ID:', userId);

//     if (!itemId || !quantity) {
//       return res.status(400).json({ message: 'ItemId and quantity are required' });
//     }

//     let cart = await Cart.findOne({ user: userId });
//     if (!cart) {
//       console.log('Creating new cart for user');
//       cart = new Cart({ user: userId, items: [] });
//     }

//     const menuItem = await MenuItem.findById(itemId);
//     if (!menuItem) {
//       console.log('Menu item not found:', itemId);
//       return res.status(404).json({ message: 'Menu item not found' });
//     }

//     console.log('Menu item found:', menuItem);

//     const existingItemIndex = cart.items.findIndex(item => item.menuItem.toString() === itemId);
//     if (existingItemIndex > -1) {
//       console.log('Updating existing item in cart');
//       cart.items[existingItemIndex].quantity += quantity;
//     } else {
//       console.log('Adding new item to cart');
//       cart.items.push({ menuItem: itemId, quantity });
//     }

//     console.log('Saving cart:', cart);
//     await cart.save();

//     const cartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

//     console.log('Cart saved successfully. Cart count:', cartCount);
//     res.status(200).json({ message: 'Item added to cart', cartCount });
//   } catch (error) {
//     console.error('Error in addToCart:', error);
//     res.status(500).json({ message: 'Error adding item to cart', error: error.message, stack: error.stack });
//   }
// };

// // Get cart items
// exports.getCartItems = async (req, res) => {
//   try {
//     const userId = req.user.id;

//     const cart = await Cart.findOne({ user: userId }).populate('items.menuItem');
//     if (!cart) {
//       return res.status(200).json({ items: [], total: 0 });
//     }

//     const cartItems = cart.items.map(item => ({
//       id: item._id,
//       menuItem: {
//         id: item.menuItem._id,
//         recipeName: item.menuItem.recipeName,
//         price: item.menuItem.price,
//         imageUrl: item.menuItem.imageUrl
//       },
//       quantity: item.quantity
//     }));

//     const total = cartItems.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);

//     res.status(200).json({ items: cartItems, total });
//   } catch (error) {
//     console.error('Error fetching cart items:', error);
//     res.status(500).json({ message: 'Error fetching cart items', error: error.message });
//   }
// };

// // // Update cart item quantity
// // exports.updateCartItem = async (req, res) => {
// //   try {
// //     const { itemId, quantity } = req.body;
// //     const userId = req.user.id;

// //     const cart = await Cart.findOne({ user: userId });
// //     if (!cart) {
// //       return res.status(404).json({ message: 'Cart not found' });
// //     }

// //     const cartItem = cart.items.find(item => item.menuItem.toString() === itemId);
// //     if (!cartItem) {
// //       return res.status(404).json({ message: 'Item not found in cart' });
// //     }

// //     cartItem.quantity = quantity;
// //     if (cartItem.quantity <= 0) {
// //       cart.items = cart.items.filter(item => item.menuItem.toString() !== itemId);
// //     }

// //     await cart.save();

// //     const updatedCartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

// //     res.status(200).json({ message: 'Cart item updated', cartCount: updatedCartCount });
// //   } catch (error) {
// //     console.error('Error updating cart item:', error);
// //     res.status(500).json({ message: 'Error updating cart item', error: error.message });
// //   }
// // };

// // // Remove item from cart
// // exports.removeCartItem = async (req, res) => {
// //   try {
// //     const { itemId } = req.params;
// //     const userId = req.user.id;

// //     const cart = await Cart.findOne({ user: userId });
// //     if (!cart) {
// //       return res.status(404).json({ message: 'Cart not found' });
// //     }

// //     cart.items = cart.items.filter(item => item.menuItem.toString() !== itemId);

// //     await cart.save();

// //     const updatedCartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

// //     res.status(200).json({ message: 'Item removed from cart', cartCount: updatedCartCount });
// //   } catch (error) {
// //     console.error('Error removing item from cart:', error);
// //     res.status(500).json({ message: 'Error removing item from cart', error: error.message });
// //   }
// // };


// exports.updateCartItem = async (req, res) => {
//   try {
//     const { itemId, quantity } = req.body;
//     const userId = req.user.id;

//     const cart = await Cart.findOne({ user: userId });
//     if (!cart) {
//       return res.status(404).json({ message: 'Cart not found' });
//     }

//     const cartItemIndex = cart.items.findIndex(item => item.menuItem.toString() === itemId);
//     if (cartItemIndex === -1) {
//       return res.status(404).json({ message: 'Item not found in cart' });
//     }

//     if (quantity > 0) {
//       cart.items[cartItemIndex].quantity = quantity;
//     } else {
//       cart.items.splice(cartItemIndex, 1);
//     }

//     await cart.save();

//     const updatedCartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

//     res.status(200).json({ message: 'Cart item updated', cartCount: updatedCartCount });
//   } catch (error) {
//     console.error('Error updating cart item:', error);
//     res.status(500).json({ message: 'Error updating cart item', error: error.message });
//   }
// };

// exports.removeCartItem = async (req, res) => {
//   try {
//     const { itemId } = req.params;
//     const userId = req.user.id;

//     const cart = await Cart.findOne({ user: userId });
//     if (!cart) {
//       return res.status(404).json({ message: 'Cart not found' });
//     }

//     const cartItemIndex = cart.items.findIndex(item => item.menuItem.toString() === itemId);
//     if (cartItemIndex === -1) {
//       return res.status(404).json({ message: 'Item not found in cart' });
//     }

//     cart.items.splice(cartItemIndex, 1);

//     await cart.save();

//     const updatedCartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

//     res.status(200).json({ message: 'Item removed from cart', cartCount: updatedCartCount });
//   } catch (error) {
//     console.error('Error removing item from cart:', error);
//     res.status(500).json({ message: 'Error removing item from cart', error: error.message });
//   }
// };


// // Get cart count
// exports.getCartCount = async (req, res) => {
//   try {
//     const userId = req.user.id;

//     const cart = await Cart.findOne({ user: userId });
//     const count = cart ? cart.items.reduce((sum, item) => sum + item.quantity, 0) : 0;

//     res.status(200).json({ count });
//   } catch (error) {
//     console.error('Error fetching cart count:', error);
//     res.status(500).json({ message: 'Error fetching cart count', error: error.message });
//   }
// };




// exports.addToCart = async (req, res) => {
//   try {
//     const { menuItemId, quantity } = req.body;
//     const userId = req.user.id;

//     let cart = await Cart.findOne({ user: userId });

//     if (!cart) {
//       cart = new Cart({ user: userId, items: [] });
//     }

//     const existingItemIndex = cart.items.findIndex(item => item.menuItem.toString() === menuItemId);

//     if (existingItemIndex > -1) {
//       cart.items[existingItemIndex].quantity += quantity;
//     } else {
//       cart.items.push({ menuItem: menuItemId, quantity });
//     }

//     await cart.save();

//     const cartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

//     res.status(200).json({ message: 'Item added to cart', cartCount });
//   } catch (error) {
//     console.error('Error adding item to cart:', error);
//     res.status(500).json({ message: 'Error adding item to cart', error: error.message });
//   }
// };

const Cart = require('../models/Cart');

const MenuItem = require('../models/MenuItem');

exports.addToCart = async (req, res) => {
  try {
    const { itemId, quantity } = req.body;
    const userId = req.user.id;

    console.log('Request body:', req.body);
    console.log('User ID:', userId);

    if (!itemId || !quantity) {
      return res.status(400).json({ message: 'ItemId and quantity are required' });
    }

    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      console.log('Creating new cart for user');
      cart = new Cart({ user: userId, items: [] });
    }

    const menuItem = await MenuItem.findById(itemId);
    if (!menuItem) {
      console.log('Menu item not found:', itemId);
      return res.status(404).json({ message: 'Menu item not found' });
    }

    console.log('Menu item found:', menuItem);

    const existingItemIndex = cart.items.findIndex(item => item.menuItem.toString() === itemId);
    if (existingItemIndex > -1) {
      console.log('Updating existing item in cart');
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      console.log('Adding new item to cart');
      cart.items.push({ menuItem: itemId, quantity });
    }

    console.log('Saving cart:', cart);
    await cart.save();

    const cartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

    console.log('Cart saved successfully. Cart count:', cartCount);
    res.status(200).json({ message: 'Item added to cart', cartCount });
  } catch (error) {
    console.error('Error in addToCart:', error);
    res.status(500).json({ message: 'Error adding item to cart', error: error.message, stack: error.stack });
  }
};


exports.getCartItems = async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await Cart.findOne({ user: userId }).populate('items.menuItem');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json({ items: cart.items });
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

    res.status(200).json({ message: 'Cart item updated', cartCount });
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

    res.status(200).json({ message: 'Item removed from cart', cartCount });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ message: 'Error removing item from cart', error: error.message });
  }
};


// Get cart count
exports.getCartCount = async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await Cart.findOne({ user: userId });
    const count = cart ? cart.items.reduce((sum, item) => sum + item.quantity, 0) : 0;

    res.status(200).json({ count });
  } catch (error) {
    console.error('Error fetching cart count:', error);
    res.status(500).json({ message: 'Error fetching cart count', error: error.message });
  }
};
