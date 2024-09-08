

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: function () {
      return !this.googleId;
    },
  },

  googleId: {
    type: String, // Optional field for Google login
  },
  isActive: { type: Boolean, default: true },
  image: { type: String, default: null },
  response: { type: String },

});

module.exports = mongoose.model("User", userSchema);