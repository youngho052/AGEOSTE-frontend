import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Store";
import thunk from "redux-thunk";
import "./Styles/common.scss";
import "./Styles/reset.scss";
import "@fortawesome/fontawesome-free/js/all.js";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
