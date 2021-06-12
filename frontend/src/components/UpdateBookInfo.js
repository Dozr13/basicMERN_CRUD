import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { BookContext } from "../context/BookContext";

const UpdateBookInfo = (props) => {
  const bookCtx = useContext(BookContext);
  const id = props.match.params.id;

  const selectedBook = bookCtx.singleBook;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [publisher, setPublisher] = useState("");
  const [published_date, setPublished_date] = useState("");
  const [isbn, setIsbn] = useState("");

  // const [values, setValues] = useState({
  //   title: "",
  //   isbn: "",
  //   author: "",
  //   description: "",
  //   published_date: "",
  //   publisher: "",
  // });

  useEffect(() => {
    bookCtx.readSingleBookInfo(id);
  }, []);

  useEffect(() => {
    console.log(bookCtx.singleBook);
    setTitle(title);
    setAuthor(author);
    setDescription(description);
    setPublisher(publisher);
    setPublished_date(published_date);
    setIsbn(isbn);
  }, []);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;

  //   setValues((prevVal) => ({
  //     ...prevVal,
  //     [name]: value,
  //   }));
  // };

  const onSubmit = (e) => {
    bookCtx.updateBook(
      title,
      author,
      description,
      publisher,
      published_date,
      isbn,
      bookCtx.singleBook.id
    );
  };

  return (
    <div className='UpdateBookInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show BooK List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Book</h1>
            <p className='lead text-center'>Update Book's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                placeholder={selectedBook.title || "Title"}
                name='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='form-control'
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='author'>Author</label>
              <input
                type='text'
                placeholder={selectedBook.author || "Author"}
                name='author'
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className='form-control'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <input
                type='text'
                placeholder={selectedBook.description || "Description"}
                name='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='form-control'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='publisher'>Publisher</label>
              <input
                type='text'
                placeholder={selectedBook.publisher || "Publisher"}
                name='publisher'
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
                className='form-control'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='published_date'>Published Date</label>
              <input
                type='date'
                placeholder={selectedBook.published_date || "Published Date"}
                name='published_date'
                value={published_date}
                onChange={(e) => setPublished_date(e.target.value)}
                className='form-control'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='isbn'>ISBN</label>
              <input
                type='text'
                placeholder={selectedBook.isbn || "ISBN"}
                name='isbn'
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
                className='form-control'
              />
            </div>

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBookInfo;

// class UpdateBookInfo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//       isbn: "",
//       author: "",
//       description: "",
//       published_date: "",
//       publisher: "",
//     };
//   }

//   componentDidMount() {
//     // console.log("Print id: " + this.props.match.params.id);
//     axios
//       .get("http://localhost:5000/api/books/" + this.props.match.params.id)
//       .then((res) => {
//         // this.setState({...this.state, book: res.data})
//         this.setState({
//           title: res.data.title,
//           isbn: res.data.isbn,
//           author: res.data.author,
//           description: res.data.description,
//           published_date: res.data.published_date,
//           publisher: res.data.publisher,
//         });
//       })
//       .catch((err) => {
//         console.log("Error from UpdateBookInfo");
//       });
//   }

// onChange = (e) => {
//   this.setState({ [e.target.name]: e.target.value });
// };

// onSubmit = (e) => {
//   e.preventDefault();

//   const data = {
//     title: this.state.title,
//     isbn: this.state.isbn,
//     author: this.state.author,
//     description: this.state.description,
//     published_date: this.state.published_date,
//     publisher: this.state.publisher,
//   };

//   axios
//     .put(
//       "http://localhost:5000/api/books/" + this.props.match.params.id,
//       data
//     )
//     .then((res) => {
//       this.props.history.push("/show-book/" + this.props.match.params.id);
//     })
//     .catch((err) => {
//       console.log("Error in UpdateBookInfo!");
//     });
// };

//   render() {
// return (
//   <div className='UpdateBookInfo'>
//     <div className='container'>
//       <div className='row'>
//         <div className='col-md-8 m-auto'>
//           <br />
//           <Link to='/' className='btn btn-outline-warning float-left'>
//             Show BooK List
//           </Link>
//         </div>
//         <div className='col-md-8 m-auto'>
//           <h1 className='display-4 text-center'>Edit Book</h1>
//           <p className='lead text-center'>Update Book's Info</p>
//         </div>
//       </div>

//       <div className='col-md-8 m-auto'>
//         <form noValidate onSubmit={this.onSubmit}>
//           <div className='form-group'>
//             <label htmlFor='title'>Title</label>
//             <input
//               type='text'
//               placeholder='Title of the Book'
//               name='title'
//               className='form-control'
//               value={this.state.title}
//               onChange={this.onChange}
//             />
//           </div>
//           <br />

//           <div className='form-group'>
//             <label htmlFor='isbn'>ISBN</label>
//             <input
//               type='text'
//               placeholder='ISBN'
//               name='isbn'
//               className='form-control'
//               value={this.state.isbn}
//               onChange={this.onChange}
//             />
//           </div>

//           <div className='form-group'>
//             <label htmlFor='author'>Author</label>
//             <input
//               type='text'
//               placeholder='Author'
//               name='author'
//               className='form-control'
//               value={this.state.author}
//               onChange={this.onChange}
//             />
//           </div>

//           <div className='form-group'>
//             <label htmlFor='description'>Description</label>
//             <input
//               type='text'
//               placeholder='Describe this book'
//               name='description'
//               className='form-control'
//               value={this.state.description}
//               onChange={this.onChange}
//             />
//           </div>

//           <div className='form-group'>
//             <label htmlFor='published_date'>Published Date</label>
//             <input
//               type='date'
//               placeholder='published_date'
//               name='published_date'
//               className='form-control'
//               value={this.state.published_date}
//               onChange={this.onChange}
//             />
//           </div>
//           <div className='form-group'>
//             <label htmlFor='publisher'>Publisher</label>
//             <input
//               type='text'
//               placeholder='Publisher of this Book'
//               name='publisher'
//               className='form-control'
//               value={this.state.publisher}
//               onChange={this.onChange}
//             />
//           </div>

//           <button
//             type='submit'
//             className='btn btn-outline-info btn-lg btn-block'
//           >
//             Update Book
//           </button>
//         </form>
//       </div>
//     </div>
//   </div>
// );
//   }
// }

// export default UpdateBookInfo;
