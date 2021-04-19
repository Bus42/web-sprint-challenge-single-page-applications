import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";

const submit = (order) => {
  console.log(order);
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
