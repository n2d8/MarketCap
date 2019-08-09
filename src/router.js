import React from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import App from './components/App';
import NotFound from './components/NotFound';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact path="/"
          component={App} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
