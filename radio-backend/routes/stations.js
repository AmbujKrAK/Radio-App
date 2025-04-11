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

// POST: Add new station -> 
// name = name of the channel,
// stream_url = url ,location = plece(eg - us, uk, india),
// langauge = lang(eg - eng , hin,
// type = type of podcast(eg - news, podcast, music) 

router.post("/", (req, res) => {
  const { name, stream_url ,location , langauge, type} = req.body;
  if (!name || !stream_url || !location || !langauge || !type) {
    return res.status(400).json({ error: "Name, stream URL, location, lagauge and type are required" });
  }
  db.query(
    "INSERT INTO stations (name, stream_url, location, langauge, type) VALUES (?, ?, ?, ?, ?)",
    [name, stream_url, location, langauge, type],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: "Station added", id: result.insertId });
    }
  );
});

// PUT: Update a station ->
// name = name of the channel, 
// stream_url = url ,location = plece(eg - us, uk, india),
// langauge = lang(eg - eng , hin,
// type = type of podcast(eg - news, podcast, music) 

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, stream_url, location, langauge, type } = req.body;
  if (!name || !stream_url || !location || !langauge || !type) {
    return res.status(400).json({ error: "Name, stream_url, location, langauge and type are required" });
  }
  db.query(
    "UPDATE stations SET name = ?, stream_url = ?, location = ?, langauge = ?, type = ? WHERE id = ?",
    [name, stream_url, location, langauge, type, id],
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
