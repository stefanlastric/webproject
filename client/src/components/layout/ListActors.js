import React, { Component } from 'react';

/* Asynchronous HTTP library */
import Axios from 'axios';
import {
  ListGroup,
  Card,
  ListGroupItem,
  CardColumns,
  Button
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class ListActors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actors: [],
      isLoading: true
    };
  }

  /* Use the lifecycle method to fetch relevant data */
  componentDidMount = () => {
    Axios.get('/actors')
      .then(response => {
        /* Use response.data to access the actual data */
        this.setState({
          actors: response.data
        });
      })
      .catch(error => {
        /* Use error to get the error message, or error.response(.data) to get all data returned with the error. */
        console.log(error.response);
      })
      .finally(() => {
        /* finally() executes at the end of the request, regardless if it succeeded or not */
        console.log('actors been retrieved.');
        this.setState({
          isLoading: false
        });
      });
  };

  render() {
    return (
      <div>
        <h2>Actor list</h2>
        {
          <div>
            {
              <CardColumns>
                {this.state.actors.map(actors => (
                  <Card style={{ width: '18rem', margin: '1rem' }}>
                    <Card.Img variant="top" src={actors.image} />
                    <Card.Body>
                      <Card.Title>{actors.name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        <b>Age: </b>
                        {actors.age}
                      </ListGroupItem>
                      <ListGroupItem>
                        <b>From: </b>
                        {actors.from}
                      </ListGroupItem>
                    </ListGroup>
                  </Card>
                ))}
              </CardColumns>
            }
          </div>
        }
      </div>
    );
  }
}

export default ListActors;
