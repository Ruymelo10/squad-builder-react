import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Routes } from './routes/routes';
import { Provider } from 'react-redux';
import store from './container/store/store';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
