const db = require("../db");

const getResults = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM TULEMUSED LIMIT 1");
    if (rows.length === 0) {
      return res.status(404).json({ message: "No results found" });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error("Error fetching results:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getResults };