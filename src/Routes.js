import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main';

import Product from './Pages/Product/Product';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Myprofile from './Pages/Myprofile/Myprofile';
import Signup from './Pages/Signup/Signup';


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/product/' component={Product} />
          <Route exact path="/product/detail/:id" component={ProductDetail} />
          <Route exact path='/myprofile' component={Myprofile} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/main' component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
