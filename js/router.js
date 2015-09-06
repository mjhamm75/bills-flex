require('./../sass/app.scss');

import React from 'react';
import { Router, Route, Link } from 'react-router';
import { history } from 'react-router/lib/HashHistory';
import fetch from 'isomorphic-fetch';

import Main from './components/main.js';
var Bills = require('./components/bills.js');
import About from './components/about.js';

React.render((
  <Router history={history}>
    <Route path="/" component={Main}>
      <Route path="bills" component={Bills}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>
), document.body);