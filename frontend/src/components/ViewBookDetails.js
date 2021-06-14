import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { BookContext } from "../context/BookContext";

const ViewBookDetails = (props) => {
  const bookCtx = useContext(BookContext);
  const id = props.match.params.id;

  const [book, setBook] = useState(bookCtx.bookValues);

  useEffect(() => {
    bookCtx.readSingleBookInfo(id);
  }, []);

  useEffect(() => {
    setBook(bookCtx.bookValues);
  }, [bookCtx.bookValues]);

  const onDeleteClick = (id) => {
    bookCtx.deleteBook(id);
  };

  let BookItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Title</td>
            <td>{bookCtx.bookValues.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Author</td>
            <td>{bookCtx.bookValues.author}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>ISBN</td>
            <td>{bookCtx.bookValues.isbn}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Publisher</td>
            <td>{bookCtx.bookValues.publisher}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Published Date</td>
            <td>{bookCtx.bookValues.published_date}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Description</td>
            <td>{bookCtx.bookValues.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowBookDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Book List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Book's Record</h1>
            <p className='lead text-center'>View Book's Info</p>
            <hr /> <br />
          </div>
        </div>
        <div>{BookItem}</div>

        <div className='row'>
          <div className='col-md-6'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => onDeleteClick(book._id)}
            >
              Delete Book
            </button>
            <br />
          </div>

          <div className='col-md-6'>
            <Link
              to={`/edit-book/${bookCtx.bookValues._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Book
            </Link>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBookDetails;
