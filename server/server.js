const express = require('express');
const cors = require('cors');
require('dotenv').config();

const logRoute = require("./routes/logRoutes");
const voteRoutes = require('./routes/voteRoutes');
const resultsRoutes = require("./routes/resultsRoutes");
const metaRoutes = require('./routes/metaRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(express.json());

app.use('/api/persons', voteRoutes);
app.use('/api/logs', logRoute);
app.use("/api/results", resultsRoutes);
app.use('/api', metaRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});