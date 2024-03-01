const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
  phone: { type: String, required: true },
  website: { type: String, required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
});

module.exports = mongoose.model("User", User);
