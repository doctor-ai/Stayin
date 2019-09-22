import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'Pages/Home';
import Login from 'Pages/Login';
import Singup from 'Pages/Signup';
import SellerLogin from 'Pages/SellerLogin';
import SellerSignup from 'Pages/SellerSignup';
import HotelRegistration from 'Pages/HotelRegistration';
import HotelRooms from 'Pages/HotelRoom';
import Admin from 'Pages/Admin';

class Root extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Singup} />
          <Route exact path='/admin/login' component={SellerLogin} />
          <Route exact path='/admin/signup' component={SellerSignup} />
          <Route exact path='/admin/addhotel' component={HotelRegistration} />
          <Route exact path='/room' component={HotelRooms} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </Router>
    );
  }
}
export default Root;
