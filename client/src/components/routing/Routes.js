import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import NotFound from '../layout/ErrorPage';
import AddActor from '../layout/AddActor';
import AddMovie from '../layout/AddMovie';
import ShowSingleActor from '../layout/ShowSingleActor';
import ListActors from '../layout/ListActors';
import ListMovies from '../layout/ListMovies';
import ShowSingleMovie from '../layout/ShowSingleMovie';

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route private path="/actors/add" component={AddActor} />
        <Route path="/actors/:id" component={ShowSingleActor} />
        <Route path="/actors" component={ListActors} />
        <Route private path="/movies/add" component={AddMovie} />
        <Route path="/movies/:id" component={ShowSingleMovie} />
        <Route path="/movies" component={ListMovies} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};
export default Routes;
