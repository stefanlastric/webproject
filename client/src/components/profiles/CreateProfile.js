import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import Axios from 'axios';

class CreateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      bio: '',
      genre: ''
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  createNewProfile = event => {
    event.preventDefault();
    Axios.post(
      '/profiles',
      {
        name: this.state.name,
        bio: this.state.bio,
        genre: this.state.genre
      },
      { headers: { Authorization: 'myJwtToken' } }
    )
      .then(response => {
        console.log('Profile successfully created.');
        alert('Profile successfully created.');
        this.props.history.push('/profiles');
      })
      .catch(error => {
        console.log(error.response);
      })
      .finally(() => {
        console.log('Request completed.');
      });
  };

  render() {
    return (
      <div>
        <Container>
          <Row className="justify-content-center">
            <Col sm={6}>
              <Form onSubmit={this.createNewProfile}>
                <Form.Group>
                  <Form.Label>Bio:</Form.Label>
                  <Form.Control
                    bio="bio"
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Enter bio"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Year:</Form.Label>
                  <Form.Control
                    name="year"
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Enter movie year"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Genre:</Form.Label>
                  <Form.Control
                    name="genre"
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Enter movie genre"
                  />
                </Form.Group>

                <Button
                  variant="success"
                  type="submit"
                  onClick={this.createNewProfile}
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default CreateProfile;
