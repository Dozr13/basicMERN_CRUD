import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const BookContext = createContext(null);

export const BookProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [bookValues, setBookValues] = useState({
    title: "",
    author: "",
    description: "",
    publisher: "",
    published_date: "",
    isbn: "",
  });
  const { push } = useHistory();

  const createBook = (
    title,
    author,
    description,
    publisher,
    published_date,
    isbn
  ) => {
    axios
      .post("http://localhost:5000/api/books", {
        title,
        author,
        description,
        publisher,
        published_date,
        isbn,
      })
      .then(({ data }) => {
        setBookValues(data);
        push("/");
      })
      .catch((err) => console.log("Error in Context.createBook", err));
  };

  const readBookList = () => {
    axios
      .get("http://localhost:5000/api/books")
      .then((res) => {
        setBooks(res);
      })
      .catch((err) => console.log("Error in Context.readBookList", err));
  };

  const readSingleBookInfo = (id) => {
    axios
      .get(`http://localhost:5000/api/books/${id}`)
      .then((res) => {
        setBookValues(res.data);
      })
      .catch((err) => console.log("Error in Context.readSingleBookInfo", err));
  };

  const updateBook = (id, data) => {
    axios
      .put(`http://localhost:5000/api/books/${id}`, { data })
      .then((res) => {
        push(`/show-book/${id}`);
      })
      .catch((err) => console.log("Error in Context.updateBook", err));
  };

  const deleteBook = (id) => {
    axios
      .delete(`http://localhost:5000/api/books/${id}`)
      .then((res) => {
        push("/");
      })
      .catch((err) => console.log("Error in Context.deleteBook", err));
  };

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        bookValues,
        setBookValues,
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
