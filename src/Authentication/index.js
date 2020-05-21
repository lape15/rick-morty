import React from 'react'
import { Route } from 'react-router-dom'
import SignUp from './SignUp/index'
const Authentication = () => {
  return (
    <div className="text-white   h-auto sign-in">
      <Route path="/signup" exact component={SignUp} />
    </div>
  )
}

export default Authentication
