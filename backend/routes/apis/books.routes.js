const express = require("express");
const router = express.Router();

// Loads the books model
const Book = require("../../models/Book");

// GET route api/books/test
// Public access
router.get("/test", (req, res) => res.send("book route testing!"));

// POST id at api/books/:id to add and save a book
// Public access
router.post("/", (req, res) => {
  Book.create(req.body)
    .then((book) => res.json({ msg: "Book added successfully!" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this book.", err })
    );
});

// GET all at api/books
// Public access
router.get("/", (req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) =>
      res.status(400).json({ noBooksFound: "No Books Found", err })
    );
});

// GET id at api/books/:id to view single book
// Public access
router.get("/:id", (req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) =>
      res
        .status(404)
        .json({ noBookFound: "No Book found matching that id", err })
    );
});

// PUT id at api/books/:id to Update a book
// Public access
router.put("/:id", (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then((book) => res.json({ msg: "Updated book successfully!" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update this book" })
    );
});

// DELETE id at api/books/:id Delete a book
// Public access
router.delete("/:id", (req, res) => {
  Book.findByIdAndDelete(req.params.id, req.body)
    .then((book) =>
      res.json({ msg: "Book entry has successfully been deleted" })
    )
    .catch((err) =>
      res.status(404).json({ error: "Unable to delete this book" })
    );
});

module.exports = router;
