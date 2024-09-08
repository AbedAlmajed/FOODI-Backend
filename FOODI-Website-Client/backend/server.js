

// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const cors = require('cors');
const cookieParser = require('cookie-parser');
const passport = require('passport');
require('./config/passport'); // Passport configuration for Google

dotenv.config();
connectDB();

const app = express();
const contactRoutes = require('./routes/contactRoutes'); // Import the contact routes
const menuItemRoutes = require('./routes/menuItemRoutes');

// Middleware
// app.use(cors());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));



app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());


// Routes
app.use('/api/users', require('./routes/userRoutes')); // User routes
app.use('/api', contactRoutes); // Add a base path if needed
app.use('/api', menuItemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
