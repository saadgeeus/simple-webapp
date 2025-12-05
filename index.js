const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Route: /Home -> serve index.html
app.get('/Home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Default route
app.get('/', (req, res) => {
  res.send("Welcome! Try /Home");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
