const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const Post = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

Post.plugin(AutoIncrement, { inc_field: 'post_id' });

module.exports = mongoose.model("Post", Post);
