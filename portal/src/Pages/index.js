import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "Pages/Home";
import Login from "Pages/Login";
import Signup from "Pages/Signup";
import AddHotel from "Pages/AddHotel";

class Root extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/AddHotel" component={AddHotel} />
        </Switch>
      </Router>
    );
  }
}
export default Root;
