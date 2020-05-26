import React, { useContext } from 'react';

import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../context';
import SignUp from './SignUp/index';
import Login from './SignIn/index';
const Authentication = () => {
  const user = useContext(UserContext);
  // console.log(user);
  if (user) {
    return <Redirect to="/dashboard/characters" />;
  }
  return (
    <div className="text-white   h-auto sign-in">
      <Route path="/auth" exact render={(props) => <Login {...props} />} />
      <Route path="/auth/signup" exact component={SignUp} />
    </div>
  );
};

export default Authentication;
