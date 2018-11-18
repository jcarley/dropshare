import React from 'react';
import { Switch, Route } from 'react-router';
import routes from '../constants/routes.json';
import App from './App';
import HomePage from './HomePage';
import CounterPage from './CounterPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
