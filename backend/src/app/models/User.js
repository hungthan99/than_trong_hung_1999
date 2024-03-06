const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const User = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
  phone: { type: String, required: true },
  website: { type: String, required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
});

User.plugin(AutoIncrement, { inc_field: 'id' });

module.exports = mongoose.model("User", User);
