

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const passport = require('passport');
require('./config/passport');

dotenv.config();
connectDB();

const app = express();
const contactRoutes = require('./routes/contactRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
const cartRoutes = require('./routes/cartRoutes');
const customFoodRoutes = require('./routes/customFood');

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api', contactRoutes);
app.use('/api', menuItemRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api', customFoodRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));