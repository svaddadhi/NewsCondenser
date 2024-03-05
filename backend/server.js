const express = require('express');
require('dotenv').config(); // Load environment variables from .env file
const app = express();
const cors = require('cors');
const newsRoutes = require('./routes/newsRoutes');

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors());

// Test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', newsRoutes);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
