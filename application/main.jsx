import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from '../routes/index.jsx';
import configureStore from './configureStore.jsx';

if (typeof window !== 'undefined' && window.document) require('./main.scss');

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('wrapper')
);