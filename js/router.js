require('./../sass/app.scss');

import React from 'react';
import { Router, Route, Link } from 'react-router';
import { history } from 'react-router/lib/HashHistory';
import fetch from 'isomorphic-fetch';

var Main = require('./components/main.js');
var Bills = require('./components/bills.js');
var About = require('./components/about.js');

fetch('http://swapi.co/api/people/1')

React.render((
  <Router history={history}>
    <Route path="/" component={Main}>
      <Route path="bills" component={Bills}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>
), document.body);