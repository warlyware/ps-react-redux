import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/home/home';
import AboutPage from './components/about/about';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);