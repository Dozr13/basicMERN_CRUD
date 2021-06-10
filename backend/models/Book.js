const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  published_date: {
    type: Date,
    required: false,
  },
  publisher: {
    type: String,
    required: false,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Book = mongoose.model("book", BookSchema);
