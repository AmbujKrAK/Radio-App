// db.js
const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

connection.query(`SELECT * FROM stations`,(err, result, fields)=>{
  if(err){
    return console.log(err);
  }
  return console.log(result);
})

module.exports = connection;
