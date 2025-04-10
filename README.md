🚀 Project Overview

Frontend: Flutter (for iOS & Android)

Backend: Node.js (API, user management, maybe analytics)

Streaming: You’ll need access to radio stream URLs (many public stations offer this for free)

Database : MySql

#######################################

📱 Frontend: Flutter

Key Flutter Packages:
just_audio: For streaming audio

provider or riverpod: For state management

http: For API calls

flutter_hooks (optional): To simplify state and lifecycle


/lib
├── main.dart
├── screens/
│   └── home_screen.dart
│   └── player_screen.dart
├── models/
├── services/
│   └── api_service.dart


🔌 Key Packages

dependencies:
  just_audio: ^0.9.34
  http: ^0.14.0
  provider: ^6.1.0 # or use riverpod


🎧 Play Stream Example

final player = AudioPlayer();
await player.setUrl('https://your-stream-url-here');
player.play();


##########################################

🌐 Backend: Node.js

Build a Basic API:
Use Express.js to serve:

Station list

Categories

(Optional) User favorite stations (store in DB)


/backend
├── app.js
├── db.js
├── routes/
│   └── stations.js
│   └── users.js
└── controllers/

📦 Install Express and MySQL

npm init -y
npm install express mysql2 cors




##########################################

📡 Finding FM Stream URLs

Some public radio stations provide free streaming:

Radio Garden

Internet-Radio.com

Shoutcast Directory

Look for .m3u, .pls, or direct .mp3/.aac stream URLs

You can use these in your app, but always check if the stream is publicly allowed to be rebroadcasted.



###########################################

📡 Free FM Radio Streams (Use These for Testing)

You can use these public streaming URLs — just plug them into your Flutter app:

🔊 Example Stream URLs


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
  },
  {
    "name": "Radio Paradise",
    "url": "http://stream.radioparadise.com/mp3-128"
  },
  {
    "name": "Chilltrax",
    "url": "http://ais-sa2.cdnstream1.com:8124/128"
  },
  {
    "name": "80s Planet",
    "url": "http://us2.internet-radio.com:8050/stream"
  },
  {
    "name": "BBC World Service",
    "url": "http://stream.live.vc.bbcmedia.co.uk/bbc_world_service"
  }
]



##################################

📌 Full Workflow Summary

Flutter App
  ↓
Calls Node.js API via HTTP
  ↓
Node.js fetches data from MySQL
  ↓
Returns station list to Flutter
  ↓
Flutter uses just_audio to stream selected station
