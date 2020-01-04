import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';

const Routes = () => {
  return (
    <section className='container'>
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </section>
  );
};
export default Routes;
