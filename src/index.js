const express = require('express')
const dotenv = require("dotenv");

const db = require('./config/db')

const app = express()

app.use(express.json());

dotenv.config();

// Connect database
db.connect()

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})