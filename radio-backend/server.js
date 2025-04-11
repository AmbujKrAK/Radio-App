// server.js
const express = require('express');
const app = express();
const stationsRoute = require('./routes/stations');
require('dotenv').config();

// to print items on web browser
app.get("/", (req,res) => res.send("Hello World"));

app.use(express.json());

app.use('/api/stations', stationsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
