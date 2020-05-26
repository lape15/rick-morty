import React, { useContext } from 'react';

import Characters from './Characters';
import { UserContext } from '../context';
import { Switch, Route, Redirect } from 'react-router-dom';
const Dashboard = () => {
  const user = useContext(UserContext);
  let page;
  if (user) {
    page = (
      <>
        <Route path="/dashboard/characters" exact component={Characters} />
      </>
    );
  } else {
    return <Redirect to="/auth" />;
  }
  return <div>{page}</div>;
};
export default Dashboard;
