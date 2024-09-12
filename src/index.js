import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Store";
import thunk from "redux-thunk";
import GlobalStyle from "./Styles/GlobalStyle";
import theme from "./Styles/theme";
import { ThemeProvider } from "styled-components";
import "@fortawesome/fontawesome-free/js/all.js";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
