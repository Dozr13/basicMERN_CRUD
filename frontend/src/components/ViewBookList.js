import React, { useState, useContext, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import { BookContext } from "../context/BookContext";

const ViewBookList = (props) => {
  const [booksShown, setBooksShown] = useState([]);

  const bookCtx = useContext(BookContext);

  useEffect(() => {
    bookCtx.readBookList();
    setBooksShown(bookCtx.books.data);
  }, []);

  // console.log("PrintBook: " + booksShown);
  let bookList;

  if (!booksShown) {
    bookList = "there is no book record!";
  } else {
    bookList = booksShown.map((book, k) => <BookCard book={book} key={k} />);
  }

  return (
    <div className='ShowBookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Books List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-book'
              className='btn btn-outline-warning float-right'
            >
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{bookList}</div>
      </div>
    </div>
  );
};

export default ViewBookList;
