import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import NotFound from '../layout/ErrorPage';
import AddActor from '../actors/AddActor';
import AddMovie from '../movies/AddMovie';
import ListActors from '../actors/ListActors';
import ListMovies from '../movies/ListMovies';
import ListProfiles from '../profiles/ListProfiles';
import CreateProfile from '../profiles/CreateProfile';

class Routes extends React.Component {
  render() {
    console.log(this.props);
    const { isAuthenticated } = this.props;
    return (
      <section className="container">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profiles/add" component={CreateProfile} />
          {isAuthenticated && (
            <Route private path="/actors/add" component={AddActor} />
          )}
          <Route exact path="/actors" component={ListActors} />
          {isAuthenticated && (
            <Route private path="/movies/add" component={AddMovie} />
          )}
          <Route exact path="/movies" component={ListMovies} />
          {isAuthenticated && (
            <Route private path="/profiles" component={ListProfiles} />
          )}
          {isAuthenticated && (
            <Route private path="/movies/add" component={AddMovie} />
          )}
          <Route component={NotFound} />
        </Switch>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Routes);
