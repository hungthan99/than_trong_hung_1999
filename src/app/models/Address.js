const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Address = new Schema({
  street: { type: String, required: true },
  suite: { type: String, required: true },
  city: { type: String, required: true },
  zipcode: { type: String, required: true },
  geo: { type: mongoose.Schema.Types.ObjectId, ref: "Geo" },
});

module.exports = mongoose.model("Address", Address);
