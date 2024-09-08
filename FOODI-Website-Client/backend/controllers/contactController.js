// controllers/contactController.js
const Contact = require('../models/Contact'); // Ensure the path matches your structure

// Create a new contact message
const createContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new contact document
    const newContact = new Contact({
      name,
      email,
      message,
    });

    // Save the contact document to the database
    await newContact.save();

    // Respond with a success message
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    // Respond with an error message
    res.status(500).json({ error: 'An error occurred while sending the message.' });
  }
};

module.exports = {
  createContactMessage,
};
