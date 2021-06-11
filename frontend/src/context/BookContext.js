import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const BookContext = createContext(null);

export const BookProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [singleBook, setSingleBook] = useState({});

  const { push } = useHistory();

  // Create a new book in DB
  const createBook = (
    title,
    isbn,
    author,
    description,
    published_date,
    publisher
  ) => {
    axios
      .post("http://localhost:5000/api/books", {
        title,
        isbn,
        author,
        description,
        published_date,
        publisher,
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
        setBooks(res);
      })
      .catch((err) => console.log("Error in Context.readBookList", err));
  };

  // Read Book in DB by id
  const readSingleBookInfo = (id) => {
    console.log(singleBook);
    axios
      .get(`http://localhost:5000/api/books/${id}`)
      .then((res) => {
        setSingleBook(res.data);
      })
      .catch((err) => console.log("Error in Context.readSingleBookInfo", err));
  };

  // Update Book Information
  const updateBook = (book_id) => {
    axios
      .put(`http://localhost:5000/api/${book_id}`)
      .then(({ data }) => {
        setSingleBook(...books, data);
      })
      .catch((err) => console.log("Error in Context.updateBook", err));
  };

  // Delete a book from DB
  const deleteBook = (id) => {
    axios
      .delete(`http://localhost:5000/api/books/${id}`)
      .then((res) => {
        console.log(id);
        push("/");
      })
      .catch((err) => console.log("Error in Context.deleteBook", err));
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
