import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

export const AppNavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLink = (
    <Nav className="ml-auto">
      <Nav.Link
        activeStyle={{ color: '#ED5035' }}
        as={NavLink}
        exact
        to="/actors/add"
      >
        Add New Actor
      </Nav.Link>
      <Nav.Link
        activeStyle={{ color: '#ED5035' }}
        as={NavLink}
        exact
        to="/movies/add"
      >
        Add New Movie
      </Nav.Link>
      <Nav.Item>
        <Nav.Link to="/profiles" exact as={NavLink}>
          Profile
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={logout} href="#!">
          Logout
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );

  const guestLinks = (
    <Nav className="ml-auto">
      <Nav.Item>
        <Nav.Link to="/register" exact as={NavLink}>
          Register
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/login" exact as={NavLink}>
          Login
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );

  return (
    <Navbar bg="light" expand="lg">
      <Nav>
        <Navbar.Brand to="/" exact as={NavLink}>
          Movies.ba
        </Navbar.Brand>
        <Nav.Item>
          {' '}
          <Nav.Link to="/" exact as={NavLink}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {' '}
          <Nav.Link to="/movies" exact as={NavLink}>
            Movies
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {' '}
          <Nav.Link to="/category" exact as={NavLink}>
            Category
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {' '}
          <Nav.Link to="/actors" exact as={NavLink}>
            Actors
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav>
        <Nav.Item>
          <Form inline className="justify-content-center">
            <FormControl type="text" placeholder="Search" className="ml-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Nav.Item>
      </Nav>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {!loading && (
          <Fragment>{isAuthenticated ? authLink : guestLinks}</Fragment>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

AppNavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(AppNavBar);
