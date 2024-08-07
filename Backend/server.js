const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import routes
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/orders');

// Initialize express app
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection URI
const mongoURI = 'mongodb+srv://deepindersingh4359:SUpcjDgYFeizlySq@cluster0.gdiwsur.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Use routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
