const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Authentication routes
app.use('/api/auth', require('./routes/authRoutes'));

// Routes
app.use('/api/invoices', require('./routes/invoiceRoutes')); // Invoices routes

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
