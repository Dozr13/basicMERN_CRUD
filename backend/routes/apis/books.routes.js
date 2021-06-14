const express = require("express");
const router = express.Router();

const Book = require("../../models/Book");

router.get("/test", (req, res) => res.send("book route testing!"));

router.post("/", (req, res) => {
  Book.create(req.body)
    .then((book) => res.json({ msg: "Book added successfully!" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this book.", err })
    );
});

router.get("/", (req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) =>
      res.status(400).json({ noBooksFound: "No Books Found", err })
    );
});

router.get("/:id", (req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) =>
      res
        .status(404)
        .json({ noBookFound: "No Book found matching that id", err })
    );
});

router.put("/:id", (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then((book) => res.json({ msg: `Updated ${book.title}  successfully!` }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update this book", err })
    );
});

router.delete("/:id", (req, res) => {
  Book.findByIdAndDelete(req.params.id, req.body)
    .then((book) =>
      res.json({ msg: `Book entry ${book} has successfully been deleted` })
    )
    .catch((err) =>
      res.status(404).json({ error: "Unable to delete this book" })
    );
});

module.exports = router;
