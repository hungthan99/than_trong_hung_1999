const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config()

function connect() {
  mongoose
    .connect(process.env.DB_CONNECT_URL)
    .then(() => console.log("Connected successfully!"))
    .catch((err) => console.log("Connect failure. Error: " + err));
}

module.exports = { connect };