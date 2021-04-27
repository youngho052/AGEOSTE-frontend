import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Product from "./Pages/Product/Product";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Myprofile from "./Pages/Myprofile/Myprofile";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login.jsx";
import Myprofiletest from "./Pages/Myprofile/Myprofile.jsx";

function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/product/" component={Product} />
        <Route exact path="/product/detail/:id" component={ProductDetail} />
        <Route exact path="/myprofile" component={Myprofile} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/profiletest" component={Myprofiletest} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
