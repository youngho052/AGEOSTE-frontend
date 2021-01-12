import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/common.scss';
import './Styles/reset.scss';
import '@fortawesome/fontawesome-free/js/all';

import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
