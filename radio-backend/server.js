// server.js
const express = require('express');
const app = express();
const stationsRoute = require('./routes/stations');
require('dotenv').config();

app.use(express.json());

app.use('/api/stations', stationsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
