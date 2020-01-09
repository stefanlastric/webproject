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

class ListMovies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      isLoading: true
    };
  }

  /* Use the lifecycle method to fetch relevant data */
  componentDidMount = () => {
    Axios.get('/movies')
      .then(response => {
        /* Use response.data to access the actual data */
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        /* Use error to get the error message, or error.response(.data) to get all data returned with the error. */
        console.log(error.response);
      })
      .finally(() => {
        /* finally() executes at the end of the request, regardless if it succeeded or not */
        console.log('movies been retrieved.');
        this.setState({
          isLoading: false
        });
      });
  };

  render() {
    return (
      <div>
        <h2>Movie list</h2>
        {
          <div>
            {
              <CardColumns>
                {this.state.movies.map(movies => (
                  <Card style={{ width: '18rem', margin: '1rem' }}>
                    <Card.Img variant="top" src={movies.image} />
                    <Card.Body>
                      <Card.Title>{movies.name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        <b>Year: </b>
                        {movies.year}
                      </ListGroupItem>
                      <ListGroupItem>
                        <b>Genre: </b>
                        {movies.genre}
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

export default ListMovies;
