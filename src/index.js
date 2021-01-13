import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import '@fortawesome/fontawesome-free/js/all';
import '../src/Styles/reset.scss';
import '../src/Styles/common.scss';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
