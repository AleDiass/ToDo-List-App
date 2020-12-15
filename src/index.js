import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './GlobalStyle';
import Router from './Router/Router';

ReactDOM.render(
  <React.StrictMode>
    <Router/>
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);

