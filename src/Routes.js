import React, { useContext } from 'react';
import { UserContext } from './context';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Home from './Home';

import Authentication from './Authentication/index';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/(|home)/" exact component={Home} />
        <Route path="/auth" component={Authentication} />

        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
};
export default Routes;
