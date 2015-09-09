require('./../sass/app.scss');

import React from 'react';
import { Router, Route, Link } from 'react-router';
import { history } from 'react-router/lib/HashHistory';
import fetch from 'isomorphic-fetch';

import Main from './components/main.js';
var BillsContainer = require('./components/bills.container.js');
var PayoffsContainer = require('./components/payoffs.container.js');
import About from './components/about.js';

React.render((
  <Router history={history}>
    <Route path="/" component={Main}>
      <Route path="bills" component={BillsContainer}/>
      <Route path="payoff" component={PayoffsContainer}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>
), document.body);