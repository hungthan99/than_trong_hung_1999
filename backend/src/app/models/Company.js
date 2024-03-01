const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Company = new Schema({
  name: { type: String, required: true },
  catchPhrase: { type: String, required: true },
  bs: { type: String, required: true },
});

module.exports = mongoose.model("Company", Company);
