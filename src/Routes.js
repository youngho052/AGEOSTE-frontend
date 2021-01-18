import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main';
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetail from './Pages/ProductDetail/ProductDetail';




class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/product_list' component={ProductList} />
          <Route exact path='/product_detail' component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
