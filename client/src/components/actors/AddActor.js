import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

import Axios from 'axios';
import './AddActor.css';
class AddActor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      from: '',
      age: ''
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNewActors = event => {
    event.preventDefault();
    Axios.post(
      '/actors',
      { name: this.state.name, from: this.state.from, age: this.state.age },
      { headers: { Authorization: 'myJwtToken' } }
    )
      .then(response => {
        console.log('Actor successfully added.');
        alert('Actor successfully added.');
        this.props.history.push('/actors');
      })
      .catch(error => {
        console.log(error.response);
      })
      .finally(() => {
        console.log('Request completed.');
      });
  };

  render() {
    console.log(this.props);
    return (
      <div className="add-actor">
        <Form onSubmit={this.addNewProduct}>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              name="name"
              onChange={this.handleChange}
              type="text"
              placeholder="Enter actor name"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>From:</Form.Label>
            <Form.Control
              name="from"
              onChange={this.handleChange}
              type="text"
              placeholder="Where is this actor from?"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Age:</Form.Label>
            <Form.Control
              name="age"
              onChange={this.handleChange}
              type="text"
              placeholder="Enter actor age"
            />
          </Form.Group>

          <Button variant="success" type="submit" onClick={this.addNewActors}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default AddActor;
