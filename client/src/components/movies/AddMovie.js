import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import Axios from 'axios';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      year: '',
      genre: ''
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNewMovies = event => {
    event.preventDefault();
    Axios.post(
      '/movies',
      { name: this.state.name, year: this.state.year, genre: this.state.genre },
      { headers: { Authorization: 'myJwtToken' } }
    )
      .then(response => {
        console.log('Movie successfully added.');
        alert('Movie successfully added.');
        this.props.history.push('/movies');
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
              <Form onSubmit={this.addNewProduct}>
                <Form.Group>
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    name="name"
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Enter movie name"
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
                  onClick={this.addNewMovies}
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
export default AddMovie;
