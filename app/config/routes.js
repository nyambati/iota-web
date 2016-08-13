import React from 'react';
import Main from '../components/main.js';
import Home from '../components/home.js';


import { Router, Route, IndexRoute } from 'react-router';

export default(
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
  </Route>
)