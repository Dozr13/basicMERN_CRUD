const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  book_title: {
    type: String,
    required: true,
  },
  book_isbn: {
    type: String,
    required: true,
  },
  book_author: {
    type: String,
    required: true,
  },
  book_description: {
    type: String,
    required: false,
  },
  book_published_date: {
    type: Date,
    required: false,
  },
  book_publisher: {
    type: String,
    required: false,
  },
  book_updated_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Book = mongoose.model("book", BookSchema);
