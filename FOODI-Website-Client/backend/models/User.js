


// // models/User.js
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: {
//     type: String,
//     required: function () {
//       return !this.googleId;
//     },
//   },
//   googleId: {
//     type: String,
//     required: true,
//   },
//   image: { type: String, default: "" },
//   favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }]
// });

// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     return next();
//   }
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// module.exports = mongoose.model('User', userSchema);
////////////////////////////

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: function() {
      return !this.googleId; // Password is not required if googleId exists
    }
  },
  googleId: {
    type: String,
    required: false // Changed to false since it's optional
  },
  image: { type: String, default: "" },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }]
});

userSchema.pre('save', async function(next) {
  if (this.isModified('password') && this.password) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

module.exports = mongoose.model('User', userSchema);