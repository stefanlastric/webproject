import React, { Fragment, useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <Form onSubmit={e => onSubmit(e)}>
        <Form.Group controlId='formGridName'>
          login
          <Form.Label>Name and Surname</Form.Label>
          <Form.Control
            value={name}
            name='name'
            onChange={e => onChange(e)}
            placeholder='Enter your name and surname'
          />
        </Form.Group>

        <Form.Group controlId='formGridEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            name='email'
            onChange={e => onChange(e)}
            type='email'
            placeholder='Enter email'
          />
        </Form.Group>

        <Form.Group controlId='formGridPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            name='password'
            onChange={e => onChange(e)}
            type='password'
            placeholder='Password'
          />
        </Form.Group>

        <Form.Group controlId='formGridPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password2}
            name='password2'
            onChange={e => onChange(e)}
            type='password'
            placeholder='Password'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

export default Register;
