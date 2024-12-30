const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

const app = express();

// Middleware to parse JSON and handle CORS
app.use(express.json());
app.use(cors()); 

// MongoDB Connection (Updated)
mongoose.connect('mongodb://127.0.0.1:27017/task-tracking-db')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use('/tasks', taskRoutes);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
