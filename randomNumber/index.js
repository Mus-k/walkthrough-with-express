const express = require('express');
const app = express();
const PORT = 8081;

// Route to generate a random number
app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
  res.json({ random: randomNumber });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
