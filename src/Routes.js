import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main';
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Myprofile from './Pages/Myprofile/Myprofile';
import Signup from './Pages/Signup/Signup';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/login' component={Login} />
<<<<<<< HEAD
          <Route exact path='/product/' component={Product} />
          <Route exact path="/product/detail/:id" component={ProductDetail} />
=======
          <Route exact path='/myprofile' component={Myprofile} />
          {/* <Route exact path='/product' component={Product} /> */}
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/main' component={Main} />
          <Route exact path='/product_list' component={ProductList} />
          <Route exact path='/product_detail' component={ProductDetail} />
>>>>>>> main
        </Switch>
      </Router>
    );
  }
}

export default Routes;
