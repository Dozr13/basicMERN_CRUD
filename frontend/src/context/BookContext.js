import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

export const BookContext = createContext(null);

export const BookProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [singleBook, setSingleBook] = useState([]);

  const push = useHistory();

  // Create a new book in DB
  const createBook = (
    book_title,
    book_isbn,
    book_author,
    book_description,
    book_published_date,
    book_publisher
  ) => {
    axios
      .post("http://localhost:5000/api/books", {
        book_title,
        book_isbn,
        book_author,
        book_description,
        book_published_date,
        book_publisher,
      })
      .then(({ data }) => {
        console.log(data);
        setSingleBook(data);
        push("/");
      })
      .catch((err) => console.log("Error in Context.createBook", err));
  };

  // Read List of books in DB
  const readBookList = () => {
    axios
      .get("http://localhost:5000/api/books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log("Error in Context.readBookList"));
  };

  // Read Book in DB by id
  const readSingleBookInfo = (book_id) => {
    axios
      .get(`http://localhost:5000/api/books/${book_id}`)
      .then((res) => {
        setSingleBook(res.data);
      })
      .catch((err) => console.log("Error in Context.readBookInfo"));
  };

  // Update Book Information
  const updateBook = (book_id) => {
    axios
      .put(`http://localhost:5000/api/${book_id}`)
      .then(({ data }) => {
        setSingleBook(...books, data);
      })
      .catch((err) => console.log("Error in Context.updateBook"));
  };

  // Delete a book from DB
  const deleteBook = (book_id) => {
    axios
      .delete(`http://localhost:500/api/${book_id}`)
      .then((res) => {
        push("/");
      })
      .catch((err) => console.log("Error in Context.deleteBook"));
  };

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        singleBook,
        setSingleBook,
        createBook,
        readBookList,
        readSingleBookInfo,
        updateBook,
        deleteBook,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};
