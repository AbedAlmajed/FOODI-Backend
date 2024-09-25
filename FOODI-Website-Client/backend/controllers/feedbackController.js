// // controllers/feedbackController.js
// const Feedback = require('../models/Feedback');

// exports.createFeedback = async (req, res) => {
//   try {
//     const { rating, feedback,isApproved } = req.body;
//     const newFeedback = new Feedback({
//       rating,
//       feedback,
//       isApproved:false
//     });
//     await newFeedback.save();
//     res.status(201).json({ message: 'Feedback submitted successfully', feedback: newFeedback });
//   } catch (error) {
//     res.status(500).json({ message: 'Error submitting feedback', error: error.message });
//   }
// };

// exports.getAllFeedback = async (req, res) => {
//   try {
//     const feedbacks = await Feedback.find({ isApproved: true });
//     res.status(200).json(feedbacks);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching feedback', error: error.message });
//   }
// };









// // controllers/feedbackController.js
// const Feedback = require('../models/Feedback');

// exports.createFeedback = async (req, res) => {
//   try {
//     const { rating, feedback } = req.body;
//     const userId = req.user._id; // Assuming you have user authentication middleware

//     // Check if user has already submitted feedback
//     const existingFeedback = await Feedback.findOne({ userId });
//     if (existingFeedback) {
//       return res.status(400).json({ message: 'You have already submitted feedback' });
//     }

//     const newFeedback = new Feedback({
//       userId,
//       rating,
//       feedback,
//     });
//     await newFeedback.save();
//     res.status(201).json({ message: 'Feedback submitted successfully and pending approval' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error submitting feedback', error: error.message });
//   }
// };

// exports.getApprovedFeedback = async (req, res) => {
//   try {
//     const feedbacks = await Feedback.find({ isApproved: true });
//     res.status(200).json(feedbacks);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching feedback', error: error.message });
//   }
// };

// exports.getUserFeedback = async (req, res) => {
//   try {
//     const userId = req.user._id; // Assuming you have user authentication middleware
//     const feedback = await Feedback.findOne({ userId });
//     res.status(200).json(feedback);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching user feedback', error: error.message });
//   }
// };

// // Admin functions
// exports.getAllFeedback = async (req, res) => {
//   try {
//     const feedbacks = await Feedback.find();
//     res.status(200).json(feedbacks);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching all feedback', error: error.message });
//   }
// };

// exports.approveFeedback = async (req, res) => {
//   try {
//     const { feedbackId } = req.params;
//     const feedback = await Feedback.findByIdAndUpdate(feedbackId, { isApproved: true }, { new: true });
//     if (!feedback) {
//       return res.status(404).json({ message: 'Feedback not found' });
//     }
//     res.status(200).json({ message: 'Feedback approved successfully', feedback });
//   } catch (error) {
//     res.status(500).json({ message: 'Error approving feedback', error: error.message });
//   }
// };












// const Feedback = require('../models/Feedback');
// const User = require('../models/User');


// exports.createFeedback = async (req, res) => {
//     try {
//       const { rating, feedback } = req.body;
//       const userId = req.user.id;  // Assuming the user is authenticated and their ID is available in req.user
      
//       console.log("User ID:", userId);
//       console.log("Rating:", rating);
//       console.log("Feedback:", feedback);
  
//       const existingFeedback = await Feedback.findOne({ userId });
//       if (existingFeedback) {
//         return res.status(400).json({ message: 'You have already submitted feedback.' });
//       }
  
//       const newFeedback = new Feedback({
//         userId,
//         rating,
//         feedback,
//         isApproved: false
//       });
//       await newFeedback.save();
//       res.status(201).json({ message: 'Feedback submitted successfully', feedback: newFeedback });
//     } catch (error) {
//       console.error('Error creating feedback:', error);
//       res.status(500).json({ message: 'Error submitting feedback', error: error.message });
//     }
//   };
  


// // Get All Approved Feedback
// exports.getAllFeedback = async (req, res) => {
//   try {
//     const feedbacks = await Feedback.find({ isApproved: true }).populate('userId', 'name');  // Populating user name
//     res.status(200).json(feedbacks);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching feedback', error: error.message });
//   }
// };





const Feedback = require('../models/Feedback');

exports.createFeedback = async (req, res) => {
  try {
    const { rating, feedback } = req.body;
    const userId = req.user.id;

    const existingFeedback = await Feedback.findOne({ userId });
    if (existingFeedback) {
      return res.status(400).json({ message: 'You have already submitted feedback. Use the update endpoint to modify your feedback.' });
    }

    const newFeedback = new Feedback({
      userId,
      rating,
      feedback,
      isApproved: false
    });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully', feedback: newFeedback });
  } catch (error) {
    console.error('Error creating feedback:', error);
    res.status(500).json({ message: 'Error submitting feedback', error: error.message });
  }
};

exports.updateFeedback = async (req, res) => {
  try {
    const { rating, feedback } = req.body;
    const userId = req.user.id;

    const existingFeedback = await Feedback.findOne({ userId });
    if (!existingFeedback) {
      return res.status(404).json({ message: 'No feedback found for this user.' });
    }

    existingFeedback.rating = rating;
    existingFeedback.feedback = feedback;
    existingFeedback.isApproved = false; // Reset approval status on update
    await existingFeedback.save();

    res.status(200).json({ message: 'Feedback updated successfully', feedback: existingFeedback });
  } catch (error) {
    console.error('Error updating feedback:', error);
    res.status(500).json({ message: 'Error updating feedback', error: error.message });
  }
};

exports.getAllApprovedFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ isApproved: true }).populate('userId', 'name');
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching feedback', error: error.message });
  }
};

exports.getUserFeedback = async (req, res) => {
  try {
    const userId = req.user.id;
    const feedback = await Feedback.findOne({ userId });
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user feedback', error: error.message });
  }
};