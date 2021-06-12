import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import { Link } from "react-router-dom";

import "../App.css";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [published_date, setPublished_date] = useState("");
  const [publisher, setPublisher] = useState("");

  const bookCtx = useContext(BookContext);

  const createBookOnSubmit = (e) => {
    e.preventDefault();

    bookCtx.createBook(
      title,
      isbn,
      author,
      description,
      published_date,
      publisher
    );
  };

  return (
    <div className='CreateBook'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Book List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h4 className='display-4 text-center'>Add Book</h4>
            <p className='lead text-center'>Create New Book</p>
            <form noValidate onSubmit={createBookOnSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Title of the Book'
                  name='title'
                  className='form-control'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='ISBN'
                  name='isbn'
                  className='form-control'
                  value={isbn}
                  onChange={(e) => setIsbn(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Author'
                  name='author'
                  className='form-control'
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Describe this book'
                  name='description'
                  className='form-control'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <input
                  type='date'
                  placeholder='published_date'
                  name='published_date'
                  className='form-control'
                  value={published_date}
                  onChange={(e) => setPublished_date(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Publisher of this Book'
                  name='publisher'
                  className='form-control'
                  value={publisher}
                  onChange={(e) => setPublisher(e.target.value)}
                />
              </div>

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
