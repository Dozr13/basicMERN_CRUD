import React, { useContext, useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import { BookContext } from "../context/BookContext";

const ViewBookList = (props) => {
  const bookCtx = useContext(BookContext);

  const [bookShown, setBookShown] = useState([]);

  useEffect(() => {
    bookCtx.readBookList(bookShown.id);
    console.log(bookShown);
  }, []);

  useEffect(() => {
    setBookShown(bookCtx.books.data);
  }, [bookCtx.books]);

  // console.log("PrintBook: " + bookShown);
  let bookList;

  if (!bookShown) {
    bookList = "there is no book record!";
  } else {
    bookList = bookShown.map((book, k) => <BookCard book={book} key={k} />);
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
