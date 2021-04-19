import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Form from "./components/Form";

const url = "https://reqres.in/api/users";

const submit = (order) => {
  axios.post(url, order).then((res) => {
    console.log(res.data);
  });
};

const App = () => {
  return (
    <div id="app">
      <Router>
        <Switch>
          <Route path="/pizza">
            <Form submit={submit} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
