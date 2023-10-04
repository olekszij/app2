const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Изменено для работы с Vercel

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <h1>Hello, World! I am the server! Test phrase! 555</h1>
        <p>I am listening on port ${PORT}.</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
