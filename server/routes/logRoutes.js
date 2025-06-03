const express = require("express");
const router = express.Router();
const db = require("../models/db"); // your db connection module

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM log ORDER BY change_time DESC");
    res.json(rows);
  } catch (err) {
    console.error("Error fetching logs:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;