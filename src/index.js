import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router, Route, browserHistory } from 'react-router';

import App from './App';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/:alias" component={App} />
  </Router>,
  document.getElementById('root')
);
