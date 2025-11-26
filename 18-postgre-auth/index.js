// postgres://avnadmin:AVNS_w0uRFB7nQsMDoehL24Z@pg-2e7fdba1-kcmgame04-760e.e.aivencloud.com:25961/defaultdb?sslmode=require

const express = require('express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const app = express();
const port = 3031;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Initialize pg-promise correctly (call the factory first), and prefer
// a connection string from environment for safety.
const connectionString = 'PUT YOUR CONNECTION STRING HERE';
const db = pgp(connectionString);




app.get("/", async (req, res) => {
  try {
    // await the query and send a response so the request doesn't hang
    const data = await db.one('SELECT $1 AS value', 123);
    console.log('DATA:', data.value);
    res.send(`Value: ${data.value}`);
  } catch (err) {
    console.error('DB ERROR:', err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
