import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'Pages/Home';
import Login from 'Pages/Login';

//Admin componotes
import AdminLogin from 'Pages/Admin/Login'
import AdminSignup from 'Pages/Admin/Signup'
class Root extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/Admin/login' component={AdminLogin} />
          <Route exact path='/Admin/signup' component={AdminSignup} />
        </Switch>
      </Router>
    );
  }
}
export default Root;
