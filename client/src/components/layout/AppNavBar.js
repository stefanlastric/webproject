import React from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown
} from 'react-bootstrap';
import { NavLink, Link, withRouter } from 'react-router-dom';

const AppNavBar = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#home'>Movies.ba</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#movies'>Movies</Nav.Link>
          <Nav.Link href='#actors'>Actors</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-success'>Search</Button>
        </Form>
        <Nav className='ml-auto'>
          <Nav.Link href='#login'>Login</Nav.Link>
          <Nav.Link href='#register'>Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default AppNavBar;
