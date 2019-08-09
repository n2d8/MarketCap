import React from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';

import App from './components/App';
import NotFound from './components/NotFound';

const AppRouter = () => {
  return (
    <Router>
      <Route
        exact path="/"
        component={App} />
      <Route component={NotFound} />
    </Router>
  );
};

export default AppRouter;
