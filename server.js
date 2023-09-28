const express = require('express');
const app = express();
const PORT = 3000;

/**
 * Handle GET requests to the root URL
 * @param {object} req - The request object
 * @param {object} res - The response object
 */
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <h1>Hello, World! I am the server!</h1>
        <p>I am listening on port ${PORT}.</p>
      </body>
    </html>
  `);
});

/**
 * Start the server
 */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
