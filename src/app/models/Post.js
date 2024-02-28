const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Post", Post);
