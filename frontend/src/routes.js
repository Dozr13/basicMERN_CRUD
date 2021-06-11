import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

import ViewBookList from "./components/ViewBookList";
import CreateBook from "./components/CreateBook";
import UpdateBookInfo from "./components/UpdateBookInfo";
import ViewBookDetails from "./components/ViewBookDetails";

export default (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={ViewBookList} />
      <Route path='/create-book' component={CreateBook} />

      <Route path='/edit-book/:id' component={UpdateBookInfo} />
      <Route path='/show-book/:id' component={ViewBookDetails} />
    </Switch>
  </HashRouter>
);
