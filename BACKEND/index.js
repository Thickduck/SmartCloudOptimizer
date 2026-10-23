const express = require('express');
const cors = require('cors');
const duckdb = require('duckdb');

const app = express();
const port = 5000;

// Enable CORS so your Vite app (localhost:5173) can fetch data
app.use(cors());
app.use(express.json());

// Initialize DuckDB (In-memory for now, we will load files later)
const db = new duckdb.Database(':memory:');

// Basic health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running!', database: 'DuckDB connected' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});