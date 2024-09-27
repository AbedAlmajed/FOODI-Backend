// const mongoose = require('mongoose');

// const driverRequestSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, required: true },
//   vehicleType: { type: String, required: true },
//   licenseNumber: { type: String, required: true },
//   isApproved: { type: Boolean, default: false },
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('DriverRequest', driverRequestSchema);



// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const driverRequestSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     phone: { type: String, required: true },
//     vehicleType: { type: String, required: true },
//     licenseNumber: { type: String, required: true },
//     password: { type: String, required: true },
//     isApproved: { type: Boolean, default: false },
//     createdAt: { type: Date, default: Date.now }
//   });

// // Hash the password before saving
// driverRequestSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password, 12);
//   next();
// });

// module.exports = mongoose.model('DriverRequest', driverRequestSchema);

///////////////////////////////////////////////////////////////////////////////////work//////////////////

// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const driverRequestSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   phone: { type: String, required: true },
//   vehicleType: { type: String, required: true },
//   licenseNumber: { type: String, required: true },
//   password: { type: String, required: true },
//   isApproved: { type: Boolean, default: false },
//   createdAt: { type: Date, default: Date.now }
// });

// // Hash the password before saving
// driverRequestSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password, 12);
//   next();
// });

// module.exports = mongoose.model('DriverRequest', driverRequestSchema);








const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  vehicleType: { type: String, required: true },
  licenseNumber: { type: String, required: true },
  password: { type: String, required: true },
  isApproved: { type: Boolean, default: false },
  status: { type: String, enum: ['available', 'busy'], default: 'available' },/////new addded
  createdAt: { type: Date, default: Date.now }
});

driverSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

driverSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('Driver', driverSchema);