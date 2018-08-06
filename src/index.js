import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import NewPage from './components/NewPage';

import './index.css';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/another' component={NewPage} />
      </div>
  </Router>,
  document.getElementById('root')
);