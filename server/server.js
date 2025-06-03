const express = require('express');
const cors = require('cors');
require('dotenv').config();

const logsRoute = require("./routes/logsRoutes");
const voteRoutes = require('./routes/voteRoutes');
const resultsRoutes = require("./routes/resultsRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(express.json());

app.use('/api/persons', voteRoutes);
app.use('/api/logs', logsRoute);
app.use("/api/results", resultsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});