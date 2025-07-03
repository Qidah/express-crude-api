const express = require('express');
const app = express();
const PORT = 3000;

const itemsRoutes = require('./routes/itemsRoutes');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!.');
});

app.use('/items', itemsRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
