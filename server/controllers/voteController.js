const db = require('../models/db');

const addVote = (req, res) => {
  const { full_name, vote_time, vote_value } = req.body;

  const sql = 'INSERT INTO persons (full_name, vote_time, vote_value) VALUES (?, ?, ?)';
  db.query(sql, [full_name, vote_time, vote_value], (err, result) => {
    if (err) {
      console.error('Error inserting person:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.status(201).json({ message: 'Person added', id: result.insertId });
    }
  });
};

module.exports = { addVote };