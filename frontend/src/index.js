import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { HashRouter, BrowserRouter } from "react-router-dom";

import "./index.css";
import { BookProvider } from "./context/BookContext";

const Router =
  process.env.NODE_ENV === "development" ? HashRouter : BrowserRouter;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BookProvider>
        <App />
      </BookProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
