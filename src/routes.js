import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/home/home-page';
import AboutPage from './components/about/about-page';
import GamesPage from './components/games/games-page'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="games" component={GamesPage} />
  </Route>
);