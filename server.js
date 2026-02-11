const express = require('express');
const app = express();
const testRoutes = require('./routes/testRoutes');

const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Import route
app.use('/api', testRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Hello this is CI/CD pipelines 🚀');
});

// Use route

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
