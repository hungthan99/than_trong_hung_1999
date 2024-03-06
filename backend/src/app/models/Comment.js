const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const Comment = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  body: { type: String, required: true },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
});

Comment.plugin(AutoIncrement, { inc_field: 'comment_id' });

module.exports = mongoose.model("Comment", Comment);
