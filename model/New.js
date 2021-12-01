const mongoose = require('mongoose')

const NewSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    type: { type: String, required: true },
    comments: { type: Array, default: [] },
  },
  { timestamps: true }
)

module.exports = mongoose.model('New', NewSchema)
