


// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');

dotenv.config();
connectDB();

const app = express();
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Import Routes
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
const customFoodRoutes = require('./routes/customFoodRoutes');

// Use Routes
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', menuItemRoutes);
app.use('/api/custom-foods', customFoodRoutes);
const feedbackRoutes = require('./routes/feedbackRoutes');
app.use('/api/feedback', feedbackRoutes);
const driverRoutes = require('./routes/driverRoutes');
app.use('/api/drivers', driverRoutes);
const foodSoonRoutes = require('./routes/foodSoonRoutes');
app.use('/api/food-soon', foodSoonRoutes);

///

const paymentRoutes = require('./routes/paymentRoutes');
app.use('/api/payments', paymentRoutes);

///
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));