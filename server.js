const express = require('express');
const app = express();
const PORT = 3000;

/**
 * Handle GET requests to the root URL
 * @param {object} req - The request object
 * @param {object} res - The response object
 */
app.get('/', (req, res) => {
  res.send('Hello, World! I am the server!');
});

/**
 * Start the server
 */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
//npm install -g nodemon
//nodemon server.js

// https://github.com/olekszij/app.git
