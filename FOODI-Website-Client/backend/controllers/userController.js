


// const User = require('../models/User');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const CustomFood = require('../models/CustomFood');

// exports.registerUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const userExists = await User.findOne({ email });

//     if (userExists) {
//       return res.status(400).json({ message: 'المستخدم موجود بالفعل' });
//     }

//     const user = await User.create({ name, email, password });

//     const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, process.env.JWT_SECRET, {
//       expiresIn: '1d',
//     });

//     res.cookie('token', token, { 
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'strict',
//       maxAge: 24 * 60 * 60 * 1000 // 1 day
//     });

//     res.status(201).json({ message: 'تم تسجيل المستخدم بنجاح', userID: user._id, token });
//   } catch (error) {
//     res.status(500).json({ error: 'حدث خطأ أثناء التسجيل' });
//   }
// };

// exports.loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: 'المستخدم غير موجود' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'بيانات الاعتماد غير صالحة' });
//     }

//     const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, process.env.JWT_SECRET, {
//       expiresIn: '1d',
//     });

//     res.cookie('token', token, { 
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'strict',
//       maxAge: 24 * 60 * 60 * 1000
//     });

//     res.status(200).json({ message: 'تم تسجيل الدخول بنجاح', userID: user._id, token });
//   } catch (error) {
//     res.status(500).json({ error: 'حدث خطأ أثناء تسجيل الدخول' });
//   }
// };




// exports.getUserProfile = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const user = await User.findById(userId).select('-password');

//     if (!user) {
//       return res.status(404).json({ message: 'المستخدم غير موجود' });
//     }

//     // Fetch custom foods created by the user
//     const customFoods = await CustomFood.find({ user: userId, isApproved: true });

//     res.status(200).json({ user, customFoods });
//   } catch (error) {
//     res.status(500).json({ error: 'حدث خطأ أثناء جلب ملف المستخدم الشخصي' });
//   }
// };


// exports.updateUserProfile = async (req, res) => {
//   const { name, email, password, profilePhotoLink } = req.body;
//   const userId = req.params.userId;

//   try {
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({ message: 'المستخدم غير موجود' });
//     }

//     if (name) user.name = name;
//     if (email) user.email = email;
//     if (profilePhotoLink) user.image = profilePhotoLink;

//     if (password) {
//       user.password = await bcrypt.hash(password, 10);
//     }

//     await user.save();

//     res.status(200).json({ message: 'تم تحديث الملف الشخصي بنجاح' });
//   } catch (error) {
//     res.status(500).json({ error: 'حدث خطأ أثناء تحديث الملف الشخصي' });
//   }
// };

// exports.googleAuth = (req, res) => {
//   const token = jwt.sign({ id: req.user._id, name: req.user.name, email: req.user.email }, process.env.JWT_SECRET, {
//     expiresIn: '1d',
//   });

//   res.cookie('token', token, { 
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'strict',
//     maxAge: 24 * 60 * 60 * 1000
//   });

//   // res.redirect(`${process.env.CLIENT_URL}?userID=${req.user._id}&token=${token}`);
//   res.redirect(`http://localhost:5173/?userID=${req.user._id}&token=${token}`);

// };



// exports.addFavoriteFood = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const { itemId } = req.body;

//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'المستخدم غير موجود' });
//     }

//     if (!user.favorites) {
//       user.favorites = [];
//     }

//     if (!user.favorites.includes(itemId)) {
//       user.favorites.push(itemId);
//       await user.save();
//       res.status(200).json({ message: 'تمت إضافة الطعام إلى المفضلة' });
//     } else {
//       user.favorites = user.favorites.filter(id => id.toString() !== itemId);
//       await user.save();
//       res.status(200).json({ message: 'تمت إزالة الطعام من المفضلة' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'حدث خطأ أثناء تحديث الأطعمة المفضلة' });
//   }
// };

// exports.getFavoriteFoods = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const user = await User.findById(userId).populate('favorites');
    
//     if (!user) {
//       return res.status(404).json({ message: 'المستخدم غير موجود' });
//     }

//     res.status(200).json(user.favorites);
//   } catch (error) {
//     res.status(500).json({ error: 'حدث خطأ أثناء جلب الأطعمة المفضلة' });
//   }
// };
//////////////////////////////////////

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const CustomFood = require('../models/CustomFood');
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);




exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'المستخدم موجود بالفعل' });
    }

    const user = await User.create({ name, email, password });

    const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.cookie('token', token, { 
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    res.status(201).json({ message: 'تم تسجيل المستخدم بنجاح', userID: user._id, token });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ أثناء التسجيل' });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'المستخدم غير موجود' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'بيانات الاعتماد غير صالحة' });
    }

    const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.cookie('token', token, { 
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000
    });

    res.status(200).json({ message: 'تم تسجيل الدخول بنجاح', userID: user._id, token });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ أثناء تسجيل الدخول' });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'المستخدم غير موجود' });
    }

    // Fetch custom foods created by the user
    const customFoods = await CustomFood.find({ user: userId, isApproved: true });

    res.status(200).json({ user, customFoods });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ أثناء جلب ملف المستخدم الشخصي' });
  }
};

exports.updateUserProfile = async (req, res) => {
  const { name, email, password, profilePhotoLink } = req.body;
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'المستخدم غير موجود' });
    }

    if (name) user.name = name;
    if (email) user.email = email;
    if (profilePhotoLink) user.image = profilePhotoLink;

    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }

    await user.save();

    res.status(200).json({ message: 'تم تحديث الملف الشخصي بنجاح' });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ أثناء تحديث الملف الشخصي' });
  }
};

exports.addFavoriteFood = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { itemId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'المستخدم غير موجود' });
    }

    if (!user.favorites) {
      user.favorites = [];
    }

    if (!user.favorites.includes(itemId)) {
      user.favorites.push(itemId);
      await user.save();
      res.status(200).json({ message: 'تمت إضافة الطعام إلى المفضلة' });
    } else {
      user.favorites = user.favorites.filter(id => id.toString() !== itemId);
      await user.save();
      res.status(200).json({ message: 'تمت إزالة الطعام من المفضلة' });
    }
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ أثناء تحديث الأطعمة المفضلة' });
  }
};

exports.getFavoriteFoods = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId).populate('favorites');
    
    if (!user) {
      return res.status(404).json({ message: 'المستخدم غير موجود' });
    }

    res.status(200).json(user.favorites);
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ أثناء جلب الأطعمة المفضلة' });
  }
};
////////////////////////////


 
//////////////////////////////GooGle///
exports.googleSignup = async (req, res) => {
  try {
    const { credential } = req.body;

    // Verify the ID token
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID // This must match exactly with your frontend client ID
    });

    const payload = ticket.getPayload();
    const { email, name, picture, sub: googleId } = payload;

    // Check if user exists
    let user = await User.findOne({ email });

    if (!user) {
      // Create new user if doesn't exist
      user = await User.create({
        name,
        email,
        googleId,
        image: picture || "",
        // Don't set password for Google users
      });
    } else if (!user.googleId) {
      // If user exists but doesn't have googleId, update it
      user.googleId = googleId;
      await user.save();
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Set cookies and send response
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000
    });

    res.status(200).json({
      success: true,
      message: 'Google signup successful',
      token,
      userID: user._id
    });

  } catch (error) {
    console.error('Google signup error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error during Google signup',
      error: error.message 
    });
  }
};

////////////

exports.googleLogin = async (req, res) => {
  try {
    const { credential } = req.body;

    // Verify the ID token
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    const { email, sub: googleId } = payload;

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ 
        success: false,
        message: 'No account found with this Google email. Please sign up first.'
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Set cookies and send response
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000
    });

    res.status(200).json({
      success: true,
      message: 'Google login successful',
      token,
      userID: user._id
    });

  } catch (error) {
    console.error('Google login error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error during Google login',
      error: error.message 
    });
  }
};