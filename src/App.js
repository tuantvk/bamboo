import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import routes from './routes';

import Project from './containers/Project';
import Report from './containers/Report';
import NotFound from './containers/NotFound';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Project />
        </Route>
        <Route path={routes.PROJECT}>
          <Project />
        </Route>
        <Route path={routes.REPORT}>
          <Report />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
};

export default App;