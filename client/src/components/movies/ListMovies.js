import React, { Component } from 'react';

/* Asynchronous HTTP library */
import Axios from 'axios';
import {
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  CardColumns,
  Row,
  Col
} from 'react-bootstrap';

import { deleteMovie } from '../../actions/movie';
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
    const { movies } = this.state;
    console.log(this.props);
    return (
      <Row>
        <Col sm={0}>
          <div>
            <h2 className="budinasredini">Movie list</h2>
            {
              <div>
                {
                  <CardColumns>
                    {movies.map((movie, index) => {
                      return (
                        <Card
                          key={index}
                          style={{ width: '18rem', margin: '1rem' }}
                        >
                          <Card.Img variant="top" src={movie.image} />
                          <Card.Body>
                            <Card.Title>{movie.name}</Card.Title>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroupItem>
                              <b>Year: </b>
                              {movie.year}
                            </ListGroupItem>
                            <ListGroupItem>
                              <b>Genre: </b>
                              {movie.genre}
                            </ListGroupItem>
                          </ListGroup>
                          <Button
                            variant="danger"
                            onClick={() => deleteMovie(index)}
                          >
                            Delete Movie
                          </Button>
                        </Card>
                      );
                    })}
                  </CardColumns>
                }
              </div>
            }
          </div>
        </Col>
      </Row>
    );
  }
}

export default ListMovies;
