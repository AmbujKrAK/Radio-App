📱 Flutter – Frontend
🔧 Setup
Install Flutter SDK: Flutter Install Guide

Use VS Code or Android Studio

Emulator or real device for testing

📚 Learn Flutter – Free Resources
Flutter Official Docs

Flutter Beginner Tutorial – CodeWithAndrea

Flutter Playlist – Reso Coder

🔌 Key Packages
yaml
Copy
Edit
dependencies:
  just_audio: ^0.9.34
  http: ^0.14.0
  provider: ^6.1.0 # or use riverpod
🎧 Play Stream Example
dart
Copy
Edit
final player = AudioPlayer();
await player.setUrl('https://your-stream-url-here');
player.play();
🌐 Node.js – Backend API
🔧 Setup
Install Node.js: Node.js Website

Use VS Code or any code editor

📚 Learn Node.js – Free Resources
Node.js Crash Course – Traversy Media

Node.js Full Path – The Odin Project

📦 Install Express and MySQL
bash
Copy
Edit
npm init -y
npm install express mysql2 cors
🚀 Sample Backend Code (Stations API)
js
Copy
Edit
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'radio_app'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected');
});

app.get('/stations', (req, res) => {
  db.query('SELECT * FROM stations', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
🗃️ MySQL – Database
🔧 Setup
Use XAMPP (includes MySQL + phpMyAdmin)

Or MySQL Installer

Or cloud: Planetscale (Free)

📚 Learn MySQL – Free Resources
W3Schools – MySQL

SQLBolt (Interactive)

MySQL Course – freeCodeCamp

🧩 Example Schema
sql
Copy
Edit
CREATE TABLE stations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  stream_url TEXT,
  genre VARCHAR(100),
  country VARCHAR(100)
);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(255)
);

CREATE TABLE favorites (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  station_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (station_id) REFERENCES stations(id)
);
📡 Free FM Radio Streams (Use These for Testing)
You can use these public streaming URLs — just plug them into your Flutter app:

🔊 Example Stream URLs
json
Copy
Edit
[
  {
    "name": "Cool FM (Lagos)",
    "url": "https://stream.coolfm.ng:8080/stream"
  },
  {
    "name": "Radio Swiss Jazz",
    "url": "https://stream.srg-ssr.ch/m/rsj/mp3_128"
  },
  {
    "name": "NPR Live 24",
    "url": "https://npr-ice.streamguys1.com/live.mp3"
  },
  {
    "name": "BBC World Service",
    "url": "http://stream.live.vc.bbcmedia.co.uk/bbc_world_service"
  }
]
🌍 Find More Streams
🌱 Radio Garden

📻 Internet-Radio.com

🔊 Shoutcast Directory

🧾 Look for .mp3, .aac, .pls, .m3u stream links

💡 Always check if you’re allowed to use these streams in a commercial app.

🧱 Project Folder Structure (Recommended)
Node.js Backend
bash
Copy
Edit
/backend
├── app.js
├── db.js
├── routes/
│   └── stations.js
│   └── users.js
└── controllers/
Flutter Frontend
bash
Copy
Edit
/lib
├── main.dart
├── screens/
│   └── home_screen.dart
│   └── player_screen.dart
├── models/
├── services/
│   └── api_service.dart
📌 Full Workflow Summary
pgsql
Copy
Edit
Flutter App
  ↓
Calls Node.js API via HTTP
  ↓
Node.js fetches data from MySQL
  ↓
Returns station list to Flutter
  ↓
Flutter uses just_audio to stream selected station