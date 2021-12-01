const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    text: { type: String, required: true },
    postId: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Comment', CommentSchema)
