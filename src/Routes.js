import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Characters from './Components/Characters'
import Authentication from './Authentication/index'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/(|home)/" exact component={Home} />
        <Route path="/auth" component={Authentication} />
        <Route path="/characters" exact component={Characters} />
      </Switch>
    </div>
  )
}
export default Routes
