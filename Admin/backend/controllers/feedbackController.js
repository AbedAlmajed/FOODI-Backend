// controllers/feedbackController.js
const Feedback = require('../models/Feedback');

exports.getAllFeedback = async (req, res) => {
  try {
    // const feedback = await Feedback.find();
    const feedback = await Feedback.find().populate('userId', 'name image');

    res.json(feedback);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.updateFeedbackStatus = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback) {
      return res.status(404).json({ msg: 'Feedback not found' });
    }
    feedback.isApproved = req.body.isApproved;
    await feedback.save();
    res.json(feedback);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
