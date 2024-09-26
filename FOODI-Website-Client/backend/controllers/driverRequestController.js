// const DriverRequest = require('../models/driveModel');

// exports.createDriverRequest = async (req, res) => {
//   try {
//     const newDriverRequest = new DriverRequest(req.body);
//     await newDriverRequest.save();
//     res.status(201).json({ message: 'Driver request submitted successfully' });
//   } catch (error) {
//     res.status(400).json({ message: 'Error submitting driver request', error: error.message });
//   }
// };


// const DriverRequest = require('../models/driveModel');

// exports.createDriverRequest = async (req, res) => {
//   try {
//     const newDriverRequest = new DriverRequest(req.body);
//     await newDriverRequest.save();
//     res.status(201).json({ message: 'Driver request submitted successfully' });
//   } catch (error) {
//     res.status(400).json({ message: 'Error submitting driver request', error: error.message });
//   }
// };


const DriverRequest = require('../models/driveModel');

exports.createDriverRequest = async (req, res) => {
  try {
    console.log('Received data:', req.body);
    const newDriverRequest = new DriverRequest(req.body);
    await newDriverRequest.save();
    res.status(201).json({ message: 'Driver request submitted successfully' });
  } catch (error) {
    console.error('Error details:', error);
    res.status(400).json({ message: 'Error submitting driver request', error: error.message });
  }
};