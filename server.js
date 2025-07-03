const express = require('express');
const app = express();
const PORT = 3000;

const itemsRoutes = require('./routes/itemsRoutes');

app.use(express.json());

// Confirm server is working
app.get('/', (req, res) => {
  res.send('Hello, World!.');
});

// Routes
app.use('/items', itemsRoutes);

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
