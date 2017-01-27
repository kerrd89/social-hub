import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './App';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={App}/>
      <Route path="/:uid" component={App}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
