const express = require('express');
const app = express();
const PORT = 3000;

// Initialize counter
let counter = 0;

// Middleware to parse JSON in the request body
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ counter });
});

//  increment the counter
app.post('/increment', (req, res) => {
  counter++;
  res.json({counter });
});

// decrement the counter
app.post('/decrement', (req, res) => {
  counter--;
  res.json({ counter });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
