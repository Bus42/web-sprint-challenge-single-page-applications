import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Pizza from "./components/Pizza";

const App = () => {
  return (
    <div id="app">
      <Router>
        <Switch>
          <Route path="/pizza">
            <Pizza />
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
