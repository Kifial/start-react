import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root/index.jsx';
import configureStore from './configureStore.jsx';

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('wrapper')
);