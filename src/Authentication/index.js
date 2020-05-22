import React from 'react'
import { Route } from 'react-router-dom'
import SignUp from './SignUp/index'
import Login from './SignIn/index'
const Authentication = () => {
  return (
    <div className="text-white   h-auto sign-in">
      <Route path="/auth" exact render={(props) => <Login {...props} />} />
      <Route path="/auth/signup" exact component={SignUp} />
    </div>
  )
}

export default Authentication
