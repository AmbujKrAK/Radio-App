// routes/stations.js
const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all stations
router.get("/", (req, res) => {
  db.query("SELECT * FROM stations", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// POST: Add new station
router.post("/", (req, res) => {
  const { name, stream_url } = req.body;
  if (!name || !stream_url) {
    return res.status(400).json({ error: "Name and stream URL are required" });
  }
  db.query(
    "INSERT INTO stations (name, stream_url) VALUES (?, ?)",
    [name, stream_url],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: "Station added", id: result.insertId });
    }
  );
});

// PUT: Update a station
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, stream_url } = req.body;
  if (!name || !stream_url) {
    return res.status(400).json({ error: "Name and stream URL are required" });
  }
  db.query(
    "UPDATE stations SET name = ?, stream_url = ? WHERE id = ?",
    [name, stream_url, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0)
        return res.status(404).json({ error: "Station not found" });
      res.json({ message: "Station updated" });
    }
  );
});

// DELETE: Remove a station
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM stations WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Station not found" });
    res.json({ message: "Station deleted" });
  });
});

module.exports = router;
